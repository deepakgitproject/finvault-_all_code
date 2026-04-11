import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, timeout, catchError, throwError, map, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private readonly http = inject(HttpClient);
  private readonly authService = inject(AuthService);
  private readonly apiUrl = environment.apiUrl;

  /**
   * Fetch the first unpaid/pending bill for the given card.
   * If NO bills exist at all, auto-generate one and return its ID.
   */
  private fetchBillIdForCard(userId: string, cardId: string, amount: number): Observable<string> {
    return this.http.get<any>(`${this.apiUrl}/api/billing/bills/user/${userId}`).pipe(
      switchMap(res => {
        const bills = Array.isArray(res) ? res : (res?.data ?? []);
        console.log('[PaymentService] Bills fetched for user:', bills.length);

        // Case-insensitive GUID matching
        const normalize = (id: string) => (id || '').toLowerCase().replace(/-/g, '');
        const normalizedCardId = normalize(cardId);

        // Try to find a bill matching this cardId
        const cardBills = bills.filter((b: any) => normalize(b.cardId) === normalizedCardId);
        // Only use unpaid/pending bills — never pay against an already-paid bill
        const unpaid = cardBills.filter((b: any) =>
          b.status?.toLowerCase() !== 'paid'
        );

        if (unpaid.length > 0) {
          const bill = unpaid[0];
          console.log('[PaymentService] Using existing billId:', bill.id, 'status:', bill.status);
          return of(bill.id as string);
        }

        // All bills are paid -> auto-generate a new one for the next available month
        console.log('[PaymentService] All bills are paid. Auto-generating new bill for card:', cardId);
        return this.autoGenerateBillNextMonth(bills, userId, cardId, amount);
      }),
      timeout(8000)
    );
  }

  /**
   * Auto-generate a bill for the next available billing month.
   * Finds the latest existing billing month for the card and creates one for the month after.
   */
  private autoGenerateBillNextMonth(existingBills: any[], userId: string, cardId: string, amount: number): Observable<string> {
    // Filter bills for this card and find the latest billing month
    const normalize = (id: string) => (id || '').toLowerCase().replace(/-/g, '');
    const normalizedCardId = normalize(cardId);
    const cardBills = existingBills.filter((b: any) => normalize(b.cardId) === normalizedCardId);

    let latestMonth = new Date();
    for (const bill of cardBills) {
      if (bill.billingMonth) {
        const [y, m] = bill.billingMonth.split('-').map(Number);
        const d = new Date(y, m - 1, 1);
        if (d > latestMonth) latestMonth = d;
      }
    }

    // Go one month beyond the latest existing bill
    const billMonth = new Date(latestMonth.getFullYear(), latestMonth.getMonth() + 1, 1);
    const dueDate = new Date(billMonth.getTime() + 30 * 24 * 60 * 60 * 1000);

    // MinimumDue must be <= TotalAmount; use 5% of amount (min 1)
    const minDue = Math.min(amount, Math.max(1, Math.round(amount * 0.05)));

    const payload = {
      userId: userId,
      cardId: cardId,
      totalAmount: amount,
      minimumDue: minDue,
      dueDate: dueDate.toISOString(),
      billingMonth: `${billMonth.getFullYear()}-${String(billMonth.getMonth() + 1).padStart(2, '0')}`
    };

    console.log('[PaymentService] Auto-generating bill for next available month with payload:', payload);

    return this.http.post<any>(`${this.apiUrl}/api/billing/bills`, payload).pipe(
      map(res => {
        const billData = res?.data ?? res;
        const billId = billData?.id || billData?.Id;
        if (!billId) {
          throw new Error('Bill was created but no ID was returned.');
        }
        console.log('[PaymentService] Auto-generated billId:', billId);
        return billId;
      }),
      catchError(err => {
        console.error('[PaymentService] Failed to auto-generate next month bill:', err);
        return throwError(() => new Error('Could not generate a billing cycle. Please try again.'));
      })
    );
  }

  initiatePayment(cardId: string, amount: number, paymentType: string = 'Full', billId: string = ''): Observable<any> {
    const payload = {
      cardId: cardId,
      billId: billId,
      amount: amount,
      paymentType: paymentType
    };

    console.log('[PaymentService] Initiating payment with payload:', payload);

    return this.http.post<any>(`${this.apiUrl}/api/payments`, payload).pipe(
      timeout(5000),
      catchError(err => {
        console.error('[PaymentService] initiatePayment ERROR:', err);
        return throwError(() => err);
      })
    );
  }

  completePayment(paymentId: string): Observable<any> {
    if (!paymentId) {
      return throwError(() => new Error("Invalid Payment ID"));
    }
    console.log('[PaymentService] Completing payment ID:', paymentId);
    return this.http.put<any>(`${this.apiUrl}/api/payments/${paymentId}/complete`, {}).pipe(
      timeout(5000),
      catchError(err => {
        console.error('[PaymentService] completePayment ERROR:', err);
        return throwError(() => err);
      })
    );
  }

  /**
   * Full payment flow:
   *   1. Fetch (or auto-create) a valid billId for the card
   *   2. Initiate payment with the real billId
   *   3. Backend completes payment in the POST step itself
   */
  makePayment(cardId: string, amount: number, paymentType: string = 'Full', billId: string | null = null): Observable<any> {
    console.log('[PaymentService] makePayment called with:', { cardId, amount, paymentType, billId });
    const userId = this.authService.getUserId() || '';

    // If billId is provided, use it directly; otherwise fetch/create one
    const billId$ = billId
      ? new Observable<string>(sub => { sub.next(billId); sub.complete(); })
      : this.fetchBillIdForCard(userId, cardId, amount);

    return billId$.pipe(
      switchMap(resolvedBillId => {
        return this.initiatePayment(cardId, amount, paymentType, resolvedBillId);
      }),
      map(res => {
        console.log('[PaymentService] initiatePayment response:', res);
        // Backend completes payment in the POST step itself.
        // No need to call PUT /complete separately.
        return res?.data || res;
      }),
      timeout(10000),
      catchError(err => {
        console.error('[PaymentService] Payment flow error:', err);
        return throwError(() => err);
      })
    );
  }
}
