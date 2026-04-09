import {
  ThemeToggleComponent
} from "./chunk-AQGYU3VR.js";
import {
  SidebarComponent
} from "./chunk-JZ2MQXBK.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  HttpClient,
  catchError,
  forkJoin,
  inject,
  map,
  mergeMap,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate1,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SYL3PSAO.js";

// src/app/features/transactions/transactions.ts
var _forTrack0 = ($index, $item) => $item.id;
function TransactionsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading transactions...");
    \u0275\u0275elementEnd()();
  }
}
function TransactionsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 12);
    \u0275\u0275text(2, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "No Transactions Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "You haven't made any transactions yet.");
    \u0275\u0275elementEnd()();
  }
}
function TransactionsComponent_Conditional_14_For_16_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Analyzing...");
    \u0275\u0275elementEnd();
  }
}
function TransactionsComponent_Conditional_14_For_16_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275interpolate1("risk-badge ", txn_r1.riskBadge.colorClass));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", txn_r1.riskBadge.label, " (", txn_r1.riskBadge.score, ") ");
  }
}
function TransactionsComponent_Conditional_14_For_16_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "N/A");
    \u0275\u0275elementEnd();
  }
}
function TransactionsComponent_Conditional_14_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 16)(11, "span", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 18);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 19);
    \u0275\u0275conditionalCreate(17, TransactionsComponent_Conditional_14_For_16_Conditional_17_Template, 2, 0, "span", 20)(18, TransactionsComponent_Conditional_14_For_16_Conditional_18_Template, 3, 5, "div", 21)(19, TransactionsComponent_Conditional_14_For_16_Conditional_19_Template, 2, 0, "span", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const txn_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 11, txn_r1.createdAt, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 14, txn_r1.createdAt, "shortTime"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(txn_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("type-reversal", txn_r1.type === "Reversal");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", txn_r1.type, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-error", txn_r1.type !== "Reversal");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", txn_r1.type === "Reversal" ? "+" : "-", "Rs.", \u0275\u0275pipeBind2(15, 17, txn_r1.amount, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(txn_r1.isLoadingRisk ? 17 : txn_r1.riskBadge ? 18 : 19);
  }
}
function TransactionsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 13)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Risk Assessment");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, TransactionsComponent_Conditional_14_For_16_Template, 20, 20, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.transactions());
  }
}
var TransactionsComponent = class _TransactionsComponent {
  http = inject(HttpClient);
  transactions = signal([], ...ngDevMode ? [{ debugName: "transactions" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(true, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.loadTransactions();
  }
  loadTransactions() {
    this.isLoading.set(true);
    this.http.get("/api/transactions").pipe(map((res) => res?.data || []), mergeMap((txns) => {
      if (!txns.length)
        return of([]);
      const txnsWithRisk$ = txns.map((txn) => {
        if (txn.type === "Payment" && txn.paymentId) {
          txn.isLoadingRisk = true;
          return this.http.get(`/api/transactions/risk/${txn.paymentId}`).pipe(map((riskRes) => {
            const risk = riskRes?.data;
            if (risk) {
              txn.riskBadge = this.calculateRiskBadge(risk.score);
            }
            txn.isLoadingRisk = false;
            return txn;
          }), catchError(() => {
            txn.isLoadingRisk = false;
            return of(txn);
          }));
        }
        return of(txn);
      });
      return forkJoin(txnsWithRisk$);
    }), catchError(() => {
      return of([]);
    })).subscribe({
      next: (data) => {
        this.transactions.set(data);
        this.isLoading.set(false);
      },
      error: () => {
        this.transactions.set([]);
        this.isLoading.set(false);
      }
    });
  }
  calculateRiskBadge(score) {
    if (score <= 30) {
      return { score, label: "Low", colorClass: "badge-low" };
    } else if (score <= 60) {
      return { score, label: "Medium", colorClass: "badge-medium" };
    } else {
      return { score, label: "High", colorClass: "badge-high" };
    }
  }
  static \u0275fac = function TransactionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransactionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionsComponent, selectors: [["app-transactions"]], decls: 15, vars: 1, consts: [[1, "page-layout"], [1, "main-content"], [1, "page-header"], [1, "header-left"], [1, "page-heading"], [1, "page-desc"], [1, "header-actions"], [1, "transactions-container"], [1, "loading-state"], [1, "empty-state", "glass-card"], [1, "table-card", "glass-card"], [1, "spinner"], [1, "material-symbols-outlined", "empty-icon"], [1, "data-table"], [1, "td-date"], [1, "td-desc"], [1, "td-type"], [1, "type-pill"], [1, "td-amount", "mono"], [1, "td-risk"], [1, "loading-pulse"], [3, "class"], [1, "text-muted"], [1, "risk-dot"]], template: function TransactionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "header", 2)(4, "div", 3)(5, "h1", 4);
      \u0275\u0275text(6, "Transaction History");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, "Review your recent payments and associated risk scoring.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275element(10, "app-theme-toggle");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275conditionalCreate(12, TransactionsComponent_Conditional_12_Template, 4, 0, "div", 8)(13, TransactionsComponent_Conditional_13_Template, 7, 0, "div", 9)(14, TransactionsComponent_Conditional_14_Template, 17, 0, "div", 10);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.isLoading() ? 12 : ctx.transactions().length === 0 ? 13 : 14);
    }
  }, dependencies: [CommonModule, SidebarComponent, ThemeToggleComponent, DecimalPipe, DatePipe], styles: ["\n.page-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background-color: var(--bg-main);\n  color: var(--text-main);\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 2rem;\n  margin-left: 280px;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.page-header[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 700;\n}\n.page-header[_ngcontent-%COMP%]   .page-desc[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0 0;\n  color: var(--text-muted);\n}\n.glass-card[_ngcontent-%COMP%] {\n  background: var(--surface-light);\n  border: 1px solid var(--border-color);\n  border-radius: 1rem;\n  padding: 1.5rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: var(--text-main);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--border-color);\n  border-top-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s infinite linear;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: rgba(0, 0, 0, 0.02);\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   .td-date[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  line-height: 1.4;\n}\n.data-table[_ngcontent-%COMP%]   .td-date[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.data-table[_ngcontent-%COMP%]   .td-amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.data-table[_ngcontent-%COMP%]   .td-amount.text-error[_ngcontent-%COMP%] {\n  color: #EF4444;\n}\n.data-table[_ngcontent-%COMP%]   .type-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  background: var(--surface-hover);\n  color: var(--text-main);\n}\n.data-table[_ngcontent-%COMP%]   .type-pill.type-reversal[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #22C55E;\n}\n.data-table[_ngcontent-%COMP%]   .risk-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.data-table[_ngcontent-%COMP%]   .risk-badge[_ngcontent-%COMP%]   .risk-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.data-table[_ngcontent-%COMP%]   .risk-badge.badge-low[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #22C55E;\n}\n.data-table[_ngcontent-%COMP%]   .risk-badge.badge-low[_ngcontent-%COMP%]   .risk-dot[_ngcontent-%COMP%] {\n  background: #22C55E;\n}\n.data-table[_ngcontent-%COMP%]   .risk-badge.badge-medium[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.data-table[_ngcontent-%COMP%]   .risk-badge.badge-medium[_ngcontent-%COMP%]   .risk-dot[_ngcontent-%COMP%] {\n  background: #F59E0B;\n}\n.data-table[_ngcontent-%COMP%]   .risk-badge.badge-high[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.data-table[_ngcontent-%COMP%]   .risk-badge.badge-high[_ngcontent-%COMP%]   .risk-dot[_ngcontent-%COMP%] {\n  background: #EF4444;\n}\n.data-table[_ngcontent-%COMP%]   .loading-pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n  color: var(--text-muted);\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n/*# sourceMappingURL=transactions.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionsComponent, [{
    type: Component,
    args: [{ selector: "app-transactions", standalone: true, imports: [CommonModule, SidebarComponent, ThemeToggleComponent], template: `<div class="page-layout">
  <app-sidebar />
  
  <main class="main-content">
    <header class="page-header">
      <div class="header-left">
        <h1 class="page-heading">Transaction History</h1>
        <p class="page-desc">Review your recent payments and associated risk scoring.</p>
      </div>
      <div class="header-actions">
        <app-theme-toggle />
      </div>
    </header>

    <div class="transactions-container">
      @if (isLoading()) {
        <div class="loading-state">
          <div class="spinner"></div>
          <p>Loading transactions...</p>
        </div>
      } @else if (transactions().length === 0) {
        <div class="empty-state glass-card">
          <span class="material-symbols-outlined empty-icon">history</span>
          <h2>No Transactions Found</h2>
          <p>You haven't made any transactions yet.</p>
        </div>
      } @else {
        <div class="table-card glass-card">
          <table class="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Risk Assessment</th>
              </tr>
            </thead>
            <tbody>
              @for (txn of transactions(); track txn.id) {
                <tr>
                  <td class="td-date">{{ txn.createdAt | date:'mediumDate' }}<br><small>{{ txn.createdAt | date:'shortTime' }}</small></td>
                  <td class="td-desc">{{ txn.description }}</td>
                  <td class="td-type">
                    <span class="type-pill" [class.type-reversal]="txn.type === 'Reversal'">
                      {{ txn.type }}
                    </span>
                  </td>
                  <td class="td-amount mono" [class.text-error]="txn.type !== 'Reversal'">
                    {{ txn.type === 'Reversal' ? '+' : '-' }}Rs.{{ txn.amount | number:'1.2-2' }}
                  </td>
                  <td class="td-risk">
                    @if (txn.isLoadingRisk) {
                      <span class="loading-pulse">Analyzing...</span>
                    } @else if (txn.riskBadge) {
                      <div class="risk-badge {{ txn.riskBadge.colorClass }}">
                        <span class="risk-dot"></span>
                        {{ txn.riskBadge.label }} ({{ txn.riskBadge.score }})
                      </div>
                    } @else {
                      <span class="text-muted">N/A</span>
                    }
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  </main>
</div>
`, styles: ["/* src/app/features/transactions/transactions.scss */\n.page-layout {\n  display: flex;\n  min-height: 100vh;\n  background-color: var(--bg-main);\n  color: var(--text-main);\n}\n.main-content {\n  flex: 1;\n  padding: 2rem;\n  margin-left: 280px;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.page-header .page-heading {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 700;\n}\n.page-header .page-desc {\n  margin: 0.5rem 0 0 0;\n  color: var(--text-muted);\n}\n.glass-card {\n  background: var(--surface-light);\n  border: 1px solid var(--border-color);\n  border-radius: 1rem;\n  padding: 1.5rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  color: var(--text-muted);\n}\n.empty-state .empty-icon {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.empty-state h2 {\n  margin: 0 0 0.5rem 0;\n  color: var(--text-main);\n}\n.empty-state p {\n  margin: 0;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n}\n.loading-state .spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid var(--border-color);\n  border-top-color: var(--primary-color);\n  border-radius: 50%;\n  animation: spin 1s infinite linear;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.table-card {\n  padding: 0;\n  overflow: hidden;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n}\n.data-table th,\n.data-table td {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\n.data-table th {\n  font-weight: 600;\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: rgba(0, 0, 0, 0.02);\n}\n.data-table tr:last-child td {\n  border-bottom: none;\n}\n.data-table .td-date {\n  white-space: nowrap;\n  line-height: 1.4;\n}\n.data-table .td-date small {\n  color: var(--text-muted);\n}\n.data-table .td-amount {\n  font-weight: 600;\n}\n.data-table .td-amount.text-error {\n  color: #EF4444;\n}\n.data-table .type-pill {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  background: var(--surface-hover);\n  color: var(--text-main);\n}\n.data-table .type-pill.type-reversal {\n  background: rgba(34, 197, 94, 0.1);\n  color: #22C55E;\n}\n.data-table .risk-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.data-table .risk-badge .risk-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.data-table .risk-badge.badge-low {\n  background: rgba(34, 197, 94, 0.1);\n  color: #22C55E;\n}\n.data-table .risk-badge.badge-low .risk-dot {\n  background: #22C55E;\n}\n.data-table .risk-badge.badge-medium {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.data-table .risk-badge.badge-medium .risk-dot {\n  background: #F59E0B;\n}\n.data-table .risk-badge.badge-high {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.data-table .risk-badge.badge-high .risk-dot {\n  background: #EF4444;\n}\n.data-table .loading-pulse {\n  animation: pulse 1.5s infinite;\n  color: var(--text-muted);\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.mono {\n  font-family: monospace;\n}\n/*# sourceMappingURL=transactions.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionsComponent, { className: "TransactionsComponent", filePath: "src/app/features/transactions/transactions.ts", lineNumber: 38 });
})();
export {
  TransactionsComponent
};
//# sourceMappingURL=chunk-BP2MK6SG.js.map
