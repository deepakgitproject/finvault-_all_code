import {
  GlobalUiService
} from "./chunk-4BOOVA7O.js";
import {
  CommonModule,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SYL3PSAO.js";

// src/app/shared/components/toast/toast.component.ts
function ToastComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275domListener("click", function ToastComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.globalUi.dismiss());
    });
    \u0275\u0275domElementStart(1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 4);
    \u0275\u0275domListener("click", function ToastComponent_Conditional_0_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.globalUi.dismiss());
    });
    \u0275\u0275domElementStart(6, "span", 5);
    \u0275\u0275text(7, "close");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const toast_r3 = ctx;
    \u0275\u0275classMap("toast-wrapper--" + toast_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", toast_r3.type === "success" ? "check_circle" : toast_r3.type === "error" ? "error" : "info", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r3.message);
  }
}
var ToastComponent = class _ToastComponent {
  globalUi = inject(GlobalUiService);
  static \u0275fac = function ToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], decls: 1, vars: 1, consts: [[1, "toast-wrapper", 3, "class"], [1, "toast-wrapper", 3, "click"], [1, "material-symbols-outlined", "toast-icon"], [1, "toast-msg"], [1, "toast-close", 3, "click"], [1, "material-symbols-outlined"]], template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ToastComponent_Conditional_0_Template, 8, 4, "div", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.globalUi.currentToast()) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [CommonModule], styles: ['\n.toast-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 20px;\n  min-width: 320px;\n  max-width: 480px;\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  animation: _ngcontent-%COMP%_toastSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);\n  font-family: "Inter", sans-serif;\n  font-size: 14px;\n  color: #fff;\n}\n.toast-wrapper--success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(34, 197, 94, 0.92),\n      rgba(22, 163, 74, 0.92));\n  border: 1px solid rgba(34, 197, 94, 0.3);\n}\n.toast-wrapper--error[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 68, 68, 0.92),\n      rgba(220, 38, 38, 0.92));\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.toast-wrapper--info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.92),\n      rgba(37, 99, 235, 0.92));\n  border: 1px solid rgba(59, 130, 246, 0.3);\n}\n.toast-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.toast-msg[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 500;\n  line-height: 1.35;\n}\n.toast-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.7);\n  cursor: pointer;\n  padding: 2px;\n  display: flex;\n  transition: color 0.2s;\n}\n.toast-close[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.toast-close[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n@keyframes _ngcontent-%COMP%_toastSlideIn {\n  from {\n    opacity: 0;\n    transform: translateX(40px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n  }\n}\n/*# sourceMappingURL=toast.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{ selector: "app-toast", standalone: true, imports: [CommonModule], template: `
    @if (globalUi.currentToast(); as toast) {
      <div class="toast-wrapper" [class]="'toast-wrapper--' + toast.type" (click)="globalUi.dismiss()">
        <span class="material-symbols-outlined toast-icon">
          {{ toast.type === 'success' ? 'check_circle' : toast.type === 'error' ? 'error' : 'info' }}
        </span>
        <span class="toast-msg">{{ toast.message }}</span>
        <button class="toast-close" (click)="$event.stopPropagation(); globalUi.dismiss()">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
    }
  `, styles: ['/* angular:styles/component:scss;438a0f026abf4b8ed64de1016e881cebb0060e4fb9fcda32f9b9d1d718835531;C:/Dev/FInvault_frontend_V1/src/app/shared/components/toast/toast.component.ts */\n.toast-wrapper {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 20px;\n  min-width: 320px;\n  max-width: 480px;\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  animation: toastSlideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);\n  font-family: "Inter", sans-serif;\n  font-size: 14px;\n  color: #fff;\n}\n.toast-wrapper--success {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(34, 197, 94, 0.92),\n      rgba(22, 163, 74, 0.92));\n  border: 1px solid rgba(34, 197, 94, 0.3);\n}\n.toast-wrapper--error {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(239, 68, 68, 0.92),\n      rgba(220, 38, 38, 0.92));\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.toast-wrapper--info {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.92),\n      rgba(37, 99, 235, 0.92));\n  border: 1px solid rgba(59, 130, 246, 0.3);\n}\n.toast-icon {\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.toast-msg {\n  flex: 1;\n  font-weight: 500;\n  line-height: 1.35;\n}\n.toast-close {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.7);\n  cursor: pointer;\n  padding: 2px;\n  display: flex;\n  transition: color 0.2s;\n}\n.toast-close:hover {\n  color: #fff;\n}\n.toast-close .material-symbols-outlined {\n  font-size: 18px;\n}\n@keyframes toastSlideIn {\n  from {\n    opacity: 0;\n    transform: translateX(40px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n  }\n}\n/*# sourceMappingURL=toast.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "src/app/shared/components/toast/toast.component.ts", lineNumber: 100 });
})();

export {
  ToastComponent
};
//# sourceMappingURL=chunk-VXVKOPFT.js.map
