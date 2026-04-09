import {
  CommonModule,
  Component,
  Injectable,
  NgIf,
  effect,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-SYL3PSAO.js";

// src/app/core/services/theme.service.ts
var ThemeService = class _ThemeService {
  STORAGE_KEY = "fv_theme";
  // Initialize from localStorage immediately
  darkMode = signal(localStorage.getItem(this.STORAGE_KEY) === "dark", ...ngDevMode ? [{ debugName: "darkMode" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.applyTheme(this.darkMode());
    effect(() => {
      const isDark = this.darkMode();
      this.applyTheme(isDark);
      localStorage.setItem(this.STORAGE_KEY, isDark ? "dark" : "light");
    });
  }
  toggleTheme() {
    this.darkMode.update((v) => !v);
  }
  applyTheme(isDark) {
    const html = document.documentElement;
    if (isDark) {
      html.setAttribute("data-theme", "dark");
    } else {
      html.removeAttribute("data-theme");
    }
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/shared/components/theme-toggle/theme-toggle.component.ts
function ThemeToggleComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "dark_mode");
    \u0275\u0275elementEnd();
  }
}
function ThemeToggleComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "light_mode");
    \u0275\u0275elementEnd();
  }
}
var ThemeToggleComponent = class _ThemeToggleComponent {
  themeService;
  constructor(themeService) {
    this.themeService = themeService;
  }
  toggle() {
    this.themeService.toggleTheme();
  }
  static \u0275fac = function ThemeToggleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeToggleComponent)(\u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeToggleComponent, selectors: [["app-theme-toggle"]], decls: 5, vars: 6, consts: [["role", "switch", 1, "theme-toggle", 3, "click"], [1, "toggle-track"], [1, "toggle-thumb"], ["class", "material-symbols-outlined icon moon", 4, "ngIf"], ["class", "material-symbols-outlined icon sun", 4, "ngIf"], [1, "material-symbols-outlined", "icon", "moon"], [1, "material-symbols-outlined", "icon", "sun"]], template: function ThemeToggleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function ThemeToggleComponent_Template_button_click_0_listener() {
        return ctx.toggle();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
      \u0275\u0275template(3, ThemeToggleComponent_span_3_Template, 2, 0, "span", 3)(4, ThemeToggleComponent_span_4_Template, 2, 0, "span", 4);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", "Switch to " + (ctx.themeService.darkMode() ? "light" : "dark") + " mode")("aria-checked", ctx.themeService.darkMode());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("dark", ctx.themeService.darkMode());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.themeService.darkMode());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.themeService.darkMode());
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n.theme-toggle[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  -webkit-tap-highlight-color: transparent;\n}\n.toggle-track[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 30px;\n  background: var(--glass-bg-strong);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1px solid var(--glass-border);\n  border-radius: 100px;\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 4px 12px var(--glass-shadow);\n  display: flex;\n  align-items: center;\n  padding: 0 4px;\n}\n.toggle-thumb[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  background: #ffffff;\n  border-radius: 50%;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease;\n  position: relative;\n  z-index: 2;\n}\n.toggle-thumb.dark[_ngcontent-%COMP%] {\n  transform: translateX(26px);\n  background: #1a1a35;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: opacity 0.2s ease, transform 0.3s ease;\n}\n.icon.moon[_ngcontent-%COMP%] {\n  color: #1A1A2E;\n}\n.icon.sun[_ngcontent-%COMP%] {\n  color: #FFD700;\n  animation: _ngcontent-%COMP%_rotate-sun 10s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_rotate-sun {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.theme-toggle[_ngcontent-%COMP%]:hover   .toggle-track[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  box-shadow: 0 6px 16px var(--glass-shadow);\n}\n[data-theme=dark][_ngcontent-%COMP%]   .toggle-track[_ngcontent-%COMP%] {\n  background: rgba(40, 40, 80, 0.4);\n  border-color: rgba(107, 110, 249, 0.3);\n}\n/*# sourceMappingURL=theme-toggle.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeToggleComponent, [{
    type: Component,
    args: [{ selector: "app-theme-toggle", standalone: true, imports: [CommonModule], template: `<button class="theme-toggle" (click)="toggle()" \r
        [attr.aria-label]="'Switch to ' + (themeService.darkMode() ? 'light' : 'dark') + ' mode'"\r
        [attr.aria-checked]="themeService.darkMode()"\r
        role="switch">\r
  <div class="toggle-track">\r
    <div class="toggle-thumb" [class.dark]="themeService.darkMode()">\r
      <span class="material-symbols-outlined icon moon" *ngIf="!themeService.darkMode()">dark_mode</span>\r
      <span class="material-symbols-outlined icon sun" *ngIf="themeService.darkMode()">light_mode</span>\r
    </div>\r
  </div>\r
</button>\r
\r
`, styles: ["/* src/app/shared/components/theme-toggle/theme-toggle.component.scss */\n.theme-toggle {\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  -webkit-tap-highlight-color: transparent;\n}\n.toggle-track {\n  width: 58px;\n  height: 30px;\n  background: var(--glass-bg-strong);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1px solid var(--glass-border);\n  border-radius: 100px;\n  position: relative;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 4px 12px var(--glass-shadow);\n  display: flex;\n  align-items: center;\n  padding: 0 4px;\n}\n.toggle-thumb {\n  width: 24px;\n  height: 24px;\n  background: #ffffff;\n  border-radius: 50%;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease;\n  position: relative;\n  z-index: 2;\n}\n.toggle-thumb.dark {\n  transform: translateX(26px);\n  background: #1a1a35;\n}\n.icon {\n  font-size: 16px !important;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: opacity 0.2s ease, transform 0.3s ease;\n}\n.icon.moon {\n  color: #1A1A2E;\n}\n.icon.sun {\n  color: #FFD700;\n  animation: rotate-sun 10s linear infinite;\n}\n@keyframes rotate-sun {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.theme-toggle:hover .toggle-track {\n  border-color: var(--primary);\n  box-shadow: 0 6px 16px var(--glass-shadow);\n}\n[data-theme=dark] .toggle-track {\n  background: rgba(40, 40, 80, 0.4);\n  border-color: rgba(107, 110, 249, 0.3);\n}\n/*# sourceMappingURL=theme-toggle.component.css.map */\n"] }]
  }], () => [{ type: ThemeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeToggleComponent, { className: "ThemeToggleComponent", filePath: "src/app/shared/components/theme-toggle/theme-toggle.component.ts", lineNumber: 12 });
})();

export {
  ThemeToggleComponent
};
//# sourceMappingURL=chunk-AQGYU3VR.js.map
