import {
  ApiService,
  ResetBusService,
  TokenService,
  environment
} from "./chunk-YHSV5YO4.js";
import {
  BehaviorSubject,
  Component,
  HttpErrorResponse,
  Router,
  RouterOutlet,
  bootstrapApplication,
  catchError,
  filter,
  inject,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  switchMap,
  take,
  takeUntil,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-7LXNCHVZ.js";
import "./chunk-46DXP6YY.js";

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const token = localStorage.getItem("fv_access_token");
  if (!token) {
    inject(Router).navigate(["/auth/login"]);
    return false;
  }
  return true;
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-UE3D5KPZ.js").then((m) => m.HomeComponent)
  },
  // -- Auth (no guard) ------------------------------------------
  {
    path: "auth/login",
    loadComponent: () => import("./chunk-LHH5A3O6.js").then((m) => m.LoginComponent)
  },
  {
    path: "auth/register",
    loadComponent: () => import("./chunk-NAYUVQ3C.js").then((m) => m.RegisterComponent)
  },
  {
    path: "auth/forgot-password",
    loadComponent: () => import("./chunk-4TITFVXT.js").then((m) => m.ForgotPasswordComponent)
  },
  {
    path: "auth/reset-password",
    loadComponent: () => import("./chunk-3OKS42SH.js").then((m) => m.ResetPasswordComponent)
  },
  // -- Protected routes -----------------------------------------
  {
    path: "dashboard",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-X5IDSVWD.js").then((m) => m.DashboardComponent)
  },
  {
    path: "cards",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-YHVLSUH3.js").then((m) => m.CardsComponent)
  },
  {
    path: "bills",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-ZNZWCC5T.js").then((m) => m.BillsComponent)
  },
  {
    path: "payments",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-V45MS4K3.js").then((m) => m.PaymentPageComponent)
  },
  {
    path: "notifications",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-5ZO7U3XQ.js").then((m) => m.NotificationsComponent)
  },
  {
    path: "transactions",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-P65TBUQY.js").then((m) => m.TransactionsComponent)
  },
  {
    path: "profile",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-V7N2RY3S.js").then((m) => m.ProfileComponent)
  },
  {
    path: "**",
    redirectTo: ""
  }
];

// src/app/core/interceptors/base-url.interceptor.ts
var baseUrlInterceptor = (req, next) => {
  const apiUrl = environment.apiUrl;
  if (req.url.startsWith("/api/") && !req.url.startsWith("http")) {
    const cleanBase = apiUrl.endsWith("/") ? apiUrl.slice(0, -1) : apiUrl;
    const clonedReq = req.clone({
      url: `${cleanBase}${req.url}`
    });
    return next(clonedReq);
  }
  return next(req);
};

// src/app/core/interceptors/auth.interceptor.ts
var isRefreshing = false;
var refreshTokenSubject = new BehaviorSubject(null);
var authInterceptor = (req, next) => {
  const tokenService = inject(TokenService);
  const apiService = inject(ApiService);
  const router = inject(Router);
  const resetBus = inject(ResetBusService);
  const isAuthEndpoint = req.url.includes("/auth/");
  const isGatewayRequest = req.url.startsWith(environment.apiUrl);
  const isRefreshCall = req.url.includes("/auth/refresh");
  const token = tokenService.getAccessToken();
  let authReq = req;
  if (token && isGatewayRequest && !isRefreshCall) {
    authReq = addTokenHeader(req, token);
  }
  return next(authReq).pipe(
    // Cancel in-flight requests when the ResetBus fires (logout)
    takeUntil(resetBus.reset$),
    catchError((error) => {
      if (error instanceof HttpErrorResponse && error.status === 401 && !isAuthEndpoint) {
        return handle401Error(authReq, next, tokenService, apiService, router, resetBus);
      }
      return throwError(() => error);
    })
  );
};
function addTokenHeader(req, token) {
  return req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  });
}
function handle401Error(req, next, tokenService, apiService, router, resetBus) {
  if (!isRefreshing) {
    isRefreshing = true;
    refreshTokenSubject.next(null);
    const refreshToken = tokenService.getRefreshToken();
    if (!refreshToken) {
      return forceLogout(tokenService, router, resetBus);
    }
    return apiService.post("/api/identity/auth/refresh", { refreshToken }).pipe(switchMap((res) => {
      isRefreshing = false;
      const data = res?.data ?? res;
      if (data?.accessToken && data?.refreshToken) {
        tokenService.setTokens(data.accessToken, data.refreshToken);
        refreshTokenSubject.next(data.accessToken);
        if (data.userId) {
          localStorage.setItem("fv_user_id", data.userId);
        }
        return next(addTokenHeader(req, data.accessToken));
      }
      return forceLogout(tokenService, router, resetBus);
    }), catchError(() => {
      isRefreshing = false;
      return forceLogout(tokenService, router, resetBus);
    }));
  }
  return refreshTokenSubject.pipe(filter((token) => token !== null), take(1), switchMap((newToken) => {
    return next(addTokenHeader(req, newToken));
  }));
}
function forceLogout(tokenService, router, resetBus) {
  tokenService.clearTokens();
  localStorage.removeItem("fv_user_id");
  localStorage.removeItem("fv_user_name");
  resetBus.reset$.next();
  router.navigate(["/auth/login"]);
  return throwError(() => new HttpErrorResponse({ status: 401, statusText: "Session expired" }));
}

// src/app/core/interceptors/error.interceptor.ts
var errorInterceptor = (req, next) => {
  return next(req).pipe(catchError((err) => {
    if (err.status !== 401) {
      if (err.status === 0) {
        console.warn("[ErrorInterceptor] Network error or CORS issue:", req.url);
      } else if (err.status >= 500) {
        console.error("[ErrorInterceptor] Server error:", err.status, req.url);
      }
    }
    return throwError(() => err);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([baseUrlInterceptor, authInterceptor, errorInterceptor]))
  ]
};

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet],
      template: `<router-outlet />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
