import {
  ApiService,
  ResetBusService,
  TokenService
} from "./chunk-4SYUYOJR.js";
import {
  EMPTY,
  Injectable,
  catchError,
  computed,
  finalize,
  inject,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-SYL3PSAO.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  apiService = inject(ApiService);
  tokenService = inject(TokenService);
  resetBus = inject(ResetBusService);
  static USER_ID_KEY = "fv_user_id";
  static USER_NAME_KEY = "fv_user_name";
  currentUser = signal(null, ...ngDevMode ? [{ debugName: "currentUser" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoggedIn = computed(() => !!this.currentUser(), ...ngDevMode ? [{ debugName: "isLoggedIn" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  // -- Identity Extraction -----------------------------------------
  /**
   * Primary source: stored session userId from AuthResponse.
   * Fallback: JWT claim parsing with documented priority.
   */
  getUserId() {
    const stored = localStorage.getItem(_AuthService.USER_ID_KEY);
    if (stored)
      return stored;
    const token = this.tokenService.getAccessToken();
    if (!token)
      return null;
    if (this.isTokenExpired(token)) {
      console.warn("[AuthService] Token is expired. getUserId() returning null.");
      return null;
    }
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const id = payload.sub || payload.nameid || payload.unique_name || payload.userId;
      if (id) {
        localStorage.setItem(_AuthService.USER_ID_KEY, id);
        return id;
      }
      console.warn("[AuthService] No valid user ID claim found in JWT. Claims:", Object.keys(payload));
      return null;
    } catch (e) {
      console.warn("[AuthService] Failed to decode JWT for userId.", e);
      return null;
    }
  }
  /**
   * Extracts the user's display name.
   * Primary source: stored session value.
   * Fallback: JWT claim parsing.
   */
  getUserName() {
    const stored = localStorage.getItem(_AuthService.USER_NAME_KEY);
    if (stored)
      return stored;
    const token = this.tokenService.getAccessToken();
    if (!token)
      return "User";
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.firstName || payload.name || payload.unique_name || "User";
    } catch {
      return "User";
    }
  }
  /**
   * Standalone token expiry check.
   * Separated from getUserId() for single responsibility and testability.
   */
  isTokenExpired(token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (!payload.exp)
        return false;
      const expiryMs = payload.exp * 1e3;
      return Date.now() >= expiryMs;
    } catch {
      return true;
    }
  }
  // -- Auth Actions ------------------------------------------------
  register(req) {
    this.isLoading.set(true);
    this.errorMessage.set(null);
    return this.apiService.post("/api/identity/auth/register", req).pipe(tap((res) => {
      if (res && res.success) {
        if (res.data?.accessToken && res.data?.refreshToken) {
          this.tokenService.setTokens(res.data.accessToken, res.data.refreshToken);
          this.storeUserSession(res.data);
        }
      } else {
        this.errorMessage.set(res.message ?? "Registration failed.");
      }
    }), catchError((err) => {
      this.errorMessage.set(err?.error?.message ?? "An unexpected error occurred.");
      return EMPTY;
    }), finalize(() => this.isLoading.set(false)));
  }
  verifyEmail(req) {
    this.isLoading.set(true);
    this.errorMessage.set(null);
    return this.apiService.post("/api/identity/auth/verify-email", req).pipe(tap((res) => {
      if (!res.success) {
        this.errorMessage.set(res.message ?? "Verification failed.");
      }
    }), catchError((err) => {
      this.errorMessage.set(err?.error?.message ?? "An unexpected error occurred.");
      return EMPTY;
    }), finalize(() => this.isLoading.set(false)));
  }
  login(req) {
    this.isLoading.set(true);
    this.errorMessage.set(null);
    return this.apiService.post("/api/identity/auth/login", req).pipe(tap((res) => {
      if (res.success && res.data) {
        if (res.data.accessToken && res.data.refreshToken) {
          this.tokenService.setTokens(res.data.accessToken, res.data.refreshToken);
          this.storeUserSession(res.data);
        }
      } else {
        this.errorMessage.set(res.message ?? "Login failed.");
      }
    }), catchError((err) => {
      this.errorMessage.set(err?.error?.message ?? "An unexpected error occurred.");
      return EMPTY;
    }), finalize(() => this.isLoading.set(false)));
  }
  forgotPassword(email, purpose = "PasswordReset") {
    this.isLoading.set(true);
    this.errorMessage.set(null);
    const req = { email, purpose };
    return this.apiService.post("/api/identity/auth/forgot-password", req).pipe(tap((res) => {
      if (!res.success) {
        this.errorMessage.set(res.message ?? "Failed to send OTP.");
      }
    }), catchError((err) => {
      this.errorMessage.set(err?.error?.message ?? "An unexpected error occurred.");
      return EMPTY;
    }), finalize(() => this.isLoading.set(false)));
  }
  resetPassword(req) {
    this.isLoading.set(true);
    this.errorMessage.set(null);
    return this.apiService.post("/api/identity/auth/reset-password", req).pipe(tap((res) => {
      if (!res.success) {
        this.errorMessage.set(res.message ?? "Failed to reset password.");
      }
    }), catchError((err) => {
      this.errorMessage.set(err?.error?.message ?? "An unexpected error occurred.");
      return EMPTY;
    }), finalize(() => this.isLoading.set(false)));
  }
  refresh(refreshToken) {
    const req = { refreshToken };
    return this.apiService.post("/api/identity/auth/refresh", req).pipe(tap((res) => {
      if (res.success && res.data) {
        if (res.data.accessToken && res.data.refreshToken) {
          this.tokenService.setTokens(res.data.accessToken, res.data.refreshToken);
          this.storeUserSession(res.data);
        }
      }
    }));
  }
  /**
   * Full session teardown:
   *   1. Clear tokens and stored user data.
   *   2. Reset component-level signals.
   *   3. Broadcast reset$ so all feature services purge their state.
   */
  logout() {
    this.tokenService.clearTokens();
    localStorage.removeItem(_AuthService.USER_ID_KEY);
    localStorage.removeItem(_AuthService.USER_NAME_KEY);
    this.currentUser.set(null);
    this.errorMessage.set(null);
    this.resetBus.reset$.next();
  }
  loadCurrentUser() {
    this.isLoading.set(true);
    this.errorMessage.set(null);
    return this.apiService.get("/api/identity/users/me").pipe(tap((res) => {
      if (res.success && res.data) {
        this.currentUser.set(res.data);
      } else {
        this.errorMessage.set(res.message ?? "Failed to load user.");
      }
    }), catchError((err) => {
      this.errorMessage.set(err?.error?.message ?? "An unexpected error occurred.");
      return EMPTY;
    }), finalize(() => this.isLoading.set(false)));
  }
  // -- Private Helpers ---------------------------------------------
  /**
   * Stores userId and firstName from the AuthResponse body.
   * This is the primary source for getUserId() - avoids JWT decoding.
   */
  storeUserSession(data) {
    if (data.userId) {
      localStorage.setItem(_AuthService.USER_ID_KEY, data.userId);
    }
    if (data.firstName) {
      localStorage.setItem(_AuthService.USER_NAME_KEY, data.firstName);
    }
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-P2F4JYQH.js.map
