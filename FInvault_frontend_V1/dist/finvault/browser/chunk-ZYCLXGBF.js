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
  ComingSoonComponent
} from "./chunk-ESHWFYCR.js";
import {
  ThemeToggleComponent
} from "./chunk-AQGYU3VR.js";
import {
  CardService,
  GlobalUiService
} from "./chunk-4BOOVA7O.js";
import {
  SidebarComponent
} from "./chunk-JZ2MQXBK.js";
import {
  AuthService
} from "./chunk-P2F4JYQH.js";
import {
  ApiService
} from "./chunk-4SYUYOJR.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  HttpClient,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  Output,
  Router,
  RouterLink,
  ViewChildren,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-SYL3PSAO.js";

// src/app/core/services/external-bill.service.ts
var ExternalBillService = class _ExternalBillService {
  apiService = inject(ApiService);
  payBill(payload) {
    return this.apiService.post("/api/external-bills/pay", payload);
  }
  verifyOtp(billId, otpCode) {
    return this.apiService.put(`/api/external-bills/${billId}/verify`, { otpCode });
  }
  getHistory() {
    return this.apiService.get("/api/external-bills");
  }
  static \u0275fac = function ExternalBillService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExternalBillService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExternalBillService, factory: _ExternalBillService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExternalBillService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/billing/biller-form-modal/biller-form-modal.ts
var _c0 = ["otpInput"];
var _c1 = (a0) => ({ "background-color": a0 });
var _forTrack0 = ($index, $item) => $item.id;
function BillerFormModalComponent_Conditional_2_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r3 = ctx.$implicit;
    \u0275\u0275property("value", card_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", card_r3.network, " ", card_r3.maskedNumber, " (Limit: Rs.", card_r3.creditLimit - card_r3.currentBalance, ")");
  }
}
function BillerFormModalComponent_Conditional_2_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 8);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMsg(), " ");
  }
}
function BillerFormModalComponent_Conditional_2_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 26);
    \u0275\u0275text(1, " Processing... ");
  }
}
function BillerFormModalComponent_Conditional_2_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Proceed to Pay");
    \u0275\u0275elementEnd();
  }
}
function BillerFormModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 4);
    \u0275\u0275elementStart(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "span", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h2", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 10);
    \u0275\u0275listener("click", function BillerFormModalComponent_Conditional_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closed.emit());
    });
    \u0275\u0275elementStart(9, "span", 8);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "label", 13);
    \u0275\u0275text(14, "Pay From Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 14)(16, "select", 15);
    \u0275\u0275twoWayListener("ngModelChange", function BillerFormModalComponent_Conditional_2_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedCardId, $event) || (ctx_r1.selectedCardId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "option", 16);
    \u0275\u0275text(18, "Select a linked card");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, BillerFormModalComponent_Conditional_2_For_20_Template, 2, 4, "option", 17, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 18);
    \u0275\u0275text(22, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 12)(24, "label", 13);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 14)(27, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function BillerFormModalComponent_Conditional_2_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.billNumber, $event) || (ctx_r1.billNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 12)(29, "label", 13);
    \u0275\u0275text(30, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 20)(32, "span", 21);
    \u0275\u0275text(33, "Rs.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function BillerFormModalComponent_Conditional_2_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.amount, $event) || (ctx_r1.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(35, BillerFormModalComponent_Conditional_2_Conditional_35_Template, 4, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 24)(37, "button", 25);
    \u0275\u0275listener("click", function BillerFormModalComponent_Conditional_2_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitForm());
    });
    \u0275\u0275conditionalCreate(38, BillerFormModalComponent_Conditional_2_Conditional_38_Template, 2, 0)(39, BillerFormModalComponent_Conditional_2_Conditional_39_Template, 2, 0, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(12, _c1, ctx_r1.getCategoryColor(ctx_r1.billerCategory)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCategoryIcon(ctx_r1.billerCategory));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Pay ", ctx_r1.billerName || "Bill");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedCardId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.cards());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getBillNumberLabel(ctx_r1.billerCategory));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate1("Enter ", ctx_r1.getBillNumberLabel(ctx_r1.billerCategory).toLowerCase()));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.billNumber);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.amount);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errorMsg() ? 35 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.isFormValid() || ctx_r1.isLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoading() ? 38 : 39);
  }
}
function BillerFormModalComponent_Conditional_3_input_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 37, 0);
    \u0275\u0275listener("input", function BillerFormModalComponent_Conditional_3_input_9_Template_input_input_0_listener($event) {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOtpInput($event, i_r6));
    })("keydown", function BillerFormModalComponent_Conditional_3_input_9_Template_input_keydown_0_listener($event) {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOtpKeydown($event, i_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const digit_r7 = ctx.$implicit;
    \u0275\u0275classProp("otp-input--filled", digit_r7 !== "");
    \u0275\u0275property("value", digit_r7);
  }
}
function BillerFormModalComponent_Conditional_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "span", 8);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMsg(), " ");
  }
}
function BillerFormModalComponent_Conditional_3_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 39);
  }
}
function BillerFormModalComponent_Conditional_3_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function BillerFormModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 4);
    \u0275\u0275elementStart(1, "div", 27)(2, "span", 8);
    \u0275\u0275text(3, "mail");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h2", 28);
    \u0275\u0275text(5, "Enter Verification Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 29);
    \u0275\u0275text(7, " We've sent a 6-digit OTP to your registered email address. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 30);
    \u0275\u0275listener("paste", function BillerFormModalComponent_Conditional_3_Template_div_paste_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOtpPaste($event));
    });
    \u0275\u0275template(9, BillerFormModalComponent_Conditional_3_input_9_Template, 2, 3, "input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, BillerFormModalComponent_Conditional_3_div_10_Template, 4, 1, "div", 32);
    \u0275\u0275elementStart(11, "button", 33);
    \u0275\u0275listener("click", function BillerFormModalComponent_Conditional_3_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.verifyOtp());
    });
    \u0275\u0275template(12, BillerFormModalComponent_Conditional_3_span_12_Template, 1, 0, "span", 34)(13, BillerFormModalComponent_Conditional_3_span_13_Template, 2, 0, "span", 35);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 36);
    \u0275\u0275listener("click", function BillerFormModalComponent_Conditional_3_Template_a_click_15_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetToForm());
    });
    \u0275\u0275text(16, "\u2190 Back to Details");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.otpDigits());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMsg());
    \u0275\u0275advance();
    \u0275\u0275classProp("modal__confirm-btn--loading", ctx_r1.isLoading());
    \u0275\u0275property("disabled", !ctx_r1.isOtpComplete() || ctx_r1.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isLoading() ? "Verifying..." : "Verify & Pay", " ");
  }
}
function BillerFormModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 40)(2, "span", 8);
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h2", 28);
    \u0275\u0275text(5, "Payment Successful!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 24)(9, "button", 41);
    \u0275\u0275listener("click", function BillerFormModalComponent_Conditional_4_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSuccess());
    });
    \u0275\u0275text(10, "Done");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" Rs. ", ctx_r1.amount(), " paid to ", ctx_r1.billerName, ". Your card balance has been updated. ");
  }
}
var BillerFormModalComponent = class _BillerFormModalComponent {
  billerName = "";
  billerCategory = "";
  closed = new EventEmitter();
  paymentSuccess = new EventEmitter();
  cardService = inject(CardService);
  authService = inject(AuthService);
  externalBillService = inject(ExternalBillService);
  step = signal("form", ...ngDevMode ? [{ debugName: "step" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMsg = signal(null, ...ngDevMode ? [{ debugName: "errorMsg" }] : (
    /* istanbul ignore next */
    []
  ));
  billId = signal(null, ...ngDevMode ? [{ debugName: "billId" }] : (
    /* istanbul ignore next */
    []
  ));
  // Form fields
  selectedCardId = signal("", ...ngDevMode ? [{ debugName: "selectedCardId" }] : (
    /* istanbul ignore next */
    []
  ));
  billNumber = signal("", ...ngDevMode ? [{ debugName: "billNumber" }] : (
    /* istanbul ignore next */
    []
  ));
  amount = signal(null, ...ngDevMode ? [{ debugName: "amount" }] : (
    /* istanbul ignore next */
    []
  ));
  // Auth details
  userId = "";
  email = "";
  // OTP
  otpDigits = signal(["", "", "", "", "", ""], ...ngDevMode ? [{ debugName: "otpDigits" }] : (
    /* istanbul ignore next */
    []
  ));
  otpInputs;
  otpCode = computed(() => this.otpDigits().join(""), ...ngDevMode ? [{ debugName: "otpCode" }] : (
    /* istanbul ignore next */
    []
  ));
  isOtpComplete = computed(() => this.otpCode().length === 6 && this.otpDigits().every((d) => d !== ""), ...ngDevMode ? [{ debugName: "isOtpComplete" }] : (
    /* istanbul ignore next */
    []
  ));
  cards = computed(() => this.cardService.cards() || [], ...ngDevMode ? [{ debugName: "cards" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.cardService.refreshCards();
    this.userId = this.authService.getUserId() || "";
    this.autoFillEmailFromToken();
  }
  autoFillEmailFromToken() {
    try {
      const token = localStorage.getItem("fv_access_token");
      if (!token)
        return;
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (payload.email) {
        this.email = payload.email;
      }
    } catch {
    }
  }
  getCategoryIcon(cat) {
    switch (cat) {
      case "ELECTRICITY":
        return "bolt";
      case "WATER":
        return "water_drop";
      case "INTERNET":
        return "wifi";
      case "RECHARGE":
        return "phone_iphone";
      case "RENT":
        return "apartment";
      case "GAS":
        return "local_gas_station";
      case "INSURANCE":
        return "health_and_safety";
      case "METRO":
        return "train";
      default:
        return "receipt_long";
    }
  }
  getCategoryColor(cat) {
    switch (cat) {
      case "ELECTRICITY":
        return "#EAB308";
      case "WATER":
        return "#3B82F6";
      case "INTERNET":
        return "#F97316";
      case "RECHARGE":
        return "#EC4899";
      case "RENT":
        return "#A855F7";
      case "GAS":
        return "#14B8A6";
      case "INSURANCE":
        return "#6B7280";
      case "METRO":
        return "#EF4444";
      default:
        return "#6B6EF9";
    }
  }
  getBillNumberLabel(cat) {
    switch (cat) {
      case "ELECTRICITY":
        return "Consumer Number";
      case "RENT":
        return "Lease/Agreement Number";
      case "INTERNET":
        return "Account / Customer ID";
      case "METRO":
        return "Metro Card Number";
      case "WATER":
        return "Connection ID";
      case "GAS":
        return "BP Number";
      case "RECHARGE":
        return "Mobile Number";
      case "INSURANCE":
        return "Policy Number";
      default:
        return "Bill / Reference Number";
    }
  }
  isFormValid() {
    const amt = this.amount();
    return !!this.selectedCardId() && !!this.billNumber().trim() && amt !== null && amt >= 1;
  }
  onBackdropClick() {
    if (this.step() !== "otp") {
      this.closed.emit();
    }
  }
  submitForm() {
    if (!this.isFormValid())
      return;
    this.errorMsg.set(null);
    this.isLoading.set(true);
    const payload = {
      userId: this.userId,
      cardId: this.selectedCardId(),
      email: this.email,
      billerName: this.billerName,
      billerCategory: this.billerCategory,
      billNumber: this.billNumber(),
      amount: Number(this.amount())
    };
    this.externalBillService.payBill(payload).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        if (res && res.id) {
          this.billId.set(res.id);
          this.step.set("otp");
          setTimeout(() => {
            this.otpInputs.toArray()[0]?.nativeElement.focus();
          }, 100);
        } else {
          this.errorMsg.set("Invalid response from server.");
        }
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMsg.set(err.error?.message || "Failed to initiate payment.");
      }
    });
  }
  resetToForm() {
    this.step.set("form");
    this.errorMsg.set(null);
    this.otpDigits.set(["", "", "", "", "", ""]);
  }
  // -- OTP Handlers copied from pay-bill.ts -- \\
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
  verifyOtp() {
    if (!this.isOtpComplete())
      return;
    const id = this.billId();
    if (!id)
      return;
    this.isLoading.set(true);
    this.errorMsg.set(null);
    this.externalBillService.verifyOtp(id, this.otpCode()).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.step.set("success");
        this.cardService.refreshCards(true);
        this.paymentSuccess.emit();
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMsg.set(err.error?.message || "Invalid or expired OTP. Please try again.");
      }
    });
  }
  closeSuccess() {
    this.closed.emit();
  }
  static \u0275fac = function BillerFormModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BillerFormModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillerFormModalComponent, selectors: [["app-biller-form-modal"]], viewQuery: function BillerFormModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.otpInputs = _t);
    }
  }, inputs: { billerName: "billerName", billerCategory: "billerCategory" }, outputs: { closed: "closed", paymentSuccess: "paymentSuccess" }, decls: 5, vars: 3, consts: [["otpInput", ""], [1, "modal-overlay", 3, "click"], [1, "modal", "glass-card-strong", 3, "click"], [1, "success-screen"], [1, "modal__handlebar"], [1, "modal-header"], [1, "modal-header__left"], [1, "modal-header__icon", 3, "ngStyle"], [1, "material-symbols-outlined"], [1, "modal-header__title"], [1, "modal-header__close", 3, "click"], [1, "form-body"], [1, "form-group"], [1, "form-label"], [1, "form-input-wrap"], [1, "form-input", "form-select", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", "", "selected", ""], [3, "value"], [1, "material-symbols-outlined", "form-select-icon"], ["type", "text", 1, "form-input", 3, "ngModelChange", "ngModel", "placeholder"], [1, "form-input-wrap", "form-input-wrap--amount"], [1, "form-input-prefix"], ["type", "number", "min", "1", "step", "0.01", "placeholder", "0.00", 1, "form-input", "form-input--amount", 3, "ngModelChange", "ngModel"], [1, "form-error"], [1, "modal-footer"], [1, "submit-btn", 3, "click", "disabled"], [1, "submit-btn__spinner"], [1, "modal__icon-ring"], [1, "modal__title"], [1, "modal__subtitle"], [1, "otp-row", 3, "paste"], ["class", "otp-input", "type", "text", "inputmode", "numeric", "maxlength", "1", 3, "otp-input--filled", "value", "input", "keydown", 4, "ngFor", "ngForOf"], ["class", "modal__error", 4, "ngIf"], [1, "modal__confirm-btn", 3, "click", "disabled"], ["class", "modal__confirm-btn__spinner", 4, "ngIf"], ["class", "material-symbols-outlined", 4, "ngIf"], [1, "back-link", 3, "click"], ["type", "text", "inputmode", "numeric", "maxlength", "1", 1, "otp-input", 3, "input", "keydown", "value"], [1, "modal__error"], [1, "modal__confirm-btn__spinner"], [1, "success-circle"], [1, "btn-ghost", 3, "click"]], template: function BillerFormModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("click", function BillerFormModalComponent_Template_div_click_0_listener() {
        return ctx.onBackdropClick();
      });
      \u0275\u0275elementStart(1, "div", 2);
      \u0275\u0275listener("click", function BillerFormModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275conditionalCreate(2, BillerFormModalComponent_Conditional_2_Template, 40, 14);
      \u0275\u0275conditionalCreate(3, BillerFormModalComponent_Conditional_3_Template, 17, 8);
      \u0275\u0275conditionalCreate(4, BillerFormModalComponent_Conditional_4_Template, 11, 2, "div", 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.step() === "form" ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.step() === "otp" ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.step() === "success" ? 4 : -1);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgStyle, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ['\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.4);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: _ngcontent-%COMP%_fadeIn 0.15s ease-out;\n}\n.modal[_ngcontent-%COMP%] {\n  max-width: 480px;\n  width: 90%;\n  border-radius: 20px;\n  padding: 24px;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease-out;\n  position: relative;\n}\n.modal__handlebar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 4px;\n  background: var(--glass-border);\n  border-radius: 4px;\n  margin: 0 auto 16px;\n  display: none;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.modal-header__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-header__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.modal-header__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-header__close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--text-secondary);\n  cursor: pointer;\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n}\n.modal-header__close[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n}\n.form-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--glass-bg);\n  border: 1.5px solid var(--glass-border);\n  border-radius: 12px;\n  padding: 12px 16px;\n  font-family: "DM Sans", sans-serif;\n  font-size: 15px;\n  color: var(--text-primary);\n  outline: none;\n  transition: border-color 0.2s;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.form-input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-input--amount[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  font-family: "DM Mono", monospace;\n}\n.form-input-prefix[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  font-family: "DM Mono", monospace;\n  color: var(--text-secondary);\n  pointer-events: none;\n}\n.form-select[_ngcontent-%COMP%] {\n  appearance: none;\n  padding-right: 40px;\n}\n.form-select-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  pointer-events: none;\n  color: var(--text-secondary);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6B6EF9,\n      #A78BFA);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  padding: 14px 24px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  transition: opacity 0.2s, transform 0.15s;\n  height: 48px;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.92;\n  transform: translateY(-1px);\n}\n.submit-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.submit-btn__spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.form-error[_ngcontent-%COMP%] {\n  color: var(--error);\n  font-size: 13px;\n  margin-top: 6px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.modal__icon-ring[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: var(--glass-bg);\n  border: 1.5px solid var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  color: var(--primary);\n}\n.modal__icon-ring[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.modal__title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 8px;\n}\n.modal__subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-secondary);\n  font-size: 14px;\n  margin: 0 0 32px;\n  line-height: 1.5;\n}\n.otp-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n.otp-input[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 56px;\n  background: var(--glass-bg);\n  border: 1.5px solid var(--glass-border);\n  border-radius: 12px;\n  text-align: center;\n  font-family: "DM Mono", monospace;\n  font-size: 24px;\n  color: var(--text-primary);\n  outline: none;\n  transition: all 0.2s;\n}\n.otp-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 4px rgba(107, 110, 249, 0.1);\n}\n.otp-input--filled[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n}\n.modal__error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: var(--error);\n  padding: 12px 16px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  margin-bottom: 24px;\n}\n.modal__confirm-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6B6EF9,\n      #A78BFA);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  padding: 14px 24px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  transition: opacity 0.2s, transform 0.15s;\n  height: 48px;\n}\n.modal__confirm-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.92;\n  transform: translateY(-1px);\n}\n.modal__confirm-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.modal__confirm-btn__spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.modal__resend[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n.modal__resend-link[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 14px;\n  cursor: not-allowed;\n  transition: color 0.2s;\n}\n.modal__resend-link--active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  cursor: pointer;\n  font-weight: 600;\n}\n.success-circle[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgba(34, 197, 94, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 24px;\n  animation: _ngcontent-%COMP%_scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.success-circle[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: var(--success);\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--text-primary);\n  border: 1.5px solid var(--glass-border);\n  border-radius: 12px;\n  padding: 14px 24px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: background 0.2s;\n  height: 48px;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: var(--glass-bg-strong);\n}\n.back-link[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  margin-top: 16px;\n  text-decoration: none;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.qp-color-ELECTRICITY[_ngcontent-%COMP%] {\n  background: #EAB308;\n}\n.qp-color-WATER[_ngcontent-%COMP%] {\n  background: #3B82F6;\n}\n.qp-color-INTERNET[_ngcontent-%COMP%] {\n  background: #F97316;\n}\n.qp-color-RECHARGE[_ngcontent-%COMP%] {\n  background: #EC4899;\n}\n.qp-color-RENT[_ngcontent-%COMP%] {\n  background: #A855F7;\n}\n.qp-color-GAS[_ngcontent-%COMP%] {\n  background: #14B8A6;\n}\n.qp-color-INSURANCE[_ngcontent-%COMP%] {\n  background: #6B7280;\n}\n.qp-color-METRO[_ngcontent-%COMP%] {\n  background: #EF4444;\n}\n/*# sourceMappingURL=biller-form-modal.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BillerFormModalComponent, [{
    type: Component,
    args: [{ selector: "app-biller-form-modal", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="modal-overlay" (click)="onBackdropClick()">
    <div class="modal glass-card-strong" (click)="$event.stopPropagation()">
        
        @if (step() === 'form') {
            <!-- Handlebar -->
            <div class="modal__handlebar"></div>
            
            <div class="modal-header">
                <div class="modal-header__left">
                    <div class="modal-header__icon" [ngStyle]="{'background-color': getCategoryColor(billerCategory)}">
                        <span class="material-symbols-outlined">{{ getCategoryIcon(billerCategory) }}</span>
                    </div>
                    <h2 class="modal-header__title">Pay {{ billerName || 'Bill' }}</h2>
                </div>
                <button class="modal-header__close" (click)="closed.emit()">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>

            <div class="form-body">
                <div class="form-group">
                    <label class="form-label">Pay From Card</label>
                    <div class="form-input-wrap">
                        <select class="form-input form-select" [(ngModel)]="selectedCardId">
                            <option value="" disabled selected>Select a linked card</option>
                            @for (card of cards(); track card.id) {
                                <option [value]="card.id">{{ card.network }} {{ card.maskedNumber }} (Limit: Rs.{{ card.creditLimit - card.currentBalance }})</option>
                            }
                        </select>
                        <span class="material-symbols-outlined form-select-icon">expand_more</span>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">{{ getBillNumberLabel(billerCategory) }}</label>
                    <div class="form-input-wrap">
                        <input type="text" class="form-input" [(ngModel)]="billNumber" placeholder="Enter {{ getBillNumberLabel(billerCategory).toLowerCase() }}" />
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">Amount</label>
                    <div class="form-input-wrap form-input-wrap--amount">
                        <span class="form-input-prefix">Rs.</span>
                        <input type="number" class="form-input form-input--amount" [(ngModel)]="amount" min="1" step="0.01" placeholder="0.00" />
                    </div>
                </div>

                @if (errorMsg()) {
                    <div class="form-error">
                        <span class="material-symbols-outlined">error</span>
                        {{ errorMsg() }}
                    </div>
                }
            </div>

            <div class="modal-footer">
                <button class="submit-btn" [disabled]="!isFormValid() || isLoading()" (click)="submitForm()">
                    @if (isLoading()) {
                        <span class="submit-btn__spinner"></span>
                        Processing...
                    } @else {
                        <span>Proceed to Pay</span>
                    }
                </button>
            </div>
        }

        @if (step() === 'otp') {
            <!-- Handlebar -->
            <div class="modal__handlebar"></div>

            <!-- Lock icon -->
            <div class="modal__icon-ring">
                <span class="material-symbols-outlined">mail</span>
            </div>

            <!-- Title -->
            <h2 class="modal__title">Enter Verification Code</h2>

            <!-- Subtitle -->
            <p class="modal__subtitle">
                We've sent a 6-digit OTP to your registered email address.
            </p>

            <!-- OTP inputs -->
            <div class="otp-row" (paste)="onOtpPaste($event)">
                <input *ngFor="let digit of otpDigits(); let i = index" #otpInput class="otp-input"
                    [class.otp-input--filled]="digit !== ''" type="text" inputmode="numeric" maxlength="1"
                    [value]="digit" (input)="onOtpInput($event, i)" (keydown)="onOtpKeydown($event, i)" />
            </div>

            <!-- OTP error -->
            <div class="modal__error" *ngIf="errorMsg()">
                <span class="material-symbols-outlined">error</span>
                {{ errorMsg() }}
            </div>

            <!-- Confirm button -->
            <button class="modal__confirm-btn" [class.modal__confirm-btn--loading]="isLoading()"
                [disabled]="!isOtpComplete() || isLoading()" (click)="verifyOtp()">
                <span class="modal__confirm-btn__spinner" *ngIf="isLoading()"></span>
                <span class="material-symbols-outlined" *ngIf="!isLoading()">check_circle</span>
                {{ isLoading() ? 'Verifying...' : 'Verify & Pay' }}
            </button>

            <!-- Back link -->
            <a class="back-link" (click)="resetToForm()">\u2190 Back to Details</a>
        }

        @if (step() === 'success') {
            <div class="success-screen">
                <div class="success-circle">
                    <span class="material-symbols-outlined">check</span>
                </div>
                
                <h2 class="modal__title">Payment Successful!</h2>
                <p class="modal__subtitle">
                    Rs. {{ amount() }} paid to {{ billerName }}. Your card balance has been updated.
                </p>

                <div class="modal-footer">
                    <button class="btn-ghost" (click)="closeSuccess()">Done</button>
                </div>
            </div>
        }
    </div>
</div>
`, styles: ['/* src/app/features/billing/biller-form-modal/biller-form-modal.scss */\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.4);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: fadeIn 0.15s ease-out;\n}\n.modal {\n  max-width: 480px;\n  width: 90%;\n  border-radius: 20px;\n  padding: 24px;\n  animation: slideUp 0.3s ease-out;\n  position: relative;\n}\n.modal__handlebar {\n  width: 40px;\n  height: 4px;\n  background: var(--glass-border);\n  border-radius: 4px;\n  margin: 0 auto 16px;\n  display: none;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.modal-header__left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-header__icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.modal-header__title {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-header__close {\n  background: transparent;\n  border: none;\n  color: var(--text-secondary);\n  cursor: pointer;\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s;\n}\n.modal-header__close:hover {\n  color: var(--text-primary);\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-label {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n}\n.form-input-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.form-input {\n  width: 100%;\n  background: var(--glass-bg);\n  border: 1.5px solid var(--glass-border);\n  border-radius: 12px;\n  padding: 12px 16px;\n  font-family: "DM Sans", sans-serif;\n  font-size: 15px;\n  color: var(--text-primary);\n  outline: none;\n  transition: border-color 0.2s;\n}\n.form-input:focus {\n  border-color: var(--primary);\n}\n.form-input:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-input--amount {\n  padding-left: 40px;\n  font-family: "DM Mono", monospace;\n}\n.form-input-prefix {\n  position: absolute;\n  left: 16px;\n  font-family: "DM Mono", monospace;\n  color: var(--text-secondary);\n  pointer-events: none;\n}\n.form-select {\n  appearance: none;\n  padding-right: 40px;\n}\n.form-select-icon {\n  position: absolute;\n  right: 16px;\n  pointer-events: none;\n  color: var(--text-secondary);\n}\n.modal-footer {\n  margin-top: 32px;\n}\n.submit-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #6B6EF9,\n      #A78BFA);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  padding: 14px 24px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  transition: opacity 0.2s, transform 0.15s;\n  height: 48px;\n}\n.submit-btn:hover:not(:disabled) {\n  opacity: 0.92;\n  transform: translateY(-1px);\n}\n.submit-btn:active:not(:disabled) {\n  transform: translateY(0);\n}\n.submit-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.submit-btn__spinner {\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.form-error {\n  color: var(--error);\n  font-size: 13px;\n  margin-top: 6px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.modal__icon-ring {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: var(--glass-bg);\n  border: 1.5px solid var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n  color: var(--primary);\n}\n.modal__icon-ring .material-symbols-outlined {\n  font-size: 32px;\n}\n.modal__title {\n  text-align: center;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 8px;\n}\n.modal__subtitle {\n  text-align: center;\n  color: var(--text-secondary);\n  font-size: 14px;\n  margin: 0 0 32px;\n  line-height: 1.5;\n}\n.otp-row {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n.otp-input {\n  width: 48px;\n  height: 56px;\n  background: var(--glass-bg);\n  border: 1.5px solid var(--glass-border);\n  border-radius: 12px;\n  text-align: center;\n  font-family: "DM Mono", monospace;\n  font-size: 24px;\n  color: var(--text-primary);\n  outline: none;\n  transition: all 0.2s;\n}\n.otp-input:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 4px rgba(107, 110, 249, 0.1);\n}\n.otp-input--filled {\n  border-color: var(--primary);\n}\n.modal__error {\n  background: rgba(239, 68, 68, 0.1);\n  color: var(--error);\n  padding: 12px 16px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  margin-bottom: 24px;\n}\n.modal__confirm-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #6B6EF9,\n      #A78BFA);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  padding: 14px 24px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  transition: opacity 0.2s, transform 0.15s;\n  height: 48px;\n}\n.modal__confirm-btn:hover:not(:disabled) {\n  opacity: 0.92;\n  transform: translateY(-1px);\n}\n.modal__confirm-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.modal__confirm-btn__spinner {\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.modal__resend {\n  text-align: center;\n  margin-top: 20px;\n}\n.modal__resend-link {\n  color: var(--text-secondary);\n  font-size: 14px;\n  cursor: not-allowed;\n  transition: color 0.2s;\n}\n.modal__resend-link--active {\n  color: var(--primary);\n  cursor: pointer;\n  font-weight: 600;\n}\n.success-circle {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgba(34, 197, 94, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 24px;\n  animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.success-circle .material-symbols-outlined {\n  font-size: 40px;\n  color: var(--success);\n}\n.btn-ghost {\n  background: transparent;\n  color: var(--text-primary);\n  border: 1.5px solid var(--glass-border);\n  border-radius: 12px;\n  padding: 14px 24px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: background 0.2s;\n  height: 48px;\n}\n.btn-ghost:hover {\n  background: var(--glass-bg-strong);\n}\n.back-link {\n  color: var(--primary);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  margin-top: 16px;\n  text-decoration: none;\n}\n.back-link:hover {\n  text-decoration: underline;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes scaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.qp-color-ELECTRICITY {\n  background: #EAB308;\n}\n.qp-color-WATER {\n  background: #3B82F6;\n}\n.qp-color-INTERNET {\n  background: #F97316;\n}\n.qp-color-RECHARGE {\n  background: #EC4899;\n}\n.qp-color-RENT {\n  background: #A855F7;\n}\n.qp-color-GAS {\n  background: #14B8A6;\n}\n.qp-color-INSURANCE {\n  background: #6B7280;\n}\n.qp-color-METRO {\n  background: #EF4444;\n}\n/*# sourceMappingURL=biller-form-modal.css.map */\n'] }]
  }], null, { billerName: [{
    type: Input
  }], billerCategory: [{
    type: Input
  }], closed: [{
    type: Output
  }], paymentSuccess: [{
    type: Output
  }], otpInputs: [{
    type: ViewChildren,
    args: ["otpInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillerFormModalComponent, { className: "BillerFormModalComponent", filePath: "src/app/features/billing/biller-form-modal/biller-form-modal.ts", lineNumber: 15 });
})();

// src/app/features/billing/bills-list/bills.ts
function BillsComponent_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function BillsComponent_button_24_Template_button_click_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(f_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("filter-pill--active", ctx_r2.activeFilter() === f_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r2, " ");
  }
}
function BillsComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function BillsComponent_button_34_Template_button_click_0_listener() {
      const cat_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onQuickPayClick(cat_r5.label, cat_r5.category));
    });
    \u0275\u0275elementStart(1, "span", 39)(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    \u0275\u0275classMap(\u0275\u0275interpolate1("qp-tile qp-cat-", cat_r5.id));
    \u0275\u0275property("title", cat_r5.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r5.label);
  }
}
function BillsComponent_div_36_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div", 48)(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 49)(6, "span", 50);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 51);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 52)(11, "span", 53);
    \u0275\u0275text(12, "TOTAL DUE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 54);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 52)(16, "span", 53);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 54);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 55)(21, "span", 53);
    \u0275\u0275text(22, "STATUS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 56);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 57);
    \u0275\u0275listener("click", function BillsComponent_div_36_div_6_Template_button_click_25_listener() {
      const bill_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onBillAction(bill_r7));
    });
    \u0275\u0275elementStart(26, "span", 11);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const bill_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "bill-card__icon-wrap--" + bill_r7.iconBg);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bill_r7.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(bill_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bill_r7.subtitle);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(bill_r7.totalDue);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(bill_r7.secondaryLabel);
    \u0275\u0275advance();
    \u0275\u0275classProp("bill-card__amount--paid", bill_r7.secondaryLabel === "AMOUNT PAID" && bill_r7.status === "PAID");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bill_r7.secondaryAmount, " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("status-pill--overdue", bill_r7.status === "OVERDUE")("status-pill--pending", bill_r7.status === "PENDING")("status-pill--paid", bill_r7.status === "PAID")("status-pill--partial", bill_r7.status === "PARTIALLYPAID");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bill_r7.status === "PARTIALLYPAID" ? "PARTIALLY PAID" : bill_r7.status, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bill-card__action--primary", bill_r7.actionStyle === "primary")("bill-card__action--muted", bill_r7.actionStyle === "muted");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bill_r7.actionIcon);
  }
}
function BillsComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, BillsComponent_div_36_div_6_Template, 28, 23, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r8 = ctx.$implicit;
    \u0275\u0275classProp("bill-group--faded", group_r8.faded);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bill-group__month--muted", group_r8.faded);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r8.month, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bill-group__badge--error", group_r8.badgeType === "error")("bill-group__badge--muted", group_r8.badgeType === "muted");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r8.badgeLabel, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", group_r8.bills);
  }
}
function BillsComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 59);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No bills found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Your bills will appear here.");
    \u0275\u0275elementEnd()();
  }
}
function BillsComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, " You have ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " scheduled for the next 7 days. Ensure your account is funded. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.upcomingBills().length, " recurring bills");
  }
}
function BillsComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, "No upcoming bills scheduled within the next 7 days.");
    \u0275\u0275elementEnd();
  }
}
function BillsComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "span", 62);
    \u0275\u0275text(3, "TOTAL OUTSTANDING");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 63)(5, "span", 64);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 65);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(9, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Rs.", ctx_r2.billingSummary().totalOutstanding || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.billingSummary().pendingCount, " PENDING");
  }
}
function BillsComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-biller-form-modal", 67);
    \u0275\u0275listener("closed", function BillsComponent_Conditional_52_Template_app_biller_form_modal_closed_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onModalClosed());
    })("paymentSuccess", function BillsComponent_Conditional_52_Template_app_biller_form_modal_paymentSuccess_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onModalClosed());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("billerName", ctx_r2.activeBillerName())("billerCategory", ctx_r2.activeBillerCategory());
  }
}
var BillsComponent = class _BillsComponent {
  router;
  http;
  activeFilter = signal("All Status", ...ngDevMode ? [{ debugName: "activeFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  // Missing template properties
  userName = signal("Vault User", ...ngDevMode ? [{ debugName: "userName" }] : (
    /* istanbul ignore next */
    []
  ));
  upcomingBills = signal([], ...ngDevMode ? [{ debugName: "upcomingBills" }] : (
    /* istanbul ignore next */
    []
  ));
  billingSummary = signal({ totalOutstanding: 0, pendingCount: 0 }, ...ngDevMode ? [{ debugName: "billingSummary" }] : (
    /* istanbul ignore next */
    []
  ));
  filters = ["All Status", "Pending", "Paid"];
  quickPayCategories = [
    { id: "electricity", label: "Electricity", icon: "bolt", category: "ELECTRICITY" },
    { id: "water", label: "Water", icon: "water_drop", category: "WATER" },
    { id: "internet", label: "Internet", icon: "wifi", category: "INTERNET" },
    { id: "recharge", label: "Recharge", icon: "phone_iphone", category: "RECHARGE" },
    { id: "rent", label: "Pay Rent", icon: "apartment", category: "RENT" },
    { id: "gas", label: "Pay Gas", icon: "local_gas_station", category: "GAS" },
    { id: "insurance", label: "Insurance", icon: "health_and_safety", category: "INSURANCE" },
    { id: "metro", label: "Pay Metro", icon: "train", category: "METRO" }
  ];
  showBillerModal = signal(false, ...ngDevMode ? [{ debugName: "showBillerModal" }] : (
    /* istanbul ignore next */
    []
  ));
  activeBillerName = signal("", ...ngDevMode ? [{ debugName: "activeBillerName" }] : (
    /* istanbul ignore next */
    []
  ));
  activeBillerCategory = signal("", ...ngDevMode ? [{ debugName: "activeBillerCategory" }] : (
    /* istanbul ignore next */
    []
  ));
  billGroups = [];
  globalUiService = inject(GlobalUiService);
  authService = inject(AuthService);
  constructor(router, http) {
    this.router = router;
    this.http = http;
  }
  ngOnInit() {
    this.userName.set(this.authService.getUserName());
    const userId = this.authService.getUserId();
    if (userId) {
      this.loadBillsFromApi(userId);
    }
  }
  onWalletClick() {
    this.globalUiService.showComingSoon();
  }
  onQuickPayClick(label, category) {
    if (!category) {
      this.onWalletClick();
      return;
    }
    this.activeBillerName.set(label);
    this.activeBillerCategory.set(category);
    this.showBillerModal.set(true);
  }
  onModalClosed() {
    this.showBillerModal.set(false);
  }
  // Used Auth Service instead of legacy check
  loadBillsFromApi(userId) {
    this.http.get(`/api/billing/bills/user/${userId}`).subscribe({
      next: (res) => {
        const apiBills = Array.isArray(res) ? res : res?.data ?? [];
        if (apiBills && apiBills.length > 0) {
          this.billGroups = this.mapApiBillsToGroups(apiBills);
        }
      },
      error: () => {
      }
    });
  }
  mapApiBillsToGroups(apiBills) {
    const groupMap = /* @__PURE__ */ new Map();
    for (const b of apiBills) {
      const key = b.billingMonth ?? "Unknown";
      if (!groupMap.has(key))
        groupMap.set(key, []);
      groupMap.get(key).push(b);
    }
    const groups = [];
    groupMap.forEach((bills, monthString) => {
      let userFriendlyMonth = monthString;
      try {
        const [year, m] = monthString.split("-");
        const d = new Date(Number(year), Number(m) - 1);
        userFriendlyMonth = d.toLocaleString("en-US", { month: "long", year: "numeric" });
      } catch {
      }
      const pendingCount = bills.filter((b) => b.status?.toUpperCase() !== "PAID").length;
      const allPaid = bills.every((b) => b.status?.toUpperCase() === "PAID");
      groups.push({
        month: userFriendlyMonth,
        badgeLabel: allPaid ? "COMPLETED" : `${pendingCount} PENDING`,
        badgeType: allPaid ? "muted" : "error",
        faded: allPaid,
        bills: bills.map((b) => this.mapApiBill(b)).sort((a, b) => b.id - a.id)
      });
    });
    const totalOutstanding = apiBills.filter((b) => b.status?.toUpperCase() !== "PAID").reduce((sum, b) => sum + (b.remainingBalance || 0), 0);
    const overallPendingCount = apiBills.filter((b) => b.status?.toUpperCase() !== "PAID").length;
    this.billingSummary.set({
      totalOutstanding,
      pendingCount: overallPendingCount
    });
    return groups.sort((a, b) => b.month.localeCompare(a.month));
  }
  mapApiBill(b) {
    const rawStatus = b.status ?? "PENDING";
    const statusUpper = rawStatus.toUpperCase();
    const isPaid = statusUpper === "PAID";
    return {
      id: b.id,
      title: `Bill #${String(b.id).substring(0, 8)}`,
      subtitle: `DUE: ${b.dueDate ? new Date(b.dueDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "-"}`,
      icon: "receipt_long",
      iconBg: isPaid ? "green" : statusUpper === "OVERDUE" ? "red" : "purple",
      totalDue: this.formatCurrency(b.totalAmount),
      secondaryAmount: isPaid ? this.formatCurrency(b.amountPaid) : this.formatCurrency(b.remainingBalance),
      secondaryLabel: isPaid ? "AMOUNT PAID" : "REMAINING",
      status: statusUpper,
      actionIcon: isPaid ? "check_circle" : "account_balance_wallet",
      actionStyle: isPaid ? "muted" : "primary"
    };
  }
  formatCurrency(value) {
    if (value == null)
      return "Rs.0.00";
    return "Rs." + value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  setFilter(filter) {
    this.activeFilter.set(filter);
  }
  navigateToPayments() {
    this.router.navigate(["/payments"]);
  }
  onBillAction(bill) {
    const routeData = {
      queryParams: {
        billId: bill.id,
        amount: bill.secondaryAmount.replace(/[^0-9.]/g, ""),
        totalAmount: bill.totalDue.replace(/[^0-9.]/g, "")
      }
    };
    this.router.navigate(["/payments"], routeData);
  }
  static \u0275fac = function BillsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BillsComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillsComponent, selectors: [["app-bills"]], decls: 54, vars: 9, consts: [[1, "ambient-orb", "orb-top-right"], [1, "ambient-orb", "orb-bottom-left"], [1, "page-layout"], [1, "main-content"], [1, "page-header"], [1, "page-header__user"], [1, "page-header__avatar"], [1, "page-header__user-info"], [1, "page-header__name"], [1, "page-header__actions"], [1, "page-header__icon-btn", 3, "click"], [1, "material-symbols-outlined"], [1, "title-section"], [1, "title-section__left"], [1, "title-section__heading"], [1, "title-section__sub"], [1, "title-section__filters"], ["class", "filter-pill", 3, "filter-pill--active", "click", 4, "ngFor", "ngForOf"], [1, "quick-pay"], [1, "quick-pay__header"], [1, "quick-pay__heading"], [1, "material-symbols-outlined", "quick-pay__heading-icon"], [1, "quick-pay__sub"], [1, "quick-pay__grid"], [3, "class", "title", "click", 4, "ngFor", "ngForOf"], [1, "bills-list"], ["class", "bill-group", 3, "bill-group--faded", 4, "ngFor", "ngForOf"], ["class", "empty-bills glass-card", 4, "ngIf"], [1, "bottom-row"], [1, "upcoming-summary-card", "glass-card"], [1, "autopay-card__content"], [1, "autopay-card__title"], [1, "autopay-card__body"], [1, "autopay-card__btn", 3, "click"], [1, "material-symbols-outlined", "autopay-card__watermark"], ["class", "stats-card glass-card", 4, "ngIf"], [3, "billerName", "billerCategory"], [1, "filter-pill", 3, "click"], [3, "click", "title"], [1, "qp-tile__icon-circle"], [1, "qp-tile__label"], [1, "bill-group"], [1, "bill-group__header"], [1, "bill-group__month"], [1, "bill-group__badge"], ["class", "bill-card", 4, "ngFor", "ngForOf"], [1, "bill-card"], [1, "bill-card__identity"], [1, "bill-card__icon-wrap", 3, "ngClass"], [1, "bill-card__title-block"], [1, "bill-card__title"], [1, "bill-card__subtitle"], [1, "bill-card__amount-col"], [1, "bill-card__amount-label"], [1, "bill-card__amount"], [1, "bill-card__status-col"], [1, "status-pill"], [1, "bill-card__action", 3, "click"], [1, "empty-bills", "glass-card"], [1, "material-symbols-outlined", "empty-icon"], [1, "stats-card", "glass-card"], [1, "stats-card__top"], [1, "stats-card__label"], [1, "stats-card__amount-row"], [1, "stats-card__amount"], [1, "status-pill", "status-pill--pending"], [1, "stats-bar", 2, "display", "none"], [3, "closed", "paymentSuccess", "billerName", "billerCategory"]], template: function BillsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0)(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275element(3, "app-sidebar");
      \u0275\u0275elementStart(4, "main", 3)(5, "header", 4)(6, "div", 5)(7, "div", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "span", 8);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 9);
      \u0275\u0275element(13, "app-theme-toggle");
      \u0275\u0275elementStart(14, "button", 10);
      \u0275\u0275listener("click", function BillsComponent_Template_button_click_14_listener() {
        return ctx.onWalletClick();
      });
      \u0275\u0275elementStart(15, "span", 11);
      \u0275\u0275text(16, "account_balance_wallet");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "section", 12)(18, "div", 13)(19, "h1", 14);
      \u0275\u0275text(20, "Your Bills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p", 15);
      \u0275\u0275text(22, "Manage your monthly commitments and track pending payments with precision. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 16);
      \u0275\u0275template(24, BillsComponent_button_24_Template, 2, 3, "button", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "section", 18)(26, "div", 19)(27, "h2", 20)(28, "span", 21);
      \u0275\u0275text(29, "bolt");
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, " Quick Pay ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p", 22);
      \u0275\u0275text(32, "Pay your bills instantly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 23);
      \u0275\u0275template(34, BillsComponent_button_34_Template, 6, 6, "button", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 25);
      \u0275\u0275template(36, BillsComponent_div_36_Template, 7, 11, "div", 26)(37, BillsComponent_div_37_Template, 7, 0, "div", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 28)(39, "div", 29)(40, "div", 30)(41, "h3", 31);
      \u0275\u0275text(42, "Upcoming Dues");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(43, BillsComponent_Conditional_43_Template, 5, 1, "p", 32)(44, BillsComponent_Conditional_44_Template, 2, 0, "p", 32);
      \u0275\u0275elementStart(45, "button", 33);
      \u0275\u0275listener("click", function BillsComponent_Template_button_click_45_listener() {
        return ctx.onWalletClick();
      });
      \u0275\u0275elementStart(46, "span", 11);
      \u0275\u0275text(47, "payments");
      \u0275\u0275elementEnd();
      \u0275\u0275text(48, " Make a Payment ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "span", 34);
      \u0275\u0275text(50, "event_upcoming");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(51, BillsComponent_div_51_Template, 10, 2, "div", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(52, BillsComponent_Conditional_52_Template, 1, 2, "app-biller-form-modal", 36);
      \u0275\u0275element(53, "app-coming-soon");
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.userName().slice(0, 2).toUpperCase());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.userName());
      \u0275\u0275advance(13);
      \u0275\u0275property("ngForOf", ctx.filters);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.quickPayCategories);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.billGroups);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.billGroups.length === 0);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.upcomingBills().length > 0 ? 43 : 44);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.billingSummary());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showBillerModal() ? 52 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, SidebarComponent, ThemeToggleComponent, ComingSoonComponent, BillerFormModalComponent], styles: ['\n.bills-page[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 100vh;\n  background: var(--glass-bg);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  display: flex;\n  flex-direction: column;\n  padding: 32px 20px;\n  z-index: 50;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  padding-left: 12px;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: -0.04em;\n  display: block;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--text-secondary);\n  margin-top: -2px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  text-decoration: none;\n  color: var(--text-secondary);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 500;\n  font-size: 0.95rem;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.nav-item[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.8;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n}\n.nav-item.active[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  opacity: 1;\n  font-variation-settings: "FILL" 1;\n}\n.sidebar-promo[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.4);\n  text-align: center;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .promo-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n  margin-bottom: 16px;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .btn-upgrade[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .btn-upgrade[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.notif-badge[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 20px;\n  margin-left: auto;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(107, 110, 249, 0.4);\n}\n.main-content[_ngcontent-%COMP%] {\n  margin-left: 300px;\n  padding: 40px 44px;\n  flex: 1;\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 40px;\n}\n.page-header__user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header__avatar[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.875rem;\n  font-weight: 800;\n  color: #fff;\n  flex-shrink: 0;\n  box-shadow: 0 4px 14px rgba(107, 110, 249, 0.35);\n}\n.page-header__name[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.page-header__tier[_ngcontent-%COMP%] {\n  display: block;\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.page-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header__icon-btn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.75);\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-secondary);\n  transition:\n    background 0.2s,\n    color 0.2s,\n    transform 0.15s;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n}\n.page-header__icon-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n.page-header__icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n  transform: translateY(-1px);\n}\n.page-header__report-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 999px;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.75);\n  border: 1px solid rgba(107, 110, 249, 0.18);\n  cursor: pointer;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.09);\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.page-header__report-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--primary);\n}\n.page-header__report-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(107, 110, 249, 0.18);\n}\n.title-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 36px;\n  flex-wrap: wrap;\n}\n.title-section__heading[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 3.5rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  line-height: 1.05;\n  margin: 0 0 8px;\n  letter-spacing: -0.02em;\n}\n.title-section__sub[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  margin: 0;\n  max-width: 480px;\n  line-height: 1.55;\n}\n.title-section__filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n}\n.filter-pill[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  border-radius: 999px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.18s;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.75);\n  color: var(--text-secondary);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  white-space: nowrap;\n}\n.filter-pill[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.filter-pill--active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary)) !important;\n  color: #fff !important;\n  box-shadow: 0 4px 14px rgba(107, 110, 249, 0.35) !important;\n}\n.filter-pill--dropdown[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding-right: 12px;\n}\n.filter-pill--dropdown[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.quick-pay[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.quick-pay__header[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n}\n.quick-pay__heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  letter-spacing: -0.01em;\n}\n.quick-pay__sub[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.quick-pay__heading-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--primary);\n  font-variation-settings: "FILL" 1;\n}\n.quick-pay__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n@media (max-width: 900px) {\n  .quick-pay__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.qp-tile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  height: 120px;\n  min-height: 120px;\n  min-width: 140px;\n  border-radius: 16px;\n  border: none;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n  transition: transform 0.3s, box-shadow 0.3s;\n  padding: 0 12px;\n  position: relative;\n  overflow: hidden;\n}\n.qp-tile[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n}\n.qp-tile[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.qp-tile__icon-circle[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n}\n.qp-tile__icon-circle[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--icon-color, #6B6EF9);\n  font-variation-settings: "FILL" 1;\n}\n.qp-tile__label[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  text-align: center;\n  line-height: 1.3;\n  white-space: nowrap;\n  z-index: 1;\n}\n.qp-tile.qp-cat-electricity[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #FFF3E0,\n      #FFE0B2);\n  --icon-color: #FF9800;\n}\n.qp-tile.qp-cat-water[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #E0F7FA,\n      #B2EBF2);\n  --icon-color: #00BCD4;\n}\n.qp-tile.qp-cat-internet[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #EDE7F6,\n      #D1C4E9);\n  --icon-color: #9C27B0;\n}\n.qp-tile.qp-cat-recharge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #E8F5E9,\n      #C8E6C9);\n  --icon-color: #4CAF50;\n}\n.qp-tile.qp-cat-rent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #FFF8E1,\n      #FFECB3);\n  --icon-color: #FFB300;\n}\n.qp-tile.qp-cat-gas[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #FBE9E7,\n      #FFCCBC);\n  --icon-color: #FF5722;\n}\n.qp-tile.qp-cat-insurance[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #E8EAF6,\n      #C5CAE9);\n  --icon-color: #3F51B5;\n}\n.qp-tile.qp-cat-metro[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #E0F2F1,\n      #B2DFDB);\n  --icon-color: #009688;\n}\n[data-theme=dark][_ngcontent-%COMP%]   .qp-tile.qp-cat-electricity[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4E342E,\n      #3E2723);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .qp-tile.qp-cat-water[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #006064,\n      #004D40);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .qp-tile.qp-cat-internet[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4A148C,\n      #311B92);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .qp-tile.qp-cat-recharge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1B5E20,\n      #004D40);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .qp-tile.qp-cat-rent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #FF8F00,\n      #FF6F00);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .qp-tile.qp-cat-gas[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #BF360C,\n      #3E2723);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .qp-tile.qp-cat-insurance[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1A237E,\n      #0D47A1);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .qp-tile.qp-cat-metro[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #004D40,\n      #00251A);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .qp-tile[_ngcontent-%COMP%]   .qp-tile__icon-circle[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .qp-tile[_ngcontent-%COMP%]   .qp-tile__label[_ngcontent-%COMP%] {\n  color: #E2E8F0;\n}\n.bills-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 36px;\n}\n.bills-list[_ngcontent-%COMP%]   .empty-bills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 40px;\n  text-align: center;\n  gap: 12px;\n}\n.bills-list[_ngcontent-%COMP%]   .empty-bills[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--primary);\n  opacity: 0.2;\n  margin-bottom: 8px;\n}\n.bills-list[_ngcontent-%COMP%]   .empty-bills[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.bills-list[_ngcontent-%COMP%]   .empty-bills[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  margin: 0;\n  max-width: 300px;\n}\n.bill-group--faded[_ngcontent-%COMP%] {\n  opacity: 0.78;\n}\n.bill-group__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  padding: 0 4px;\n}\n.bill-group__month[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.bill-group__month--muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.bill-group__badge[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n}\n.bill-group__badge--error[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.bill-group__badge--muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.bill-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  padding: 20px 24px;\n  border-radius: 20px;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.75);\n  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.06);\n  margin-bottom: 12px;\n  transition: transform 0.2s, box-shadow 0.2s;\n  cursor: pointer;\n}\n.bill-card[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.bill-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(107, 110, 249, 0.14);\n}\n.bill-card__identity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1.8;\n  min-width: 0;\n}\n.bill-card__icon-wrap[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.bill-card__icon-wrap[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-variation-settings: "FILL" 1;\n}\n.bill-card__icon-wrap--blue[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.14);\n}\n.bill-card__icon-wrap--blue[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: #3B82F6;\n}\n.bill-card__icon-wrap--purple[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.16);\n}\n.bill-card__icon-wrap--purple[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: var(--secondary);\n}\n.bill-card__icon-wrap--green[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.14);\n}\n.bill-card__icon-wrap--green[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.bill-card__icon-wrap--grey[_ngcontent-%COMP%] {\n  background: rgba(136, 136, 170, 0.14);\n}\n.bill-card__icon-wrap--grey[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.bill-card__title-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.bill-card__title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.bill-card__subtitle[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  font-size: 0.62rem;\n}\n.bill-card__amount-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 0 12px;\n}\n.bill-card__amount-label[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  font-size: 0.62rem;\n}\n.bill-card__amount[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.bill-card__amount--paid[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.bill-card__status-col[_ngcontent-%COMP%] {\n  flex: 0.9;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 0 12px;\n}\n.bill-card__action[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  margin-left: 8px;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.bill-card__action[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n}\n.bill-card__action--primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(107, 110, 249, 0.4);\n}\n.bill-card__action--primary[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0 6px 18px rgba(107, 110, 249, 0.5);\n}\n.bill-card__action--muted[_ngcontent-%COMP%] {\n  background: rgba(136, 136, 170, 0.1);\n  color: var(--text-muted);\n  border: 1px solid rgba(136, 136, 170, 0.2);\n}\n.bill-card__action--muted[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n  transform: scale(1.08);\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 11px;\n  border-radius: 999px;\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  white-space: nowrap;\n  border: 1px solid transparent;\n}\n.status-pill--overdue[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: var(--error);\n  border-color: rgba(239, 68, 68, 0.2);\n}\n.status-pill--pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: var(--warning);\n  border-color: rgba(245, 158, 11, 0.2);\n}\n.status-pill--paid[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: var(--success);\n  border-color: rgba(34, 197, 94, 0.2);\n}\n.status-pill--partial[_ngcontent-%COMP%] {\n  background: rgba(245, 124, 0, 0.12);\n  color: #F57C00;\n  border-color: rgba(245, 124, 0, 0.2);\n}\n.bottom-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  align-items: stretch;\n}\n.autopay-card[_ngcontent-%COMP%] {\n  flex: 1.6;\n  border-radius: 28px;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.75);\n  box-shadow: 0 4px 24px rgba(107, 110, 249, 0.09);\n  padding: 36px 40px;\n  position: relative;\n  overflow: hidden;\n}\n.autopay-card__content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.autopay-card__title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 14px;\n  letter-spacing: -0.01em;\n}\n.autopay-card__body[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  color: var(--text-secondary);\n  line-height: 1.65;\n  margin: 0 0 28px;\n  max-width: 480px;\n}\n.autopay-card__body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 700;\n}\n.autopay-card__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 26px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 700;\n  box-shadow: 0 6px 20px rgba(107, 110, 249, 0.4);\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.autopay-card__btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.autopay-card__btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 28px rgba(107, 110, 249, 0.5);\n}\n.autopay-card__watermark[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -16px;\n  right: -10px;\n  font-size: 9rem;\n  color: rgba(107, 110, 249, 0.055);\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n  line-height: 1;\n  font-variation-settings: "FILL" 1;\n}\n.stats-card[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 28px;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.75);\n  box-shadow: 0 4px 24px rgba(107, 110, 249, 0.09);\n  padding: 32px 32px 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.stats-card__label[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  font-size: 0.65rem;\n  margin-bottom: 10px;\n}\n.stats-card__amount-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  margin-bottom: 28px;\n}\n.stats-card__amount[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 2.6rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n  line-height: 1;\n}\n.stats-card__change[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--success);\n  background: rgba(34, 197, 94, 0.12);\n  padding: 3px 9px;\n  border-radius: 999px;\n}\n.stats-card__bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.stats-bar__labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 7px;\n}\n.stats-bar__name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.stats-bar__pct[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.stats-bar__track[_ngcontent-%COMP%] {\n  height: 6px;\n  border-radius: 999px;\n  background: rgba(136, 136, 170, 0.15);\n  overflow: hidden;\n}\n.stats-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.stats-bar__fill--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      var(--secondary));\n}\n.stats-bar__fill--secondary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--secondary),\n      #c4b5fd);\n}\n/*# sourceMappingURL=bills.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BillsComponent, [{
    type: Component,
    args: [{ selector: "app-bills", standalone: true, imports: [CommonModule, RouterLink, SidebarComponent, ThemeToggleComponent, ComingSoonComponent, BillerFormModalComponent], template: `<!-- Ambient Orbs -->
<div class="ambient-orb orb-top-right"></div>
<div class="ambient-orb orb-bottom-left"></div>

<div class="page-layout">
    <!-- SIDEBAR -->
    <app-sidebar />

    <!-- MAIN CONTENT -->
    <main class="main-content">

        <!-- PAGE HEADER -->
        <header class="page-header">
            <div class="page-header__user">
                <div class="page-header__avatar">{{ userName().slice(0,2).toUpperCase() }}</div>
                <div class="page-header__user-info">
                    <span class="page-header__name">{{ userName() }}</span>
                </div>
            </div>
            <div class="page-header__actions">
                <app-theme-toggle />
                <button class="page-header__icon-btn" (click)="onWalletClick()">
                    <span class="material-symbols-outlined">account_balance_wallet</span>
                </button>
            </div>
        </header>

        <!-- TITLE + FILTERS -->
        <section class="title-section">
            <div class="title-section__left">
                <h1 class="title-section__heading">Your Bills</h1>
                <p class="title-section__sub">Manage your monthly commitments and track pending payments with precision.
                </p>
            </div>
            <div class="title-section__filters">
                <button *ngFor="let f of filters" class="filter-pill" [class.filter-pill--active]="activeFilter() === f"
                    (click)="setFilter(f)">
                    {{ f }}
                </button>
            </div>
        </section>

        <!-- QUICK Pay -->
        <section class="quick-pay">
            <div class="quick-pay__header">
                <h2 class="quick-pay__heading">
                    <span class="material-symbols-outlined quick-pay__heading-icon">bolt</span>
                    Quick Pay
                </h2>
                <p class="quick-pay__sub">Pay your bills instantly</p>
            </div>
            
            <div class="quick-pay__grid">
                <button *ngFor="let cat of quickPayCategories" class="qp-tile qp-cat-{{ cat.id }}" (click)="onQuickPayClick(cat.label, cat.category)" [title]="cat.label">
                    <span class="qp-tile__icon-circle">
                        <span class="material-symbols-outlined">{{ cat.icon }}</span>
                    </span>
                    <span class="qp-tile__label">{{ cat.label }}</span>
                </button>
            </div>
        </section>

        <!-- BILL GROUPS -->
        <div class="bills-list">
            <div *ngFor="let group of billGroups" class="bill-group" [class.bill-group--faded]="group.faded">

                <!-- GROUP HEADER -->
                <div class="bill-group__header">
                    <span class="bill-group__month" [class.bill-group__month--muted]="group.faded">
                        {{ group.month }}
                    </span>
                    <span class="bill-group__badge" [class.bill-group__badge--error]="group.badgeType === 'error'"
                        [class.bill-group__badge--muted]="group.badgeType === 'muted'">
                        {{ group.badgeLabel }}
                    </span>
                </div>

                <!-- BILL ROWS -->
                <div class="bill-card" *ngFor="let bill of group.bills">

                    <!-- Icon + Title -->
                    <div class="bill-card__identity">
                        <div class="bill-card__icon-wrap" [ngClass]="'bill-card__icon-wrap--' + bill.iconBg">
                            <span class="material-symbols-outlined">{{ bill.icon }}</span>
                        </div>
                        <div class="bill-card__title-block">
                            <span class="bill-card__title">{{ bill.title }}</span>
                            <span class="bill-card__subtitle">{{ bill.subtitle }}</span>
                        </div>
                    </div>

                    <!-- Total Due -->
                    <div class="bill-card__amount-col">
                        <span class="bill-card__amount-label">TOTAL DUE</span>
                        <span class="bill-card__amount">{{ bill.totalDue }}</span>
                    </div>

                    <!-- Secondary Amount -->
                    <div class="bill-card__amount-col">
                        <span class="bill-card__amount-label">{{ bill.secondaryLabel }}</span>
                        <span class="bill-card__amount"
                            [class.bill-card__amount--paid]="bill.secondaryLabel === 'AMOUNT PAID' && bill.status === 'PAID'">
                            {{ bill.secondaryAmount }}
                        </span>
                    </div>

                    <!-- Status -->
                    <div class="bill-card__status-col">
                        <span class="bill-card__amount-label">STATUS</span>
                        <span class="status-pill" [class.status-pill--overdue]="bill.status === 'OVERDUE'"
                            [class.status-pill--pending]="bill.status === 'PENDING'"
                            [class.status-pill--paid]="bill.status === 'PAID'"
                            [class.status-pill--partial]="bill.status === 'PARTIALLYPAID'">
                            {{ bill.status === 'PARTIALLYPAID' ? 'PARTIALLY PAID' : bill.status }}
                        </span>
                    </div>

                    <!-- Action -->
                    <button class="bill-card__action"
                        [class.bill-card__action--primary]="bill.actionStyle === 'primary'"
                        [class.bill-card__action--muted]="bill.actionStyle === 'muted'" (click)="onBillAction(bill)">
                        <span class="material-symbols-outlined">{{ bill.actionIcon }}</span>
                    </button>

                </div>
            </div>

            <div *ngIf="billGroups.length === 0" class="empty-bills glass-card">
                <span class="material-symbols-outlined empty-icon">receipt_long</span>
                <h3>No bills found</h3>
                <p>Your bills will appear here.</p>
            </div>
        </div>

        <!-- BOTTOM ROW -->
        <div class="bottom-row">

            <!-- Upcoming Dues -->
            <div class="upcoming-summary-card glass-card">
                <div class="autopay-card__content">
                    <h3 class="autopay-card__title">Upcoming Dues</h3>
                    @if (upcomingBills().length > 0) {
                        <p class="autopay-card__body">
                            You have <strong>{{ upcomingBills().length }} recurring bills</strong> scheduled for the next 7 days.
                            Ensure your account is funded.
                        </p>
                    } @else {
                        <p class="autopay-card__body">No upcoming bills scheduled within the next 7 days.</p>
                    }
                    <button class="autopay-card__btn" (click)="onWalletClick()">
                        <span class="material-symbols-outlined">payments</span>
                        Make a Payment
                    </button>
                </div>
                <span class="material-symbols-outlined autopay-card__watermark">event_upcoming</span>
            </div>

            <!-- Total Outstanding -->
            <div class="stats-card glass-card" *ngIf="billingSummary()">
                <div class="stats-card__top">
                    <span class="stats-card__label">TOTAL OUTSTANDING</span>
                    <div class="stats-card__amount-row">
                        <span class="stats-card__amount">Rs.{{ billingSummary().totalOutstanding || 0 }}</span>
                        <span class="status-pill status-pill--pending">{{ billingSummary().pendingCount }} PENDING</span>
                    </div>
                </div>
                <!-- Hidden fake paid ratio chart -->
                <div class="stats-bar" style="display: none;"></div>
            </div>
        </div>
    </main>
</div>

@if (showBillerModal()) {
    <app-biller-form-modal
        [billerName]="activeBillerName()"
        [billerCategory]="activeBillerCategory()"
        (closed)="onModalClosed()"
        (paymentSuccess)="onModalClosed()"
    />
}

<app-coming-soon />
`, styles: ['/* src/app/features/billing/bills-list/bills.scss */\n.bills-page {\n  display: flex;\n  min-height: 100vh;\n}\n.sidebar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 100vh;\n  background: var(--glass-bg);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  display: flex;\n  flex-direction: column;\n  padding: 32px 20px;\n  z-index: 50;\n}\n.sidebar-header {\n  margin-bottom: 40px;\n  padding-left: 12px;\n}\n.brand-name {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: -0.04em;\n  display: block;\n}\n.brand-sub {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--text-secondary);\n  margin-top: -2px;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  text-decoration: none;\n  color: var(--text-secondary);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 500;\n  font-size: 0.95rem;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.nav-item .material-symbols-outlined {\n  font-size: 20px;\n  opacity: 0.8;\n}\n.nav-item:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.nav-item.active {\n  background: var(--primary);\n  color: #fff;\n}\n.nav-item.active .material-symbols-outlined {\n  opacity: 1;\n  font-variation-settings: "FILL" 1;\n}\n.sidebar-promo {\n  padding: 20px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.4);\n  text-align: center;\n}\n.sidebar-promo .promo-title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n}\n.sidebar-promo .promo-desc {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n  margin-bottom: 16px;\n}\n.sidebar-promo .btn-upgrade {\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.sidebar-promo .btn-upgrade:hover {\n  transform: translateY(-2px);\n}\n.notif-badge {\n  background: var(--primary);\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 20px;\n  margin-left: auto;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(107, 110, 249, 0.4);\n}\n.main-content {\n  margin-left: 300px;\n  padding: 40px 44px;\n  flex: 1;\n  min-height: 100vh;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 40px;\n}\n.page-header__user {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header__avatar {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.875rem;\n  font-weight: 800;\n  color: #fff;\n  flex-shrink: 0;\n  box-shadow: 0 4px 14px rgba(107, 110, 249, 0.35);\n}\n.page-header__name {\n  display: block;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.page-header__tier {\n  display: block;\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.page-header__actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.page-header__icon-btn {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.75);\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-secondary);\n  transition:\n    background 0.2s,\n    color 0.2s,\n    transform 0.15s;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);\n}\n.page-header__icon-btn .material-symbols-outlined {\n  font-size: 1.15rem;\n}\n.page-header__icon-btn:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n  transform: translateY(-1px);\n}\n.page-header__report-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  border-radius: 999px;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.75);\n  border: 1px solid rgba(107, 110, 249, 0.18);\n  cursor: pointer;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.09);\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.page-header__report-btn .material-symbols-outlined {\n  font-size: 1rem;\n  color: var(--primary);\n}\n.page-header__report-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(107, 110, 249, 0.18);\n}\n.title-section {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 36px;\n  flex-wrap: wrap;\n}\n.title-section__heading {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 3.5rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  line-height: 1.05;\n  margin: 0 0 8px;\n  letter-spacing: -0.02em;\n}\n.title-section__sub {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  margin: 0;\n  max-width: 480px;\n  line-height: 1.55;\n}\n.title-section__filters {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n}\n.filter-pill {\n  padding: 9px 18px;\n  border-radius: 999px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.18s;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.75);\n  color: var(--text-secondary);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  white-space: nowrap;\n}\n.filter-pill:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.filter-pill--active {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary)) !important;\n  color: #fff !important;\n  box-shadow: 0 4px 14px rgba(107, 110, 249, 0.35) !important;\n}\n.filter-pill--dropdown {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding-right: 12px;\n}\n.filter-pill--dropdown .material-symbols-outlined {\n  font-size: 1rem;\n}\n.quick-pay {\n  margin-bottom: 40px;\n}\n.quick-pay__header {\n  margin: 0 0 20px;\n}\n.quick-pay__heading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 4px;\n  letter-spacing: -0.01em;\n}\n.quick-pay__sub {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.quick-pay__heading-icon {\n  font-size: 1.3rem;\n  color: var(--primary);\n  font-variation-settings: "FILL" 1;\n}\n.quick-pay__grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n@media (max-width: 900px) {\n  .quick-pay__grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.qp-tile {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  height: 120px;\n  min-height: 120px;\n  min-width: 140px;\n  border-radius: 16px;\n  border: none;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n  transition: transform 0.3s, box-shadow 0.3s;\n  padding: 0 12px;\n  position: relative;\n  overflow: hidden;\n}\n.qp-tile:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n}\n.qp-tile:active {\n  transform: scale(0.98);\n}\n.qp-tile__icon-circle {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n}\n.qp-tile__icon-circle .material-symbols-outlined {\n  font-size: 32px;\n  color: var(--icon-color, #6B6EF9);\n  font-variation-settings: "FILL" 1;\n}\n.qp-tile__label {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary);\n  text-align: center;\n  line-height: 1.3;\n  white-space: nowrap;\n  z-index: 1;\n}\n.qp-tile.qp-cat-electricity {\n  background:\n    linear-gradient(\n      135deg,\n      #FFF3E0,\n      #FFE0B2);\n  --icon-color: #FF9800;\n}\n.qp-tile.qp-cat-water {\n  background:\n    linear-gradient(\n      135deg,\n      #E0F7FA,\n      #B2EBF2);\n  --icon-color: #00BCD4;\n}\n.qp-tile.qp-cat-internet {\n  background:\n    linear-gradient(\n      135deg,\n      #EDE7F6,\n      #D1C4E9);\n  --icon-color: #9C27B0;\n}\n.qp-tile.qp-cat-recharge {\n  background:\n    linear-gradient(\n      135deg,\n      #E8F5E9,\n      #C8E6C9);\n  --icon-color: #4CAF50;\n}\n.qp-tile.qp-cat-rent {\n  background:\n    linear-gradient(\n      135deg,\n      #FFF8E1,\n      #FFECB3);\n  --icon-color: #FFB300;\n}\n.qp-tile.qp-cat-gas {\n  background:\n    linear-gradient(\n      135deg,\n      #FBE9E7,\n      #FFCCBC);\n  --icon-color: #FF5722;\n}\n.qp-tile.qp-cat-insurance {\n  background:\n    linear-gradient(\n      135deg,\n      #E8EAF6,\n      #C5CAE9);\n  --icon-color: #3F51B5;\n}\n.qp-tile.qp-cat-metro {\n  background:\n    linear-gradient(\n      135deg,\n      #E0F2F1,\n      #B2DFDB);\n  --icon-color: #009688;\n}\n[data-theme=dark] .qp-tile.qp-cat-electricity {\n  background:\n    linear-gradient(\n      135deg,\n      #4E342E,\n      #3E2723);\n}\n[data-theme=dark] .qp-tile.qp-cat-water {\n  background:\n    linear-gradient(\n      135deg,\n      #006064,\n      #004D40);\n}\n[data-theme=dark] .qp-tile.qp-cat-internet {\n  background:\n    linear-gradient(\n      135deg,\n      #4A148C,\n      #311B92);\n}\n[data-theme=dark] .qp-tile.qp-cat-recharge {\n  background:\n    linear-gradient(\n      135deg,\n      #1B5E20,\n      #004D40);\n}\n[data-theme=dark] .qp-tile.qp-cat-rent {\n  background:\n    linear-gradient(\n      135deg,\n      #FF8F00,\n      #FF6F00);\n}\n[data-theme=dark] .qp-tile.qp-cat-gas {\n  background:\n    linear-gradient(\n      135deg,\n      #BF360C,\n      #3E2723);\n}\n[data-theme=dark] .qp-tile.qp-cat-insurance {\n  background:\n    linear-gradient(\n      135deg,\n      #1A237E,\n      #0D47A1);\n}\n[data-theme=dark] .qp-tile.qp-cat-metro {\n  background:\n    linear-gradient(\n      135deg,\n      #004D40,\n      #00251A);\n}\n[data-theme=dark] .qp-tile .qp-tile__icon-circle {\n  background: rgba(255, 255, 255, 0.15);\n}\n[data-theme=dark] .qp-tile .qp-tile__label {\n  color: #E2E8F0;\n}\n.bills-list {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 36px;\n}\n.bills-list .empty-bills {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 40px;\n  text-align: center;\n  gap: 12px;\n}\n.bills-list .empty-bills .empty-icon {\n  font-size: 4rem;\n  color: var(--primary);\n  opacity: 0.2;\n  margin-bottom: 8px;\n}\n.bills-list .empty-bills h3 {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.bills-list .empty-bills p {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  margin: 0;\n  max-width: 300px;\n}\n.bill-group--faded {\n  opacity: 0.78;\n}\n.bill-group__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  padding: 0 4px;\n}\n.bill-group__month {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.bill-group__month--muted {\n  color: var(--text-muted);\n}\n.bill-group__badge {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n}\n.bill-group__badge--error {\n  color: var(--error);\n}\n.bill-group__badge--muted {\n  color: var(--text-muted);\n}\n.bill-card {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  padding: 20px 24px;\n  border-radius: 20px;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.75);\n  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.06);\n  margin-bottom: 12px;\n  transition: transform 0.2s, box-shadow 0.2s;\n  cursor: pointer;\n}\n.bill-card:last-child {\n  margin-bottom: 0;\n}\n.bill-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 28px rgba(107, 110, 249, 0.14);\n}\n.bill-card__identity {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1.8;\n  min-width: 0;\n}\n.bill-card__icon-wrap {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.bill-card__icon-wrap .material-symbols-outlined {\n  font-size: 1.2rem;\n  font-variation-settings: "FILL" 1;\n}\n.bill-card__icon-wrap--blue {\n  background: rgba(59, 130, 246, 0.14);\n}\n.bill-card__icon-wrap--blue .material-symbols-outlined {\n  color: #3B82F6;\n}\n.bill-card__icon-wrap--purple {\n  background: rgba(167, 139, 250, 0.16);\n}\n.bill-card__icon-wrap--purple .material-symbols-outlined {\n  color: var(--secondary);\n}\n.bill-card__icon-wrap--green {\n  background: rgba(34, 197, 94, 0.14);\n}\n.bill-card__icon-wrap--green .material-symbols-outlined {\n  color: var(--success);\n}\n.bill-card__icon-wrap--grey {\n  background: rgba(136, 136, 170, 0.14);\n}\n.bill-card__icon-wrap--grey .material-symbols-outlined {\n  color: var(--text-muted);\n}\n.bill-card__title-block {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.bill-card__title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.bill-card__subtitle {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  font-size: 0.62rem;\n}\n.bill-card__amount-col {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 0 12px;\n}\n.bill-card__amount-label {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  font-size: 0.62rem;\n}\n.bill-card__amount {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.bill-card__amount--paid {\n  color: var(--primary);\n}\n.bill-card__status-col {\n  flex: 0.9;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 0 12px;\n}\n.bill-card__action {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  margin-left: 8px;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.bill-card__action .material-symbols-outlined {\n  font-size: 1.05rem;\n}\n.bill-card__action--primary {\n  background: var(--primary);\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(107, 110, 249, 0.4);\n}\n.bill-card__action--primary:hover {\n  transform: scale(1.1);\n  box-shadow: 0 6px 18px rgba(107, 110, 249, 0.5);\n}\n.bill-card__action--muted {\n  background: rgba(136, 136, 170, 0.1);\n  color: var(--text-muted);\n  border: 1px solid rgba(136, 136, 170, 0.2);\n}\n.bill-card__action--muted:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n  transform: scale(1.08);\n}\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 11px;\n  border-radius: 999px;\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  white-space: nowrap;\n  border: 1px solid transparent;\n}\n.status-pill--overdue {\n  background: rgba(239, 68, 68, 0.12);\n  color: var(--error);\n  border-color: rgba(239, 68, 68, 0.2);\n}\n.status-pill--pending {\n  background: rgba(245, 158, 11, 0.12);\n  color: var(--warning);\n  border-color: rgba(245, 158, 11, 0.2);\n}\n.status-pill--paid {\n  background: rgba(34, 197, 94, 0.12);\n  color: var(--success);\n  border-color: rgba(34, 197, 94, 0.2);\n}\n.status-pill--partial {\n  background: rgba(245, 124, 0, 0.12);\n  color: #F57C00;\n  border-color: rgba(245, 124, 0, 0.2);\n}\n.bottom-row {\n  display: flex;\n  gap: 24px;\n  align-items: stretch;\n}\n.autopay-card {\n  flex: 1.6;\n  border-radius: 28px;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.75);\n  box-shadow: 0 4px 24px rgba(107, 110, 249, 0.09);\n  padding: 36px 40px;\n  position: relative;\n  overflow: hidden;\n}\n.autopay-card__content {\n  position: relative;\n  z-index: 1;\n}\n.autopay-card__title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  margin: 0 0 14px;\n  letter-spacing: -0.01em;\n}\n.autopay-card__body {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  color: var(--text-secondary);\n  line-height: 1.65;\n  margin: 0 0 28px;\n  max-width: 480px;\n}\n.autopay-card__body strong {\n  color: var(--primary);\n  font-weight: 700;\n}\n.autopay-card__btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 26px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 700;\n  box-shadow: 0 6px 20px rgba(107, 110, 249, 0.4);\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.autopay-card__btn .material-symbols-outlined {\n  font-size: 1.1rem;\n}\n.autopay-card__btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 28px rgba(107, 110, 249, 0.5);\n}\n.autopay-card__watermark {\n  position: absolute;\n  bottom: -16px;\n  right: -10px;\n  font-size: 9rem;\n  color: rgba(107, 110, 249, 0.055);\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n  line-height: 1;\n  font-variation-settings: "FILL" 1;\n}\n.stats-card {\n  flex: 1;\n  border-radius: 28px;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.75);\n  box-shadow: 0 4px 24px rgba(107, 110, 249, 0.09);\n  padding: 32px 32px 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.stats-card__label {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.09em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  font-size: 0.65rem;\n  margin-bottom: 10px;\n}\n.stats-card__amount-row {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  margin-bottom: 28px;\n}\n.stats-card__amount {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 2.6rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n  line-height: 1;\n}\n.stats-card__change {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--success);\n  background: rgba(34, 197, 94, 0.12);\n  padding: 3px 9px;\n  border-radius: 999px;\n}\n.stats-card__bars {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.stats-bar__labels {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 7px;\n}\n.stats-bar__name {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.stats-bar__pct {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.stats-bar__track {\n  height: 6px;\n  border-radius: 999px;\n  background: rgba(136, 136, 170, 0.15);\n  overflow: hidden;\n}\n.stats-bar__fill {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.stats-bar__fill--primary {\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      var(--secondary));\n}\n.stats-bar__fill--secondary {\n  background:\n    linear-gradient(\n      90deg,\n      var(--secondary),\n      #c4b5fd);\n}\n/*# sourceMappingURL=bills.css.map */\n'] }]
  }], () => [{ type: Router }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillsComponent, { className: "BillsComponent", filePath: "src/app/features/billing/bills-list/bills.ts", lineNumber: 62 });
})();
export {
  BillsComponent
};
//# sourceMappingURL=chunk-ZYCLXGBF.js.map
