import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
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
  Component,
  Router,
  RouterLink,
  inject,
  setClassMetadata,
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
  ɵɵtextInterpolate1
} from "./chunk-SYL3PSAO.js";

// src/app/features/auth/forgot-password/forgot-password.ts
function ForgotPasswordComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.authService.errorMessage(), " ");
  }
}
function ForgotPasswordComponent_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Sending OTP... ");
  }
}
function ForgotPasswordComponent_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Request Reset OTP ");
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  forgotForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]]
  });
  onSubmit() {
    if (this.forgotForm.valid) {
      const email = this.forgotForm.value.email;
      this.authService.forgotPassword(email, "PasswordReset").subscribe((res) => {
        if (res && res.success) {
          this.router.navigate(["/auth/reset-password"], {
            queryParams: { email }
          });
        }
      });
    }
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 96, vars: 4, consts: [[1, "bg-blobs"], [1, "blob", "blob-1"], [1, "blob", "blob-2"], [1, "blob", "blob-3"], [1, "login-layout"], [1, "hero-side"], [1, "brand"], [1, "brand-icon"], [1, "material-symbols-outlined"], [1, "brand-text"], [1, "brand-name"], [1, "brand-tagline"], [1, "hero-text"], [1, "hero-sub"], [1, "hero-heading"], [1, "hero-desc"], [1, "cards-scene"], [1, "credit-card", "card-frost"], [1, "card-chip"], [1, "card-number", "mono"], [1, "card-bottom"], [1, "card-holder", "mono"], [1, "card-logo"], [1, "credit-card", "card-purple"], [1, "card-top-row"], [1, "card-label", "mono"], [1, "material-symbols-outlined", "card-wave"], [1, "card-expiry", "mono"], [1, "credit-card", "card-blue"], [1, "form-side"], [1, "form-card", "glass-card-strong"], [1, "form-header"], [2, "display", "flex", "align-items", "center", "gap", "10px", "margin-bottom", "20px"], ["routerLink", "/auth/login", 2, "color", "var(--primary)", "display", "flex", "align-items", "center", "text-decoration", "none"], [1, "material-symbols-outlined", 2, "font-size", "20px"], [2, "font-size", "13px", "color", "var(--text-muted)", "font-weight", "500", "text-transform", "uppercase", "letter-spacing", "0.1em"], [1, "form-title", 2, "font-size", "2.4rem"], [1, "form-subtitle"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "field-group"], [1, "field-label", "label-uppercase"], [1, "input-wrapper"], [1, "material-symbols-outlined", "input-icon"], ["type", "email", "placeholder", "your@email.com", "formControlName", "email", 1, "glass-input"], [1, "error-message", 2, "color", "#ff4d4d", "margin-bottom", "20px", "font-size", "0.9rem", "margin-top", "-10px"], ["type", "submit", 1, "btn-primary", "submit-btn", 2, "margin-top", "10px", 3, "disabled"], [2, "margin-top", "40px", "text-align", "center"], [1, "form-footer", 2, "opacity", "0.7"], [1, "material-symbols-outlined", "btn-icon", "spinner"], [1, "material-symbols-outlined", "btn-icon"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
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
      \u0275\u0275text(26, " Recover your access. We'll send a one-time cipher to your identity email system to verify your ownership of the vault. ");
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
      \u0275\u0275text(74, "Back to Identity");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "h2", 36);
      \u0275\u0275text(76, "Reset Cipher");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p", 37);
      \u0275\u0275text(78, "Enter the identity email tied to your vault");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "form", 38);
      \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_79_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(80, "div", 39)(81, "label", 40);
      \u0275\u0275text(82, "Identity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div", 41)(84, "span", 42);
      \u0275\u0275text(85, "alternate_email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "input", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(87, ForgotPasswordComponent_Conditional_87_Template, 2, 1, "div", 44);
      \u0275\u0275elementStart(88, "button", 45);
      \u0275\u0275conditionalCreate(89, ForgotPasswordComponent_Conditional_89_Template, 3, 0)(90, ForgotPasswordComponent_Conditional_90_Template, 3, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 46)(92, "p", 47);
      \u0275\u0275text(93, " We'll send a 6-digit one-time code to this address.");
      \u0275\u0275element(94, "br");
      \u0275\u0275text(95, " Please check your inbox (and spam) shortly. ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(79);
      \u0275\u0275property("formGroup", ctx.forgotForm);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.authService.errorMessage() ? 87 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.forgotForm.invalid || ctx.authService.isLoading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.authService.isLoading() ? 89 : 90);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['\n.login-layout[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: block;\n  z-index: 1;\n}\n.hero-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 48px 56px;\n  position: relative;\n  height: 100vh;\n  width: 65%;\n  overflow: hidden;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: rgba(107, 110, 249, 0.12);\n  border: 1px solid rgba(107, 110, 249, 0.25);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--primary);\n  font-variation-settings: "FILL" 1;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n}\n.brand-tagline[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 1px;\n}\n.hero-text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 40px 0;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.hero-sub[_ngcontent-%COMP%]::before {\n  content: "";\n  display: block;\n  width: 28px;\n  height: 1px;\n  background: var(--text-muted);\n}\n.hero-heading[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 500;\n  line-height: 1.1;\n  letter-spacing: -0.04em;\n  color: var(--text-primary);\n  margin-bottom: 20px;\n}\n.hero-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.hero-desc[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  max-width: 380px;\n}\n.cards-scene[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 70%;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 320px;\n  height: 500px;\n  z-index: 10;\n}\n.credit-card[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 380px;\n  height: 220px;\n  border-radius: 18px;\n  padding: 20px 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  box-shadow: 0 12px 40px rgba(120, 130, 210, 0.25);\n  transition: transform 0.35s ease, box-shadow 0.35s ease;\n}\n.credit-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-12px) scale(1.04) !important;\n  box-shadow: 0 30px 60px rgba(52, 0, 241, 0.45) !important;\n}\n.card-blue[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.82);\n  top: 0px;\n  left: 30px;\n  transform: rotate(-6deg);\n  z-index: 3;\n}\n.card-purple[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.78);\n  top: 160px;\n  left: 10px;\n  transform: rotate(4deg);\n  z-index: 2;\n}\n.card-frost[_ngcontent-%COMP%] {\n  background: rgba(219, 224, 255, 0.7);\n  top: 320px;\n  left: 40px;\n  transform: rotate(-2deg);\n  z-index: 1;\n}\n.card-top-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.9);\n  letter-spacing: 0.08em;\n}\n.card-wave[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.75);\n  font-variation-settings: "FILL" 0;\n}\n.card-chip[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 24px;\n  background: rgba(255, 215, 100, 0.6);\n  border-radius: 5px;\n  border: 1px solid rgba(255, 215, 100, 0.4);\n}\n.card-number[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.8);\n  letter-spacing: 0.12em;\n}\n.card-frost[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%] {\n  color: rgba(80, 80, 140, 0.7);\n  font-size: 9px;\n}\n.card-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.card-holder[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.85);\n  letter-spacing: 0.05em;\n}\n.card-frost[_ngcontent-%COMP%]   .card-holder[_ngcontent-%COMP%] {\n  color: rgba(80, 80, 140, 0.8);\n}\n.card-expiry[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.card-logo[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: rgba(255, 255, 255, 0.6);\n  font-variation-settings: "FILL" 1;\n}\n.social-proof[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.avatars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 500;\n  margin-left: -8px;\n  color: white;\n}\n.avatar[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.avatar.av1[_ngcontent-%COMP%] {\n  background: #6B6EF9;\n}\n.avatar.av2[_ngcontent-%COMP%] {\n  background: #A78BFA;\n}\n.avatar.av3[_ngcontent-%COMP%] {\n  background: #818CF8;\n}\n.avatar-count[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background: var(--primary-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 500;\n  color: var(--primary);\n  margin-left: -8px;\n}\n.social-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.social-link[_ngcontent-%COMP%] {\n  color: var(--primary);\n  text-decoration: none;\n  font-weight: 500;\n}\n.social-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.form-side[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  top: 0;\n  height: 125vh;\n  width: 35%;\n  min-width: 440px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 48px;\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(40px);\n  -webkit-backdrop-filter: blur(40px);\n  border-left: 1px solid rgba(255, 255, 255, 0.95);\n  border-radius: 24px 0 0 24px;\n  box-shadow: -15px 0 50px rgba(100, 100, 200, 0.2);\n  z-index: 200;\n  overflow-y: auto;\n}\n.form-card[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 44px 40px;\n  background: transparent !important;\n  box-shadow: none !important;\n  border: none !important;\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.form-title[_ngcontent-%COMP%] {\n  font-size: 2.75rem;\n  font-weight: 500;\n  color: var(--text-primary);\n  letter-spacing: -0.03em;\n  margin-bottom: 6px;\n}\n.form-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.field-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n}\n.field-label-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--primary);\n  text-decoration: none;\n  font-weight: 500;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.timer-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--primary);\n  background: rgba(107, 110, 249, 0.1);\n  padding: 2px 8px;\n  border-radius: 20px;\n  border: 1px solid rgba(107, 110, 249, 0.2);\n}\n.timer-badge.expired[_ngcontent-%COMP%] {\n  color: #ff4d4d;\n  background: rgba(255, 77, 77, 0.1);\n  border-color: rgba(255, 77, 77, 0.2);\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  color: var(--text-muted);\n  font-variation-settings: "FILL" 0;\n  pointer-events: none;\n}\n.glass-input[_ngcontent-%COMP%] {\n  padding-left: 46px !important;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 8px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-variation-settings: "FILL" 0;\n}\n.form-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 28px 0 20px;\n}\n.divider-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background: rgba(107, 110, 249, 0.15);\n}\n.divider-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.form-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.footer-link[_ngcontent-%COMP%] {\n  color: var(--primary);\n  text-decoration: none;\n  font-weight: 500;\n  margin-left: 4px;\n}\n.footer-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [ReactiveFormsModule, RouterLink], template: `<!-- Ambient background blobs -->\r
<div class="bg-blobs">\r
  <div class="blob blob-1"></div>\r
  <div class="blob blob-2"></div>\r
  <div class="blob blob-3"></div>\r
</div>\r
\r
<!-- Main layout -->\r
<div class="login-layout">\r
\r
  <!-- LEFT SIDE - Hero with floating cards -->\r
  <div class="hero-side">\r
    <!-- Branding -->\r
    <div class="brand">\r
      <div class="brand-icon">\r
        <span class="material-symbols-outlined">shield_person</span>\r
      </div>\r
      <div class="brand-text">\r
        <span class="brand-name">FinVault</span>\r
        <span class="brand-tagline">Your Secure Financial Terminal</span>\r
      </div>\r
    </div>\r
\r
    <!-- Hero text -->\r
    <div class="hero-text">\r
      <p class="hero-sub">The card is key to</p>\r
      <h1 class="hero-heading">\r
        The Thinking<br>\r
        <span>Behind the</span><br>\r
        Money\r
      </h1>\r
      <p class="hero-desc">\r
        Recover your access. We'll send a one-time cipher to your identity email \r
        system to verify your ownership of the vault.\r
      </p>\r
    </div>\r
\r
    <!-- Floating glass credit cards -->\r
    <div class="cards-scene">\r
\r
      <!-- Card 3 - back (frost) -->\r
      <div class="credit-card card-frost">\r
        <div class="card-chip"></div>\r
        <div class="card-number mono">0142 3658 4526 1573</div>\r
        <div class="card-bottom">\r
          <span class="card-holder mono">Wallet Touch</span>\r
          <div class="card-logo">\r
            <span class="material-symbols-outlined">diamond</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Card 2 - middle (purple) -->\r
      <div class="credit-card card-purple">\r
        <div class="card-top-row">\r
          <span class="card-label mono">VISA</span>\r
          <span class="material-symbols-outlined card-wave">contactless_pay</span>\r
        </div>\r
        <div class="card-chip"></div>\r
        <div class="card-number mono">5478 2535 4585 91.23</div>\r
        <div class="card-bottom">\r
          <span class="card-holder mono">Primary Vault</span>\r
          <span class="card-expiry mono">12/27</span>\r
        </div>\r
      </div>\r
\r
      <!-- Card 1 - front (blue) -->\r
      <div class="credit-card card-blue">\r
        <div class="card-top-row">\r
          <span class="card-label mono">MASTERCARD</span>\r
          <span class="material-symbols-outlined card-wave">contactless_pay</span>\r
        </div>\r
        <div class="card-chip"></div>\r
        <div class="card-number mono">0001 7595 6585 5535</div>\r
        <div class="card-bottom">\r
          <span class="card-holder mono">VERIFIED USER</span>\r
          <span class="card-expiry mono">09/28</span>\r
        </div>\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
  <!-- RIGHT SIDE - Forgot Password form -->\r
  <div class="form-side">\r
    <div class="form-card glass-card-strong">\r
\r
      <!-- Form header -->\r
      <div class="form-header">\r
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">\r
           <a routerLink="/auth/login" style="color: var(--primary); display: flex; align-items: center; text-decoration: none;">\r
             <span class="material-symbols-outlined" style="font-size: 20px;">arrow_back</span>\r
           </a>\r
           <span style="font-size: 13px; color: var(--text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em;">Back to Identity</span>\r
        </div>\r
        <h2 class="form-title" style="font-size: 2.4rem;">Reset Cipher</h2>\r
        <p class="form-subtitle">Enter the identity email tied to your vault</p>\r
      </div>\r
\r
      <!-- Form -->\r
      <form class="auth-form" [formGroup]="forgotForm" (ngSubmit)="onSubmit()">\r
\r
        <div class="field-group">\r
          <label class="field-label label-uppercase">Identity</label>\r
          <div class="input-wrapper">\r
            <span class="material-symbols-outlined input-icon">alternate_email</span>\r
            <input type="email" class="glass-input" placeholder="your@email.com" formControlName="email" />\r
          </div>\r
        </div>\r
\r
        @if (authService.errorMessage()) {\r
        <div class="error-message" style="color: #ff4d4d; margin-bottom: 20px; font-size: 0.9rem; margin-top: -10px;">\r
          {{ authService.errorMessage() }}\r
        </div>\r
        }\r
\r
        <button type="submit" class="btn-primary submit-btn" [disabled]="forgotForm.invalid || authService.isLoading()" style="margin-top: 10px;">\r
          @if (authService.isLoading()) {\r
          <span class="material-symbols-outlined btn-icon spinner">sync</span>\r
          Sending OTP...\r
          } @else {\r
          <span class="material-symbols-outlined btn-icon">send</span>\r
          Request Reset OTP\r
          }\r
        </button>\r
\r
      </form>\r
\r
      <!-- Footer link -->\r
       <div style="margin-top: 40px; text-align: center;">\r
          <p class="form-footer" style="opacity: 0.7;">\r
            We'll send a 6-digit one-time code to this address.<br>\r
            Please check your inbox (and spam) shortly.\r
          </p>\r
       </div>\r
\r
    </div>\r
  </div>\r
\r
</div>\r
\r
\r
`, styles: ['/* src/app/features/auth/login/login.scss */\n.login-layout {\n  position: relative;\n  min-height: 100vh;\n  display: block;\n  z-index: 1;\n}\n.hero-side {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 48px 56px;\n  position: relative;\n  height: 100vh;\n  width: 65%;\n  overflow: hidden;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.brand-icon {\n  width: 44px;\n  height: 44px;\n  background: rgba(107, 110, 249, 0.12);\n  border: 1px solid rgba(107, 110, 249, 0.25);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.brand-icon .material-symbols-outlined {\n  font-size: 17px;\n  color: var(--primary);\n  font-variation-settings: "FILL" 1;\n}\n.brand-name {\n  font-size: 20px;\n  font-weight: 500;\n  color: var(--text-primary);\n  letter-spacing: -0.02em;\n}\n.brand-tagline {\n  display: block;\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-top: 1px;\n}\n.hero-text {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 40px 0;\n}\n.hero-sub {\n  font-size: 15px;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.hero-sub::before {\n  content: "";\n  display: block;\n  width: 28px;\n  height: 1px;\n  background: var(--text-muted);\n}\n.hero-heading {\n  font-size: 3.5rem;\n  font-weight: 500;\n  line-height: 1.1;\n  letter-spacing: -0.04em;\n  color: var(--text-primary);\n  margin-bottom: 20px;\n}\n.hero-heading span {\n  color: var(--primary);\n}\n.hero-desc {\n  font-size: 15px;\n  color: var(--text-secondary);\n  line-height: 1.6;\n  max-width: 380px;\n}\n.cards-scene {\n  position: absolute;\n  left: 70%;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 320px;\n  height: 500px;\n  z-index: 10;\n}\n.credit-card {\n  position: absolute;\n  width: 380px;\n  height: 220px;\n  border-radius: 18px;\n  padding: 20px 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  box-shadow: 0 12px 40px rgba(120, 130, 210, 0.25);\n  transition: transform 0.35s ease, box-shadow 0.35s ease;\n}\n.credit-card:hover {\n  transform: translateY(-12px) scale(1.04) !important;\n  box-shadow: 0 30px 60px rgba(52, 0, 241, 0.45) !important;\n}\n.card-blue {\n  background: rgba(99, 102, 241, 0.82);\n  top: 0px;\n  left: 30px;\n  transform: rotate(-6deg);\n  z-index: 3;\n}\n.card-purple {\n  background: rgba(139, 92, 246, 0.78);\n  top: 160px;\n  left: 10px;\n  transform: rotate(4deg);\n  z-index: 2;\n}\n.card-frost {\n  background: rgba(219, 224, 255, 0.7);\n  top: 320px;\n  left: 40px;\n  transform: rotate(-2deg);\n  z-index: 1;\n}\n.card-top-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.9);\n  letter-spacing: 0.08em;\n}\n.card-wave {\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.75);\n  font-variation-settings: "FILL" 0;\n}\n.card-chip {\n  width: 32px;\n  height: 24px;\n  background: rgba(255, 215, 100, 0.6);\n  border-radius: 5px;\n  border: 1px solid rgba(255, 215, 100, 0.4);\n}\n.card-number {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.8);\n  letter-spacing: 0.12em;\n}\n.card-frost .card-number {\n  color: rgba(80, 80, 140, 0.7);\n  font-size: 9px;\n}\n.card-bottom {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.card-holder {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.85);\n  letter-spacing: 0.05em;\n}\n.card-frost .card-holder {\n  color: rgba(80, 80, 140, 0.8);\n}\n.card-expiry {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.card-logo .material-symbols-outlined {\n  font-size: 22px;\n  color: rgba(255, 255, 255, 0.6);\n  font-variation-settings: "FILL" 1;\n}\n.social-proof {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.avatars {\n  display: flex;\n  align-items: center;\n}\n.avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 500;\n  margin-left: -8px;\n  color: white;\n}\n.avatar:first-child {\n  margin-left: 0;\n}\n.avatar.av1 {\n  background: #6B6EF9;\n}\n.avatar.av2 {\n  background: #A78BFA;\n}\n.avatar.av3 {\n  background: #818CF8;\n}\n.avatar-count {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid white;\n  background: var(--primary-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 500;\n  color: var(--primary);\n  margin-left: -8px;\n}\n.social-text {\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.social-link {\n  color: var(--primary);\n  text-decoration: none;\n  font-weight: 500;\n}\n.social-link:hover {\n  text-decoration: underline;\n}\n.form-side {\n  position: fixed;\n  right: 0;\n  top: 0;\n  height: 125vh;\n  width: 35%;\n  min-width: 440px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 48px;\n  background: rgba(255, 255, 255, 0.9);\n  backdrop-filter: blur(40px);\n  -webkit-backdrop-filter: blur(40px);\n  border-left: 1px solid rgba(255, 255, 255, 0.95);\n  border-radius: 24px 0 0 24px;\n  box-shadow: -15px 0 50px rgba(100, 100, 200, 0.2);\n  z-index: 200;\n  overflow-y: auto;\n}\n.form-card {\n  width: 100%;\n  padding: 44px 40px;\n  background: transparent !important;\n  box-shadow: none !important;\n  border: none !important;\n}\n.form-header {\n  margin-bottom: 36px;\n}\n.form-title {\n  font-size: 2.75rem;\n  font-weight: 500;\n  color: var(--text-primary);\n  letter-spacing: -0.03em;\n  margin-bottom: 6px;\n}\n.form-subtitle {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.auth-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.field-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field-label {\n  font-size: 10px;\n  font-weight: 500;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--text-muted);\n}\n.field-label-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.forgot-link {\n  font-size: 11px;\n  color: var(--primary);\n  text-decoration: none;\n  font-weight: 500;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.forgot-link:hover {\n  opacity: 0.75;\n}\n.timer-badge {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--primary);\n  background: rgba(107, 110, 249, 0.1);\n  padding: 2px 8px;\n  border-radius: 20px;\n  border: 1px solid rgba(107, 110, 249, 0.2);\n}\n.timer-badge.expired {\n  color: #ff4d4d;\n  background: rgba(255, 77, 77, 0.1);\n  border-color: rgba(255, 77, 77, 0.2);\n}\n.input-wrapper {\n  position: relative;\n}\n.input-icon {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  color: var(--text-muted);\n  font-variation-settings: "FILL" 0;\n  pointer-events: none;\n}\n.glass-input {\n  padding-left: 46px !important;\n}\n.submit-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 8px;\n}\n.btn-icon {\n  font-size: 18px;\n  font-variation-settings: "FILL" 0;\n}\n.form-divider {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 28px 0 20px;\n}\n.divider-line {\n  flex: 1;\n  height: 1px;\n  background: rgba(107, 110, 249, 0.15);\n}\n.divider-text {\n  font-size: 12px;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.form-footer {\n  text-align: center;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.footer-link {\n  color: var(--primary);\n  text-decoration: none;\n  font-weight: 500;\n  margin-left: 4px;\n}\n.footer-link:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/features/auth/forgot-password/forgot-password.ts", lineNumber: 13 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-GSUCNXAF.js.map
