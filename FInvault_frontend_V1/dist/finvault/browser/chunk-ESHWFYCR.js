import {
  GlobalUiService
} from "./chunk-4BOOVA7O.js";
import {
  CommonModule,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-SYL3PSAO.js";

// src/app/shared/components/coming-soon/coming-soon.component.ts
function ComingSoonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275domListener("click", function ComingSoonComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.globalUiService.hideComingSoon());
    });
    \u0275\u0275domElementStart(1, "div", 2)(2, "span", 3);
    \u0275\u0275text(3, "rocket_launch");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(4, "div", 4)(5, "span", 5);
    \u0275\u0275text(6, "Coming Soon");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p", 6);
    \u0275\u0275text(8, "Wallet features are currently under development.");
    \u0275\u0275domElementEnd()()();
  }
}
var ComingSoonComponent = class _ComingSoonComponent {
  globalUiService = inject(GlobalUiService);
  static \u0275fac = function ComingSoonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComingSoonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComingSoonComponent, selectors: [["app-coming-soon"]], decls: 1, vars: 1, consts: [[1, "coming-soon-toast", "glass-card"], [1, "coming-soon-toast", "glass-card", 3, "click"], [1, "toast-icon"], [1, "material-symbols-outlined"], [1, "toast-content"], [1, "toast-title"], [1, "toast-desc"]], template: function ComingSoonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ComingSoonComponent_Conditional_0_Template, 9, 0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.globalUiService.comingSoonVisible() ? 0 : -1);
    }
  }, dependencies: [CommonModule], styles: ['\n.coming-soon-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  min-width: 300px;\n  background: rgba(255, 255, 255, 0.05);\n  -webkit-backdrop-filter: blur(12px) saturate(180%);\n  backdrop-filter: blur(12px) saturate(180%);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);\n  animation: _ngcontent-%COMP%_slideInR 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.coming-soon-toast[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  background: rgba(255, 255, 255, 0.08);\n}\n.coming-soon-toast[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      var(--secondary));\n  border-radius: 16px 16px 0 0;\n}\n.toast-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(124, 131, 255, 0.2),\n      rgba(255, 124, 255, 0.1));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--primary);\n}\n.toast-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.toast-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.toast-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.1rem;\n  color: #fff;\n  letter-spacing: 0.5px;\n}\n.toast-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_slideInR {\n  from {\n    opacity: 0;\n    transform: translateX(100%) scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n  }\n}\n/*# sourceMappingURL=coming-soon.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComingSoonComponent, [{
    type: Component,
    args: [{ selector: "app-coming-soon", standalone: true, imports: [CommonModule], template: '@if (globalUiService.comingSoonVisible()) {\r\n<div class="coming-soon-toast glass-card" (click)="globalUiService.hideComingSoon()">\r\n  <div class="toast-icon">\r\n    <span class="material-symbols-outlined">rocket_launch</span>\r\n  </div>\r\n  <div class="toast-content">\r\n    <span class="toast-title">Coming Soon</span>\r\n    <p class="toast-desc">Wallet features are currently under development.</p>\r\n  </div>\r\n</div>\r\n}\r\n\r\n', styles: ['/* src/app/shared/components/coming-soon/coming-soon.scss */\n.coming-soon-toast {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  min-width: 300px;\n  background: rgba(255, 255, 255, 0.05);\n  -webkit-backdrop-filter: blur(12px) saturate(180%);\n  backdrop-filter: blur(12px) saturate(180%);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);\n  animation: slideInR 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.coming-soon-toast:hover {\n  transform: translateY(-2px);\n  background: rgba(255, 255, 255, 0.08);\n}\n.coming-soon-toast::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      var(--secondary));\n  border-radius: 16px 16px 0 0;\n}\n.toast-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(124, 131, 255, 0.2),\n      rgba(255, 124, 255, 0.1));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--primary);\n}\n.toast-icon span {\n  font-size: 28px;\n}\n.toast-content {\n  display: flex;\n  flex-direction: column;\n}\n.toast-title {\n  font-weight: 700;\n  font-size: 1.1rem;\n  color: #fff;\n  letter-spacing: 0.5px;\n}\n.toast-desc {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n@keyframes slideInR {\n  from {\n    opacity: 0;\n    transform: translateX(100%) scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n  }\n}\n/*# sourceMappingURL=coming-soon.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComingSoonComponent, { className: "ComingSoonComponent", filePath: "src/app/shared/components/coming-soon/coming-soon.component.ts", lineNumber: 12 });
})();

export {
  ComingSoonComponent
};
//# sourceMappingURL=chunk-ESHWFYCR.js.map
