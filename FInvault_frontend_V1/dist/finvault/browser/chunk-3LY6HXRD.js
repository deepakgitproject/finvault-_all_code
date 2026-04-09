import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7UCIGN6I.js";
import {
  ThemeToggleComponent
} from "./chunk-AQGYU3VR.js";
import {
  SidebarComponent
} from "./chunk-JZ2MQXBK.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  HttpClient,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  ViewChildren,
  computed,
  inject,
  interval,
  setClassMetadata,
  signal,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-SYL3PSAO.js";

// src/app/features/payments/pay-bill/pay-bill.ts
var _c0 = ["otpInput"];
var _forTrack0 = ($index, $item) => $item.id;
function PayBillComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "span", 11);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage(), " ");
  }
}
function PayBillComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "span", 11);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function PayBillComponent_option_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275property("value", t_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2);
  }
}
function PayBillComponent_span_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "lock");
    \u0275\u0275elementEnd();
  }
}
function PayBillComponent_span_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 58);
  }
}
function PayBillComponent_For_116_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function PayBillComponent_For_116_button_18_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const tx_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.reversePayment(tx_r4.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2, "history");
    \u0275\u0275elementEnd()();
  }
}
function PayBillComponent_For_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function PayBillComponent_For_116_Template_div_click_0_listener() {
      const tx_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.prefillFromTransaction(tx_r4));
    });
    \u0275\u0275elementStart(1, "div", 60)(2, "div", 61)(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 62)(6, "span", 63);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 64);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 65)(12, "div", 66)(13, "span", 67);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 68);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, PayBillComponent_For_116_button_18_Template, 3, 0, "button", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap("tx-item__icon--" + tx_r4.status.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r4.status === "COMPLETED" ? "check_circle" : tx_r4.status === "FAILED" ? "error" : "schedule");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r4.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(10, 11, tx_r4.date, "MMM d, h:mm a"), " * ", tx_r4.paymentType);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Rs.", \u0275\u0275pipeBind2(15, 14, tx_r4.amount, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("tx-item__status--" + tx_r4.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tx_r4.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tx_r4.status === "COMPLETED");
  }
}
function PayBillComponent_ForEmpty_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 11);
    \u0275\u0275text(2, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No recent transactions found");
    \u0275\u0275elementEnd()();
  }
}
function PayBillComponent_div_118_input_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 84, 0);
    \u0275\u0275listener("input", function PayBillComponent_div_118_input_13_Template_input_input_0_listener($event) {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOtpInput($event, i_r8));
    })("keydown", function PayBillComponent_div_118_input_13_Template_input_keydown_0_listener($event) {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOtpKeydown($event, i_r8));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const digit_r9 = ctx.$implicit;
    \u0275\u0275classProp("otp-input--filled", digit_r9 !== "");
    \u0275\u0275property("value", digit_r9);
  }
}
function PayBillComponent_div_118_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "span", 11);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function PayBillComponent_div_118_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 86);
  }
}
function PayBillComponent_div_118_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function PayBillComponent_div_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275listener("click", function PayBillComponent_div_118_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 72);
    \u0275\u0275listener("click", function PayBillComponent_div_118_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275element(2, "div", 73);
    \u0275\u0275elementStart(3, "div", 74)(4, "span", 11);
    \u0275\u0275text(5, "lock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h2", 75);
    \u0275\u0275text(7, "Verify Identity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 76);
    \u0275\u0275text(9, " We've sent a 6-digit secure code to your registered mobile number ending in ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11, "**89");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 77);
    \u0275\u0275listener("paste", function PayBillComponent_div_118_Template_div_paste_12_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onOtpPaste($event));
    });
    \u0275\u0275template(13, PayBillComponent_div_118_input_13_Template, 2, 3, "input", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, PayBillComponent_div_118_div_14_Template, 4, 1, "div", 79);
    \u0275\u0275elementStart(15, "button", 80);
    \u0275\u0275listener("click", function PayBillComponent_div_118_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmPayment());
    });
    \u0275\u0275template(16, PayBillComponent_div_118_span_16_Template, 1, 0, "span", 81)(17, PayBillComponent_div_118_span_17_Template, 2, 0, "span", 42);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 82)(20, "span", 83);
    \u0275\u0275listener("click", function PayBillComponent_div_118_Template_span_click_20_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resendCode());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r0.otpDigits());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorMessage());
    \u0275\u0275advance();
    \u0275\u0275classProp("modal__confirm-btn--loading", ctx_r0.isConfirming());
    \u0275\u0275property("disabled", !ctx_r0.isOtpComplete() || ctx_r0.isConfirming());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isConfirming());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isConfirming());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isConfirming() ? "Verifying..." : "Confirm Payment", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("modal__resend-link--active", ctx_r0.canResend());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.canResend() ? "Resend Code" : "Resend Code (" + ctx_r0.resendCountdown() + "s)", " ");
  }
}
var PayBillComponent = class _PayBillComponent {
  http = inject(HttpClient);
  router = inject(Router);
  route = inject(ActivatedRoute);
  // -- Form model ---------------------------------------------------
  form = {
    userId: "",
    cardId: "",
    billId: "",
    amount: null,
    paymentType: "Full",
    email: ""
  };
  paymentTypes = ["Full", "Partial", "Scheduled"];
  // -- State signals ------------------------------------------------
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  isModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isConfirming = signal(false, ...ngDevMode ? [{ debugName: "isConfirming" }] : (
    /* istanbul ignore next */
    []
  ));
  paymentId = signal(null, ...ngDevMode ? [{ debugName: "paymentId" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  successMessage = signal(null, ...ngDevMode ? [{ debugName: "successMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  recentTransactions = signal([], ...ngDevMode ? [{ debugName: "recentTransactions" }] : (
    /* istanbul ignore next */
    []
  ));
  isHistoryLoading = signal(false, ...ngDevMode ? [{ debugName: "isHistoryLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  otpDigits = signal(["", "", "", "", "", ""], ...ngDevMode ? [{ debugName: "otpDigits" }] : (
    /* istanbul ignore next */
    []
  ));
  // OTP resend countdown
  resendCountdown = signal(45, ...ngDevMode ? [{ debugName: "resendCountdown" }] : (
    /* istanbul ignore next */
    []
  ));
  canResend = computed(() => this.resendCountdown() === 0, ...ngDevMode ? [{ debugName: "canResend" }] : (
    /* istanbul ignore next */
    []
  ));
  countdownSub = null;
  // OTP input refs
  otpInputs;
  // Computed OTP string
  otpCode = computed(() => this.otpDigits().join(""), ...ngDevMode ? [{ debugName: "otpCode" }] : (
    /* istanbul ignore next */
    []
  ));
  isOtpComplete = computed(() => this.otpCode().length === 6 && this.otpDigits().every((d) => d !== ""), ...ngDevMode ? [{ debugName: "isOtpComplete" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.autoFillFromToken();
    this.handleQueryParams();
    this.fetchRecentTransactions();
  }
  handleQueryParams() {
    this.route.queryParams.subscribe((params) => {
      if (params["billId"])
        this.form.billId = params["billId"];
      if (params["cardId"])
        this.form.cardId = params["cardId"];
      if (params["amount"])
        this.form.amount = Number(params["amount"]);
      if (params["paymentType"])
        this.form.paymentType = params["paymentType"];
    });
  }
  // -- Auto-fill userId and email from JWT --------------------------
  autoFillFromToken() {
    try {
      const token = localStorage.getItem("fv_access_token");
      if (!token)
        return;
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (payload.sub)
        this.form.userId = payload.sub;
      if (payload.email)
        this.form.email = payload.email;
    } catch {
    }
  }
  // -- Pre-fill helper ----------------------------------------------
  prefillFromTransaction(tx) {
    this.form.amount = tx.amount;
    this.form.paymentType = tx.paymentType;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  // -- Step 1: Initiate Payment -------------------------------------
  initiatePayment() {
    if (!this.isFormValid())
      return;
    this.errorMessage.set(null);
    this.isLoading.set(true);
    const payload = {
      userId: this.getUserIdFromToken() || "00000000-0000-0000-0000-000000000000",
      cardId: this.form.cardId.trim(),
      billId: this.form.billId.trim(),
      amount: Number(this.form.amount),
      paymentType: this.form.paymentType,
      email: this.form.email.trim()
    };
    this.http.post("/api/payments/initiate", payload).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        const paymentId = res?.data?.id || res?.id;
        this.paymentId.set(paymentId);
        this.openModal();
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set(err.error?.message ?? "Failed to initiate payment. Please try again.");
      }
    });
  }
  // -- Step 2: Confirm OTP ------------------------------------------
  confirmPayment() {
    if (!this.isOtpComplete())
      return;
    const id = this.paymentId();
    if (!id)
      return;
    this.isConfirming.set(true);
    this.errorMessage.set(null);
    const payload = { otpCode: this.otpCode() };
    this.http.put(`/api/payments/${id}/complete`, payload).subscribe({
      next: () => {
        this.isConfirming.set(false);
        this.closeModal();
        this.successMessage.set("Payment completed successfully!");
        this.fetchRecentTransactions();
        setTimeout(() => this.successMessage.set(null), 4e3);
      },
      error: (err) => {
        this.isConfirming.set(false);
        this.errorMessage.set(err.error?.message ?? "Invalid OTP. Please try again.");
      }
    });
  }
  reversePayment(id) {
    if (!id)
      return;
    this.isLoading.set(true);
    this.http.put(`/api/payments/${id}/reverse`, {}).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.successMessage.set("Payment reversed successfully!");
        this.fetchRecentTransactions();
        setTimeout(() => this.successMessage.set(null), 3e3);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set(err.error?.message ?? "Failed to reverse payment.");
      }
    });
  }
  // -- OTP input handling -------------------------------------------
  onOtpInput(event, index) {
    const input = event.target;
    const val = input.value.replace(/\D/g, "").slice(-1);
    const digits = [...this.otpDigits()];
    digits[index] = val;
    this.otpDigits.set(digits);
    if (val && index < 5) {
      const inputs = this.otpInputs.toArray();
      inputs[index + 1]?.nativeElement.focus();
    }
  }
  onOtpKeydown(event, index) {
    if (event.key === "Backspace") {
      const digits = [...this.otpDigits()];
      if (!digits[index] && index > 0) {
        digits[index - 1] = "";
        this.otpDigits.set(digits);
        const inputs = this.otpInputs.toArray();
        inputs[index - 1]?.nativeElement.focus();
      } else {
        digits[index] = "";
        this.otpDigits.set(digits);
      }
    }
  }
  onOtpPaste(event) {
    event.preventDefault();
    const pasted = event.clipboardData?.getData("text") ?? "";
    const cleaned = pasted.replace(/\D/g, "").slice(0, 6).split("");
    const digits = ["", "", "", "", "", ""];
    cleaned.forEach((d, i) => digits[i] = d);
    this.otpDigits.set(digits);
    const inputs = this.otpInputs.toArray();
    const focusIdx = Math.min(cleaned.length, 5);
    inputs[focusIdx]?.nativeElement.focus();
  }
  // -- Modal helpers ------------------------------------------------
  openModal() {
    this.otpDigits.set(["", "", "", "", "", ""]);
    this.errorMessage.set(null);
    this.isModalOpen.set(true);
    this.startCountdown();
    setTimeout(() => {
      this.otpInputs.toArray()[0]?.nativeElement.focus();
    }, 100);
  }
  closeModal() {
    this.isModalOpen.set(false);
    this.otpDigits.set(["", "", "", "", "", ""]);
    this.stopCountdown();
  }
  resendCode() {
    if (!this.canResend())
      return;
    this.otpDigits.set(["", "", "", "", "", ""]);
    this.errorMessage.set(null);
    this.startCountdown();
    setTimeout(() => this.otpInputs.toArray()[0]?.nativeElement.focus(), 50);
  }
  startCountdown() {
    this.stopCountdown();
    this.resendCountdown.set(45);
    this.countdownSub = interval(1e3).pipe(take(45)).subscribe(() => {
      this.resendCountdown.update((v) => Math.max(0, v - 1));
    });
  }
  stopCountdown() {
    this.countdownSub?.unsubscribe();
    this.countdownSub = null;
  }
  // -- Validation ---------------------------------------------------
  isFormValid() {
    const isValidId = (id) => !!id && id.length >= 1;
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+?/;
    return isValidId(this.form.cardId) && isValidId(this.form.billId) && Number(this.form.amount) > 0 && emailRe.test(this.form.email) && !!this.form.paymentType;
  }
  // -- Recent Transactions ------------------------------------------
  fetchRecentTransactions() {
    this.isHistoryLoading.set(true);
    this.http.get("/api/payments").subscribe({
      next: (res) => {
        const payments = Array.isArray(res) ? res : res?.data ?? [];
        this.recentTransactions.set(payments.map((p) => ({
          id: p.id,
          amount: p.amount,
          status: p.status,
          date: p.createdAt,
          description: `Payment for Bill ${p.billId ? "#" + p.billId.slice(-4) : "General"}`,
          paymentType: p.paymentType
        })).slice(0, 5));
        this.isHistoryLoading.set(false);
      },
      error: () => {
        this.recentTransactions.set([]);
        this.isHistoryLoading.set(false);
      }
    });
  }
  setDemoTransactions() {
    this.recentTransactions.set([
      { id: "1", amount: 345, status: "COMPLETED", date: (/* @__PURE__ */ new Date()).toISOString(), description: "Rent Payment: October", paymentType: "BANK_TRANSFER" },
      { id: "2", amount: 89.99, status: "COMPLETED", date: new Date(Date.now() - 864e5).toISOString(), description: "Fiber Optic Pro", paymentType: "CARD" },
      { id: "3", amount: 1240.25, status: "FAILED", date: new Date(Date.now() - 1728e5).toISOString(), description: "Sapphire Reserve", paymentType: "CARD" },
      { id: "4", amount: 24.5, status: "COMPLETED", date: new Date(Date.now() - 2592e5).toISOString(), description: "Metro Recharge", paymentType: "WALLET" }
    ]);
  }
  getUserIdFromToken() {
    try {
      const token = localStorage.getItem("fv_access_token");
      if (!token)
        return null;
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.sub ?? null;
    } catch {
      return null;
    }
  }
  ngOnDestroy() {
    this.stopCountdown();
  }
  static \u0275fac = function PayBillComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PayBillComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PayBillComponent, selectors: [["app-pay-bill"]], viewQuery: function PayBillComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.otpInputs = _t);
    }
  }, decls: 119, vars: 22, consts: [["otpInput", ""], [1, "pay-bill-page"], [1, "main-content"], [1, "page-header"], [1, "page-header__user"], [1, "page-header__avatar"], [1, "page-header__user-info"], [1, "page-header__name"], [1, "page-header__tier"], [1, "page-header__actions"], [1, "page-header__icon-btn"], [1, "material-symbols-outlined"], [1, "title-section"], [1, "title-section__heading"], [1, "title-section__sub"], ["class", "toast toast--success", 4, "ngIf"], [1, "form-card"], [1, "form-card__inner"], [1, "form-card__left"], [1, "form-card__icon-ring"], [1, "form-card__left-title"], [1, "form-card__left-body"], [1, "form-card__badge-row"], [1, "form-card__badge"], [1, "form-card__right"], ["class", "form-error", 4, "ngIf"], [1, "form-row"], [1, "form-group"], [1, "form-label"], [1, "form-input-wrap", "form-input-wrap--amount"], [1, "form-input-prefix"], ["type", "number", "min", "0.01", "step", "0.01", "placeholder", "0.00", "name", "amount", 1, "form-input", "form-input--amount", 3, "ngModelChange", "ngModel"], [1, "form-input-wrap"], ["name", "paymentType", 1, "form-input", "form-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "material-symbols-outlined", "form-select-icon"], ["type", "email", "placeholder", "you@example.com", "name", "email", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "xxxxxxxx...", "name", "userId", 1, "form-input", "form-input--mono", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "xxxxxxxx...", "name", "cardId", 1, "form-input", "form-input--mono", 3, "ngModelChange", "ngModel"], [1, "form-row", "form-row--align-end"], ["type", "text", "placeholder", "xxxxxxxx...", "name", "billId", 1, "form-input", "form-input--mono", 3, "ngModelChange", "ngModel"], [1, "submit-btn", 3, "click", "disabled"], ["class", "material-symbols-outlined", 4, "ngIf"], ["class", "submit-btn__spinner", 4, "ngIf"], [1, "transactions-section"], [1, "section-header"], [1, "section-header__text"], [1, "section-header__title"], [1, "section-header__subtitle"], [1, "btn-refresh", 3, "click", "disabled"], [1, "transactions-card", "glass-card"], [1, "tx-list"], [1, "tx-item"], [1, "tx-empty"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "toast", "toast--success"], [1, "form-error"], [3, "value"], [1, "submit-btn__spinner"], [1, "tx-item", 3, "click"], [1, "tx-item__left"], [1, "tx-item__icon"], [1, "tx-item__info"], [1, "tx-item__desc"], [1, "tx-item__meta"], [1, "tx-item__right"], [1, "tx-item__amount-block"], [1, "tx-item__amount"], [1, "tx-item__status"], ["class", "btn-reverse", "title", "Reverse Payment", 3, "click", 4, "ngIf"], ["title", "Reverse Payment", 1, "btn-reverse", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal__handlebar"], [1, "modal__icon-ring"], [1, "modal__title"], [1, "modal__subtitle"], [1, "otp-row", 3, "paste"], ["class", "otp-input", "type", "text", "inputmode", "numeric", "maxlength", "1", 3, "otp-input--filled", "value", "input", "keydown", 4, "ngFor", "ngForOf"], ["class", "modal__error", 4, "ngIf"], [1, "modal__confirm-btn", 3, "click", "disabled"], ["class", "modal__confirm-btn__spinner", 4, "ngIf"], [1, "modal__resend"], [1, "modal__resend-link", 3, "click"], ["type", "text", "inputmode", "numeric", "maxlength", "1", 1, "otp-input", 3, "input", "keydown", "value"], [1, "modal__error"], [1, "modal__confirm-btn__spinner"]], template: function PayBillComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 2)(3, "header", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "span", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 8);
      \u0275\u0275text(11, "ELITE MEMBER");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275element(13, "app-theme-toggle");
      \u0275\u0275elementStart(14, "button", 10)(15, "span", 11);
      \u0275\u0275text(16, "account_balance_wallet");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "section", 12)(18, "h1", 13);
      \u0275\u0275text(19, "Make a Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 14);
      \u0275\u0275text(21, "Secure payment from your vault. OTP required.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(22, PayBillComponent_div_22_Template, 4, 1, "div", 15);
      \u0275\u0275elementStart(23, "div", 16)(24, "div", 17)(25, "div", 18)(26, "div", 19)(27, "span", 11);
      \u0275\u0275text(28, "payments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "h2", 20);
      \u0275\u0275text(30, "Secure Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p", 21);
      \u0275\u0275text(32, " All transactions are end-to-end encrypted and require OTP verification via your registered mobile number. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 22)(34, "div", 23)(35, "span", 11);
      \u0275\u0275text(36, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275text(37, " 256-bit SSL ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 23)(39, "span", 11);
      \u0275\u0275text(40, "verified_user");
      \u0275\u0275elementEnd();
      \u0275\u0275text(41, " 2FA Enabled ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 23)(43, "span", 11);
      \u0275\u0275text(44, "shield");
      \u0275\u0275elementEnd();
      \u0275\u0275text(45, " PCI-DSS ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 24);
      \u0275\u0275template(47, PayBillComponent_div_47_Template, 4, 1, "div", 25);
      \u0275\u0275elementStart(48, "div", 26)(49, "div", 27)(50, "label", 28)(51, "span", 11);
      \u0275\u0275text(52, "payments");
      \u0275\u0275elementEnd();
      \u0275\u0275text(53, " Amount ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 29)(55, "span", 30);
      \u0275\u0275text(56, "Rs.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function PayBillComponent_Template_input_ngModelChange_57_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.amount, $event) || (ctx.form.amount = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 27)(59, "label", 28)(60, "span", 11);
      \u0275\u0275text(61, "category");
      \u0275\u0275elementEnd();
      \u0275\u0275text(62, " Type ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 32)(64, "select", 33);
      \u0275\u0275twoWayListener("ngModelChange", function PayBillComponent_Template_select_ngModelChange_64_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.paymentType, $event) || (ctx.form.paymentType = $event);
        return $event;
      });
      \u0275\u0275template(65, PayBillComponent_option_65_Template, 2, 2, "option", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "span", 35);
      \u0275\u0275text(67, "expand_more");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(68, "div", 27)(69, "label", 28)(70, "span", 11);
      \u0275\u0275text(71, "mail");
      \u0275\u0275elementEnd();
      \u0275\u0275text(72, " Email Address ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 32)(74, "input", 36);
      \u0275\u0275twoWayListener("ngModelChange", function PayBillComponent_Template_input_ngModelChange_74_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(75, "div", 26)(76, "div", 27)(77, "label", 28)(78, "span", 11);
      \u0275\u0275text(79, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275text(80, " User ID ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 32)(82, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function PayBillComponent_Template_input_ngModelChange_82_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.userId, $event) || (ctx.form.userId = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "div", 27)(84, "label", 28)(85, "span", 11);
      \u0275\u0275text(86, "credit_card");
      \u0275\u0275elementEnd();
      \u0275\u0275text(87, " Card ID ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 32)(89, "input", 38);
      \u0275\u0275twoWayListener("ngModelChange", function PayBillComponent_Template_input_ngModelChange_89_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.cardId, $event) || (ctx.form.cardId = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(90, "div", 39)(91, "div", 27)(92, "label", 28)(93, "span", 11);
      \u0275\u0275text(94, "receipt_long");
      \u0275\u0275elementEnd();
      \u0275\u0275text(95, " Bill ID ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 32)(97, "input", 40);
      \u0275\u0275twoWayListener("ngModelChange", function PayBillComponent_Template_input_ngModelChange_97_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.billId, $event) || (ctx.form.billId = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "div", 27)(99, "button", 41);
      \u0275\u0275listener("click", function PayBillComponent_Template_button_click_99_listener() {
        return ctx.initiatePayment();
      });
      \u0275\u0275template(100, PayBillComponent_span_100_Template, 2, 0, "span", 42)(101, PayBillComponent_span_101_Template, 1, 0, "span", 43);
      \u0275\u0275text(102);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(103, "section", 44)(104, "div", 45)(105, "div", 46)(106, "h2", 47);
      \u0275\u0275text(107, "Recent Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "p", 48);
      \u0275\u0275text(109, "Your last five secure payments and their current status.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "button", 49);
      \u0275\u0275listener("click", function PayBillComponent_Template_button_click_110_listener() {
        return ctx.fetchRecentTransactions();
      });
      \u0275\u0275elementStart(111, "span", 11);
      \u0275\u0275text(112, "refresh");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "div", 50)(114, "div", 51);
      \u0275\u0275repeaterCreate(115, PayBillComponent_For_116_Template, 19, 17, "div", 52, _forTrack0, false, PayBillComponent_ForEmpty_117_Template, 5, 0, "div", 53);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(118, PayBillComponent_div_118_Template, 22, 11, "div", 54);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate((ctx.form.userId || "AP").slice(0, 2).toUpperCase());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.form.email.split("@")[0] || "User");
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.successMessage());
      \u0275\u0275advance(25);
      \u0275\u0275property("ngIf", ctx.errorMessage() && !ctx.isModalOpen());
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.amount);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.paymentType);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.paymentTypes);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.userId);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.cardId);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.billId);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("submit-btn--loading", ctx.isLoading());
      \u0275\u0275property("disabled", !ctx.isFormValid() || ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isLoading() ? "Processing..." : "Secure Payment", " ");
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.isHistoryLoading());
      \u0275\u0275advance();
      \u0275\u0275classProp("spin", ctx.isHistoryLoading());
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.recentTransactions());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isModalOpen());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, SidebarComponent, ThemeToggleComponent, DecimalPipe, DatePipe], styles: ['\n.pay-bill-page[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 100vh;\n  background: var(--glass-bg);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  display: flex;\n  flex-direction: column;\n  padding: 32px 20px;\n  z-index: 50;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  padding-left: 12px;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: -0.04em;\n  display: block;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--text-secondary);\n  margin-top: -2px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  text-decoration: none;\n  color: var(--text-secondary);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 500;\n  font-size: 0.95rem;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.nav-item[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.8;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n}\n.nav-item.active[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  opacity: 1;\n  font-variation-settings: "FILL" 1;\n}\n.sidebar-promo[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.4);\n  text-align: center;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .promo-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n  margin-bottom: 16px;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .btn-upgrade[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .btn-upgrade[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.notif-badge[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 20px;\n  margin-left: auto;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(107, 110, 249, 0.4);\n}\n.main-content[_ngcontent-%COMP%] {\n  margin-left: 300px;\n  padding: 24px 32px;\n  flex: 1;\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n.page-header__user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header__avatar[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.875rem;\n  font-weight: 800;\n  color: #fff;\n  flex-shrink: 0;\n  box-shadow: 0 4px 14px rgba(107, 110, 249, 0.35);\n}\n.page-header__name[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.page-header__tier[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.page-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header__icon-btn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-secondary, #4A4A6A);\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  transition:\n    background 0.2s,\n    color 0.2s,\n    transform 0.15s;\n}\n.page-header__icon-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n.page-header__icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(107, 110, 249, 0.12);\n  color: var(--primary);\n  transform: translateY(-1px);\n}\n.page-header__report-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 999px;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  cursor: pointer;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.09);\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.page-header__report-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--primary);\n}\n.page-header__report-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(107, 110, 249, 0.18);\n}\n.title-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.title-section__heading[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 2.2rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  line-height: 1.1;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.title-section__sub[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  margin: 0;\n  line-height: 1.4;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 20px;\n  border-radius: 14px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.88rem;\n  font-weight: 600;\n  margin-bottom: 24px;\n  animation: _ngcontent-%COMP%_fadeSlideIn 0.3s ease;\n}\n.toast--success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  border: 1px solid rgba(34, 197, 94, 0.25);\n  color: #15803d;\n}\n.toast--success[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: #22C55E;\n  font-size: 1.1rem;\n}\n@keyframes _ngcontent-%COMP%_fadeSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: flex-start;\n}\n.form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  margin-bottom: 12px;\n}\n.form-row--align-end[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n@media (max-width: 640px) {\n  .form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0;\n  }\n  .form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  padding: 24px 32px;\n  box-shadow: 0 8px 32px rgba(120, 130, 210, 0.12);\n  margin-bottom: 24px;\n}\n.form-card__inner[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  align-items: flex-start;\n}\n.form-card__left[_ngcontent-%COMP%] {\n  flex: 0 0 260px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0;\n  padding-top: 8px;\n}\n.form-card__icon-ring[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 16px;\n  background: rgba(107, 110, 249, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.form-card__icon-ring[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--primary);\n  font-variation-settings: "FILL" 1;\n}\n.form-card__left-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 12px;\n}\n.form-card__left-body[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  line-height: 1.5;\n  margin: 0 0 20px;\n}\n.form-card__badge-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.form-card__badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border-radius: 999px;\n  background: rgba(107, 110, 249, 0.08);\n  border: 1px solid rgba(107, 110, 249, 0.15);\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: 0.03em;\n}\n.form-card__badge[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.form-card__right[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.form-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.22);\n  color: var(--error);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.83rem;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n.form-error[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  font-size: 0.68rem;\n  margin-bottom: 8px;\n}\n.form-label[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--primary);\n}\n.form-label-hint[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.6rem;\n  font-weight: 500;\n  color: var(--text-muted);\n  background: rgba(136, 136, 170, 0.1);\n  padding: 2px 8px;\n  border-radius: 999px;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.form-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.form-input-wrap--amount[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  padding-left: 32px;\n}\n.form-input-prefix[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--primary);\n  pointer-events: none;\n  z-index: 1;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px 16px;\n  border-radius: 14px;\n  border: 1.5px solid rgba(107, 110, 249, 0.15);\n  background: rgba(255, 255, 255, 0.7);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--text-primary);\n  outline: none;\n  transition:\n    border-color 0.2s,\n    box-shadow 0.2s,\n    background 0.2s;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n  font-weight: 400;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  background: rgba(255, 255, 255, 0.92);\n  box-shadow: 0 0 0 3px rgba(107, 110, 249, 0.12);\n}\n.form-input--mono[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.82rem;\n  letter-spacing: 0.02em;\n}\n.form-input--amount[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.form-input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, \n.form-input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.form-input[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.form-select[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  padding-right: 40px;\n}\n.form-select-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  font-size: 1.1rem;\n  color: var(--text-muted);\n  pointer-events: none;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 13px 24px;\n  margin-top: 0;\n  border-radius: 12px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n  color: #fff;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 8px 24px rgba(107, 110, 249, 0.38);\n  transition:\n    transform 0.18s,\n    box-shadow 0.18s,\n    opacity 0.18s;\n  letter-spacing: 0.01em;\n}\n.submit-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 32px rgba(107, 110, 249, 0.48);\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.submit-btn__spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2.5px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(30, 30, 50, 0.3);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_overlayIn 0.22s ease;\n}\n@keyframes _ngcontent-%COMP%_overlayIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal[_ngcontent-%COMP%] {\n  background: rgba(230, 230, 235, 0.88);\n  backdrop-filter: blur(32px);\n  -webkit-backdrop-filter: blur(32px);\n  border: 1px solid rgba(255, 255, 255, 0.75);\n  border-radius: 32px;\n  padding: 40px 40px 36px;\n  width: 400px;\n  text-align: center;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.14), 0 8px 24px rgba(107, 110, 249, 0.12);\n  position: relative;\n  animation: _ngcontent-%COMP%_modalIn 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.modal__handlebar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 4px;\n  border-radius: 999px;\n  background: rgba(107, 110, 249, 0.25);\n  margin: 0 auto 28px;\n}\n.modal__icon-ring[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 20px;\n  background: rgba(107, 110, 249, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n.modal__icon-ring[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: var(--primary);\n  font-variation-settings: "FILL" 1;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.55rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 10px;\n  letter-spacing: -0.01em;\n}\n.modal__subtitle[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.855rem;\n  color: var(--text-muted);\n  line-height: 1.6;\n  margin: 0;\n}\n.modal__subtitle[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 700;\n}\n.modal__error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 10px 16px;\n  border-radius: 10px;\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: var(--error);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 12px;\n  animation: _ngcontent-%COMP%_fadeSlideIn 0.2s ease;\n}\n.modal__error[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  flex-shrink: 0;\n}\n.modal__confirm-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 16px;\n  border-radius: 999px;\n  border: none;\n  background: var(--primary);\n  color: #fff;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 6px 20px rgba(107, 110, 249, 0.38);\n  transition:\n    transform 0.15s,\n    box-shadow 0.15s,\n    opacity 0.15s;\n}\n.modal__confirm-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.modal__confirm-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 28px rgba(107, 110, 249, 0.48);\n}\n.modal__confirm-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.modal__confirm-btn__spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2.5px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.modal__resend[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.modal__resend-link[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: default;\n  transition: color 0.2s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.modal__resend-link--active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  cursor: pointer;\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    opacity: 0;\n    transform: scale(0.93) translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.otp-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  margin: 32px 0 20px;\n}\n.otp-input[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  border: none;\n  background: #fff;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.05);\n  text-align: center;\n  font-size: 1.4rem;\n  font-weight: 700;\n  font-family: "Space Grotesk", sans-serif;\n  color: var(--primary);\n  outline: none;\n  transition: box-shadow 0.2s, transform 0.15s;\n  caret-color: transparent;\n}\n.otp-input[_ngcontent-%COMP%]:focus {\n  box-shadow:\n    inset 0 2px 4px rgba(0, 0, 0, 0.06),\n    0 0 0 2.5px var(--primary),\n    0 4px 14px rgba(107, 110, 249, 0.22);\n  transform: scale(1.08);\n}\n.otp-input--filled[_ngcontent-%COMP%] {\n  background: rgba(107, 110, 249, 0.07);\n}\n.transactions-section[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  animation: _ngcontent-%COMP%_fadeSlideIn 0.4s ease-out;\n}\n.transactions-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 16px;\n}\n.transactions-section[_ngcontent-%COMP%]   .section-header__title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n  letter-spacing: -0.01em;\n}\n.transactions-section[_ngcontent-%COMP%]   .section-header__subtitle[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.transactions-section[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--primary);\n  transition: all 0.2s;\n}\n.transactions-section[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(107, 110, 249, 0.1);\n  transform: rotate(180deg);\n}\n.transactions-section[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.transactions-section[_ngcontent-%COMP%]   .btn-refresh[_ngcontent-%COMP%]   .spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.transactions-card[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  overflow: hidden;\n}\n.tx-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.tx-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(136, 136, 170, 0.08);\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n}\n.tx-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.tx-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.4);\n  transform: translateX(8px);\n}\n.tx-item__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.tx-item__icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tx-item__icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.tx-item__icon--completed[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #22C55E;\n}\n.tx-item__icon--failed[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.tx-item__icon--pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.tx-item__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.tx-item__desc[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.tx-item__meta[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.tx-item__right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 16px;\n}\n.tx-item__amount-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n}\n.tx-item__amount[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.tx-item__status[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  font-size: 0.6rem;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.tx-item__status--completed[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #15803d;\n}\n.tx-item__status--failed[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n}\n.tx-item__status--pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #b45309;\n}\n.tx-item[_ngcontent-%COMP%]   .btn-reverse[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1px solid rgba(136, 136, 170, 0.2);\n  background: rgba(255, 255, 255, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.2s ease;\n}\n.tx-item[_ngcontent-%COMP%]   .btn-reverse[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: var(--error);\n  border-color: rgba(239, 68, 68, 0.2);\n  transform: rotate(-90deg);\n}\n.tx-item[_ngcontent-%COMP%]   .btn-reverse[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.tx-empty[_ngcontent-%COMP%] {\n  padding: 60px;\n  text-align: center;\n  color: var(--text-muted);\n}\n.tx-empty[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  opacity: 0.3;\n  margin-bottom: 12px;\n}\n.tx-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .transactions-section[_ngcontent-%COMP%]   .section-header__title[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .tx-item[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .tx-item__amount[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=pay-bill.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PayBillComponent, [{
    type: Component,
    args: [{ selector: "app-pay-bill", standalone: true, imports: [CommonModule, RouterLink, FormsModule, SidebarComponent, ThemeToggleComponent], template: `<div class="pay-bill-page">\r
\r
    <!-- SIDEBAR -->\r
    <app-sidebar />\r
\r
    <!-- ------------------------------------------ MAIN -->\r
    <main class="main-content">\r
\r
        <!-- Page Header -->\r
        <header class="page-header">\r
            <div class="page-header__user">\r
                <div class="page-header__avatar">{{ (form.userId || 'AP').slice(0,2).toUpperCase() }}</div>\r
                <div class="page-header__user-info">\r
                    <span class="page-header__name">{{ form.email.split('@')[0] || 'User' }}</span>\r
                    <span class="page-header__tier">ELITE MEMBER</span>\r
                </div>\r
            </div>\r
            <div class="page-header__actions">\r
                <app-theme-toggle />\r
                <button class="page-header__icon-btn">\r
                    <span class="material-symbols-outlined">account_balance_wallet</span>\r
                </button>\r
            </div>\r
        </header>\r
\r
        <!-- Title -->\r
        <section class="title-section">\r
            <h1 class="title-section__heading">Make a Payment</h1>\r
            <p class="title-section__sub">Secure payment from your vault. OTP required.</p>\r
        </section>\r
\r
        <!-- Success toast -->\r
        <div class="toast toast--success" *ngIf="successMessage()">\r
            <span class="material-symbols-outlined">check_circle</span>\r
            {{ successMessage() }}\r
        </div>\r
\r
        <!-- ------------------------------------------ FORM CARD -->\r
        <div class="form-card">\r
\r
            <div class="form-card__inner">\r
\r
                <!-- Left: Icon + info -->\r
                <div class="form-card__left">\r
                    <div class="form-card__icon-ring">\r
                        <span class="material-symbols-outlined">payments</span>\r
                    </div>\r
                    <h2 class="form-card__left-title">Secure Payment</h2>\r
                    <p class="form-card__left-body">\r
                        All transactions are end-to-end encrypted and require OTP verification via your registered\r
                        mobile number.\r
                    </p>\r
\r
                    <div class="form-card__badge-row">\r
                        <div class="form-card__badge">\r
                            <span class="material-symbols-outlined">lock</span>\r
                            256-bit SSL\r
                        </div>\r
                        <div class="form-card__badge">\r
                            <span class="material-symbols-outlined">verified_user</span>\r
                            2FA Enabled\r
                        </div>\r
                        <div class="form-card__badge">\r
                            <span class="material-symbols-outlined">shield</span>\r
                            PCI-DSS\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <!-- Right: Form -->\r
                <div class="form-card__right">\r
\r
                    <!-- Global error -->\r
                    <div class="form-error" *ngIf="errorMessage() && !isModalOpen()">\r
                        <span class="material-symbols-outlined">error</span>\r
                        {{ errorMessage() }}\r
                    </div>\r
\r
                    <!-- Row 1: Amount + Payment Type -->\r
                    <div class="form-row">\r
                        <div class="form-group">\r
                            <label class="form-label">\r
                                <span class="material-symbols-outlined">payments</span>\r
                                Amount\r
                            </label>\r
                            <div class="form-input-wrap form-input-wrap--amount">\r
                                <span class="form-input-prefix">Rs.</span>\r
                                <input class="form-input form-input--amount" type="number" min="0.01" step="0.01"\r
                                    placeholder="0.00" [(ngModel)]="form.amount" name="amount" />\r
                            </div>\r
                        </div>\r
                        <div class="form-group">\r
                            <label class="form-label">\r
                                <span class="material-symbols-outlined">category</span>\r
                                Type\r
                            </label>\r
                            <div class="form-input-wrap">\r
                                <select class="form-input form-select" [(ngModel)]="form.paymentType" name="paymentType">\r
                                    <option *ngFor="let t of paymentTypes" [value]="t">{{ t }}</option>\r
                                </select>\r
                                <span class="material-symbols-outlined form-select-icon">expand_more</span>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Row 2: Email -->\r
                    <div class="form-group">\r
                        <label class="form-label">\r
                            <span class="material-symbols-outlined">mail</span>\r
                            Email Address\r
                        </label>\r
                        <div class="form-input-wrap">\r
                            <input class="form-input" type="email" placeholder="you@example.com"\r
                                [(ngModel)]="form.email" name="email" />\r
                        </div>\r
                    </div>\r
\r
                    <!-- Row 3: User ID + Card ID -->\r
                    <div class="form-row">\r
                        <div class="form-group">\r
                            <label class="form-label">\r
                                <span class="material-symbols-outlined">person</span>\r
                                User ID\r
                            </label>\r
                            <div class="form-input-wrap">\r
                                <input class="form-input form-input--mono" type="text"\r
                                    placeholder="xxxxxxxx..." [(ngModel)]="form.userId"\r
                                    name="userId" />\r
                            </div>\r
                        </div>\r
                        <div class="form-group">\r
                            <label class="form-label">\r
                                <span class="material-symbols-outlined">credit_card</span>\r
                                Card ID\r
                            </label>\r
                            <div class="form-input-wrap">\r
                                <input class="form-input form-input--mono" type="text"\r
                                    placeholder="xxxxxxxx..." [(ngModel)]="form.cardId"\r
                                    name="cardId" />\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <!-- Row 4: Bill ID + Submit Button -->\r
                    <div class="form-row form-row--align-end">\r
                        <div class="form-group">\r
                            <label class="form-label">\r
                                <span class="material-symbols-outlined">receipt_long</span>\r
                                Bill ID\r
                            </label>\r
                            <div class="form-input-wrap">\r
                                <input class="form-input form-input--mono" type="text"\r
                                    placeholder="xxxxxxxx..." [(ngModel)]="form.billId"\r
                                    name="billId" />\r
                            </div>\r
                        </div>\r
                        <div class="form-group">\r
                            <button class="submit-btn" [class.submit-btn--loading]="isLoading()"\r
                                [disabled]="!isFormValid() || isLoading()" (click)="initiatePayment()">\r
                                <span class="material-symbols-outlined" *ngIf="!isLoading()">lock</span>\r
                                <span class="submit-btn__spinner" *ngIf="isLoading()"></span>\r
                                {{ isLoading() ? 'Processing...' : 'Secure Payment' }}\r
                            </button>\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </div>\r
        \r
        <!-- ------------------------------------------ RECENT TRANSACTIONS -->\r
        <section class="transactions-section">\r
            <div class="section-header">\r
                <div class="section-header__text">\r
                    <h2 class="section-header__title">Recent Transactions</h2>\r
                    <p class="section-header__subtitle">Your last five secure payments and their current status.</p>\r
                </div>\r
                <button class="btn-refresh" (click)="fetchRecentTransactions()" [disabled]="isHistoryLoading()">\r
                    <span class="material-symbols-outlined" [class.spin]="isHistoryLoading()">refresh</span>\r
                </button>\r
            </div>\r
\r
            <div class="transactions-card glass-card">\r
                <div class="tx-list">\r
                    @for (tx of recentTransactions(); track tx.id) {\r
                        <div class="tx-item" (click)="prefillFromTransaction(tx)">\r
                            <div class="tx-item__left">\r
                                <div class="tx-item__icon" [class]="'tx-item__icon--' + tx.status.toLowerCase()">\r
                                    <span class="material-symbols-outlined">{{ tx.status === 'COMPLETED' ? 'check_circle' : tx.status === 'FAILED' ? 'error' : 'schedule' }}</span>\r
                                </div>\r
                                <div class="tx-item__info">\r
                                    <span class="tx-item__desc">{{ tx.description }}</span>\r
                                    <span class="tx-item__meta">{{ tx.date | date:'MMM d, h:mm a' }} * {{ tx.paymentType }}</span>\r
                                </div>\r
                            </div>\r
                            <div class="tx-item__right">\r
                                <div class="tx-item__amount-block">\r
                                    <span class="tx-item__amount">Rs.{{ tx.amount | number:'1.2-2' }}</span>\r
                                    <span class="tx-item__status" [class]="'tx-item__status--' + tx.status.toLowerCase()">\r
                                        {{ tx.status }}\r
                                    </span>\r
                                </div>\r
                                <button *ngIf="tx.status === 'COMPLETED'" class="btn-reverse" (click)="reversePayment(tx.id); $event.stopPropagation()" title="Reverse Payment">\r
                                    <span class="material-symbols-outlined">history</span>\r
                                </button>\r
                            </div>\r
                        </div>\r
                    } @empty {\r
                        <div class="tx-empty">\r
                            <span class="material-symbols-outlined">history</span>\r
                            <p>No recent transactions found</p>\r
                        </div>\r
                    }\r
                </div>\r
            </div>\r
        </section>\r
\r
    </main>\r
\r
    <!-- ------------------------------------------ OTP MODAL -->\r
    <div class="modal-overlay" *ngIf="isModalOpen()" (click)="closeModal()">\r
        <div class="modal" (click)="$event.stopPropagation()">\r
\r
            <!-- Handlebar -->\r
            <div class="modal__handlebar"></div>\r
\r
            <!-- Lock icon -->\r
            <div class="modal__icon-ring">\r
                <span class="material-symbols-outlined">lock</span>\r
            </div>\r
\r
            <!-- Title -->\r
            <h2 class="modal__title">Verify Identity</h2>\r
\r
            <!-- Subtitle -->\r
            <p class="modal__subtitle">\r
                We've sent a 6-digit secure code to your registered mobile number ending in\r
                <strong>**89</strong>\r
            </p>\r
\r
            <!-- OTP inputs -->\r
            <div class="otp-row" (paste)="onOtpPaste($event)">\r
                <input *ngFor="let digit of otpDigits(); let i = index" #otpInput class="otp-input"\r
                    [class.otp-input--filled]="digit !== ''" type="text" inputmode="numeric" maxlength="1"\r
                    [value]="digit" (input)="onOtpInput($event, i)" (keydown)="onOtpKeydown($event, i)" />\r
            </div>\r
\r
            <!-- OTP error -->\r
            <div class="modal__error" *ngIf="errorMessage()">\r
                <span class="material-symbols-outlined">error</span>\r
                {{ errorMessage() }}\r
            </div>\r
\r
            <!-- Confirm button -->\r
            <button class="modal__confirm-btn" [class.modal__confirm-btn--loading]="isConfirming()"\r
                [disabled]="!isOtpComplete() || isConfirming()" (click)="confirmPayment()">\r
                <span class="modal__confirm-btn__spinner" *ngIf="isConfirming()"></span>\r
                <span class="material-symbols-outlined" *ngIf="!isConfirming()">check_circle</span>\r
                {{ isConfirming() ? 'Verifying...' : 'Confirm Payment' }}\r
            </button>\r
\r
            <!-- Resend -->\r
            <div class="modal__resend">\r
                <span class="modal__resend-link" [class.modal__resend-link--active]="canResend()"\r
                    (click)="resendCode()">\r
                    {{ canResend() ? 'Resend Code' : 'Resend Code (' + resendCountdown() + 's)' }}\r
                </span>\r
            </div>\r
\r
        </div>\r
    </div>\r
\r
</div>\r
\r
`, styles: ['/* src/app/features/payments/pay-bill/pay-bill.scss */\n.pay-bill-page {\n  display: flex;\n  min-height: 100vh;\n}\n.sidebar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 100vh;\n  background: var(--glass-bg);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  display: flex;\n  flex-direction: column;\n  padding: 32px 20px;\n  z-index: 50;\n}\n.sidebar-header {\n  margin-bottom: 40px;\n  padding-left: 12px;\n}\n.brand-name {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: -0.04em;\n  display: block;\n}\n.brand-sub {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--text-secondary);\n  margin-top: -2px;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  text-decoration: none;\n  color: var(--text-secondary);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 500;\n  font-size: 0.95rem;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.nav-item .material-symbols-outlined {\n  font-size: 20px;\n  opacity: 0.8;\n}\n.nav-item:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.nav-item.active {\n  background: var(--primary);\n  color: #fff;\n}\n.nav-item.active .material-symbols-outlined {\n  opacity: 1;\n  font-variation-settings: "FILL" 1;\n}\n.sidebar-promo {\n  padding: 20px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.4);\n  text-align: center;\n}\n.sidebar-promo .promo-title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n}\n.sidebar-promo .promo-desc {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n  margin-bottom: 16px;\n}\n.sidebar-promo .btn-upgrade {\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.sidebar-promo .btn-upgrade:hover {\n  transform: translateY(-2px);\n}\n.notif-badge {\n  background: var(--primary);\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 20px;\n  margin-left: auto;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(107, 110, 249, 0.4);\n}\n.main-content {\n  margin-left: 300px;\n  padding: 24px 32px;\n  flex: 1;\n  min-height: 100vh;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n.page-header__user {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header__avatar {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.875rem;\n  font-weight: 800;\n  color: #fff;\n  flex-shrink: 0;\n  box-shadow: 0 4px 14px rgba(107, 110, 249, 0.35);\n}\n.page-header__name {\n  display: block;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.page-header__tier {\n  display: block;\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.page-header__actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header__icon-btn {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-secondary, #4A4A6A);\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n  transition:\n    background 0.2s,\n    color 0.2s,\n    transform 0.15s;\n}\n.page-header__icon-btn .material-symbols-outlined {\n  font-size: 1.15rem;\n}\n.page-header__icon-btn:hover {\n  background: rgba(107, 110, 249, 0.12);\n  color: var(--primary);\n  transform: translateY(-1px);\n}\n.page-header__report-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 999px;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  cursor: pointer;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.09);\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.page-header__report-btn .material-symbols-outlined {\n  font-size: 1rem;\n  color: var(--primary);\n}\n.page-header__report-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(107, 110, 249, 0.18);\n}\n.title-section {\n  margin-bottom: 24px;\n}\n.title-section__heading {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 2.2rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  line-height: 1.1;\n  margin: 0 0 4px;\n  letter-spacing: -0.02em;\n}\n.title-section__sub {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  margin: 0;\n  line-height: 1.4;\n}\n.toast {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 20px;\n  border-radius: 14px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.88rem;\n  font-weight: 600;\n  margin-bottom: 24px;\n  animation: fadeSlideIn 0.3s ease;\n}\n.toast--success {\n  background: rgba(34, 197, 94, 0.12);\n  border: 1px solid rgba(34, 197, 94, 0.25);\n  color: #15803d;\n}\n.toast--success .material-symbols-outlined {\n  color: #22C55E;\n  font-size: 1.1rem;\n}\n@keyframes fadeSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-row {\n  display: flex;\n  gap: 20px;\n  align-items: flex-start;\n}\n.form-row .form-group {\n  flex: 1;\n  min-width: 0;\n  margin-bottom: 12px;\n}\n.form-row--align-end {\n  align-items: flex-end;\n}\n@media (max-width: 640px) {\n  .form-row {\n    flex-direction: column;\n    gap: 0;\n  }\n  .form-row .form-group {\n    width: 100%;\n  }\n}\n.form-card {\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  border-radius: 20px;\n  padding: 24px 32px;\n  box-shadow: 0 8px 32px rgba(120, 130, 210, 0.12);\n  margin-bottom: 24px;\n}\n.form-card__inner {\n  display: flex;\n  gap: 32px;\n  align-items: flex-start;\n}\n.form-card__left {\n  flex: 0 0 260px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0;\n  padding-top: 8px;\n}\n.form-card__icon-ring {\n  width: 52px;\n  height: 52px;\n  border-radius: 16px;\n  background: rgba(107, 110, 249, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.form-card__icon-ring .material-symbols-outlined {\n  font-size: 1.5rem;\n  color: var(--primary);\n  font-variation-settings: "FILL" 1;\n}\n.form-card__left-title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 12px;\n}\n.form-card__left-body {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  line-height: 1.5;\n  margin: 0 0 20px;\n}\n.form-card__badge-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.form-card__badge {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 12px;\n  border-radius: 999px;\n  background: rgba(107, 110, 249, 0.08);\n  border: 1px solid rgba(107, 110, 249, 0.15);\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: 0.03em;\n}\n.form-card__badge .material-symbols-outlined {\n  font-size: 0.85rem;\n}\n.form-card__right {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.form-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.22);\n  color: var(--error);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.83rem;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n.form-error .material-symbols-outlined {\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.form-group {\n  margin-bottom: 14px;\n}\n.form-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  font-size: 0.68rem;\n  margin-bottom: 8px;\n}\n.form-label .material-symbols-outlined {\n  font-size: 0.9rem;\n  color: var(--primary);\n}\n.form-label-hint {\n  margin-left: auto;\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.6rem;\n  font-weight: 500;\n  color: var(--text-muted);\n  background: rgba(136, 136, 170, 0.1);\n  padding: 2px 8px;\n  border-radius: 999px;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.form-input-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.form-input-wrap--amount .form-input {\n  padding-left: 32px;\n}\n.form-input-prefix {\n  position: absolute;\n  left: 14px;\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--primary);\n  pointer-events: none;\n  z-index: 1;\n}\n.form-input {\n  width: 100%;\n  padding: 13px 16px;\n  border-radius: 14px;\n  border: 1.5px solid rgba(107, 110, 249, 0.15);\n  background: rgba(255, 255, 255, 0.7);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--text-primary);\n  outline: none;\n  transition:\n    border-color 0.2s,\n    box-shadow 0.2s,\n    background 0.2s;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.form-input::placeholder {\n  color: var(--text-muted);\n  font-weight: 400;\n}\n.form-input:focus {\n  border-color: var(--primary);\n  background: rgba(255, 255, 255, 0.92);\n  box-shadow: 0 0 0 3px rgba(107, 110, 249, 0.12);\n}\n.form-input--mono {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.82rem;\n  letter-spacing: 0.02em;\n}\n.form-input--amount {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.form-input[type=number]::-webkit-inner-spin-button,\n.form-input[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.form-input[type=number] {\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.form-select {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  padding-right: 40px;\n}\n.form-select-icon {\n  position: absolute;\n  right: 12px;\n  font-size: 1.1rem;\n  color: var(--text-muted);\n  pointer-events: none;\n}\n.submit-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 13px 24px;\n  margin-top: 0;\n  border-radius: 12px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n  color: #fff;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 8px 24px rgba(107, 110, 249, 0.38);\n  transition:\n    transform 0.18s,\n    box-shadow 0.18s,\n    opacity 0.18s;\n  letter-spacing: 0.01em;\n}\n.submit-btn .material-symbols-outlined {\n  font-size: 1.1rem;\n}\n.submit-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 32px rgba(107, 110, 249, 0.48);\n}\n.submit-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.submit-btn__spinner {\n  width: 18px;\n  height: 18px;\n  border: 2.5px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(30, 30, 50, 0.3);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: overlayIn 0.22s ease;\n}\n@keyframes overlayIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal {\n  background: rgba(230, 230, 235, 0.88);\n  backdrop-filter: blur(32px);\n  -webkit-backdrop-filter: blur(32px);\n  border: 1px solid rgba(255, 255, 255, 0.75);\n  border-radius: 32px;\n  padding: 40px 40px 36px;\n  width: 400px;\n  text-align: center;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.14), 0 8px 24px rgba(107, 110, 249, 0.12);\n  position: relative;\n  animation: modalIn 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.modal__handlebar {\n  width: 40px;\n  height: 4px;\n  border-radius: 999px;\n  background: rgba(107, 110, 249, 0.25);\n  margin: 0 auto 28px;\n}\n.modal__icon-ring {\n  width: 64px;\n  height: 64px;\n  border-radius: 20px;\n  background: rgba(107, 110, 249, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n.modal__icon-ring .material-symbols-outlined {\n  font-size: 1.8rem;\n  color: var(--primary);\n  font-variation-settings: "FILL" 1;\n}\n.modal__title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.55rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 10px;\n  letter-spacing: -0.01em;\n}\n.modal__subtitle {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.855rem;\n  color: var(--text-muted);\n  line-height: 1.6;\n  margin: 0;\n}\n.modal__subtitle strong {\n  color: var(--text-primary);\n  font-weight: 700;\n}\n.modal__error {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 10px 16px;\n  border-radius: 10px;\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: var(--error);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 12px;\n  animation: fadeSlideIn 0.2s ease;\n}\n.modal__error .material-symbols-outlined {\n  font-size: 0.95rem;\n  flex-shrink: 0;\n}\n.modal__confirm-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 16px;\n  border-radius: 999px;\n  border: none;\n  background: var(--primary);\n  color: #fff;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 6px 20px rgba(107, 110, 249, 0.38);\n  transition:\n    transform 0.15s,\n    box-shadow 0.15s,\n    opacity 0.15s;\n}\n.modal__confirm-btn .material-symbols-outlined {\n  font-size: 1.1rem;\n}\n.modal__confirm-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 28px rgba(107, 110, 249, 0.48);\n}\n.modal__confirm-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.modal__confirm-btn__spinner {\n  width: 18px;\n  height: 18px;\n  border: 2.5px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  flex-shrink: 0;\n}\n.modal__resend {\n  margin-top: 16px;\n}\n.modal__resend-link {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  cursor: default;\n  transition: color 0.2s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.modal__resend-link--active {\n  color: var(--primary);\n  cursor: pointer;\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n@keyframes modalIn {\n  from {\n    opacity: 0;\n    transform: scale(0.93) translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.otp-row {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  margin: 32px 0 20px;\n}\n.otp-input {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  border: none;\n  background: #fff;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.05);\n  text-align: center;\n  font-size: 1.4rem;\n  font-weight: 700;\n  font-family: "Space Grotesk", sans-serif;\n  color: var(--primary);\n  outline: none;\n  transition: box-shadow 0.2s, transform 0.15s;\n  caret-color: transparent;\n}\n.otp-input:focus {\n  box-shadow:\n    inset 0 2px 4px rgba(0, 0, 0, 0.06),\n    0 0 0 2.5px var(--primary),\n    0 4px 14px rgba(107, 110, 249, 0.22);\n  transform: scale(1.08);\n}\n.otp-input--filled {\n  background: rgba(107, 110, 249, 0.07);\n}\n.transactions-section {\n  margin-top: 0;\n  margin-bottom: 0;\n  animation: fadeSlideIn 0.4s ease-out;\n}\n.transactions-section .section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 16px;\n}\n.transactions-section .section-header__title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 2px;\n  letter-spacing: -0.01em;\n}\n.transactions-section .section-header__subtitle {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.transactions-section .btn-refresh {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--primary);\n  transition: all 0.2s;\n}\n.transactions-section .btn-refresh:hover:not(:disabled) {\n  background: rgba(107, 110, 249, 0.1);\n  transform: rotate(180deg);\n}\n.transactions-section .btn-refresh:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.transactions-section .btn-refresh .spin {\n  animation: spin 1s linear infinite;\n}\n.transactions-card {\n  border-radius: 24px;\n  overflow: hidden;\n}\n.tx-list {\n  display: flex;\n  flex-direction: column;\n}\n.tx-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(136, 136, 170, 0.08);\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n}\n.tx-item:last-child {\n  border-bottom: none;\n}\n.tx-item:hover {\n  background: rgba(255, 255, 255, 0.4);\n  transform: translateX(8px);\n}\n.tx-item__left {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.tx-item__icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tx-item__icon .material-symbols-outlined {\n  font-size: 1.4rem;\n}\n.tx-item__icon--completed {\n  background: rgba(34, 197, 94, 0.1);\n  color: #22C55E;\n}\n.tx-item__icon--failed {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.tx-item__icon--pending {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.tx-item__info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.tx-item__desc {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.tx-item__meta {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.tx-item__right {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 16px;\n}\n.tx-item__amount-block {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n}\n.tx-item__amount {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.tx-item__status {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  font-size: 0.6rem;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.tx-item__status--completed {\n  background: rgba(34, 197, 94, 0.1);\n  color: #15803d;\n}\n.tx-item__status--failed {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n}\n.tx-item__status--pending {\n  background: rgba(245, 158, 11, 0.1);\n  color: #b45309;\n}\n.tx-item .btn-reverse {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1px solid rgba(136, 136, 170, 0.2);\n  background: rgba(255, 255, 255, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-muted);\n  transition: all 0.2s ease;\n}\n.tx-item .btn-reverse:hover {\n  background: rgba(239, 68, 68, 0.1);\n  color: var(--error);\n  border-color: rgba(239, 68, 68, 0.2);\n  transform: rotate(-90deg);\n}\n.tx-item .btn-reverse .material-symbols-outlined {\n  font-size: 1.1rem;\n}\n.tx-empty {\n  padding: 60px;\n  text-align: center;\n  color: var(--text-muted);\n}\n.tx-empty .material-symbols-outlined {\n  font-size: 3rem;\n  opacity: 0.3;\n  margin-bottom: 12px;\n}\n.tx-empty p {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .transactions-section .section-header__title {\n    font-size: 1.4rem;\n  }\n  .tx-item {\n    padding: 16px;\n  }\n  .tx-item__amount {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=pay-bill.css.map */\n'] }]
  }], null, { otpInputs: [{
    type: ViewChildren,
    args: ["otpInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PayBillComponent, { className: "PayBillComponent", filePath: "src/app/features/payments/pay-bill/pay-bill.ts", lineNumber: 75 });
})();
export {
  PayBillComponent
};
//# sourceMappingURL=chunk-3LY6HXRD.js.map
