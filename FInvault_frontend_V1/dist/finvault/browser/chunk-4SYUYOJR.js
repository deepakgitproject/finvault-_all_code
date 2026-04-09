import {
  HttpClient,
  Injectable,
  Subject,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-SYL3PSAO.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://localhost:5000"
  // Target Gateway directly (supports CORS for :4200)
};

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  http = inject(HttpClient);
  baseUrl = environment.apiUrl;
  get(path) {
    return this.http.get(path);
  }
  post(path, body) {
    return this.http.post(path, body);
  }
  put(path, body) {
    return this.http.put(path, body);
  }
  delete(path) {
    return this.http.delete(path);
  }
  static \u0275fac = function ApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/core/services/token.service.ts
var TokenService = class _TokenService {
  ACCESS_KEY = "fv_access_token";
  REFRESH_KEY = "fv_refresh_token";
  setTokens(accessToken, refreshToken) {
    localStorage.setItem(this.ACCESS_KEY, accessToken);
    localStorage.setItem(this.REFRESH_KEY, refreshToken);
  }
  getAccessToken() {
    return localStorage.getItem(this.ACCESS_KEY);
  }
  getRefreshToken() {
    return localStorage.getItem(this.REFRESH_KEY);
  }
  clearTokens() {
    localStorage.removeItem(this.ACCESS_KEY);
    localStorage.removeItem(this.REFRESH_KEY);
  }
  isLoggedIn() {
    return !!this.getAccessToken();
  }
  static \u0275fac = function TokenService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TokenService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TokenService, factory: _TokenService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TokenService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/services/reset-bus.service.ts
var ResetBusService = class _ResetBusService {
  reset$ = new Subject();
  static \u0275fac = function ResetBusService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetBusService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ResetBusService, factory: _ResetBusService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetBusService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  environment,
  ApiService,
  TokenService,
  ResetBusService
};
//# sourceMappingURL=chunk-4SYUYOJR.js.map
