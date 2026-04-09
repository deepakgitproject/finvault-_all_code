import {
  ToastComponent
} from "./chunk-VXVKOPFT.js";
import {
  ComingSoonComponent
} from "./chunk-ESHWFYCR.js";
import {
  ThemeToggleComponent
} from "./chunk-AQGYU3VR.js";
import {
  CardService,
  GlobalUiService
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
  NgClass,
  RouterLink,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SYL3PSAO.js";

// src/app/features/dashboard/dashboard.ts
var _forTrack0 = ($index, $item) => $item.id;
function DashboardComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "URGENT");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_For_74_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((ctx_r2.networkConfig[card_r4.network] == null ? null : ctx_r2.networkConfig[card_r4.network].label) || "Visa");
  }
}
function DashboardComponent_For_74_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275element(1, "div", 81)(2, "div", 82);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_For_74_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((ctx_r2.networkConfig[card_r4.network] == null ? null : ctx_r2.networkConfig[card_r4.network].label) || "RuPay");
  }
}
function DashboardComponent_For_74_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((ctx_r2.networkConfig[card_r4.network] == null ? null : ctx_r2.networkConfig[card_r4.network].label) || "Amex");
  }
}
function DashboardComponent_For_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 49)(2, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 51);
    \u0275\u0275element(4, "rect", 52)(5, "rect", 53)(6, "line", 54)(7, "line", 55)(8, "line", 56)(9, "line", 57);
    \u0275\u0275elementStart(10, "defs")(11, "linearGradient", 58);
    \u0275\u0275element(12, "stop", 59)(13, "stop", 60);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "button", 61);
    \u0275\u0275listener("click", function DashboardComponent_For_74_Template_button_click_14_listener($event) {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.toggleCardDetails($index_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(15, "span", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 62)(18, "div", 63)(19, "span", 64);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 65)(22, "div", 66);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 67)(25, "div", 68)(26, "span", 69);
    \u0275\u0275text(27, "VALID THRU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 70);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 68)(31, "span", 69);
    \u0275\u0275text(32, "CVV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 71);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 68)(36, "span", 69);
    \u0275\u0275text(37, "CARD HOLDER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 70);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(40, "div", 72);
    \u0275\u0275conditionalCreate(41, DashboardComponent_For_74_Conditional_41_Template, 2, 1, "span", 73);
    \u0275\u0275conditionalCreate(42, DashboardComponent_For_74_Conditional_42_Template, 3, 0, "div", 74);
    \u0275\u0275conditionalCreate(43, DashboardComponent_For_74_Conditional_43_Template, 2, 1, "span", 75);
    \u0275\u0275conditionalCreate(44, DashboardComponent_For_74_Conditional_44_Template, 2, 1, "span", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 77)(46, "div", 78)(47, "span");
    \u0275\u0275text(48, "CREDIT LIMIT USAGE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 79);
    \u0275\u0275element(52, "div", 80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const card_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.getGradient(card_r4));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("fill", "url(#chipGrad" + card_r4.id + ")");
    \u0275\u0275advance(6);
    \u0275\u0275attribute("id", "chipGrad" + card_r4.id);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("loading", ctx_r2.revealingIds().has(card_r4.id));
    \u0275\u0275property("disabled", ctx_r2.revealingIds().has(card_r4.id));
    \u0275\u0275attribute("aria-label", card_r4.showDetails ? "Hide card number" : "Show card number");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.revealingIds().has(card_r4.id) ? "sync" : card_r4.showDetails ? "visibility_off" : "visibility", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(card_r4.issuerName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getDisplayNumber(card_r4));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formatExpiry(card_r4));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getDisplayCvv(card_r4));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(card_r4.cardholderName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(card_r4.network === "visa" ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(card_r4.network === "mastercard" ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(card_r4.network === "rupay" ? 43 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(card_r4.network === "amex" ? 44 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", card_r4.usagePercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", card_r4.usagePercent, "%")("background", ctx_r2.getBarColor(card_r4));
  }
}
function DashboardComponent_ForEmpty_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 83)(2, "div", 84)(3, "span", 12);
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 85);
    \u0275\u0275text(6, "Link Your First Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 86);
    \u0275\u0275text(8, "Start managing your credit portfolio now");
    \u0275\u0275elementEnd()()();
  }
}
function DashboardComponent_Conditional_84_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 88)(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 89)(5, "span", 90);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 91);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 92);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const txn_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", txn_r5.bgClass || "bg-indigo");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(txn_r5.icon || "receipt_long");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(txn_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(txn_r5.subtitle);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-error", txn_r5.isNegative);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(txn_r5.amount);
  }
}
function DashboardComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DashboardComponent_Conditional_84_For_1_Template, 11, 7, "div", 87, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.transactions);
  }
}
function DashboardComponent_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 46);
    \u0275\u0275text(2, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No recent activity");
    \u0275\u0275elementEnd()();
  }
}
var DashboardComponent = class _DashboardComponent {
  authService = inject(AuthService);
  cardService = inject(CardService);
  globalUiService = inject(GlobalUiService);
  http = inject(HttpClient);
  // --- Reactive Greeting --------------------------------------------
  userName = computed(() => this.authService.getUserName(), ...ngDevMode ? [{ debugName: "userName" }] : (
    /* istanbul ignore next */
    []
  ));
  todayDate = "";
  // --- Stats (Future: Move to specific store) -----------------------
  totalBalance = computed(() => {
    const sum = this.cardService.cards().reduce((acc, c) => acc + (c.creditLimit - (c.currentBalance || 0)), 0);
    return "Rs." + sum.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }, ...ngDevMode ? [{ debugName: "totalBalance" }] : (
    /* istanbul ignore next */
    []
  ));
  balanceChange = "No pending bills";
  upcomingBillTitle = "No upcoming bills";
  upcomingBillAmount = "Rs.0.00";
  upcomingBillDue = "All caught up";
  rewardPoints = "0";
  rewardValue = "Rs.0.00";
  // --- Computed Dashboard Cards -------------------------------------
  // Limit to 3 cards for dashboard view
  dashboardCards = computed(() => this.cardService.cards().slice(0, 3), ...ngDevMode ? [{ debugName: "dashboardCards" }] : (
    /* istanbul ignore next */
    []
  ));
  barHeights = ["32px", "48px", "64px", "96px", "80px", "56px", "40px"];
  // Reveal tracking
  revealingIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "revealingIds" }] : (
    /* istanbul ignore next */
    []
  ));
  revealTimers = {};
  networkConfig = {
    visa: { gradient: "linear-gradient(135deg, #1a1f71, #0a0e3a)", label: "Visa" },
    mastercard: { gradient: "linear-gradient(135deg, #eb001b, #f79e1b)", label: "MasterCard" },
    rupay: { gradient: "linear-gradient(135deg, #004d40, #00695c)", label: "RuPay" },
    amex: { gradient: "linear-gradient(135deg, #006fcf, #004a8f)", label: "Amex" }
  };
  transactions = [];
  ngOnInit() {
    this.cardService.refreshCards();
    const now = /* @__PURE__ */ new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit"
    };
    this.todayDate = now.toLocaleDateString("en-US", options).toUpperCase();
    const userId = this.authService.getUserId();
    if (userId) {
      this.loadBillingSummary(userId);
      this.loadUpcomingBills(userId);
      this.loadTransactions();
    }
  }
  onWalletClick() {
    this.globalUiService.showComingSoon();
  }
  // --- API: Billing Summary ----------------------------------------
  loadBillingSummary(userId) {
    this.http.get(`/api/billing/bills/user/${userId}/summary`).subscribe({
      next: (res) => {
        const data = res?.data ?? res;
        if (data) {
          if (data.pendingCount != null) {
            this.balanceChange = `${data.pendingCount} pending bill(s)`;
          }
        }
      },
      error: () => {
      }
    });
  }
  // --- API: Transactions -------------------------------------------
  loadTransactions() {
    this.http.get("/api/transactions").subscribe({
      next: (res) => {
        const data = res?.data ?? res;
        if (Array.isArray(data)) {
          this.transactions = data.slice(0, 5).map((t) => ({
            title: t.description,
            subtitle: new Date(t.createdAt).toLocaleDateString(),
            amount: t.type === "Reversal" ? `+Rs.${t.amount.toFixed(2)}` : `-Rs.${t.amount.toFixed(2)}`,
            icon: t.type === "Reversal" ? "undo" : "payment",
            bgClass: t.type === "Reversal" ? "bg-green" : "bg-indigo",
            isNegative: t.type !== "Reversal"
          }));
        }
      },
      error: () => {
        this.transactions = [];
      }
    });
  }
  // --- API: Upcoming Bills -----------------------------------------
  loadUpcomingBills(userId) {
    this.http.get(`/api/billing/bills/user/${userId}/upcoming?days=7`).subscribe({
      next: (res) => {
        const data = Array.isArray(res) ? res : res?.data ?? [];
        if (data.length > 0) {
          const next = data[0];
          this.upcomingBillTitle = next.billingMonth || "Upcoming Bill";
          this.upcomingBillAmount = this.formatCurrency(next.totalAmount ?? 0);
          if (next.dueDate) {
            const due = new Date(next.dueDate);
            const now = /* @__PURE__ */ new Date();
            const diffDays = Math.ceil((due.getTime() - now.getTime()) / 864e5);
            this.upcomingBillDue = diffDays > 0 ? `Due in ${diffDays} day${diffDays > 1 ? "s" : ""}` : diffDays === 0 ? "Due today" : `Overdue by ${Math.abs(diffDays)} day(s)`;
          }
        }
      },
      error: () => {
      }
    });
  }
  formatCurrency(value) {
    if (value == null)
      return "Rs.0.00";
    return "Rs." + value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  // --- UI Helpers --------------------------------------------------
  toggleCardDetails(index) {
    const card = this.dashboardCards()[index];
    if (!card)
      return;
    if (card.showDetails) {
      this.cardService.toggleCardDetails(index);
      this.clearRevealTimer(card.id);
    } else {
      this.revealCard(card.id, index);
    }
  }
  revealCard(cardId, index) {
    if (this.revealingIds().has(cardId))
      return;
    this.revealingIds.update((ids) => new Set(ids).add(cardId));
    this.cardService.revealCard(cardId).subscribe({
      next: () => {
        this.revealingIds.update((ids) => {
          const next = new Set(ids);
          next.delete(cardId);
          return next;
        });
        this.clearRevealTimer(cardId);
        this.revealTimers[cardId] = setTimeout(() => {
          if (this.dashboardCards()[index]?.showDetails) {
            this.cardService.toggleCardDetails(index);
          }
        }, 3e4);
      },
      error: () => {
        this.revealingIds.update((ids) => {
          const next = new Set(ids);
          next.delete(cardId);
          return next;
        });
      }
    });
  }
  clearRevealTimer(cardId) {
    if (this.revealTimers[cardId]) {
      clearTimeout(this.revealTimers[cardId]);
      delete this.revealTimers[cardId];
    }
  }
  getDisplayNumber(card) {
    return card.showDetails ? card.fullNumber : `**** **** **** ${card.maskedNumber.slice(-4)}`;
  }
  getDisplayCvv(card) {
    return card.showDetails ? card.fullCvv : card.cvv;
  }
  getGradient(card) {
    return this.networkConfig[card.network]?.gradient || this.networkConfig["visa"].gradient;
  }
  getBarColor(card) {
    if (card.usagePercent >= 80)
      return "#EF4444";
    if (card.usagePercent >= 50)
      return "#FBBF24";
    return "#22C55E";
  }
  formatExpiry(card) {
    return `${String(card.expiryMonth).padStart(2, "0")}/${String(card.expiryYear).slice(-2)}`;
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 87, vars: 16, consts: [[1, "dashboard-layout"], [1, "main-content"], [1, "topbar"], [1, "greeting"], [1, "welcome-text"], [1, "date-text"], [1, "activity-pill", "glass-card"], [1, "pulse-dot"], [1, "act-label"], [1, "act-desc"], [1, "topbar-actions"], [1, "icon-btn", "glass-card", 3, "click"], [1, "material-symbols-outlined"], [1, "avatar-circle"], ["alt", "User Avatar", 3, "src"], [1, "stats-row"], [1, "stat-card", "glass-card-strong"], [1, "stat-label"], [1, "stat-value"], [1, "stat-trend", "success"], [1, "stat-card", "glass-card-strong", "warning-card"], [1, "card-header-flex"], [1, "icon-circle", "bg-pink"], [1, "material-symbols-outlined", "text-error"], [1, "badge-urgent"], [1, "stat-label", "mt-3"], [1, "stat-title"], [1, "bill-footer"], [1, "stat-value", "error-text"], [1, "stat-sub"], ["routerLink", "/billing", 1, "btn-dark-pill"], [1, "stat-card", "glass-card", "reward-card"], [1, "ambient-glow"], [1, "icon-circle", "bg-olive"], [1, "material-symbols-outlined", "text-green"], [1, "reward-content"], [1, "cards-section"], [1, "section-header"], [1, "section-title"], [1, "section-sub"], ["routerLink", "/cards", 1, "link-primary"], [1, "cards-grid"], [1, "card-3d-wrapper"], [1, "card-3d-wrapper", 2, "grid-column", "1 / -1"], [1, "bottom-section", 2, "grid-template-columns", "1fr"], [1, "activity-panel", "glass-card"], [1, "material-symbols-outlined", "text-muted"], [1, "activity-list"], [1, "empty-state"], [1, "digital-card"], [1, "emv-chip"], ["viewBox", "0 0 50 40", "xmlns", "http://www.w3.org/2000/svg"], ["x", "0", "y", "0", "width", "50", "height", "40", "rx", "6", "ry", "6", "fill", "#c9a84c"], ["x", "0", "y", "0", "width", "50", "height", "40", "rx", "6", "ry", "6"], ["x1", "0", "y1", "13", "x2", "50", "y2", "13", "stroke", "#b8962d", "stroke-width", "0.8"], ["x1", "0", "y1", "20", "x2", "50", "y2", "20", "stroke", "#b8962d", "stroke-width", "0.8"], ["x1", "0", "y1", "27", "x2", "50", "y2", "27", "stroke", "#b8962d", "stroke-width", "0.8"], ["x1", "25", "y1", "0", "x2", "25", "y2", "40", "stroke", "#b8962d", "stroke-width", "0.8"], ["x1", "0", "y1", "0", "x2", "1", "y2", "1"], ["offset", "0%", "stop-color", "#dbb85c", "stop-opacity", "0.4"], ["offset", "100%", "stop-color", "#a67c00", "stop-opacity", "0.2"], [1, "card-eye-btn", 3, "click", "disabled"], [1, "card-body-content"], [1, "card-name-row"], [1, "card-name"], [1, "card-middle"], [1, "card-number", "mono"], [1, "card-details-row"], [1, "card-detail"], [1, "card-detail-label"], [1, "card-detail-value"], [1, "card-detail-value", "mono"], [1, "card-brand-logo"], [1, "visa-logo"], [1, "mastercard-logo"], [1, "rupay-logo"], [1, "amex-logo"], [1, "card-bottom-bar"], [1, "limit-header"], [1, "limit-track"], [1, "limit-bar"], [1, "mc-circle", "mc-red"], [1, "mc-circle", "mc-orange"], ["routerLink", "/cards", 1, "new-card-placeholder"], [1, "add-circle"], [1, "new-card-title"], [1, "new-card-sub"], [1, "activity-item"], [1, "icon-box", 3, "ngClass"], [1, "activity-details"], [1, "item-title"], [1, "item-sub"], [1, "item-amount"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "header", 2)(4, "div", 3)(5, "h1", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275element(10, "div", 7);
      \u0275\u0275elementStart(11, "span", 8);
      \u0275\u0275text(12, "Recent activity:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 9);
      \u0275\u0275text(14, "System Active & Optimal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10);
      \u0275\u0275element(16, "app-theme-toggle");
      \u0275\u0275elementStart(17, "button", 11);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_17_listener() {
        return ctx.onWalletClick();
      });
      \u0275\u0275elementStart(18, "span", 12);
      \u0275\u0275text(19, "account_balance_wallet");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 13);
      \u0275\u0275element(21, "img", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(22, "app-toast");
      \u0275\u0275elementStart(23, "section", 15)(24, "div", 16)(25, "span", 17);
      \u0275\u0275text(26, "TOTAL AVAILABLE BALANCE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "h2", 18);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 19)(30, "span", 12);
      \u0275\u0275text(31, "trending_up");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 20)(34, "div", 21)(35, "div", 22)(36, "span", 23);
      \u0275\u0275text(37, "warning");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(38, DashboardComponent_Conditional_38_Template, 2, 0, "span", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 25);
      \u0275\u0275text(40, "Upcoming Bill");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "h3", 26);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 27)(44, "div")(45, "h2", 28);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p", 29);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "button", 30);
      \u0275\u0275text(50, "Pay Now");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "div", 31);
      \u0275\u0275element(52, "div", 32);
      \u0275\u0275elementStart(53, "div", 33)(54, "span", 34);
      \u0275\u0275text(55, "stars");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 35)(57, "h2", 18);
      \u0275\u0275text(58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "span", 17);
      \u0275\u0275text(60, "REWARD POINTS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "p", 29);
      \u0275\u0275text(62);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(63, "section", 36)(64, "div", 37)(65, "div")(66, "h2", 38);
      \u0275\u0275text(67, "My Digital Vault");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "p", 39);
      \u0275\u0275text(69);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "a", 40);
      \u0275\u0275text(71, "View All Cards ->");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 41);
      \u0275\u0275repeaterCreate(73, DashboardComponent_For_74_Template, 53, 23, "div", 42, _forTrack0, false, DashboardComponent_ForEmpty_75_Template, 9, 0, "div", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "section", 44)(77, "div", 45)(78, "div", 37)(79, "h2", 38);
      \u0275\u0275text(80, "Global Activity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "span", 46);
      \u0275\u0275text(82, "more_horiz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 47);
      \u0275\u0275conditionalCreate(84, DashboardComponent_Conditional_84_Template, 2, 0)(85, DashboardComponent_Conditional_85_Template, 5, 0, "div", 48);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(86, "app-coming-soon");
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("Welcome back, ", ctx.userName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.todayDate);
      \u0275\u0275advance(13);
      \u0275\u0275property("src", \u0275\u0275interpolate1("https://api.dicebear.com/7.x/notionists/svg?seed=", ctx.userName()), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.totalBalance);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.balanceChange, " ");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.upcomingBillAmount !== "Rs.0.00" ? 38 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.upcomingBillTitle);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.upcomingBillAmount);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.upcomingBillDue);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.rewardPoints);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Equivalent to ", ctx.rewardValue, " in statement credit");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate2("", ctx.cardService.cards().length, " Active Card", ctx.cardService.cards().length !== 1 ? "s" : "", " Managed");
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.dashboardCards());
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.transactions.length > 0 ? 84 : 85);
    }
  }, dependencies: [CommonModule, NgClass, RouterLink, SidebarComponent, ThemeToggleComponent, ComingSoonComponent, ToastComponent], styles: ['\n.dashboard-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  position: relative;\n  z-index: 10;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 100vh;\n  background: var(--glass-bg);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  display: flex;\n  flex-direction: column;\n  padding: 32px 20px;\n  z-index: 50;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  padding-left: 12px;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: -0.04em;\n  display: block;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--text-secondary);\n  margin-top: -2px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  text-decoration: none;\n  color: var(--text-secondary);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 500;\n  font-size: 0.95rem;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.nav-item[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.8;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n}\n.nav-item.active[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  opacity: 1;\n  font-variation-settings: "FILL" 1;\n}\n.sidebar-promo[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.4);\n  text-align: center;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .promo-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n  margin-bottom: 16px;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .btn-upgrade[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .btn-upgrade[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.main-content[_ngcontent-%COMP%] {\n  margin-left: 300px;\n  padding: 40px 60px;\n  flex: 1;\n  max-width: 1400px;\n}\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 40px;\n}\n.greeting[_ngcontent-%COMP%]   .welcome-text[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: -0.03em;\n  margin: 0;\n}\n.greeting[_ngcontent-%COMP%]   .date-text[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  letter-spacing: 0.08em;\n  margin: 4px 0 0;\n}\n.activity-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 24px;\n  border-radius: 100px;\n  background: var(--glass-bg);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  box-shadow: 0 4px 12px var(--glass-shadow, rgba(120, 130, 210, 0.18));\n  margin-bottom: 6px;\n}\n.activity-pill[_ngcontent-%COMP%]   .pulse-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: var(--primary);\n  border-radius: 50%;\n  box-shadow: 0 0 0 4px var(--primary-light);\n}\n.activity-pill[_ngcontent-%COMP%]   .act-label[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.activity-pill[_ngcontent-%COMP%]   .act-desc[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 6px;\n}\n.topbar-actions[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: none;\n  background: var(--glass-bg);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.topbar-actions[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--glass-bg-strong);\n  color: var(--primary);\n}\n.topbar-actions[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.topbar-actions[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: white;\n  border: 2px solid white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.topbar-actions[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr);\n  gap: 24px;\n  margin-bottom: 40px;\n}\n.glass-card-strong[_ngcontent-%COMP%] {\n  background: var(--glass-bg-strong, rgba(255, 255, 255, 0.75));\n  backdrop-filter: blur(28px);\n  -webkit-backdrop-filter: blur(28px);\n  border-radius: 28px;\n  padding: 32px;\n  box-shadow: 0 24px 48px rgba(74, 75, 215, 0.08);\n  display: flex;\n  flex-direction: column;\n}\n.glass-card[_ngcontent-%COMP%] {\n  background: var(--glass-bg, rgba(255, 255, 255, 0.55));\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-radius: 24px;\n  padding: 32px;\n  box-shadow: 0 24px 48px rgba(74, 75, 215, 0.08);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 1.1rem;\n  letter-spacing: 0.08em;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n  display: block;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: -0.03em;\n  margin: 0 0 16px 0;\n  line-height: 1;\n}\n.stat-trend[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.stat-trend.success[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.stat-trend[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n}\n.warning-card[_ngcontent-%COMP%] {\n  position: relative;\n}\n.warning-card[_ngcontent-%COMP%]   .card-header-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.warning-card[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.warning-card[_ngcontent-%COMP%]   .icon-circle.bg-pink[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n}\n.warning-card[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%]   .text-error[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.warning-card[_ngcontent-%COMP%]   .badge-urgent[_ngcontent-%COMP%] {\n  background: var(--error);\n  color: white;\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  padding: 6px 12px;\n  border-radius: 100px;\n  letter-spacing: 0.05em;\n}\n.warning-card[_ngcontent-%COMP%]   .stat-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 16px 0;\n}\n.warning-card[_ngcontent-%COMP%]   .bill-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-top: auto;\n}\n.warning-card[_ngcontent-%COMP%]   .stat-value.error-text[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 2.2rem;\n  color: var(--error);\n  margin-bottom: 4px;\n}\n.warning-card[_ngcontent-%COMP%]   .stat-sub[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.warning-card[_ngcontent-%COMP%]   .btn-dark-pill[_ngcontent-%COMP%] {\n  background: var(--text-primary);\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 100px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.warning-card[_ngcontent-%COMP%]   .btn-dark-pill[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.reward-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.reward-card[_ngcontent-%COMP%]   .ambient-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50px;\n  right: -50px;\n  width: 200px;\n  height: 200px;\n  background: rgba(167, 139, 250, 0.35);\n  filter: blur(60px);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.reward-card[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 32px;\n}\n.reward-card[_ngcontent-%COMP%]   .icon-circle.bg-olive[_ngcontent-%COMP%] {\n  background: #e6edba;\n}\n.reward-card[_ngcontent-%COMP%]   .icon-circle[_ngcontent-%COMP%]   .text-green[_ngcontent-%COMP%] {\n  color: #5a7516;\n}\n.reward-card[_ngcontent-%COMP%]   .reward-content[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: auto;\n}\n.reward-card[_ngcontent-%COMP%]   .reward-content[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 2.8rem;\n  margin-bottom: 4px;\n}\n.reward-card[_ngcontent-%COMP%]   .reward-content[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.reward-card[_ngcontent-%COMP%]   .reward-content[_ngcontent-%COMP%]   .stat-sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin: 0;\n  line-height: 1.4;\n}\n.cards-section[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 24px;\n}\n.section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: -0.03em;\n  margin: 0 0 4px 0;\n}\n.section-header[_ngcontent-%COMP%]   .section-sub[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.section-header[_ngcontent-%COMP%]   .link-primary[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--primary);\n  text-decoration: none;\n}\n.section-header[_ngcontent-%COMP%]   .link-primary[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 28px;\n}\n.card-3d-wrapper[_ngcontent-%COMP%] {\n  cursor: pointer;\n  will-change: transform;\n  isolation: isolate;\n  border-radius: 20px;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.card-3d-wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n  z-index: 2;\n}\n.card-3d-wrapper[_ngcontent-%COMP%]:hover   .digital-card[_ngcontent-%COMP%] {\n  box-shadow: 0 24px 56px rgba(0, 0, 0, 0.25);\n}\n.card-3d-wrapper[_ngcontent-%COMP%]:hover   .card-eye-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.digital-card[_ngcontent-%COMP%] {\n  position: relative;\n  height: 230px;\n  border-radius: 20px;\n  padding: 24px 24px 16px;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n  transition: box-shadow 0.3s ease;\n}\n.digital-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.12) 0%,\n      transparent 50%,\n      rgba(255, 255, 255, 0.04) 100%);\n  pointer-events: none;\n  border-radius: 20px;\n}\n.new-card-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1.586/1;\n  border-radius: 20px;\n  border: 2px dashed rgba(107, 110, 249, 0.3);\n  background: rgba(255, 255, 255, 0.4);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.new-card-placeholder[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  transform: scale(1.03);\n  background: rgba(255, 255, 255, 0.7);\n}\n.new-card-placeholder[_ngcontent-%COMP%]   .add-circle[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: var(--primary-light);\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.new-card-placeholder[_ngcontent-%COMP%]   .add-circle[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.new-card-placeholder[_ngcontent-%COMP%]   .new-card-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--primary);\n  margin-bottom: 6px;\n}\n.new-card-placeholder[_ngcontent-%COMP%]   .new-card-sub[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.emv-chip[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 32px;\n  margin-bottom: 6px;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25));\n}\n.emv-chip[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.card-eye-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 18px;\n  right: 18px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 0.5;\n  transition: all 0.25s ease;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 5;\n}\n.card-eye-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.card-eye-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  color: white;\n  opacity: 1;\n}\n.card-body-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 1;\n}\n.card-name-row[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.card-name-row[_ngcontent-%COMP%]   .card-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  opacity: 0.8;\n}\n.card-middle[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", monospace;\n  font-size: 1.25rem;\n  letter-spacing: 0.2em;\n  margin-bottom: 12px;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);\n}\n.card-middle[_ngcontent-%COMP%]   .card-details-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.card-middle[_ngcontent-%COMP%]   .card-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.card-middle[_ngcontent-%COMP%]   .card-detail-label[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.55rem;\n  letter-spacing: 0.1em;\n  opacity: 0.6;\n}\n.card-middle[_ngcontent-%COMP%]   .card-detail-value[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.78rem;\n  opacity: 0.9;\n  letter-spacing: 0.04em;\n}\n.card-brand-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 46px;\n  right: 24px;\n  z-index: 2;\n}\n.visa-logo[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 800;\n  font-style: italic;\n  color: white;\n  letter-spacing: 0.04em;\n  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n}\n.mastercard-logo[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  width: 52px;\n  height: 32px;\n}\n.mastercard-logo[_ngcontent-%COMP%]   .mc-circle[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n}\n.mastercard-logo[_ngcontent-%COMP%]   .mc-red[_ngcontent-%COMP%] {\n  left: 0;\n  background: #EB001B;\n}\n.mastercard-logo[_ngcontent-%COMP%]   .mc-orange[_ngcontent-%COMP%] {\n  left: 20px;\n  background: #F79E1B;\n  mix-blend-mode: hard-light;\n}\n.rupay-logo[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.02em;\n  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n}\n.card-bottom-bar[_ngcontent-%COMP%] {\n  margin-top: auto;\n  z-index: 1;\n}\n.card-bottom-bar[_ngcontent-%COMP%]   .limit-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.6rem;\n  font-family: "Space Grotesk", sans-serif;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  opacity: 0.7;\n  margin-bottom: 6px;\n}\n.card-bottom-bar[_ngcontent-%COMP%]   .limit-track[_ngcontent-%COMP%] {\n  height: 3px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 2px;\n  overflow: hidden;\n}\n.card-bottom-bar[_ngcontent-%COMP%]   .limit-track[_ngcontent-%COMP%]   .limit-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 2px;\n  transition: width 0.6s ease;\n}\n.bottom-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 32px !important;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n}\n.action-btn[_ngcontent-%COMP%]   .action-circle[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.action-btn[_ngcontent-%COMP%]   .action-circle[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 24px;\n  transition: color 0.3s ease;\n}\n.action-btn[_ngcontent-%COMP%]   .bg-primary-light[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n}\n.action-btn[_ngcontent-%COMP%]   .text-primary[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.action-btn[_ngcontent-%COMP%]   .bg-secondary-light[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.15);\n}\n.action-btn[_ngcontent-%COMP%]   .text-secondary[_ngcontent-%COMP%] {\n  color: var(--secondary);\n}\n.action-btn[_ngcontent-%COMP%]   .bg-tertiary-light[_ngcontent-%COMP%] {\n  background: rgba(132, 204, 22, 0.15);\n}\n.action-btn[_ngcontent-%COMP%]   .text-tertiary[_ngcontent-%COMP%] {\n  color: #84CC16;\n}\n.action-btn[_ngcontent-%COMP%]   .bg-muted-light[_ngcontent-%COMP%] {\n  background: rgba(136, 136, 170, 0.15);\n}\n.action-btn[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.action-btn[_ngcontent-%COMP%]:hover   .hover-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.action-btn[_ngcontent-%COMP%]:hover   .hover-primary[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: white;\n}\n.action-btn[_ngcontent-%COMP%]:hover   .hover-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary);\n}\n.action-btn[_ngcontent-%COMP%]:hover   .hover-secondary[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: white;\n}\n.action-btn[_ngcontent-%COMP%]:hover   .hover-tertiary[_ngcontent-%COMP%] {\n  background: #84CC16;\n}\n.action-btn[_ngcontent-%COMP%]:hover   .hover-tertiary[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: white;\n}\n.action-btn[_ngcontent-%COMP%]:hover   .hover-muted[_ngcontent-%COMP%] {\n  background: var(--text-muted);\n}\n.action-btn[_ngcontent-%COMP%]:hover   .hover-muted[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: white;\n}\n.action-btn[_ngcontent-%COMP%]   .action-label[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  color: var(--text-secondary);\n}\n.insights-panel[_ngcontent-%COMP%] {\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n}\n.insights-panel[_ngcontent-%COMP%]   .insights-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.insights-panel[_ngcontent-%COMP%]   .insights-header[_ngcontent-%COMP%]   .insights-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.insights-panel[_ngcontent-%COMP%]   .bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  height: 120px;\n  margin-bottom: 20px;\n}\n.insights-panel[_ngcontent-%COMP%]   .bar-chart[_ngcontent-%COMP%]   .bar-wrapper[_ngcontent-%COMP%] {\n  width: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n.insights-panel[_ngcontent-%COMP%]   .bar-chart[_ngcontent-%COMP%]   .chart-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 6px 6px 0 0;\n  transition: height 0.5s ease-out;\n  background: var(--primary);\n}\n.insights-panel[_ngcontent-%COMP%]   .bar-chart[_ngcontent-%COMP%]   .chart-bar.bar-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  opacity: 0.9;\n}\n.insights-panel[_ngcontent-%COMP%]   .bar-chart[_ngcontent-%COMP%]   .chart-bar.bar-secondary[_ngcontent-%COMP%] {\n  background: var(--secondary);\n  opacity: 0.6;\n}\n.insights-panel[_ngcontent-%COMP%]   .insights-footer[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  color: var(--text-muted);\n  text-align: center;\n}\n.insights-panel[_ngcontent-%COMP%]   .insights-footer[_ngcontent-%COMP%]   .text-primary-bold[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 700;\n  background: var(--primary-light);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.fab-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  box-shadow: 0 16px 32px rgba(107, 110, 249, 0.4);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  z-index: 100;\n}\n.fab-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-variation-settings: "FILL" 1;\n}\n.fab-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) rotate(5deg);\n}\n/*# sourceMappingURL=dashboard.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, RouterLink, SidebarComponent, ThemeToggleComponent, ComingSoonComponent, ToastComponent], template: `<div class="dashboard-layout">\r
  <!-- SIDEBAR -->\r
  <app-sidebar />\r
\r
  <!-- MAIN CONTENT -->\r
  <main class="main-content">\r
\r
    <!-- TOP BAR -->\r
    <header class="topbar">\r
      <div class="greeting">\r
        <h1 class="welcome-text">Welcome back, {{ userName() }}</h1>\r
        <p class="date-text">{{ todayDate }}</p>\r
      </div>\r
\r
      <div class="activity-pill glass-card">\r
        <div class="pulse-dot"></div>\r
        <span class="act-label">Recent activity:</span>\r
        <span class="act-desc">System Active & Optimal</span>\r
      </div>\r
\r
      <div class="topbar-actions">\r
        <app-theme-toggle />\r
        <button class="icon-btn glass-card" (click)="onWalletClick()">\r
          <span class="material-symbols-outlined">account_balance_wallet</span>\r
        </button>\r
        <div class="avatar-circle">\r
          <img src="https://api.dicebear.com/7.x/notionists/svg?seed={{ userName() }}" alt="User Avatar" />\r
        </div>\r
      </div>\r
    </header>\r
\r
    <!-- Global Toasts -->\r
    <app-toast />\r
\r
    <!-- STATS ROW -->\r
    <section class="stats-row">\r
      <!-- Card 1 -->\r
      <div class="stat-card glass-card-strong">\r
        <span class="stat-label">TOTAL AVAILABLE BALANCE</span>\r
        <h2 class="stat-value">{{ totalBalance }}</h2>\r
        <div class="stat-trend success">\r
          <span class="material-symbols-outlined">trending_up</span>\r
          {{ balanceChange }}\r
        </div>\r
      </div>\r
\r
      <!-- Card 2 -->\r
      <div class="stat-card glass-card-strong warning-card">\r
        <div class="card-header-flex">\r
          <div class="icon-circle bg-pink">\r
            <span class="material-symbols-outlined text-error">warning</span>\r
          </div>\r
          @if (upcomingBillAmount !== 'Rs.0.00') {\r
            <span class="badge-urgent">URGENT</span>\r
          }\r
        </div>\r
        <span class="stat-label mt-3">Upcoming Bill</span>\r
        <h3 class="stat-title">{{ upcomingBillTitle }}</h3>\r
        <div class="bill-footer">\r
          <div>\r
            <h2 class="stat-value error-text">{{ upcomingBillAmount }}</h2>\r
            <p class="stat-sub">{{ upcomingBillDue }}</p>\r
          </div>\r
          <button class="btn-dark-pill" routerLink="/billing">Pay Now</button>\r
        </div>\r
      </div>\r
\r
      <!-- Card 3 -->\r
      <div class="stat-card glass-card reward-card">\r
        <div class="ambient-glow"></div>\r
        <div class="icon-circle bg-olive">\r
          <span class="material-symbols-outlined text-green">stars</span>\r
        </div>\r
        <div class="reward-content">\r
          <h2 class="stat-value">{{ rewardPoints }}</h2>\r
          <span class="stat-label">REWARD POINTS</span>\r
          <p class="stat-sub">Equivalent to {{ rewardValue }} in statement credit</p>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <!-- CREDIT CARDS SECTION -->\r
    <section class="cards-section">\r
      <div class="section-header">\r
        <div>\r
          <h2 class="section-title">My Digital Vault</h2>\r
          <p class="section-sub">{{ cardService.cards().length }} Active Card{{ cardService.cards().length !== 1 ? 's' : '' }} Managed</p>\r
        </div>\r
        <a routerLink="/cards" class="link-primary">View All Cards -></a>\r
      </div>\r
\r
      <div class="cards-grid">\r
        @for (card of dashboardCards(); track card.id) {\r
        <div class="card-3d-wrapper">\r
          <div class="digital-card" [style.background]="getGradient(card)">\r
\r
            <!-- EMV Chip -->\r
            <div class="emv-chip">\r
              <svg viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg">\r
                <rect x="0" y="0" width="50" height="40" rx="6" ry="6" fill="#c9a84c" />\r
                <rect x="0" y="0" width="50" height="40" rx="6" ry="6" [attr.fill]="'url(#chipGrad' + card.id + ')'" />\r
                <line x1="0" y1="13" x2="50" y2="13" stroke="#b8962d" stroke-width="0.8" />\r
                <line x1="0" y1="20" x2="50" y2="20" stroke="#b8962d" stroke-width="0.8" />\r
                <line x1="0" y1="27" x2="50" y2="27" stroke="#b8962d" stroke-width="0.8" />\r
                <line x1="25" y1="0" x2="25" y2="40" stroke="#b8962d" stroke-width="0.8" />\r
                <defs>\r
                  <linearGradient [attr.id]="'chipGrad' + card.id" x1="0" y1="0" x2="1" y2="1">\r
                    <stop offset="0%" stop-color="#dbb85c" stop-opacity="0.4" />\r
                    <stop offset="100%" stop-color="#a67c00" stop-opacity="0.2" />\r
                  </linearGradient>\r
                </defs>\r
              </svg>\r
            </div>\r
\r
            <!-- Toggle visibility button -->\r
            <button class="card-eye-btn" (click)="toggleCardDetails($index); $event.stopPropagation()"\r
              [class.loading]="revealingIds().has(card.id)"\r
              [disabled]="revealingIds().has(card.id)"\r
              [attr.aria-label]="card.showDetails ? 'Hide card number' : 'Show card number'">\r
              <span class="material-symbols-outlined">\r
                {{ revealingIds().has(card.id) ? 'sync' : (card.showDetails ? 'visibility_off' : 'visibility') }}\r
              </span>\r
            </button>\r
\r
            <div class="card-body-content">\r
              <div class="card-name-row">\r
                <span class="card-name">{{ card.issuerName }}</span>\r
              </div>\r
\r
              <div class="card-middle">\r
                <div class="card-number mono">{{ getDisplayNumber(card) }}</div>\r
                <div class="card-details-row">\r
                  <div class="card-detail">\r
                    <span class="card-detail-label">VALID THRU</span>\r
                    <span class="card-detail-value">{{ formatExpiry(card) }}</span>\r
                  </div>\r
                  <div class="card-detail">\r
                    <span class="card-detail-label">CVV</span>\r
                    <span class="card-detail-value mono">{{ getDisplayCvv(card) }}</span>\r
                  </div>\r
                  <div class="card-detail">\r
                    <span class="card-detail-label">CARD HOLDER</span>\r
                    <span class="card-detail-value">{{ card.cardholderName }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Brand Logo -->\r
            <div class="card-brand-logo">\r
              @if (card.network === 'visa') {\r
                <span class="visa-logo">{{ networkConfig[card.network]?.label || 'Visa' }}</span>\r
              }\r
              @if (card.network === 'mastercard') {\r
                <div class="mastercard-logo">\r
                  <div class="mc-circle mc-red"></div>\r
                  <div class="mc-circle mc-orange"></div>\r
                </div>\r
              }\r
              @if (card.network === 'rupay') {\r
                <span class="rupay-logo">{{ networkConfig[card.network]?.label || 'RuPay' }}</span>\r
              }\r
              @if (card.network === 'amex') {\r
                <span class="amex-logo">{{ networkConfig[card.network]?.label || 'Amex' }}</span>\r
              }\r
            </div>\r
\r
            <!-- Credit limit bar at bottom -->\r
            <div class="card-bottom-bar">\r
              <div class="limit-header">\r
                <span>CREDIT LIMIT USAGE</span>\r
                <span>{{ card.usagePercent }}%</span>\r
              </div>\r
              <div class="limit-track">\r
                <div class="limit-bar" [style.width.%]="card.usagePercent" [style.background]="getBarColor(card)"></div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        } @empty {\r
        <div class="card-3d-wrapper" style="grid-column: 1 / -1;">\r
          <div class="new-card-placeholder" routerLink="/cards">\r
            <div class="add-circle">\r
              <span class="material-symbols-outlined">add</span>\r
            </div>\r
            <span class="new-card-title">Link Your First Card</span>\r
            <span class="new-card-sub">Start managing your credit portfolio now</span>\r
          </div>\r
        </div>\r
        }\r
      </div>\r
    </section>\r
\r
    <!-- BOTTOM CONTENT -->\r
    <section class="bottom-section" style="grid-template-columns: 1fr;">\r
      <!-- Activity Feed -->\r
      <div class="activity-panel glass-card">\r
        <div class="section-header">\r
          <h2 class="section-title">Global Activity</h2>\r
          <span class="material-symbols-outlined text-muted">more_horiz</span>\r
        </div>\r
        <div class="activity-list">\r
          @if (transactions.length > 0) {\r
            @for (txn of transactions; track $index) {\r
            <div class="activity-item">\r
              <div class="icon-box" [ngClass]="txn.bgClass || 'bg-indigo'">\r
                <span class="material-symbols-outlined">{{ txn.icon || 'receipt_long' }}</span>\r
              </div>\r
              <div class="activity-details">\r
                <span class="item-title">{{ txn.title }}</span>\r
                <span class="item-sub">{{ txn.subtitle }}</span>\r
              </div>\r
              <div class="item-amount" [class.text-error]="txn.isNegative">{{ txn.amount }}</div>\r
            </div>\r
            }\r
          } @else {\r
            <div class="empty-state">\r
              <span class="material-symbols-outlined text-muted">history</span>\r
              <p>No recent activity</p>\r
            </div>\r
          }\r
        </div>\r
      </div>\r
    </section>\r
\r
  </main>\r
\r
</div>\r
\r
<app-coming-soon />\r
\r
`, styles: ['/* src/app/features/dashboard/dashboard.scss */\n.dashboard-layout {\n  display: flex;\n  min-height: 100vh;\n  position: relative;\n  z-index: 10;\n}\n.sidebar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 100vh;\n  background: var(--glass-bg);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  display: flex;\n  flex-direction: column;\n  padding: 32px 20px;\n  z-index: 50;\n}\n.sidebar-header {\n  margin-bottom: 40px;\n  padding-left: 12px;\n}\n.brand-name {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: -0.04em;\n  display: block;\n}\n.brand-sub {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--text-secondary);\n  margin-top: -2px;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  text-decoration: none;\n  color: var(--text-secondary);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 500;\n  font-size: 0.95rem;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.nav-item .material-symbols-outlined {\n  font-size: 20px;\n  opacity: 0.8;\n}\n.nav-item:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.nav-item.active {\n  background: var(--primary);\n  color: #fff;\n}\n.nav-item.active .material-symbols-outlined {\n  opacity: 1;\n  font-variation-settings: "FILL" 1;\n}\n.sidebar-promo {\n  padding: 20px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.4);\n  text-align: center;\n}\n.sidebar-promo .promo-title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n}\n.sidebar-promo .promo-desc {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n  margin-bottom: 16px;\n}\n.sidebar-promo .btn-upgrade {\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.sidebar-promo .btn-upgrade:hover {\n  transform: translateY(-2px);\n}\n.main-content {\n  margin-left: 300px;\n  padding: 40px 60px;\n  flex: 1;\n  max-width: 1400px;\n}\n.topbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 40px;\n}\n.greeting .welcome-text {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: -0.03em;\n  margin: 0;\n}\n.greeting .date-text {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  letter-spacing: 0.08em;\n  margin: 4px 0 0;\n}\n.activity-pill {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 24px;\n  border-radius: 100px;\n  background: var(--glass-bg);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  box-shadow: 0 4px 12px var(--glass-shadow, rgba(120, 130, 210, 0.18));\n  margin-bottom: 6px;\n}\n.activity-pill .pulse-dot {\n  width: 8px;\n  height: 8px;\n  background: var(--primary);\n  border-radius: 50%;\n  box-shadow: 0 0 0 4px var(--primary-light);\n}\n.activity-pill .act-label {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.activity-pill .act-desc {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.topbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 6px;\n}\n.topbar-actions .icon-btn {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: none;\n  background: var(--glass-bg);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.topbar-actions .icon-btn:hover {\n  background: var(--glass-bg-strong);\n  color: var(--primary);\n}\n.topbar-actions .icon-btn .material-symbols-outlined {\n  font-size: 20px;\n}\n.topbar-actions .avatar-circle {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  overflow: hidden;\n  background: white;\n  border: 2px solid white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.topbar-actions .avatar-circle img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.stats-row {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr);\n  gap: 24px;\n  margin-bottom: 40px;\n}\n.glass-card-strong {\n  background: var(--glass-bg-strong, rgba(255, 255, 255, 0.75));\n  backdrop-filter: blur(28px);\n  -webkit-backdrop-filter: blur(28px);\n  border-radius: 28px;\n  padding: 32px;\n  box-shadow: 0 24px 48px rgba(74, 75, 215, 0.08);\n  display: flex;\n  flex-direction: column;\n}\n.glass-card {\n  background: var(--glass-bg, rgba(255, 255, 255, 0.55));\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-radius: 24px;\n  padding: 32px;\n  box-shadow: 0 24px 48px rgba(74, 75, 215, 0.08);\n}\n.stat-label {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 1.1rem;\n  letter-spacing: 0.08em;\n  color: var(--text-muted);\n  margin-bottom: 12px;\n  display: block;\n}\n.stat-value {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: -0.03em;\n  margin: 0 0 16px 0;\n  line-height: 1;\n}\n.stat-trend {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.stat-trend.success {\n  color: var(--success);\n}\n.stat-trend .material-symbols-outlined {\n  font-size: 18px;\n}\n.mt-3 {\n  margin-top: 16px !important;\n}\n.warning-card {\n  position: relative;\n}\n.warning-card .card-header-flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.warning-card .icon-circle {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.warning-card .icon-circle.bg-pink {\n  background: rgba(239, 68, 68, 0.15);\n}\n.warning-card .icon-circle .text-error {\n  color: var(--error);\n}\n.warning-card .badge-urgent {\n  background: var(--error);\n  color: white;\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 600;\n  padding: 6px 12px;\n  border-radius: 100px;\n  letter-spacing: 0.05em;\n}\n.warning-card .stat-title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 16px 0;\n}\n.warning-card .bill-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-top: auto;\n}\n.warning-card .stat-value.error-text {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 2.2rem;\n  color: var(--error);\n  margin-bottom: 4px;\n}\n.warning-card .stat-sub {\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.warning-card .btn-dark-pill {\n  background: var(--text-primary);\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 100px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.warning-card .btn-dark-pill:hover {\n  transform: scale(1.05);\n}\n.reward-card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.reward-card .ambient-glow {\n  position: absolute;\n  top: -50px;\n  right: -50px;\n  width: 200px;\n  height: 200px;\n  background: rgba(167, 139, 250, 0.35);\n  filter: blur(60px);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.reward-card .icon-circle {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 32px;\n}\n.reward-card .icon-circle.bg-olive {\n  background: #e6edba;\n}\n.reward-card .icon-circle .text-green {\n  color: #5a7516;\n}\n.reward-card .reward-content {\n  text-align: center;\n  margin-top: auto;\n}\n.reward-card .reward-content .stat-value {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 2.8rem;\n  margin-bottom: 4px;\n}\n.reward-card .reward-content .stat-label {\n  margin-bottom: 12px;\n}\n.reward-card .reward-content .stat-sub {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin: 0;\n  line-height: 1.4;\n}\n.cards-section {\n  margin-bottom: 40px;\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 24px;\n}\n.section-header .section-title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: -0.03em;\n  margin: 0 0 4px 0;\n}\n.section-header .section-sub {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.section-header .link-primary {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: var(--primary);\n  text-decoration: none;\n}\n.section-header .link-primary:hover {\n  text-decoration: underline;\n}\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 28px;\n}\n.card-3d-wrapper {\n  cursor: pointer;\n  will-change: transform;\n  isolation: isolate;\n  border-radius: 20px;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.card-3d-wrapper:hover {\n  transform: scale(1.06);\n  z-index: 2;\n}\n.card-3d-wrapper:hover .digital-card {\n  box-shadow: 0 24px 56px rgba(0, 0, 0, 0.25);\n}\n.card-3d-wrapper:hover .card-eye-btn {\n  opacity: 1;\n}\n.digital-card {\n  position: relative;\n  height: 230px;\n  border-radius: 20px;\n  padding: 24px 24px 16px;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n  transition: box-shadow 0.3s ease;\n}\n.digital-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.12) 0%,\n      transparent 50%,\n      rgba(255, 255, 255, 0.04) 100%);\n  pointer-events: none;\n  border-radius: 20px;\n}\n.new-card-placeholder {\n  width: 100%;\n  aspect-ratio: 1.586/1;\n  border-radius: 20px;\n  border: 2px dashed rgba(107, 110, 249, 0.3);\n  background: rgba(255, 255, 255, 0.4);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.new-card-placeholder:hover {\n  border-color: var(--primary);\n  transform: scale(1.03);\n  background: rgba(255, 255, 255, 0.7);\n}\n.new-card-placeholder .add-circle {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: var(--primary-light);\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.new-card-placeholder .add-circle .material-symbols-outlined {\n  font-size: 28px;\n}\n.new-card-placeholder .new-card-title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--primary);\n  margin-bottom: 6px;\n}\n.new-card-placeholder .new-card-sub {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.emv-chip {\n  width: 42px;\n  height: 32px;\n  margin-bottom: 6px;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25));\n}\n.emv-chip svg {\n  width: 100%;\n  height: 100%;\n}\n.card-eye-btn {\n  position: absolute;\n  top: 18px;\n  right: 18px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 0.5;\n  transition: all 0.25s ease;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 5;\n}\n.card-eye-btn .material-symbols-outlined {\n  font-size: 18px;\n}\n.card-eye-btn:hover {\n  background: rgba(255, 255, 255, 0.25);\n  color: white;\n  opacity: 1;\n}\n.card-body-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 1;\n}\n.card-name-row {\n  margin-bottom: 12px;\n}\n.card-name-row .card-name {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  opacity: 0.8;\n}\n.card-middle .card-number {\n  font-family: "Space Grotesk", monospace;\n  font-size: 1.25rem;\n  letter-spacing: 0.2em;\n  margin-bottom: 12px;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);\n}\n.card-middle .card-details-row {\n  display: flex;\n  gap: 24px;\n}\n.card-middle .card-detail {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.card-middle .card-detail-label {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.55rem;\n  letter-spacing: 0.1em;\n  opacity: 0.6;\n}\n.card-middle .card-detail-value {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.78rem;\n  opacity: 0.9;\n  letter-spacing: 0.04em;\n}\n.card-brand-logo {\n  position: absolute;\n  bottom: 46px;\n  right: 24px;\n  z-index: 2;\n}\n.visa-logo {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 800;\n  font-style: italic;\n  color: white;\n  letter-spacing: 0.04em;\n  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n}\n.mastercard-logo {\n  display: flex;\n  position: relative;\n  width: 52px;\n  height: 32px;\n}\n.mastercard-logo .mc-circle {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n}\n.mastercard-logo .mc-red {\n  left: 0;\n  background: #EB001B;\n}\n.mastercard-logo .mc-orange {\n  left: 20px;\n  background: #F79E1B;\n  mix-blend-mode: hard-light;\n}\n.rupay-logo {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.02em;\n  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n}\n.card-bottom-bar {\n  margin-top: auto;\n  z-index: 1;\n}\n.card-bottom-bar .limit-header {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.6rem;\n  font-family: "Space Grotesk", sans-serif;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  opacity: 0.7;\n  margin-bottom: 6px;\n}\n.card-bottom-bar .limit-track {\n  height: 3px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 2px;\n  overflow: hidden;\n}\n.card-bottom-bar .limit-track .limit-bar {\n  height: 100%;\n  border-radius: 2px;\n  transition: width 0.6s ease;\n}\n.bottom-row {\n  display: flex;\n  gap: 24px;\n}\n.quick-actions {\n  flex: 1;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 32px !important;\n}\n.action-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n}\n.action-btn .action-circle {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.action-btn .action-circle .material-symbols-outlined {\n  font-size: 24px;\n  transition: color 0.3s ease;\n}\n.action-btn .bg-primary-light {\n  background: var(--primary-light);\n}\n.action-btn .text-primary {\n  color: var(--primary);\n}\n.action-btn .bg-secondary-light {\n  background: rgba(167, 139, 250, 0.15);\n}\n.action-btn .text-secondary {\n  color: var(--secondary);\n}\n.action-btn .bg-tertiary-light {\n  background: rgba(132, 204, 22, 0.15);\n}\n.action-btn .text-tertiary {\n  color: #84CC16;\n}\n.action-btn .bg-muted-light {\n  background: rgba(136, 136, 170, 0.15);\n}\n.action-btn .text-muted {\n  color: var(--text-muted);\n}\n.action-btn:hover .hover-primary {\n  background: var(--primary);\n}\n.action-btn:hover .hover-primary .material-symbols-outlined {\n  color: white;\n}\n.action-btn:hover .hover-secondary {\n  background: var(--secondary);\n}\n.action-btn:hover .hover-secondary .material-symbols-outlined {\n  color: white;\n}\n.action-btn:hover .hover-tertiary {\n  background: #84CC16;\n}\n.action-btn:hover .hover-tertiary .material-symbols-outlined {\n  color: white;\n}\n.action-btn:hover .hover-muted {\n  background: var(--text-muted);\n}\n.action-btn:hover .hover-muted .material-symbols-outlined {\n  color: white;\n}\n.action-btn .action-label {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  color: var(--text-secondary);\n}\n.insights-panel {\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n}\n.insights-panel .insights-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.insights-panel .insights-header .insights-title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.insights-panel .bar-chart {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  height: 120px;\n  margin-bottom: 20px;\n}\n.insights-panel .bar-chart .bar-wrapper {\n  width: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n.insights-panel .bar-chart .chart-bar {\n  width: 100%;\n  border-radius: 6px 6px 0 0;\n  transition: height 0.5s ease-out;\n  background: var(--primary);\n}\n.insights-panel .bar-chart .chart-bar.bar-primary {\n  background: var(--primary);\n  opacity: 0.9;\n}\n.insights-panel .bar-chart .chart-bar.bar-secondary {\n  background: var(--secondary);\n  opacity: 0.6;\n}\n.insights-panel .insights-footer {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  color: var(--text-muted);\n  text-align: center;\n}\n.insights-panel .insights-footer .text-primary-bold {\n  color: var(--primary);\n  font-weight: 700;\n  background: var(--primary-light);\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.fab-btn {\n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  box-shadow: 0 16px 32px rgba(107, 110, 249, 0.4);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  z-index: 100;\n}\n.fab-btn .material-symbols-outlined {\n  font-size: 28px;\n  font-variation-settings: "FILL" 1;\n}\n.fab-btn:hover {\n  transform: scale(1.1) rotate(5deg);\n}\n/*# sourceMappingURL=dashboard.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.ts", lineNumber: 20 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-TL5DU7XQ.js.map
