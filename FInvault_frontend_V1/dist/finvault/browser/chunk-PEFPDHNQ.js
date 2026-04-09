import {
  ThemeToggleComponent
} from "./chunk-AQGYU3VR.js";
import {
  NotificationService,
  SidebarComponent
} from "./chunk-JZ2MQXBK.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  HttpParams,
  Router,
  RouterLink,
  TitleCasePipe,
  __spreadProps,
  __spreadValues,
  catchError,
  computed,
  finalize,
  inject,
  of,
  setClassMetadata,
  signal,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SYL3PSAO.js";

// src/app/features/notifications/notifications.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.id;
function NotificationsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
    \u0275\u0275text(1, " Marking... ");
  }
}
function NotificationsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Mark All as Read ");
  }
}
function NotificationsComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 20);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_40_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fetchNotifications());
    });
    \u0275\u0275text(6, " Retry ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function NotificationsComponent_Conditional_41_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementStart(2, "div", 25);
    \u0275\u0275element(3, "div", 26)(4, "div", 27)(5, "div", 28);
    \u0275\u0275elementEnd()();
  }
}
function NotificationsComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, NotificationsComponent_Conditional_41_For_2_Template, 6, 0, "div", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function NotificationsComponent_Conditional_42_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_42_Conditional_0_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleFilter());
    });
    \u0275\u0275text(1, " View all notifications ");
    \u0275\u0275elementEnd();
  }
}
function NotificationsComponent_Conditional_42_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 31)(2, "span", 8);
    \u0275\u0275text(3, "notifications_off");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, NotificationsComponent_Conditional_42_Conditional_0_Conditional_8_Template, 2, 0, "button", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.filterUnread() ? "All caught up!" : "No notifications yet", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.filterUnread() ? "You have no unread notifications. Great job staying on top of things." : "When there is account activity, you will see your notifications here.", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.filterUnread() ? 8 : -1);
  }
}
function NotificationsComponent_Conditional_42_Conditional_1_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "New");
    \u0275\u0275elementEnd();
  }
}
function NotificationsComponent_Conditional_42_Conditional_1_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44)(1, "span", 52);
    \u0275\u0275text(2, "arrow_forward");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notif_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", notif_r5.type === "PAYMENT" ? "Go to Payments" : "Go to Profile", " ");
  }
}
function NotificationsComponent_Conditional_42_Conditional_1_For_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48)(1, "span", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notif_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", notif_r5.channel === "EMAIL" ? "email" : notif_r5.channel === "SMS" ? "sms" : "hub", " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" via ", \u0275\u0275pipeBind1(4, 2, notif_r5.channel), " ");
  }
}
function NotificationsComponent_Conditional_42_Conditional_1_For_2_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 55);
  }
}
function NotificationsComponent_Conditional_42_Conditional_1_For_2_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function NotificationsComponent_Conditional_42_Conditional_1_For_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_42_Conditional_1_For_2_Conditional_22_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const notif_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.markAsRead(notif_r5.id));
    });
    \u0275\u0275conditionalCreate(1, NotificationsComponent_Conditional_42_Conditional_1_For_2_Conditional_22_Conditional_1_Template, 1, 0, "span", 55)(2, NotificationsComponent_Conditional_42_Conditional_1_For_2_Conditional_22_Conditional_2_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notif_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.isBeingMarked(notif_r5.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isBeingMarked(notif_r5.id) ? 1 : 2);
  }
}
function NotificationsComponent_Conditional_42_Conditional_1_For_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51)(1, "span", 8);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function NotificationsComponent_Conditional_42_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 37);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_42_Conditional_1_For_2_Template_article_click_0_listener() {
      const notif_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onNotificationClick(notif_r5));
    });
    \u0275\u0275elementStart(1, "div")(2, "span", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 39)(5, "div", 40)(6, "div", 41)(7, "span", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, NotificationsComponent_Conditional_42_Conditional_1_For_2_Conditional_11_Template, 2, 0, "span", 43);
    \u0275\u0275conditionalCreate(12, NotificationsComponent_Conditional_42_Conditional_1_For_2_Conditional_12_Template, 4, 1, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "time", 45);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "h3", 46);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 47);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, NotificationsComponent_Conditional_42_Conditional_1_For_2_Conditional_20_Template, 5, 4, "span", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 49);
    \u0275\u0275conditionalCreate(22, NotificationsComponent_Conditional_42_Conditional_1_For_2_Conditional_22_Template, 3, 2, "button", 50)(23, NotificationsComponent_Conditional_42_Conditional_1_For_2_Conditional_23_Template, 3, 0, "span", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notif_r5 = ctx.$implicit;
    const \u0275$index_123_r7 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("animation-delay", \u0275$index_123_r7 * 0.06 + "s");
    \u0275\u0275classProp("notification-card--unread", !notif_r5.isRead)("notification-card--marking", ctx_r1.isBeingMarked(notif_r5.id))("notification-card--actionable", ctx_r1.isActionable(notif_r5.type));
    \u0275\u0275attribute("aria-label", notif_r5.title);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getTypeIconClass(notif_r5.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTypeIcon(notif_r5.type), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(notif_r5.type);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getPriorityClass(notif_r5.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", notif_r5.priority, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!notif_r5.isRead ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isActionable(notif_r5.type) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind2(14, 25, notif_r5.createdAt, "medium"));
    \u0275\u0275attribute("datetime", notif_r5.createdAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(notif_r5.createdAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r5.message);
    \u0275\u0275advance();
    \u0275\u0275conditional(notif_r5.channel ? 20 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!notif_r5.isRead ? 22 : 23);
  }
}
function NotificationsComponent_Conditional_42_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275repeaterCreate(1, NotificationsComponent_Conditional_42_Conditional_1_For_2_Template, 24, 28, "article", 36, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.displayedNotifications());
  }
}
function NotificationsComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NotificationsComponent_Conditional_42_Conditional_0_Template, 9, 3, "div", 29)(1, NotificationsComponent_Conditional_42_Conditional_1_Template, 3, 0, "div", 30);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.displayedNotifications().length === 0 ? 0 : 1);
  }
}
var NotificationsComponent = class _NotificationsComponent {
  http = inject(HttpClient);
  router = inject(Router);
  BASE_URL = "/api/notifications";
  notificationService = inject(NotificationService);
  // -- Signals ------------------------------------------------------------------
  notifications = signal([], ...ngDevMode ? [{ debugName: "notifications" }] : (
    /* istanbul ignore next */
    []
  ));
  unreadCount = signal(0, ...ngDevMode ? [{ debugName: "unreadCount" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  isMarkingAll = signal(false, ...ngDevMode ? [{ debugName: "isMarkingAll" }] : (
    /* istanbul ignore next */
    []
  ));
  markingIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "markingIds" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  filterUnread = signal(false, ...ngDevMode ? [{ debugName: "filterUnread" }] : (
    /* istanbul ignore next */
    []
  ));
  // -- Computed -----------------------------------------------------------------
  displayedNotifications = computed(() => {
    const all = this.notifications();
    return this.filterUnread() ? all.filter((n) => !n.isRead) : all;
  }, ...ngDevMode ? [{ debugName: "displayedNotifications" }] : (
    /* istanbul ignore next */
    []
  ));
  hasUnread = computed(() => this.unreadCount() > 0, ...ngDevMode ? [{ debugName: "hasUnread" }] : (
    /* istanbul ignore next */
    []
  ));
  // --- Lifecycle ----------------------------------------------------------------
  ngOnInit() {
    this.fetchNotifications();
    this.fetchUnreadCount();
  }
  // --- JWT userId helper --------------------------------------------------------
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
  // --- API Calls ----------------------------------------------------------------
  fetchNotifications() {
    const userId = this.getUserId();
    this.isLoading.set(true);
    this.errorMessage.set(null);
    const params = new HttpParams().set("page", "1").set("pageSize", "20");
    const url = userId ? `${this.BASE_URL}/user/${userId}` : null;
    if (!url) {
      this.isLoading.set(false);
      return;
    }
    this.http.get(url, { params }).pipe(tap((res) => {
      if (res.success) {
        this.notifications.set(res.data ?? []);
      } else {
        this.errorMessage.set(res.message ?? "Failed to load notifications.");
      }
    }), catchError((err) => {
      console.error("fetchNotifications error:", err);
      this.errorMessage.set("Unable to reach the notification service. Please try again.");
      return of(null);
    }), finalize(() => this.isLoading.set(false))).subscribe();
  }
  fetchUnreadCount() {
    const userId = this.getUserId();
    if (!userId)
      return;
    this.http.get(`${this.BASE_URL}/user/${userId}/unread-count`).pipe(tap((res) => {
      if (res.success) {
        this.unreadCount.set(res.data ?? 0);
        this.notificationService.setUnreadCount(res.data ?? 0);
      }
    }), catchError((err) => {
      console.error("fetchUnreadCount error:", err);
      return of(null);
    })).subscribe();
  }
  markAsRead(notificationId) {
    const current = new Set(this.markingIds());
    current.add(notificationId);
    this.markingIds.set(current);
    this.http.put(`${this.BASE_URL}/${notificationId}/read`, {}).pipe(tap((res) => {
      if (res.success) {
        this.notifications.update((list) => list.map((n) => n.id === notificationId ? __spreadProps(__spreadValues({}, n), { isRead: true, readAt: (/* @__PURE__ */ new Date()).toISOString() }) : n));
        this.unreadCount.update((c) => Math.max(0, c - 1));
        this.notificationService.decrementUnreadCount();
      }
    }), catchError((err) => {
      console.error("markAsRead error:", err);
      return of(null);
    }), finalize(() => {
      const updated = new Set(this.markingIds());
      updated.delete(notificationId);
      this.markingIds.set(updated);
    })).subscribe();
  }
  markAllAsRead() {
    const userId = this.getUserId();
    if (!userId)
      return;
    this.isMarkingAll.set(true);
    this.http.put(`${this.BASE_URL}/user/${userId}/read-all`, {}).pipe(tap((res) => {
      if (res.success) {
        this.notifications.update((list) => list.map((n) => __spreadProps(__spreadValues({}, n), {
          isRead: true,
          readAt: (/* @__PURE__ */ new Date()).toISOString()
        })));
        this.unreadCount.set(0);
        this.notificationService.setUnreadCount(0);
      }
    }), catchError((err) => {
      console.error("markAllAsRead error:", err);
      return of(null);
    }), finalize(() => this.isMarkingAll.set(false))).subscribe();
  }
  // --- Notification click -> navigate by type ------------------------------------
  onNotificationClick(notif) {
    if (!notif.isRead) {
      this.markAsRead(notif.id);
    }
    switch (notif.type?.toUpperCase()) {
      case "PAYMENT":
        this.router.navigate(["/payments"]);
        break;
      case "SECURITY":
        this.router.navigate(["/profile"]);
        break;
      default:
        break;
    }
  }
  // --- UI Helpers ---------------------------------------------------------------
  toggleFilter() {
    this.filterUnread.update((v) => !v);
  }
  isBeingMarked(id) {
    return this.markingIds().has(id);
  }
  getTypeIcon(type) {
    switch (type?.toUpperCase()) {
      case "PAYMENT":
        return "payments";
      case "SECURITY":
        return "shield";
      case "SYSTEM":
        return "settings";
      default:
        return "notifications";
    }
  }
  getTypeIconClass(type) {
    switch (type?.toUpperCase()) {
      case "PAYMENT":
        return "notif-icon-wrap icon--payment";
      case "SECURITY":
        return "notif-icon-wrap icon--security";
      case "SYSTEM":
        return "notif-icon-wrap icon--system";
      default:
        return "notif-icon-wrap icon--default";
    }
  }
  getPriorityClass(priority) {
    switch (priority?.toUpperCase()) {
      case "HIGH":
        return "tag priority--high";
      case "MEDIUM":
        return "tag priority--medium";
      case "LOW":
        return "tag priority--low";
      default:
        return "tag";
    }
  }
  isActionable(type) {
    const t = type?.toUpperCase();
    return t === "PAYMENT" || t === "SECURITY";
  }
  formatDate(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    const now = /* @__PURE__ */ new Date();
    const diff = now.getTime() - date.getTime();
    const mins = Math.floor(diff / 6e4);
    const hours = Math.floor(diff / 36e5);
    const days = Math.floor(diff / 864e5);
    if (mins < 1)
      return "Just now";
    if (mins < 60)
      return `${mins}m ago`;
    if (hours < 24)
      return `${hours}h ago`;
    if (days < 7)
      return `${days}d ago`;
    return date.toLocaleDateString("en-IN", {
      month: "short",
      day: "numeric",
      year: date.getFullYear() !== now.getFullYear() ? "numeric" : void 0
    });
  }
  trackById(_, item) {
    return item.id;
  }
  static \u0275fac = function NotificationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsComponent, selectors: [["app-notifications"]], decls: 43, vars: 12, consts: [[1, "finvault-shell"], [1, "main-content"], [1, "page-header"], [1, "page-header__text"], [1, "page-header__title"], [1, "page-header__subtitle"], [1, "page-header__actions"], ["aria-label", "Toggle unread filter", 1, "btn", "btn--ghost", 3, "click", "disabled"], [1, "material-symbols-outlined"], ["aria-label", "Mark all notifications as read", 1, "btn", "btn--primary", 3, "click", "disabled"], [1, "stats-strip"], [1, "stat-pill"], [1, "stat-pill__icon", "material-symbols-outlined"], [1, "stat-pill__value"], [1, "stat-pill__label"], [1, "stat-pill", "stat-pill--accent"], [1, "stat-pill", "stat-pill--success"], ["role", "alert", 1, "error-banner"], ["aria-label", "Loading notifications", "aria-busy", "true", 1, "notification-list"], [1, "btn__spinner"], [1, "material-symbols-outlined", "error-banner__icon"], [1, "error-banner__text"], [1, "btn", "btn--ghost", "btn--sm", 3, "click"], [1, "notification-card", "notification-card--skeleton"], [1, "skeleton", "skeleton--icon"], [1, "skeleton-body"], [1, "skeleton", "skeleton--title"], [1, "skeleton", "skeleton--text"], [1, "skeleton", "skeleton--text", "skeleton--text-short"], [1, "empty-state"], ["role", "list", 1, "notification-list"], [1, "empty-state__icon"], [1, "empty-state__title"], [1, "empty-state__text"], [1, "btn", "btn--ghost"], [1, "btn", "btn--ghost", 3, "click"], ["role", "listitem", 1, "notification-card", 3, "notification-card--unread", "notification-card--marking", "notification-card--actionable", "animation-delay"], ["role", "listitem", 1, "notification-card", 3, "click"], [1, "material-symbols-outlined", "notif-icon"], [1, "notif-body"], [1, "notif-meta"], [1, "notif-tags"], [1, "tag", "tag--type"], [1, "tag", "tag--unread"], [1, "tag", "tag--action"], [1, "notif-time", 3, "title"], [1, "notif-title"], [1, "notif-message"], [1, "notif-channel"], [1, "notif-actions"], ["aria-label", "Mark as read", "title", "Mark as read", 1, "icon-btn", "icon-btn--read", 3, "disabled"], ["title", "Read", 1, "read-badge"], [1, "material-symbols-outlined", 2, "font-size", "12px", "vertical-align", "middle"], [1, "material-symbols-outlined", "notif-channel__icon"], ["aria-label", "Mark as read", "title", "Mark as read", 1, "icon-btn", "icon-btn--read", 3, "click", "disabled"], [1, "btn__spinner", "btn__spinner--sm"]], template: function NotificationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1)(3, "header", 2)(4, "div", 3)(5, "h1", 4);
      \u0275\u0275text(6, "Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " Stay updated on your account activity and security alerts. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275element(10, "app-theme-toggle");
      \u0275\u0275elementStart(11, "button", 7);
      \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_11_listener() {
        return ctx.toggleFilter();
      });
      \u0275\u0275elementStart(12, "span", 8);
      \u0275\u0275text(13, "filter_list");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 9);
      \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_15_listener() {
        return ctx.markAllAsRead();
      });
      \u0275\u0275conditionalCreate(16, NotificationsComponent_Conditional_16_Template, 2, 0)(17, NotificationsComponent_Conditional_17_Template, 3, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 10)(19, "div", 11)(20, "span", 12);
      \u0275\u0275text(21, "inbox");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 13);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 14);
      \u0275\u0275text(25, "Total");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 15)(27, "span", 12);
      \u0275\u0275text(28, "mark_email_unread");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 13);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 14);
      \u0275\u0275text(32, "Unread");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 16)(34, "span", 12);
      \u0275\u0275text(35, "mark_email_read");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 13);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span", 14);
      \u0275\u0275text(39, "Read");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(40, NotificationsComponent_Conditional_40_Template, 7, 1, "div", 17);
      \u0275\u0275conditionalCreate(41, NotificationsComponent_Conditional_41_Template, 3, 1, "div", 18);
      \u0275\u0275conditionalCreate(42, NotificationsComponent_Conditional_42_Template, 2, 1);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275classProp("btn--ghost-active", ctx.filterUnread());
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.filterUnread() ? "Show All" : "Unread Only", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isMarkingAll() || !ctx.hasUnread() || ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isMarkingAll() ? 16 : 17);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.notifications().length);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.unreadCount());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.notifications().length - ctx.unreadCount());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.errorMessage() ? 40 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 41 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading() ? 42 : -1);
    }
  }, dependencies: [CommonModule, SidebarComponent, ThemeToggleComponent, TitleCasePipe, DatePipe], styles: ['@import "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap";\n\n\n[_ngcontent-%COMP%]:root {\n  --primary: #6B6EF9;\n  --primary-light: #8b8efb;\n  --primary-glow: rgba(107, 110, 249, 0.25);\n  --primary-tint: rgba(107, 110, 249, 0.08);\n  --secondary: #A78BFA;\n  --text-primary: #1A1A2E;\n  --text-secondary: #3d3d5c;\n  --text-muted: #8888AA;\n  --glass-bg: rgba(255, 255, 255, 0.55);\n  --glass-bg-strong: rgba(255, 255, 255, 0.75);\n  --glass-border: rgba(255, 255, 255, 0.6);\n  --glass-shadow: 0 8px 32px rgba(107, 110, 249, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);\n  --success: #22C55E;\n  --success-light: rgba(34, 197, 94, 0.12);\n  --error: #EF4444;\n  --error-light: rgba(239, 68, 68, 0.12);\n  --warning: #F59E0B;\n  --warning-light: rgba(245, 158, 11, 0.12);\n  --surface: #F0F2FF;\n  --sidebar-width: 252px;\n  --border-radius-lg: 20px;\n  --border-radius-md: 14px;\n  --border-radius-sm: 8px;\n  --transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-med: 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-slow: 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.finvault-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  background: var(--surface);\n  background-image:\n    radial-gradient(\n      ellipse 80% 60% at 70% -10%,\n      rgba(167, 139, 250, 0.18) 0%,\n      transparent 60%),\n    radial-gradient(\n      ellipse 50% 40% at 5% 90%,\n      rgba(107, 110, 249, 0.12) 0%,\n      transparent 55%);\n  color: var(--text-primary);\n  -webkit-font-smoothing: antialiased;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 100vh;\n  background: var(--glass-bg);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  display: flex;\n  flex-direction: column;\n  padding: 32px 20px;\n  z-index: 50;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  padding-left: 12px;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: -0.04em;\n  display: block;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--text-secondary);\n  margin-top: -2px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  text-decoration: none;\n  color: var(--text-secondary);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 500;\n  font-size: 0.95rem;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.nav-item[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.8;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n}\n.nav-item.active[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  opacity: 1;\n  font-variation-settings: "FILL" 1;\n}\n.sidebar-promo[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.4);\n  text-align: center;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .promo-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n  margin-bottom: 16px;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .btn-upgrade[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .btn-upgrade[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.notif-badge[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 20px;\n  margin-left: auto;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(107, 110, 249, 0.4);\n}\n.main-content[_ngcontent-%COMP%] {\n  margin-left: 300px;\n  flex: 1;\n  padding: 36px 40px;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.page-header__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.page-header__title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 800;\n  letter-spacing: -0.6px;\n  color: var(--text-primary);\n  line-height: 1.1;\n}\n.page-header__subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  font-weight: 400;\n  max-width: 420px;\n  line-height: 1.5;\n}\n.page-header__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n.stats-strip[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.stat-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: 50px;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid var(--glass-border);\n  box-shadow: var(--glass-shadow);\n  font-family: "Space Grotesk", sans-serif;\n}\n.stat-pill__icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 20;\n}\n.stat-pill__value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1;\n}\n.stat-pill__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.stat-pill--accent[_ngcontent-%COMP%] {\n  background: var(--primary-tint);\n  border-color: rgba(107, 110, 249, 0.2);\n}\n.stat-pill--accent[_ngcontent-%COMP%]   .stat-pill__icon[_ngcontent-%COMP%], \n.stat-pill--accent[_ngcontent-%COMP%]   .stat-pill__value[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.stat-pill--success[_ngcontent-%COMP%] {\n  background: var(--success-light);\n  border-color: rgba(34, 197, 94, 0.2);\n}\n.stat-pill--success[_ngcontent-%COMP%]   .stat-pill__icon[_ngcontent-%COMP%], \n.stat-pill--success[_ngcontent-%COMP%]   .stat-pill__value[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  transition:\n    background var(--transition-fast),\n    box-shadow var(--transition-fast),\n    transform var(--transition-fast),\n    opacity var(--transition-fast);\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.btn[_ngcontent-%COMP%]:not(:disabled):active {\n  transform: scale(0.97);\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: #fff;\n  box-shadow: 0 4px 16px var(--primary-glow);\n}\n.btn--primary[_ngcontent-%COMP%]:not(:disabled):hover {\n  box-shadow: 0 6px 24px rgba(107, 110, 249, 0.45);\n  transform: translateY(-1px);\n}\n.btn--ghost[_ngcontent-%COMP%] {\n  background: var(--glass-bg-strong);\n  color: var(--text-secondary);\n  border-color: var(--glass-border);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n}\n.btn--ghost[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: rgba(255, 255, 255, 0.85);\n  border-color: rgba(107, 110, 249, 0.3);\n  color: var(--primary);\n}\n.btn--ghost-active[_ngcontent-%COMP%] {\n  background: var(--primary-tint);\n  border-color: rgba(107, 110, 249, 0.3);\n  color: var(--primary);\n}\n.btn--sm[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  font-size: 12px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all var(--transition-fast);\n  flex-shrink: 0;\n}\n.icon-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.icon-btn--read[_ngcontent-%COMP%] {\n  background: var(--primary-tint);\n  color: var(--primary);\n}\n.icon-btn--read[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: var(--primary);\n  color: #fff;\n  box-shadow: 0 4px 14px var(--primary-glow);\n  transform: scale(1.08);\n}\n.read-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n}\n.read-badge[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--success);\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  opacity: 0.5;\n}\n.notification-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.notification-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 20px 22px;\n  border-radius: var(--border-radius-lg);\n  background: rgba(255, 255, 255, 0.7);\n  backdrop-filter: blur(20px) saturate(150%);\n  -webkit-backdrop-filter: blur(20px) saturate(150%);\n  border: 1px solid var(--glass-border);\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.04);\n  transition:\n    box-shadow var(--transition-med),\n    transform var(--transition-med),\n    background var(--transition-med);\n  animation: _ngcontent-%COMP%_slide-in var(--transition-slow) both;\n}\n.notification-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 32px rgba(107, 110, 249, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06);\n  transform: translateY(-2px);\n}\n.notification-card--unread[_ngcontent-%COMP%] {\n  background: rgba(107, 110, 249, 0.05);\n  border-color: rgba(107, 110, 249, 0.18);\n  border-left: 3px solid var(--primary);\n}\n.notification-card--unread[_ngcontent-%COMP%]:hover {\n  background: rgba(107, 110, 249, 0.08);\n  box-shadow: 0 8px 32px rgba(107, 110, 249, 0.14), 0 0 0 1px rgba(107, 110, 249, 0.12);\n}\n.notification-card--marking[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  pointer-events: none;\n}\n.notification-card--actionable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.notification-card--actionable[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  background: rgba(107, 110, 249, 0.08);\n}\n.notification-card--actionable[_ngcontent-%COMP%]:hover   .notif-title[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.notification-card--actionable[_ngcontent-%COMP%]:hover   .tag--action[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n  border-color: var(--primary);\n}\n.notification-card--skeleton[_ngcontent-%COMP%] {\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_skeleton-pulse 1.4s ease-in-out infinite;\n}\n.notif-icon-wrap[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.notif-icon-wrap.icon--payment[_ngcontent-%COMP%] {\n  background: var(--success-light);\n}\n.notif-icon-wrap.icon--payment[_ngcontent-%COMP%]   .notif-icon[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.notif-icon-wrap.icon--security[_ngcontent-%COMP%] {\n  background: var(--error-light);\n}\n.notif-icon-wrap.icon--security[_ngcontent-%COMP%]   .notif-icon[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.notif-icon-wrap.icon--system[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n}\n.notif-icon-wrap.icon--system[_ngcontent-%COMP%]   .notif-icon[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.notif-icon-wrap.icon--default[_ngcontent-%COMP%] {\n  background: var(--primary-tint);\n}\n.notif-icon-wrap.icon--default[_ngcontent-%COMP%]   .notif-icon[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.notif-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.notif-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.notif-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 2px;\n}\n.notif-tags[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.tag[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 10.5px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  padding: 3px 8px;\n  border-radius: 20px;\n  line-height: 1;\n}\n.tag--type[_ngcontent-%COMP%] {\n  background: var(--primary-tint);\n  color: var(--primary);\n}\n.tag--unread[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: #fff;\n  box-shadow: 0 2px 8px var(--primary-glow);\n  animation: _ngcontent-%COMP%_badge-pop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.tag--action[_ngcontent-%COMP%] {\n  background: var(--glass-bg-strong);\n  color: var(--text-muted);\n  border: 1px solid var(--glass-border);\n  transition:\n    background var(--transition-fast),\n    color var(--transition-fast),\n    border-color var(--transition-fast);\n  padding: 3px 10px;\n}\n.priority--high[_ngcontent-%COMP%] {\n  background: var(--error-light);\n  color: var(--error);\n}\n.priority--medium[_ngcontent-%COMP%] {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.priority--low[_ngcontent-%COMP%] {\n  background: var(--success-light);\n  color: var(--success);\n}\n.notif-time[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 11.5px;\n  font-weight: 500;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.notif-title[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: -0.1px;\n  line-height: 1.3;\n}\n.notif-message[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--text-muted);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.notif-channel[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.notif-channel__icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 20;\n}\n.notif-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-radius: var(--border-radius-md);\n  background: var(--error-light);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: var(--error);\n  font-size: 13.5px;\n  font-weight: 500;\n}\n.error-banner__icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  flex-shrink: 0;\n}\n.error-banner__text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.error-banner[_ngcontent-%COMP%]   .btn--ghost[_ngcontent-%COMP%] {\n  color: var(--error);\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.error-banner[_ngcontent-%COMP%]   .btn--ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.08);\n  border-color: var(--error);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 80px 40px;\n  gap: 16px;\n}\n.empty-state__icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 22px;\n  background: var(--primary-tint);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 4px;\n}\n.empty-state__icon[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: var(--primary);\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 40;\n}\n.empty-state__title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: -0.3px;\n}\n.empty-state__text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  max-width: 320px;\n  line-height: 1.6;\n}\n.skeleton-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 4px;\n}\n.skeleton[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(107, 110, 249, 0.07) 25%,\n      rgba(107, 110, 249, 0.12) 50%,\n      rgba(107, 110, 249, 0.07) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_skeleton-shimmer 1.6s infinite;\n}\n.skeleton--icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  flex-shrink: 0;\n}\n.skeleton--title[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 55%;\n}\n.skeleton--text[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 85%;\n}\n.skeleton--text-short[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.btn__spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.65s linear infinite;\n  flex-shrink: 0;\n}\n.btn__spinner--sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border-color: rgba(107, 110, 249, 0.25);\n  border-top-color: var(--primary);\n}\n@keyframes _ngcontent-%COMP%_slide-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_badge-pop {\n  0% {\n    transform: scale(0.6);\n  }\n  70% {\n    transform: scale(1.15);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_skeleton-shimmer {\n  to {\n    background-position: -200% 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_skeleton-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 900px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 68px;\n    padding: 20px 10px;\n  }\n  .sidebar__brand-name[_ngcontent-%COMP%], \n   .sidebar__nav-label[_ngcontent-%COMP%], \n   .sidebar__user-info[_ngcontent-%COMP%], \n   .sidebar__badge[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sidebar__brand-logo[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n  .sidebar__brand[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .sidebar__footer[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 10px;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n}\n@media (max-width: 600px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 14px;\n  }\n  .notification-card[_ngcontent-%COMP%] {\n    padding: 16px;\n    gap: 12px;\n  }\n  .notif-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=notifications.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsComponent, [{
    type: Component,
    args: [{ selector: "app-notifications", standalone: true, imports: [CommonModule, RouterLink, SidebarComponent, ThemeToggleComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="finvault-shell">\r
\r
    <!-- SIDEBAR -->\r
    <app-sidebar />\r
\r
    <!-- --------------------------*\x90 MAIN CONTENT ----------------------*\x90 -->\r
    <main class="main-content">\r
\r
        <!-- -- Page Header ----------------------------------------------- -->\r
        <header class="page-header">\r
            <div class="page-header__text">\r
                <h1 class="page-header__title">Notifications</h1>\r
                <p class="page-header__subtitle">\r
                    Stay updated on your account activity and security alerts.\r
                </p>\r
            </div>\r
\r
            <div class="page-header__actions">\r
                <app-theme-toggle />\r
                <!-- Filter toggle -->\r
                <button class="btn btn--ghost" [class.btn--ghost-active]="filterUnread()" (click)="toggleFilter()"\r
                    [disabled]="isLoading()" aria-label="Toggle unread filter">\r
                    <span class="material-symbols-outlined">filter_list</span>\r
                    {{ filterUnread() ? 'Show All' : 'Unread Only' }}\r
                </button>\r
\r
                <!-- Mark All Read -->\r
                <button class="btn btn--primary" (click)="markAllAsRead()"\r
                    [disabled]="isMarkingAll() || !hasUnread() || isLoading()"\r
                    aria-label="Mark all notifications as read">\r
                    @if (isMarkingAll()) {\r
                    <span class="btn__spinner"></span>\r
                    Marking...\r
                    } @else {\r
                    <span class="material-symbols-outlined">done_all</span>\r
                    Mark All as Read\r
                    }\r
                </button>\r
            </div>\r
        </header>\r
\r
        <!-- -- Stats Strip ------------------------------------------------ -->\r
        <div class="stats-strip">\r
            <div class="stat-pill">\r
                <span class="stat-pill__icon material-symbols-outlined">inbox</span>\r
                <span class="stat-pill__value">{{ notifications().length }}</span>\r
                <span class="stat-pill__label">Total</span>\r
            </div>\r
            <div class="stat-pill stat-pill--accent">\r
                <span class="stat-pill__icon material-symbols-outlined">mark_email_unread</span>\r
                <span class="stat-pill__value">{{ unreadCount() }}</span>\r
                <span class="stat-pill__label">Unread</span>\r
            </div>\r
            <div class="stat-pill stat-pill--success">\r
                <span class="stat-pill__icon material-symbols-outlined">mark_email_read</span>\r
                <span class="stat-pill__value">{{ notifications().length - unreadCount() }}</span>\r
                <span class="stat-pill__label">Read</span>\r
            </div>\r
        </div>\r
\r
        <!-- -- Error Banner ----------------------------------------------- -->\r
        @if (errorMessage()) {\r
        <div class="error-banner" role="alert">\r
            <span class="material-symbols-outlined error-banner__icon">error_outline</span>\r
            <span class="error-banner__text">{{ errorMessage() }}</span>\r
            <button class="btn btn--ghost btn--sm" (click)="fetchNotifications()">\r
                Retry\r
            </button>\r
        </div>\r
        }\r
\r
        <!-- -- Loading Skeleton ------------------------------------------- -->\r
        @if (isLoading()) {\r
        <div class="notification-list" aria-label="Loading notifications" aria-busy="true">\r
            @for (i of [1,2,3,4,5]; track i) {\r
            <div class="notification-card notification-card--skeleton">\r
                <div class="skeleton skeleton--icon"></div>\r
                <div class="skeleton-body">\r
                    <div class="skeleton skeleton--title"></div>\r
                    <div class="skeleton skeleton--text"></div>\r
                    <div class="skeleton skeleton--text skeleton--text-short"></div>\r
                </div>\r
            </div>\r
            }\r
        </div>\r
        }\r
\r
        <!-- -- Notification Feed ------------------------------------------ -->\r
        @if (!isLoading()) {\r
        @if (displayedNotifications().length === 0) {\r
        <div class="empty-state">\r
            <div class="empty-state__icon">\r
                <span class="material-symbols-outlined">notifications_off</span>\r
            </div>\r
            <h3 class="empty-state__title">\r
                {{ filterUnread() ? 'All caught up!' : 'No notifications yet' }}\r
            </h3>\r
            <p class="empty-state__text">\r
                {{ filterUnread()\r
                ? 'You have no unread notifications. Great job staying on top of things.'\r
                : 'When there is account activity, you will see your notifications here.' }}\r
            </p>\r
            @if (filterUnread()) {\r
            <button class="btn btn--ghost" (click)="toggleFilter()">\r
                View all notifications\r
            </button>\r
            }\r
        </div>\r
        } @else {\r
        <div class="notification-list" role="list">\r
            @for (notif of displayedNotifications(); track notif.id; let idx = $index) {\r
            <article class="notification-card"\r
                [class.notification-card--unread]="!notif.isRead"\r
                [class.notification-card--marking]="isBeingMarked(notif.id)"\r
                [class.notification-card--actionable]="isActionable(notif.type)"\r
                role="listitem"\r
                [attr.aria-label]="notif.title"\r
                [style.animation-delay]="(idx * 0.06) + 's'"\r
                (click)="onNotificationClick(notif)">\r
                <!-- Type Icon -->\r
                <div [class]="getTypeIconClass(notif.type)">\r
                    <span class="material-symbols-outlined notif-icon">\r
                        {{ getTypeIcon(notif.type) }}\r
                    </span>\r
                </div>\r
\r
                <!-- Body -->\r
                <div class="notif-body">\r
                    <div class="notif-meta">\r
                        <div class="notif-tags">\r
                            <span class="tag tag--type">{{ notif.type }}</span>\r
                            <span [class]="getPriorityClass(notif.priority)">\r
                                {{ notif.priority }}\r
                            </span>\r
                            @if (!notif.isRead) {\r
                            <span class="tag tag--unread">New</span>\r
                            }\r
                            @if (isActionable(notif.type)) {\r
                            <span class="tag tag--action">\r
                                <span class="material-symbols-outlined" style="font-size:12px;vertical-align:middle;">arrow_forward</span>\r
                                {{ notif.type === 'PAYMENT' ? 'Go to Payments' : 'Go to Profile' }}\r
                            </span>\r
                            }\r
                        </div>\r
                        <time class="notif-time" [attr.datetime]="notif.createdAt"\r
                            [title]="notif.createdAt | date:'medium'">\r
                            {{ formatDate(notif.createdAt) }}\r
                        </time>\r
                    </div>\r
\r
                    <h3 class="notif-title">{{ notif.title }}</h3>\r
                    <p class="notif-message">{{ notif.message }}</p>\r
\r
                    @if (notif.channel) {\r
                    <span class="notif-channel">\r
                        <span class="material-symbols-outlined notif-channel__icon">\r
                            {{ notif.channel === 'EMAIL' ? 'email' : notif.channel === 'SMS' ? 'sms' : 'hub' }}\r
                        </span>\r
                        via {{ notif.channel | titlecase }}\r
                    </span>\r
                    }\r
                </div>\r
\r
                <!-- Actions -->\r
                <div class="notif-actions">\r
                    @if (!notif.isRead) {\r
                    <button class="icon-btn icon-btn--read" (click)="$event.stopPropagation(); markAsRead(notif.id)"\r
                        [disabled]="isBeingMarked(notif.id)" aria-label="Mark as read" title="Mark as read">\r
                        @if (isBeingMarked(notif.id)) {\r
                        <span class="btn__spinner btn__spinner--sm"></span>\r
                        } @else {\r
                        <span class="material-symbols-outlined">check_circle</span>\r
                        }\r
                    </button>\r
                    } @else {\r
                    <span class="read-badge" title="Read">\r
                        <span class="material-symbols-outlined">check_circle</span>\r
                    </span>\r
                    }\r
                </div>\r
            </article>\r
            }\r
        </div>\r
        }\r
        }\r
\r
    </main>\r
</div>\r
\r
`, styles: ['@import "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap";\n\n/* src/app/features/notifications/notifications.scss */\n:root {\n  --primary: #6B6EF9;\n  --primary-light: #8b8efb;\n  --primary-glow: rgba(107, 110, 249, 0.25);\n  --primary-tint: rgba(107, 110, 249, 0.08);\n  --secondary: #A78BFA;\n  --text-primary: #1A1A2E;\n  --text-secondary: #3d3d5c;\n  --text-muted: #8888AA;\n  --glass-bg: rgba(255, 255, 255, 0.55);\n  --glass-bg-strong: rgba(255, 255, 255, 0.75);\n  --glass-border: rgba(255, 255, 255, 0.6);\n  --glass-shadow: 0 8px 32px rgba(107, 110, 249, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);\n  --success: #22C55E;\n  --success-light: rgba(34, 197, 94, 0.12);\n  --error: #EF4444;\n  --error-light: rgba(239, 68, 68, 0.12);\n  --warning: #F59E0B;\n  --warning-light: rgba(245, 158, 11, 0.12);\n  --surface: #F0F2FF;\n  --sidebar-width: 252px;\n  --border-radius-lg: 20px;\n  --border-radius-md: 14px;\n  --border-radius-sm: 8px;\n  --transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-med: 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-slow: 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.finvault-shell {\n  display: flex;\n  min-height: 100vh;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  background: var(--surface);\n  background-image:\n    radial-gradient(\n      ellipse 80% 60% at 70% -10%,\n      rgba(167, 139, 250, 0.18) 0%,\n      transparent 60%),\n    radial-gradient(\n      ellipse 50% 40% at 5% 90%,\n      rgba(107, 110, 249, 0.12) 0%,\n      transparent 55%);\n  color: var(--text-primary);\n  -webkit-font-smoothing: antialiased;\n}\n.sidebar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 100vh;\n  background: var(--glass-bg);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  display: flex;\n  flex-direction: column;\n  padding: 32px 20px;\n  z-index: 50;\n}\n.sidebar-header {\n  margin-bottom: 40px;\n  padding-left: 12px;\n}\n.brand-name {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: -0.04em;\n  display: block;\n}\n.brand-sub {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--text-secondary);\n  margin-top: -2px;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  text-decoration: none;\n  color: var(--text-secondary);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 500;\n  font-size: 0.95rem;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.nav-item .material-symbols-outlined {\n  font-size: 20px;\n  opacity: 0.8;\n}\n.nav-item:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.nav-item.active {\n  background: var(--primary);\n  color: #fff;\n}\n.nav-item.active .material-symbols-outlined {\n  opacity: 1;\n  font-variation-settings: "FILL" 1;\n}\n.sidebar-promo {\n  padding: 20px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.4);\n  text-align: center;\n}\n.sidebar-promo .promo-title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n}\n.sidebar-promo .promo-desc {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n  margin-bottom: 16px;\n}\n.sidebar-promo .btn-upgrade {\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.sidebar-promo .btn-upgrade:hover {\n  transform: translateY(-2px);\n}\n.notif-badge {\n  background: var(--primary);\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 20px;\n  margin-left: auto;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(107, 110, 249, 0.4);\n}\n.main-content {\n  margin-left: 300px;\n  flex: 1;\n  padding: 36px 40px;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.page-header__text {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.page-header__title {\n  font-size: 30px;\n  font-weight: 800;\n  letter-spacing: -0.6px;\n  color: var(--text-primary);\n  line-height: 1.1;\n}\n.page-header__subtitle {\n  font-size: 14px;\n  color: var(--text-muted);\n  font-weight: 400;\n  max-width: 420px;\n  line-height: 1.5;\n}\n.page-header__actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n.stats-strip {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.stat-pill {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: 50px;\n  background: var(--glass-bg-strong);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid var(--glass-border);\n  box-shadow: var(--glass-shadow);\n  font-family: "Space Grotesk", sans-serif;\n}\n.stat-pill__icon {\n  font-size: 16px;\n  color: var(--text-muted);\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 20;\n}\n.stat-pill__value {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1;\n}\n.stat-pill__label {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-muted);\n}\n.stat-pill--accent {\n  background: var(--primary-tint);\n  border-color: rgba(107, 110, 249, 0.2);\n}\n.stat-pill--accent .stat-pill__icon,\n.stat-pill--accent .stat-pill__value {\n  color: var(--primary);\n}\n.stat-pill--success {\n  background: var(--success-light);\n  border-color: rgba(34, 197, 94, 0.2);\n}\n.stat-pill--success .stat-pill__icon,\n.stat-pill--success .stat-pill__value {\n  color: var(--success);\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 20px;\n  border-radius: 50px;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  border: 1.5px solid transparent;\n  transition:\n    background var(--transition-fast),\n    box-shadow var(--transition-fast),\n    transform var(--transition-fast),\n    opacity var(--transition-fast);\n  white-space: nowrap;\n}\n.btn .material-symbols-outlined {\n  font-size: 17px;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.btn:not(:disabled):active {\n  transform: scale(0.97);\n}\n.btn--primary {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: #fff;\n  box-shadow: 0 4px 16px var(--primary-glow);\n}\n.btn--primary:not(:disabled):hover {\n  box-shadow: 0 6px 24px rgba(107, 110, 249, 0.45);\n  transform: translateY(-1px);\n}\n.btn--ghost {\n  background: var(--glass-bg-strong);\n  color: var(--text-secondary);\n  border-color: var(--glass-border);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n}\n.btn--ghost:not(:disabled):hover {\n  background: rgba(255, 255, 255, 0.85);\n  border-color: rgba(107, 110, 249, 0.3);\n  color: var(--primary);\n}\n.btn--ghost-active {\n  background: var(--primary-tint);\n  border-color: rgba(107, 110, 249, 0.3);\n  color: var(--primary);\n}\n.btn--sm {\n  padding: 6px 14px;\n  font-size: 12px;\n}\n.icon-btn {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all var(--transition-fast);\n  flex-shrink: 0;\n}\n.icon-btn .material-symbols-outlined {\n  font-size: 20px;\n}\n.icon-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.icon-btn--read {\n  background: var(--primary-tint);\n  color: var(--primary);\n}\n.icon-btn--read:not(:disabled):hover {\n  background: var(--primary);\n  color: #fff;\n  box-shadow: 0 4px 14px var(--primary-glow);\n  transform: scale(1.08);\n}\n.read-badge {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n}\n.read-badge .material-symbols-outlined {\n  font-size: 20px;\n  color: var(--success);\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  opacity: 0.5;\n}\n.notification-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.notification-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 20px 22px;\n  border-radius: var(--border-radius-lg);\n  background: rgba(255, 255, 255, 0.7);\n  backdrop-filter: blur(20px) saturate(150%);\n  -webkit-backdrop-filter: blur(20px) saturate(150%);\n  border: 1px solid var(--glass-border);\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.04);\n  transition:\n    box-shadow var(--transition-med),\n    transform var(--transition-med),\n    background var(--transition-med);\n  animation: slide-in var(--transition-slow) both;\n}\n.notification-card:hover {\n  box-shadow: 0 8px 32px rgba(107, 110, 249, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06);\n  transform: translateY(-2px);\n}\n.notification-card--unread {\n  background: rgba(107, 110, 249, 0.05);\n  border-color: rgba(107, 110, 249, 0.18);\n  border-left: 3px solid var(--primary);\n}\n.notification-card--unread:hover {\n  background: rgba(107, 110, 249, 0.08);\n  box-shadow: 0 8px 32px rgba(107, 110, 249, 0.14), 0 0 0 1px rgba(107, 110, 249, 0.12);\n}\n.notification-card--marking {\n  opacity: 0.7;\n  pointer-events: none;\n}\n.notification-card--actionable {\n  cursor: pointer;\n}\n.notification-card--actionable:hover {\n  border-color: var(--primary);\n  background: rgba(107, 110, 249, 0.08);\n}\n.notification-card--actionable:hover .notif-title {\n  color: var(--primary);\n}\n.notification-card--actionable:hover .tag--action {\n  background: var(--primary);\n  color: #fff;\n  border-color: var(--primary);\n}\n.notification-card--skeleton {\n  pointer-events: none;\n  animation: skeleton-pulse 1.4s ease-in-out infinite;\n}\n.notif-icon-wrap {\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.notif-icon-wrap.icon--payment {\n  background: var(--success-light);\n}\n.notif-icon-wrap.icon--payment .notif-icon {\n  color: var(--success);\n}\n.notif-icon-wrap.icon--security {\n  background: var(--error-light);\n}\n.notif-icon-wrap.icon--security .notif-icon {\n  color: var(--error);\n}\n.notif-icon-wrap.icon--system {\n  background: var(--warning-light);\n}\n.notif-icon-wrap.icon--system .notif-icon {\n  color: var(--warning);\n}\n.notif-icon-wrap.icon--default {\n  background: var(--primary-tint);\n}\n.notif-icon-wrap.icon--default .notif-icon {\n  color: var(--primary);\n}\n.notif-icon {\n  font-size: 22px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n}\n.notif-body {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.notif-meta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 2px;\n}\n.notif-tags {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.tag {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 10.5px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  padding: 3px 8px;\n  border-radius: 20px;\n  line-height: 1;\n}\n.tag--type {\n  background: var(--primary-tint);\n  color: var(--primary);\n}\n.tag--unread {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: #fff;\n  box-shadow: 0 2px 8px var(--primary-glow);\n  animation: badge-pop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.tag--action {\n  background: var(--glass-bg-strong);\n  color: var(--text-muted);\n  border: 1px solid var(--glass-border);\n  transition:\n    background var(--transition-fast),\n    color var(--transition-fast),\n    border-color var(--transition-fast);\n  padding: 3px 10px;\n}\n.priority--high {\n  background: var(--error-light);\n  color: var(--error);\n}\n.priority--medium {\n  background: var(--warning-light);\n  color: var(--warning);\n}\n.priority--low {\n  background: var(--success-light);\n  color: var(--success);\n}\n.notif-time {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 11.5px;\n  font-weight: 500;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.notif-title {\n  font-size: 14.5px;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: -0.1px;\n  line-height: 1.3;\n}\n.notif-message {\n  font-size: 13.5px;\n  color: var(--text-muted);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.notif-channel {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.notif-channel__icon {\n  font-size: 13px;\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 20;\n}\n.notif-actions {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.error-banner {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 18px;\n  border-radius: var(--border-radius-md);\n  background: var(--error-light);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n  color: var(--error);\n  font-size: 13.5px;\n  font-weight: 500;\n}\n.error-banner__icon {\n  font-size: 20px;\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 400,\n    "GRAD" 0,\n    "opsz" 24;\n  flex-shrink: 0;\n}\n.error-banner__text {\n  flex: 1;\n}\n.error-banner .btn--ghost {\n  color: var(--error);\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.error-banner .btn--ghost:hover {\n  background: rgba(239, 68, 68, 0.08);\n  border-color: var(--error);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 80px 40px;\n  gap: 16px;\n}\n.empty-state__icon {\n  width: 72px;\n  height: 72px;\n  border-radius: 22px;\n  background: var(--primary-tint);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 4px;\n}\n.empty-state__icon .material-symbols-outlined {\n  font-size: 36px;\n  color: var(--primary);\n  font-variation-settings:\n    "FILL" 1,\n    "wght" 300,\n    "GRAD" 0,\n    "opsz" 40;\n}\n.empty-state__title {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: -0.3px;\n}\n.empty-state__text {\n  font-size: 14px;\n  color: var(--text-muted);\n  max-width: 320px;\n  line-height: 1.6;\n}\n.skeleton-body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 4px;\n}\n.skeleton {\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(107, 110, 249, 0.07) 25%,\n      rgba(107, 110, 249, 0.12) 50%,\n      rgba(107, 110, 249, 0.07) 75%);\n  background-size: 200% 100%;\n  animation: skeleton-shimmer 1.6s infinite;\n}\n.skeleton--icon {\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  flex-shrink: 0;\n}\n.skeleton--title {\n  height: 14px;\n  width: 55%;\n}\n.skeleton--text {\n  height: 12px;\n  width: 85%;\n}\n.skeleton--text-short {\n  width: 40%;\n}\n.btn__spinner {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.65s linear infinite;\n  flex-shrink: 0;\n}\n.btn__spinner--sm {\n  width: 14px;\n  height: 14px;\n  border-color: rgba(107, 110, 249, 0.25);\n  border-top-color: var(--primary);\n}\n@keyframes slide-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes badge-pop {\n  0% {\n    transform: scale(0.6);\n  }\n  70% {\n    transform: scale(1.15);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes skeleton-shimmer {\n  to {\n    background-position: -200% 0;\n  }\n}\n@keyframes skeleton-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 900px) {\n  .sidebar {\n    width: 68px;\n    padding: 20px 10px;\n  }\n  .sidebar__brand-name,\n  .sidebar__nav-label,\n  .sidebar__user-info,\n  .sidebar__badge {\n    display: none;\n  }\n  .sidebar__brand-logo {\n    margin: 0 auto;\n  }\n  .sidebar__brand {\n    justify-content: center;\n  }\n  .sidebar__footer {\n    justify-content: center;\n    padding: 10px;\n  }\n  .main-content {\n    padding: 24px 20px;\n  }\n}\n@media (max-width: 600px) {\n  .page-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 14px;\n  }\n  .notification-card {\n    padding: 16px;\n    gap: 12px;\n  }\n  .notif-meta {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=notifications.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsComponent, { className: "NotificationsComponent", filePath: "src/app/features/notifications/notifications.ts", lineNumber: 66 });
})();
export {
  NotificationsComponent
};
//# sourceMappingURL=chunk-PEFPDHNQ.js.map
