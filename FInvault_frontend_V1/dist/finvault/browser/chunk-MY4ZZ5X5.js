import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-7UCIGN6I.js";
import {
  AuthService
} from "./chunk-P2F4JYQH.js";
import "./chunk-4SYUYOJR.js";
import {
  ActivatedRoute,
  Component,
  Router,
  RouterLink,
  inject,
  interval,
  setClassMetadata,
  signal,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SYL3PSAO.js";

// src/app/features/auth/reset-password/reset-password.ts
function ResetPasswordComponent_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Expires in ", ctx_r0.otpTimer(), "s");
  }
}
function ResetPasswordComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "Code Expired");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.authService.errorMessage(), " ");
  }
}
function ResetPasswordComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Updating Cipher... ");
  }
}
function ResetPasswordComponent_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "security_update_good");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Finalize & Save ");
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  resetForm = this.fb.group({
    otpCode: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    newPassword: ["", [Validators.required, Validators.minLength(8)]]
  });
  email = "";
  // OTP Countdown
  otpTimer = signal(60, ...ngDevMode ? [{ debugName: "otpTimer" }] : (
    /* istanbul ignore next */
    []
  ));
  timerSub;
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.email = params["email"] || "";
      if (!this.email) {
        this.router.navigate(["/auth/forgot-password"]);
      }
    });
    this.startOtpCountdown();
  }
  onSubmit() {
    if (this.resetForm.valid && this.email) {
      this.authService.resetPassword({
        email: this.email,
        otpCode: this.resetForm.value.otpCode,
        newPassword: this.resetForm.value.newPassword
      }).subscribe((res) => {
        if (res && res.success) {
          this.router.navigate(["/auth/login"], {
            queryParams: { reset: "true", email: this.email }
          });
        }
      });
    }
  }
  startOtpCountdown() {
    this.stopOtpCountdown();
    this.otpTimer.set(60);
    this.timerSub = interval(1e3).pipe(take(60)).subscribe({
      next: () => this.otpTimer.update((v) => v - 1),
      complete: () => this.otpTimer.set(0)
    });
  }
  stopOtpCountdown() {
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }
  }
  ngOnDestroy() {
    this.stopOtpCountdown();
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 103, vars: 6, consts: [[1, "bg-blobs"], [1, "blob", "blob-1"], [1, "blob", "blob-2"], [1, "blob", "blob-3"], [1, "login-layout"], [1, "hero-side"], [1, "brand"], [1, "brand-icon"], [1, "material-symbols-outlined"], [1, "brand-text"], [1, "brand-name"], [1, "brand-tagline"], [1, "hero-text"], [1, "hero-sub"], [1, "hero-heading"], [1, "hero-desc"], [1, "cards-scene"], [1, "credit-card", "card-frost"], [1, "card-chip"], [1, "card-number", "mono"], [1, "card-bottom"], [1, "card-holder", "mono"], [1, "card-logo"], [1, "credit-card", "card-purple"], [1, "card-top-row"], [1, "card-label", "mono"], [1, "material-symbols-outlined", "card-wave"], [1, "card-expiry", "mono"], [1, "credit-card", "card-blue"], [1, "form-side"], [1, "form-card", "glass-card-strong"], [1, "form-header"], [2, "display", "flex", "align-items", "center", "gap", "10px", "margin-bottom", "20px"], ["routerLink", "/auth/forgot-password", 2, "color", "var(--primary)", "display", "flex", "align-items", "center", "text-decoration", "none"], [1, "material-symbols-outlined", 2, "font-size", "20px"], [2, "font-size", "13px", "color", "var(--text-muted)", "font-weight", "500", "text-transform", "uppercase", "letter-spacing", "0.1em"], [1, "form-title", 2, "font-size", "2.2rem"], [1, "form-subtitle"], [2, "color", "var(--primary)", "font-weight", "600"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "field-group"], [1, "field-label-row"], [1, "field-label", "label-uppercase"], [1, "timer-badge"], [1, "timer-badge", "expired"], [1, "input-wrapper"], [1, "material-symbols-outlined", "input-icon"], ["type", "text", "placeholder", "123456", "formControlName", "otpCode", "maxlength", "6", 1, "glass-input", "glass-input-mono"], ["type", "password", "placeholder", "************", "formControlName", "newPassword", 1, "glass-input", "glass-input-mono"], [1, "error-message", 2, "color", "#ff4d4d", "margin-bottom", "20px", "font-size", "0.9rem", "margin-top", "-10px"], ["type", "submit", 1, "btn-primary", "submit-btn", 2, "margin-top", "10px", 3, "disabled"], [1, "material-symbols-outlined", "btn-icon", "spinner"], [1, "material-symbols-outlined", "btn-icon"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "span", 8);
      \u0275\u0275text(9, "shield_person");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 9)(11, "span", 10);
      \u0275\u0275text(12, "FinVault");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 11);
      \u0275\u0275text(14, "Your Secure Financial Terminal");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 12)(16, "p", 13);
      \u0275\u0275text(17, "The card is key to");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "h1", 14);
      \u0275\u0275text(19, " The Thinking");
      \u0275\u0275element(20, "br");
      \u0275\u0275elementStart(21, "span");
      \u0275\u0275text(22, "Behind the");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "br");
      \u0275\u0275text(24, " Money ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p", 15);
      \u0275\u0275text(26, " Finalize your vault recovery. Validate the cipher sent to your identity and define a new master key for your financial terminal. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 16)(28, "div", 17);
      \u0275\u0275element(29, "div", 18);
      \u0275\u0275elementStart(30, "div", 19);
      \u0275\u0275text(31, "0142 3658 4526 1573");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 20)(33, "span", 21);
      \u0275\u0275text(34, "Wallet Touch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 22)(36, "span", 8);
      \u0275\u0275text(37, "diamond");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "div", 23)(39, "div", 24)(40, "span", 25);
      \u0275\u0275text(41, "VISA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span", 26);
      \u0275\u0275text(43, "contactless_pay");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(44, "div", 18);
      \u0275\u0275elementStart(45, "div", 19);
      \u0275\u0275text(46, "5478 2535 4585 91.23");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 20)(48, "span", 21);
      \u0275\u0275text(49, "Primary Vault");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span", 27);
      \u0275\u0275text(51, "12/27");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 28)(53, "div", 24)(54, "span", 25);
      \u0275\u0275text(55, "MASTERCARD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span", 26);
      \u0275\u0275text(57, "contactless_pay");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(58, "div", 18);
      \u0275\u0275elementStart(59, "div", 19);
      \u0275\u0275text(60, "0001 7595 6585 5535");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 20)(62, "span", 21);
      \u0275\u0275text(63, "VERIFIED USER");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "span", 27);
      \u0275\u0275text(65, "09/28");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(66, "div", 29)(67, "div", 30)(68, "div", 31)(69, "div", 32)(70, "a", 33)(71, "span", 34);
      \u0275\u0275text(72, "arrow_back");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "span", 35);
      \u0275\u0275text(74, "Finalize Recovery");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "h2", 36);
      \u0275\u0275text(76, "Define New Cipher");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p", 37);
      \u0275\u0275text(78, "Resetting access for ");
      \u0275\u0275elementStart(79, "span", 38);
      \u0275\u0275text(80);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "form", 39);
      \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_81_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(82, "div", 40)(83, "div", 41)(84, "label", 42);
      \u0275\u0275text(85, "OTP Code");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(86, ResetPasswordComponent_Conditional_86_Template, 2, 1, "span", 43)(87, ResetPasswordComponent_Conditional_87_Template, 2, 0, "span", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 45)(89, "span", 46);
      \u0275\u0275text(90, "dialpad");
      \u0275\u0275elementEnd();
      \u0275\u0275element(91, "input", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 40)(93, "label", 42);
      \u0275\u0275text(94, "New Secret Cipher");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 45)(96, "span", 46);
      \u0275\u0275text(97, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275element(98, "input", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(99, ResetPasswordComponent_Conditional_99_Template, 2, 1, "div", 49);
      \u0275\u0275elementStart(100, "button", 50);
      \u0275\u0275conditionalCreate(101, ResetPasswordComponent_Conditional_101_Template, 3, 0)(102, ResetPasswordComponent_Conditional_102_Template, 3, 0);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(80);
      \u0275\u0275textInterpolate(ctx.email);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.resetForm);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.otpTimer() > 0 ? 86 : 87);
      \u0275\u0275advance(13);
      \u0275\u0275conditional(ctx.authService.errorMessage() ? 99 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.resetForm.invalid || ctx.authService.isLoading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.authService.isLoading() ? 101 : 102);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, RouterLink], styles: ['\n.login-layout[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: block;\n  z-index: 1;\n}\n.hero-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 48px 56px;\n  position: relative;\n  height: 100vh;\n  width: 65%;\n  overflow: hidden;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: rgba(107, 110, 249, 0.12);\n  border: 1px solid rgba(107, 110, 249, 0.25);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--primary);\n  font-variation-settings: "FILL" 1;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n}\n.brand-tagline[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 1px;\n}\n.hero-text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 40px 0;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.hero-sub[_ngcontent-%COMP%]::before {\n  content: "";\n  display: block;\n  width: 28px;\n  height: 1px;\n  background: var(--text-muted);\n}\n.hero-heading[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 500;\n  line-height: 1.1;\n  letter-spacing: -0.04em;\n  color: var(--text-primary);\n  margin-bottom: 20px;\n}\n.hero-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.hero-desc[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  max-width: 380px;\n}\n.cards-scene[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 70%;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 320px;\n  height: 500px;\n  z-index: 10;\n}\n.credit-card[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 380px;\n  height: 220px;\n  border-radius: 18px;\n  padding: 20px 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  box-shadow: 0 12px 40px rgba(120, 130, 210, 0.25);\n  transition: transform 0.35s ease, box-shadow 0.35s ease;\n}\n.credit-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-12px) scale(1.04) !important;\n  box-shadow: 0 30px 60px rgba(52, 0, 241, 0.45) !important;\n}\n.card-blue[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.82);\n  top: 0px;\n  left: 30px;\n  transform: rotate(-6deg);\n  z-index: 3;\n}\n.card-purple[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.78);\n  top: 160px;\n  left: 10px;\n  transform: rotate(4deg);\n  z-index: 2;\n}\n.card-frost[_ngcontent-%COMP%] {\n  background: rgba(219, 224, 255, 0.7);\n  top: 320px;\n  left: 40px;\n  transform: rotate(-2deg);\n  z-index: 1;\n}\n.card-top-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.9);\n  letter-spacing: 0.08em;\n}\n.card-wave[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.75);\n  font-variation-settings: "FILL" 0;\n}\n.card-chip[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 24px;\n  background: rgba(255, 215, 100, 0.6);\n  border-radius: 5px;\n  border: 1px solid rgba(255, 215, 100, 0.4);\n}\n.card-number[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.8);\n  letter-spacing: 0.12em;\n}\n.card-frost[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%] {\n  color: rgba(80, 80, 140, 0.7);\n  font-size: 9px;\n}\n.card-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.card-holder[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.85);\n  letter-spacing: 0.05em;\n}\n.card-frost[_ngcontent-%COMP%]   .card-holder[_ngcontent-%COMP%] {\n  color: rgba(80, 80, 140, 0.8);\n}\n.card-expiry[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.card-logo[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: rgba(255, 255, 255, 0.6);\n  font-variation-settings: "FILL" 1;\n}\n.social-proof[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.avatars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 500;\n  margin-left: -8px;\n  color: white;\n}\n.avatar[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.avatar.av1[_ngcontent-%COMP%] {\n  background: #6B6EF9;\n}\n.avatar.av2[_ngcontent-%COMP%] {\n  background: #A78BFA;\n}\n.avatar.av3[_ngcontent-%COMP%] {\n  background: #818CF8;\n}\n.avatar-count[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background: var(--primary-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 500;\n  color: var(--primary);\n  margin-left: -8px;\n}\n.social-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.social-link[_ngcontent-%COMP%] {\n  color: var(--primary);\n  text-decoration: none;\n  font-weight: 500;\n}\n.social-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.form-side[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  top: 0;\n  height: 125vh;\n  width: 35%;\n  min-width: 440px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 48px;\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(40px);\n  -webkit-backdrop-filter: blur(40px);\n  border-left: 1px solid rgba(255, 255, 255, 0.95);\n  border-radius: 24px 0 0 24px;\n  box-shadow: -15px 0 50px rgba(100, 100, 200, 0.2);\n  z-index: 200;\n  overflow-y: auto;\n}\n.form-card[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 44px 40px;\n  background: transparent !important;\n  box-shadow: none !important;\n  border: none !important;\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.form-title[_ngcontent-%COMP%] {\n  font-size: 2.75rem;\n  font-weight: 500;\n  color: var(--text-primary);\n  letter-spacing: -0.03em;\n  margin-bottom: 6px;\n}\n.form-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.field-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n}\n.field-label-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--primary);\n  text-decoration: none;\n  font-weight: 500;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.timer-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--primary);\n  background: rgba(107, 110, 249, 0.1);\n  padding: 2px 8px;\n  border-radius: 20px;\n  border: 1px solid rgba(107, 110, 249, 0.2);\n}\n.timer-badge.expired[_ngcontent-%COMP%] {\n  color: #ff4d4d;\n  background: rgba(255, 77, 77, 0.1);\n  border-color: rgba(255, 77, 77, 0.2);\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  color: var(--text-muted);\n  font-variation-settings: "FILL" 0;\n  pointer-events: none;\n}\n.glass-input[_ngcontent-%COMP%] {\n  padding-left: 46px !important;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 8px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-variation-settings: "FILL" 0;\n}\n.form-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 28px 0 20px;\n}\n.divider-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background: rgba(107, 110, 249, 0.15);\n}\n.divider-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.form-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.footer-link[_ngcontent-%COMP%] {\n  color: var(--primary);\n  text-decoration: none;\n  font-weight: 500;\n  margin-left: 4px;\n}\n.footer-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", standalone: true, imports: [ReactiveFormsModule, RouterLink], template: '<!-- Ambient background blobs -->\r\n<div class="bg-blobs">\r\n  <div class="blob blob-1"></div>\r\n  <div class="blob blob-2"></div>\r\n  <div class="blob blob-3"></div>\r\n</div>\r\n\r\n<!-- Main layout -->\r\n<div class="login-layout">\r\n\r\n  <!-- LEFT SIDE - Hero with floating cards -->\r\n  <div class="hero-side">\r\n    <!-- Branding -->\r\n    <div class="brand">\r\n      <div class="brand-icon">\r\n        <span class="material-symbols-outlined">shield_person</span>\r\n      </div>\r\n      <div class="brand-text">\r\n        <span class="brand-name">FinVault</span>\r\n        <span class="brand-tagline">Your Secure Financial Terminal</span>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Hero text -->\r\n    <div class="hero-text">\r\n      <p class="hero-sub">The card is key to</p>\r\n      <h1 class="hero-heading">\r\n        The Thinking<br>\r\n        <span>Behind the</span><br>\r\n        Money\r\n      </h1>\r\n      <p class="hero-desc">\r\n        Finalize your vault recovery. Validate the cipher sent to your identity \r\n        and define a new master key for your financial terminal.\r\n      </p>\r\n    </div>\r\n\r\n    <!-- Floating glass credit cards -->\r\n    <div class="cards-scene">\r\n\r\n      <!-- Card 3 - back (frost) -->\r\n      <div class="credit-card card-frost">\r\n        <div class="card-chip"></div>\r\n        <div class="card-number mono">0142 3658 4526 1573</div>\r\n        <div class="card-bottom">\r\n          <span class="card-holder mono">Wallet Touch</span>\r\n          <div class="card-logo">\r\n            <span class="material-symbols-outlined">diamond</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Card 2 - middle (purple) -->\r\n      <div class="credit-card card-purple">\r\n        <div class="card-top-row">\r\n          <span class="card-label mono">VISA</span>\r\n          <span class="material-symbols-outlined card-wave">contactless_pay</span>\r\n        </div>\r\n        <div class="card-chip"></div>\r\n        <div class="card-number mono">5478 2535 4585 91.23</div>\r\n        <div class="card-bottom">\r\n          <span class="card-holder mono">Primary Vault</span>\r\n          <span class="card-expiry mono">12/27</span>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Card 1 - front (blue) -->\r\n      <div class="credit-card card-blue">\r\n        <div class="card-top-row">\r\n          <span class="card-label mono">MASTERCARD</span>\r\n          <span class="material-symbols-outlined card-wave">contactless_pay</span>\r\n        </div>\r\n        <div class="card-chip"></div>\r\n        <div class="card-number mono">0001 7595 6585 5535</div>\r\n        <div class="card-bottom">\r\n          <span class="card-holder mono">VERIFIED USER</span>\r\n          <span class="card-expiry mono">09/28</span>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!-- RIGHT SIDE - Reset Password form -->\r\n  <div class="form-side">\r\n    <div class="form-card glass-card-strong">\r\n\r\n      <!-- Form header -->\r\n      <div class="form-header">\r\n        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">\r\n           <a routerLink="/auth/forgot-password" style="color: var(--primary); display: flex; align-items: center; text-decoration: none;">\r\n             <span class="material-symbols-outlined" style="font-size: 20px;">arrow_back</span>\r\n           </a>\r\n           <span style="font-size: 13px; color: var(--text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em;">Finalize Recovery</span>\r\n        </div>\r\n        <h2 class="form-title" style="font-size: 2.2rem;">Define New Cipher</h2>\r\n        <p class="form-subtitle">Resetting access for <span style="color: var(--primary); font-weight: 600;">{{ email }}</span></p>\r\n      </div>\r\n\r\n      <!-- Form -->\r\n      <form class="auth-form" [formGroup]="resetForm" (ngSubmit)="onSubmit()">\r\n\r\n        <div class="field-group">\r\n          <div class="field-label-row">\r\n             <label class="field-label label-uppercase">OTP Code</label>\r\n             @if (otpTimer() > 0) {\r\n               <span class="timer-badge">Expires in {{ otpTimer() }}s</span>\r\n             } @else {\r\n               <span class="timer-badge expired">Code Expired</span>\r\n             }\r\n          </div>\r\n          <div class="input-wrapper">\r\n            <span class="material-symbols-outlined input-icon">dialpad</span>\r\n            <input type="text" class="glass-input glass-input-mono" placeholder="123456" formControlName="otpCode" maxlength="6" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class="field-group">\r\n          <label class="field-label label-uppercase">New Secret Cipher</label>\r\n          <div class="input-wrapper">\r\n            <span class="material-symbols-outlined input-icon">lock</span>\r\n            <input type="password" class="glass-input glass-input-mono" placeholder="************" formControlName="newPassword" />\r\n          </div>\r\n        </div>\r\n\r\n        @if (authService.errorMessage()) {\r\n        <div class="error-message" style="color: #ff4d4d; margin-bottom: 20px; font-size: 0.9rem; margin-top: -10px;">\r\n          {{ authService.errorMessage() }}\r\n        </div>\r\n        }\r\n\r\n        <button type="submit" class="btn-primary submit-btn" [disabled]="resetForm.invalid || authService.isLoading()" style="margin-top: 10px;">\r\n          @if (authService.isLoading()) {\r\n          <span class="material-symbols-outlined btn-icon spinner">sync</span>\r\n          Updating Cipher...\r\n          } @else {\r\n          <span class="material-symbols-outlined btn-icon">security_update_good</span>\r\n          Finalize & Save\r\n          }\r\n        </button>\r\n\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n', styles: ['/* src/app/features/auth/login/login.scss */\n.login-layout {\n  position: relative;\n  min-height: 100vh;\n  display: block;\n  z-index: 1;\n}\n.hero-side {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 48px 56px;\n  position: relative;\n  height: 100vh;\n  width: 65%;\n  overflow: hidden;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.brand-icon {\n  width: 44px;\n  height: 44px;\n  background: rgba(107, 110, 249, 0.12);\n  border: 1px solid rgba(107, 110, 249, 0.25);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-icon .material-symbols-outlined {\n  font-size: 17px;\n  color: var(--primary);\n  font-variation-settings: "FILL" 1;\n}\n.brand-name {\n  font-size: 20px;\n  font-weight: 500;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n}\n.brand-tagline {\n  display: block;\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 1px;\n}\n.hero-text {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 40px 0;\n}\n.hero-sub {\n  font-size: 15px;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.hero-sub::before {\n  content: "";\n  display: block;\n  width: 28px;\n  height: 1px;\n  background: var(--text-muted);\n}\n.hero-heading {\n  font-size: 3.5rem;\n  font-weight: 500;\n  line-height: 1.1;\n  letter-spacing: -0.04em;\n  color: var(--text-primary);\n  margin-bottom: 20px;\n}\n.hero-heading span {\n  color: var(--primary);\n}\n.hero-desc {\n  font-size: 15px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  max-width: 380px;\n}\n.cards-scene {\n  position: absolute;\n  left: 70%;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 320px;\n  height: 500px;\n  z-index: 10;\n}\n.credit-card {\n  position: absolute;\n  width: 380px;\n  height: 220px;\n  border-radius: 18px;\n  padding: 20px 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  box-shadow: 0 12px 40px rgba(120, 130, 210, 0.25);\n  transition: transform 0.35s ease, box-shadow 0.35s ease;\n}\n.credit-card:hover {\n  transform: translateY(-12px) scale(1.04) !important;\n  box-shadow: 0 30px 60px rgba(52, 0, 241, 0.45) !important;\n}\n.card-blue {\n  background: rgba(99, 102, 241, 0.82);\n  top: 0px;\n  left: 30px;\n  transform: rotate(-6deg);\n  z-index: 3;\n}\n.card-purple {\n  background: rgba(139, 92, 246, 0.78);\n  top: 160px;\n  left: 10px;\n  transform: rotate(4deg);\n  z-index: 2;\n}\n.card-frost {\n  background: rgba(219, 224, 255, 0.7);\n  top: 320px;\n  left: 40px;\n  transform: rotate(-2deg);\n  z-index: 1;\n}\n.card-top-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.9);\n  letter-spacing: 0.08em;\n}\n.card-wave {\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.75);\n  font-variation-settings: "FILL" 0;\n}\n.card-chip {\n  width: 32px;\n  height: 24px;\n  background: rgba(255, 215, 100, 0.6);\n  border-radius: 5px;\n  border: 1px solid rgba(255, 215, 100, 0.4);\n}\n.card-number {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.8);\n  letter-spacing: 0.12em;\n}\n.card-frost .card-number {\n  color: rgba(80, 80, 140, 0.7);\n  font-size: 9px;\n}\n.card-bottom {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.card-holder {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.85);\n  letter-spacing: 0.05em;\n}\n.card-frost .card-holder {\n  color: rgba(80, 80, 140, 0.8);\n}\n.card-expiry {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.card-logo .material-symbols-outlined {\n  font-size: 22px;\n  color: rgba(255, 255, 255, 0.6);\n  font-variation-settings: "FILL" 1;\n}\n.social-proof {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.avatars {\n  display: flex;\n  align-items: center;\n}\n.avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 500;\n  margin-left: -8px;\n  color: white;\n}\n.avatar:first-child {\n  margin-left: 0;\n}\n.avatar.av1 {\n  background: #6B6EF9;\n}\n.avatar.av2 {\n  background: #A78BFA;\n}\n.avatar.av3 {\n  background: #818CF8;\n}\n.avatar-count {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background: var(--primary-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 500;\n  color: var(--primary);\n  margin-left: -8px;\n}\n.social-text {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.social-link {\n  color: var(--primary);\n  text-decoration: none;\n  font-weight: 500;\n}\n.social-link:hover {\n  text-decoration: underline;\n}\n.form-side {\n  position: fixed;\n  right: 0;\n  top: 0;\n  height: 125vh;\n  width: 35%;\n  min-width: 440px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 48px;\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(40px);\n  -webkit-backdrop-filter: blur(40px);\n  border-left: 1px solid rgba(255, 255, 255, 0.95);\n  border-radius: 24px 0 0 24px;\n  box-shadow: -15px 0 50px rgba(100, 100, 200, 0.2);\n  z-index: 200;\n  overflow-y: auto;\n}\n.form-card {\n  width: 100%;\n  padding: 44px 40px;\n  background: transparent !important;\n  box-shadow: none !important;\n  border: none !important;\n}\n.form-header {\n  margin-bottom: 36px;\n}\n.form-title {\n  font-size: 2.75rem;\n  font-weight: 500;\n  color: var(--text-primary);\n  letter-spacing: -0.03em;\n  margin-bottom: 6px;\n}\n.form-subtitle {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.auth-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.field-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field-label {\n  font-size: 10px;\n  font-weight: 500;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n}\n.field-label-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.forgot-link {\n  font-size: 11px;\n  color: var(--primary);\n  text-decoration: none;\n  font-weight: 500;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.forgot-link:hover {\n  opacity: 0.75;\n}\n.timer-badge {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--primary);\n  background: rgba(107, 110, 249, 0.1);\n  padding: 2px 8px;\n  border-radius: 20px;\n  border: 1px solid rgba(107, 110, 249, 0.2);\n}\n.timer-badge.expired {\n  color: #ff4d4d;\n  background: rgba(255, 77, 77, 0.1);\n  border-color: rgba(255, 77, 77, 0.2);\n}\n.input-wrapper {\n  position: relative;\n}\n.input-icon {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  color: var(--text-muted);\n  font-variation-settings: "FILL" 0;\n  pointer-events: none;\n}\n.glass-input {\n  padding-left: 46px !important;\n}\n.submit-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 8px;\n}\n.btn-icon {\n  font-size: 18px;\n  font-variation-settings: "FILL" 0;\n}\n.form-divider {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 28px 0 20px;\n}\n.divider-line {\n  flex: 1;\n  height: 1px;\n  background: rgba(107, 110, 249, 0.15);\n}\n.divider-text {\n  font-size: 12px;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.form-footer {\n  text-align: center;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.footer-link {\n  color: var(--primary);\n  text-decoration: none;\n  font-weight: 500;\n  margin-left: 4px;\n}\n.footer-link:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/features/auth/reset-password/reset-password.ts", lineNumber: 15 });
})();
export {
  ResetPasswordComponent
};
//# sourceMappingURL=chunk-MY4ZZ5X5.js.map
