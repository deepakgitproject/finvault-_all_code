import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-7UCIGN6I.js";
import {
  CardService
} from "./chunk-4BOOVA7O.js";
import {
  SidebarComponent
} from "./chunk-JZ2MQXBK.js";
import {
  AuthService
} from "./chunk-P2F4JYQH.js";
import "./chunk-4SYUYOJR.js";
import {
  CommonModule,
  Component,
  HttpClient,
  Router,
  RouterLink,
  __spreadProps,
  __spreadValues,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SYL3PSAO.js";

// src/app/features/profile/profile.ts
function ProfileComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 9);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Profile updated successfully ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Conditional_54_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.profileForm.fullName, $event) || (ctx_r1.profileForm.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.profileForm.fullName);
  }
}
function ProfileComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.userProfile().fullName);
  }
}
function ProfileComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Conditional_59_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.profileForm.email, $event) || (ctx_r1.profileForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.profileForm.email);
  }
}
function ProfileComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.userProfile().email);
  }
}
function ProfileComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Conditional_64_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.profileForm.phone, $event) || (ctx_r1.profileForm.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.profileForm.phone);
  }
}
function ProfileComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.userProfile().phone);
  }
}
function ProfileComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Conditional_69_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.profileForm.dateOfBirth, $event) || (ctx_r1.profileForm.dateOfBirth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.profileForm.dateOfBirth);
  }
}
function ProfileComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.userProfile().dateOfBirth);
  }
}
function ProfileComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Conditional_74_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.profileForm.address, $event) || (ctx_r1.profileForm.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.profileForm.address);
  }
}
function ProfileComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.userProfile().address);
  }
}
function ProfileComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "button", 70);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_76_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleEditMode());
    });
    \u0275\u0275text(2, "Discard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 71);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_76_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveProfile());
    });
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Save Changes ");
    \u0275\u0275elementEnd()();
  }
}
function ProfileComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "input", 72)(2, "input", 73)(3, "input", 74);
    \u0275\u0275elementStart(4, "button", 75);
    \u0275\u0275text(5, "Update Password");
    \u0275\u0275elementEnd()();
  }
}
function ProfileComponent_Conditional_191_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_191_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275elementStart(1, "div", 77);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_191_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 78)(3, "span", 9);
    \u0275\u0275text(4, "delete_forever");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Delete your account?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "All your cards, payment history, and personal data will be permanently erased. This action cannot be reversed.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 79)(10, "label");
    \u0275\u0275text(11, "Type ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13, "DELETE");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " to confirm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_Conditional_191_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.deleteConfirmInput, $event) || (ctx_r1.deleteConfirmInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 81)(17, "button", 70);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_191_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(18, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 82);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_191_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(20, "Permanently Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.deleteConfirmInput);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.deleteConfirmInput() !== "DELETE");
  }
}
var ProfileComponent = class _ProfileComponent {
  http;
  cardService;
  router;
  authService;
  // -- Edit / UI state ------------------------------------------------
  editMode = signal(false, ...ngDevMode ? [{ debugName: "editMode" }] : (
    /* istanbul ignore next */
    []
  ));
  showCurrentPassword = signal(false, ...ngDevMode ? [{ debugName: "showCurrentPassword" }] : (
    /* istanbul ignore next */
    []
  ));
  showSaveSuccess = signal(false, ...ngDevMode ? [{ debugName: "showSaveSuccess" }] : (
    /* istanbul ignore next */
    []
  ));
  // -- Modal state --------------------------------------------------
  deleteConfirmModal = signal(false, ...ngDevMode ? [{ debugName: "deleteConfirmModal" }] : (
    /* istanbul ignore next */
    []
  ));
  deleteConfirmInput = signal("", ...ngDevMode ? [{ debugName: "deleteConfirmInput" }] : (
    /* istanbul ignore next */
    []
  ));
  // -- Toggle signals -------------------------------------------------
  darkMode = signal(false, ...ngDevMode ? [{ debugName: "darkMode" }] : (
    /* istanbul ignore next */
    []
  ));
  emailNotifications = signal(true, ...ngDevMode ? [{ debugName: "emailNotifications" }] : (
    /* istanbul ignore next */
    []
  ));
  twoFactorAuth = signal(true, ...ngDevMode ? [{ debugName: "twoFactorAuth" }] : (
    /* istanbul ignore next */
    []
  ));
  autoPay = signal(false, ...ngDevMode ? [{ debugName: "autoPay" }] : (
    /* istanbul ignore next */
    []
  ));
  billReminders = signal(true, ...ngDevMode ? [{ debugName: "billReminders" }] : (
    /* istanbul ignore next */
    []
  ));
  // -- Password change signals ----------------------------------------
  passwordChangeMessage = signal(null, ...ngDevMode ? [{ debugName: "passwordChangeMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  passwordChangeError = signal(null, ...ngDevMode ? [{ debugName: "passwordChangeError" }] : (
    /* istanbul ignore next */
    []
  ));
  // -- User profile ---------------------------------------------------
  userProfile = signal({
    fullName: "",
    email: "",
    phone: "Not set",
    dateOfBirth: "Not set",
    address: "Not set",
    initials: ""
  }, ...ngDevMode ? [{ debugName: "userProfile" }] : (
    /* istanbul ignore next */
    []
  ));
  // Edit form model
  profileForm = {
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: ""
  };
  originalForm = __spreadValues({}, this.profileForm);
  constructor(http, cardService, router, authService) {
    this.http = http;
    this.cardService = cardService;
    this.router = router;
    this.authService = authService;
  }
  totalManaged = computed(() => {
    return this.cardService.cards().reduce((sum, c) => sum + (c.creditLimit - (c.currentBalance || 0)), 0).toLocaleString("en-US");
  }, ...ngDevMode ? [{ debugName: "totalManaged" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    const savedTheme = localStorage.getItem("fv_theme");
    if (savedTheme === "dark") {
      this.darkMode.set(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
    this.emailNotifications.set(localStorage.getItem("fv_email_notif") !== "off");
    this.twoFactorAuth.set(localStorage.getItem("fv_2fa") !== "off");
    this.autoPay.set(localStorage.getItem("fv_autopay") === "on");
    this.billReminders.set(localStorage.getItem("fv_reminders") !== "off");
    this.loadUserProfile();
  }
  // -- Toggle handlers ------------------------------------------------
  toggleEditMode() {
    if (!this.editMode()) {
      const current = this.userProfile();
      this.profileForm = {
        fullName: current.fullName,
        email: current.email,
        phone: current.phone,
        dateOfBirth: current.dateOfBirth,
        address: current.address
      };
      this.originalForm = __spreadValues({}, this.profileForm);
    } else {
      this.profileForm = __spreadValues({}, this.originalForm);
    }
    this.editMode.update((v) => !v);
  }
  saveProfile() {
    const updatedProfile = __spreadProps(__spreadValues({}, this.profileForm), {
      initials: this.profileForm.fullName.split(" ").slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "").join("")
    });
    const [firstName, ...lastParts] = this.profileForm.fullName.split(" ");
    const apiPayload = {
      firstName: firstName || "",
      lastName: lastParts.join(" ") || "",
      email: this.profileForm.email,
      phone: this.profileForm.phone,
      dateOfBirth: this.profileForm.dateOfBirth,
      address: this.profileForm.address
    };
    this.http.put("/api/identity/users/me", apiPayload).subscribe({
      next: () => {
        this.userProfile.update((profile) => __spreadValues(__spreadValues({}, profile), updatedProfile));
        this.editMode.set(false);
        this.showSaveSuccess.set(true);
        setTimeout(() => this.showSaveSuccess.set(false), 3e3);
      },
      error: () => {
        this.userProfile.update((profile) => __spreadValues(__spreadValues({}, profile), updatedProfile));
        this.editMode.set(false);
        this.showSaveSuccess.set(true);
        setTimeout(() => this.showSaveSuccess.set(false), 3e3);
      }
    });
  }
  // -- Password Change -----------------------------------------------
  changePassword(currentPassword, newPassword, confirmPassword) {
    this.passwordChangeMessage.set(null);
    this.passwordChangeError.set(null);
    if (newPassword !== confirmPassword) {
      this.passwordChangeError.set("New passwords do not match.");
      return;
    }
    if (newPassword.length < 6) {
      this.passwordChangeError.set("Password must be at least 6 characters.");
      return;
    }
    const email = this.userProfile().email;
    this.http.post("/api/identity/auth/reset-password", {
      email,
      otpCode: currentPassword,
      newPassword
    }).subscribe({
      next: (res) => {
        if (res?.success !== false) {
          this.passwordChangeMessage.set("Password updated successfully.");
          this.showCurrentPassword.set(false);
        } else {
          this.passwordChangeError.set(res?.message ?? "Failed to update password.");
        }
      },
      error: (err) => {
        this.passwordChangeError.set(err?.error?.message ?? "Failed to update password.");
      }
    });
  }
  togglePasswords() {
    this.showCurrentPassword.update((v) => !v);
  }
  toggleDarkMode() {
    this.darkMode.update((v) => !v);
    const html = document.documentElement;
    if (this.darkMode()) {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("fv_theme", "dark");
    } else {
      html.removeAttribute("data-theme");
      localStorage.setItem("fv_theme", "light");
    }
  }
  toggleEmailNotifications() {
    this.emailNotifications.update((v) => !v);
    localStorage.setItem("fv_email_notif", this.emailNotifications() ? "on" : "off");
  }
  toggleTwoFactor() {
    this.twoFactorAuth.update((v) => !v);
    localStorage.setItem("fv_2fa", this.twoFactorAuth() ? "on" : "off");
  }
  toggleAutoPay() {
    this.autoPay.update((v) => !v);
    localStorage.setItem("fv_autopay", this.autoPay() ? "on" : "off");
  }
  toggleBillReminders() {
    this.billReminders.update((v) => !v);
    localStorage.setItem("fv_reminders", this.billReminders() ? "on" : "off");
  }
  // -- Account Deletion ------------------------------------------
  openDeleteModal() {
    this.deleteConfirmInput.set("");
    this.deleteConfirmModal.set(true);
  }
  closeDeleteModal() {
    this.deleteConfirmModal.set(false);
  }
  confirmDelete() {
    if (this.deleteConfirmInput() === "DELETE") {
      console.log("Account Deletion Requested");
      alert("Account deleted successfully (Demo)");
      this.closeDeleteModal();
    }
  }
  // -- Sign Out -------------------------------------------------------
  onSignOut() {
    this.authService.logout();
    this.router.navigate(["/auth/login"]);
  }
  // -- API ------------------------------------------------------------
  loadUserProfile() {
    this.http.get("/api/identity/users/me").subscribe({
      next: (data) => {
        const user = data?.data ?? data;
        if (!user)
          return;
        const fullName = [user.firstName, user.lastName].filter(Boolean).join(" ") || user.fullName || user.name || this.userProfile().fullName;
        const initials = fullName.split(" ").slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "").join("");
        this.userProfile.set({
          fullName,
          email: user.email ?? this.userProfile().email,
          phone: user.phone || user.phoneNumber || "Not set",
          dateOfBirth: user.dateOfBirth || user.dob || "Not set",
          address: user.address || "Not set",
          initials: initials || this.userProfile().initials
        });
      },
      error: () => {
      }
    });
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(CardService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 192, vars: 30, consts: [[1, "layout-container"], [1, "main-content"], [1, "toast"], [1, "profile-header"], [1, "ph-bg"], [1, "ph-content"], [1, "ph-user"], [1, "ph-avatar"], [1, "ph-verified"], [1, "material-symbols-outlined"], [1, "ph-details"], [1, "ph-meta"], [1, "ph-email"], [1, "ph-stats"], [1, "ph-stat"], [1, "ph-stat-icon"], [1, "ph-stat-text"], [1, "ph-stat-val"], [1, "ph-stat-lbl"], [1, "section-card"], [1, "sc-header"], [1, "sc-title"], [1, "material-symbols-outlined", "sc-icon", "sc-icon--blue"], [1, "sc-edit-btn", 3, "click"], [1, "sc-body"], [1, "info-grid"], [1, "info-item"], ["type", "text", 1, "info-input", 3, "ngModel"], [1, "info-val"], ["type", "email", 1, "info-input", 3, "ngModel"], [1, "info-val", "mono"], [1, "sc-footer"], [1, "twin-grid"], [1, "material-symbols-outlined", "sc-icon", "sc-icon--green"], [1, "sc-body", "flush"], [1, "sec-row", 3, "click"], [1, "sec-left"], [1, "sec-dot", "sec-dot--blue"], [1, "sec-text"], [1, "sec-name"], [1, "sec-sub"], [1, "material-symbols-outlined", "sec-arrow"], [1, "pw-panel"], [1, "sec-row"], [1, "sec-dot", "sec-dot--green"], [1, "sec-sub", "text-green"], [1, "toggle", 3, "click"], [1, "toggle-knob"], [1, "sec-dot", "sec-dot--purple"], [1, "sec-right-group"], [1, "chip-sm"], [1, "sec-dot", "sec-dot--amber"], [1, "material-symbols-outlined", "sc-icon", "sc-icon--purple"], [1, "pref-row"], [1, "pref-sep"], [1, "pref-row", "nav"], [1, "pref-val"], [1, "btn-sign-out", 3, "click"], [1, "section-card", "danger"], [1, "sc-header", "danger-head"], [1, "material-symbols-outlined", "sc-icon", "sc-icon--red"], [1, "dz-row"], [1, "dz-text"], [1, "dz-name"], [1, "dz-desc"], [1, "btn-outline-red"], [1, "btn-red", 3, "click"], [1, "modal-overlay"], ["type", "text", 1, "info-input", 3, "ngModelChange", "ngModel"], ["type", "email", 1, "info-input", 3, "ngModelChange", "ngModel"], [1, "btn-ghost", 3, "click"], [1, "btn-primary", 3, "click"], ["type", "password", "placeholder", "Current password", 1, "info-input"], ["type", "password", "placeholder", "New password", 1, "info-input"], ["type", "password", "placeholder", "Confirm new password", 1, "info-input"], [1, "btn-primary", "sm"], [1, "modal-overlay", 3, "click"], [1, "modal-card", 3, "click"], [1, "modal-icon"], [1, "modal-confirm"], ["type", "text", "placeholder", "Type DELETE", 1, "info-input", "centered", 3, "ngModelChange", "ngModel"], [1, "modal-btns"], [1, "btn-red", 3, "click", "disabled"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1);
      \u0275\u0275conditionalCreate(3, ProfileComponent_Conditional_3_Template, 4, 0, "div", 2);
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275element(5, "div", 4);
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "span");
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "span", 9);
      \u0275\u0275text(13, "check");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 10)(15, "h1");
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11)(18, "span", 12);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "span", 9);
      \u0275\u0275text(24, "credit_card");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 16)(26, "span", 17);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span", 18);
      \u0275\u0275text(29, "Active Cards");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 14)(31, "div", 15)(32, "span", 9);
      \u0275\u0275text(33, "account_balance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 16)(35, "span", 17);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span", 18);
      \u0275\u0275text(38, "Total Managed");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(39, "section", 19)(40, "div", 20)(41, "div", 21)(42, "span", 22);
      \u0275\u0275text(43, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275text(44, " Personal Information ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 23);
      \u0275\u0275listener("click", function ProfileComponent_Template_button_click_45_listener() {
        return ctx.toggleEditMode();
      });
      \u0275\u0275elementStart(46, "span", 9);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275text(48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 24)(50, "div", 25)(51, "div", 26)(52, "label");
      \u0275\u0275text(53, "FULL NAME");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(54, ProfileComponent_Conditional_54_Template, 1, 1, "input", 27)(55, ProfileComponent_Conditional_55_Template, 2, 1, "span", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 26)(57, "label");
      \u0275\u0275text(58, "EMAIL ADDRESS");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(59, ProfileComponent_Conditional_59_Template, 1, 1, "input", 29)(60, ProfileComponent_Conditional_60_Template, 2, 1, "span", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 26)(62, "label");
      \u0275\u0275text(63, "PHONE NUMBER");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(64, ProfileComponent_Conditional_64_Template, 1, 1, "input", 27)(65, ProfileComponent_Conditional_65_Template, 2, 1, "span", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 26)(67, "label");
      \u0275\u0275text(68, "DATE OF BIRTH");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(69, ProfileComponent_Conditional_69_Template, 1, 1, "input", 27)(70, ProfileComponent_Conditional_70_Template, 2, 1, "span", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 26)(72, "label");
      \u0275\u0275text(73, "ADDRESS");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(74, ProfileComponent_Conditional_74_Template, 1, 1, "input", 27)(75, ProfileComponent_Conditional_75_Template, 2, 1, "span", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(76, ProfileComponent_Conditional_76_Template, 7, 0, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 32)(78, "section", 19)(79, "div", 20)(80, "div", 21)(81, "span", 33);
      \u0275\u0275text(82, "security");
      \u0275\u0275elementEnd();
      \u0275\u0275text(83, " Security ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 34)(85, "div", 35);
      \u0275\u0275listener("click", function ProfileComponent_Template_div_click_85_listener() {
        return ctx.togglePasswords();
      });
      \u0275\u0275elementStart(86, "div", 36);
      \u0275\u0275element(87, "div", 37);
      \u0275\u0275elementStart(88, "div", 38)(89, "span", 39);
      \u0275\u0275text(90, "Change Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "span", 40);
      \u0275\u0275text(92, "Update your security credentials");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(93, "span", 41);
      \u0275\u0275text(94, "expand_more");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(95, ProfileComponent_Conditional_95_Template, 6, 0, "div", 42);
      \u0275\u0275elementStart(96, "div", 43)(97, "div", 36);
      \u0275\u0275element(98, "div", 44);
      \u0275\u0275elementStart(99, "div", 38)(100, "span", 39);
      \u0275\u0275text(101, "Two-Factor Authentication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "span", 45);
      \u0275\u0275text(103, "Not configured");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "div", 46);
      \u0275\u0275listener("click", function ProfileComponent_Template_div_click_104_listener() {
        return ctx.toggleTwoFactor();
      });
      \u0275\u0275element(105, "div", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div", 43)(107, "div", 36);
      \u0275\u0275element(108, "div", 48);
      \u0275\u0275elementStart(109, "div", 38)(110, "span", 39);
      \u0275\u0275text(111, "Active Sessions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "span", 40);
      \u0275\u0275text(113, "Manage connected devices");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(114, "div", 49)(115, "span", 50);
      \u0275\u0275text(116, "This device");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "span", 41);
      \u0275\u0275text(118, "chevron_right");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "div", 43)(120, "div", 36);
      \u0275\u0275element(121, "div", 51);
      \u0275\u0275elementStart(122, "div", 38)(123, "span", 39);
      \u0275\u0275text(124, "Login History");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "span", 40);
      \u0275\u0275text(126, "Review recent sign-ins");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(127, "span", 41);
      \u0275\u0275text(128, "chevron_right");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(129, "section", 19)(130, "div", 20)(131, "div", 21)(132, "span", 52);
      \u0275\u0275text(133, "tune");
      \u0275\u0275elementEnd();
      \u0275\u0275text(134, " Preferences ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "div", 34)(136, "div", 53)(137, "span");
      \u0275\u0275text(138, "Dark Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "div", 46);
      \u0275\u0275listener("click", function ProfileComponent_Template_div_click_139_listener() {
        return ctx.toggleDarkMode();
      });
      \u0275\u0275element(140, "div", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "div", 53)(142, "span");
      \u0275\u0275text(143, "Email Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div", 46);
      \u0275\u0275listener("click", function ProfileComponent_Template_div_click_144_listener() {
        return ctx.toggleEmailNotifications();
      });
      \u0275\u0275element(145, "div", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "div", 53)(147, "span");
      \u0275\u0275text(148, "Auto-Pay Bills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "div", 46);
      \u0275\u0275listener("click", function ProfileComponent_Template_div_click_149_listener() {
        return ctx.toggleAutoPay();
      });
      \u0275\u0275element(150, "div", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "div", 53)(152, "span");
      \u0275\u0275text(153, "Bill Reminders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "div", 46);
      \u0275\u0275listener("click", function ProfileComponent_Template_div_click_154_listener() {
        return ctx.toggleBillReminders();
      });
      \u0275\u0275element(155, "div", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(156, "div", 54);
      \u0275\u0275elementStart(157, "div", 55)(158, "span");
      \u0275\u0275text(159, "Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "span", 56);
      \u0275\u0275text(161, "INR (Rs.) ");
      \u0275\u0275elementStart(162, "span", 9);
      \u0275\u0275text(163, "chevron_right");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(164, "button", 57);
      \u0275\u0275listener("click", function ProfileComponent_Template_button_click_164_listener() {
        return ctx.onSignOut();
      });
      \u0275\u0275elementStart(165, "span", 9);
      \u0275\u0275text(166, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275text(167, " Sign Out ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "section", 58)(169, "div", 59)(170, "div", 21)(171, "span", 60);
      \u0275\u0275text(172, "warning");
      \u0275\u0275elementEnd();
      \u0275\u0275text(173, " Danger Zone ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "div", 34)(175, "div", 61)(176, "div", 62)(177, "span", 63);
      \u0275\u0275text(178, "Deactivate Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "span", 64);
      \u0275\u0275text(180, "Temporarily disable your account and pause all scheduled payments.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(181, "button", 65);
      \u0275\u0275text(182, "Deactivate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "div", 61)(184, "div", 62)(185, "span", 63);
      \u0275\u0275text(186, "Delete Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "span", 64);
      \u0275\u0275text(188, "Permanently remove all data. This cannot be undone.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(189, "button", 66);
      \u0275\u0275listener("click", function ProfileComponent_Template_button_click_189_listener() {
        return ctx.openDeleteModal();
      });
      \u0275\u0275text(190, "Delete Account");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(191, ProfileComponent_Conditional_191_Template, 21, 2, "div", 67);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showSaveSuccess() ? 3 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.userProfile().initials);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.userProfile().fullName);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.userProfile().email ? "flex" : "none");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.userProfile().email);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.cardService.cards().length);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("Rs.", ctx.totalManaged());
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.editMode() ? "close" : "edit");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.editMode() ? "Cancel" : "Edit Profile", " ");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.editMode() ? 54 : 55);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.editMode() ? 59 : 60);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.editMode() ? 64 : 65);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.editMode() ? 69 : 70);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.editMode() ? 74 : 75);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.editMode() ? 76 : -1);
      \u0275\u0275advance(17);
      \u0275\u0275classProp("flipped", ctx.showCurrentPassword());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showCurrentPassword() ? 95 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("on", ctx.twoFactorAuth());
      \u0275\u0275advance(35);
      \u0275\u0275classProp("on", ctx.darkMode());
      \u0275\u0275advance(5);
      \u0275\u0275classProp("on", ctx.emailNotifications());
      \u0275\u0275advance(5);
      \u0275\u0275classProp("on", ctx.autoPay());
      \u0275\u0275advance(5);
      \u0275\u0275classProp("on", ctx.billReminders());
      \u0275\u0275advance(37);
      \u0275\u0275conditional(ctx.deleteConfirmModal() ? 191 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, SidebarComponent], styles: ['\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 100vh;\n  background: var(--glass-bg);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  display: flex;\n  flex-direction: column;\n  padding: 32px 20px;\n  z-index: 50;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  padding-left: 12px;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: -0.04em;\n  display: block;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--text-secondary);\n  margin-top: -2px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  text-decoration: none;\n  color: var(--text-secondary);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 500;\n  font-size: 0.95rem;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.nav-item[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.8;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n}\n.nav-item.active[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  opacity: 1;\n  font-variation-settings: "FILL" 1;\n}\n.sidebar-promo[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.4);\n  text-align: center;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .promo-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n  margin-bottom: 16px;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .btn-upgrade[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .btn-upgrade[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.notif-badge[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 20px;\n  margin-left: auto;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(107, 110, 249, 0.4);\n}\n.layout-container[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.main-content[_ngcontent-%COMP%] {\n  margin-left: 300px;\n  flex: 1;\n  padding: 24px 22px 48px 70px;\n  max-width: 1500px;\n  width: 100%;\n  position: relative;\n}\n.profile-header[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 18px;\n  overflow: hidden;\n  margin-bottom: 18px;\n  background: rgba(255, 255, 255, 0.88);\n  -webkit-backdrop-filter: blur(24px);\n  backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-shadow: 0 2px 16px rgba(100, 100, 200, 0.06);\n}\n.ph-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse at 10% 40%,\n      rgba(107, 110, 249, 0.09) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse at 90% 60%,\n      rgba(167, 139, 250, 0.07) 0%,\n      transparent 55%);\n  pointer-events: none;\n}\n.ph-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 28px;\n  gap: 24px;\n}\n.ph-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-shrink: 0;\n}\n.ph-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6b6ef9 0%,\n      #a78bfa 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 3px solid white;\n  box-shadow: 0 4px 16px rgba(107, 110, 249, 0.28);\n}\n.ph-avatar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 800;\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n}\n.ph-verified[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  width: 20px;\n  height: 20px;\n  background: #10b981;\n  border-radius: 50%;\n  border: 2.5px solid white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ph-verified[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: white;\n  font-weight: 900;\n}\n.ph-details[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: var(--text-primary, #1a1a2e);\n  margin: 0 0 3px;\n  letter-spacing: -0.02em;\n}\n.ph-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 12.5px;\n}\n.ph-email[_ngcontent-%COMP%] {\n  color: var(--text-muted, #8888aa);\n  font-weight: 500;\n}\n.ph-dot[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.15);\n}\n.ph-badge[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 9px;\n  font-weight: 800;\n  letter-spacing: 1.2px;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #fbbf24);\n  color: #78350f;\n  padding: 2px 7px;\n  border-radius: 4px;\n}\n.ph-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  background: rgba(0, 0, 0, 0.025);\n  border-radius: 12px;\n  padding: 3px;\n  flex-shrink: 0;\n}\n.ph-stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.7);\n  transition: background 0.15s ease;\n}\n.ph-stat[_ngcontent-%COMP%]:hover {\n  background: white;\n}\n.ph-stat-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(107, 110, 249, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ph-stat-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6b6ef9;\n}\n.ph-stat-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.ph-stat-val[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--text-primary, #1a1a2e);\n  line-height: 1.1;\n}\n.ph-stat-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted, #8888aa);\n  font-weight: 600;\n  letter-spacing: 0.2px;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.88);\n  -webkit-backdrop-filter: blur(24px);\n  backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  border-radius: 18px;\n  margin-bottom: 18px;\n  box-shadow: 0 2px 12px rgba(100, 100, 200, 0.04);\n  overflow: hidden;\n  transition: box-shadow 0.2s ease;\n}\n.section-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(100, 100, 200, 0.08);\n}\n.section-card.danger[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.15);\n}\n.sc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 22px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.sc-header.danger-head[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.03);\n}\n.sc-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--text-primary, #1a1a2e);\n}\n.sc-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sc-icon--blue[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.08);\n  color: #3b82f6;\n}\n.sc-icon--green[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.08);\n  color: #10b981;\n}\n.sc-icon--purple[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.08);\n  color: #a78bfa;\n}\n.sc-icon--red[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n  color: #ef4444;\n}\n.sc-body[_ngcontent-%COMP%] {\n  padding: 18px 22px;\n}\n.sc-body.flush[_ngcontent-%COMP%] {\n  padding: 6px 14px 14px;\n}\n.sc-footer[_ngcontent-%COMP%] {\n  padding: 0 22px 18px;\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n.sc-edit-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  border: 1.5px solid rgba(107, 110, 249, 0.18);\n  background: white;\n  color: #6b6ef9;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 12.5px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.sc-edit-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.sc-edit-btn[_ngcontent-%COMP%]:hover {\n  background: #6b6ef9;\n  border-color: #6b6ef9;\n  color: white;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px 24px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.info-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted, #8888aa);\n  letter-spacing: 0.8px;\n}\n.info-val[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary, #1a1a2e);\n}\n.info-val.mono[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  letter-spacing: 0.3px;\n}\n.info-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 13px;\n  border-radius: 8px;\n  border: 1.5px solid rgba(107, 110, 249, 0.12);\n  background: rgba(255, 255, 255, 0.7);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--text-primary, #1a1a2e);\n  outline: none;\n  transition: all 0.15s ease;\n}\n.info-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted, #8888aa);\n  font-weight: 500;\n}\n.info-input[_ngcontent-%COMP%]:focus {\n  border-color: #6b6ef9;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(107, 110, 249, 0.06);\n}\n.info-input.centered[_ngcontent-%COMP%] {\n  text-align: center;\n  letter-spacing: 3px;\n  font-family: "Space Grotesk", sans-serif;\n  font-weight: 800;\n}\n.twin-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18px;\n}\n.twin-grid[_ngcontent-%COMP%]   .section-card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.sec-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 10px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background 0.12s ease;\n}\n.sec-row[_ngcontent-%COMP%]:hover {\n  background: rgba(107, 110, 249, 0.03);\n}\n.sec-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.sec-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.sec-dot--blue[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.sec-dot--green[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.sec-dot--purple[_ngcontent-%COMP%] {\n  background: #a78bfa;\n}\n.sec-dot--amber[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.sec-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.sec-name[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--text-primary, #1a1a2e);\n}\n.sec-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted, #8888aa);\n  font-weight: 500;\n  margin-top: 1px;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #10b981 !important;\n  font-weight: 700 !important;\n}\n.sec-arrow[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--text-muted, #8888aa);\n  transition: transform 0.2s ease;\n}\n.sec-arrow.flipped[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.sec-right-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.chip-sm[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #a78bfa;\n  background: rgba(167, 139, 250, 0.08);\n  padding: 3px 8px;\n  border-radius: 100px;\n}\n.pw-panel[_ngcontent-%COMP%] {\n  margin: 2px 10px 10px 28px;\n  padding: 14px;\n  background: rgba(0, 0, 0, 0.02);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n.pref-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 11px 10px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--text-primary, #1a1a2e);\n  transition: background 0.12s ease;\n}\n.pref-row.nav[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.pref-row.nav[_ngcontent-%COMP%]:hover {\n  background: rgba(107, 110, 249, 0.03);\n}\n.pref-val[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted, #8888aa);\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.pref-val[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.pref-sep[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(0, 0, 0, 0.05);\n  margin: 4px 10px;\n}\n.toggle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 22px;\n  border-radius: 100px;\n  background: rgba(0, 0, 0, 0.1);\n  position: relative;\n  cursor: pointer;\n  transition: background 0.25s ease;\n  flex-shrink: 0;\n}\n.toggle.on[_ngcontent-%COMP%] {\n  background: #6b6ef9;\n}\n.toggle.on[_ngcontent-%COMP%]   .toggle-knob[_ngcontent-%COMP%] {\n  transform: translateX(18px);\n}\n.toggle-knob[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.dz-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.dz-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.dz-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.dz-name[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--text-primary, #1a1a2e);\n}\n.dz-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted, #8888aa);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #6b6ef9,\n      #a78bfa);\n  color: white;\n  border: none;\n  padding: 9px 20px;\n  border-radius: 8px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 700;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(107, 110, 249, 0.3);\n  transform: translateY(-1px);\n}\n.btn-primary.sm[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  font-size: 12px;\n  align-self: flex-start;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.04);\n  color: var(--text-secondary, #4a4a6a);\n  border: none;\n  padding: 9px 20px;\n  border-radius: 8px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 700;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.07);\n}\n.btn-outline-red[_ngcontent-%COMP%] {\n  background: none;\n  border: 1.5px solid rgba(239, 68, 68, 0.2);\n  color: #ef4444;\n  padding: 8px 18px;\n  border-radius: 8px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 700;\n  font-size: 12.5px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.btn-outline-red[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.05);\n  border-color: #ef4444;\n}\n.btn-red[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n  border: none;\n  padding: 8px 18px;\n  border-radius: 8px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 700;\n  font-size: 12.5px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.btn-red[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.25);\n}\n.btn-red[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.12s ease;\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  background: rgba(255, 255, 255, 0.88);\n  -webkit-backdrop-filter: blur(32px);\n  backdrop-filter: blur(32px);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  border-radius: 20px;\n  padding: 32px;\n  text-align: center;\n  animation: _ngcontent-%COMP%_popIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n}\n.modal-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  background: rgba(239, 68, 68, 0.07);\n  color: #ef4444;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.modal-icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.modal-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 18px;\n  font-weight: 800;\n  margin: 0 0 8px;\n  color: var(--text-primary, #1a1a2e);\n}\n.modal-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted, #8888aa);\n  line-height: 1.6;\n  margin: 0 0 20px;\n}\n.modal-confirm[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.modal-confirm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted, #8888aa);\n  letter-spacing: 0.4px;\n  margin-bottom: 8px;\n}\n.modal-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.modal-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 11px;\n}\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  padding: 10px 20px;\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #10b981;\n  font-weight: 700;\n  font-size: 13px;\n  z-index: 2000;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.07);\n  animation: _ngcontent-%COMP%_slideDown 0.25s ease;\n}\n.toast[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_popIn {\n  from {\n    transform: scale(0.96);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    transform: translateY(-16px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 1200px) {\n  .ph-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .ph-stats[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow-x: auto;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 900px) {\n  .twin-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    padding: 16px;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ph-stats[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .dz-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n}\n.btn-sign-out[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  background: #ef4444;\n  color: white;\n  border: none;\n  padding: 14px 24px;\n  border-radius: 18px;\n  margin-bottom: 24px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 700;\n  font-size: 14.5px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.2);\n}\n.btn-sign-out[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-sign-out[_ngcontent-%COMP%]:hover {\n  background: rgb(236.9901477833, 44.5098522167, 44.5098522167);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(239, 68, 68, 0.3);\n}\n/*# sourceMappingURL=profile.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [CommonModule, RouterLink, FormsModule, SidebarComponent], template: `<div class="layout-container">\r
  <app-sidebar />\r
\r
  <main class="main-content">\r
\r
    <!-- Toast -->\r
    @if (showSaveSuccess()) {\r
    <div class="toast">\r
      <span class="material-symbols-outlined">check_circle</span>\r
      Profile updated successfully\r
    </div>\r
    }\r
\r
    <!-- --*\x90 PROFILE HEADER --*\x90 -->\r
    <div class="profile-header">\r
      <div class="ph-bg"></div>\r
      <div class="ph-content">\r
        <div class="ph-user">\r
          <div class="ph-avatar">\r
            <span>{{ userProfile().initials }}</span>\r
            <div class="ph-verified"><span class="material-symbols-outlined">check</span></div>\r
          </div>\r
          <div class="ph-details">\r
            <h1>{{ userProfile().fullName }}</h1>\r
            <div class="ph-meta" [style.display]="userProfile().email ? 'flex' : 'none'">\r
              <span class="ph-email">{{ userProfile().email }}</span>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="ph-stats">\r
          <div class="ph-stat">\r
            <div class="ph-stat-icon"><span class="material-symbols-outlined">credit_card</span></div>\r
            <div class="ph-stat-text">\r
              <span class="ph-stat-val">{{ cardService.cards().length }}</span>\r
              <span class="ph-stat-lbl">Active Cards</span>\r
            </div>\r
          </div>\r
          <div class="ph-stat">\r
            <div class="ph-stat-icon"><span class="material-symbols-outlined">account_balance</span></div>\r
            <div class="ph-stat-text">\r
              <span class="ph-stat-val">Rs.{{ totalManaged() }}</span>\r
              <span class="ph-stat-lbl">Total Managed</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- --*\x90 PERSONAL INFORMATION - FULL WIDTH --*\x90 -->\r
    <section class="section-card">\r
      <div class="sc-header">\r
        <div class="sc-title">\r
          <span class="material-symbols-outlined sc-icon sc-icon--blue">person</span>\r
          Personal Information\r
        </div>\r
        <button class="sc-edit-btn" (click)="toggleEditMode()">\r
          <span class="material-symbols-outlined">{{ editMode() ? 'close' : 'edit' }}</span>\r
          {{ editMode() ? 'Cancel' : 'Edit Profile' }}\r
        </button>\r
      </div>\r
      <div class="sc-body">\r
        <div class="info-grid">\r
          <div class="info-item">\r
            <label>FULL NAME</label>\r
            @if (editMode()) {\r
            <input class="info-input" type="text" [(ngModel)]="profileForm.fullName">\r
            } @else {\r
            <span class="info-val">{{ userProfile().fullName }}</span>\r
            }\r
          </div>\r
          <div class="info-item">\r
            <label>EMAIL ADDRESS</label>\r
            @if (editMode()) {\r
            <input class="info-input" type="email" [(ngModel)]="profileForm.email">\r
            } @else {\r
            <span class="info-val">{{ userProfile().email }}</span>\r
            }\r
          </div>\r
          <div class="info-item">\r
            <label>PHONE NUMBER</label>\r
            @if (editMode()) {\r
            <input class="info-input" type="text" [(ngModel)]="profileForm.phone">\r
            } @else {\r
            <span class="info-val mono">{{ userProfile().phone }}</span>\r
            }\r
          </div>\r
          <div class="info-item">\r
            <label>DATE OF BIRTH</label>\r
            @if (editMode()) {\r
            <input class="info-input" type="text" [(ngModel)]="profileForm.dateOfBirth">\r
            } @else {\r
            <span class="info-val mono">{{ userProfile().dateOfBirth }}</span>\r
            }\r
          </div>\r
          <div class="info-item">\r
            <label>ADDRESS</label>\r
            @if (editMode()) {\r
            <input class="info-input" type="text" [(ngModel)]="profileForm.address">\r
            } @else {\r
            <span class="info-val">{{ userProfile().address }}</span>\r
            }\r
          </div>\r
          <!-- Removing static MEMBER SINCE -->\r
        </div>\r
      </div>\r
      @if (editMode()) {\r
      <div class="sc-footer">\r
        <button class="btn-ghost" (click)="toggleEditMode()">Discard</button>\r
        <button class="btn-primary" (click)="saveProfile()">\r
          <span class="material-symbols-outlined">save</span>\r
          Save Changes\r
        </button>\r
      </div>\r
      }\r
    </section>\r
\r
    <!-- --*\x90 SECURITY + PREFERENCES - SIDE BY SIDE --*\x90 -->\r
    <div class="twin-grid">\r
\r
      <!-- Security -->\r
      <section class="section-card">\r
        <div class="sc-header">\r
          <div class="sc-title">\r
            <span class="material-symbols-outlined sc-icon sc-icon--green">security</span>\r
            Security\r
          </div>\r
        </div>\r
        <div class="sc-body flush">\r
          <div class="sec-row" (click)="togglePasswords()">\r
            <div class="sec-left">\r
              <div class="sec-dot sec-dot--blue"></div>\r
              <div class="sec-text">\r
                <span class="sec-name">Change Password</span>\r
                <span class="sec-sub">Update your security credentials</span>\r
              </div>\r
            </div>\r
            <span class="material-symbols-outlined sec-arrow" [class.flipped]="showCurrentPassword()">expand_more</span>\r
          </div>\r
          @if (showCurrentPassword()) {\r
          <div class="pw-panel">\r
            <input class="info-input" type="password" placeholder="Current password">\r
            <input class="info-input" type="password" placeholder="New password">\r
            <input class="info-input" type="password" placeholder="Confirm new password">\r
            <button class="btn-primary sm">Update Password</button>\r
          </div>\r
          }\r
          <div class="sec-row">\r
            <div class="sec-left">\r
              <div class="sec-dot sec-dot--green"></div>\r
              <div class="sec-text">\r
                <span class="sec-name">Two-Factor Authentication</span>\r
                <span class="sec-sub text-green">Not configured</span>\r
              </div>\r
            </div>\r
            <div class="toggle" [class.on]="twoFactorAuth()" (click)="toggleTwoFactor()">\r
              <div class="toggle-knob"></div>\r
            </div>\r
          </div>\r
          <div class="sec-row">\r
            <div class="sec-left">\r
              <div class="sec-dot sec-dot--purple"></div>\r
              <div class="sec-text">\r
                <span class="sec-name">Active Sessions</span>\r
                <span class="sec-sub">Manage connected devices</span>\r
              </div>\r
            </div>\r
            <div class="sec-right-group">\r
              <span class="chip-sm">This device</span>\r
              <span class="material-symbols-outlined sec-arrow">chevron_right</span>\r
            </div>\r
          </div>\r
          <div class="sec-row">\r
            <div class="sec-left">\r
              <div class="sec-dot sec-dot--amber"></div>\r
              <div class="sec-text">\r
                <span class="sec-name">Login History</span>\r
                <span class="sec-sub">Review recent sign-ins</span>\r
              </div>\r
            </div>\r
            <span class="material-symbols-outlined sec-arrow">chevron_right</span>\r
          </div>\r
        </div>\r
      </section>\r
\r
      <!-- Preferences -->\r
      <section class="section-card">\r
        <div class="sc-header">\r
          <div class="sc-title">\r
            <span class="material-symbols-outlined sc-icon sc-icon--purple">tune</span>\r
            Preferences\r
          </div>\r
        </div>\r
        <div class="sc-body flush">\r
          <div class="pref-row">\r
            <span>Dark Mode</span>\r
            <div class="toggle" [class.on]="darkMode()" (click)="toggleDarkMode()">\r
              <div class="toggle-knob"></div>\r
            </div>\r
          </div>\r
          <div class="pref-row">\r
            <span>Email Notifications</span>\r
            <div class="toggle" [class.on]="emailNotifications()" (click)="toggleEmailNotifications()">\r
              <div class="toggle-knob"></div>\r
            </div>\r
          </div>\r
          <div class="pref-row">\r
            <span>Auto-Pay Bills</span>\r
            <div class="toggle" [class.on]="autoPay()" (click)="toggleAutoPay()">\r
              <div class="toggle-knob"></div>\r
            </div>\r
          </div>\r
          <div class="pref-row">\r
            <span>Bill Reminders</span>\r
            <div class="toggle" [class.on]="billReminders()" (click)="toggleBillReminders()">\r
              <div class="toggle-knob"></div>\r
            </div>\r
          </div>\r
          <div class="pref-sep"></div>\r
          <div class="pref-row nav">\r
            <span>Currency</span>\r
            <span class="pref-val">INR (Rs.) <span class="material-symbols-outlined">chevron_right</span></span>\r
          </div>\r
        </div>\r
      </section>\r
    </div>\r
\r
    <!-- --*\x90 DANGER ZONE --*\x90 -->\r
    <!-- --*  SIGN OUT BUTTON --*  -->\r
    <button class="btn-sign-out" (click)="onSignOut()">\r
      <span class="material-symbols-outlined">logout</span>\r
      Sign Out\r
    </button>\r
\r
    <section class="section-card danger">\r
      <div class="sc-header danger-head">\r
        <div class="sc-title">\r
          <span class="material-symbols-outlined sc-icon sc-icon--red">warning</span>\r
          Danger Zone\r
        </div>\r
      </div>\r
      <div class="sc-body flush">\r
        <div class="dz-row">\r
          <div class="dz-text">\r
            <span class="dz-name">Deactivate Account</span>\r
            <span class="dz-desc">Temporarily disable your account and pause all scheduled payments.</span>\r
          </div>\r
          <button class="btn-outline-red">Deactivate</button>\r
        </div>\r
        <div class="dz-row">\r
          <div class="dz-text">\r
            <span class="dz-name">Delete Account</span>\r
            <span class="dz-desc">Permanently remove all data. This cannot be undone.</span>\r
          </div>\r
          <button class="btn-red" (click)="openDeleteModal()">Delete Account</button>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- --*\x90 DELETE MODAL --*\x90 -->\r
    @if (deleteConfirmModal()) {\r
    <div class="modal-overlay" (click)="closeDeleteModal()">\r
      <div class="modal-card" (click)="$event.stopPropagation()">\r
        <div class="modal-icon">\r
          <span class="material-symbols-outlined">delete_forever</span>\r
        </div>\r
        <h3>Delete your account?</h3>\r
        <p>All your cards, payment history, and personal data will be permanently erased. This action cannot be\r
          reversed.</p>\r
        <div class="modal-confirm">\r
          <label>Type <strong>DELETE</strong> to confirm</label>\r
          <input class="info-input centered" type="text" [(ngModel)]="deleteConfirmInput" placeholder="Type DELETE">\r
        </div>\r
        <div class="modal-btns">\r
          <button class="btn-ghost" (click)="closeDeleteModal()">Cancel</button>\r
          <button class="btn-red" [disabled]="deleteConfirmInput() !== 'DELETE'" (click)="confirmDelete()">Permanently\r
            Delete</button>\r
        </div>\r
      </div>\r
    </div>\r
    }\r
\r
  </main>\r
</div>\r
\r
`, styles: ['/* src/app/features/profile/profile.scss */\n.sidebar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 100vh;\n  background: var(--glass-bg);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  display: flex;\n  flex-direction: column;\n  padding: 32px 20px;\n  z-index: 50;\n}\n.sidebar-header {\n  margin-bottom: 40px;\n  padding-left: 12px;\n}\n.brand-name {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: -0.04em;\n  display: block;\n}\n.brand-sub {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--text-secondary);\n  margin-top: -2px;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  text-decoration: none;\n  color: var(--text-secondary);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 500;\n  font-size: 0.95rem;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.nav-item .material-symbols-outlined {\n  font-size: 20px;\n  opacity: 0.8;\n}\n.nav-item:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.nav-item.active {\n  background: var(--primary);\n  color: #fff;\n}\n.nav-item.active .material-symbols-outlined {\n  opacity: 1;\n  font-variation-settings: "FILL" 1;\n}\n.sidebar-promo {\n  padding: 20px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.4);\n  text-align: center;\n}\n.sidebar-promo .promo-title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n}\n.sidebar-promo .promo-desc {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n  margin-bottom: 16px;\n}\n.sidebar-promo .btn-upgrade {\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.sidebar-promo .btn-upgrade:hover {\n  transform: translateY(-2px);\n}\n.notif-badge {\n  background: var(--primary);\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 20px;\n  margin-left: auto;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(107, 110, 249, 0.4);\n}\n.layout-container {\n  display: flex;\n  min-height: 100vh;\n}\n.main-content {\n  margin-left: 300px;\n  flex: 1;\n  padding: 24px 22px 48px 70px;\n  max-width: 1500px;\n  width: 100%;\n  position: relative;\n}\n.profile-header {\n  position: relative;\n  border-radius: 18px;\n  overflow: hidden;\n  margin-bottom: 18px;\n  background: rgba(255, 255, 255, 0.88);\n  -webkit-backdrop-filter: blur(24px);\n  backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-shadow: 0 2px 16px rgba(100, 100, 200, 0.06);\n}\n.ph-bg {\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse at 10% 40%,\n      rgba(107, 110, 249, 0.09) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse at 90% 60%,\n      rgba(167, 139, 250, 0.07) 0%,\n      transparent 55%);\n  pointer-events: none;\n}\n.ph-content {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 28px;\n  gap: 24px;\n}\n.ph-user {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-shrink: 0;\n}\n.ph-avatar {\n  position: relative;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6b6ef9 0%,\n      #a78bfa 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 3px solid white;\n  box-shadow: 0 4px 16px rgba(107, 110, 249, 0.28);\n}\n.ph-avatar span {\n  font-size: 19px;\n  font-weight: 800;\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n}\n.ph-verified {\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  width: 20px;\n  height: 20px;\n  background: #10b981;\n  border-radius: 50%;\n  border: 2.5px solid white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ph-verified .material-symbols-outlined {\n  font-size: 11px;\n  color: white;\n  font-weight: 900;\n}\n.ph-details h1 {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: var(--text-primary, #1a1a2e);\n  margin: 0 0 3px;\n  letter-spacing: -0.02em;\n}\n.ph-meta {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 12.5px;\n}\n.ph-email {\n  color: var(--text-muted, #8888aa);\n  font-weight: 500;\n}\n.ph-dot {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.15);\n}\n.ph-badge {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 9px;\n  font-weight: 800;\n  letter-spacing: 1.2px;\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #fbbf24);\n  color: #78350f;\n  padding: 2px 7px;\n  border-radius: 4px;\n}\n.ph-stats {\n  display: flex;\n  gap: 2px;\n  background: rgba(0, 0, 0, 0.025);\n  border-radius: 12px;\n  padding: 3px;\n  flex-shrink: 0;\n}\n.ph-stat {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.7);\n  transition: background 0.15s ease;\n}\n.ph-stat:hover {\n  background: white;\n}\n.ph-stat-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: rgba(107, 110, 249, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ph-stat-icon .material-symbols-outlined {\n  font-size: 16px;\n  color: #6b6ef9;\n}\n.ph-stat-text {\n  display: flex;\n  flex-direction: column;\n}\n.ph-stat-val {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--text-primary, #1a1a2e);\n  line-height: 1.1;\n}\n.ph-stat-lbl {\n  font-size: 10px;\n  color: var(--text-muted, #8888aa);\n  font-weight: 600;\n  letter-spacing: 0.2px;\n}\n.section-card {\n  background: rgba(255, 255, 255, 0.88);\n  -webkit-backdrop-filter: blur(24px);\n  backdrop-filter: blur(24px);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  border-radius: 18px;\n  margin-bottom: 18px;\n  box-shadow: 0 2px 12px rgba(100, 100, 200, 0.04);\n  overflow: hidden;\n  transition: box-shadow 0.2s ease;\n}\n.section-card:hover {\n  box-shadow: 0 4px 20px rgba(100, 100, 200, 0.08);\n}\n.section-card.danger {\n  border-color: rgba(239, 68, 68, 0.15);\n}\n.sc-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 22px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.sc-header.danger-head {\n  background: rgba(239, 68, 68, 0.03);\n}\n.sc-title {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--text-primary, #1a1a2e);\n}\n.sc-icon {\n  font-size: 18px;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sc-icon--blue {\n  background: rgba(59, 130, 246, 0.08);\n  color: #3b82f6;\n}\n.sc-icon--green {\n  background: rgba(16, 185, 129, 0.08);\n  color: #10b981;\n}\n.sc-icon--purple {\n  background: rgba(167, 139, 250, 0.08);\n  color: #a78bfa;\n}\n.sc-icon--red {\n  background: rgba(239, 68, 68, 0.08);\n  color: #ef4444;\n}\n.sc-body {\n  padding: 18px 22px;\n}\n.sc-body.flush {\n  padding: 6px 14px 14px;\n}\n.sc-footer {\n  padding: 0 22px 18px;\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n.sc-edit-btn {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  border: 1.5px solid rgba(107, 110, 249, 0.18);\n  background: white;\n  color: #6b6ef9;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 12.5px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.sc-edit-btn .material-symbols-outlined {\n  font-size: 15px;\n}\n.sc-edit-btn:hover {\n  background: #6b6ef9;\n  border-color: #6b6ef9;\n  color: white;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px 24px;\n}\n.info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.info-item label {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-muted, #8888aa);\n  letter-spacing: 0.8px;\n}\n.info-val {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-primary, #1a1a2e);\n}\n.info-val.mono {\n  font-family: "Space Grotesk", sans-serif;\n  letter-spacing: 0.3px;\n}\n.info-input {\n  width: 100%;\n  padding: 9px 13px;\n  border-radius: 8px;\n  border: 1.5px solid rgba(107, 110, 249, 0.12);\n  background: rgba(255, 255, 255, 0.7);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--text-primary, #1a1a2e);\n  outline: none;\n  transition: all 0.15s ease;\n}\n.info-input::placeholder {\n  color: var(--text-muted, #8888aa);\n  font-weight: 500;\n}\n.info-input:focus {\n  border-color: #6b6ef9;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(107, 110, 249, 0.06);\n}\n.info-input.centered {\n  text-align: center;\n  letter-spacing: 3px;\n  font-family: "Space Grotesk", sans-serif;\n  font-weight: 800;\n}\n.twin-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18px;\n}\n.twin-grid .section-card {\n  margin-bottom: 0;\n}\n.sec-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 10px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background 0.12s ease;\n}\n.sec-row:hover {\n  background: rgba(107, 110, 249, 0.03);\n}\n.sec-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.sec-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.sec-dot--blue {\n  background: #3b82f6;\n}\n.sec-dot--green {\n  background: #10b981;\n}\n.sec-dot--purple {\n  background: #a78bfa;\n}\n.sec-dot--amber {\n  background: #f59e0b;\n}\n.sec-text {\n  display: flex;\n  flex-direction: column;\n}\n.sec-name {\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--text-primary, #1a1a2e);\n}\n.sec-sub {\n  font-size: 11px;\n  color: var(--text-muted, #8888aa);\n  font-weight: 500;\n  margin-top: 1px;\n}\n.text-green {\n  color: #10b981 !important;\n  font-weight: 700 !important;\n}\n.sec-arrow {\n  font-size: 20px;\n  color: var(--text-muted, #8888aa);\n  transition: transform 0.2s ease;\n}\n.sec-arrow.flipped {\n  transform: rotate(180deg);\n}\n.sec-right-group {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.chip-sm {\n  font-size: 10px;\n  font-weight: 700;\n  color: #a78bfa;\n  background: rgba(167, 139, 250, 0.08);\n  padding: 3px 8px;\n  border-radius: 100px;\n}\n.pw-panel {\n  margin: 2px 10px 10px 28px;\n  padding: 14px;\n  background: rgba(0, 0, 0, 0.02);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n.pref-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 11px 10px;\n  border-radius: 8px;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--text-primary, #1a1a2e);\n  transition: background 0.12s ease;\n}\n.pref-row.nav {\n  cursor: pointer;\n}\n.pref-row.nav:hover {\n  background: rgba(107, 110, 249, 0.03);\n}\n.pref-val {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted, #8888aa);\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.pref-val .material-symbols-outlined {\n  font-size: 16px;\n}\n.pref-sep {\n  height: 1px;\n  background: rgba(0, 0, 0, 0.05);\n  margin: 4px 10px;\n}\n.toggle {\n  width: 40px;\n  height: 22px;\n  border-radius: 100px;\n  background: rgba(0, 0, 0, 0.1);\n  position: relative;\n  cursor: pointer;\n  transition: background 0.25s ease;\n  flex-shrink: 0;\n}\n.toggle.on {\n  background: #6b6ef9;\n}\n.toggle.on .toggle-knob {\n  transform: translateX(18px);\n}\n.toggle-knob {\n  width: 16px;\n  height: 16px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.dz-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.dz-row:last-child {\n  border-bottom: none;\n}\n.dz-text {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.dz-name {\n  font-size: 13.5px;\n  font-weight: 700;\n  color: var(--text-primary, #1a1a2e);\n}\n.dz-desc {\n  font-size: 12px;\n  color: var(--text-muted, #8888aa);\n}\n.btn-primary {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #6b6ef9,\n      #a78bfa);\n  color: white;\n  border: none;\n  padding: 9px 20px;\n  border-radius: 8px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 700;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-primary .material-symbols-outlined {\n  font-size: 16px;\n}\n.btn-primary:hover {\n  box-shadow: 0 4px 14px rgba(107, 110, 249, 0.3);\n  transform: translateY(-1px);\n}\n.btn-primary.sm {\n  padding: 7px 14px;\n  font-size: 12px;\n  align-self: flex-start;\n}\n.btn-ghost {\n  background: rgba(0, 0, 0, 0.04);\n  color: var(--text-secondary, #4a4a6a);\n  border: none;\n  padding: 9px 20px;\n  border-radius: 8px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 700;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn-ghost:hover {\n  background: rgba(0, 0, 0, 0.07);\n}\n.btn-outline-red {\n  background: none;\n  border: 1.5px solid rgba(239, 68, 68, 0.2);\n  color: #ef4444;\n  padding: 8px 18px;\n  border-radius: 8px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 700;\n  font-size: 12.5px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.btn-outline-red:hover {\n  background: rgba(239, 68, 68, 0.05);\n  border-color: #ef4444;\n}\n.btn-red {\n  background: #ef4444;\n  color: white;\n  border: none;\n  padding: 8px 18px;\n  border-radius: 8px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 700;\n  font-size: 12.5px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.btn-red:hover {\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.25);\n}\n.btn-red:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: fadeIn 0.12s ease;\n}\n.modal-card {\n  width: 100%;\n  max-width: 400px;\n  background: rgba(255, 255, 255, 0.88);\n  -webkit-backdrop-filter: blur(32px);\n  backdrop-filter: blur(32px);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  border-radius: 20px;\n  padding: 32px;\n  text-align: center;\n  animation: popIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n}\n.modal-icon {\n  width: 52px;\n  height: 52px;\n  background: rgba(239, 68, 68, 0.07);\n  color: #ef4444;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.modal-icon .material-symbols-outlined {\n  font-size: 26px;\n}\n.modal-card h3 {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 18px;\n  font-weight: 800;\n  margin: 0 0 8px;\n  color: var(--text-primary, #1a1a2e);\n}\n.modal-card p {\n  font-size: 13px;\n  color: var(--text-muted, #8888aa);\n  line-height: 1.6;\n  margin: 0 0 20px;\n}\n.modal-confirm {\n  margin-bottom: 20px;\n}\n.modal-confirm label {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--text-muted, #8888aa);\n  letter-spacing: 0.4px;\n  margin-bottom: 8px;\n}\n.modal-btns {\n  display: flex;\n  gap: 10px;\n}\n.modal-btns button {\n  flex: 1;\n  padding: 11px;\n}\n.toast {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  padding: 10px 20px;\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #10b981;\n  font-weight: 700;\n  font-size: 13px;\n  z-index: 2000;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.07);\n  animation: slideDown 0.25s ease;\n}\n.toast .material-symbols-outlined {\n  font-size: 18px;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes popIn {\n  from {\n    transform: scale(0.96);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes slideDown {\n  from {\n    transform: translateY(-16px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 1200px) {\n  .ph-content {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .ph-stats {\n    width: 100%;\n    overflow-x: auto;\n  }\n  .info-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 900px) {\n  .twin-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .main-content {\n    margin-left: 0;\n    padding: 16px;\n  }\n  .info-grid {\n    grid-template-columns: 1fr;\n  }\n  .ph-stats {\n    flex-wrap: wrap;\n  }\n  .dz-row {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n}\n.btn-sign-out {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  background: #ef4444;\n  color: white;\n  border: none;\n  padding: 14px 24px;\n  border-radius: 18px;\n  margin-bottom: 24px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 700;\n  font-size: 14.5px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.2);\n}\n.btn-sign-out .material-symbols-outlined {\n  font-size: 20px;\n}\n.btn-sign-out:hover {\n  background: rgb(236.9901477833, 44.5098522167, 44.5098522167);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(239, 68, 68, 0.3);\n}\n/*# sourceMappingURL=profile.css.map */\n'] }]
  }], () => [{ type: HttpClient }, { type: CardService }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/features/profile/profile.ts", lineNumber: 26 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-QCKIVZDZ.js.map
