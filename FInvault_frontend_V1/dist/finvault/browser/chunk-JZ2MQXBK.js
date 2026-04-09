import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  RouterLink,
  RouterLinkActive,
  catchError,
  computed,
  inject,
  of,
  setClassMetadata,
  signal,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-SYL3PSAO.js";

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  http = inject(HttpClient);
  BASE_URL = "/api/notifications";
  // --- Signals ---
  unreadCount = signal(0, ...ngDevMode ? [{ debugName: "unreadCount" }] : (
    /* istanbul ignore next */
    []
  ));
  hasUnread = computed(() => this.unreadCount() > 0, ...ngDevMode ? [{ debugName: "hasUnread" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.refreshUnreadCount();
  }
  // --- JWT userId helper ---
  getUserId() {
    const token = localStorage.getItem("fv_access_token");
    if (!token)
      return "";
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.sub || "";
    } catch {
      return "";
    }
  }
  // --- API Methods ---
  refreshUnreadCount() {
    const userId = this.getUserId();
    if (!userId)
      return;
    this.http.get(`${this.BASE_URL}/user/${userId}/unread-count`).pipe(tap((res) => {
      if (res.success) {
        this.unreadCount.set(res.data ?? 0);
      }
    }), catchError((err) => {
      console.error("refreshUnreadCount error:", err);
      return of(null);
    })).subscribe();
  }
  setUnreadCount(count) {
    this.unreadCount.set(count);
  }
  decrementUnreadCount() {
    this.unreadCount.update((c) => Math.max(0, c - 1));
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/shared/components/sidebar/sidebar.component.ts
function SidebarComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.notificationService.unreadCount());
  }
}
var SidebarComponent = class _SidebarComponent {
  notificationService = inject(NotificationService);
  get unreadCount() {
    return this.notificationService.unreadCount();
  }
  get hasUnread() {
    return this.notificationService.hasUnread();
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], decls: 37, vars: 1, consts: [[1, "sidebar"], [1, "sidebar-header"], [1, "brand"], [1, "brand-name"], [1, "brand-sub"], [1, "sidebar-nav"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-item"], [1, "material-symbols-outlined"], ["routerLink", "/cards", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/bills", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/payments", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/transactions", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/notifications", "routerLinkActive", "active", 1, "nav-item"], [1, "notif-badge"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "nav-item"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "FinVault");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "PREMIUM MANAGEMENT");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "nav", 5)(8, "a", 6)(9, "span", 7);
      \u0275\u0275text(10, "dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Dashboard ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 8)(13, "span", 7);
      \u0275\u0275text(14, "credit_card");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Cards ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 9)(17, "span", 7);
      \u0275\u0275text(18, "receipt_long");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " Bills ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 10)(21, "span", 7);
      \u0275\u0275text(22, "payments");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " Payments ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "a", 11)(25, "span", 7);
      \u0275\u0275text(26, "history");
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, " Transactions ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 12)(29, "span", 7);
      \u0275\u0275text(30, "notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275text(31, " Notifications ");
      \u0275\u0275conditionalCreate(32, SidebarComponent_Conditional_32_Template, 2, 1, "span", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "a", 14)(34, "span", 7);
      \u0275\u0275text(35, "person_pin");
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, " Profile ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(32);
      \u0275\u0275conditional(ctx.notificationService.unreadCount() > 0 ? 32 : -1);
    }
  }, dependencies: [CommonModule, RouterLink, RouterLinkActive], styles: ['\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 100vh;\n  background: var(--glass-bg);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  display: flex;\n  flex-direction: column;\n  padding: 32px 20px;\n  z-index: 50;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  padding-left: 12px;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: -0.04em;\n  display: block;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--text-secondary);\n  margin-top: -2px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  text-decoration: none;\n  color: var(--text-secondary);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 500;\n  font-size: 0.95rem;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.nav-item[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.8;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n}\n.nav-item.active[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  opacity: 1;\n  font-variation-settings: "FILL" 1;\n}\n.sidebar-promo[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.4);\n  text-align: center;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .promo-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n  margin-bottom: 16px;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .btn-upgrade[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .btn-upgrade[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.notif-badge[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 20px;\n  margin-left: auto;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(107, 110, 249, 0.4);\n}\n.notif-badge[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 20px;\n  margin-left: auto;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(107, 110, 249, 0.4);\n}\n/*# sourceMappingURL=sidebar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], template: '<!-- FinVault Standardized Sidebar -->\r\n<aside class="sidebar">\r\n  <div class="sidebar-header">\r\n    <div class="brand">\r\n      <span class="brand-name">FinVault</span>\r\n      <span class="brand-sub">PREMIUM MANAGEMENT</span>\r\n    </div>\r\n  </div>\r\n\r\n  <nav class="sidebar-nav">\r\n    <a routerLink="/dashboard" routerLinkActive="active" class="nav-item">\r\n      <span class="material-symbols-outlined">dashboard</span>\r\n      Dashboard\r\n    </a>\r\n    <a routerLink="/cards" routerLinkActive="active" class="nav-item">\r\n      <span class="material-symbols-outlined">credit_card</span>\r\n      Cards\r\n    </a>\r\n    <a routerLink="/bills" routerLinkActive="active" class="nav-item">\r\n      <span class="material-symbols-outlined">receipt_long</span>\r\n      Bills\r\n    </a>\r\n    <a routerLink="/payments" routerLinkActive="active" class="nav-item">\r\n      <span class="material-symbols-outlined">payments</span>\r\n      Payments\r\n    </a>\r\n    <a routerLink="/transactions" routerLinkActive="active" class="nav-item">\r\n      <span class="material-symbols-outlined">history</span>\r\n      Transactions\r\n    </a>\r\n    <a routerLink="/notifications" routerLinkActive="active" class="nav-item">\r\n      <span class="material-symbols-outlined">notifications</span>\r\n      Notifications\r\n      @if (notificationService.unreadCount() > 0) {\r\n        <span class="notif-badge">{{ notificationService.unreadCount() }}</span>\r\n      }\r\n    </a>\r\n    <a routerLink="/profile" routerLinkActive="active" class="nav-item">\r\n      <span class="material-symbols-outlined">person_pin</span>\r\n      Profile\r\n    </a>\r\n  </nav>\r\n\r\n</aside>\r\n\r\n', styles: ['/* src/app/shared/components/sidebar/sidebar.component.scss */\n.sidebar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 100vh;\n  background: var(--glass-bg);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  display: flex;\n  flex-direction: column;\n  padding: 32px 20px;\n  z-index: 50;\n}\n.sidebar-header {\n  margin-bottom: 40px;\n  padding-left: 12px;\n}\n.brand-name {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: -0.04em;\n  display: block;\n}\n.brand-sub {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--text-secondary);\n  margin-top: -2px;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  text-decoration: none;\n  color: var(--text-secondary);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 500;\n  font-size: 0.95rem;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.nav-item .material-symbols-outlined {\n  font-size: 20px;\n  opacity: 0.8;\n}\n.nav-item:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.nav-item.active {\n  background: var(--primary);\n  color: #fff;\n}\n.nav-item.active .material-symbols-outlined {\n  opacity: 1;\n  font-variation-settings: "FILL" 1;\n}\n.sidebar-promo {\n  padding: 20px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.4);\n  text-align: center;\n}\n.sidebar-promo .promo-title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n}\n.sidebar-promo .promo-desc {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n  margin-bottom: 16px;\n}\n.sidebar-promo .btn-upgrade {\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.sidebar-promo .btn-upgrade:hover {\n  transform: translateY(-2px);\n}\n.notif-badge {\n  background: var(--primary);\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 20px;\n  margin-left: auto;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(107, 110, 249, 0.4);\n}\n.notif-badge {\n  background: var(--primary);\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 20px;\n  margin-left: auto;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(107, 110, 249, 0.4);\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/shared/components/sidebar/sidebar.component.ts", lineNumber: 13 });
})();

export {
  NotificationService,
  SidebarComponent
};
//# sourceMappingURL=chunk-JZ2MQXBK.js.map
