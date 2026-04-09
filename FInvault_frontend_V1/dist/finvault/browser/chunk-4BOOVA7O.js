import {
  AuthService
} from "./chunk-P2F4JYQH.js";
import {
  ApiService,
  ResetBusService
} from "./chunk-4SYUYOJR.js";
import {
  Injectable,
  Observable,
  __spreadProps,
  __spreadValues,
  catchError,
  computed,
  finalize,
  inject,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-SYL3PSAO.js";

// src/app/core/services/global-ui.service.ts
var GlobalUiService = class _GlobalUiService {
  // -- Coming Soon (wallet) ----------------------------------------
  _comingSoonVisible = signal(false, ...ngDevMode ? [{ debugName: "_comingSoonVisible" }] : (
    /* istanbul ignore next */
    []
  ));
  comingSoonVisible = this._comingSoonVisible.asReadonly();
  showComingSoon() {
    this._comingSoonVisible.set(true);
    setTimeout(() => this._comingSoonVisible.set(false), 3e3);
  }
  hideComingSoon() {
    this._comingSoonVisible.set(false);
  }
  // -- Toast Queue -------------------------------------------------
  static MAX_QUEUE = 5;
  static DISPLAY_MS = 3e3;
  nextId = 0;
  dismissTimer = null;
  _toasts = signal([], ...ngDevMode ? [{ debugName: "_toasts" }] : (
    /* istanbul ignore next */
    []
  ));
  toasts = this._toasts.asReadonly();
  /** The currently displayed toast (top of queue). */
  currentToast = computed(() => {
    const queue = this._toasts();
    return queue.length > 0 ? queue[0] : null;
  }, ...ngDevMode ? [{ debugName: "currentToast" }] : (
    /* istanbul ignore next */
    []
  ));
  success(message) {
    this.enqueue(message, "success");
  }
  error(message) {
    this.enqueue(message, "error");
  }
  info(message) {
    this.enqueue(message, "info");
  }
  /**
   * Manual dismissal - removes the current toast and
   * immediately shows the next one (if any).
   */
  dismiss() {
    if (this.dismissTimer) {
      clearTimeout(this.dismissTimer);
      this.dismissTimer = null;
    }
    this.dequeue();
  }
  // -- Private Queue Logic -----------------------------------------
  enqueue(message, type) {
    const toast = { id: this.nextId++, message, type };
    this._toasts.update((queue) => {
      const next = [...queue, toast];
      if (next.length > _GlobalUiService.MAX_QUEUE) {
        return next.slice(next.length - _GlobalUiService.MAX_QUEUE);
      }
      return next;
    });
    if (this._toasts().length === 1) {
      this.startDismissTimer();
    }
  }
  dequeue() {
    this._toasts.update((queue) => queue.slice(1));
    if (this._toasts().length > 0) {
      this.startDismissTimer();
    }
  }
  startDismissTimer() {
    if (this.dismissTimer) {
      clearTimeout(this.dismissTimer);
    }
    this.dismissTimer = setTimeout(() => {
      this.dismissTimer = null;
      this.dequeue();
    }, _GlobalUiService.DISPLAY_MS);
  }
  static \u0275fac = function GlobalUiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GlobalUiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GlobalUiService, factory: _GlobalUiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalUiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/core/services/card.service.ts
var CardService = class _CardService {
  apiService = inject(ApiService);
  authService = inject(AuthService);
  resetBus = inject(ResetBusService);
  globalUi = inject(GlobalUiService);
  // --- Signal Store ----------------------------------------------
  _cards = signal([], ...ngDevMode ? [{ debugName: "_cards" }] : (
    /* istanbul ignore next */
    []
  ));
  cards = this._cards.asReadonly();
  // --- Loading State --------------------------------------------
  _isLoading = signal(false, ...ngDevMode ? [{ debugName: "_isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = this._isLoading.asReadonly();
  // --- Add Lock (pessimistic) ------------------------------------
  _isAdding = signal(false, ...ngDevMode ? [{ debugName: "_isAdding" }] : (
    /* istanbul ignore next */
    []
  ));
  isAdding = this._isAdding.asReadonly();
  // --- Delete Locks (optimistic, multi-ID) -----------------------
  //    IMMUTABILITY RULE: Always assign a new Set reference!
  _deletingIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "_deletingIds" }] : (
    /* istanbul ignore next */
    []
  ));
  deletingIds = this._deletingIds.asReadonly();
  // --- Mutation in-flight tracking (for mutation guard) ----------
  _mutationsInFlight = signal(0, ...ngDevMode ? [{ debugName: "_mutationsInFlight" }] : (
    /* istanbul ignore next */
    []
  ));
  hasMutationsInFlight = computed(() => this._mutationsInFlight() > 0, ...ngDevMode ? [{ debugName: "hasMutationsInFlight" }] : (
    /* istanbul ignore next */
    []
  ));
  // --- Mutation versioning (for rollback race prevention) --------
  //    Plain class field - no UI reactivity needed.
  mutationVersion = 0;
  // --- Security-aware cache --------------------------------------
  cacheTimestamp = 0;
  cacheUserId = "";
  static CACHE_DURATION_MS = 3e4;
  // 30 seconds
  // --- Deferred refresh flag -------------------------------------
  deferredRefreshNeeded = false;
  constructor() {
    this.resetBus.reset$.subscribe(() => {
      this.purgeState();
    });
  }
  // --------------------------------------------------------------*
  // PUBLIC API
  // --------------------------------------------------------------*
  /**
   * Refresh cards from the server.
   * @param force - If true, bypasses the 30-second cache window.
   *
   * MUTATION GUARD: This method is blocked while any mutation is in flight.
   * After a mutation completes, it automatically calls this method.
   */
  refreshCards(force = false) {
    if (this._mutationsInFlight() > 0) {
      this.deferredRefreshNeeded = true;
      return;
    }
    const userId = this.authService.getUserId();
    if (!userId) {
      console.warn("[CardService] Cannot refresh cards - no userId available.");
      this._cards.set([]);
      return;
    }
    if (!force) {
      const now = Date.now();
      const cacheValid = this.cacheUserId === userId && now - this.cacheTimestamp < _CardService.CACHE_DURATION_MS;
      if (cacheValid && this._cards().length > 0) {
        return;
      }
    }
    this._isLoading.set(true);
    this.apiService.get("/api/cards").subscribe({
      next: (res) => {
        if (this._mutationsInFlight() > 0) {
          this.deferredRefreshNeeded = true;
          this._isLoading.set(false);
          return;
        }
        const data = Array.isArray(res) ? res : res?.data ?? [];
        this._cards.set(data.map((c) => this.mapApiCard(c)));
        this.cacheTimestamp = Date.now();
        this.cacheUserId = userId;
        this._isLoading.set(false);
      },
      error: () => {
        this._isLoading.set(false);
      }
    });
  }
  /**
   * Pessimistic add: Wait for server response before updating the signal.
   * If the server returns the full card, use it. Otherwise, fetch it.
   */
  addCard(card) {
    this._isAdding.set(true);
    this.incrementMutation();
    return this.apiService.post("/api/cards", card).pipe(tap((res) => {
      const returnedCard = res?.data ?? res;
      if (returnedCard?.id) {
        this._cards.update((list) => [...list, this.mapApiCard(returnedCard)]);
        this.invalidateCache();
      } else {
        this.invalidateCache();
        this.deferredRefreshNeeded = true;
      }
      this.globalUi.success("Card linked successfully!");
    }), catchError((err) => {
      this.globalUi.error(err?.error?.message || "Failed to link card. Please try again.");
      return throwSafe(err);
    }), finalize(() => {
      this._isAdding.set(false);
      this.decrementMutation();
    }));
  }
  /**
   * Optimistic delete:
   *   1. Add to deletingIds (LOCK FIRST)
   *   2. Capture mutationVersion
   *   3. Optimistic remove from signal
   *   4. Call API
   *   5. On success: remove from deletingIds + refresh
   *   6. On failure: check version match -> rollback -> error toast
   */
  deleteCard(id) {
    const currentIds = this._deletingIds();
    this._deletingIds.set(/* @__PURE__ */ new Set([...currentIds, id]));
    this.incrementMutation();
    const capturedVersion = this.mutationVersion;
    const snapshot = this._cards();
    this._cards.update((list) => list.filter((c) => c.id !== id));
    return this.apiService.delete(`/api/cards/${id}`).pipe(tap(() => {
      this.invalidateCache();
      this.globalUi.success("Card deleted successfully.");
    }), catchError((err) => {
      if (this.mutationVersion === capturedVersion) {
        this._cards.set(snapshot);
      }
      this.globalUi.error("Failed to delete card.");
      return throwSafe(err);
    }), finalize(() => {
      const updated = this._deletingIds();
      const next = new Set(updated);
      next.delete(id);
      this._deletingIds.set(next);
      this.decrementMutation();
    }));
  }
  setDefault(id) {
    this.incrementMutation();
    return this.apiService.put(`/api/cards/${id}/default`, {}).pipe(tap(() => {
      this.invalidateCache();
      this.globalUi.success("Default card updated.");
    }), catchError((err) => {
      this.globalUi.error("Failed to set default card.");
      return throwSafe(err);
    }), finalize(() => this.decrementMutation()));
  }
  verifyCard(id) {
    this.incrementMutation();
    return this.apiService.put(`/api/cards/${id}/verify`, {}).pipe(tap(() => {
      this.invalidateCache();
      this.globalUi.success("Card verified.");
    }), catchError((err) => {
      this.globalUi.error("Failed to verify card.");
      return throwSafe(err);
    }), finalize(() => this.decrementMutation()));
  }
  updateLimit(id, request) {
    this.incrementMutation();
    return this.apiService.put(`/api/cards/${id}/limit`, request).pipe(tap(() => {
      this._cards.update((list) => list.map((c) => c.id === id ? __spreadProps(__spreadValues({}, c), {
        creditLimit: request.newLimit,
        usagePercent: request.newLimit > 0 ? Math.round(c.currentBalance / request.newLimit * 100) : 0
      }) : c));
      this.invalidateCache();
      this.globalUi.success("Credit limit updated.");
    }), catchError((err) => {
      this.globalUi.error("Failed to update credit limit.");
      return throwSafe(err);
    }), finalize(() => this.decrementMutation()));
  }
  getUtilization() {
    return this.apiService.get("/api/cards/utilization");
  }
  getCardById(id) {
    return this.apiService.get(`/api/cards/${id}`);
  }
  /**
   * REVEAL: Call backend for real decrypted card data.
   */
  revealCard(cardId) {
    return this.apiService.get(`/api/cards/${cardId}/reveal`).pipe(tap((res) => {
      const data = res?.data ?? res;
      this._cards.update((list) => list.map((c) => c.id === cardId ? __spreadProps(__spreadValues({}, c), { fullNumber: data.cardNumber, fullCvv: data.cvv, showDetails: true }) : c));
    }), catchError((err) => {
      this.globalUi.error("Failed to decrypt card details.");
      return throwSafe(err);
    }));
  }
  /**
   * Toggle card detail visibility.
   * Local-only UI state - no API call needed.
   */
  toggleCardDetails(index) {
    this._cards.update((list) => {
      const updated = [...list];
      if (updated[index]) {
        updated[index] = __spreadProps(__spreadValues({}, updated[index]), { showDetails: !updated[index].showDetails });
      }
      return updated;
    });
  }
  // --------------------------------------------------------------*
  // PRIVATE HELPERS
  // --------------------------------------------------------------*
  mapApiCard(c) {
    const masked = c.maskedNumber || "****0000";
    const last4 = masked.replace(/[^0-9]/g, "").slice(-4);
    const network = this.guessNetwork(c);
    const limit = c.creditLimit || 1e5;
    const balance = c.currentBalance || 0;
    return {
      id: c.id || "",
      network,
      cardholderName: (c.cardholderName || "CARD HOLDER").toUpperCase(),
      maskedNumber: c.maskedNumber || `****${last4}`,
      fullNumber: `${this.networkPrefix(network)}XX XXXX XXXX ${last4}`,
      cvv: "***",
      fullCvv: "",
      expiryMonth: c.expiryMonth || 12,
      expiryYear: c.expiryYear || 2028,
      issuerName: c.issuerName || "Bank",
      creditLimit: limit,
      currentBalance: balance,
      usagePercent: limit > 0 ? Math.round(balance / limit * 100) : 0,
      showDetails: false
    };
  }
  guessNetwork(card) {
    const issuer = (card.issuerName || "").toLowerCase();
    if (issuer.includes("visa"))
      return "visa";
    if (issuer.includes("master"))
      return "mastercard";
    if (issuer.includes("rupay") || issuer.includes("ru pay"))
      return "rupay";
    if (issuer.includes("amex") || issuer.includes("american"))
      return "amex";
    return "visa";
  }
  networkPrefix(n) {
    switch (n) {
      case "visa":
        return "4XXX";
      case "mastercard":
        return "5XXX";
      case "rupay":
        return "6XXX";
      case "amex":
        return "3XXX";
    }
  }
  incrementMutation() {
    this.mutationVersion++;
    this._mutationsInFlight.update((n) => n + 1);
  }
  decrementMutation() {
    this._mutationsInFlight.update((n) => Math.max(0, n - 1));
    if (this._mutationsInFlight() === 0 && this.deferredRefreshNeeded) {
      this.deferredRefreshNeeded = false;
      this.refreshCards(true);
    }
  }
  invalidateCache() {
    this.cacheTimestamp = 0;
  }
  /**
   * Full state purge - called by ResetBus on logout.
   * Clears cards, locks, cache, and version counter.
   */
  purgeState() {
    this._cards.set([]);
    this._isLoading.set(false);
    this._isAdding.set(false);
    this._deletingIds.set(/* @__PURE__ */ new Set());
    this._mutationsInFlight.set(0);
    this.mutationVersion = 0;
    this.cacheTimestamp = 0;
    this.cacheUserId = "";
    this.deferredRefreshNeeded = false;
  }
  static \u0275fac = function CardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CardService, factory: _CardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function throwSafe(err) {
  return new Observable((subscriber) => subscriber.error(err));
}

export {
  GlobalUiService,
  CardService
};
//# sourceMappingURL=chunk-4BOOVA7O.js.map
