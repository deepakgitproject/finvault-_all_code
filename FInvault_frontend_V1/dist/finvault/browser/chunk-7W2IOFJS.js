import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7UCIGN6I.js";
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
  RouterLink,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SYL3PSAO.js";

// src/app/features/cards/cards.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.title;
function CardsComponent_For_24_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
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
function CardsComponent_For_24_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "div", 60)(2, "div", 61);
    \u0275\u0275elementEnd();
  }
}
function CardsComponent_For_24_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
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
function CardsComponent_For_24_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
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
function CardsComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 27)(2, "div", 28)(3, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 30);
    \u0275\u0275element(5, "rect", 31)(6, "rect", 32)(7, "line", 33)(8, "line", 34)(9, "line", 35)(10, "line", 36);
    \u0275\u0275elementStart(11, "defs")(12, "linearGradient", 37);
    \u0275\u0275element(13, "stop", 38)(14, "stop", 39);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 40);
    \u0275\u0275listener("click", function CardsComponent_For_24_Template_button_click_15_listener($event) {
      const \u0275$index_43_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.toggleDetails(\u0275$index_43_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(16, "span", 13);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 41);
    \u0275\u0275listener("click", function CardsComponent_For_24_Template_button_click_18_listener($event) {
      const card_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.deleteCard(card_r4.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(19, "span", 13);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 42);
    \u0275\u0275listener("click", function CardsComponent_For_24_Template_div_click_21_listener() {
      const card_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(card_r4.showDetails ? ctx_r2.copyToClipboard(card_r4.fullNumber) : null);
    });
    \u0275\u0275elementStart(22, "div", 43)(23, "span", 44);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 45);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 46)(28, "div", 47)(29, "span", 48);
    \u0275\u0275text(30, "CARD HOLDER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 49);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 47)(34, "span", 48);
    \u0275\u0275text(35, "VALID THRU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 49);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 47)(39, "span", 48);
    \u0275\u0275text(40, "CVV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 50);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 51);
    \u0275\u0275conditionalCreate(44, CardsComponent_For_24_Conditional_44_Template, 2, 1, "span", 52);
    \u0275\u0275conditionalCreate(45, CardsComponent_For_24_Conditional_45_Template, 3, 0, "div", 53);
    \u0275\u0275conditionalCreate(46, CardsComponent_For_24_Conditional_46_Template, 2, 1, "span", 54);
    \u0275\u0275conditionalCreate(47, CardsComponent_For_24_Conditional_47_Template, 2, 1, "span", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 56)(49, "div", 57)(50, "span");
    \u0275\u0275text(51, "LIMIT USAGE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 58);
    \u0275\u0275element(55, "div", 59);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const card_r4 = ctx.$implicit;
    const \u0275$index_43_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.getGradient(card_r4));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("fill", "url(#chipGrad" + \u0275$index_43_r2 + ")");
    \u0275\u0275advance(6);
    \u0275\u0275attribute("id", "chipGrad" + \u0275$index_43_r2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("loading", ctx_r2.revealingIds().has(card_r4.id));
    \u0275\u0275property("disabled", ctx_r2.revealingIds().has(card_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.revealingIds().has(card_r4.id) ? "sync" : card_r4.showDetails ? "visibility_off" : "visibility", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("loading", ctx_r2.cardService.deletingIds().has(card_r4.id));
    \u0275\u0275property("disabled", ctx_r2.cardService.deletingIds().has(card_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.cardService.deletingIds().has(card_r4.id) ? "sync" : "delete_forever", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(card_r4.issuerName);
    \u0275\u0275advance();
    \u0275\u0275classProp("clickable", card_r4.showDetails);
    \u0275\u0275property("title", card_r4.showDetails ? "Click to copy" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getDisplayNumber(card_r4), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(card_r4.cardholderName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatExpiry(card_r4));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getDisplayCvv(card_r4));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(card_r4.network === "visa" ? 44 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(card_r4.network === "mastercard" ? 45 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(card_r4.network === "rupay" ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(card_r4.network === "amex" ? 47 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r2.formatLimit(card_r4.currentBalance), " / ", ctx_r2.formatLimit(card_r4.creditLimit));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", card_r4.usagePercent, "%")("background", ctx_r2.getBarColor(card_r4));
  }
}
function CardsComponent_Conditional_39_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "div")(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 64)(6, "span", 65);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 66);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 67);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const txn_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("txn-icon-circle ", txn_r5.bgClass || "bg-indigo"));
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
function CardsComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CardsComponent_Conditional_39_For_1_Template, 12, 9, "div", 62, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.transactions);
  }
}
function CardsComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 68);
    \u0275\u0275text(2, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No recent transactions");
    \u0275\u0275elementEnd()();
  }
}
function CardsComponent_Conditional_41_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function CardsComponent_Conditional_41_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goBackToStep(ctx_r2.modalStep() === 3 ? 2 : 1));
    });
    \u0275\u0275elementStart(1, "span", 13);
    \u0275\u0275text(2, "arrow_back");
    \u0275\u0275elementEnd()();
  }
}
function CardsComponent_Conditional_41_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Select Card Network ");
  }
}
function CardsComponent_Conditional_41_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enter Card Details ");
  }
}
function CardsComponent_Conditional_41_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Review & Confirm ");
  }
}
function CardsComponent_Conditional_41_Conditional_18_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86);
    \u0275\u0275text(1, "VISA");
    \u0275\u0275elementEnd();
  }
}
function CardsComponent_Conditional_41_Conditional_18_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "div", 60)(2, "div", 61);
    \u0275\u0275elementEnd();
  }
}
function CardsComponent_Conditional_41_Conditional_18_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275text(1, "RuPay");
    \u0275\u0275elementEnd();
  }
}
function CardsComponent_Conditional_41_Conditional_18_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275text(1, "AMERICAN EXPRESS");
    \u0275\u0275elementEnd();
  }
}
function CardsComponent_Conditional_41_Conditional_18_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function CardsComponent_Conditional_41_Conditional_18_For_5_Template_button_click_0_listener() {
      const net_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectNetwork(net_r9));
    });
    \u0275\u0275elementStart(1, "div", 85);
    \u0275\u0275conditionalCreate(2, CardsComponent_Conditional_41_Conditional_18_For_5_Conditional_2_Template, 2, 0, "span", 86);
    \u0275\u0275conditionalCreate(3, CardsComponent_Conditional_41_Conditional_18_For_5_Conditional_3_Template, 3, 0, "div", 87);
    \u0275\u0275conditionalCreate(4, CardsComponent_Conditional_41_Conditional_18_For_5_Conditional_4_Template, 2, 0, "span", 88);
    \u0275\u0275conditionalCreate(5, CardsComponent_Conditional_41_Conditional_18_For_5_Conditional_5_Template, 2, 0, "span", 89);
    \u0275\u0275elementStart(6, "span", 90);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const net_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r2.networkConfig[net_r9].gradient);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(net_r9 === "visa" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(net_r9 === "mastercard" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(net_r9 === "rupay" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(net_r9 === "amex" ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.networkConfig[net_r9].label);
  }
}
function CardsComponent_Conditional_41_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "p", 81);
    \u0275\u0275text(2, "Choose your card network to get started");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 82);
    \u0275\u0275repeaterCreate(4, CardsComponent_Conditional_41_Conditional_18_For_5_Template, 8, 7, "button", 83, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.networks);
  }
}
function CardsComponent_Conditional_41_Conditional_19_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r11 = ctx.$implicit;
    \u0275\u0275property("ngValue", m_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r11 < 10 ? "0" + m_r11 : m_r11);
  }
}
function CardsComponent_Conditional_41_Conditional_19_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r12 = ctx.$implicit;
    \u0275\u0275property("ngValue", y_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r12);
  }
}
function CardsComponent_Conditional_41_Conditional_19_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const issuer_r13 = ctx.$implicit;
    \u0275\u0275property("value", issuer_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(issuer_r13);
  }
}
function CardsComponent_Conditional_41_Conditional_19_For_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r14 = ctx.$implicit;
    \u0275\u0275property("ngValue", d_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r14);
  }
}
function CardsComponent_Conditional_41_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 91)(2, "div", 92)(3, "label", 93)(4, "span", 13);
    \u0275\u0275text(5, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Cardholder Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function CardsComponent_Conditional_41_Conditional_19_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newCard.cardholderName, $event) || (ctx_r2.newCard.cardholderName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 92)(9, "label", 93)(10, "span", 13);
    \u0275\u0275text(11, "credit_card");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Card Number ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 95);
    \u0275\u0275listener("input", function CardsComponent_Conditional_41_Conditional_19_Template_input_input_13_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.formatCardInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 96)(15, "label", 93);
    \u0275\u0275text(16, "Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 97);
    \u0275\u0275twoWayListener("ngModelChange", function CardsComponent_Conditional_41_Conditional_19_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newCard.expiryMonth, $event) || (ctx_r2.newCard.expiryMonth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(18, CardsComponent_Conditional_41_Conditional_19_For_19_Template, 2, 2, "option", 98, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 96)(21, "label", 93);
    \u0275\u0275text(22, "Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 97);
    \u0275\u0275twoWayListener("ngModelChange", function CardsComponent_Conditional_41_Conditional_19_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newCard.expiryYear, $event) || (ctx_r2.newCard.expiryYear = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(24, CardsComponent_Conditional_41_Conditional_19_For_25_Template, 2, 2, "option", 98, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 96)(27, "label", 93)(28, "span", 13);
    \u0275\u0275text(29, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " CVV ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 99);
    \u0275\u0275twoWayListener("ngModelChange", function CardsComponent_Conditional_41_Conditional_19_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newCard.cvv, $event) || (ctx_r2.newCard.cvv = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 100)(33, "label", 93)(34, "span", 13);
    \u0275\u0275text(35, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Issuer / Bank ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "select", 97);
    \u0275\u0275twoWayListener("ngModelChange", function CardsComponent_Conditional_41_Conditional_19_Template_select_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newCard.issuerName, $event) || (ctx_r2.newCard.issuerName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(38, "option", 101);
    \u0275\u0275text(39, "Select Issuer");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(40, CardsComponent_Conditional_41_Conditional_19_For_41_Template, 2, 2, "option", 102, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 100)(43, "label", 93)(44, "span", 13);
    \u0275\u0275text(45, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " Credit Limit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 103)(48, "span", 104);
    \u0275\u0275text(49, "Rs.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 105);
    \u0275\u0275twoWayListener("ngModelChange", function CardsComponent_Conditional_41_Conditional_19_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newCard.creditLimit, $event) || (ctx_r2.newCard.creditLimit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 92)(52, "label", 93)(53, "span", 13);
    \u0275\u0275text(54, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " Billing Cycle Start Day ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "select", 97);
    \u0275\u0275twoWayListener("ngModelChange", function CardsComponent_Conditional_41_Conditional_19_Template_select_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newCard.billingCycleStartDay, $event) || (ctx_r2.newCard.billingCycleStartDay = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(57, CardsComponent_Conditional_41_Conditional_19_For_58_Template, 2, 2, "option", 98, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "button", 106);
    \u0275\u0275listener("click", function CardsComponent_Conditional_41_Conditional_19_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToReview());
    });
    \u0275\u0275text(60, " Review Card ");
    \u0275\u0275elementStart(61, "span", 13);
    \u0275\u0275text(62, "arrow_forward");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCard.cardholderName);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r2.newCard.cardNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCard.expiryMonth);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.months);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCard.expiryYear);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.years);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCard.cvv);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCard.issuerName);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.issuers);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCard.creditLimit);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCard.billingCycleStartDay);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.billingDays);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.isStep2Valid());
  }
}
function CardsComponent_Conditional_41_Conditional_20_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "VISA");
    \u0275\u0275elementEnd();
  }
}
function CardsComponent_Conditional_41_Conditional_20_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "div", 60)(2, "div", 61);
    \u0275\u0275elementEnd();
  }
}
function CardsComponent_Conditional_41_Conditional_20_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "RuPay");
    \u0275\u0275elementEnd();
  }
}
function CardsComponent_Conditional_41_Conditional_20_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1, "AMERICAN EXPRESS");
    \u0275\u0275elementEnd();
  }
}
function CardsComponent_Conditional_41_Conditional_20_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 117);
    \u0275\u0275text(1, " Linking... ");
  }
}
function CardsComponent_Conditional_41_Conditional_20_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Link Card ");
  }
}
function CardsComponent_Conditional_41_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 107)(2, "div", 108)(3, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 30);
    \u0275\u0275element(5, "rect", 31)(6, "line", 33)(7, "line", 34)(8, "line", 35)(9, "line", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 109)(11, "div", 43)(12, "span", 44);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 110);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 46)(17, "div", 47)(18, "span", 48);
    \u0275\u0275text(19, "CARD HOLDER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 49);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 47)(23, "span", 48);
    \u0275\u0275text(24, "VALID THRU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 49);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 51);
    \u0275\u0275conditionalCreate(28, CardsComponent_Conditional_41_Conditional_20_Conditional_28_Template, 2, 0, "span", 52);
    \u0275\u0275conditionalCreate(29, CardsComponent_Conditional_41_Conditional_20_Conditional_29_Template, 3, 0, "div", 53);
    \u0275\u0275conditionalCreate(30, CardsComponent_Conditional_41_Conditional_20_Conditional_30_Template, 2, 0, "span", 54);
    \u0275\u0275conditionalCreate(31, CardsComponent_Conditional_41_Conditional_20_Conditional_31_Template, 2, 0, "span", 55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 111)(33, "div", 112)(34, "span", 113);
    \u0275\u0275text(35, "Network");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 114);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 112)(39, "span", 113);
    \u0275\u0275text(40, "Cardholder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 114);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 112)(44, "span", 113);
    \u0275\u0275text(45, "Card Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 115);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 112)(49, "span", 113);
    \u0275\u0275text(50, "CVV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 115);
    \u0275\u0275text(52, "***");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 112)(54, "span", 113);
    \u0275\u0275text(55, "Expiry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 114);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 112)(59, "span", 113);
    \u0275\u0275text(60, "Issuer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 114);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 112)(64, "span", 113);
    \u0275\u0275text(65, "Credit Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 114);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 112)(69, "span", 113);
    \u0275\u0275text(70, "Billing Cycle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 114);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "button", 116);
    \u0275\u0275listener("click", function CardsComponent_Conditional_41_Conditional_20_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitCard());
    });
    \u0275\u0275conditionalCreate(74, CardsComponent_Conditional_41_Conditional_20_Conditional_74_Template, 2, 0)(75, CardsComponent_Conditional_41_Conditional_20_Conditional_75_Template, 3, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.networkConfig[ctx_r2.selectedNetwork()].gradient);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.newCard.issuerName || "BANK");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.newCard.cardNumber || "**** **** **** ****");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.newCard.cardholderName || "NAME");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", (ctx_r2.newCard.expiryMonth < 10 ? "0" : "") + ctx_r2.newCard.expiryMonth, "/", ("" + ctx_r2.newCard.expiryYear).slice(-2));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.selectedNetwork() === "visa" ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedNetwork() === "mastercard" ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedNetwork() === "rupay" ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedNetwork() === "amex" ? 31 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.networkConfig[ctx_r2.selectedNetwork()].label);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.newCard.cardholderName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.newCard.cardNumber);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate2("", (ctx_r2.newCard.expiryMonth < 10 ? "0" : "") + ctx_r2.newCard.expiryMonth, "/", ctx_r2.newCard.expiryYear);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.newCard.issuerName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Rs.", ctx_r2.newCard.creditLimit.toLocaleString("en-IN"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Day ", ctx_r2.newCard.billingCycleStartDay);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSubmitting() ? 74 : 75);
  }
}
function CardsComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function CardsComponent_Conditional_41_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 70);
    \u0275\u0275listener("click", function CardsComponent_Conditional_41_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 71)(3, "div", 72);
    \u0275\u0275conditionalCreate(4, CardsComponent_Conditional_41_Conditional_4_Template, 3, 0, "button", 73);
    \u0275\u0275elementStart(5, "h2", 74);
    \u0275\u0275conditionalCreate(6, CardsComponent_Conditional_41_Conditional_6_Template, 1, 0);
    \u0275\u0275conditionalCreate(7, CardsComponent_Conditional_41_Conditional_7_Template, 1, 0);
    \u0275\u0275conditionalCreate(8, CardsComponent_Conditional_41_Conditional_8_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 75);
    \u0275\u0275listener("click", function CardsComponent_Conditional_41_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementStart(10, "span", 13);
    \u0275\u0275text(11, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 76);
    \u0275\u0275element(13, "div", 77)(14, "div", 78)(15, "div", 77)(16, "div", 78)(17, "div", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, CardsComponent_Conditional_41_Conditional_18_Template, 6, 0, "div", 79);
    \u0275\u0275conditionalCreate(19, CardsComponent_Conditional_41_Conditional_19_Template, 63, 9, "div", 79);
    \u0275\u0275conditionalCreate(20, CardsComponent_Conditional_41_Conditional_20_Template, 76, 21, "div", 79);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.modalStep() > 1 ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.modalStep() === 1 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.modalStep() === 2 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.modalStep() === 3 ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("step-dot--active", ctx_r2.modalStep() >= 1)("step-dot--done", ctx_r2.modalStep() > 1);
    \u0275\u0275advance();
    \u0275\u0275classProp("step-line--active", ctx_r2.modalStep() >= 2);
    \u0275\u0275advance();
    \u0275\u0275classProp("step-dot--active", ctx_r2.modalStep() >= 2)("step-dot--done", ctx_r2.modalStep() > 2);
    \u0275\u0275advance();
    \u0275\u0275classProp("step-line--active", ctx_r2.modalStep() >= 3);
    \u0275\u0275advance();
    \u0275\u0275classProp("step-dot--active", ctx_r2.modalStep() >= 3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.modalStep() === 1 ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.modalStep() === 2 ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.modalStep() === 3 ? 20 : -1);
  }
}
var CardsComponent = class _CardsComponent {
  // --- Service injection ------------------------------------------
  cardService = inject(CardService);
  authService = inject(AuthService);
  globalUiService = inject(GlobalUiService);
  http = inject(HttpClient);
  // --- Bind to CardService signal - NO local card state -----------
  cards = this.cardService.cards;
  // --- Modal state (local - only affects this page's UI) ----------
  modalOpen = signal(false, ...ngDevMode ? [{ debugName: "modalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  modalStep = signal(1, ...ngDevMode ? [{ debugName: "modalStep" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedNetwork = signal(null, ...ngDevMode ? [{ debugName: "selectedNetwork" }] : (
    /* istanbul ignore next */
    []
  ));
  // Reveal tracking
  revealingIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "revealingIds" }] : (
    /* istanbul ignore next */
    []
  ));
  revealTimers = {};
  newCard = {
    cardholderName: "",
    cardNumber: "",
    cvv: "",
    expiryMonth: 1,
    expiryYear: (/* @__PURE__ */ new Date()).getFullYear() + 1,
    issuerName: "",
    creditLimit: 1e5,
    billingCycleStartDay: 1
  };
  // Dropdown options
  months = Array.from({ length: 12 }, (_, i) => i + 1);
  years = Array.from({ length: 10 }, (_, i) => (/* @__PURE__ */ new Date()).getFullYear() + i);
  billingDays = Array.from({ length: 28 }, (_, i) => i + 1);
  transactions = [];
  // --- Network config --------------------------------------------
  networkConfig = {
    visa: { gradient: "linear-gradient(135deg, #1a1f71, #0a0e3a)", label: "Visa" },
    mastercard: { gradient: "linear-gradient(135deg, #eb001b, #f79e1b)", label: "MasterCard" },
    rupay: { gradient: "linear-gradient(135deg, #004d40, #00695c)", label: "RuPay" },
    amex: { gradient: "linear-gradient(135deg, #006fcf, #004a8f)", label: "Amex" }
  };
  networks = ["visa", "mastercard", "rupay", "amex"];
  issuers = ["Visa", "MasterCard", "RuPay", "Amex"];
  // --- Lifecycle -------------------------------------------------
  ngOnInit() {
    this.cardService.refreshCards();
    this.loadTransactions();
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
  onWalletClick() {
    this.globalUiService.showComingSoon();
  }
  // --- Card display helpers --------------------------------------
  toggleDetails(index) {
    const card = this.cards()[index];
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
      next: (res) => {
        this.revealingIds.update((ids) => {
          const next = new Set(ids);
          next.delete(cardId);
          return next;
        });
        this.clearRevealTimer(cardId);
        this.revealTimers[cardId] = setTimeout(() => {
          if (this.cards()[index]?.showDetails) {
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
  copyToClipboard(text) {
    const clean = text.replace(/\s/g, "");
    navigator.clipboard.writeText(clean).then(() => {
      this.globalUiService.success("Card number copied to clipboard.");
    });
  }
  getDisplayNumber(card) {
    return card.showDetails ? card.fullNumber : `**** **** **** ${card.maskedNumber.replace(/\D/g, "").slice(-4)}`;
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
  formatLimit(amount) {
    return "Rs." + amount.toLocaleString("en-IN");
  }
  formatExpiry(card) {
    return `${String(card.expiryMonth).padStart(2, "0")}/${String(card.expiryYear).slice(-2)}`;
  }
  // --- Modal -----------------------------------------------------
  openModal() {
    this.modalOpen.set(true);
    this.modalStep.set(1);
    this.selectedNetwork.set(null);
    this.resetForm();
  }
  closeModal() {
    this.modalOpen.set(false);
    this.modalStep.set(1);
    this.selectedNetwork.set(null);
    this.resetForm();
  }
  selectNetwork(n) {
    this.selectedNetwork.set(n);
    this.modalStep.set(2);
  }
  goToReview() {
    if (this.isStep2Valid()) {
      this.modalStep.set(3);
    }
  }
  goBackToStep(step) {
    this.modalStep.set(step);
  }
  isStep2Valid() {
    const cleanNum = this.newCard.cardNumber.replace(/\s/g, "");
    return !!(this.newCard.cardholderName.trim() && cleanNum.length >= 13 && cleanNum.length <= 19 && this.newCard.cvv.length >= 3 && this.newCard.issuerName.trim() && this.newCard.creditLimit > 0);
  }
  formatCardInput(event) {
    const input = event.target;
    let val = input.value.replace(/\D/g, "").substring(0, 19);
    if (val.length >= 1) {
      if (val.startsWith("4")) {
        this.selectedNetwork.set("visa");
        this.newCard.issuerName = "Visa";
      } else if (val.startsWith("5")) {
        this.selectedNetwork.set("mastercard");
        this.newCard.issuerName = "MasterCard";
      } else if (val.startsWith("3")) {
        this.selectedNetwork.set("amex");
        this.newCard.issuerName = "Amex";
      } else if (val.startsWith("6")) {
        this.selectedNetwork.set("rupay");
        this.newCard.issuerName = "RuPay";
      }
    }
    val = val.replace(/(\d{4})(?=\d)/g, "$1 ");
    this.newCard.cardNumber = val;
    input.value = val;
  }
  getPreviewMasked() {
    const digits = this.newCard.cardNumber.replace(/\s/g, "");
    const last4 = digits.slice(-4) || "0000";
    return `**** **** **** ${last4}`;
  }
  // --- Submit Card (Pessimistic Add) ----------------------------
  submitCard() {
    if (!this.selectedNetwork())
      return;
    if (this.cardService.isAdding())
      return;
    const payload = {
      userId: this.authService.getUserId() || "00000000-0000-0000-0000-000000000000",
      cardNumber: this.newCard.cardNumber.replace(/\s/g, ""),
      cvv: this.newCard.cvv,
      cardholderName: this.newCard.cardholderName.toUpperCase(),
      expiryMonth: this.newCard.expiryMonth,
      expiryYear: this.newCard.expiryYear,
      issuerName: this.newCard.issuerName,
      creditLimit: this.newCard.creditLimit,
      billingCycleStartDay: this.newCard.billingCycleStartDay
    };
    this.cardService.addCard(payload).subscribe({
      next: () => {
        this.closeModal();
      },
      error: () => {
      }
    });
  }
  isSubmitting = this.cardService.isAdding;
  // --- Card Management ------------------------------------------
  deleteCard(cardId) {
    if (!cardId)
      return;
    if (this.cardService.deletingIds().has(cardId))
      return;
    this.cardService.deleteCard(cardId).subscribe({
      error: () => {
      }
    });
  }
  setDefaultCard(cardId) {
    if (!cardId)
      return;
    this.cardService.setDefault(cardId).subscribe();
  }
  updateCardLimit(cardId, newLimit) {
    if (!cardId || newLimit <= 0)
      return;
    this.cardService.updateLimit(cardId, { newLimit }).subscribe();
  }
  resetForm() {
    this.newCard = {
      cardholderName: "",
      cardNumber: "",
      cvv: "",
      expiryMonth: 1,
      expiryYear: (/* @__PURE__ */ new Date()).getFullYear() + 1,
      issuerName: "",
      creditLimit: 1e5,
      billingCycleStartDay: 1
    };
  }
  static \u0275fac = function CardsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardsComponent, selectors: [["app-cards"]], decls: 43, vars: 2, consts: [[1, "ambient-orb", "orb-top-right"], [1, "ambient-orb", "orb-bottom-left"], [1, "page-layout"], [1, "main-content"], [1, "topbar"], [1, "page-title-block"], [1, "page-heading"], [1, "page-desc"], [1, "topbar-actions"], [1, "search-pill", "glass-card"], [1, "material-symbols-outlined", "text-muted"], ["type", "text", "placeholder", "Search cards...", 1, "search-input"], [1, "icon-btn", "glass-card", 3, "click"], [1, "material-symbols-outlined"], [1, "cards-grid-section"], [1, "cards-grid"], [1, "card-column"], [1, "new-card-placeholder", 3, "click"], [1, "add-circle"], [1, "new-card-title"], [1, "new-card-sub"], [1, "bottom-section"], [1, "section-title"], [1, "bottom-content"], [1, "transactions-panel"], [1, "empty-state", 2, "padding", "2rem", "text-align", "center", "color", "var(--text-muted)"], [1, "modal-overlay"], [1, "card-3d-wrapper"], [1, "credit-card"], [1, "emv-chip"], ["viewBox", "0 0 50 40", "xmlns", "http://www.w3.org/2000/svg"], ["x", "0", "y", "0", "width", "50", "height", "40", "rx", "6", "ry", "6", "fill", "#c9a84c"], ["x", "0", "y", "0", "width", "50", "height", "40", "rx", "6", "ry", "6"], ["x1", "0", "y1", "13", "x2", "50", "y2", "13", "stroke", "#b8962d", "stroke-width", "0.8"], ["x1", "0", "y1", "20", "x2", "50", "y2", "20", "stroke", "#b8962d", "stroke-width", "0.8"], ["x1", "0", "y1", "27", "x2", "50", "y2", "27", "stroke", "#b8962d", "stroke-width", "0.8"], ["x1", "25", "y1", "0", "x2", "25", "y2", "40", "stroke", "#b8962d", "stroke-width", "0.8"], ["x1", "0", "y1", "0", "x2", "1", "y2", "1"], ["offset", "0%", "stop-color", "#dbb85c", "stop-opacity", "0.4"], ["offset", "100%", "stop-color", "#a67c00", "stop-opacity", "0.2"], [1, "card-eye-btn", 3, "click", "disabled"], [1, "card-delete-btn", 3, "click", "disabled"], [1, "card-body-content", 3, "click"], [1, "card-name-row"], [1, "card-issuer"], [1, "card-number", "mono", 3, "title"], [1, "card-details-row"], [1, "card-detail"], [1, "card-detail-label"], [1, "card-detail-value"], [1, "card-detail-value", "mono"], [1, "card-brand-logo"], [1, "visa-logo"], [1, "mastercard-logo"], [1, "rupay-logo"], [1, "amex-logo"], [1, "card-bottom-bar"], [1, "limit-header"], [1, "limit-track"], [1, "limit-bar-fill"], [1, "mc-circle", "mc-red"], [1, "mc-circle", "mc-orange"], [1, "transaction-row"], [1, "txn-left"], [1, "txn-details"], [1, "txn-title"], [1, "txn-sub"], [1, "txn-amount", "mono"], [1, "material-symbols-outlined", 2, "font-size", "2rem", "margin-bottom", "0.5rem", "opacity", "0.5"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "modal-header-left"], [1, "modal-back-btn"], [1, "modal-title"], [1, "modal-close-btn", 3, "click"], [1, "step-indicator"], [1, "step-dot"], [1, "step-line"], [1, "modal-body"], [1, "modal-back-btn", 3, "click"], [1, "modal-subtitle"], [1, "network-grid"], [1, "network-card", 3, "background"], [1, "network-card", 3, "click"], [1, "network-card-inner"], [1, "visa-logo", "visa-logo--lg"], [1, "mastercard-logo", "mastercard-logo--lg"], [1, "rupay-logo", "rupay-logo--lg"], [1, "amex-logo", "amex-logo--lg"], [1, "network-label"], [1, "form-grid"], [1, "form-group", "form-group--full"], [1, "form-label"], ["type", "text", "placeholder", "DEEPAK KUMAR", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "4562 4899 5686 3542", "maxlength", "19", 1, "form-input", "form-input--mono", 3, "input", "value"], [1, "form-group", "form-group--third"], [1, "form-input", "form-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "password", "placeholder", "123", "maxlength", "4", 1, "form-input", "form-input--mono", 3, "ngModelChange", "ngModel"], [1, "form-group"], ["value", "", "disabled", "", "selected", ""], [3, "value"], [1, "form-input-wrap"], [1, "form-prefix"], ["type", "number", "placeholder", "500000", 1, "form-input", "form-input--prefixed", 3, "ngModelChange", "ngModel"], [1, "modal-next-btn", 3, "click", "disabled"], [1, "preview-card-wrapper"], [1, "credit-card", "credit-card--preview"], [1, "card-body-content"], [1, "card-number", "mono"], [1, "review-summary"], [1, "review-row"], [1, "review-label"], [1, "review-value"], [1, "review-value", "mono"], [1, "modal-submit-btn", 3, "click", "disabled"], [1, "btn-spinner"]], template: function CardsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0)(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275element(3, "app-sidebar");
      \u0275\u0275elementStart(4, "main", 3)(5, "header", 4)(6, "div", 5)(7, "h1", 6);
      \u0275\u0275text(8, "Digital Vault");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, "Manage your elite credit portfolio and spending limits.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275element(12, "app-theme-toggle");
      \u0275\u0275elementStart(13, "div", 9)(14, "span", 10);
      \u0275\u0275text(15, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 12);
      \u0275\u0275listener("click", function CardsComponent_Template_button_click_17_listener() {
        return ctx.onWalletClick();
      });
      \u0275\u0275elementStart(18, "span", 13);
      \u0275\u0275text(19, "account_balance_wallet");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(20, "app-toast");
      \u0275\u0275elementStart(21, "section", 14)(22, "div", 15);
      \u0275\u0275repeaterCreate(23, CardsComponent_For_24_Template, 56, 30, "div", 16, _forTrack0);
      \u0275\u0275elementStart(25, "div", 16)(26, "div", 17);
      \u0275\u0275listener("click", function CardsComponent_Template_div_click_26_listener() {
        return ctx.openModal();
      });
      \u0275\u0275elementStart(27, "div", 18)(28, "span", 13);
      \u0275\u0275text(29, "add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "span", 19);
      \u0275\u0275text(31, "Link New Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 20);
      \u0275\u0275text(33, "Add to your premium collection");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "section", 21)(35, "h2", 22);
      \u0275\u0275text(36, "Recent Card Transactions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 23)(38, "div", 24);
      \u0275\u0275conditionalCreate(39, CardsComponent_Conditional_39_Template, 2, 0)(40, CardsComponent_Conditional_40_Template, 5, 0, "div", 25);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(41, CardsComponent_Conditional_41_Template, 21, 21, "div", 26);
      \u0275\u0275element(42, "app-coming-soon");
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275repeater(ctx.cards());
      \u0275\u0275advance(16);
      \u0275\u0275conditional(ctx.transactions.length > 0 ? 39 : 40);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.modalOpen() ? 41 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, SidebarComponent, ThemeToggleComponent, ComingSoonComponent, ToastComponent], styles: ['\n.ambient-orb[_ngcontent-%COMP%] {\n  position: fixed;\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 1;\n}\n.orb-top-right[_ngcontent-%COMP%] {\n  top: -100px;\n  right: -100px;\n  width: 500px;\n  height: 500px;\n  background: rgba(167, 139, 250, 0.2);\n  filter: blur(120px);\n}\n.orb-bottom-left[_ngcontent-%COMP%] {\n  bottom: -150px;\n  left: -150px;\n  width: 600px;\n  height: 600px;\n  background: rgba(107, 110, 249, 0.1);\n  filter: blur(150px);\n}\n.page-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  position: relative;\n  z-index: 10;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 100vh;\n  background: var(--glass-bg);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  display: flex;\n  flex-direction: column;\n  padding: 32px 20px;\n  z-index: 50;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  padding-left: 12px;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: -0.04em;\n  display: block;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--text-secondary);\n  margin-top: -2px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  text-decoration: none;\n  color: var(--text-secondary);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 500;\n  font-size: 0.95rem;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.nav-item[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.8;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n}\n.nav-item.active[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  opacity: 1;\n  font-variation-settings: "FILL" 1;\n}\n.sidebar-promo[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.4);\n  text-align: center;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .promo-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n  margin-bottom: 16px;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .btn-upgrade[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.sidebar-promo[_ngcontent-%COMP%]   .btn-upgrade[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.notif-badge[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 20px;\n  margin-left: auto;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(107, 110, 249, 0.4);\n}\n.main-content[_ngcontent-%COMP%] {\n  margin-left: 300px;\n  padding: 40px 60px;\n  flex: 1;\n  max-width: 1600px;\n}\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 48px;\n}\n.topbar[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 8px 0;\n  letter-spacing: -0.03em;\n}\n.topbar[_ngcontent-%COMP%]   .page-desc[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.topbar[_ngcontent-%COMP%]   .topbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.topbar[_ngcontent-%COMP%]   .glass-card[_ngcontent-%COMP%] {\n  background: var(--glass-bg, rgba(255, 255, 255, 0.55));\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  box-shadow: 0 8px 24px rgba(100, 100, 200, 0.08);\n}\n.topbar[_ngcontent-%COMP%]   .search-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 20px;\n  border-radius: 100px;\n  width: 250px;\n}\n.topbar[_ngcontent-%COMP%]   .search-pill[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  color: var(--text-primary);\n  width: 100%;\n}\n.topbar[_ngcontent-%COMP%]   .search-pill[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.topbar[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.topbar[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--glass-bg-strong);\n  color: var(--primary);\n}\n.topbar[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.cards-grid-section[_ngcontent-%COMP%] {\n  margin-bottom: 56px;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 40px 36px;\n  justify-content: flex-start;\n}\n.card-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.card-3d-wrapper[_ngcontent-%COMP%] {\n  cursor: pointer;\n  will-change: transform;\n  isolation: isolate;\n  border-radius: 20px;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.card-3d-wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n  z-index: 2;\n}\n.card-3d-wrapper[_ngcontent-%COMP%]:hover   .credit-card[_ngcontent-%COMP%] {\n  box-shadow: 0 24px 56px rgba(0, 0, 0, 0.25);\n}\n.card-3d-wrapper[_ngcontent-%COMP%]:hover   .card-eye-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.credit-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 1.586/1;\n  border-radius: 20px;\n  padding: 28px 28px 18px;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n  transition: box-shadow 0.3s ease;\n}\n.credit-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 50%,\n      rgba(255, 255, 255, 0.04) 100%);\n  pointer-events: none;\n  border-radius: 20px;\n}\n.credit-card--preview[_ngcontent-%COMP%] {\n  width: 380px;\n  max-width: 100%;\n}\n.emv-chip[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 32px;\n  margin-bottom: 8px;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));\n  z-index: 1;\n}\n.emv-chip[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.card-eye-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 0.4;\n  transition: all 0.25s ease;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 5;\n}\n.card-eye-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.card-eye-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  color: white;\n  opacity: 1;\n}\n.card-delete-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.25);\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.7);\n  opacity: 0;\n  transition: all 0.25s ease;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 5;\n}\n.card-delete-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.card-delete-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(239, 68, 68, 0.4);\n  color: white;\n  transform: scale(1.1);\n}\n.card-delete-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.8 !important;\n  cursor: not-allowed;\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.4);\n}\n.card-delete-btn.loading[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_rotateBtn 1s linear infinite;\n}\n.card-3d-wrapper[_ngcontent-%COMP%]:hover   .card-delete-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@keyframes _ngcontent-%COMP%_rotateBtn {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card-body-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 1;\n}\n.card-name-row[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.card-issuer[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  opacity: 0.7;\n}\n.card-number[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", monospace;\n  font-size: 1.35rem;\n  letter-spacing: 0.2em;\n  margin-bottom: 14px;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);\n  color: white;\n}\n.card-number.clickable[_ngcontent-%COMP%] {\n  cursor: copy;\n  transition: transform 0.2s ease, text-shadow 0.2s ease;\n}\n.card-number.clickable[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);\n}\n.card-details-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 28px;\n}\n.card-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.card-detail-label[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.55rem;\n  letter-spacing: 0.1em;\n  opacity: 0.55;\n  color: white;\n}\n.card-detail-value[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.8rem;\n  opacity: 0.9;\n  letter-spacing: 0.04em;\n  color: white;\n}\n.card-brand-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 44px;\n  right: 28px;\n  z-index: 2;\n}\n.visa-logo[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.4rem;\n  font-weight: 800;\n  font-style: italic;\n  color: white;\n  letter-spacing: 0.04em;\n  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n}\n.visa-logo--lg[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.mastercard-logo[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  width: 48px;\n  height: 28px;\n}\n.mastercard-logo[_ngcontent-%COMP%]   .mc-circle[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n}\n.mastercard-logo[_ngcontent-%COMP%]   .mc-red[_ngcontent-%COMP%] {\n  left: 0;\n  background: #EB001B;\n}\n.mastercard-logo[_ngcontent-%COMP%]   .mc-orange[_ngcontent-%COMP%] {\n  left: 18px;\n  background: #F79E1B;\n  mix-blend-mode: hard-light;\n}\n.mastercard-logo--lg[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 40px;\n}\n.mastercard-logo--lg[_ngcontent-%COMP%]   .mc-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n.mastercard-logo--lg[_ngcontent-%COMP%]   .mc-orange[_ngcontent-%COMP%] {\n  left: 24px;\n}\n.rupay-logo[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: white;\n  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n}\n.rupay-logo--lg[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.amex-logo[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.12em;\n  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n}\n.amex-logo--lg[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.card-bottom-bar[_ngcontent-%COMP%] {\n  margin-top: auto;\n  z-index: 1;\n}\n.card-bottom-bar[_ngcontent-%COMP%]   .limit-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.58rem;\n  font-family: "Space Grotesk", sans-serif;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  opacity: 0.65;\n  margin-bottom: 6px;\n  color: white;\n}\n.card-bottom-bar[_ngcontent-%COMP%]   .limit-track[_ngcontent-%COMP%] {\n  height: 3px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 2px;\n  overflow: hidden;\n}\n.card-bottom-bar[_ngcontent-%COMP%]   .limit-track[_ngcontent-%COMP%]   .limit-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 2px;\n  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.new-card-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1.586/1;\n  border-radius: 20px;\n  border: 2px dashed rgba(107, 110, 249, 0.3);\n  background: rgba(255, 255, 255, 0.4);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.new-card-placeholder[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  transform: scale(1.03);\n  background: rgba(255, 255, 255, 0.7);\n}\n.new-card-placeholder[_ngcontent-%COMP%]   .add-circle[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: var(--primary-light);\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.new-card-placeholder[_ngcontent-%COMP%]   .add-circle[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.new-card-placeholder[_ngcontent-%COMP%]   .new-card-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--primary);\n  margin-bottom: 6px;\n}\n.new-card-placeholder[_ngcontent-%COMP%]   .new-card-sub[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.bottom-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 24px 0;\n}\n.bottom-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 40px;\n}\n.transactions-panel[_ngcontent-%COMP%] {\n  flex: 0 0 60%;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.transactions-panel[_ngcontent-%COMP%]   .transaction-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: var(--glass-bg);\n  border-radius: 16px;\n  transition: transform 0.2s ease;\n}\n.transactions-panel[_ngcontent-%COMP%]   .transaction-row[_ngcontent-%COMP%]:hover {\n  transform: translateX(8px);\n  background: var(--glass-bg-strong);\n}\n.transactions-panel[_ngcontent-%COMP%]   .transaction-row[_ngcontent-%COMP%]   .txn-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.transactions-panel[_ngcontent-%COMP%]   .transaction-row[_ngcontent-%COMP%]   .txn-icon-circle[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.transactions-panel[_ngcontent-%COMP%]   .transaction-row[_ngcontent-%COMP%]   .txn-icon-circle.bg-green[_ngcontent-%COMP%] {\n  background: #10B981;\n}\n.transactions-panel[_ngcontent-%COMP%]   .transaction-row[_ngcontent-%COMP%]   .txn-icon-circle.bg-purple[_ngcontent-%COMP%] {\n  background: #8B5CF6;\n}\n.transactions-panel[_ngcontent-%COMP%]   .transaction-row[_ngcontent-%COMP%]   .txn-icon-circle.bg-indigo[_ngcontent-%COMP%] {\n  background: #6366F1;\n}\n.transactions-panel[_ngcontent-%COMP%]   .transaction-row[_ngcontent-%COMP%]   .txn-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.transactions-panel[_ngcontent-%COMP%]   .transaction-row[_ngcontent-%COMP%]   .txn-details[_ngcontent-%COMP%]   .txn-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 700;\n  font-size: 1.05rem;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.transactions-panel[_ngcontent-%COMP%]   .transaction-row[_ngcontent-%COMP%]   .txn-details[_ngcontent-%COMP%]   .txn-sub[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.transactions-panel[_ngcontent-%COMP%]   .transaction-row[_ngcontent-%COMP%]   .txn-amount[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", monospace;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.tier-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--glass-bg-strong, rgba(255, 255, 255, 0.75));\n  backdrop-filter: blur(28px);\n  -webkit-backdrop-filter: blur(28px);\n  border-radius: 24px;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.05);\n}\n.tier-panel[_ngcontent-%COMP%]   .tier-icon-circle[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: rgba(136, 136, 170, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n  color: var(--text-secondary);\n}\n.tier-panel[_ngcontent-%COMP%]   .tier-icon-circle[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.tier-panel[_ngcontent-%COMP%]   .tier-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 12px 0;\n}\n.tier-panel[_ngcontent-%COMP%]   .tier-desc[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.95rem;\n  color: var(--text-secondary);\n  line-height: 1.5;\n  margin: 0 0 24px 0;\n}\n.tier-panel[_ngcontent-%COMP%]   .tier-desc[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.tier-panel[_ngcontent-%COMP%]   .tier-desc[_ngcontent-%COMP%]   .text-primary-bold[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 700;\n}\n.tier-panel[_ngcontent-%COMP%]   .tier-link[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--primary);\n  text-decoration: none;\n  letter-spacing: 0.1em;\n  padding: 8px 16px;\n  background: var(--primary-light);\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.tier-panel[_ngcontent-%COMP%]   .tier-link[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: var(--glass-bg-strong, rgba(255, 255, 255, 0.92));\n  -webkit-backdrop-filter: blur(28px);\n  backdrop-filter: blur(28px);\n  border-radius: 28px;\n  width: 580px;\n  max-width: 95vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.2);\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 28px 32px 0;\n}\n.modal-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-back-btn[_ngcontent-%COMP%], \n.modal-close-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-secondary);\n  transition: all 0.2s ease;\n}\n.modal-back-btn[_ngcontent-%COMP%]:hover, \n.modal-close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.12);\n  color: var(--text-primary);\n}\n.modal-back-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%], \n.modal-close-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.step-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n  padding: 20px 32px 0;\n}\n.step-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n.step-dot--active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  box-shadow: 0 0 0 3px rgba(107, 110, 249, 0.2);\n}\n.step-dot--done[_ngcontent-%COMP%] {\n  background: #22C55E;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);\n}\n.step-line[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 2px;\n  background: rgba(0, 0, 0, 0.08);\n  transition: background 0.3s ease;\n}\n.step-line--active[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px 32px 32px;\n}\n.modal-subtitle[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  margin: 0 0 24px 0;\n}\n.network-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.network-card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 20px;\n  padding: 32px 24px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.network-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1),\n      transparent);\n  pointer-events: none;\n  border-radius: 20px;\n}\n.network-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.04);\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);\n}\n.network-card-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.network-label[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.8);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group--full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-group--third[_ngcontent-%COMP%] {\n  grid-column: span 1;\n}\n@media (min-width: 580px) {\n  .form-group--third[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 18px;\n}\n.form-group[_ngcontent-%COMP%] {\n  grid-column: span 3;\n}\n.form-group--full[_ngcontent-%COMP%] {\n  grid-column: span 6;\n}\n.form-group--third[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.form-label[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.6;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.7);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  color: var(--text-primary);\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(107, 110, 249, 0.12);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.form-input--mono[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", monospace;\n  letter-spacing: 0.15em;\n}\n.form-input--prefixed[_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n.form-select[_ngcontent-%COMP%] {\n  appearance: none;\n  cursor: pointer;\n}\n.form-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.form-input-wrap[_ngcontent-%COMP%]   .form-prefix[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.modal-next-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 24px;\n  padding: 14px;\n  border: none;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 700;\n  font-size: 0.95rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s ease;\n}\n.modal-next-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(107, 110, 249, 0.35);\n}\n.modal-next-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.modal-next-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.preview-card-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 28px;\n}\n.review-summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border-radius: 16px;\n  overflow: hidden;\n  background: rgba(255, 255, 255, 0.5);\n  margin-bottom: 24px;\n}\n.review-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.review-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.review-label[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.review-value[_ngcontent-%COMP%] {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.review-value.mono[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", monospace;\n  letter-spacing: 0.1em;\n}\n.modal-submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  border: none;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #22C55E,\n      #16a34a);\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 700;\n  font-size: 1rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  transition: all 0.2s ease;\n}\n.modal-submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.35);\n}\n.modal-submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.modal-submit-btn[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", monospace !important;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=cards.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardsComponent, [{
    type: Component,
    args: [{ selector: "app-cards", standalone: true, imports: [CommonModule, RouterLink, FormsModule, SidebarComponent, ThemeToggleComponent, ComingSoonComponent, ToastComponent], template: `<!-- Ambient Orbs -->\r
<div class="ambient-orb orb-top-right"></div>\r
<div class="ambient-orb orb-bottom-left"></div>\r
\r
<div class="page-layout">\r
\r
  <!-- SIDEBAR -->\r
  <app-sidebar />\r
\r
  <!-- MAIN CONTENT -->\r
  <main class="main-content">\r
\r
    <!-- TOP BAR -->\r
    <header class="topbar">\r
      <div class="page-title-block">\r
        <h1 class="page-heading">Digital Vault</h1>\r
        <p class="page-desc">Manage your elite credit portfolio and spending limits.</p>\r
      </div>\r
\r
      <div class="topbar-actions">\r
        <app-theme-toggle />\r
        <div class="search-pill glass-card">\r
          <span class="material-symbols-outlined text-muted">search</span>\r
          <input type="text" placeholder="Search cards..." class="search-input">\r
        </div>\r
        <button class="icon-btn glass-card" (click)="onWalletClick()">\r
          <span class="material-symbols-outlined">account_balance_wallet</span>\r
        </button>\r
      </div>\r
    </header>\r
\r
    <!-- Global Toasts -->\r
    <app-toast />\r
\r
    <!-- CREDIT CARDS GRID -->\r
    <section class="cards-grid-section">\r
      <div class="cards-grid">\r
\r
        @for (card of cards(); track card.id; let i = $index) {\r
        <div class="card-column">\r
          <div class="card-3d-wrapper">\r
            <div class="credit-card" [style.background]="getGradient(card)">\r
\r
              <!-- EMV Chip -->\r
              <div class="emv-chip">\r
                <svg viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg">\r
                  <rect x="0" y="0" width="50" height="40" rx="6" ry="6" fill="#c9a84c" />\r
                  <rect x="0" y="0" width="50" height="40" rx="6" ry="6" [attr.fill]="'url(#chipGrad' + i + ')'" />\r
                  <line x1="0" y1="13" x2="50" y2="13" stroke="#b8962d" stroke-width="0.8" />\r
                  <line x1="0" y1="20" x2="50" y2="20" stroke="#b8962d" stroke-width="0.8" />\r
                  <line x1="0" y1="27" x2="50" y2="27" stroke="#b8962d" stroke-width="0.8" />\r
                  <line x1="25" y1="0" x2="25" y2="40" stroke="#b8962d" stroke-width="0.8" />\r
                  <defs>\r
                    <linearGradient [attr.id]="'chipGrad' + i" x1="0" y1="0" x2="1" y2="1">\r
                      <stop offset="0%" stop-color="#dbb85c" stop-opacity="0.4" />\r
                      <stop offset="100%" stop-color="#a67c00" stop-opacity="0.2" />\r
                    </linearGradient>\r
                  </defs>\r
                </svg>\r
              </div>\r
\r
              <!-- Eye toggle -->\r
              <button class="card-eye-btn" (click)="toggleDetails(i); $event.stopPropagation()"\r
                [class.loading]="revealingIds().has(card.id)" [disabled]="revealingIds().has(card.id)">\r
                <span class="material-symbols-outlined">\r
                  {{ revealingIds().has(card.id) ? 'sync' : (card.showDetails ? 'visibility_off' : 'visibility') }}\r
                </span>\r
              </button>\r
\r
              <!-- Deletion Button (Locked) -->\r
              <button class="card-delete-btn" (click)="deleteCard(card.id); $event.stopPropagation()"\r
                [disabled]="cardService.deletingIds().has(card.id)"\r
                [class.loading]="cardService.deletingIds().has(card.id)">\r
                <span class="material-symbols-outlined">\r
                  {{ cardService.deletingIds().has(card.id) ? 'sync' : 'delete_forever' }}\r
                </span>\r
              </button>\r
\r
              <!-- Card body -->\r
              <div class="card-body-content" (click)="card.showDetails ? copyToClipboard(card.fullNumber) : null">\r
                <div class="card-name-row">\r
                  <span class="card-issuer">{{ card.issuerName }}</span>\r
                </div>\r
                <div class="card-number mono" [class.clickable]="card.showDetails"\r
                  [title]="card.showDetails ? 'Click to copy' : ''">\r
                  {{ getDisplayNumber(card) }}\r
                </div>\r
                <div class="card-details-row">\r
                  <div class="card-detail">\r
                    <span class="card-detail-label">CARD HOLDER</span>\r
                    <span class="card-detail-value">{{ card.cardholderName }}</span>\r
                  </div>\r
                  <div class="card-detail">\r
                    <span class="card-detail-label">VALID THRU</span>\r
                    <span class="card-detail-value">{{ formatExpiry(card) }}</span>\r
                  </div>\r
                  <div class="card-detail">\r
                    <span class="card-detail-label">CVV</span>\r
                    <span class="card-detail-value mono">{{ getDisplayCvv(card) }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- Network logo -->\r
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
              <!-- Limit bar at bottom -->\r
              <div class="card-bottom-bar">\r
                <div class="limit-header">\r
                  <span>LIMIT USAGE</span>\r
                  <span>{{ formatLimit(card.currentBalance) }} / {{ formatLimit(card.creditLimit) }}</span>\r
                </div>\r
                <div class="limit-track">\r
                  <div class="limit-bar-fill" [style.width.%]="card.usagePercent"\r
                    [style.background]="getBarColor(card)"></div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        }\r
\r
        <!-- Link New Card -->\r
        <div class="card-column">\r
          <div class="new-card-placeholder" (click)="openModal()">\r
            <div class="add-circle">\r
              <span class="material-symbols-outlined">add</span>\r
            </div>\r
            <span class="new-card-title">Link New Card</span>\r
            <span class="new-card-sub">Add to your premium collection</span>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </section>\r
\r
    <!-- RECENT TRANSACTIONS + TIER STATUS -->\r
    <section class="bottom-section">\r
      <h2 class="section-title">Recent Card Transactions</h2>\r
\r
      <div class="bottom-content">\r
        <div class="transactions-panel">\r
          @if (transactions.length > 0) {\r
          @for (txn of transactions; track txn.title) {\r
          <div class="transaction-row">\r
            <div class="txn-left">\r
              <div class="txn-icon-circle {{ txn.bgClass || 'bg-indigo' }}">\r
                <span class="material-symbols-outlined">{{ txn.icon || 'receipt_long' }}</span>\r
              </div>\r
              <div class="txn-details">\r
                <span class="txn-title">{{ txn.title }}</span>\r
                <span class="txn-sub">{{ txn.subtitle }}</span>\r
              </div>\r
            </div>\r
            <div class="txn-amount mono" [class.text-error]="txn.isNegative">{{ txn.amount }}</div>\r
          </div>\r
          }\r
          } @else {\r
          <div class="empty-state" style="padding: 2rem; text-align: center; color: var(--text-muted);">\r
            <span class="material-symbols-outlined"\r
              style="font-size: 2rem; margin-bottom: 0.5rem; opacity: 0.5;">history</span>\r
            <p>No recent transactions</p>\r
          </div>\r
          }\r
        </div>\r
      </div>\r
    </section>\r
\r
  </main>\r
</div>\r
\r
<!-- --------------------------------------*\x90 LINK CARD MODAL ------------------*\x90 -->\r
@if (modalOpen()) {\r
<div class="modal-overlay" (click)="closeModal()">\r
  <div class="modal-container" (click)="$event.stopPropagation()">\r
\r
    <!-- Modal header -->\r
    <div class="modal-header">\r
      <div class="modal-header-left">\r
        @if (modalStep() > 1) {\r
        <button class="modal-back-btn" (click)="goBackToStep(modalStep() === 3 ? 2 : 1)">\r
          <span class="material-symbols-outlined">arrow_back</span>\r
        </button>\r
        }\r
        <h2 class="modal-title">\r
          @if (modalStep() === 1) { Select Card Network }\r
          @if (modalStep() === 2) { Enter Card Details }\r
          @if (modalStep() === 3) { Review & Confirm }\r
        </h2>\r
      </div>\r
      <button class="modal-close-btn" (click)="closeModal()">\r
        <span class="material-symbols-outlined">close</span>\r
      </button>\r
    </div>\r
\r
    <!-- Step indicator -->\r
    <div class="step-indicator">\r
      <div class="step-dot" [class.step-dot--active]="modalStep() >= 1" [class.step-dot--done]="modalStep() > 1"></div>\r
      <div class="step-line" [class.step-line--active]="modalStep() >= 2"></div>\r
      <div class="step-dot" [class.step-dot--active]="modalStep() >= 2" [class.step-dot--done]="modalStep() > 2"></div>\r
      <div class="step-line" [class.step-line--active]="modalStep() >= 3"></div>\r
      <div class="step-dot" [class.step-dot--active]="modalStep() >= 3"></div>\r
    </div>\r
\r
    <!-- ---------- STEP 1: Select Network ---------- -->\r
    @if (modalStep() === 1) {\r
    <div class="modal-body">\r
      <p class="modal-subtitle">Choose your card network to get started</p>\r
      <div class="network-grid">\r
        @for (net of networks; track net) {\r
        <button class="network-card" [style.background]="networkConfig[net].gradient" (click)="selectNetwork(net)">\r
          <div class="network-card-inner">\r
            @if (net === 'visa') {\r
            <span class="visa-logo visa-logo--lg">VISA</span>\r
            }\r
            @if (net === 'mastercard') {\r
            <div class="mastercard-logo mastercard-logo--lg">\r
              <div class="mc-circle mc-red"></div>\r
              <div class="mc-circle mc-orange"></div>\r
            </div>\r
            }\r
            @if (net === 'rupay') {\r
            <span class="rupay-logo rupay-logo--lg">RuPay</span>\r
            }\r
            @if (net === 'amex') {\r
            <span class="amex-logo amex-logo--lg">AMERICAN EXPRESS</span>\r
            }\r
            <span class="network-label">{{ networkConfig[net].label }}</span>\r
          </div>\r
        </button>\r
        }\r
      </div>\r
    </div>\r
    }\r
\r
    <!-- ---------- STEP 2: Enter Details ---------- -->\r
    @if (modalStep() === 2) {\r
    <div class="modal-body">\r
      <div class="form-grid">\r
        <!-- Cardholder Name -->\r
        <div class="form-group form-group--full">\r
          <label class="form-label">\r
            <span class="material-symbols-outlined">person</span>\r
            Cardholder Name\r
          </label>\r
          <input class="form-input" type="text" placeholder="DEEPAK KUMAR" [(ngModel)]="newCard.cardholderName" />\r
        </div>\r
\r
        <!-- Card Number -->\r
        <div class="form-group form-group--full">\r
          <label class="form-label">\r
            <span class="material-symbols-outlined">credit_card</span>\r
            Card Number\r
          </label>\r
          <input class="form-input form-input--mono" type="text" placeholder="4562 4899 5686 3542"\r
            [value]="newCard.cardNumber" (input)="formatCardInput($event)" maxlength="19" />\r
        </div>\r
\r
        <!-- Expiry Month + Year -->\r
        <div class="form-group form-group--third">\r
          <label class="form-label">Month</label>\r
          <select class="form-input form-select" [(ngModel)]="newCard.expiryMonth">\r
            @for (m of months; track m) {\r
            <option [ngValue]="m">{{ m < 10 ? '0' + m : m }}</option>\r
                }\r
          </select>\r
        </div>\r
        <div class="form-group form-group--third">\r
          <label class="form-label">Year</label>\r
          <select class="form-input form-select" [(ngModel)]="newCard.expiryYear">\r
            @for (y of years; track y) {\r
            <option [ngValue]="y">{{ y }}</option>\r
            }\r
          </select>\r
        </div>\r
\r
        <!-- CVV -->\r
        <div class="form-group form-group--third">\r
          <label class="form-label">\r
            <span class="material-symbols-outlined">lock</span>\r
            CVV\r
          </label>\r
          <input class="form-input form-input--mono" type="password" placeholder="123" [(ngModel)]="newCard.cvv"\r
            maxlength="4" />\r
        </div>\r
\r
        <!-- Issuer/Bank Name -->\r
        <div class="form-group">\r
          <label class="form-label">\r
            <span class="material-symbols-outlined">account_balance</span>\r
            Issuer / Bank\r
          </label>\r
          <select class="form-input form-select" [(ngModel)]="newCard.issuerName">\r
            <option value="" disabled selected>Select Issuer</option>\r
            @for (issuer of issuers; track issuer) {\r
              <option [value]="issuer">{{ issuer }}</option>\r
            }\r
          </select>\r
        </div>\r
\r
        <!-- Credit Limit -->\r
        <div class="form-group">\r
          <label class="form-label">\r
            <span class="material-symbols-outlined">payments</span>\r
            Credit Limit\r
          </label>\r
          <div class="form-input-wrap">\r
            <span class="form-prefix">Rs.</span>\r
            <input class="form-input form-input--prefixed" type="number" placeholder="500000"\r
              [(ngModel)]="newCard.creditLimit" />\r
          </div>\r
        </div>\r
\r
        <!-- Billing Cycle Start Day -->\r
        <div class="form-group form-group--full">\r
          <label class="form-label">\r
            <span class="material-symbols-outlined">calendar_today</span>\r
            Billing Cycle Start Day\r
          </label>\r
          <select class="form-input form-select" [(ngModel)]="newCard.billingCycleStartDay">\r
            @for (d of billingDays; track d) {\r
            <option [ngValue]="d">{{ d }}</option>\r
            }\r
          </select>\r
        </div>\r
      </div>\r
\r
      <button class="modal-next-btn" [disabled]="!isStep2Valid()" (click)="goToReview()">\r
        Review Card\r
        <span class="material-symbols-outlined">arrow_forward</span>\r
      </button>\r
    </div>\r
    }\r
\r
    <!-- ---------- STEP 3: Review & Confirm ---------- -->\r
    @if (modalStep() === 3) {\r
    <div class="modal-body">\r
\r
      <!-- Card preview -->\r
      <div class="preview-card-wrapper">\r
        <div class="credit-card credit-card--preview" [style.background]="networkConfig[selectedNetwork()!].gradient">\r
          <div class="emv-chip">\r
            <svg viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg">\r
              <rect x="0" y="0" width="50" height="40" rx="6" ry="6" fill="#c9a84c" />\r
              <line x1="0" y1="13" x2="50" y2="13" stroke="#b8962d" stroke-width="0.8" />\r
              <line x1="0" y1="20" x2="50" y2="20" stroke="#b8962d" stroke-width="0.8" />\r
              <line x1="0" y1="27" x2="50" y2="27" stroke="#b8962d" stroke-width="0.8" />\r
              <line x1="25" y1="0" x2="25" y2="40" stroke="#b8962d" stroke-width="0.8" />\r
            </svg>\r
          </div>\r
          <div class="card-body-content">\r
            <div class="card-name-row">\r
              <span class="card-issuer">{{ newCard.issuerName || 'BANK' }}</span>\r
            </div>\r
            <div class="card-number mono">{{ newCard.cardNumber || '**** **** **** ****' }}</div>\r
            <div class="card-details-row">\r
              <div class="card-detail">\r
                <span class="card-detail-label">CARD HOLDER</span>\r
                <span class="card-detail-value">{{ newCard.cardholderName || 'NAME' }}</span>\r
              </div>\r
              <div class="card-detail">\r
                <span class="card-detail-label">VALID THRU</span>\r
                <span class="card-detail-value">{{ (newCard.expiryMonth < 10 ? '0' : '' ) + newCard.expiryMonth }}/{{\r
                    ('' + newCard.expiryYear).slice(-2) }}</span>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="card-brand-logo">\r
            @if (selectedNetwork() === 'visa') { <span class="visa-logo">VISA</span> }\r
            @if (selectedNetwork() === 'mastercard') {\r
            <div class="mastercard-logo">\r
              <div class="mc-circle mc-red"></div>\r
              <div class="mc-circle mc-orange"></div>\r
            </div>\r
            }\r
            @if (selectedNetwork() === 'rupay') { <span class="rupay-logo">RuPay</span> }\r
            @if (selectedNetwork() === 'amex') { <span class="amex-logo">AMERICAN EXPRESS</span> }\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Summary -->\r
      <div class="review-summary">\r
        <div class="review-row">\r
          <span class="review-label">Network</span>\r
          <span class="review-value">{{ networkConfig[selectedNetwork()!].label }}</span>\r
        </div>\r
        <div class="review-row">\r
          <span class="review-label">Cardholder</span>\r
          <span class="review-value">{{ newCard.cardholderName }}</span>\r
        </div>\r
        <div class="review-row">\r
          <span class="review-label">Card Number</span>\r
          <span class="review-value mono">{{ newCard.cardNumber }}</span>\r
        </div>\r
        <div class="review-row">\r
          <span class="review-label">CVV</span>\r
          <span class="review-value mono">***</span>\r
        </div>\r
        <div class="review-row">\r
          <span class="review-label">Expiry</span>\r
          <span class="review-value">{{ (newCard.expiryMonth < 10 ? '0' : '' ) + newCard.expiryMonth }}/{{\r
              newCard.expiryYear }}</span>\r
        </div>\r
        <div class="review-row">\r
          <span class="review-label">Issuer</span>\r
          <span class="review-value">{{ newCard.issuerName }}</span>\r
        </div>\r
        <div class="review-row">\r
          <span class="review-label">Credit Limit</span>\r
          <span class="review-value">Rs.{{ newCard.creditLimit.toLocaleString('en-IN') }}</span>\r
        </div>\r
        <div class="review-row">\r
          <span class="review-label">Billing Cycle</span>\r
          <span class="review-value">Day {{ newCard.billingCycleStartDay }}</span>\r
        </div>\r
      </div>\r
\r
      <button class="modal-submit-btn" [disabled]="isSubmitting()" (click)="submitCard()">\r
        @if (isSubmitting()) {\r
        <span class="btn-spinner"></span> Linking...\r
        } @else {\r
        <span class="material-symbols-outlined">verified</span> Link Card\r
        }\r
      </button>\r
    </div>\r
    }\r
\r
  </div>\r
</div>\r
}\r
\r
<app-coming-soon />`, styles: ['/* src/app/features/cards/cards.scss */\n.ambient-orb {\n  position: fixed;\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 1;\n}\n.orb-top-right {\n  top: -100px;\n  right: -100px;\n  width: 500px;\n  height: 500px;\n  background: rgba(167, 139, 250, 0.2);\n  filter: blur(120px);\n}\n.orb-bottom-left {\n  bottom: -150px;\n  left: -150px;\n  width: 600px;\n  height: 600px;\n  background: rgba(107, 110, 249, 0.1);\n  filter: blur(150px);\n}\n.page-layout {\n  display: flex;\n  min-height: 100vh;\n  position: relative;\n  z-index: 10;\n}\n.sidebar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 100vh;\n  background: var(--glass-bg);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  display: flex;\n  flex-direction: column;\n  padding: 32px 20px;\n  z-index: 50;\n}\n.sidebar-header {\n  margin-bottom: 40px;\n  padding-left: 12px;\n}\n.brand-name {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: -0.04em;\n  display: block;\n}\n.brand-sub {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  color: var(--text-secondary);\n  margin-top: -2px;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  text-decoration: none;\n  color: var(--text-secondary);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 500;\n  font-size: 0.95rem;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.nav-item .material-symbols-outlined {\n  font-size: 20px;\n  opacity: 0.8;\n}\n.nav-item:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n}\n.nav-item.active {\n  background: var(--primary);\n  color: #fff;\n}\n.nav-item.active .material-symbols-outlined {\n  opacity: 1;\n  font-variation-settings: "FILL" 1;\n}\n.sidebar-promo {\n  padding: 20px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.4);\n  text-align: center;\n}\n.sidebar-promo .promo-title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 6px;\n}\n.sidebar-promo .promo-desc {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n  margin-bottom: 16px;\n}\n.sidebar-promo .btn-upgrade {\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 600;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.sidebar-promo .btn-upgrade:hover {\n  transform: translateY(-2px);\n}\n.notif-badge {\n  background: var(--primary);\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 700;\n  padding: 2px 6px;\n  border-radius: 20px;\n  margin-left: auto;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 12px rgba(107, 110, 249, 0.4);\n}\n.main-content {\n  margin-left: 300px;\n  padding: 40px 60px;\n  flex: 1;\n  max-width: 1600px;\n}\n.topbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 48px;\n}\n.topbar .page-heading {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 8px 0;\n  letter-spacing: -0.03em;\n}\n.topbar .page-desc {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.topbar .topbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.topbar .glass-card {\n  background: var(--glass-bg, rgba(255, 255, 255, 0.55));\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  box-shadow: 0 8px 24px rgba(100, 100, 200, 0.08);\n}\n.topbar .search-pill {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 20px;\n  border-radius: 100px;\n  width: 250px;\n}\n.topbar .search-pill .search-input {\n  border: none;\n  background: transparent;\n  outline: none;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  color: var(--text-primary);\n  width: 100%;\n}\n.topbar .search-pill .search-input::placeholder {\n  color: var(--text-muted);\n}\n.topbar .icon-btn {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.topbar .icon-btn:hover {\n  background: var(--glass-bg-strong);\n  color: var(--primary);\n}\n.topbar .icon-btn .material-symbols-outlined {\n  font-size: 22px;\n}\n.cards-grid-section {\n  margin-bottom: 56px;\n}\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 40px 36px;\n  justify-content: flex-start;\n}\n.card-column {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.card-3d-wrapper {\n  cursor: pointer;\n  will-change: transform;\n  isolation: isolate;\n  border-radius: 20px;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.card-3d-wrapper:hover {\n  transform: scale(1.06);\n  z-index: 2;\n}\n.card-3d-wrapper:hover .credit-card {\n  box-shadow: 0 24px 56px rgba(0, 0, 0, 0.25);\n}\n.card-3d-wrapper:hover .card-eye-btn {\n  opacity: 1;\n}\n.credit-card {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 1.586/1;\n  border-radius: 20px;\n  padding: 28px 28px 18px;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n  transition: box-shadow 0.3s ease;\n}\n.credit-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 50%,\n      rgba(255, 255, 255, 0.04) 100%);\n  pointer-events: none;\n  border-radius: 20px;\n}\n.credit-card--preview {\n  width: 380px;\n  max-width: 100%;\n}\n.emv-chip {\n  width: 42px;\n  height: 32px;\n  margin-bottom: 8px;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));\n  z-index: 1;\n}\n.emv-chip svg {\n  width: 100%;\n  height: 100%;\n}\n.card-eye-btn {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 0.4;\n  transition: all 0.25s ease;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 5;\n}\n.card-eye-btn .material-symbols-outlined {\n  font-size: 18px;\n}\n.card-eye-btn:hover {\n  background: rgba(255, 255, 255, 0.25);\n  color: white;\n  opacity: 1;\n}\n.card-delete-btn {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.25);\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.7);\n  opacity: 0;\n  transition: all 0.25s ease;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 5;\n}\n.card-delete-btn .material-symbols-outlined {\n  font-size: 18px;\n}\n.card-delete-btn:hover:not(:disabled) {\n  background: rgba(239, 68, 68, 0.4);\n  color: white;\n  transform: scale(1.1);\n}\n.card-delete-btn:disabled {\n  opacity: 0.8 !important;\n  cursor: not-allowed;\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.4);\n}\n.card-delete-btn.loading .material-symbols-outlined {\n  animation: rotateBtn 1s linear infinite;\n}\n.card-3d-wrapper:hover .card-delete-btn {\n  opacity: 1;\n}\n@keyframes rotateBtn {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.card-body-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 1;\n}\n.card-name-row {\n  margin-bottom: 10px;\n}\n.card-issuer {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  opacity: 0.7;\n}\n.card-number {\n  font-family: "Space Grotesk", monospace;\n  font-size: 1.35rem;\n  letter-spacing: 0.2em;\n  margin-bottom: 14px;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);\n  color: white;\n}\n.card-number.clickable {\n  cursor: copy;\n  transition: transform 0.2s ease, text-shadow 0.2s ease;\n}\n.card-number.clickable:hover {\n  transform: scale(1.02);\n  text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);\n}\n.card-details-row {\n  display: flex;\n  gap: 28px;\n}\n.card-detail {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.card-detail-label {\n  font-family: "Space Grotesk", sans-serif;\n  font-size: 0.55rem;\n  letter-spacing: 0.1em;\n  opacity: 0.55;\n  color: white;\n}\n.card-detail-value {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.8rem;\n  opacity: 0.9;\n  letter-spacing: 0.04em;\n  color: white;\n}\n.card-brand-logo {\n  position: absolute;\n  bottom: 44px;\n  right: 28px;\n  z-index: 2;\n}\n.visa-logo {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.4rem;\n  font-weight: 800;\n  font-style: italic;\n  color: white;\n  letter-spacing: 0.04em;\n  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n}\n.visa-logo--lg {\n  font-size: 2rem;\n}\n.mastercard-logo {\n  display: flex;\n  position: relative;\n  width: 48px;\n  height: 28px;\n}\n.mastercard-logo .mc-circle {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n}\n.mastercard-logo .mc-red {\n  left: 0;\n  background: #EB001B;\n}\n.mastercard-logo .mc-orange {\n  left: 18px;\n  background: #F79E1B;\n  mix-blend-mode: hard-light;\n}\n.mastercard-logo--lg {\n  width: 64px;\n  height: 40px;\n}\n.mastercard-logo--lg .mc-circle {\n  width: 40px;\n  height: 40px;\n}\n.mastercard-logo--lg .mc-orange {\n  left: 24px;\n}\n.rupay-logo {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: white;\n  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n}\n.rupay-logo--lg {\n  font-size: 1.6rem;\n}\n.amex-logo {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.12em;\n  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n}\n.amex-logo--lg {\n  font-size: 0.9rem;\n}\n.card-bottom-bar {\n  margin-top: auto;\n  z-index: 1;\n}\n.card-bottom-bar .limit-header {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.58rem;\n  font-family: "Space Grotesk", sans-serif;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  opacity: 0.65;\n  margin-bottom: 6px;\n  color: white;\n}\n.card-bottom-bar .limit-track {\n  height: 3px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 2px;\n  overflow: hidden;\n}\n.card-bottom-bar .limit-track .limit-bar-fill {\n  height: 100%;\n  border-radius: 2px;\n  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.new-card-placeholder {\n  width: 100%;\n  aspect-ratio: 1.586/1;\n  border-radius: 20px;\n  border: 2px dashed rgba(107, 110, 249, 0.3);\n  background: rgba(255, 255, 255, 0.4);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.new-card-placeholder:hover {\n  border-color: var(--primary);\n  transform: scale(1.03);\n  background: rgba(255, 255, 255, 0.7);\n}\n.new-card-placeholder .add-circle {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: var(--primary-light);\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n.new-card-placeholder .add-circle .material-symbols-outlined {\n  font-size: 28px;\n}\n.new-card-placeholder .new-card-title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--primary);\n  margin-bottom: 6px;\n}\n.new-card-placeholder .new-card-sub {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.bottom-section .section-title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 24px 0;\n}\n.bottom-content {\n  display: flex;\n  gap: 40px;\n}\n.transactions-panel {\n  flex: 0 0 60%;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.transactions-panel .transaction-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  background: var(--glass-bg);\n  border-radius: 16px;\n  transition: transform 0.2s ease;\n}\n.transactions-panel .transaction-row:hover {\n  transform: translateX(8px);\n  background: var(--glass-bg-strong);\n}\n.transactions-panel .transaction-row .txn-left {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.transactions-panel .transaction-row .txn-icon-circle {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.transactions-panel .transaction-row .txn-icon-circle.bg-green {\n  background: #10B981;\n}\n.transactions-panel .transaction-row .txn-icon-circle.bg-purple {\n  background: #8B5CF6;\n}\n.transactions-panel .transaction-row .txn-icon-circle.bg-indigo {\n  background: #6366F1;\n}\n.transactions-panel .transaction-row .txn-details {\n  display: flex;\n  flex-direction: column;\n}\n.transactions-panel .transaction-row .txn-details .txn-title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 700;\n  font-size: 1.05rem;\n  color: var(--text-primary);\n  margin-bottom: 4px;\n}\n.transactions-panel .transaction-row .txn-details .txn-sub {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.transactions-panel .transaction-row .txn-amount {\n  font-family: "Space Grotesk", monospace;\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.tier-panel {\n  flex: 1;\n  background: var(--glass-bg-strong, rgba(255, 255, 255, 0.75));\n  backdrop-filter: blur(28px);\n  -webkit-backdrop-filter: blur(28px);\n  border-radius: 24px;\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.05);\n}\n.tier-panel .tier-icon-circle {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: rgba(136, 136, 170, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n  color: var(--text-secondary);\n}\n.tier-panel .tier-icon-circle .material-symbols-outlined {\n  font-size: 32px;\n}\n.tier-panel .tier-title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 12px 0;\n}\n.tier-panel .tier-desc {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.95rem;\n  color: var(--text-secondary);\n  line-height: 1.5;\n  margin: 0 0 24px 0;\n}\n.tier-panel .tier-desc strong {\n  color: var(--text-primary);\n}\n.tier-panel .tier-desc .text-primary-bold {\n  color: var(--primary);\n  font-weight: 700;\n}\n.tier-panel .tier-link {\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--primary);\n  text-decoration: none;\n  letter-spacing: 0.1em;\n  padding: 8px 16px;\n  background: var(--primary-light);\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.tier-panel .tier-link:hover {\n  background: var(--primary);\n  color: white;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: fadeIn 0.2s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-container {\n  background: var(--glass-bg-strong, rgba(255, 255, 255, 0.92));\n  -webkit-backdrop-filter: blur(28px);\n  backdrop-filter: blur(28px);\n  border-radius: 28px;\n  width: 580px;\n  max-width: 95vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.2);\n  animation: slideUp 0.3s ease;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 28px 32px 0;\n}\n.modal-header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.modal-title {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.modal-back-btn,\n.modal-close-btn {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: none;\n  background: rgba(0, 0, 0, 0.06);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--text-secondary);\n  transition: all 0.2s ease;\n}\n.modal-back-btn:hover,\n.modal-close-btn:hover {\n  background: rgba(0, 0, 0, 0.12);\n  color: var(--text-primary);\n}\n.modal-back-btn .material-symbols-outlined,\n.modal-close-btn .material-symbols-outlined {\n  font-size: 20px;\n}\n.step-indicator {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n  padding: 20px 32px 0;\n}\n.step-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n.step-dot--active {\n  background: var(--primary);\n  box-shadow: 0 0 0 3px rgba(107, 110, 249, 0.2);\n}\n.step-dot--done {\n  background: #22C55E;\n  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);\n}\n.step-line {\n  width: 60px;\n  height: 2px;\n  background: rgba(0, 0, 0, 0.08);\n  transition: background 0.3s ease;\n}\n.step-line--active {\n  background: var(--primary);\n}\n.modal-body {\n  padding: 24px 32px 32px;\n}\n.modal-subtitle {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  margin: 0 0 24px 0;\n}\n.network-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.network-card {\n  border: none;\n  border-radius: 20px;\n  padding: 32px 24px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.network-card::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1),\n      transparent);\n  pointer-events: none;\n  border-radius: 20px;\n}\n.network-card:hover {\n  transform: scale(1.04);\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);\n}\n.network-card-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.network-label {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.8);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group--full {\n  grid-column: 1/-1;\n}\n.form-group--third {\n  grid-column: span 1;\n}\n@media (min-width: 580px) {\n  .form-group--third {\n    grid-column: span 2;\n  }\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 18px;\n}\n.form-group {\n  grid-column: span 3;\n}\n.form-group--full {\n  grid-column: span 6;\n}\n.form-group--third {\n  grid-column: span 2;\n}\n.form-label {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.form-label .material-symbols-outlined {\n  font-size: 16px;\n  opacity: 0.6;\n}\n.form-input {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.7);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.9rem;\n  color: var(--text-primary);\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.form-input:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(107, 110, 249, 0.12);\n}\n.form-input::placeholder {\n  color: var(--text-muted);\n}\n.form-input--mono {\n  font-family: "Space Grotesk", monospace;\n  letter-spacing: 0.15em;\n}\n.form-input--prefixed {\n  padding-left: 30px;\n}\n.form-select {\n  appearance: none;\n  cursor: pointer;\n}\n.form-input-wrap {\n  position: relative;\n}\n.form-input-wrap .form-prefix {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-family: "Space Grotesk", monospace;\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.modal-next-btn {\n  width: 100%;\n  margin-top: 24px;\n  padding: 14px;\n  border: none;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 700;\n  font-size: 0.95rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s ease;\n}\n.modal-next-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(107, 110, 249, 0.35);\n}\n.modal-next-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.modal-next-btn .material-symbols-outlined {\n  font-size: 20px;\n}\n.preview-card-wrapper {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 28px;\n}\n.review-summary {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  border-radius: 16px;\n  overflow: hidden;\n  background: rgba(255, 255, 255, 0.5);\n  margin-bottom: 24px;\n}\n.review-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.review-row:last-child {\n  border-bottom: none;\n}\n.review-label {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.82rem;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.review-value {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.review-value.mono {\n  font-family: "Space Grotesk", monospace;\n  letter-spacing: 0.1em;\n}\n.modal-submit-btn {\n  width: 100%;\n  padding: 16px;\n  border: none;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #22C55E,\n      #16a34a);\n  color: white;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  font-weight: 700;\n  font-size: 1rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  transition: all 0.2s ease;\n}\n.modal-submit-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.35);\n}\n.modal-submit-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.modal-submit-btn .material-symbols-outlined {\n  font-size: 22px;\n}\n.btn-spinner {\n  width: 20px;\n  height: 20px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.mono {\n  font-family: "Space Grotesk", monospace !important;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=cards.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardsComponent, { className: "CardsComponent", filePath: "src/app/features/cards/cards.ts", lineNumber: 37 });
})();
export {
  CardsComponent
};
//# sourceMappingURL=chunk-7W2IOFJS.js.map
