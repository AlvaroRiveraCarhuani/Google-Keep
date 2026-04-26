import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/main.js");import {
  AppConfigurator,
  AppFloatingConfigurator,
  LayoutService,
  __spreadProps,
  __spreadValues
} from "/chunk-DVUQYGAQ.js";

// src/main.ts
import { bootstrapApplication } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_platform-browser.js?v=ae3c7c69";

// src/app.config.ts
import { provideHttpClient, withFetch } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common_http.js?v=ae3c7c69";
import { provideZonelessChangeDetection } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
import Aura from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@primeuix_themes_aura.js?v=ae3c7c69";
import { providePrimeNG } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_config.js?v=ae3c7c69";

// src/app/layout/component/app.layout.ts
import { Component as Component6, computed as computed2, effect as effect2, inject as inject4 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { CommonModule as CommonModule4 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
import { RouterModule as RouterModule5 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";

// src/app/layout/component/app.topbar.ts
import { Component, inject } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { RouterModule } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
import { CommonModule } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
import { StyleClassModule } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_styleclass.js?v=ae3c7c69";
import * as i0 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i1 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
import * as i2 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
import * as i3 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_styleclass.js?v=ae3c7c69";
var _c0 = (a0, a1) => ({ "pi ": true, "pi-moon": a0, "pi-sun": a1 });
var AppTopbar = class _AppTopbar {
  items;
  layoutService = inject(LayoutService);
  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => __spreadProps(__spreadValues({}, state), {
      darkTheme: !state.darkTheme
    }));
  }
  static \u0275fac = function AppTopbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppTopbar)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _AppTopbar, selectors: [["app-topbar"]], decls: 37, vars: 6, consts: [[1, "layout-topbar"], [1, "layout-topbar-logo-container"], [1, "layout-menu-button", "layout-topbar-action", 3, "click"], [1, "pi", "pi-bars"], ["routerLink", "/", 1, "layout-topbar-logo"], ["viewBox", "0 0 54 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z", "fill", "var(--primary-color)"], ["id", "mask0_1413_1551", "maskUnits", "userSpaceOnUse", "x", "0", "y", "8", "width", "54", "height", "11", 2, "mask-type", "alpha"], ["d", "M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z", "fill", "var(--primary-color)"], ["mask", "url(#mask0_1413_1551)"], ["d", "M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z", "fill", "var(--primary-color)"], [1, "layout-topbar-actions"], [1, "layout-config-menu"], ["type", "button", 1, "layout-topbar-action", 3, "click"], [3, "ngClass"], [1, "relative"], ["pStyleClass", "@next", "enterFromClass", "hidden", "enterActiveClass", "animate-scalein", "leaveToClass", "hidden", "leaveActiveClass", "animate-fadeout", 1, "layout-topbar-action", "layout-topbar-action-highlight", 3, "hideOnOutsideClick"], [1, "pi", "pi-palette"], ["pStyleClass", "@next", "enterFromClass", "hidden", "enterActiveClass", "animate-scalein", "leaveToClass", "hidden", "leaveActiveClass", "animate-fadeout", 1, "layout-topbar-menu-button", "layout-topbar-action", 3, "hideOnOutsideClick"], [1, "pi", "pi-ellipsis-v"], [1, "layout-topbar-menu", "hidden", "lg:block"], [1, "layout-topbar-menu-content"], ["type", "button", 1, "layout-topbar-action"], [1, "pi", "pi-calendar"], [1, "pi", "pi-inbox"], [1, "pi", "pi-user"]], template: function AppTopbar_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      i0.\u0275\u0275listener("click", function AppTopbar_Template_button_click_2_listener() {
        return ctx.layoutService.onMenuToggle();
      });
      i0.\u0275\u0275element(3, "i", 3);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(4, "a", 4);
      i0.\u0275\u0275namespaceSVG();
      i0.\u0275\u0275elementStart(5, "svg", 5);
      i0.\u0275\u0275element(6, "path", 6);
      i0.\u0275\u0275elementStart(7, "mask", 7);
      i0.\u0275\u0275element(8, "path", 8);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(9, "g", 9);
      i0.\u0275\u0275element(10, "path", 10);
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275namespaceHTML();
      i0.\u0275\u0275elementStart(11, "span");
      i0.\u0275\u0275text(12, "SAKAI");
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "button", 13);
      i0.\u0275\u0275listener("click", function AppTopbar_Template_button_click_15_listener() {
        return ctx.toggleDarkMode();
      });
      i0.\u0275\u0275element(16, "i", 14);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(17, "div", 15)(18, "button", 16);
      i0.\u0275\u0275element(19, "i", 17);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(20, "app-configurator");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(21, "button", 18);
      i0.\u0275\u0275element(22, "i", 19);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(23, "div", 20)(24, "div", 21)(25, "button", 22);
      i0.\u0275\u0275element(26, "i", 23);
      i0.\u0275\u0275elementStart(27, "span");
      i0.\u0275\u0275text(28, "Calendar");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(29, "button", 22);
      i0.\u0275\u0275element(30, "i", 24);
      i0.\u0275\u0275elementStart(31, "span");
      i0.\u0275\u0275text(32, "Messages");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(33, "button", 22);
      i0.\u0275\u0275element(34, "i", 25);
      i0.\u0275\u0275elementStart(35, "span");
      i0.\u0275\u0275text(36, "Profile");
      i0.\u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      i0.\u0275\u0275advance(16);
      i0.\u0275\u0275property("ngClass", i0.\u0275\u0275pureFunction2(3, _c0, ctx.layoutService.isDarkTheme(), !ctx.layoutService.isDarkTheme()));
      i0.\u0275\u0275advance(2);
      i0.\u0275\u0275property("hideOnOutsideClick", true);
      i0.\u0275\u0275advance(3);
      i0.\u0275\u0275property("hideOnOutsideClick", true);
    }
  }, dependencies: [RouterModule, i1.RouterOutlet, i1.RouterLink, i1.RouterLinkActive, i1.\u0275EmptyOutletComponent, CommonModule, i2.NgClass, i2.NgComponentOutlet, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i2.NgStyle, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i2.NgPlural, i2.NgPluralCase, StyleClassModule, i3.StyleClass, AppConfigurator, i2.AsyncPipe, i2.UpperCasePipe, i2.LowerCasePipe, i2.JsonPipe, i2.SlicePipe, i2.DecimalPipe, i2.PercentPipe, i2.TitleCasePipe, i2.CurrencyPipe, i2.DatePipe, i2.I18nPluralPipe, i2.I18nSelectPipe, i2.KeyValuePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(AppTopbar, [{
    type: Component,
    args: [{
      selector: "app-topbar",
      standalone: true,
      imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator],
      template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a class="layout-topbar-logo" routerLink="/">
                <svg viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z"
                        fill="var(--primary-color)"
                    />
                    <mask id="mask0_1413_1551" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="8" width="54" height="11">
                        <path d="M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z" fill="var(--primary-color)" />
                    </mask>
                    <g mask="url(#mask0_1413_1551)">
                        <path
                            d="M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z"
                            fill="var(--primary-color)"
                        />
                    </g>
                </svg>
                <span>SAKAI</span>
            </a>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                    <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                </button>
                <div class="relative">
                    <button
                        class="layout-topbar-action layout-topbar-action-highlight"
                        pStyleClass="@next"
                        enterFromClass="hidden"
                        enterActiveClass="animate-scalein"
                        leaveToClass="hidden"
                        leaveActiveClass="animate-fadeout"
                        [hideOnOutsideClick]="true"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <app-configurator />
                </div>
            </div>

            <button class="layout-topbar-menu-button layout-topbar-action" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v"></i>
            </button>

            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-calendar"></i>
                        <span>Calendar</span>
                    </button>
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-inbox"></i>
                        <span>Messages</span>
                    </button>
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-user"></i>
                        <span>Profile</span>
                    </button>
                </div>
            </div>
        </div>
    </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(AppTopbar, { className: "AppTopbar", filePath: "src/app/layout/component/app.topbar.ts", lineNumber: 84 });
})();
(() => {
  const id = "src%2Fapp%2Flayout%2Fcomponent%2Fapp.topbar.ts%40AppTopbar";
  function AppTopbar_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i0.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i0.\u0275\u0275replaceMetadata(AppTopbar, m.default, [i0, i1, i2, i3], [RouterModule, CommonModule, StyleClassModule, AppConfigurator, Component], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AppTopbar_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AppTopbar_HmrLoad(d.timestamp)));
})();

// src/app/layout/component/app.sidebar.ts
import { Component as Component4, effect, ElementRef, inject as inject3 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { NavigationEnd as NavigationEnd2, Router as Router2, RouterModule as RouterModule4 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
import { filter as filter2, Subject, takeUntil } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/rxjs.js?v=ae3c7c69";

// src/app/layout/component/app.menu.ts
import { Component as Component3 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { CommonModule as CommonModule3 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
import { RouterModule as RouterModule3 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";

// src/app/layout/component/app.menuitem.ts
import { Component as Component2, computed, inject as inject2, input, signal } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { NavigationEnd, Router, RouterModule as RouterModule2 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
import { CommonModule as CommonModule2 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
import { RippleModule } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_ripple.js?v=ae3c7c69";
import { filter } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/rxjs_operators.js?v=ae3c7c69";
import * as i02 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i12 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
import * as i22 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
import * as i32 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_ripple.js?v=ae3c7c69";
var _c02 = ["app-menuitem", ""];
var _c1 = () => ({ paths: "exact", queryParams: "ignored", matrixParams: "ignored", fragment: "ignored" });
var _forTrack0 = ($index, $item) => $item == null ? null : $item.label;
function AppMenuitem_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "div", 0);
    i02.\u0275\u0275text(1);
    i02.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i02.\u0275\u0275nextContext();
    i02.\u0275\u0275advance();
    i02.\u0275\u0275textInterpolate(ctx_r0.item().label);
  }
}
function AppMenuitem_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275element(0, "i", 7);
  }
}
function AppMenuitem_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = i02.\u0275\u0275getCurrentView();
    i02.\u0275\u0275elementStart(0, "a", 4);
    i02.\u0275\u0275listener("click", function AppMenuitem_Conditional_1_Template_a_click_0_listener($event) {
      i02.\u0275\u0275restoreView(_r2);
      const ctx_r0 = i02.\u0275\u0275nextContext();
      return i02.\u0275\u0275resetView(ctx_r0.itemClick($event));
    });
    i02.\u0275\u0275element(1, "i", 5);
    i02.\u0275\u0275elementStart(2, "span", 6);
    i02.\u0275\u0275text(3);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275conditionalCreate(4, AppMenuitem_Conditional_1_Conditional_4_Template, 1, 0, "i", 7);
    i02.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i02.\u0275\u0275nextContext();
    i02.\u0275\u0275property("ngClass", ctx_r0.item().class);
    i02.\u0275\u0275attribute("href", ctx_r0.item().url, i02.\u0275\u0275sanitizeUrl)("target", ctx_r0.item().target);
    i02.\u0275\u0275advance();
    i02.\u0275\u0275property("ngClass", ctx_r0.item().icon);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(ctx_r0.item().label);
    i02.\u0275\u0275advance();
    i02.\u0275\u0275conditional(ctx_r0.hasChildren() ? 4 : -1);
  }
}
function AppMenuitem_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275element(0, "i", 7);
  }
}
function AppMenuitem_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = i02.\u0275\u0275getCurrentView();
    i02.\u0275\u0275elementStart(0, "a", 8);
    i02.\u0275\u0275listener("click", function AppMenuitem_Conditional_2_Template_a_click_0_listener($event) {
      i02.\u0275\u0275restoreView(_r3);
      const ctx_r0 = i02.\u0275\u0275nextContext();
      return i02.\u0275\u0275resetView(ctx_r0.itemClick($event));
    });
    i02.\u0275\u0275element(1, "i", 5);
    i02.\u0275\u0275elementStart(2, "span", 6);
    i02.\u0275\u0275text(3);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275conditionalCreate(4, AppMenuitem_Conditional_2_Conditional_4_Template, 1, 0, "i", 7);
    i02.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i02.\u0275\u0275nextContext();
    i02.\u0275\u0275property("ngClass", ctx_r0.item().class)("routerLink", ctx_r0.item().routerLink)("routerLinkActiveOptions", ctx_r0.item().routerLinkActiveOptions || i02.\u0275\u0275pureFunction0(14, _c1))("fragment", ctx_r0.item().fragment)("queryParamsHandling", ctx_r0.item().queryParamsHandling)("preserveFragment", ctx_r0.item().preserveFragment)("skipLocationChange", ctx_r0.item().skipLocationChange)("replaceUrl", ctx_r0.item().replaceUrl)("state", ctx_r0.item().state)("queryParams", ctx_r0.item().queryParams);
    i02.\u0275\u0275attribute("target", ctx_r0.item().target);
    i02.\u0275\u0275advance();
    i02.\u0275\u0275property("ngClass", ctx_r0.item().icon);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(ctx_r0.item().label);
    i02.\u0275\u0275advance();
    i02.\u0275\u0275conditional(ctx_r0.hasChildren() ? 4 : -1);
  }
}
function AppMenuitem_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275element(0, "li", 10);
  }
  if (rf & 2) {
    const child_r5 = ctx.$implicit;
    const ctx_r0 = i02.\u0275\u0275nextContext(2);
    i02.\u0275\u0275classMap(child_r5["badgeClass"]);
    i02.\u0275\u0275property("item", child_r5)("parentPath", ctx_r0.fullPath())("root", false);
  }
}
function AppMenuitem_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i02.\u0275\u0275getCurrentView();
    i02.\u0275\u0275elementStart(0, "ul");
    i02.\u0275\u0275animateLeave(function AppMenuitem_Conditional_3_Template_animateleave_cb() {
      return "p-submenu-leave";
    });
    i02.\u0275\u0275animateEnter(function AppMenuitem_Conditional_3_Template_animateenter_cb() {
      i02.\u0275\u0275restoreView(_r4);
      const ctx_r0 = i02.\u0275\u0275nextContext();
      return i02.\u0275\u0275resetView(ctx_r0.initialized() ? "p-submenu-enter" : null);
    });
    i02.\u0275\u0275repeaterCreate(1, AppMenuitem_Conditional_3_For_2_Template, 1, 5, "li", 9, _forTrack0);
    i02.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i02.\u0275\u0275nextContext();
    i02.\u0275\u0275classProp("layout-root-submenulist", ctx_r0.root());
    i02.\u0275\u0275advance();
    i02.\u0275\u0275repeater(ctx_r0.item().items);
  }
}
var AppMenuitem = class _AppMenuitem {
  layoutService = inject2(LayoutService);
  router = inject2(Router);
  item = input(null, ...ngDevMode ? [{ debugName: "item" }] : (
    /* istanbul ignore next */
    []
  ));
  root = input(false, ...ngDevMode ? [{ debugName: "root" }] : (
    /* istanbul ignore next */
    []
  ));
  parentPath = input(null, ...ngDevMode ? [{ debugName: "parentPath" }] : (
    /* istanbul ignore next */
    []
  ));
  isVisible = computed(() => this.item()?.visible !== false, ...ngDevMode ? [{ debugName: "isVisible" }] : (
    /* istanbul ignore next */
    []
  ));
  hasChildren = computed(() => this.item()?.items && this.item()?.items.length > 0, ...ngDevMode ? [{ debugName: "hasChildren" }] : (
    /* istanbul ignore next */
    []
  ));
  hasRouterLink = computed(() => !!this.item()?.routerLink, ...ngDevMode ? [{ debugName: "hasRouterLink" }] : (
    /* istanbul ignore next */
    []
  ));
  fullPath = computed(() => {
    const itemPath = this.item()?.path;
    if (!itemPath)
      return this.parentPath();
    const parent = this.parentPath();
    if (parent && !itemPath.startsWith(parent)) {
      return parent + itemPath;
    }
    return itemPath;
  }, ...ngDevMode ? [{ debugName: "fullPath" }] : (
    /* istanbul ignore next */
    []
  ));
  isActive = computed(() => {
    const activePath = this.layoutService.layoutState().activePath;
    if (this.item()?.path) {
      return activePath?.startsWith(this.fullPath() ?? "") ?? false;
    }
    return false;
  }, ...ngDevMode ? [{ debugName: "isActive" }] : (
    /* istanbul ignore next */
    []
  ));
  initialized = signal(false, ...ngDevMode ? [{ debugName: "initialized" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      if (this.item()?.routerLink) {
        this.updateActiveStateFromRoute();
      }
    });
  }
  ngOnInit() {
    if (this.item()?.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.initialized.set(true);
    });
  }
  updateActiveStateFromRoute() {
    const item = this.item();
    if (!item?.routerLink)
      return;
    const isRouteActive = this.router.isActive(item.routerLink[0], {
      paths: "exact",
      queryParams: "ignored",
      matrixParams: "ignored",
      fragment: "ignored"
    });
    if (isRouteActive) {
      const parentPath = this.parentPath();
      if (parentPath) {
        this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
          activePath: parentPath
        }));
      }
    }
  }
  itemClick(event) {
    const item = this.item();
    if (item?.disabled) {
      event.preventDefault();
      return;
    }
    if (item?.command) {
      item.command({ originalEvent: event, item });
    }
    if (this.hasChildren()) {
      if (this.isActive()) {
        this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
          activePath: this.parentPath()
        }));
      } else {
        this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
          activePath: this.fullPath(),
          menuHoverActive: true
        }));
      }
    } else {
      this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
        overlayMenuActive: false,
        staticMenuMobileActive: false,
        mobileMenuActive: false,
        menuHoverActive: false
      }));
    }
  }
  static \u0275fac = function AppMenuitem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMenuitem)();
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _AppMenuitem, selectors: [["", "app-menuitem", ""]], hostVars: 4, hostBindings: function AppMenuitem_HostBindings(rf, ctx) {
    if (rf & 2) {
      i02.\u0275\u0275classProp("active-menuitem", ctx.isActive())("layout-root-menuitem", ctx.root());
    }
  }, inputs: { item: [1, "item"], root: [1, "root"], parentPath: [1, "parentPath"] }, attrs: _c02, decls: 4, vars: 4, consts: [[1, "layout-menuitem-root-text"], ["tabindex", "0", "pRipple", "", 3, "ngClass"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams"], [3, "layout-root-submenulist"], ["tabindex", "0", "pRipple", "", 3, "click", "ngClass"], [1, "layout-menuitem-icon", 3, "ngClass"], [1, "layout-menuitem-text"], [1, "pi", "pi-fw", "pi-angle-down", "layout-submenu-toggler"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "click", "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams"], ["app-menuitem", "", 3, "item", "parentPath", "root", "class"], ["app-menuitem", "", 3, "item", "parentPath", "root"]], template: function AppMenuitem_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275conditionalCreate(0, AppMenuitem_Conditional_0_Template, 2, 1, "div", 0);
      i02.\u0275\u0275conditionalCreate(1, AppMenuitem_Conditional_1_Template, 5, 6, "a", 1);
      i02.\u0275\u0275conditionalCreate(2, AppMenuitem_Conditional_2_Template, 5, 15, "a", 2);
      i02.\u0275\u0275conditionalCreate(3, AppMenuitem_Conditional_3_Template, 3, 2, "ul", 3);
    }
    if (rf & 2) {
      i02.\u0275\u0275conditional(ctx.root() && ctx.isVisible() ? 0 : -1);
      i02.\u0275\u0275advance();
      i02.\u0275\u0275conditional((!ctx.hasRouterLink() || ctx.hasChildren()) && ctx.isVisible() ? 1 : -1);
      i02.\u0275\u0275advance();
      i02.\u0275\u0275conditional(ctx.hasRouterLink() && !ctx.hasChildren() && ctx.isVisible() ? 2 : -1);
      i02.\u0275\u0275advance();
      i02.\u0275\u0275conditional(ctx.hasChildren() && ctx.isVisible() && (ctx.root() || ctx.isActive()) ? 3 : -1);
    }
  }, dependencies: [_AppMenuitem, CommonModule2, i12.NgClass, i12.NgComponentOutlet, i12.NgForOf, i12.NgIf, i12.NgTemplateOutlet, i12.NgStyle, i12.NgSwitch, i12.NgSwitchCase, i12.NgSwitchDefault, i12.NgPlural, i12.NgPluralCase, RouterModule2, i22.RouterOutlet, i22.RouterLink, i22.RouterLinkActive, i22.\u0275EmptyOutletComponent, RippleModule, i32.Ripple, i12.AsyncPipe, i12.UpperCasePipe, i12.LowerCasePipe, i12.JsonPipe, i12.SlicePipe, i12.DecimalPipe, i12.PercentPipe, i12.TitleCasePipe, i12.CurrencyPipe, i12.DatePipe, i12.I18nPluralPipe, i12.I18nSelectPipe, i12.KeyValuePipe], styles: ["\n.p-submenu-enter[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_p-animate-submenu-expand 450ms cubic-bezier(0.86, 0, 0.07, 1) forwards;\n}\n.p-submenu-leave[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_p-animate-submenu-collapse 450ms cubic-bezier(0.86, 0, 0.07, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_p-animate-submenu-expand {\n  from {\n    max-height: 0;\n    overflow: hidden;\n  }\n  to {\n    max-height: 1000px;\n    overflow: visible;\n  }\n}\n@keyframes _ngcontent-%COMP%_p-animate-submenu-collapse {\n  from {\n    max-height: 1000px;\n    overflow: hidden;\n  }\n  to {\n    max-height: 0;\n    overflow: hidden;\n  }\n}\n/*# sourceMappingURL=app.menuitem.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(AppMenuitem, [{
    type: Component2,
    args: [{ selector: "[app-menuitem]", imports: [CommonModule2, RouterModule2, RippleModule], template: `
        @if (root() && isVisible()) {
            <div class="layout-menuitem-root-text">{{ item().label }}</div>
        }
        @if ((!hasRouterLink() || hasChildren()) && isVisible()) {
            <a [attr.href]="item().url" (click)="itemClick($event)" [ngClass]="item().class" [attr.target]="item().target" tabindex="0" pRipple>
                <i [ngClass]="item().icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item().label }}</span>
                @if (hasChildren()) {
                    <i class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                }
            </a>
        }
        @if (hasRouterLink() && !hasChildren() && isVisible()) {
            <a
                (click)="itemClick($event)"
                [ngClass]="item().class"
                [routerLink]="item().routerLink"
                routerLinkActive="active-route"
                [routerLinkActiveOptions]="item().routerLinkActiveOptions || { paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' }"
                [fragment]="item().fragment"
                [queryParamsHandling]="item().queryParamsHandling"
                [preserveFragment]="item().preserveFragment"
                [skipLocationChange]="item().skipLocationChange"
                [replaceUrl]="item().replaceUrl"
                [state]="item().state"
                [queryParams]="item().queryParams"
                [attr.target]="item().target"
                tabindex="0"
                pRipple
            >
                <i [ngClass]="item().icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item().label }}</span>
                @if (hasChildren()) {
                    <i class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                }
            </a>
        }
        @if (hasChildren() && isVisible() && (root() || isActive())) {
            <ul [animate.enter]="initialized() ? 'p-submenu-enter' : null" [animate.leave]="'p-submenu-leave'" [class.layout-root-submenulist]="root()">
                @for (child of item().items; track child?.label) {
                    <li app-menuitem [item]="child" [parentPath]="fullPath()" [root]="false" [class]="child['badgeClass']"></li>
                }
            </ul>
        }
    `, host: {
      "[class.active-menuitem]": "isActive()",
      "[class.layout-root-menuitem]": "root()"
    }, styles: ["/* angular:styles/component:scss;81b3f56aa5c0a1e79fa32137518cb4a874606c9757504cd30f0dc0ac0cf23067;/app/src/app/layout/component/app.menuitem.ts */\n.p-submenu-enter {\n  animation: p-animate-submenu-expand 450ms cubic-bezier(0.86, 0, 0.07, 1) forwards;\n}\n.p-submenu-leave {\n  animation: p-animate-submenu-collapse 450ms cubic-bezier(0.86, 0, 0.07, 1) forwards;\n}\n@keyframes p-animate-submenu-expand {\n  from {\n    max-height: 0;\n    overflow: hidden;\n  }\n  to {\n    max-height: 1000px;\n    overflow: visible;\n  }\n}\n@keyframes p-animate-submenu-collapse {\n  from {\n    max-height: 1000px;\n    overflow: hidden;\n  }\n  to {\n    max-height: 0;\n    overflow: hidden;\n  }\n}\n/*# sourceMappingURL=app.menuitem.css.map */\n"] }]
  }], () => [], { item: [{ type: i02.Input, args: [{ isSignal: true, alias: "item", required: false }] }], root: [{ type: i02.Input, args: [{ isSignal: true, alias: "root", required: false }] }], parentPath: [{ type: i02.Input, args: [{ isSignal: true, alias: "parentPath", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(AppMenuitem, { className: "AppMenuitem", filePath: "src/app/layout/component/app.menuitem.ts", lineNumber: 95 });
})();
(() => {
  const id = "src%2Fapp%2Flayout%2Fcomponent%2Fapp.menuitem.ts%40AppMenuitem";
  function AppMenuitem_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i02.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i02.\u0275\u0275replaceMetadata(AppMenuitem, m.default, [i02, i12, i22, i32], [CommonModule2, RouterModule2, RippleModule, Component2], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AppMenuitem_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AppMenuitem_HmrLoad(d.timestamp)));
})();

// src/app/layout/component/app.menu.ts
import * as i03 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i13 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
import * as i23 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
var _forTrack02 = ($index, $item) => $item.label;
function AppMenu_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275element(0, "li", 1);
  }
  if (rf & 2) {
    const item_r1 = i03.\u0275\u0275nextContext().$implicit;
    i03.\u0275\u0275property("item", item_r1)("root", true);
  }
}
function AppMenu_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275element(0, "li", 2);
  }
}
function AppMenu_For_2_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275conditionalCreate(0, AppMenu_For_2_Conditional_0_Template, 1, 2, "li", 1)(1, AppMenu_For_2_Conditional_1_Template, 1, 0, "li", 2);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i03.\u0275\u0275conditional(!item_r1.separator ? 0 : 1);
  }
}
var AppMenu = class _AppMenu {
  model = [];
  ngOnInit() {
    this.model = [
      {
        label: "Home",
        items: [
          { label: "Dashboard", icon: "pi pi-fw pi-home", routerLink: ["/"] },
          { label: "Usuario", icon: "pi pi-fw pi-user", routerLink: ["/usuario"] }
        ]
      },
      {
        label: "Pages",
        icon: "pi pi-fw pi-briefcase",
        path: "/pages",
        items: [
          {
            label: "Landing",
            icon: "pi pi-fw pi-globe",
            routerLink: ["/landing"]
          },
          {
            label: "Auth",
            icon: "pi pi-fw pi-user",
            path: "/auth",
            items: [
              {
                label: "Login",
                icon: "pi pi-fw pi-sign-in",
                routerLink: ["/auth/login"]
              },
              {
                label: "Error",
                icon: "pi pi-fw pi-times-circle",
                routerLink: ["/auth/error"]
              },
              {
                label: "Access Denied",
                icon: "pi pi-fw pi-lock",
                routerLink: ["/auth/access"]
              }
            ]
          },
          {
            label: "Crud",
            icon: "pi pi-fw pi-pencil",
            routerLink: ["/pages/crud"]
          },
          {
            label: "Not Found",
            icon: "pi pi-fw pi-exclamation-circle",
            routerLink: ["/pages/notfound"]
          },
          {
            label: "Empty",
            icon: "pi pi-fw pi-circle-off",
            routerLink: ["/pages/empty"]
          }
        ]
      }
    ];
  }
  static \u0275fac = function AppMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMenu)();
  };
  static \u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _AppMenu, selectors: [["app-menu"]], decls: 3, vars: 0, consts: [[1, "layout-menu"], ["app-menuitem", "", 3, "item", "root"], [1, "menu-separator"]], template: function AppMenu_Template(rf, ctx) {
    if (rf & 1) {
      i03.\u0275\u0275elementStart(0, "ul", 0);
      i03.\u0275\u0275repeaterCreate(1, AppMenu_For_2_Template, 2, 1, null, null, _forTrack02);
      i03.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
      i03.\u0275\u0275advance();
      i03.\u0275\u0275repeater(ctx.model);
    }
  }, dependencies: [CommonModule3, i13.NgClass, i13.NgComponentOutlet, i13.NgForOf, i13.NgIf, i13.NgTemplateOutlet, i13.NgStyle, i13.NgSwitch, i13.NgSwitchCase, i13.NgSwitchDefault, i13.NgPlural, i13.NgPluralCase, AppMenuitem, RouterModule3, i23.RouterOutlet, i23.RouterLink, i23.RouterLinkActive, i23.\u0275EmptyOutletComponent, i13.AsyncPipe, i13.UpperCasePipe, i13.LowerCasePipe, i13.JsonPipe, i13.SlicePipe, i13.DecimalPipe, i13.PercentPipe, i13.TitleCasePipe, i13.CurrencyPipe, i13.DatePipe, i13.I18nPluralPipe, i13.I18nSelectPipe, i13.KeyValuePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(AppMenu, [{
    type: Component3,
    args: [{
      selector: "app-menu",
      standalone: true,
      imports: [CommonModule3, AppMenuitem, RouterModule3],
      template: `<ul class="layout-menu">
        @for (item of model; track item.label) {
            @if (!item.separator) {
                <li app-menuitem [item]="item" [root]="true"></li>
            } @else {
                <li class="menu-separator"></li>
            }
        }
    </ul> `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(AppMenu, { className: "AppMenu", filePath: "src/app/layout/component/app.menu.ts", lineNumber: 21 });
})();
(() => {
  const id = "src%2Fapp%2Flayout%2Fcomponent%2Fapp.menu.ts%40AppMenu";
  function AppMenu_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i03.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i03.\u0275\u0275replaceMetadata(AppMenu, m.default, [i03, i13, i23], [CommonModule3, AppMenuitem, RouterModule3, Component3], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AppMenu_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AppMenu_HmrLoad(d.timestamp)));
})();

// src/app/layout/component/app.sidebar.ts
import * as i04 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i14 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
var AppSidebar = class _AppSidebar {
  layoutService = inject3(LayoutService);
  router = inject3(Router2);
  el = inject3(ElementRef);
  outsideClickListener = null;
  destroy$ = new Subject();
  constructor() {
    effect(() => {
      const state = this.layoutService.layoutState();
      if (this.layoutService.isDesktop()) {
        if (state.overlayMenuActive) {
          this.bindOutsideClickListener();
        } else {
          this.unbindOutsideClickListener();
        }
      } else {
        if (state.mobileMenuActive) {
          this.bindOutsideClickListener();
        } else {
          this.unbindOutsideClickListener();
        }
      }
    });
  }
  ngOnInit() {
    this.router.events.pipe(filter2((event) => event instanceof NavigationEnd2), takeUntil(this.destroy$)).subscribe((event) => {
      const navEvent = event;
      this.onRouteChange(navEvent.urlAfterRedirects);
    });
    this.onRouteChange(this.router.url);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.unbindOutsideClickListener();
  }
  onRouteChange(path) {
    this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
      activePath: path,
      overlayMenuActive: false,
      staticMenuMobileActive: false,
      mobileMenuActive: false,
      menuHoverActive: false
    }));
  }
  bindOutsideClickListener() {
    if (!this.outsideClickListener) {
      this.outsideClickListener = (event) => {
        if (this.isOutsideClicked(event)) {
          this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
            overlayMenuActive: false,
            staticMenuMobileActive: false,
            mobileMenuActive: false,
            menuHoverActive: false
          }));
        }
      };
      document.addEventListener("click", this.outsideClickListener);
    }
  }
  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
      document.removeEventListener("click", this.outsideClickListener);
      this.outsideClickListener = null;
    }
  }
  isOutsideClicked(event) {
    const topbarButtonEl = document.querySelector(".topbar-start > button");
    const sidebarEl = this.el.nativeElement;
    return !(sidebarEl?.isSameNode(event.target) || sidebarEl?.contains(event.target) || topbarButtonEl?.isSameNode(event.target) || topbarButtonEl?.contains(event.target));
  }
  static \u0275fac = function AppSidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppSidebar)();
  };
  static \u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({ type: _AppSidebar, selectors: [["app-sidebar"]], decls: 2, vars: 0, consts: [[1, "layout-sidebar"]], template: function AppSidebar_Template(rf, ctx) {
    if (rf & 1) {
      i04.\u0275\u0275elementStart(0, "div", 0);
      i04.\u0275\u0275element(1, "app-menu");
      i04.\u0275\u0275elementEnd();
    }
  }, dependencies: [AppMenu, RouterModule4, i14.RouterOutlet, i14.RouterLink, i14.RouterLinkActive, i14.\u0275EmptyOutletComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(AppSidebar, [{
    type: Component4,
    args: [{
      selector: "app-sidebar",
      standalone: true,
      imports: [AppMenu, RouterModule4],
      template: `
        <div class="layout-sidebar">
            <app-menu></app-menu>
        </div>
    `
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassDebugInfo(AppSidebar, { className: "AppSidebar", filePath: "src/app/layout/component/app.sidebar.ts", lineNumber: 17 });
})();
(() => {
  const id = "src%2Fapp%2Flayout%2Fcomponent%2Fapp.sidebar.ts%40AppSidebar";
  function AppSidebar_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i04.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i04.\u0275\u0275replaceMetadata(AppSidebar, m.default, [i04, i14], [AppMenu, RouterModule4, Component4], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AppSidebar_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AppSidebar_HmrLoad(d.timestamp)));
})();

// src/app/layout/component/app.footer.ts
import { Component as Component5 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i05 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
var AppFooter = class _AppFooter {
  static \u0275fac = function AppFooter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppFooter)();
  };
  static \u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _AppFooter, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "layout-footer"], ["href", "https://primeng.org", "target", "_blank", "rel", "noopener noreferrer", 1, "text-primary", "font-bold", "hover:underline"]], template: function AppFooter_Template(rf, ctx) {
    if (rf & 1) {
      i05.\u0275\u0275domElementStart(0, "div", 0);
      i05.\u0275\u0275text(1, " SAKAI by ");
      i05.\u0275\u0275domElementStart(2, "a", 1);
      i05.\u0275\u0275text(3, "PrimeNG");
      i05.\u0275\u0275domElementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(AppFooter, [{
    type: Component5,
    args: [{
      standalone: true,
      selector: "app-footer",
      template: `<div class="layout-footer">
        SAKAI by
        <a href="https://primeng.org" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">PrimeNG</a>
    </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(AppFooter, { className: "AppFooter", filePath: "src/app/layout/component/app.footer.ts", lineNumber: 11 });
})();
(() => {
  const id = "src%2Fapp%2Flayout%2Fcomponent%2Fapp.footer.ts%40AppFooter";
  function AppFooter_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i05.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i05.\u0275\u0275replaceMetadata(AppFooter, m.default, [i05], [Component5], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AppFooter_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AppFooter_HmrLoad(d.timestamp)));
})();

// src/app/layout/component/app.layout.ts
import * as i06 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i15 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
import * as i24 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
var AppLayout = class _AppLayout {
  layoutService = inject4(LayoutService);
  constructor() {
    effect2(() => {
      const state = this.layoutService.layoutState();
      if (state.mobileMenuActive) {
        document.body.classList.add("blocked-scroll");
      } else {
        document.body.classList.remove("blocked-scroll");
      }
    });
  }
  containerClass = computed2(() => {
    const config = this.layoutService.layoutConfig();
    const state = this.layoutService.layoutState();
    return {
      "layout-overlay": config.menuMode === "overlay",
      "layout-static": config.menuMode === "static",
      "layout-static-inactive": state.staticMenuDesktopInactive && config.menuMode === "static",
      "layout-overlay-active": state.overlayMenuActive,
      "layout-mobile-active": state.mobileMenuActive
    };
  }, ...ngDevMode ? [{ debugName: "containerClass" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function AppLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ i06.\u0275\u0275defineComponent({ type: _AppLayout, selectors: [["app-layout"]], decls: 8, vars: 1, consts: [[1, "layout-wrapper", 3, "ngClass"], [1, "layout-main-container"], [1, "layout-main"], [1, "layout-mask"]], template: function AppLayout_Template(rf, ctx) {
    if (rf & 1) {
      i06.\u0275\u0275elementStart(0, "div", 0);
      i06.\u0275\u0275element(1, "app-topbar")(2, "app-sidebar");
      i06.\u0275\u0275elementStart(3, "div", 1)(4, "div", 2);
      i06.\u0275\u0275element(5, "router-outlet");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275element(6, "app-footer");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275element(7, "div", 3);
      i06.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
      i06.\u0275\u0275property("ngClass", ctx.containerClass());
    }
  }, dependencies: [CommonModule4, i15.NgClass, i15.NgComponentOutlet, i15.NgForOf, i15.NgIf, i15.NgTemplateOutlet, i15.NgStyle, i15.NgSwitch, i15.NgSwitchCase, i15.NgSwitchDefault, i15.NgPlural, i15.NgPluralCase, AppTopbar, AppSidebar, RouterModule5, i24.RouterOutlet, i24.RouterLink, i24.RouterLinkActive, i24.\u0275EmptyOutletComponent, AppFooter, i15.AsyncPipe, i15.UpperCasePipe, i15.LowerCasePipe, i15.JsonPipe, i15.SlicePipe, i15.DecimalPipe, i15.PercentPipe, i15.TitleCasePipe, i15.CurrencyPipe, i15.DatePipe, i15.I18nPluralPipe, i15.I18nSelectPipe, i15.KeyValuePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassMetadata(AppLayout, [{
    type: Component6,
    args: [{
      selector: "app-layout",
      standalone: true,
      imports: [CommonModule4, AppTopbar, AppSidebar, RouterModule5, AppFooter],
      template: `
    <div class="layout-wrapper" [ngClass]="containerClass()">
        <app-topbar></app-topbar>
        <app-sidebar></app-sidebar>
        <div class="layout-main-container">
            <div class="layout-main">
                <router-outlet></router-outlet>
            </div>
            <app-footer></app-footer>
        </div>
        <div class="layout-mask"></div>
    </div> `
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassDebugInfo(AppLayout, { className: "AppLayout", filePath: "src/app/layout/component/app.layout.ts", lineNumber: 26 });
})();
(() => {
  const id = "src%2Fapp%2Flayout%2Fcomponent%2Fapp.layout.ts%40AppLayout";
  function AppLayout_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i06.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i06.\u0275\u0275replaceMetadata(AppLayout, m.default, [i06, i15, i24], [CommonModule4, AppTopbar, AppSidebar, RouterModule5, AppFooter, Component6], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AppLayout_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AppLayout_HmrLoad(d.timestamp)));
})();

// src/app/pages/dashboard/dashboard.ts
import { Component as Component12 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";

// src/app/pages/dashboard/components/notificationswidget.ts
import { Component as Component7 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { ButtonModule } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import { MenuModule } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_menu.js?v=ae3c7c69";
import * as i07 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i16 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import * as i25 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_api.js?v=ae3c7c69";
import * as i33 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_menu.js?v=ae3c7c69";
var NotificationsWidget = class _NotificationsWidget {
  items = [
    { label: "Add New", icon: "pi pi-fw pi-plus" },
    { label: "Remove", icon: "pi pi-fw pi-trash" }
  ];
  static \u0275fac = function NotificationsWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ i07.\u0275\u0275defineComponent({ type: _NotificationsWidget, selectors: [["app-notifications-widget"]], decls: 65, vars: 2, consts: [["menu", ""], [1, "card"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "font-semibold", "text-xl"], ["pButton", "", "type", "button", "icon", "pi pi-ellipsis-v", 1, "p-button-rounded", "p-button-text", "p-button-plain", 3, "click"], [3, "popup", "model"], [1, "block", "text-muted-color", "font-medium", "mb-4"], [1, "p-0", "mx-0", "mt-0", "mb-6", "list-none"], [1, "flex", "items-center", "py-2", "border-b", "border-surface"], [1, "w-12", "h-12", "flex", "items-center", "justify-center", "bg-blue-100", "dark:bg-blue-400/10", "rounded-full", "mr-4", "shrink-0"], [1, "pi", "pi-dollar", "text-xl!", "text-blue-500"], [1, "text-surface-900", "dark:text-surface-0", "leading-normal"], [1, "text-surface-700", "dark:text-surface-100"], [1, "text-primary", "font-bold"], [1, "flex", "items-center", "py-2"], [1, "w-12", "h-12", "flex", "items-center", "justify-center", "bg-orange-100", "dark:bg-orange-400/10", "rounded-full", "mr-4", "shrink-0"], [1, "pi", "pi-download", "text-xl!", "text-orange-500"], [1, "text-surface-700", "dark:text-surface-100", "leading-normal"], [1, "p-0", "m-0", "list-none", "mb-6"], [1, "w-12", "h-12", "flex", "items-center", "justify-center", "bg-pink-100", "dark:bg-pink-400/10", "rounded-full", "mr-4", "shrink-0"], [1, "pi", "pi-question", "text-xl!", "text-pink-500"], [1, "p-0", "m-0", "list-none"], [1, "w-12", "h-12", "flex", "items-center", "justify-center", "bg-green-100", "dark:bg-green-400/10", "rounded-full", "mr-4", "shrink-0"], [1, "pi", "pi-arrow-up", "text-xl!", "text-green-500"], [1, "w-12", "h-12", "flex", "items-center", "justify-center", "bg-purple-100", "dark:bg-purple-400/10", "rounded-full", "mr-4", "shrink-0"], [1, "pi", "pi-heart", "text-xl!", "text-purple-500"]], template: function NotificationsWidget_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = i07.\u0275\u0275getCurrentView();
      i07.\u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
      i07.\u0275\u0275text(3, "Notifications");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(4, "div")(5, "button", 4);
      i07.\u0275\u0275listener("click", function NotificationsWidget_Template_button_click_5_listener($event) {
        i07.\u0275\u0275restoreView(_r1);
        const menu_r2 = i07.\u0275\u0275reference(7);
        return i07.\u0275\u0275resetView(menu_r2.toggle($event));
      });
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275element(6, "p-menu", 5, 0);
      i07.\u0275\u0275elementEnd()();
      i07.\u0275\u0275elementStart(8, "span", 6);
      i07.\u0275\u0275text(9, "TODAY");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(10, "ul", 7)(11, "li", 8)(12, "div", 9);
      i07.\u0275\u0275element(13, "i", 10);
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(14, "span", 11);
      i07.\u0275\u0275text(15, "Richard Jones ");
      i07.\u0275\u0275elementStart(16, "span", 12);
      i07.\u0275\u0275text(17, "has purchased a blue t-shirt for ");
      i07.\u0275\u0275elementStart(18, "span", 13);
      i07.\u0275\u0275text(19, "$79.00");
      i07.\u0275\u0275elementEnd()()()();
      i07.\u0275\u0275elementStart(20, "li", 14)(21, "div", 15);
      i07.\u0275\u0275element(22, "i", 16);
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(23, "span", 17);
      i07.\u0275\u0275text(24, "Your request for withdrawal of ");
      i07.\u0275\u0275elementStart(25, "span", 13);
      i07.\u0275\u0275text(26, "$2500.00");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275text(27, " has been initiated.");
      i07.\u0275\u0275elementEnd()()();
      i07.\u0275\u0275elementStart(28, "span", 6);
      i07.\u0275\u0275text(29, "YESTERDAY");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(30, "ul", 18)(31, "li", 8)(32, "div", 9);
      i07.\u0275\u0275element(33, "i", 10);
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(34, "span", 11);
      i07.\u0275\u0275text(35, "Keyser Wick ");
      i07.\u0275\u0275elementStart(36, "span", 12);
      i07.\u0275\u0275text(37, "has purchased a black jacket for ");
      i07.\u0275\u0275elementStart(38, "span", 13);
      i07.\u0275\u0275text(39, "$59.00");
      i07.\u0275\u0275elementEnd()()()();
      i07.\u0275\u0275elementStart(40, "li", 8)(41, "div", 19);
      i07.\u0275\u0275element(42, "i", 20);
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(43, "span", 11);
      i07.\u0275\u0275text(44, "Jane Davis ");
      i07.\u0275\u0275elementStart(45, "span", 12);
      i07.\u0275\u0275text(46, "has posted a new questions about your product.");
      i07.\u0275\u0275elementEnd()()()();
      i07.\u0275\u0275elementStart(47, "span", 6);
      i07.\u0275\u0275text(48, "LAST WEEK");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(49, "ul", 21)(50, "li", 8)(51, "div", 22);
      i07.\u0275\u0275element(52, "i", 23);
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(53, "span", 11);
      i07.\u0275\u0275text(54, "Your revenue has increased by ");
      i07.\u0275\u0275elementStart(55, "span", 13);
      i07.\u0275\u0275text(56, "%25");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275text(57, ".");
      i07.\u0275\u0275elementEnd()();
      i07.\u0275\u0275elementStart(58, "li", 8)(59, "div", 24);
      i07.\u0275\u0275element(60, "i", 25);
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(61, "span", 11)(62, "span", 13);
      i07.\u0275\u0275text(63, "12");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275text(64, " users have added your products to their wishlist.");
      i07.\u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      i07.\u0275\u0275advance(6);
      i07.\u0275\u0275property("popup", true)("model", ctx.items);
    }
  }, dependencies: [ButtonModule, i16.ButtonDirective, i16.Button, i16.ButtonLabel, i16.ButtonIcon, i25.Header, i25.Footer, i25.PrimeTemplate, MenuModule, i33.Menu, i33.SafeHtmlPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassMetadata(NotificationsWidget, [{
    type: Component7,
    args: [{
      standalone: true,
      selector: "app-notifications-widget",
      imports: [ButtonModule, MenuModule],
      template: `<div class="card">
        <div class="flex items-center justify-between mb-6">
            <div class="font-semibold text-xl">Notifications</div>
            <div>
                <button pButton type="button" icon="pi pi-ellipsis-v" class="p-button-rounded p-button-text p-button-plain" (click)="menu.toggle($event)"></button>
                <p-menu #menu [popup]="true" [model]="items"></p-menu>
            </div>
        </div>

        <span class="block text-muted-color font-medium mb-4">TODAY</span>
        <ul class="p-0 mx-0 mt-0 mb-6 list-none">
            <li class="flex items-center py-2 border-b border-surface">
                <div class="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-full mr-4 shrink-0">
                    <i class="pi pi-dollar text-xl! text-blue-500"></i>
                </div>
                <span class="text-surface-900 dark:text-surface-0 leading-normal"
                    >Richard Jones
                    <span class="text-surface-700 dark:text-surface-100">has purchased a blue t-shirt for <span class="text-primary font-bold">$79.00</span></span>
                </span>
            </li>
            <li class="flex items-center py-2">
                <div class="w-12 h-12 flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-full mr-4 shrink-0">
                    <i class="pi pi-download text-xl! text-orange-500"></i>
                </div>
                <span class="text-surface-700 dark:text-surface-100 leading-normal">Your request for withdrawal of <span class="text-primary font-bold">$2500.00</span> has been initiated.</span>
            </li>
        </ul>

        <span class="block text-muted-color font-medium mb-4">YESTERDAY</span>
        <ul class="p-0 m-0 list-none mb-6">
            <li class="flex items-center py-2 border-b border-surface">
                <div class="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-full mr-4 shrink-0">
                    <i class="pi pi-dollar text-xl! text-blue-500"></i>
                </div>
                <span class="text-surface-900 dark:text-surface-0 leading-normal"
                    >Keyser Wick
                    <span class="text-surface-700 dark:text-surface-100">has purchased a black jacket for <span class="text-primary font-bold">$59.00</span></span>
                </span>
            </li>
            <li class="flex items-center py-2 border-b border-surface">
                <div class="w-12 h-12 flex items-center justify-center bg-pink-100 dark:bg-pink-400/10 rounded-full mr-4 shrink-0">
                    <i class="pi pi-question text-xl! text-pink-500"></i>
                </div>
                <span class="text-surface-900 dark:text-surface-0 leading-normal"
                    >Jane Davis
                    <span class="text-surface-700 dark:text-surface-100">has posted a new questions about your product.</span>
                </span>
            </li>
        </ul>
        <span class="block text-muted-color font-medium mb-4">LAST WEEK</span>
        <ul class="p-0 m-0 list-none">
            <li class="flex items-center py-2 border-b border-surface">
                <div class="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-400/10 rounded-full mr-4 shrink-0">
                    <i class="pi pi-arrow-up text-xl! text-green-500"></i>
                </div>
                <span class="text-surface-900 dark:text-surface-0 leading-normal">Your revenue has increased by <span class="text-primary font-bold">%25</span>.</span>
            </li>
            <li class="flex items-center py-2 border-b border-surface">
                <div class="w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-full mr-4 shrink-0">
                    <i class="pi pi-heart text-xl! text-purple-500"></i>
                </div>
                <span class="text-surface-900 dark:text-surface-0 leading-normal"><span class="text-primary font-bold">12</span> users have added your products to their wishlist.</span>
            </li>
        </ul>
    </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassDebugInfo(NotificationsWidget, { className: "NotificationsWidget", filePath: "src/app/pages/dashboard/components/notificationswidget.ts", lineNumber: 75 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fdashboard%2Fcomponents%2Fnotificationswidget.ts%40NotificationsWidget";
  function NotificationsWidget_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i07.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i07.\u0275\u0275replaceMetadata(NotificationsWidget, m.default, [i07, i16, i25, i33], [ButtonModule, MenuModule, Component7], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && NotificationsWidget_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && NotificationsWidget_HmrLoad(d.timestamp)));
})();

// src/app/pages/dashboard/components/statswidget.ts
import { Component as Component8 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { CommonModule as CommonModule5 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
import * as i08 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i17 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
var StatsWidget = class _StatsWidget {
  static \u0275fac = function StatsWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatsWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ i08.\u0275\u0275defineComponent({ type: _StatsWidget, selectors: [["app-stats-widget"]], decls: 56, vars: 0, consts: [[1, "col-span-12", "lg:col-span-6", "xl:col-span-3"], [1, "card", "mb-0"], [1, "flex", "justify-between", "mb-4"], [1, "block", "text-muted-color", "font-medium", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "font-medium", "text-xl"], [1, "flex", "items-center", "justify-center", "bg-blue-100", "dark:bg-blue-400/10", "rounded-border", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-shopping-cart", "text-blue-500", "text-xl!"], [1, "text-primary", "font-medium"], [1, "text-muted-color"], [1, "flex", "items-center", "justify-center", "bg-orange-100", "dark:bg-orange-400/10", "rounded-border", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-dollar", "text-orange-500", "text-xl!"], [1, "flex", "items-center", "justify-center", "bg-cyan-100", "dark:bg-cyan-400/10", "rounded-border", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-users", "text-cyan-500", "text-xl!"], [1, "flex", "items-center", "justify-center", "bg-purple-100", "dark:bg-purple-400/10", "rounded-border", 2, "width", "2.5rem", "height", "2.5rem"], [1, "pi", "pi-comment", "text-purple-500", "text-xl!"]], template: function StatsWidget_Template(rf, ctx) {
    if (rf & 1) {
      i08.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "span", 3);
      i08.\u0275\u0275text(5, "Orders");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(6, "div", 4);
      i08.\u0275\u0275text(7, "152");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(8, "div", 5);
      i08.\u0275\u0275element(9, "i", 6);
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(10, "span", 7);
      i08.\u0275\u0275text(11, "24 new ");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(12, "span", 8);
      i08.\u0275\u0275text(13, "since last visit");
      i08.\u0275\u0275elementEnd()()();
      i08.\u0275\u0275elementStart(14, "div", 0)(15, "div", 1)(16, "div", 2)(17, "div")(18, "span", 3);
      i08.\u0275\u0275text(19, "Revenue");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(20, "div", 4);
      i08.\u0275\u0275text(21, "$2.100");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(22, "div", 9);
      i08.\u0275\u0275element(23, "i", 10);
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(24, "span", 7);
      i08.\u0275\u0275text(25, "%52+ ");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(26, "span", 8);
      i08.\u0275\u0275text(27, "since last week");
      i08.\u0275\u0275elementEnd()()();
      i08.\u0275\u0275elementStart(28, "div", 0)(29, "div", 1)(30, "div", 2)(31, "div")(32, "span", 3);
      i08.\u0275\u0275text(33, "Customers");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(34, "div", 4);
      i08.\u0275\u0275text(35, "28441");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(36, "div", 11);
      i08.\u0275\u0275element(37, "i", 12);
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(38, "span", 7);
      i08.\u0275\u0275text(39, "520 ");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(40, "span", 8);
      i08.\u0275\u0275text(41, "newly registered");
      i08.\u0275\u0275elementEnd()()();
      i08.\u0275\u0275elementStart(42, "div", 0)(43, "div", 1)(44, "div", 2)(45, "div")(46, "span", 3);
      i08.\u0275\u0275text(47, "Comments");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(48, "div", 4);
      i08.\u0275\u0275text(49, "152 Unread");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(50, "div", 13);
      i08.\u0275\u0275element(51, "i", 14);
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(52, "span", 7);
      i08.\u0275\u0275text(53, "85 ");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(54, "span", 8);
      i08.\u0275\u0275text(55, "responded");
      i08.\u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule5, i17.NgClass, i17.NgComponentOutlet, i17.NgForOf, i17.NgIf, i17.NgTemplateOutlet, i17.NgStyle, i17.NgSwitch, i17.NgSwitchCase, i17.NgSwitchDefault, i17.NgPlural, i17.NgPluralCase, i17.AsyncPipe, i17.UpperCasePipe, i17.LowerCasePipe, i17.JsonPipe, i17.SlicePipe, i17.DecimalPipe, i17.PercentPipe, i17.TitleCasePipe, i17.CurrencyPipe, i17.DatePipe, i17.I18nPluralPipe, i17.I18nSelectPipe, i17.KeyValuePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassMetadata(StatsWidget, [{
    type: Component8,
    args: [{
      standalone: true,
      selector: "app-stats-widget",
      imports: [CommonModule5],
      template: `<div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Orders</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152</div>
                    </div>
                    <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">24 new </span>
                <span class="text-muted-color">since last visit</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Revenue</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">$2.100</div>
                    </div>
                    <div class="flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-dollar text-orange-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">%52+ </span>
                <span class="text-muted-color">since last week</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Customers</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">28441</div>
                    </div>
                    <div class="flex items-center justify-center bg-cyan-100 dark:bg-cyan-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-users text-cyan-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">520 </span>
                <span class="text-muted-color">newly registered</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-muted-color font-medium mb-4">Comments</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152 Unread</div>
                    </div>
                    <div class="flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-comment text-purple-500 text-xl!"></i>
                    </div>
                </div>
                <span class="text-primary font-medium">85 </span>
                <span class="text-muted-color">responded</span>
            </div>
        </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassDebugInfo(StatsWidget, { className: "StatsWidget", filePath: "src/app/pages/dashboard/components/statswidget.ts", lineNumber: 69 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fdashboard%2Fcomponents%2Fstatswidget.ts%40StatsWidget";
  function StatsWidget_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i08.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i08.\u0275\u0275replaceMetadata(StatsWidget, m.default, [i08, i17], [CommonModule5, Component8], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && StatsWidget_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && StatsWidget_HmrLoad(d.timestamp)));
})();

// src/app/pages/dashboard/components/recentsaleswidget.ts
import { Component as Component9, inject as inject5, signal as signal2 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { RippleModule as RippleModule2 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_ripple.js?v=ae3c7c69";
import { TableModule } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_table.js?v=ae3c7c69";
import { ButtonModule as ButtonModule2 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import { CommonModule as CommonModule6 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";

// src/app/pages/service/product.service.ts
import { Injectable } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i09 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i18 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common_http.js?v=ae3c7c69";
var ProductService = class _ProductService {
  http;
  getProductsData() {
    return [
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1001",
        code: "nvklal433",
        name: "Black Watch",
        description: "Product Description",
        image: "black-watch.jpg",
        price: 72,
        category: "Accessories",
        quantity: 61,
        inventoryStatus: "INSTOCK",
        rating: 4
      },
      {
        id: "1002",
        code: "zz21cz3c1",
        name: "Blue Band",
        description: "Product Description",
        image: "blue-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 3
      },
      {
        id: "1003",
        code: "244wgerg2",
        name: "Blue T-Shirt",
        description: "Product Description",
        image: "blue-t-shirt.jpg",
        price: 29,
        category: "Clothing",
        quantity: 25,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1004",
        code: "h456wer53",
        name: "Bracelet",
        description: "Product Description",
        image: "bracelet.jpg",
        price: 15,
        category: "Accessories",
        quantity: 73,
        inventoryStatus: "INSTOCK",
        rating: 4
      },
      {
        id: "1005",
        code: "av2231fwg",
        name: "Brown Purse",
        description: "Product Description",
        image: "brown-purse.jpg",
        price: 120,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4
      },
      {
        id: "1006",
        code: "bib36pfvm",
        name: "Chakra Bracelet",
        description: "Product Description",
        image: "chakra-bracelet.jpg",
        price: 32,
        category: "Accessories",
        quantity: 5,
        inventoryStatus: "LOWSTOCK",
        rating: 3
      },
      {
        id: "1007",
        code: "mbvjkgip5",
        name: "Galaxy Earrings",
        description: "Product Description",
        image: "galaxy-earrings.jpg",
        price: 34,
        category: "Accessories",
        quantity: 23,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1008",
        code: "vbb124btr",
        name: "Game Controller",
        description: "Product Description",
        image: "game-controller.jpg",
        price: 99,
        category: "Electronics",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 4
      },
      {
        id: "1009",
        code: "cm230f032",
        name: "Gaming Set",
        description: "Product Description",
        image: "gaming-set.jpg",
        price: 299,
        category: "Electronics",
        quantity: 63,
        inventoryStatus: "INSTOCK",
        rating: 3
      },
      {
        id: "1010",
        code: "plb34234v",
        name: "Gold Phone Case",
        description: "Product Description",
        image: "gold-phone-case.jpg",
        price: 24,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4
      },
      {
        id: "1011",
        code: "4920nnc2d",
        name: "Green Earbuds",
        description: "Product Description",
        image: "green-earbuds.jpg",
        price: 89,
        category: "Electronics",
        quantity: 23,
        inventoryStatus: "INSTOCK",
        rating: 4
      },
      {
        id: "1012",
        code: "250vm23cc",
        name: "Green T-Shirt",
        description: "Product Description",
        image: "green-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 74,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1013",
        code: "fldsmn31b",
        name: "Grey T-Shirt",
        description: "Product Description",
        image: "grey-t-shirt.jpg",
        price: 48,
        category: "Clothing",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 3
      },
      {
        id: "1014",
        code: "waas1x2as",
        name: "Headphones",
        description: "Product Description",
        image: "headphones.jpg",
        price: 175,
        category: "Electronics",
        quantity: 8,
        inventoryStatus: "LOWSTOCK",
        rating: 5
      },
      {
        id: "1015",
        code: "vb34btbg5",
        name: "Light Green T-Shirt",
        description: "Product Description",
        image: "light-green-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 34,
        inventoryStatus: "INSTOCK",
        rating: 4
      },
      {
        id: "1016",
        code: "k8l6j58jl",
        name: "Lime Band",
        description: "Product Description",
        image: "lime-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 12,
        inventoryStatus: "INSTOCK",
        rating: 3
      },
      {
        id: "1017",
        code: "v435nn85n",
        name: "Mini Speakers",
        description: "Product Description",
        image: "mini-speakers.jpg",
        price: 85,
        category: "Clothing",
        quantity: 42,
        inventoryStatus: "INSTOCK",
        rating: 4
      },
      {
        id: "1018",
        code: "09zx9c0zc",
        name: "Painted Phone Case",
        description: "Product Description",
        image: "painted-phone-case.jpg",
        price: 56,
        category: "Accessories",
        quantity: 41,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1019",
        code: "mnb5mb2m5",
        name: "Pink Band",
        description: "Product Description",
        image: "pink-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 63,
        inventoryStatus: "INSTOCK",
        rating: 4
      },
      {
        id: "1020",
        code: "r23fwf2w3",
        name: "Pink Purse",
        description: "Product Description",
        image: "pink-purse.jpg",
        price: 110,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4
      },
      {
        id: "1021",
        code: "pxpzczo23",
        name: "Purple Band",
        description: "Product Description",
        image: "purple-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 6,
        inventoryStatus: "LOWSTOCK",
        rating: 3
      },
      {
        id: "1022",
        code: "2c42cb5cb",
        name: "Purple Gemstone Necklace",
        description: "Product Description",
        image: "purple-gemstone-necklace.jpg",
        price: 45,
        category: "Accessories",
        quantity: 62,
        inventoryStatus: "INSTOCK",
        rating: 4
      },
      {
        id: "1023",
        code: "5k43kkk23",
        name: "Purple T-Shirt",
        description: "Product Description",
        image: "purple-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 5
      },
      {
        id: "1024",
        code: "lm2tny2k4",
        name: "Shoes",
        description: "Product Description",
        image: "shoes.jpg",
        price: 64,
        category: "Clothing",
        quantity: 0,
        inventoryStatus: "INSTOCK",
        rating: 4
      },
      {
        id: "1025",
        code: "nbm5mv45n",
        name: "Sneakers",
        description: "Product Description",
        image: "sneakers.jpg",
        price: 78,
        category: "Clothing",
        quantity: 52,
        inventoryStatus: "INSTOCK",
        rating: 4
      },
      {
        id: "1026",
        code: "zx23zc42c",
        name: "Teal T-Shirt",
        description: "Product Description",
        image: "teal-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 3,
        inventoryStatus: "LOWSTOCK",
        rating: 3
      },
      {
        id: "1027",
        code: "acvx872gc",
        name: "Yellow Earbuds",
        description: "Product Description",
        image: "yellow-earbuds.jpg",
        price: 89,
        category: "Electronics",
        quantity: 35,
        inventoryStatus: "INSTOCK",
        rating: 3
      },
      {
        id: "1028",
        code: "tx125ck42",
        name: "Yoga Mat",
        description: "Product Description",
        image: "yoga-mat.jpg",
        price: 20,
        category: "Fitness",
        quantity: 15,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1029",
        code: "gwuby345v",
        name: "Yoga Set",
        description: "Product Description",
        image: "yoga-set.jpg",
        price: 20,
        category: "Fitness",
        quantity: 25,
        inventoryStatus: "INSTOCK",
        rating: 8
      }
    ];
  }
  getProductsWithOrdersData() {
    return [
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5,
        orders: [
          {
            id: "1000-0",
            productCode: "f230fh0g3",
            date: "2020-09-13",
            amount: 65,
            quantity: 1,
            customer: "David James",
            status: "PENDING"
          },
          {
            id: "1000-1",
            productCode: "f230fh0g3",
            date: "2020-05-14",
            amount: 130,
            quantity: 2,
            customer: "Leon Rodrigues",
            status: "DELIVERED"
          },
          {
            id: "1000-2",
            productCode: "f230fh0g3",
            date: "2019-01-04",
            amount: 65,
            quantity: 1,
            customer: "Juan Alejandro",
            status: "RETURNED"
          },
          {
            id: "1000-3",
            productCode: "f230fh0g3",
            date: "2020-09-13",
            amount: 195,
            quantity: 3,
            customer: "Claire Morrow",
            status: "CANCELLED"
          }
        ]
      },
      {
        id: "1001",
        code: "nvklal433",
        name: "Black Watch",
        description: "Product Description",
        image: "black-watch.jpg",
        price: 72,
        category: "Accessories",
        quantity: 61,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1001-0",
            productCode: "nvklal433",
            date: "2020-05-14",
            amount: 72,
            quantity: 1,
            customer: "Maisha Jefferson",
            status: "DELIVERED"
          },
          {
            id: "1001-1",
            productCode: "nvklal433",
            date: "2020-02-28",
            amount: 144,
            quantity: 2,
            customer: "Octavia Murillo",
            status: "PENDING"
          }
        ]
      },
      {
        id: "1002",
        code: "zz21cz3c1",
        name: "Blue Band",
        description: "Product Description",
        image: "blue-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 3,
        orders: [
          {
            id: "1002-0",
            productCode: "zz21cz3c1",
            date: "2020-07-05",
            amount: 79,
            quantity: 1,
            customer: "Stacey Leja",
            status: "DELIVERED"
          },
          {
            id: "1002-1",
            productCode: "zz21cz3c1",
            date: "2020-02-06",
            amount: 79,
            quantity: 1,
            customer: "Ashley Wickens",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1003",
        code: "244wgerg2",
        name: "Blue T-Shirt",
        description: "Product Description",
        image: "blue-t-shirt.jpg",
        price: 29,
        category: "Clothing",
        quantity: 25,
        inventoryStatus: "INSTOCK",
        rating: 5,
        orders: []
      },
      {
        id: "1004",
        code: "h456wer53",
        name: "Bracelet",
        description: "Product Description",
        image: "bracelet.jpg",
        price: 15,
        category: "Accessories",
        quantity: 73,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1004-0",
            productCode: "h456wer53",
            date: "2020-09-05",
            amount: 60,
            quantity: 4,
            customer: "Mayumi Misaki",
            status: "PENDING"
          },
          {
            id: "1004-1",
            productCode: "h456wer53",
            date: "2019-04-16",
            amount: 2,
            quantity: 30,
            customer: "Francesco Salvatore",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1005",
        code: "av2231fwg",
        name: "Brown Purse",
        description: "Product Description",
        image: "brown-purse.jpg",
        price: 120,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4,
        orders: [
          {
            id: "1005-0",
            productCode: "av2231fwg",
            date: "2020-01-25",
            amount: 120,
            quantity: 1,
            customer: "Isabel Sinclair",
            status: "RETURNED"
          },
          {
            id: "1005-1",
            productCode: "av2231fwg",
            date: "2019-03-12",
            amount: 240,
            quantity: 2,
            customer: "Lionel Clifford",
            status: "DELIVERED"
          },
          {
            id: "1005-2",
            productCode: "av2231fwg",
            date: "2019-05-05",
            amount: 120,
            quantity: 1,
            customer: "Cody Chavez",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1006",
        code: "bib36pfvm",
        name: "Chakra Bracelet",
        description: "Product Description",
        image: "chakra-bracelet.jpg",
        price: 32,
        category: "Accessories",
        quantity: 5,
        inventoryStatus: "LOWSTOCK",
        rating: 3,
        orders: [
          {
            id: "1006-0",
            productCode: "bib36pfvm",
            date: "2020-02-24",
            amount: 32,
            quantity: 1,
            customer: "Arvin Darci",
            status: "DELIVERED"
          },
          {
            id: "1006-1",
            productCode: "bib36pfvm",
            date: "2020-01-14",
            amount: 64,
            quantity: 2,
            customer: "Izzy Jones",
            status: "PENDING"
          }
        ]
      },
      {
        id: "1007",
        code: "mbvjkgip5",
        name: "Galaxy Earrings",
        description: "Product Description",
        image: "galaxy-earrings.jpg",
        price: 34,
        category: "Accessories",
        quantity: 23,
        inventoryStatus: "INSTOCK",
        rating: 5,
        orders: [
          {
            id: "1007-0",
            productCode: "mbvjkgip5",
            date: "2020-06-19",
            amount: 34,
            quantity: 1,
            customer: "Jennifer Smith",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1008",
        code: "vbb124btr",
        name: "Game Controller",
        description: "Product Description",
        image: "game-controller.jpg",
        price: 99,
        category: "Electronics",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 4,
        orders: [
          {
            id: "1008-0",
            productCode: "vbb124btr",
            date: "2020-01-05",
            amount: 99,
            quantity: 1,
            customer: "Jeanfrancois David",
            status: "DELIVERED"
          },
          {
            id: "1008-1",
            productCode: "vbb124btr",
            date: "2020-01-19",
            amount: 198,
            quantity: 2,
            customer: "Ivar Greenwood",
            status: "RETURNED"
          }
        ]
      },
      {
        id: "1009",
        code: "cm230f032",
        name: "Gaming Set",
        description: "Product Description",
        image: "gaming-set.jpg",
        price: 299,
        category: "Electronics",
        quantity: 63,
        inventoryStatus: "INSTOCK",
        rating: 3,
        orders: [
          {
            id: "1009-0",
            productCode: "cm230f032",
            date: "2020-06-24",
            amount: 299,
            quantity: 1,
            customer: "Kadeem Mujtaba",
            status: "PENDING"
          },
          {
            id: "1009-1",
            productCode: "cm230f032",
            date: "2020-05-11",
            amount: 299,
            quantity: 1,
            customer: "Ashley Wickens",
            status: "DELIVERED"
          },
          {
            id: "1009-2",
            productCode: "cm230f032",
            date: "2019-02-07",
            amount: 299,
            quantity: 1,
            customer: "Julie Johnson",
            status: "DELIVERED"
          },
          {
            id: "1009-3",
            productCode: "cm230f032",
            date: "2020-04-26",
            amount: 299,
            quantity: 1,
            customer: "Tony Costa",
            status: "CANCELLED"
          }
        ]
      },
      {
        id: "1010",
        code: "plb34234v",
        name: "Gold Phone Case",
        description: "Product Description",
        image: "gold-phone-case.jpg",
        price: 24,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4,
        orders: [
          {
            id: "1010-0",
            productCode: "plb34234v",
            date: "2020-02-04",
            amount: 24,
            quantity: 1,
            customer: "James Butt",
            status: "DELIVERED"
          },
          {
            id: "1010-1",
            productCode: "plb34234v",
            date: "2020-05-05",
            amount: 48,
            quantity: 2,
            customer: "Josephine Darakjy",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1011",
        code: "4920nnc2d",
        name: "Green Earbuds",
        description: "Product Description",
        image: "green-earbuds.jpg",
        price: 89,
        category: "Electronics",
        quantity: 23,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1011-0",
            productCode: "4920nnc2d",
            date: "2020-06-01",
            amount: 89,
            quantity: 1,
            customer: "Art Venere",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1012",
        code: "250vm23cc",
        name: "Green T-Shirt",
        description: "Product Description",
        image: "green-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 74,
        inventoryStatus: "INSTOCK",
        rating: 5,
        orders: [
          {
            id: "1012-0",
            productCode: "250vm23cc",
            date: "2020-02-05",
            amount: 49,
            quantity: 1,
            customer: "Lenna Paprocki",
            status: "DELIVERED"
          },
          {
            id: "1012-1",
            productCode: "250vm23cc",
            date: "2020-02-15",
            amount: 49,
            quantity: 1,
            customer: "Donette Foller",
            status: "PENDING"
          }
        ]
      },
      {
        id: "1013",
        code: "fldsmn31b",
        name: "Grey T-Shirt",
        description: "Product Description",
        image: "grey-t-shirt.jpg",
        price: 48,
        category: "Clothing",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 3,
        orders: [
          {
            id: "1013-0",
            productCode: "fldsmn31b",
            date: "2020-04-01",
            amount: 48,
            quantity: 1,
            customer: "Simona Morasca",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1014",
        code: "waas1x2as",
        name: "Headphones",
        description: "Product Description",
        image: "headphones.jpg",
        price: 175,
        category: "Electronics",
        quantity: 8,
        inventoryStatus: "LOWSTOCK",
        rating: 5,
        orders: [
          {
            id: "1014-0",
            productCode: "waas1x2as",
            date: "2020-05-15",
            amount: 175,
            quantity: 1,
            customer: "Lenna Paprocki",
            status: "DELIVERED"
          },
          {
            id: "1014-1",
            productCode: "waas1x2as",
            date: "2020-01-02",
            amount: 175,
            quantity: 1,
            customer: "Donette Foller",
            status: "CANCELLED"
          }
        ]
      },
      {
        id: "1015",
        code: "vb34btbg5",
        name: "Light Green T-Shirt",
        description: "Product Description",
        image: "light-green-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 34,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1015-0",
            productCode: "vb34btbg5",
            date: "2020-07-02",
            amount: 98,
            quantity: 2,
            customer: "Mitsue Tollner",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1016",
        code: "k8l6j58jl",
        name: "Lime Band",
        description: "Product Description",
        image: "lime-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 12,
        inventoryStatus: "INSTOCK",
        rating: 3,
        orders: []
      },
      {
        id: "1017",
        code: "v435nn85n",
        name: "Mini Speakers",
        description: "Product Description",
        image: "mini-speakers.jpg",
        price: 85,
        category: "Clothing",
        quantity: 42,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1017-0",
            productCode: "v435nn85n",
            date: "2020-07-12",
            amount: 85,
            quantity: 1,
            customer: "Minna Amigon",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1018",
        code: "09zx9c0zc",
        name: "Painted Phone Case",
        description: "Product Description",
        image: "painted-phone-case.jpg",
        price: 56,
        category: "Accessories",
        quantity: 41,
        inventoryStatus: "INSTOCK",
        rating: 5,
        orders: [
          {
            id: "1018-0",
            productCode: "09zx9c0zc",
            date: "2020-07-01",
            amount: 56,
            quantity: 1,
            customer: "Abel Maclead",
            status: "DELIVERED"
          },
          {
            id: "1018-1",
            productCode: "09zx9c0zc",
            date: "2020-05-02",
            amount: 56,
            quantity: 1,
            customer: "Minna Amigon",
            status: "RETURNED"
          }
        ]
      },
      {
        id: "1019",
        code: "mnb5mb2m5",
        name: "Pink Band",
        description: "Product Description",
        image: "pink-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 63,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: []
      },
      {
        id: "1020",
        code: "r23fwf2w3",
        name: "Pink Purse",
        description: "Product Description",
        image: "pink-purse.jpg",
        price: 110,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4,
        orders: [
          {
            id: "1020-0",
            productCode: "r23fwf2w3",
            date: "2020-05-29",
            amount: 110,
            quantity: 1,
            customer: "Kiley Caldarera",
            status: "DELIVERED"
          },
          {
            id: "1020-1",
            productCode: "r23fwf2w3",
            date: "2020-02-11",
            amount: 220,
            quantity: 2,
            customer: "Graciela Ruta",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1021",
        code: "pxpzczo23",
        name: "Purple Band",
        description: "Product Description",
        image: "purple-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 6,
        inventoryStatus: "LOWSTOCK",
        rating: 3,
        orders: [
          {
            id: "1021-0",
            productCode: "pxpzczo23",
            date: "2020-02-02",
            amount: 79,
            quantity: 1,
            customer: "Cammy Albares",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1022",
        code: "2c42cb5cb",
        name: "Purple Gemstone Necklace",
        description: "Product Description",
        image: "purple-gemstone-necklace.jpg",
        price: 45,
        category: "Accessories",
        quantity: 62,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1022-0",
            productCode: "2c42cb5cb",
            date: "2020-06-29",
            amount: 45,
            quantity: 1,
            customer: "Mattie Poquette",
            status: "DELIVERED"
          },
          {
            id: "1022-1",
            productCode: "2c42cb5cb",
            date: "2020-02-11",
            amount: 135,
            quantity: 3,
            customer: "Meaghan Garufi",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1023",
        code: "5k43kkk23",
        name: "Purple T-Shirt",
        description: "Product Description",
        image: "purple-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 5,
        orders: [
          {
            id: "1023-0",
            productCode: "5k43kkk23",
            date: "2020-04-15",
            amount: 49,
            quantity: 1,
            customer: "Gladys Rim",
            status: "RETURNED"
          }
        ]
      },
      {
        id: "1024",
        code: "lm2tny2k4",
        name: "Shoes",
        description: "Product Description",
        image: "shoes.jpg",
        price: 64,
        category: "Clothing",
        quantity: 0,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: []
      },
      {
        id: "1025",
        code: "nbm5mv45n",
        name: "Sneakers",
        description: "Product Description",
        image: "sneakers.jpg",
        price: 78,
        category: "Clothing",
        quantity: 52,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1025-0",
            productCode: "nbm5mv45n",
            date: "2020-02-19",
            amount: 78,
            quantity: 1,
            customer: "Yuki Whobrey",
            status: "DELIVERED"
          },
          {
            id: "1025-1",
            productCode: "nbm5mv45n",
            date: "2020-05-21",
            amount: 78,
            quantity: 1,
            customer: "Fletcher Flosi",
            status: "PENDING"
          }
        ]
      },
      {
        id: "1026",
        code: "zx23zc42c",
        name: "Teal T-Shirt",
        description: "Product Description",
        image: "teal-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 3,
        inventoryStatus: "LOWSTOCK",
        rating: 3,
        orders: [
          {
            id: "1026-0",
            productCode: "zx23zc42c",
            date: "2020-04-24",
            amount: 98,
            quantity: 2,
            customer: "Bette Nicka",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1027",
        code: "acvx872gc",
        name: "Yellow Earbuds",
        description: "Product Description",
        image: "yellow-earbuds.jpg",
        price: 89,
        category: "Electronics",
        quantity: 35,
        inventoryStatus: "INSTOCK",
        rating: 3,
        orders: [
          {
            id: "1027-0",
            productCode: "acvx872gc",
            date: "2020-01-29",
            amount: 89,
            quantity: 1,
            customer: "Veronika Inouye",
            status: "DELIVERED"
          },
          {
            id: "1027-1",
            productCode: "acvx872gc",
            date: "2020-06-11",
            amount: 89,
            quantity: 1,
            customer: "Willard Kolmetz",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1028",
        code: "tx125ck42",
        name: "Yoga Mat",
        description: "Product Description",
        image: "yoga-mat.jpg",
        price: 20,
        category: "Fitness",
        quantity: 15,
        inventoryStatus: "INSTOCK",
        rating: 5,
        orders: []
      },
      {
        id: "1029",
        code: "gwuby345v",
        name: "Yoga Set",
        description: "Product Description",
        image: "yoga-set.jpg",
        price: 20,
        category: "Fitness",
        quantity: 25,
        inventoryStatus: "INSTOCK",
        rating: 8,
        orders: [
          {
            id: "1029-0",
            productCode: "gwuby345v",
            date: "2020-02-14",
            amount: 4,
            quantity: 80,
            customer: "Maryann Royster",
            status: "DELIVERED"
          }
        ]
      }
    ];
  }
  status = ["OUTOFSTOCK", "INSTOCK", "LOWSTOCK"];
  productNames = [
    "Bamboo Watch",
    "Black Watch",
    "Blue Band",
    "Blue T-Shirt",
    "Bracelet",
    "Brown Purse",
    "Chakra Bracelet",
    "Galaxy Earrings",
    "Game Controller",
    "Gaming Set",
    "Gold Phone Case",
    "Green Earbuds",
    "Green T-Shirt",
    "Grey T-Shirt",
    "Headphones",
    "Light Green T-Shirt",
    "Lime Band",
    "Mini Speakers",
    "Painted Phone Case",
    "Pink Band",
    "Pink Purse",
    "Purple Band",
    "Purple Gemstone Necklace",
    "Purple T-Shirt",
    "Shoes",
    "Sneakers",
    "Teal T-Shirt",
    "Yellow Earbuds",
    "Yoga Mat",
    "Yoga Set"
  ];
  constructor(http) {
    this.http = http;
  }
  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  }
  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  }
  getProducts() {
    return Promise.resolve(this.getProductsData());
  }
  getProductsWithOrdersSmall() {
    return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
  }
  generatePrduct() {
    const product = {
      id: this.generateId(),
      name: this.generateName(),
      description: "Product Description",
      price: this.generatePrice(),
      quantity: this.generateQuantity(),
      category: "Product Category",
      inventoryStatus: this.generateStatus(),
      rating: this.generateRating()
    };
    product.image = product.name?.toLocaleLowerCase().split(/[ ,]+/).join("-") + ".jpg";
    return product;
  }
  generateId() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  generateName() {
    return this.productNames[Math.floor(Math.random() * Math.floor(30))];
  }
  generatePrice() {
    return Math.floor(Math.random() * Math.floor(299) + 1);
  }
  generateQuantity() {
    return Math.floor(Math.random() * Math.floor(75) + 1);
  }
  generateStatus() {
    return this.status[Math.floor(Math.random() * Math.floor(3))];
  }
  generateRating() {
    return Math.floor(Math.random() * Math.floor(5) + 1);
  }
  static \u0275fac = function ProductService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductService)(i09.\u0275\u0275inject(i18.HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ i09.\u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassMetadata(ProductService, [{
    type: Injectable
  }], () => [{ type: i18.HttpClient }], null);
})();

// src/app/pages/dashboard/components/recentsaleswidget.ts
import * as i010 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i19 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
import * as i26 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_table.js?v=ae3c7c69";
import * as i34 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_api.js?v=ae3c7c69";
import * as i4 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_scroller.js?v=ae3c7c69";
import * as i5 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import * as i6 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_ripple.js?v=ae3c7c69";
function RecentSalesWidget_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    i010.\u0275\u0275elementStart(0, "tr")(1, "th");
    i010.\u0275\u0275text(2, "Image");
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(3, "th", 5);
    i010.\u0275\u0275text(4, "Name ");
    i010.\u0275\u0275element(5, "p-sortIcon", 6);
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(6, "th", 7);
    i010.\u0275\u0275text(7, "Price ");
    i010.\u0275\u0275element(8, "p-sortIcon", 8);
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(9, "th");
    i010.\u0275\u0275text(10, "View");
    i010.\u0275\u0275elementEnd()();
  }
}
function RecentSalesWidget_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    i010.\u0275\u0275elementStart(0, "tr")(1, "td", 9);
    i010.\u0275\u0275element(2, "img", 10);
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(3, "td", 11);
    i010.\u0275\u0275text(4);
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(5, "td", 12);
    i010.\u0275\u0275text(6);
    i010.\u0275\u0275pipe(7, "currency");
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(8, "td", 13);
    i010.\u0275\u0275element(9, "button", 14);
    i010.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    i010.\u0275\u0275advance(2);
    i010.\u0275\u0275property("src", i010.\u0275\u0275interpolate1("https://primefaces.org/cdn/primevue/images/product/", product_r1.image), i010.\u0275\u0275sanitizeUrl)("alt", i010.\u0275\u0275interpolate(product_r1.name));
    i010.\u0275\u0275advance(2);
    i010.\u0275\u0275textInterpolate(product_r1.name);
    i010.\u0275\u0275advance(2);
    i010.\u0275\u0275textInterpolate(i010.\u0275\u0275pipeBind2(7, 6, product_r1.price, "USD"));
  }
}
var RecentSalesWidget = class _RecentSalesWidget {
  products = signal2([], ...ngDevMode ? [{ debugName: "products" }] : (
    /* istanbul ignore next */
    []
  ));
  productService = inject5(ProductService);
  ngOnInit() {
    this.productService.getProductsSmall().then((data) => this.products.set(data));
  }
  static \u0275fac = function RecentSalesWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecentSalesWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ i010.\u0275\u0275defineComponent({ type: _RecentSalesWidget, selectors: [["app-recent-sales-widget"]], features: [i010.\u0275\u0275ProvidersFeature([ProductService])], decls: 8, vars: 3, consts: [["header", ""], ["body", ""], [1, "card", "mb-8!"], [1, "font-semibold", "text-xl", "mb-4"], ["responsiveLayout", "scroll", 3, "value", "paginator", "rows"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "price"], ["field", "price"], [2, "width", "15%", "min-width", "5rem"], ["width", "50", 1, "shadow-lg", 3, "src", "alt"], [2, "width", "35%", "min-width", "7rem"], [2, "width", "35%", "min-width", "8rem"], [2, "width", "15%"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-search", 1, "p-button", "p-component", "p-button-text", "p-button-icon-only"]], template: function RecentSalesWidget_Template(rf, ctx) {
    if (rf & 1) {
      i010.\u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      i010.\u0275\u0275text(2, "Recent Sales");
      i010.\u0275\u0275elementEnd();
      i010.\u0275\u0275elementStart(3, "p-table", 4);
      i010.\u0275\u0275template(4, RecentSalesWidget_ng_template_4_Template, 11, 0, "ng-template", null, 0, i010.\u0275\u0275templateRefExtractor)(6, RecentSalesWidget_ng_template_6_Template, 10, 9, "ng-template", null, 1, i010.\u0275\u0275templateRefExtractor);
      i010.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i010.\u0275\u0275advance(3);
      i010.\u0275\u0275property("value", ctx.products())("paginator", true)("rows", 5);
    }
  }, dependencies: [CommonModule6, i19.NgClass, i19.NgComponentOutlet, i19.NgForOf, i19.NgIf, i19.NgTemplateOutlet, i19.NgStyle, i19.NgSwitch, i19.NgSwitchCase, i19.NgSwitchDefault, i19.NgPlural, i19.NgPluralCase, TableModule, i26.Table, i34.Header, i34.Footer, i34.PrimeTemplate, i26.SortableColumn, i26.FrozenColumn, i26.RowGroupHeader, i26.SelectableRow, i26.RowToggler, i26.ContextMenuRow, i26.ResizableColumn, i26.ReorderableColumn, i26.EditableColumn, i26.CellEditor, i26.SortIcon, i26.TableRadioButton, i26.TableCheckbox, i26.TableHeaderCheckbox, i26.ReorderableRowHandle, i26.ReorderableRow, i26.SelectableRowDblClick, i26.EditableRow, i26.InitEditableRow, i26.SaveEditableRow, i26.CancelEditableRow, i26.ColumnFilter, i26.ColumnFilterFormElement, i4.Scroller, ButtonModule2, i5.ButtonDirective, i5.Button, i5.ButtonLabel, i5.ButtonIcon, RippleModule2, i6.Ripple, i19.AsyncPipe, i19.UpperCasePipe, i19.LowerCasePipe, i19.JsonPipe, i19.SlicePipe, i19.DecimalPipe, i19.PercentPipe, i19.TitleCasePipe, i19.CurrencyPipe, i19.DatePipe, i19.I18nPluralPipe, i19.I18nSelectPipe, i19.KeyValuePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(RecentSalesWidget, [{
    type: Component9,
    args: [{
      standalone: true,
      selector: "app-recent-sales-widget",
      imports: [CommonModule6, TableModule, ButtonModule2, RippleModule2],
      template: `<div class="card mb-8!">
        <div class="font-semibold text-xl mb-4">Recent Sales</div>
        <p-table [value]="products()" [paginator]="true" [rows]="5" responsiveLayout="scroll">
            <ng-template #header>
                <tr>
                    <th>Image</th>
                    <th pSortableColumn="name">Name <p-sortIcon field="name"></p-sortIcon></th>
                    <th pSortableColumn="price">Price <p-sortIcon field="price"></p-sortIcon></th>
                    <th>View</th>
                </tr>
            </ng-template>
            <ng-template #body let-product>
                <tr>
                    <td style="width: 15%; min-width: 5rem;">
                        <img src="https://primefaces.org/cdn/primevue/images/product/{{ product.image }}" class="shadow-lg" alt="{{ product.name }}" width="50" />
                    </td>
                    <td style="width: 35%; min-width: 7rem;">{{ product.name }}</td>
                    <td style="width: 35%; min-width: 8rem;">{{ product.price | currency: 'USD' }}</td>
                    <td style="width: 15%;">
                        <button pButton pRipple type="button" icon="pi pi-search" class="p-button p-component p-button-text p-button-icon-only"></button>
                    </td>
                </tr>
            </ng-template>
        </p-table>
    </div>`,
      providers: [ProductService]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassDebugInfo(RecentSalesWidget, { className: "RecentSalesWidget", filePath: "src/app/pages/dashboard/components/recentsaleswidget.ts", lineNumber: 39 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fdashboard%2Fcomponents%2Frecentsaleswidget.ts%40RecentSalesWidget";
  function RecentSalesWidget_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i010.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i010.\u0275\u0275replaceMetadata(RecentSalesWidget, m.default, [i010, i19, i26, i34, i4, i5, i6], [ProductService, CommonModule6, TableModule, ButtonModule2, RippleModule2, Component9], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && RecentSalesWidget_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && RecentSalesWidget_HmrLoad(d.timestamp)));
})();

// src/app/pages/dashboard/components/bestsellingwidget.ts
import { Component as Component10, inject as inject7 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { CommonModule as CommonModule7 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
import { ButtonModule as ButtonModule3 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import { MenuModule as MenuModule2 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_menu.js?v=ae3c7c69";

// src/app/service/basic.service.ts
import { HttpClient as HttpClient2 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common_http.js?v=ae3c7c69";
import { inject as inject6, Injectable as Injectable2 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { catchError, map, of, throwError } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/rxjs.js?v=ae3c7c69";
import * as i011 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
var BasicService = class _BasicService {
  serviceHttp = inject6(HttpClient2);
  baseUrl = "http://localhost:3000/api/v1";
  basePost(methodUrl, data) {
    return this.serviceHttp.post(`${this.baseUrl}/${methodUrl}`, data, { observe: "response" }).pipe(map((response) => response.body), catchError((error) => {
      if (error.status >= 200 && error.status < 300) {
        const fallbackBody = error.error?.text ?? error.error ?? null;
        return of(fallbackBody);
      }
      return throwError(() => error);
    }));
  }
  static \u0275fac = function BasicService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BasicService)();
  };
  static \u0275prov = /* @__PURE__ */ i011.\u0275\u0275defineInjectable({ token: _BasicService, factory: _BasicService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i011.\u0275setClassMetadata(BasicService, [{
    type: Injectable2,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/dashboard/components/bestsellingwidget.ts
import * as i012 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i110 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
import * as i27 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import * as i35 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_api.js?v=ae3c7c69";
import * as i42 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_menu.js?v=ae3c7c69";
var BestSellingWidget = class _BestSellingWidget {
  service = inject7(BasicService);
  entityId = 1;
  ngOnInit() {
    console.warn("Hola Mundo!!!!!!!!!!!!!!!!!");
    this.service.basePost(`notecontroller/getbyid/${this.entityId}`, {}).subscribe((response) => console.log(response), (error) => console.error(error));
  }
  menu = null;
  items = [
    { label: "Add New", icon: "pi pi-fw pi-plus" },
    { label: "Remove", icon: "pi pi-fw pi-trash" }
  ];
  static \u0275fac = function BestSellingWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BestSellingWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ i012.\u0275\u0275defineComponent({ type: _BestSellingWidget, selectors: [["app-best-selling-widget"]], decls: 75, vars: 2, consts: [["menu", ""], [1, "card"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "font-semibold", "text-xl"], ["pButton", "", "type", "button", "icon", "pi pi-ellipsis-v", 1, "p-button-rounded", "p-button-text", "p-button-plain", 3, "click"], [3, "popup", "model"], [1, "list-none", "p-0", "m-0"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between", "mb-6"], [1, "text-surface-900", "dark:text-surface-0", "font-medium", "mr-2", "mb-1", "md:mb-0"], [1, "mt-1", "text-muted-color"], [1, "mt-2", "md:mt-0", "flex", "items-center"], [1, "bg-surface-300", "dark:bg-surface-500", "rounded-border", "overflow-hidden", "w-40", "lg:w-24", 2, "height", "8px"], [1, "bg-orange-500", "h-full", 2, "width", "50%"], [1, "text-orange-500", "ml-4", "font-medium"], [1, "mt-2", "md:mt-0", "ml-0", "md:ml-20", "flex", "items-center"], [1, "bg-cyan-500", "h-full", 2, "width", "16%"], [1, "text-cyan-500", "ml-4", "font-medium"], [1, "bg-pink-500", "h-full", 2, "width", "67%"], [1, "text-pink-500", "ml-4", "font-medium"], [1, "bg-green-500", "h-full", 2, "width", "35%"], [1, "text-primary", "ml-4", "font-medium"], [1, "bg-purple-500", "h-full", 2, "width", "75%"], [1, "text-purple-500", "ml-4", "font-medium"], [1, "bg-teal-500", "h-full", 2, "width", "40%"], [1, "text-teal-500", "ml-4", "font-medium"]], template: function BestSellingWidget_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = i012.\u0275\u0275getCurrentView();
      i012.\u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
      i012.\u0275\u0275text(3, "Best Selling Products");
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275elementStart(4, "div")(5, "button", 4);
      i012.\u0275\u0275listener("click", function BestSellingWidget_Template_button_click_5_listener($event) {
        i012.\u0275\u0275restoreView(_r1);
        const menu_r2 = i012.\u0275\u0275reference(7);
        return i012.\u0275\u0275resetView(menu_r2.toggle($event));
      });
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275element(6, "p-menu", 5, 0);
      i012.\u0275\u0275elementEnd()();
      i012.\u0275\u0275elementStart(8, "ul", 6)(9, "li", 7)(10, "div")(11, "span", 8);
      i012.\u0275\u0275text(12, "Space T-Shirt");
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275elementStart(13, "div", 9);
      i012.\u0275\u0275text(14, "Clothing");
      i012.\u0275\u0275elementEnd()();
      i012.\u0275\u0275elementStart(15, "div", 10)(16, "div", 11);
      i012.\u0275\u0275element(17, "div", 12);
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275elementStart(18, "span", 13);
      i012.\u0275\u0275text(19, "%50");
      i012.\u0275\u0275elementEnd()()();
      i012.\u0275\u0275elementStart(20, "li", 7)(21, "div")(22, "span", 8);
      i012.\u0275\u0275text(23, "Portal Sticker");
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275elementStart(24, "div", 9);
      i012.\u0275\u0275text(25, "Accessories");
      i012.\u0275\u0275elementEnd()();
      i012.\u0275\u0275elementStart(26, "div", 14)(27, "div", 11);
      i012.\u0275\u0275element(28, "div", 15);
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275elementStart(29, "span", 16);
      i012.\u0275\u0275text(30, "%16");
      i012.\u0275\u0275elementEnd()()();
      i012.\u0275\u0275elementStart(31, "li", 7)(32, "div")(33, "span", 8);
      i012.\u0275\u0275text(34, "Supernova Sticker");
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275elementStart(35, "div", 9);
      i012.\u0275\u0275text(36, "Accessories");
      i012.\u0275\u0275elementEnd()();
      i012.\u0275\u0275elementStart(37, "div", 14)(38, "div", 11);
      i012.\u0275\u0275element(39, "div", 17);
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275elementStart(40, "span", 18);
      i012.\u0275\u0275text(41, "%67");
      i012.\u0275\u0275elementEnd()()();
      i012.\u0275\u0275elementStart(42, "li", 7)(43, "div")(44, "span", 8);
      i012.\u0275\u0275text(45, "Wonders Notebook");
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275elementStart(46, "div", 9);
      i012.\u0275\u0275text(47, "Office");
      i012.\u0275\u0275elementEnd()();
      i012.\u0275\u0275elementStart(48, "div", 14)(49, "div", 11);
      i012.\u0275\u0275element(50, "div", 19);
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275elementStart(51, "span", 20);
      i012.\u0275\u0275text(52, "%35");
      i012.\u0275\u0275elementEnd()()();
      i012.\u0275\u0275elementStart(53, "li", 7)(54, "div")(55, "span", 8);
      i012.\u0275\u0275text(56, "Mat Black Case");
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275elementStart(57, "div", 9);
      i012.\u0275\u0275text(58, "Accessories");
      i012.\u0275\u0275elementEnd()();
      i012.\u0275\u0275elementStart(59, "div", 14)(60, "div", 11);
      i012.\u0275\u0275element(61, "div", 21);
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275elementStart(62, "span", 22);
      i012.\u0275\u0275text(63, "%75");
      i012.\u0275\u0275elementEnd()()();
      i012.\u0275\u0275elementStart(64, "li", 7)(65, "div")(66, "span", 8);
      i012.\u0275\u0275text(67, "Robots T-Shirt");
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275elementStart(68, "div", 9);
      i012.\u0275\u0275text(69, "Clothing");
      i012.\u0275\u0275elementEnd()();
      i012.\u0275\u0275elementStart(70, "div", 14)(71, "div", 11);
      i012.\u0275\u0275element(72, "div", 23);
      i012.\u0275\u0275elementEnd();
      i012.\u0275\u0275elementStart(73, "span", 24);
      i012.\u0275\u0275text(74, "%40");
      i012.\u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      i012.\u0275\u0275advance(6);
      i012.\u0275\u0275property("popup", true)("model", ctx.items);
    }
  }, dependencies: [CommonModule7, i110.NgClass, i110.NgComponentOutlet, i110.NgForOf, i110.NgIf, i110.NgTemplateOutlet, i110.NgStyle, i110.NgSwitch, i110.NgSwitchCase, i110.NgSwitchDefault, i110.NgPlural, i110.NgPluralCase, ButtonModule3, i27.ButtonDirective, i27.Button, i27.ButtonLabel, i27.ButtonIcon, i35.Header, i35.Footer, i35.PrimeTemplate, MenuModule2, i42.Menu, i110.AsyncPipe, i110.UpperCasePipe, i110.LowerCasePipe, i110.JsonPipe, i110.SlicePipe, i110.DecimalPipe, i110.PercentPipe, i110.TitleCasePipe, i110.CurrencyPipe, i110.DatePipe, i110.I18nPluralPipe, i110.I18nSelectPipe, i110.KeyValuePipe, i42.SafeHtmlPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i012.\u0275setClassMetadata(BestSellingWidget, [{
    type: Component10,
    args: [{
      standalone: true,
      selector: "app-best-selling-widget",
      imports: [CommonModule7, ButtonModule3, MenuModule2],
      // providers: [],
      template: ` <div class="card">
        <div class="flex justify-between items-center mb-6">
            <div class="font-semibold text-xl">Best Selling Products</div>
            <div>
                <button pButton type="button" icon="pi pi-ellipsis-v" class="p-button-rounded p-button-text p-button-plain" (click)="menu.toggle($event)"></button>
                <p-menu #menu [popup]="true" [model]="items"></p-menu>
            </div>
        </div>
        <ul class="list-none p-0 m-0">
            <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Space T-Shirt</span>
                    <div class="mt-1 text-muted-color">Clothing</div>
                </div>
                <div class="mt-2 md:mt-0 flex items-center">
                    <div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-orange-500 h-full" style="width: 50%"></div>
                    </div>
                    <span class="text-orange-500 ml-4 font-medium">%50</span>
                </div>
            </li>
            <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span>
                    <div class="mt-1 text-muted-color">Accessories</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
                    <div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-cyan-500 h-full" style="width: 16%"></div>
                    </div>
                    <span class="text-cyan-500 ml-4 font-medium">%16</span>
                </div>
            </li>
            <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Supernova Sticker</span>
                    <div class="mt-1 text-muted-color">Accessories</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
                    <div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-pink-500 h-full" style="width: 67%"></div>
                    </div>
                    <span class="text-pink-500 ml-4 font-medium">%67</span>
                </div>
            </li>
            <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Wonders Notebook</span>
                    <div class="mt-1 text-muted-color">Office</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
                    <div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-green-500 h-full" style="width: 35%"></div>
                    </div>
                    <span class="text-primary ml-4 font-medium">%35</span>
                </div>
            </li>
            <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Mat Black Case</span>
                    <div class="mt-1 text-muted-color">Accessories</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
                    <div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-purple-500 h-full" style="width: 75%"></div>
                    </div>
                    <span class="text-purple-500 ml-4 font-medium">%75</span>
                </div>
            </li>
            <li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Robots T-Shirt</span>
                    <div class="mt-1 text-muted-color">Clothing</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
                    <div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-teal-500 h-full" style="width: 40%"></div>
                    </div>
                    <span class="text-teal-500 ml-4 font-medium">%40</span>
                </div>
            </li>
        </ul>
    </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i012.\u0275setClassDebugInfo(BestSellingWidget, { className: "BestSellingWidget", filePath: "src/app/pages/dashboard/components/bestsellingwidget.ts", lineNumber: 96 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fdashboard%2Fcomponents%2Fbestsellingwidget.ts%40BestSellingWidget";
  function BestSellingWidget_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i012.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i012.\u0275\u0275replaceMetadata(BestSellingWidget, m.default, [i012, i110, i27, i35, i42], [CommonModule7, ButtonModule3, MenuModule2, Component10], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && BestSellingWidget_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && BestSellingWidget_HmrLoad(d.timestamp)));
})();

// src/app/pages/dashboard/components/revenuestreamwidget.ts
import { afterNextRender, Component as Component11, effect as effect3, inject as inject8, signal as signal3 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { ChartModule } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_chart.js?v=ae3c7c69";
import * as i013 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i111 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_chart.js?v=ae3c7c69";
import * as i28 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_api.js?v=ae3c7c69";
var RevenueStreamWidget = class _RevenueStreamWidget {
  layoutService = inject8(LayoutService);
  chartData = signal3(null, ...ngDevMode ? [{ debugName: "chartData" }] : (
    /* istanbul ignore next */
    []
  ));
  chartOptions = signal3(null, ...ngDevMode ? [{ debugName: "chartOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    afterNextRender(() => {
      setTimeout(() => {
        this.initChart();
      }, 150);
    });
    effect3(() => {
      this.layoutService.layoutConfig().darkTheme;
      setTimeout(() => {
        this.initChart();
      }, 150);
    });
  }
  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const borderColor = documentStyle.getPropertyValue("--surface-border");
    const textMutedColor = documentStyle.getPropertyValue("--text-color-secondary");
    this.chartData.set({
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          type: "bar",
          label: "Subscriptions",
          backgroundColor: documentStyle.getPropertyValue("--p-primary-400"),
          data: [4e3, 1e4, 15e3, 4e3],
          barThickness: 32
        },
        {
          type: "bar",
          label: "Advertising",
          backgroundColor: documentStyle.getPropertyValue("--p-primary-300"),
          data: [2100, 8400, 2400, 7500],
          barThickness: 32
        },
        {
          type: "bar",
          label: "Affiliate",
          backgroundColor: documentStyle.getPropertyValue("--p-primary-200"),
          data: [4100, 5200, 3400, 7400],
          borderRadius: {
            topLeft: 8,
            topRight: 8,
            bottomLeft: 0,
            bottomRight: 0
          },
          borderSkipped: false,
          barThickness: 32
        }
      ]
    });
    this.chartOptions.set({
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textMutedColor
          },
          grid: {
            color: "transparent",
            borderColor: "transparent"
          }
        },
        y: {
          stacked: true,
          ticks: {
            color: textMutedColor
          },
          grid: {
            color: borderColor,
            borderColor: "transparent",
            drawTicks: false
          }
        }
      }
    });
  }
  static \u0275fac = function RevenueStreamWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RevenueStreamWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ i013.\u0275\u0275defineComponent({ type: _RevenueStreamWidget, selectors: [["app-revenue-stream-widget"]], decls: 4, vars: 2, consts: [[1, "card", "mb-8!"], [1, "font-semibold", "text-xl", "mb-4"], ["type", "bar", 1, "h-100", 3, "data", "options"]], template: function RevenueStreamWidget_Template(rf, ctx) {
    if (rf & 1) {
      i013.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      i013.\u0275\u0275text(2, "Revenue Stream");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275element(3, "p-chart", 2);
      i013.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
      i013.\u0275\u0275advance(3);
      i013.\u0275\u0275property("data", ctx.chartData())("options", ctx.chartOptions());
    }
  }, dependencies: [ChartModule, i111.UIChart, i28.Header, i28.Footer, i28.PrimeTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i013.\u0275setClassMetadata(RevenueStreamWidget, [{
    type: Component11,
    args: [{
      standalone: true,
      selector: "app-revenue-stream-widget",
      imports: [ChartModule],
      template: `<div class="card mb-8!">
        <div class="font-semibold text-xl mb-4">Revenue Stream</div>
        <p-chart type="bar" [data]="chartData()" [options]="chartOptions()" class="h-100" />
    </div>`
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i013.\u0275setClassDebugInfo(RevenueStreamWidget, { className: "RevenueStreamWidget", filePath: "src/app/pages/dashboard/components/revenuestreamwidget.ts", lineNumber: 14 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fdashboard%2Fcomponents%2Frevenuestreamwidget.ts%40RevenueStreamWidget";
  function RevenueStreamWidget_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i013.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i013.\u0275\u0275replaceMetadata(RevenueStreamWidget, m.default, [i013, i111, i28], [ChartModule, Component11], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && RevenueStreamWidget_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && RevenueStreamWidget_HmrLoad(d.timestamp)));
})();

// src/app/pages/dashboard/dashboard.ts
import * as i014 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
var Dashboard = class _Dashboard {
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ i014.\u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 8, vars: 0, consts: [[1, "grid", "grid-cols-12", "gap-8"], [1, "contents"], [1, "col-span-12", "xl:col-span-6"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      i014.\u0275\u0275elementStart(0, "div", 0);
      i014.\u0275\u0275element(1, "app-stats-widget", 1);
      i014.\u0275\u0275elementStart(2, "div", 2);
      i014.\u0275\u0275element(3, "app-recent-sales-widget")(4, "app-best-selling-widget");
      i014.\u0275\u0275elementEnd();
      i014.\u0275\u0275elementStart(5, "div", 2);
      i014.\u0275\u0275element(6, "app-revenue-stream-widget")(7, "app-notifications-widget");
      i014.\u0275\u0275elementEnd()();
    }
  }, dependencies: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i014.\u0275setClassMetadata(Dashboard, [{
    type: Component12,
    args: [{
      selector: "app-dashboard",
      imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
      template: `
        <div class="grid grid-cols-12 gap-8">
            <app-stats-widget class="contents" />
            <div class="col-span-12 xl:col-span-6">
                <app-recent-sales-widget />
                <app-best-selling-widget />
            </div>
            <div class="col-span-12 xl:col-span-6">
                <app-revenue-stream-widget />
                <app-notifications-widget />
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i014.\u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/pages/dashboard/dashboard.ts", lineNumber: 25 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fdashboard%2Fdashboard.ts%40Dashboard";
  function Dashboard_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i014.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i014.\u0275\u0275replaceMetadata(Dashboard, m.default, [i014], [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget, Component12], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && Dashboard_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && Dashboard_HmrLoad(d.timestamp)));
})();

// src/app/pages/landing/landing.ts
import { Component as Component19 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { RouterModule as RouterModule8 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
import { RippleModule as RippleModule6 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_ripple.js?v=ae3c7c69";
import { StyleClassModule as StyleClassModule3 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_styleclass.js?v=ae3c7c69";
import { ButtonModule as ButtonModule7 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import { DividerModule as DividerModule2 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_divider.js?v=ae3c7c69";

// src/app/pages/landing/components/topbarwidget.component.ts
import { Component as Component13 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { StyleClassModule as StyleClassModule2 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_styleclass.js?v=ae3c7c69";
import { RouterModule as RouterModule6 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
import { RippleModule as RippleModule3 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_ripple.js?v=ae3c7c69";
import { ButtonModule as ButtonModule4 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import * as i015 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i112 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
import * as i29 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_styleclass.js?v=ae3c7c69";
import * as i36 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import * as i43 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_api.js?v=ae3c7c69";
import * as i52 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_ripple.js?v=ae3c7c69";
var TopbarWidget = class _TopbarWidget {
  router;
  constructor(router) {
    this.router = router;
  }
  static \u0275fac = function TopbarWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopbarWidget)(i015.\u0275\u0275directiveInject(i112.Router));
  };
  static \u0275cmp = /* @__PURE__ */ i015.\u0275\u0275defineComponent({ type: _TopbarWidget, selectors: [["topbar-widget"]], decls: 33, vars: 7, consts: [["href", "#", 1, "flex", "items-center"], ["viewBox", "0 0 54 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "h-12", "mr-2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z", "fill", "var(--primary-color)"], ["id", "mask0_1413_1551", "maskUnits", "userSpaceOnUse", "x", "0", "y", "8", "width", "54", "height", "11", 2, "mask-type", "alpha"], ["d", "M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z", "fill", "var(--primary-color)"], ["mask", "url(#mask0_1413_1551)"], ["d", "M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z", "fill", "var(--primary-color)"], [1, "text-surface-900", "dark:text-surface-0", "font-medium", "text-2xl", "leading-normal", "mr-20"], ["pButton", "", "severity", "secondary", "pRipple", "", "pStyleClass", "@next", "enterFromClass", "hidden", "leaveToClass", "hidden", 1, "lg:hidden!", 3, "text", "rounded", "hideOnOutsideClick"], [1, "pi", "pi-bars", "text-2xl!"], [1, "items-center", "bg-surface-0", "dark:bg-surface-900", "grow", "justify-between", "hidden", "lg:flex", "absolute", "lg:static", "w-full", "left-0", "top-full", "px-12", "lg:px-0", "z-20", "rounded-border"], [1, "list-none", "p-0", "m-0", "flex", "lg:items-center", "select-none", "flex-col", "lg:flex-row", "cursor-pointer", "gap-8"], ["pRipple", "", 1, "px-0", "py-4", "text-surface-900", "dark:text-surface-0", "font-medium", "text-xl", 3, "click"], [1, "flex", "border-t", "lg:border-t-0", "border-surface", "py-4", "lg:py-0", "mt-4", "lg:mt-0", "gap-2"], ["pButton", "", "pRipple", "", "label", "Login", "routerLink", "/auth/login", 3, "rounded", "text"], ["pButton", "", "pRipple", "", "label", "Register", "routerLink", "/auth/login", 3, "rounded"], [3, "float"]], template: function TopbarWidget_Template(rf, ctx) {
    if (rf & 1) {
      i015.\u0275\u0275elementStart(0, "a", 0);
      i015.\u0275\u0275namespaceSVG();
      i015.\u0275\u0275elementStart(1, "svg", 1);
      i015.\u0275\u0275element(2, "path", 2);
      i015.\u0275\u0275elementStart(3, "mask", 3);
      i015.\u0275\u0275element(4, "path", 4);
      i015.\u0275\u0275elementEnd();
      i015.\u0275\u0275elementStart(5, "g", 5);
      i015.\u0275\u0275element(6, "path", 6);
      i015.\u0275\u0275elementEnd()();
      i015.\u0275\u0275namespaceHTML();
      i015.\u0275\u0275elementStart(7, "span", 7);
      i015.\u0275\u0275text(8, "SAKAI");
      i015.\u0275\u0275elementEnd()();
      i015.\u0275\u0275elementStart(9, "a", 8);
      i015.\u0275\u0275element(10, "i", 9);
      i015.\u0275\u0275elementEnd();
      i015.\u0275\u0275elementStart(11, "div", 10)(12, "ul", 11)(13, "li")(14, "a", 12);
      i015.\u0275\u0275listener("click", function TopbarWidget_Template_a_click_14_listener() {
        return ctx.router.navigate(["/landing"], { fragment: "home" });
      });
      i015.\u0275\u0275elementStart(15, "span");
      i015.\u0275\u0275text(16, "Home");
      i015.\u0275\u0275elementEnd()()();
      i015.\u0275\u0275elementStart(17, "li")(18, "a", 12);
      i015.\u0275\u0275listener("click", function TopbarWidget_Template_a_click_18_listener() {
        return ctx.router.navigate(["/landing"], { fragment: "features" });
      });
      i015.\u0275\u0275elementStart(19, "span");
      i015.\u0275\u0275text(20, "Features");
      i015.\u0275\u0275elementEnd()()();
      i015.\u0275\u0275elementStart(21, "li")(22, "a", 12);
      i015.\u0275\u0275listener("click", function TopbarWidget_Template_a_click_22_listener() {
        return ctx.router.navigate(["/landing"], { fragment: "highlights" });
      });
      i015.\u0275\u0275elementStart(23, "span");
      i015.\u0275\u0275text(24, "Highlights");
      i015.\u0275\u0275elementEnd()()();
      i015.\u0275\u0275elementStart(25, "li")(26, "a", 12);
      i015.\u0275\u0275listener("click", function TopbarWidget_Template_a_click_26_listener() {
        return ctx.router.navigate(["/landing"], { fragment: "pricing" });
      });
      i015.\u0275\u0275elementStart(27, "span");
      i015.\u0275\u0275text(28, "Pricing");
      i015.\u0275\u0275elementEnd()()()();
      i015.\u0275\u0275elementStart(29, "div", 13);
      i015.\u0275\u0275element(30, "button", 14)(31, "button", 15)(32, "app-floating-configurator", 16);
      i015.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i015.\u0275\u0275advance(9);
      i015.\u0275\u0275property("text", true)("rounded", true)("hideOnOutsideClick", true);
      i015.\u0275\u0275advance(21);
      i015.\u0275\u0275property("rounded", true)("text", true);
      i015.\u0275\u0275advance();
      i015.\u0275\u0275property("rounded", true);
      i015.\u0275\u0275advance();
      i015.\u0275\u0275property("float", false);
    }
  }, dependencies: [RouterModule6, i112.RouterOutlet, i112.RouterLink, i112.RouterLinkActive, i112.\u0275EmptyOutletComponent, StyleClassModule2, i29.StyleClass, ButtonModule4, i36.ButtonDirective, i36.Button, i36.ButtonLabel, i36.ButtonIcon, i43.Header, i43.Footer, i43.PrimeTemplate, RippleModule3, i52.Ripple, AppFloatingConfigurator], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i015.\u0275setClassMetadata(TopbarWidget, [{
    type: Component13,
    args: [{
      selector: "topbar-widget",
      imports: [RouterModule6, StyleClassModule2, ButtonModule4, RippleModule3, AppFloatingConfigurator],
      template: `<a class="flex items-center" href="#">
            <svg viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-12 mr-2">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z"
                    fill="var(--primary-color)"
                />
                <mask id="mask0_1413_1551" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="8" width="54" height="11">
                    <path d="M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z" fill="var(--primary-color)" />
                </mask>
                <g mask="url(#mask0_1413_1551)">
                    <path
                        d="M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z"
                        fill="var(--primary-color)"
                    />
                </g>
            </svg>
            <span class="text-surface-900 dark:text-surface-0 font-medium text-2xl leading-normal mr-20">SAKAI</span>
        </a>

        <a pButton [text]="true" severity="secondary" [rounded]="true" pRipple class="lg:hidden!" pStyleClass="@next" enterFromClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
            <i class="pi pi-bars text-2xl!"></i>
        </a>

        <div class="items-center bg-surface-0 dark:bg-surface-900 grow justify-between hidden lg:flex absolute lg:static w-full left-0 top-full px-12 lg:px-0 z-20 rounded-border">
            <ul class="list-none p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row cursor-pointer gap-8">
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'home' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'features' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Features</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'highlights' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Highlights</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'pricing' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Pricing</span>
                    </a>
                </li>
            </ul>
            <div class="flex border-t lg:border-t-0 border-surface py-4 lg:py-0 mt-4 lg:mt-0 gap-2">
                <button pButton pRipple label="Login" routerLink="/auth/login" [rounded]="true" [text]="true"></button>
                <button pButton pRipple label="Register" routerLink="/auth/login" [rounded]="true"></button>
                <app-floating-configurator [float]="false"/>
            </div>
        </div> `
    }]
  }], () => [{ type: i112.Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i015.\u0275setClassDebugInfo(TopbarWidget, { className: "TopbarWidget", filePath: "src/app/pages/landing/components/topbarwidget.component.ts", lineNumber: 66 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Flanding%2Fcomponents%2Ftopbarwidget.component.ts%40TopbarWidget";
  function TopbarWidget_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i015.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i015.\u0275\u0275replaceMetadata(TopbarWidget, m.default, [i015, i112, i29, i36, i43, i52], [RouterModule6, StyleClassModule2, ButtonModule4, RippleModule3, AppFloatingConfigurator, Component13], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && TopbarWidget_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && TopbarWidget_HmrLoad(d.timestamp)));
})();

// src/app/pages/landing/components/herowidget.ts
import { Component as Component14 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { ButtonModule as ButtonModule5 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import { RippleModule as RippleModule4 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_ripple.js?v=ae3c7c69";
import * as i016 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i113 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import * as i210 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_api.js?v=ae3c7c69";
import * as i37 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_ripple.js?v=ae3c7c69";
var HeroWidget = class _HeroWidget {
  static \u0275fac = function HeroWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ i016.\u0275\u0275defineComponent({ type: _HeroWidget, selectors: [["hero-widget"]], decls: 11, vars: 1, consts: [["id", "hero", 1, "flex", "flex-col", "pt-6", "px-6", "lg:px-20", "overflow-hidden", 2, "background", "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%)", "clip-path", "ellipse(150% 87% at 93% 13%)"], [1, "mx-6", "md:mx-20", "mt-0", "md:mt-6"], [1, "text-6xl", "font-bold", "text-gray-900", "leading-tight", "dark:!text-gray-700"], [1, "font-light", "block"], [1, "font-normal", "text-2xl", "leading-normal", "md:mt-4", "text-gray-700", "dark:text-gray-700"], ["pButton", "", "pRipple", "", "type", "button", "label", "Get Started", 1, "text-xl!", "mt-8", "px-4!", 3, "rounded"], [1, "flex", "justify-center", "md:justify-end"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/screen-1.png", "alt", "Hero Image", 1, "w-9/12", "md:w-auto"]], template: function HeroWidget_Template(rf, ctx) {
    if (rf & 1) {
      i016.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
      i016.\u0275\u0275text(4, "Eu sem integer");
      i016.\u0275\u0275elementEnd();
      i016.\u0275\u0275text(5, "eget magna fermentum");
      i016.\u0275\u0275elementEnd();
      i016.\u0275\u0275elementStart(6, "p", 4);
      i016.\u0275\u0275text(7, "Sed blandit libero volutpat sed cras. Fames ac turpis egestas integer. Placerat in egestas erat...");
      i016.\u0275\u0275elementEnd();
      i016.\u0275\u0275element(8, "button", 5);
      i016.\u0275\u0275elementEnd();
      i016.\u0275\u0275elementStart(9, "div", 6);
      i016.\u0275\u0275element(10, "img", 7);
      i016.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i016.\u0275\u0275advance(8);
      i016.\u0275\u0275property("rounded", true);
    }
  }, dependencies: [ButtonModule5, i113.ButtonDirective, i113.Button, i113.ButtonLabel, i113.ButtonIcon, i210.Header, i210.Footer, i210.PrimeTemplate, RippleModule4, i37.Ripple], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i016.\u0275setClassMetadata(HeroWidget, [{
    type: Component14,
    args: [{
      selector: "hero-widget",
      imports: [ButtonModule5, RippleModule4],
      template: `
        <div
            id="hero"
            class="flex flex-col pt-6 px-6 lg:px-20 overflow-hidden"
            style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%); clip-path: ellipse(150% 87% at 93% 13%)"
        >
            <div class="mx-6 md:mx-20 mt-0 md:mt-6">
                <h1 class="text-6xl font-bold text-gray-900 leading-tight dark:!text-gray-700"><span class="font-light block">Eu sem integer</span>eget magna fermentum</h1>
                <p class="font-normal text-2xl leading-normal md:mt-4 text-gray-700 dark:text-gray-700">Sed blandit libero volutpat sed cras. Fames ac turpis egestas integer. Placerat in egestas erat...</p>
                <button pButton pRipple [rounded]="true" type="button" label="Get Started" class="text-xl! mt-8 px-4!"></button>
            </div>
            <div class="flex justify-center md:justify-end">
                <img src="https://primefaces.org/cdn/templates/sakai/landing/screen-1.png" alt="Hero Image" class="w-9/12 md:w-auto" />
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i016.\u0275setClassDebugInfo(HeroWidget, { className: "HeroWidget", filePath: "src/app/pages/landing/components/herowidget.ts", lineNumber: 25 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Flanding%2Fcomponents%2Fherowidget.ts%40HeroWidget";
  function HeroWidget_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i016.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i016.\u0275\u0275replaceMetadata(HeroWidget, m.default, [i016, i113, i210, i37], [ButtonModule5, RippleModule4, Component14], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && HeroWidget_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && HeroWidget_HmrLoad(d.timestamp)));
})();

// src/app/pages/landing/components/featureswidget.ts
import { Component as Component15 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { CommonModule as CommonModule8 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
import * as i017 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i114 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
var FeaturesWidget = class _FeaturesWidget {
  static \u0275fac = function FeaturesWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeaturesWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ i017.\u0275\u0275defineComponent({ type: _FeaturesWidget, selectors: [["features-widget"]], decls: 97, vars: 0, consts: [["id", "features", 1, "py-6", "px-6", "lg:px-20", "mt-8", "mx-0", "lg:mx-20"], [1, "grid", "grid-cols-12", "gap-4", "justify-center"], [1, "col-span-12", "text-center", "mt-20", "mb-6"], [1, "text-surface-900", "dark:text-surface-0", "font-normal", "mb-2", "text-4xl"], [1, "text-muted-color", "text-2xl"], [1, "col-span-12", "md:col-span-12", "lg:col-span-4", "p-0", "lg:pr-8", "lg:pb-8", "mt-6", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"], [1, "p-4", "bg-surface-0", "dark:bg-surface-900", "h-full", 2, "border-radius", "8px"], [1, "flex", "items-center", "justify-center", "bg-yellow-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-users", "text-2xl!", "text-yellow-700"], [1, "mb-2", "text-surface-900", "dark:text-surface-0"], [1, "text-surface-600", "dark:text-surface-200"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-cyan-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-palette", "text-2xl!", "text-cyan-700"], [1, "col-span-12", "md:col-span-12", "lg:col-span-4", "p-0", "lg:pb-8", "mt-6", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-indigo-200", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-map", "text-2xl!", "text-indigo-700"], [1, "mt-6", "mb-1", "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(145, 210, 204, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-slate-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-id-card", "text-2xl!", "text-slate-700"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2), rgba(160, 210, 250, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-orange-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-star", "text-2xl!", "text-orange-700"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-pink-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-moon", "text-2xl!", "text-pink-700"], [1, "col-span-12", "md:col-span-12", "lg:col-span-4", "p-0", "lg:pr-8", "mt-6", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-teal-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-shopping-cart", "text-2xl!", "text-teal-700"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-blue-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-globe", "text-2xl!", "text-blue-700"], [1, "col-span-12", "md:col-span-12", "lg:col-span-4", "p-0", "lg-4", "mt-6", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-purple-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-eye", "text-2xl!", "text-purple-700"], [1, "col-span-12", "mt-20", "mb-20", "p-2", "md:p-20", 2, "border-radius", "20px", "background", "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"], [1, "flex", "flex-col", "justify-center", "items-center", "text-center", "px-4", "py-4", "md:py-0"], [1, "text-gray-900", "mb-2", "text-3xl", "font-semibold"], [1, "text-gray-600", "text-2xl"], [1, "text-gray-900", "sm:line-height-2", "md:line-height-4", "text-2xl", "mt-6", 2, "max-width", "800px"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/peak-logo.svg", "alt", "Company logo", 1, "mt-6"]], template: function FeaturesWidget_Template(rf, ctx) {
    if (rf & 1) {
      i017.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      i017.\u0275\u0275text(4, "Marvelous Features");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(5, "span", 4);
      i017.\u0275\u0275text(6, "Placerat in egestas erat...");
      i017.\u0275\u0275elementEnd()();
      i017.\u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8);
      i017.\u0275\u0275element(11, "i", 9);
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(12, "h5", 10);
      i017.\u0275\u0275text(13, "Easy to Use");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(14, "span", 11);
      i017.\u0275\u0275text(15, "Posuere morbi leo urna molestie.");
      i017.\u0275\u0275elementEnd()()()();
      i017.\u0275\u0275elementStart(16, "div", 5)(17, "div", 12)(18, "div", 7)(19, "div", 13);
      i017.\u0275\u0275element(20, "i", 14);
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(21, "h5", 10);
      i017.\u0275\u0275text(22, "Fresh Design");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(23, "span", 11);
      i017.\u0275\u0275text(24, "Semper risus in hendrerit.");
      i017.\u0275\u0275elementEnd()()()();
      i017.\u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 7)(28, "div", 17);
      i017.\u0275\u0275element(29, "i", 18);
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(30, "div", 19);
      i017.\u0275\u0275text(31, "Well Documented");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(32, "span", 11);
      i017.\u0275\u0275text(33, "Non arcu risus quis varius quam quisque.");
      i017.\u0275\u0275elementEnd()()()();
      i017.\u0275\u0275elementStart(34, "div", 5)(35, "div", 20)(36, "div", 7)(37, "div", 21);
      i017.\u0275\u0275element(38, "i", 22);
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(39, "div", 19);
      i017.\u0275\u0275text(40, "Responsive Layout");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(41, "span", 11);
      i017.\u0275\u0275text(42, "Nulla malesuada pellentesque elit.");
      i017.\u0275\u0275elementEnd()()()();
      i017.\u0275\u0275elementStart(43, "div", 5)(44, "div", 23)(45, "div", 7)(46, "div", 24);
      i017.\u0275\u0275element(47, "i", 25);
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(48, "div", 19);
      i017.\u0275\u0275text(49, "Clean Code");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(50, "span", 11);
      i017.\u0275\u0275text(51, "Condimentum lacinia quis vel eros.");
      i017.\u0275\u0275elementEnd()()()();
      i017.\u0275\u0275elementStart(52, "div", 15)(53, "div", 26)(54, "div", 7)(55, "div", 27);
      i017.\u0275\u0275element(56, "i", 28);
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(57, "div", 19);
      i017.\u0275\u0275text(58, "Dark Mode");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(59, "span", 11);
      i017.\u0275\u0275text(60, "Convallis tellus id interdum velit laoreet.");
      i017.\u0275\u0275elementEnd()()()();
      i017.\u0275\u0275elementStart(61, "div", 29)(62, "div", 30)(63, "div", 7)(64, "div", 31);
      i017.\u0275\u0275element(65, "i", 32);
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(66, "div", 19);
      i017.\u0275\u0275text(67, "Ready to Use");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(68, "span", 11);
      i017.\u0275\u0275text(69, "Mauris sit amet massa vitae.");
      i017.\u0275\u0275elementEnd()()()();
      i017.\u0275\u0275elementStart(70, "div", 29)(71, "div", 33)(72, "div", 7)(73, "div", 34);
      i017.\u0275\u0275element(74, "i", 35);
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(75, "div", 19);
      i017.\u0275\u0275text(76, "Modern Practices");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(77, "span", 11);
      i017.\u0275\u0275text(78, "Elementum nibh tellus molestie nunc non.");
      i017.\u0275\u0275elementEnd()()()();
      i017.\u0275\u0275elementStart(79, "div", 36)(80, "div", 37)(81, "div", 7)(82, "div", 38);
      i017.\u0275\u0275element(83, "i", 39);
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(84, "div", 19);
      i017.\u0275\u0275text(85, "Privacy");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(86, "span", 11);
      i017.\u0275\u0275text(87, "Neque egestas congue quisque.");
      i017.\u0275\u0275elementEnd()()()();
      i017.\u0275\u0275elementStart(88, "div", 40)(89, "div", 41)(90, "div", 42);
      i017.\u0275\u0275text(91, "Jos\xE9phine Miller");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(92, "span", 43);
      i017.\u0275\u0275text(93, "Peak Interactive");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(94, "p", 44);
      i017.\u0275\u0275text(95, " \u201CDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\u201D ");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275element(96, "img", 45);
      i017.\u0275\u0275elementEnd()()()();
    }
  }, dependencies: [CommonModule8, i114.NgClass, i114.NgComponentOutlet, i114.NgForOf, i114.NgIf, i114.NgTemplateOutlet, i114.NgStyle, i114.NgSwitch, i114.NgSwitchCase, i114.NgSwitchDefault, i114.NgPlural, i114.NgPluralCase, i114.AsyncPipe, i114.UpperCasePipe, i114.LowerCasePipe, i114.JsonPipe, i114.SlicePipe, i114.DecimalPipe, i114.PercentPipe, i114.TitleCasePipe, i114.CurrencyPipe, i114.DatePipe, i114.I18nPluralPipe, i114.I18nSelectPipe, i114.KeyValuePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i017.\u0275setClassMetadata(FeaturesWidget, [{
    type: Component15,
    args: [{
      selector: "features-widget",
      standalone: true,
      imports: [CommonModule8],
      template: ` <div id="features" class="py-6 px-6 lg:px-20 mt-8 mx-0 lg:mx-20">
        <div class="grid grid-cols-12 gap-4 justify-center">
            <div class="col-span-12 text-center mt-20 mb-6">
                <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Marvelous Features</div>
                <span class="text-muted-color text-2xl">Placerat in egestas erat...</span>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-yellow-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-users text-2xl! text-yellow-700"></i>
                        </div>
                        <h5 class="mb-2 text-surface-900 dark:text-surface-0">Easy to Use</h5>
                        <span class="text-surface-600 dark:text-surface-200">Posuere morbi leo urna molestie.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-cyan-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-palette text-2xl! text-cyan-700"></i>
                        </div>
                        <h5 class="mb-2 text-surface-900 dark:text-surface-0">Fresh Design</h5>
                        <span class="text-surface-600 dark:text-surface-200">Semper risus in hendrerit.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-indigo-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-map text-2xl! text-indigo-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Well Documented</div>
                        <span class="text-surface-600 dark:text-surface-200">Non arcu risus quis varius quam quisque.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(145, 210, 204, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-slate-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-id-card text-2xl! text-slate-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Responsive Layout</div>
                        <span class="text-surface-600 dark:text-surface-200">Nulla malesuada pellentesque elit.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2), rgba(160, 210, 250, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-orange-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-star text-2xl! text-orange-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Clean Code</div>
                        <span class="text-surface-600 dark:text-surface-200">Condimentum lacinia quis vel eros.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-pink-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-moon text-2xl! text-pink-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Dark Mode</div>
                        <span class="text-surface-600 dark:text-surface-200">Convallis tellus id interdum velit laoreet.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-teal-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-shopping-cart text-2xl! text-teal-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Ready to Use</div>
                        <span class="text-surface-600 dark:text-surface-200">Mauris sit amet massa vitae.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-blue-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-globe text-2xl! text-blue-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Modern Practices</div>
                        <span class="text-surface-600 dark:text-surface-200">Elementum nibh tellus molestie nunc non.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg-4 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-purple-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-eye text-2xl! text-purple-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Privacy</div>
                        <span class="text-surface-600 dark:text-surface-200">Neque egestas congue quisque.</span>
                    </div>
                </div>
            </div>

            <div
                class="col-span-12 mt-20 mb-20 p-2 md:p-20"
                style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
            >
                <div class="flex flex-col justify-center items-center text-center px-4 py-4 md:py-0">
                    <div class="text-gray-900 mb-2 text-3xl font-semibold">Jos\xE9phine Miller</div>
                    <span class="text-gray-600 text-2xl">Peak Interactive</span>
                    <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-6" style="max-width: 800px">
                        \u201CDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\u201D
                    </p>
                    <img src="https://primefaces.org/cdn/templates/sakai/landing/peak-logo.svg" class="mt-6" alt="Company logo" />
                </div>
            </div>
        </div>
    </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i017.\u0275setClassDebugInfo(FeaturesWidget, { className: "FeaturesWidget", filePath: "src/app/pages/landing/components/featureswidget.ts", lineNumber: 139 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Flanding%2Fcomponents%2Ffeatureswidget.ts%40FeaturesWidget";
  function FeaturesWidget_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i017.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i017.\u0275\u0275replaceMetadata(FeaturesWidget, m.default, [i017, i114], [CommonModule8, Component15], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && FeaturesWidget_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && FeaturesWidget_HmrLoad(d.timestamp)));
})();

// src/app/pages/landing/components/highlightswidget.ts
import { Component as Component16 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i018 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
var HighlightsWidget = class _HighlightsWidget {
  static \u0275fac = function HighlightsWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HighlightsWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ i018.\u0275\u0275defineComponent({ type: _HighlightsWidget, selectors: [["highlights-widget"]], decls: 26, vars: 0, consts: [["id", "highlights", 1, "py-6", "px-6", "lg:px-20", "mx-0", "my-12", "lg:mx-20"], [1, "text-center"], [1, "text-surface-900", "dark:text-surface-0", "font-normal", "mb-2", "text-4xl"], [1, "text-muted-color", "text-2xl"], [1, "grid", "grid-cols-12", "gap-4", "mt-20", "pb-2", "md:pb-20"], [1, "flex", "justify-center", "col-span-12", "lg:col-span-6", "bg-purple-100", "p-0", "order-1", "lg:order-0", 2, "border-radius", "8px"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/mockup.png", "alt", "mockup mobile", 1, "w-11/12"], [1, "col-span-12", "lg:col-span-6", "my-auto", "flex", "flex-col", "lg:items-end", "text-center", "lg:text-right", "gap-4"], [1, "flex", "items-center", "justify-center", "bg-purple-200", "self-center", "lg:self-end", 2, "width", "4.2rem", "height", "4.2rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-mobile", "text-4xl!", "text-purple-700"], [1, "leading-none", "text-surface-900", "dark:text-surface-0", "text-3xl", "font-normal"], [1, "text-surface-700", "dark:text-surface-100", "text-2xl", "leading-normal", "ml-0", "md:ml-2", 2, "max-width", "650px"], [1, "grid", "grid-cols-12", "gap-4", "my-20", "pt-2", "md:pt-20"], [1, "col-span-12", "lg:col-span-6", "my-auto", "flex", "flex-col", "text-center", "lg:text-left", "lg:items-start", "gap-4"], [1, "flex", "items-center", "justify-center", "bg-yellow-200", "self-center", "lg:self-start", 2, "width", "4.2rem", "height", "4.2rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-desktop", "text-3xl!", "text-yellow-700"], [1, "text-surface-700", "dark:text-surface-100", "text-2xl", "leading-normal", "mr-0", "md:mr-2", 2, "max-width", "650px"], [1, "flex", "justify-end", "order-1", "sm:order-2", "col-span-12", "lg:col-span-6", "bg-yellow-100", "p-0", 2, "border-radius", "8px"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/mockup-desktop.png", "alt", "mockup", 1, "w-11/12"]], template: function HighlightsWidget_Template(rf, ctx) {
    if (rf & 1) {
      i018.\u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      i018.\u0275\u0275text(3, "Powerful Everywhere");
      i018.\u0275\u0275domElementEnd();
      i018.\u0275\u0275domElementStart(4, "span", 3);
      i018.\u0275\u0275text(5, "Amet consectetur adipiscing elit...");
      i018.\u0275\u0275domElementEnd()();
      i018.\u0275\u0275domElementStart(6, "div", 4)(7, "div", 5);
      i018.\u0275\u0275domElement(8, "img", 6);
      i018.\u0275\u0275domElementEnd();
      i018.\u0275\u0275domElementStart(9, "div", 7)(10, "div", 8);
      i018.\u0275\u0275domElement(11, "i", 9);
      i018.\u0275\u0275domElementEnd();
      i018.\u0275\u0275domElementStart(12, "div", 10);
      i018.\u0275\u0275text(13, "Congue Quisque Egestas");
      i018.\u0275\u0275domElementEnd();
      i018.\u0275\u0275domElementStart(14, "span", 11);
      i018.\u0275\u0275text(15, "Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.");
      i018.\u0275\u0275domElementEnd()()();
      i018.\u0275\u0275domElementStart(16, "div", 12)(17, "div", 13)(18, "div", 14);
      i018.\u0275\u0275domElement(19, "i", 15);
      i018.\u0275\u0275domElementEnd();
      i018.\u0275\u0275domElementStart(20, "div", 10);
      i018.\u0275\u0275text(21, "Celerisque Eu Ultrices");
      i018.\u0275\u0275domElementEnd();
      i018.\u0275\u0275domElementStart(22, "span", 16);
      i018.\u0275\u0275text(23, "Adipiscing commodo elit at imperdiet dui. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Suspendisse in est ante in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.");
      i018.\u0275\u0275domElementEnd()();
      i018.\u0275\u0275domElementStart(24, "div", 17);
      i018.\u0275\u0275domElement(25, "img", 18);
      i018.\u0275\u0275domElementEnd()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i018.\u0275setClassMetadata(HighlightsWidget, [{
    type: Component16,
    args: [{
      selector: "highlights-widget",
      template: `
        <div id="highlights" class="py-6 px-6 lg:px-20 mx-0 my-12 lg:mx-20">
            <div class="text-center">
                <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Powerful Everywhere</div>
                <span class="text-muted-color text-2xl">Amet consectetur adipiscing elit...</span>
            </div>

            <div class="grid grid-cols-12 gap-4 mt-20 pb-2 md:pb-20">
                <div class="flex justify-center col-span-12 lg:col-span-6 bg-purple-100 p-0 order-1 lg:order-0" style="border-radius: 8px">
                    <img src="https://primefaces.org/cdn/templates/sakai/landing/mockup.png" class="w-11/12" alt="mockup mobile" />
                </div>

                <div class="col-span-12 lg:col-span-6 my-auto flex flex-col lg:items-end text-center lg:text-right gap-4">
                    <div class="flex items-center justify-center bg-purple-200 self-center lg:self-end" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                        <i class="pi pi-fw pi-mobile text-4xl! text-purple-700"></i>
                    </div>
                    <div class="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">Congue Quisque Egestas</div>
                    <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal ml-0 md:ml-2" style="max-width: 650px"
                        >Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.</span
                    >
                </div>
            </div>

            <div class="grid grid-cols-12 gap-4 my-20 pt-2 md:pt-20">
                <div class="col-span-12 lg:col-span-6 my-auto flex flex-col text-center lg:text-left lg:items-start gap-4">
                    <div class="flex items-center justify-center bg-yellow-200 self-center lg:self-start" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                        <i class="pi pi-fw pi-desktop text-3xl! text-yellow-700"></i>
                    </div>
                    <div class="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">Celerisque Eu Ultrices</div>
                    <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal mr-0 md:mr-2" style="max-width: 650px"
                        >Adipiscing commodo elit at imperdiet dui. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Suspendisse in est ante in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.</span
                    >
                </div>

                <div class="flex justify-end order-1 sm:order-2 col-span-12 lg:col-span-6 bg-yellow-100 p-0" style="border-radius: 8px">
                    <img src="https://primefaces.org/cdn/templates/sakai/landing/mockup-desktop.png" class="w-11/12" alt="mockup" />
                </div>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i018.\u0275setClassDebugInfo(HighlightsWidget, { className: "HighlightsWidget", filePath: "src/app/pages/landing/components/highlightswidget.ts", lineNumber: 46 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Flanding%2Fcomponents%2Fhighlightswidget.ts%40HighlightsWidget";
  function HighlightsWidget_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i018.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i018.\u0275\u0275replaceMetadata(HighlightsWidget, m.default, [i018], [Component16], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && HighlightsWidget_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && HighlightsWidget_HmrLoad(d.timestamp)));
})();

// src/app/pages/landing/components/pricingwidget.ts
import { Component as Component17 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { ButtonModule as ButtonModule6 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import { DividerModule } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_divider.js?v=ae3c7c69";
import { RippleModule as RippleModule5 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_ripple.js?v=ae3c7c69";
import * as i019 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i115 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_divider.js?v=ae3c7c69";
import * as i211 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_bind.js?v=ae3c7c69";
import * as i38 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import * as i44 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_api.js?v=ae3c7c69";
import * as i53 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_ripple.js?v=ae3c7c69";
var PricingWidget = class _PricingWidget {
  static \u0275fac = function PricingWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PricingWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ i019.\u0275\u0275defineComponent({ type: _PricingWidget, selectors: [["pricing-widget"]], decls: 97, vars: 0, consts: [["id", "pricing", 1, "py-6", "px-6", "lg:px-20", "my-2", "md:my-6"], [1, "text-center", "mb-6"], [1, "text-surface-900", "dark:text-surface-0", "font-normal", "mb-2", "text-4xl"], [1, "text-muted-color", "text-2xl"], [1, "grid", "grid-cols-12", "gap-4", "justify-between", "mt-20", "md:mt-0"], [1, "col-span-12", "lg:col-span-4", "p-0", "md:p-4"], [1, "p-4", "flex", "flex-col", "border-surface-200", "dark:border-surface-600", "pricing-card", "cursor-pointer", "border-2", "hover:border-primary", "duration-300", "transition-all", 2, "border-radius", "10px"], [1, "text-surface-900", "dark:text-surface-0", "text-center", "my-8", "text-3xl"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/free.svg", "alt", "free", 1, "w-10/12", "mx-auto"], [1, "my-8", "flex", "flex-col", "items-center", "gap-4"], [1, "flex", "items-center"], [1, "text-5xl", "font-bold", "mr-2", "text-surface-900", "dark:text-surface-0"], [1, "text-surface-600", "dark:text-surface-200"], ["pButton", "", "pRipple", "", "label", "Get Started", 1, "p-button-rounded", "border-0", "ml-4", "font-light", "leading-tight", "bg-blue-500", "text-white"], [1, "w-full", "bg-surface-200"], [1, "my-8", "list-none", "p-0", "flex", "text-surface-900", "dark:text-surface-0", "flex-col", "px-8"], [1, "py-2"], [1, "pi", "pi-fw", "pi-check", "text-xl", "text-cyan-500", "mr-2"], [1, "text-xl", "leading-normal"], [1, "col-span-12", "lg:col-span-4", "p-0", "md:p-4", "mt-6", "md:mt-0"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/startup.svg", "alt", "startup", 1, "w-10/12", "mx-auto"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/enterprise.svg", "alt", "enterprise", 1, "w-10/12", "mx-auto"], ["pButton", "", "pRipple", "", "label", "Try Free", 1, "p-button-rounded", "border-0", "ml-4", "font-light", "leading-tight", "bg-blue-500", "text-white"]], template: function PricingWidget_Template(rf, ctx) {
    if (rf & 1) {
      i019.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      i019.\u0275\u0275text(3, "Matchless Pricing");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(4, "span", 3);
      i019.\u0275\u0275text(5, "Amet consectetur adipiscing elit...");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7);
      i019.\u0275\u0275text(10, "Free");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275element(11, "img", 8);
      i019.\u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "span", 11);
      i019.\u0275\u0275text(15, "$0");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(16, "span", 12);
      i019.\u0275\u0275text(17, "per month");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275element(18, "button", 13);
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275element(19, "p-divider", 14);
      i019.\u0275\u0275elementStart(20, "ul", 15)(21, "li", 16);
      i019.\u0275\u0275element(22, "i", 17);
      i019.\u0275\u0275elementStart(23, "span", 18);
      i019.\u0275\u0275text(24, "Responsive Layout");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(25, "li", 16);
      i019.\u0275\u0275element(26, "i", 17);
      i019.\u0275\u0275elementStart(27, "span", 18);
      i019.\u0275\u0275text(28, "Unlimited Push Messages");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(29, "li", 16);
      i019.\u0275\u0275element(30, "i", 17);
      i019.\u0275\u0275elementStart(31, "span", 18);
      i019.\u0275\u0275text(32, "50 Support Ticket");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(33, "li", 16);
      i019.\u0275\u0275element(34, "i", 17);
      i019.\u0275\u0275elementStart(35, "span", 18);
      i019.\u0275\u0275text(36, "Free Shipping");
      i019.\u0275\u0275elementEnd()()()()();
      i019.\u0275\u0275elementStart(37, "div", 19)(38, "div", 6)(39, "div", 7);
      i019.\u0275\u0275text(40, "Startup");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275element(41, "img", 20);
      i019.\u0275\u0275elementStart(42, "div", 9)(43, "div", 10)(44, "span", 11);
      i019.\u0275\u0275text(45, "$1");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(46, "span", 12);
      i019.\u0275\u0275text(47, "per month");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275element(48, "button", 13);
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275element(49, "p-divider", 14);
      i019.\u0275\u0275elementStart(50, "ul", 15)(51, "li", 16);
      i019.\u0275\u0275element(52, "i", 17);
      i019.\u0275\u0275elementStart(53, "span", 18);
      i019.\u0275\u0275text(54, "Responsive Layout");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(55, "li", 16);
      i019.\u0275\u0275element(56, "i", 17);
      i019.\u0275\u0275elementStart(57, "span", 18);
      i019.\u0275\u0275text(58, "Unlimited Push Messages");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(59, "li", 16);
      i019.\u0275\u0275element(60, "i", 17);
      i019.\u0275\u0275elementStart(61, "span", 18);
      i019.\u0275\u0275text(62, "50 Support Ticket");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(63, "li", 16);
      i019.\u0275\u0275element(64, "i", 17);
      i019.\u0275\u0275elementStart(65, "span", 18);
      i019.\u0275\u0275text(66, "Free Shipping");
      i019.\u0275\u0275elementEnd()()()()();
      i019.\u0275\u0275elementStart(67, "div", 19)(68, "div", 6)(69, "div", 7);
      i019.\u0275\u0275text(70, "Enterprise");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275element(71, "img", 21);
      i019.\u0275\u0275elementStart(72, "div", 9)(73, "div", 10)(74, "span", 11);
      i019.\u0275\u0275text(75, "$5");
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275elementStart(76, "span", 12);
      i019.\u0275\u0275text(77, "per month");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275element(78, "button", 22);
      i019.\u0275\u0275elementEnd();
      i019.\u0275\u0275element(79, "p-divider", 14);
      i019.\u0275\u0275elementStart(80, "ul", 15)(81, "li", 16);
      i019.\u0275\u0275element(82, "i", 17);
      i019.\u0275\u0275elementStart(83, "span", 18);
      i019.\u0275\u0275text(84, "Responsive Layout");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(85, "li", 16);
      i019.\u0275\u0275element(86, "i", 17);
      i019.\u0275\u0275elementStart(87, "span", 18);
      i019.\u0275\u0275text(88, "Unlimited Push Messages");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(89, "li", 16);
      i019.\u0275\u0275element(90, "i", 17);
      i019.\u0275\u0275elementStart(91, "span", 18);
      i019.\u0275\u0275text(92, "50 Support Ticket");
      i019.\u0275\u0275elementEnd()();
      i019.\u0275\u0275elementStart(93, "li", 16);
      i019.\u0275\u0275element(94, "i", 17);
      i019.\u0275\u0275elementStart(95, "span", 18);
      i019.\u0275\u0275text(96, "Free Shipping");
      i019.\u0275\u0275elementEnd()()()()()()();
    }
  }, dependencies: [DividerModule, i115.Divider, i211.Bind, ButtonModule6, i38.ButtonDirective, i38.Button, i38.ButtonLabel, i38.ButtonIcon, i44.Header, i44.Footer, i44.PrimeTemplate, RippleModule5, i53.Ripple], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i019.\u0275setClassMetadata(PricingWidget, [{
    type: Component17,
    args: [{
      selector: "pricing-widget",
      imports: [DividerModule, ButtonModule6, RippleModule5],
      template: `
        <div id="pricing" class="py-6 px-6 lg:px-20 my-2 md:my-6">
            <div class="text-center mb-6">
                <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Matchless Pricing</div>
                <span class="text-muted-color text-2xl">Amet consectetur adipiscing elit...</span>
            </div>

            <div class="grid grid-cols-12 gap-4 justify-between mt-20 md:mt-0">
                <div class="col-span-12 lg:col-span-4 p-0 md:p-4">
                    <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Free</div>
                        <img src="https://primefaces.org/cdn/templates/sakai/landing/free.svg" class="w-10/12 mx-auto" alt="free" />
                        <div class="my-8 flex flex-col items-center gap-4">
                            <div class="flex items-center">
                                <span class="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">$0</span>
                                <span class="text-surface-600 dark:text-surface-200">per month</span>
                            </div>
                            <button pButton pRipple label="Get Started" class="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></button>
                        </div>
                        <p-divider class="w-full bg-surface-200"></p-divider>
                        <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Responsive Layout</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Unlimited Push Messages</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">50 Support Ticket</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Free Shipping</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                    <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Startup</div>
                        <img src="https://primefaces.org/cdn/templates/sakai/landing/startup.svg" class="w-10/12 mx-auto" alt="startup" />
                        <div class="my-8 flex flex-col items-center gap-4">
                            <div class="flex items-center">
                                <span class="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">$1</span>
                                <span class="text-surface-600 dark:text-surface-200">per month</span>
                            </div>
                            <button pButton pRipple label="Get Started" class="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></button>
                        </div>
                        <p-divider class="w-full bg-surface-200"></p-divider>
                        <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Responsive Layout</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Unlimited Push Messages</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">50 Support Ticket</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Free Shipping</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                    <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Enterprise</div>
                        <img src="https://primefaces.org/cdn/templates/sakai/landing/enterprise.svg" class="w-10/12 mx-auto" alt="enterprise" />
                        <div class="my-8 flex flex-col items-center gap-4">
                            <div class="flex items-center">
                                <span class="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">$5</span>
                                <span class="text-surface-600 dark:text-surface-200">per month</span>
                            </div>
                            <button pButton pRipple label="Try Free" class="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></button>
                        </div>
                        <p-divider class="w-full bg-surface-200"></p-divider>
                        <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Responsive Layout</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Unlimited Push Messages</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">50 Support Ticket</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Free Shipping</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i019.\u0275setClassDebugInfo(PricingWidget, { className: "PricingWidget", filePath: "src/app/pages/landing/components/pricingwidget.ts", lineNumber: 119 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Flanding%2Fcomponents%2Fpricingwidget.ts%40PricingWidget";
  function PricingWidget_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i019.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i019.\u0275\u0275replaceMetadata(PricingWidget, m.default, [i019, i115, i211, i38, i44, i53], [DividerModule, ButtonModule6, RippleModule5, Component17], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && PricingWidget_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && PricingWidget_HmrLoad(d.timestamp)));
})();

// src/app/pages/landing/components/footerwidget.ts
import { Component as Component18 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { RouterModule as RouterModule7 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
import * as i020 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i116 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
var FooterWidget = class _FooterWidget {
  router;
  constructor(router) {
    this.router = router;
  }
  static \u0275fac = function FooterWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterWidget)(i020.\u0275\u0275directiveInject(i116.Router));
  };
  static \u0275cmp = /* @__PURE__ */ i020.\u0275\u0275defineComponent({ type: _FooterWidget, selectors: [["footer-widget"]], decls: 57, vars: 0, consts: [[1, "py-12", "px-12", "mx-0", "mt-20", "lg:mx-20"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "md:col-span-2"], [1, "flex", "flex-wrap", "items-center", "justify-center", "md:justify-start", "md:mb-0", "mb-6", "cursor-pointer", 3, "click"], ["viewBox", "0 0 54 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "h-14", "mr-2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z", "fill", "var(--primary-color)"], ["id", "mask0_1413_1551", "maskUnits", "userSpaceOnUse", "x", "0", "y", "8", "width", "54", "height", "11", 2, "mask-type", "alpha"], ["d", "M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z", "fill", "var(--primary-color)"], ["mask", "url(#mask0_1413_1551)"], ["d", "M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z", "fill", "var(--primary-color)"], [1, "font-medium", "text-3xl", "text-surface-900", "dark:text-surface-0"], [1, "col-span-12", "md:col-span-10"], [1, "grid", "grid-cols-12", "gap-8", "text-center", "md:text-left"], [1, "col-span-12", "md:col-span-3"], [1, "font-medium", "text-2xl", "leading-normal", "mb-6", "text-surface-900", "dark:text-surface-0"], [1, "leading-normal", "text-xl", "block", "cursor-pointer", "mb-2", "text-surface-700", "dark:text-surface-100"], [1, "leading-normal", "text-xl", "block", "cursor-pointer", "text-surface-700", "dark:text-surface-100"], [1, "leading-normal", "text-xl", "flex", "items-center", "cursor-pointer", "mb-2", "text-surface-700", "dark:text-surface-100"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/new-badge.svg", "alt", "badge", 1, "ml-2"]], template: function FooterWidget_Template(rf, ctx) {
    if (rf & 1) {
      i020.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      i020.\u0275\u0275listener("click", function FooterWidget_Template_a_click_3_listener() {
        return ctx.router.navigate(["/pages/landing"], { fragment: "home" });
      });
      i020.\u0275\u0275namespaceSVG();
      i020.\u0275\u0275elementStart(4, "svg", 4);
      i020.\u0275\u0275element(5, "path", 5);
      i020.\u0275\u0275elementStart(6, "mask", 6);
      i020.\u0275\u0275element(7, "path", 7);
      i020.\u0275\u0275elementEnd();
      i020.\u0275\u0275elementStart(8, "g", 8);
      i020.\u0275\u0275element(9, "path", 9);
      i020.\u0275\u0275elementEnd()();
      i020.\u0275\u0275namespaceHTML();
      i020.\u0275\u0275elementStart(10, "h4", 10);
      i020.\u0275\u0275text(11, "SAKAI");
      i020.\u0275\u0275elementEnd()()();
      i020.\u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "h4", 14);
      i020.\u0275\u0275text(16, "Company");
      i020.\u0275\u0275elementEnd();
      i020.\u0275\u0275elementStart(17, "a", 15);
      i020.\u0275\u0275text(18, "About Us");
      i020.\u0275\u0275elementEnd();
      i020.\u0275\u0275elementStart(19, "a", 15);
      i020.\u0275\u0275text(20, "News");
      i020.\u0275\u0275elementEnd();
      i020.\u0275\u0275elementStart(21, "a", 15);
      i020.\u0275\u0275text(22, "Investor Relations");
      i020.\u0275\u0275elementEnd();
      i020.\u0275\u0275elementStart(23, "a", 15);
      i020.\u0275\u0275text(24, "Careers");
      i020.\u0275\u0275elementEnd();
      i020.\u0275\u0275elementStart(25, "a", 16);
      i020.\u0275\u0275text(26, "Media Kit");
      i020.\u0275\u0275elementEnd()();
      i020.\u0275\u0275elementStart(27, "div", 13)(28, "h4", 14);
      i020.\u0275\u0275text(29, "Resources");
      i020.\u0275\u0275elementEnd();
      i020.\u0275\u0275elementStart(30, "a", 15);
      i020.\u0275\u0275text(31, "Get Started");
      i020.\u0275\u0275elementEnd();
      i020.\u0275\u0275elementStart(32, "a", 15);
      i020.\u0275\u0275text(33, "Learn");
      i020.\u0275\u0275elementEnd();
      i020.\u0275\u0275elementStart(34, "a", 16);
      i020.\u0275\u0275text(35, "Case Studies");
      i020.\u0275\u0275elementEnd()();
      i020.\u0275\u0275elementStart(36, "div", 13)(37, "h4", 14);
      i020.\u0275\u0275text(38, "Community");
      i020.\u0275\u0275elementEnd();
      i020.\u0275\u0275elementStart(39, "a", 15);
      i020.\u0275\u0275text(40, "Discord");
      i020.\u0275\u0275elementEnd();
      i020.\u0275\u0275elementStart(41, "a", 17);
      i020.\u0275\u0275text(42, "Events");
      i020.\u0275\u0275element(43, "img", 18);
      i020.\u0275\u0275elementEnd();
      i020.\u0275\u0275elementStart(44, "a", 15);
      i020.\u0275\u0275text(45, "FAQ");
      i020.\u0275\u0275elementEnd();
      i020.\u0275\u0275elementStart(46, "a", 16);
      i020.\u0275\u0275text(47, "Blog");
      i020.\u0275\u0275elementEnd()();
      i020.\u0275\u0275elementStart(48, "div", 13)(49, "h4", 14);
      i020.\u0275\u0275text(50, "Legal");
      i020.\u0275\u0275elementEnd();
      i020.\u0275\u0275elementStart(51, "a", 15);
      i020.\u0275\u0275text(52, "Brand Policy");
      i020.\u0275\u0275elementEnd();
      i020.\u0275\u0275elementStart(53, "a", 15);
      i020.\u0275\u0275text(54, "Privacy Policy");
      i020.\u0275\u0275elementEnd();
      i020.\u0275\u0275elementStart(55, "a", 16);
      i020.\u0275\u0275text(56, "Terms of Service");
      i020.\u0275\u0275elementEnd()()()()()();
    }
  }, dependencies: [RouterModule7, i116.RouterOutlet, i116.RouterLink, i116.RouterLinkActive, i116.\u0275EmptyOutletComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i020.\u0275setClassMetadata(FooterWidget, [{
    type: Component18,
    args: [{
      selector: "footer-widget",
      imports: [RouterModule7],
      template: `
        <div class="py-12 px-12 mx-0 mt-20 lg:mx-20">
            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12 md:col-span-2">
                    <a (click)="router.navigate(['/pages/landing'], { fragment: 'home' })" class="flex flex-wrap items-center justify-center md:justify-start md:mb-0 mb-6 cursor-pointer">
                        <svg viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-14 mr-2">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z"
                                fill="var(--primary-color)"
                            />
                            <mask id="mask0_1413_1551" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="8" width="54" height="11">
                                <path d="M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z" fill="var(--primary-color)" />
                            </mask>
                            <g mask="url(#mask0_1413_1551)">
                                <path
                                    d="M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z"
                                    fill="var(--primary-color)"
                                />
                            </g>
                        </svg>
                        <h4 class="font-medium text-3xl text-surface-900 dark:text-surface-0">SAKAI</h4>
                    </a>
                </div>

                <div class="col-span-12 md:col-span-10">
                    <div class="grid grid-cols-12 gap-8 text-center md:text-left">
                        <div class="col-span-12 md:col-span-3">
                            <h4 class="font-medium text-2xl leading-normal mb-6 text-surface-900 dark:text-surface-0">Company</h4>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">About Us</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">News</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Investor Relations</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Careers</a>
                            <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Media Kit</a>
                        </div>

                        <div class="col-span-12 md:col-span-3">
                            <h4 class="font-medium text-2xl leading-normal mb-6 text-surface-900 dark:text-surface-0">Resources</h4>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Get Started</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Learn</a>
                            <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Case Studies</a>
                        </div>

                        <div class="col-span-12 md:col-span-3">
                            <h4 class="font-medium text-2xl leading-normal mb-6 text-surface-900 dark:text-surface-0">Community</h4>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Discord</a>
                            <a class="leading-normal text-xl flex items-center cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Events<img src="https://primefaces.org/cdn/templates/sakai/landing/new-badge.svg" alt="badge" class="ml-2" /></a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">FAQ</a>
                            <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Blog</a>
                        </div>

                        <div class="col-span-12 md:col-span-3">
                            <h4 class="font-medium text-2xl leading-normal mb-6 text-surface-900 dark:text-surface-0">Legal</h4>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Brand Policy</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Privacy Policy</a>
                            <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    }]
  }], () => [{ type: i116.Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i020.\u0275setClassDebugInfo(FooterWidget, { className: "FooterWidget", filePath: "src/app/pages/landing/components/footerwidget.ts", lineNumber: 71 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Flanding%2Fcomponents%2Ffooterwidget.ts%40FooterWidget";
  function FooterWidget_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i020.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i020.\u0275\u0275replaceMetadata(FooterWidget, m.default, [i020, i116], [RouterModule7, Component18], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && FooterWidget_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && FooterWidget_HmrLoad(d.timestamp)));
})();

// src/app/pages/landing/landing.ts
import * as i021 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i117 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
import * as i212 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_ripple.js?v=ae3c7c69";
import * as i39 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_styleclass.js?v=ae3c7c69";
import * as i45 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import * as i54 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_api.js?v=ae3c7c69";
import * as i62 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_divider.js?v=ae3c7c69";
import * as i7 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_bind.js?v=ae3c7c69";
var Landing = class _Landing {
  static \u0275fac = function Landing_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Landing)();
  };
  static \u0275cmp = /* @__PURE__ */ i021.\u0275\u0275defineComponent({ type: _Landing, selectors: [["app-landing"]], decls: 8, vars: 0, consts: [[1, "bg-surface-0", "dark:bg-surface-900"], ["id", "home", 1, "landing-wrapper", "overflow-hidden"], [1, "py-6", "px-6", "mx-0", "md:mx-12", "lg:mx-20", "lg:px-20", "flex", "items-center", "justify-between", "relative", "lg:static"]], template: function Landing_Template(rf, ctx) {
    if (rf & 1) {
      i021.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      i021.\u0275\u0275element(2, "topbar-widget", 2)(3, "hero-widget")(4, "features-widget")(5, "highlights-widget")(6, "pricing-widget")(7, "footer-widget");
      i021.\u0275\u0275elementEnd()();
    }
  }, dependencies: [RouterModule8, i117.RouterOutlet, i117.RouterLink, i117.RouterLinkActive, i117.\u0275EmptyOutletComponent, TopbarWidget, HeroWidget, FeaturesWidget, HighlightsWidget, PricingWidget, FooterWidget, RippleModule6, i212.Ripple, StyleClassModule3, i39.StyleClass, ButtonModule7, i45.ButtonDirective, i45.Button, i45.ButtonLabel, i45.ButtonIcon, i54.Header, i54.Footer, i54.PrimeTemplate, DividerModule2, i62.Divider, i7.Bind], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i021.\u0275setClassMetadata(Landing, [{
    type: Component19,
    args: [{
      selector: "app-landing",
      standalone: true,
      imports: [RouterModule8, TopbarWidget, HeroWidget, FeaturesWidget, HighlightsWidget, PricingWidget, FooterWidget, RippleModule6, StyleClassModule3, ButtonModule7, DividerModule2],
      template: `
        <div class="bg-surface-0 dark:bg-surface-900">
            <div id="home" class="landing-wrapper overflow-hidden">
                <topbar-widget class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static" />
                <hero-widget />
                <features-widget />
                <highlights-widget />
                <pricing-widget />
                <footer-widget />
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i021.\u0275setClassDebugInfo(Landing, { className: "Landing", filePath: "src/app/pages/landing/landing.ts", lineNumber: 31 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Flanding%2Flanding.ts%40Landing";
  function Landing_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i021.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i021.\u0275\u0275replaceMetadata(Landing, m.default, [i021, i117, i212, i39, i45, i54, i62, i7], [RouterModule8, TopbarWidget, HeroWidget, FeaturesWidget, HighlightsWidget, PricingWidget, FooterWidget, RippleModule6, StyleClassModule3, ButtonModule7, DividerModule2, Component19], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && Landing_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && Landing_HmrLoad(d.timestamp)));
})();

// src/app/pages/notfound/notfound.ts
import { Component as Component20 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { RouterModule as RouterModule9 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
import { ButtonModule as ButtonModule8 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import * as i022 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i118 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
import * as i213 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import * as i310 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_api.js?v=ae3c7c69";
var Notfound = class _Notfound {
  static \u0275fac = function Notfound_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Notfound)();
  };
  static \u0275cmp = /* @__PURE__ */ i022.\u0275\u0275defineComponent({ type: _Notfound, selectors: [["app-notfound"]], decls: 42, vars: 0, consts: [[1, "flex", "items-center", "justify-center", "min-h-screen", "overflow-hidden"], [1, "flex", "flex-col", "items-center", "justify-center"], ["width", "54", "height", "40", "viewBox", "0 0 54 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mb-8", "w-32", "shrink-0"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z", "fill", "var(--primary-color)"], ["id", "mask0_1413_1551", "maskUnits", "userSpaceOnUse", "x", "0", "y", "8", "width", "54", "height", "11", 2, "mask-type", "alpha"], ["d", "M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z", "fill", "var(--primary-color)"], ["mask", "url(#mask0_1413_1551)"], ["d", "M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z", "fill", "var(--primary-color)"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, color-mix(in srgb, var(--primary-color), transparent 60%) 10%, var(--surface-ground) 30%)"], [1, "w-full", "bg-surface-0", "dark:bg-surface-900", "py-20", "px-8", "sm:px-20", "flex", "flex-col", "items-center", 2, "border-radius", "53px"], [1, "text-primary", "font-bold", "text-3xl"], [1, "text-surface-900", "dark:text-surface-0", "font-bold", "text-3xl", "lg:text-5xl", "mb-2"], [1, "text-surface-600", "dark:text-surface-200", "mb-8"], ["routerLink", "/", 1, "w-full", "flex", "items-center", "py-8", "border-surface-300", "dark:border-surface-500", "border-b"], [1, "flex", "justify-center", "items-center", "border-2", "border-primary", "text-primary", "rounded-border", 2, "height", "3.5rem", "width", "3.5rem"], [1, "pi", "pi-fw", "pi-table", "text-2xl!"], [1, "ml-6", "flex", "flex-col"], [1, "text-surface-900", "dark:text-surface-0", "lg:text-xl", "font-medium", "mb-0", "block"], [1, "text-surface-600", "dark:text-surface-200", "lg:text-xl"], [1, "pi", "pi-fw", "pi-question-circle", "text-2xl!"], [1, "text-surface-900", "dark:text-surface-0", "lg:text-xl", "font-medium", "mb-0"], ["routerLink", "/", 1, "w-full", "flex", "items-center", "mb-8", "py-8", "border-surface-300", "dark:border-surface-500", "border-b"], [1, "pi", "pi-fw", "pi-unlock", "text-2xl!"], ["label", "Go to Dashboard", "routerLink", "/"]], template: function Notfound_Template(rf, ctx) {
    if (rf & 1) {
      i022.\u0275\u0275element(0, "app-floating-configurator");
      i022.\u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
      i022.\u0275\u0275namespaceSVG();
      i022.\u0275\u0275elementStart(3, "svg", 2);
      i022.\u0275\u0275element(4, "path", 3);
      i022.\u0275\u0275elementStart(5, "mask", 4);
      i022.\u0275\u0275element(6, "path", 5);
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(7, "g", 6);
      i022.\u0275\u0275element(8, "path", 7);
      i022.\u0275\u0275elementEnd()();
      i022.\u0275\u0275namespaceHTML();
      i022.\u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "span", 10);
      i022.\u0275\u0275text(12, "404");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(13, "h1", 11);
      i022.\u0275\u0275text(14, "Not Found");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(15, "div", 12);
      i022.\u0275\u0275text(16, "Requested resource is not available.");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(17, "a", 13)(18, "span", 14);
      i022.\u0275\u0275element(19, "i", 15);
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(20, "span", 16)(21, "span", 17);
      i022.\u0275\u0275text(22, "Frequently Asked Questions");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(23, "span", 18);
      i022.\u0275\u0275text(24, "Ultricies mi quis hendrerit dolor.");
      i022.\u0275\u0275elementEnd()()();
      i022.\u0275\u0275elementStart(25, "a", 13)(26, "span", 14);
      i022.\u0275\u0275element(27, "i", 19);
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(28, "span", 16)(29, "span", 20);
      i022.\u0275\u0275text(30, "Solution Center");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(31, "span", 18);
      i022.\u0275\u0275text(32, "Phasellus faucibus scelerisque eleifend.");
      i022.\u0275\u0275elementEnd()()();
      i022.\u0275\u0275elementStart(33, "a", 21)(34, "span", 14);
      i022.\u0275\u0275element(35, "i", 22);
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(36, "span", 16)(37, "span", 20);
      i022.\u0275\u0275text(38, "Permission Manager");
      i022.\u0275\u0275elementEnd();
      i022.\u0275\u0275elementStart(39, "span", 18);
      i022.\u0275\u0275text(40, "Accumsan in nisl nisi scelerisque");
      i022.\u0275\u0275elementEnd()()();
      i022.\u0275\u0275element(41, "p-button", 23);
      i022.\u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterModule9, i118.RouterOutlet, i118.RouterLink, i118.RouterLinkActive, i118.\u0275EmptyOutletComponent, AppFloatingConfigurator, ButtonModule8, i213.ButtonDirective, i213.Button, i213.ButtonLabel, i213.ButtonIcon, i310.Header, i310.Footer, i310.PrimeTemplate], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i022.\u0275setClassMetadata(Notfound, [{
    type: Component20,
    args: [{
      selector: "app-notfound",
      standalone: true,
      imports: [RouterModule9, AppFloatingConfigurator, ButtonModule8],
      template: ` <app-floating-configurator />
        <div class="flex items-center justify-center min-h-screen overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <svg width="54" height="40" viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-8 w-32 shrink-0">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z"
                        fill="var(--primary-color)"
                    />
                    <mask id="mask0_1413_1551" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="8" width="54" height="11">
                        <path d="M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z" fill="var(--primary-color)" />
                    </mask>
                    <g mask="url(#mask0_1413_1551)">
                        <path
                            d="M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z"
                            fill="var(--primary-color)"
                        />
                    </g>
                </svg>
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, color-mix(in srgb, var(--primary-color), transparent 60%) 10%, var(--surface-ground) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20 flex flex-col items-center" style="border-radius: 53px">
                        <span class="text-primary font-bold text-3xl">404</span>
                        <h1 class="text-surface-900 dark:text-surface-0 font-bold text-3xl lg:text-5xl mb-2">Not Found</h1>
                        <div class="text-surface-600 dark:text-surface-200 mb-8">Requested resource is not available.</div>
                        <a routerLink="/" class="w-full flex items-center py-8 border-surface-300 dark:border-surface-500 border-b">
                            <span class="flex justify-center items-center border-2 border-primary text-primary rounded-border" style="height: 3.5rem; width: 3.5rem">
                                <i class="pi pi-fw pi-table text-2xl!"></i>
                            </span>
                            <span class="ml-6 flex flex-col">
                                <span class="text-surface-900 dark:text-surface-0 lg:text-xl font-medium mb-0 block">Frequently Asked Questions</span>
                                <span class="text-surface-600 dark:text-surface-200 lg:text-xl">Ultricies mi quis hendrerit dolor.</span>
                            </span>
                        </a>
                        <a routerLink="/" class="w-full flex items-center py-8 border-surface-300 dark:border-surface-500 border-b">
                            <span class="flex justify-center items-center border-2 border-primary text-primary rounded-border" style="height: 3.5rem; width: 3.5rem">
                                <i class="pi pi-fw pi-question-circle text-2xl!"></i>
                            </span>
                            <span class="ml-6 flex flex-col">
                                <span class="text-surface-900 dark:text-surface-0 lg:text-xl font-medium mb-0">Solution Center</span>
                                <span class="text-surface-600 dark:text-surface-200 lg:text-xl">Phasellus faucibus scelerisque eleifend.</span>
                            </span>
                        </a>
                        <a routerLink="/" class="w-full flex items-center mb-8 py-8 border-surface-300 dark:border-surface-500 border-b">
                            <span class="flex justify-center items-center border-2 border-primary text-primary rounded-border" style="height: 3.5rem; width: 3.5rem">
                                <i class="pi pi-fw pi-unlock text-2xl!"></i>
                            </span>
                            <span class="ml-6 flex flex-col">
                                <span class="text-surface-900 dark:text-surface-0 lg:text-xl font-medium mb-0">Permission Manager</span>
                                <span class="text-surface-600 dark:text-surface-200 lg:text-xl">Accumsan in nisl nisi scelerisque</span>
                            </span>
                        </a>
                        <p-button label="Go to Dashboard" routerLink="/" />
                    </div>
                </div>
            </div>
        </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i022.\u0275setClassDebugInfo(Notfound, { className: "Notfound", filePath: "src/app/pages/notfound/notfound.ts", lineNumber: 68 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fnotfound%2Fnotfound.ts%40Notfound";
  function Notfound_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i022.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i022.\u0275\u0275replaceMetadata(Notfound, m.default, [i022, i118, i213, i310], [RouterModule9, AppFloatingConfigurator, ButtonModule8, Component20], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && Notfound_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && Notfound_HmrLoad(d.timestamp)));
})();

// src/app/usuario/usuario-list/usuario-list.component.ts
import { CommonModule as CommonModule10 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
import { Component as Component22, afterNextRender as afterNextRender2, inject as inject10, signal as signal5, ViewChild } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { FormsModule as FormsModule2 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_forms.js?v=ae3c7c69";
import { DatePickerModule as DatePickerModule2 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_datepicker.js?v=ae3c7c69";
import { TableModule as TableModule3 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_table.js?v=ae3c7c69";
import { ButtonModule as ButtonModule10 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import { ConfirmDialogModule as ConfirmDialogModule2 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_confirmdialog.js?v=ae3c7c69";
import { ConfirmationService } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_api.js?v=ae3c7c69";

// src/app/usuario/usuario/usuario.component.ts
import { CommonModule as CommonModule9 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
import { Component as Component21, EventEmitter, inject as inject9, Output, signal as signal4 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { FormsModule } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_forms.js?v=ae3c7c69";
import { DatePickerModule } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_datepicker.js?v=ae3c7c69";
import { TableModule as TableModule2 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_table.js?v=ae3c7c69";
import { ButtonModule as ButtonModule9 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import { ConfirmDialogModule } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_confirmdialog.js?v=ae3c7c69";
import { DialogModule } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_dialog.js?v=ae3c7c69";
import { InputTextModule } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_inputtext.js?v=ae3c7c69";

// src/app/usuario/shared/usuario.model.ts
var UsuarioModel = class {
  id;
  name;
  email;
  password;
  created_at;
  updated_at;
};

// src/app/usuario/usuario/usuario.component.ts
import * as i023 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i119 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
import * as i214 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_datepicker.js?v=ae3c7c69";
import * as i311 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_api.js?v=ae3c7c69";
import * as i46 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_forms.js?v=ae3c7c69";
import * as i55 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_table.js?v=ae3c7c69";
import * as i63 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_scroller.js?v=ae3c7c69";
import * as i72 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import * as i8 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_confirmdialog.js?v=ae3c7c69";
import * as i9 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_dialog.js?v=ae3c7c69";
import * as i10 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_inputtext.js?v=ae3c7c69";
var _c03 = () => ({ width: "25rem" });
var UsuarioComponent = class _UsuarioComponent {
  http = inject9(BasicService);
  visible = signal4(false, ...ngDevMode ? [{ debugName: "visible" }] : (
    /* istanbul ignore next */
    []
  ));
  entity = signal4(new UsuarioModel(), ...ngDevMode ? [{ debugName: "entity" }] : (
    /* istanbul ignore next */
    []
  ));
  messageEvent = new EventEmitter();
  load(entityId) {
    this.onDialogVisibleChange(true);
  }
  saveMethod() {
    this.http.basePost("usuariocontroller/save", this.entity()).subscribe((response) => {
      console.warn("Save response", response);
      this.closeDialog();
      this.messageEvent.emit();
    }, (error) => console.error(error));
  }
  onDialogVisibleChange(value) {
    this.visible.set(value);
  }
  closeDialog() {
    this.visible.set(false);
  }
  static \u0275fac = function UsuarioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsuarioComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i023.\u0275\u0275defineComponent({ type: _UsuarioComponent, selectors: [["app-usuario"]], outputs: { messageEvent: "messageEvent" }, features: [i023.\u0275\u0275ProvidersFeature([
    BasicService
  ])], decls: 17, vars: 8, consts: [[1, "card", "flex", "justify-center"], ["header", "Usuario", 3, "visibleChange", "modal", "visible"], [1, "flex", "items-center", "gap-4", "mb-4"], ["for", "username", 1, "font-semibold", "w-24"], ["pInputText", "", "id", "username", "autocomplete", "off", 1, "flex-auto", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-4", "mb-8"], ["for", "email", 1, "font-semibold", "w-24"], ["pInputText", "", "id", "email", "autocomplete", "off", 1, "flex-auto", 3, "ngModelChange", "ngModel"], ["for", "pwd", 1, "font-semibold", "w-24"], ["pInputText", "", "id", "pwd", "autocomplete", "off", 1, "flex-auto", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "gap-2"], ["label", "Cancel", "severity", "secondary", 3, "click"], ["label", "Save", 3, "click"]], template: function UsuarioComponent_Template(rf, ctx) {
    if (rf & 1) {
      i023.\u0275\u0275elementStart(0, "div", 0)(1, "p-dialog", 1);
      i023.\u0275\u0275twoWayListener("visibleChange", function UsuarioComponent_Template_p_dialog_visibleChange_1_listener($event) {
        i023.\u0275\u0275twoWayBindingSet(ctx.visible, $event) || (ctx.visible = $event);
        return $event;
      });
      i023.\u0275\u0275elementStart(2, "div", 2)(3, "label", 3);
      i023.\u0275\u0275text(4, "Username");
      i023.\u0275\u0275elementEnd();
      i023.\u0275\u0275elementStart(5, "input", 4);
      i023.\u0275\u0275twoWayListener("ngModelChange", function UsuarioComponent_Template_input_ngModelChange_5_listener($event) {
        i023.\u0275\u0275twoWayBindingSet(ctx.entity().name, $event) || (ctx.entity().name = $event);
        return $event;
      });
      i023.\u0275\u0275elementEnd()();
      i023.\u0275\u0275elementStart(6, "div", 5)(7, "label", 6);
      i023.\u0275\u0275text(8, "Email");
      i023.\u0275\u0275elementEnd();
      i023.\u0275\u0275elementStart(9, "input", 7);
      i023.\u0275\u0275twoWayListener("ngModelChange", function UsuarioComponent_Template_input_ngModelChange_9_listener($event) {
        i023.\u0275\u0275twoWayBindingSet(ctx.entity().email, $event) || (ctx.entity().email = $event);
        return $event;
      });
      i023.\u0275\u0275elementEnd()();
      i023.\u0275\u0275elementStart(10, "div", 5)(11, "label", 8);
      i023.\u0275\u0275text(12, "Password");
      i023.\u0275\u0275elementEnd();
      i023.\u0275\u0275elementStart(13, "input", 9);
      i023.\u0275\u0275twoWayListener("ngModelChange", function UsuarioComponent_Template_input_ngModelChange_13_listener($event) {
        i023.\u0275\u0275twoWayBindingSet(ctx.entity().password, $event) || (ctx.entity().password = $event);
        return $event;
      });
      i023.\u0275\u0275elementEnd()();
      i023.\u0275\u0275elementStart(14, "div", 10)(15, "p-button", 11);
      i023.\u0275\u0275listener("click", function UsuarioComponent_Template_p_button_click_15_listener() {
        return ctx.closeDialog();
      });
      i023.\u0275\u0275elementEnd();
      i023.\u0275\u0275elementStart(16, "p-button", 12);
      i023.\u0275\u0275listener("click", function UsuarioComponent_Template_p_button_click_16_listener() {
        return ctx.saveMethod();
      });
      i023.\u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      i023.\u0275\u0275advance();
      i023.\u0275\u0275styleMap(i023.\u0275\u0275pureFunction0(7, _c03));
      i023.\u0275\u0275property("modal", true);
      i023.\u0275\u0275twoWayProperty("visible", ctx.visible);
      i023.\u0275\u0275advance(4);
      i023.\u0275\u0275twoWayProperty("ngModel", ctx.entity().name);
      i023.\u0275\u0275advance(4);
      i023.\u0275\u0275twoWayProperty("ngModel", ctx.entity().email);
      i023.\u0275\u0275advance(4);
      i023.\u0275\u0275twoWayProperty("ngModel", ctx.entity().password);
    }
  }, dependencies: [
    CommonModule9,
    i119.NgClass,
    i119.NgComponentOutlet,
    i119.NgForOf,
    i119.NgIf,
    i119.NgTemplateOutlet,
    i119.NgStyle,
    i119.NgSwitch,
    i119.NgSwitchCase,
    i119.NgSwitchDefault,
    i119.NgPlural,
    i119.NgPluralCase,
    DatePickerModule,
    i214.DatePicker,
    i311.Header,
    i311.Footer,
    i311.PrimeTemplate,
    FormsModule,
    i46.\u0275NgNoValidate,
    i46.NgSelectOption,
    i46.\u0275NgSelectMultipleOption,
    i46.DefaultValueAccessor,
    i46.NumberValueAccessor,
    i46.RangeValueAccessor,
    i46.CheckboxControlValueAccessor,
    i46.SelectControlValueAccessor,
    i46.SelectMultipleControlValueAccessor,
    i46.RadioControlValueAccessor,
    i46.NgControlStatus,
    i46.NgControlStatusGroup,
    i46.RequiredValidator,
    i46.MinLengthValidator,
    i46.MaxLengthValidator,
    i46.PatternValidator,
    i46.CheckboxRequiredValidator,
    i46.EmailValidator,
    i46.MinValidator,
    i46.MaxValidator,
    i46.NgModel,
    i46.NgModelGroup,
    i46.NgForm,
    TableModule2,
    i55.Table,
    i55.SortableColumn,
    i55.FrozenColumn,
    i55.RowGroupHeader,
    i55.SelectableRow,
    i55.RowToggler,
    i55.ContextMenuRow,
    i55.ResizableColumn,
    i55.ReorderableColumn,
    i55.EditableColumn,
    i55.CellEditor,
    i55.SortIcon,
    i55.TableRadioButton,
    i55.TableCheckbox,
    i55.TableHeaderCheckbox,
    i55.ReorderableRowHandle,
    i55.ReorderableRow,
    i55.SelectableRowDblClick,
    i55.EditableRow,
    i55.InitEditableRow,
    i55.SaveEditableRow,
    i55.CancelEditableRow,
    i55.ColumnFilter,
    i55.ColumnFilterFormElement,
    i63.Scroller,
    ButtonModule9,
    i72.ButtonDirective,
    i72.Button,
    i72.ButtonLabel,
    i72.ButtonIcon,
    ConfirmDialogModule,
    i8.ConfirmDialog,
    // ToastModule
    DialogModule,
    i9.Dialog,
    InputTextModule,
    i10.InputText,
    i119.AsyncPipe,
    i119.UpperCasePipe,
    i119.LowerCasePipe,
    i119.JsonPipe,
    i119.SlicePipe,
    i119.DecimalPipe,
    i119.PercentPipe,
    i119.TitleCasePipe,
    i119.CurrencyPipe,
    i119.DatePipe,
    i119.I18nPluralPipe,
    i119.I18nSelectPipe,
    i119.KeyValuePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i023.\u0275setClassMetadata(UsuarioComponent, [{
    type: Component21,
    args: [{ selector: "app-usuario", standalone: true, imports: [
      CommonModule9,
      DatePickerModule,
      FormsModule,
      TableModule2,
      ButtonModule9,
      ConfirmDialogModule,
      // ToastModule
      DialogModule,
      InputTextModule
    ], providers: [
      BasicService
    ], template: `<div class="card flex justify-center">\r
    <p-dialog header="Usuario" [modal]="true" [(visible)]="visible" [style]="{ width: '25rem' }">\r
        <div class="flex items-center gap-4 mb-4">\r
            <label for="username" class="font-semibold w-24">Username</label>\r
            <input pInputText id="username" class="flex-auto" autocomplete="off" [(ngModel)]="entity().name"/>\r
        </div>\r
        <div class="flex items-center gap-4 mb-8">\r
            <label for="email" class="font-semibold w-24">Email</label>\r
            <input pInputText id="email" class="flex-auto" autocomplete="off" [(ngModel)]="entity().email" />\r
        </div>\r
        <div class="flex items-center gap-4 mb-8">\r
            <label for="pwd" class="font-semibold w-24">Password</label>\r
            <input pInputText id="pwd" class="flex-auto" autocomplete="off" [(ngModel)]="entity().password"/>\r
        </div>\r
        <div class="flex justify-end gap-2">\r
            <p-button label="Cancel" severity="secondary" (click)="closeDialog()" />\r
            <p-button label="Save" (click)="saveMethod()" />\r
        </div>\r
    </p-dialog>\r
</div>` }]
  }], null, { messageEvent: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i023.\u0275setClassDebugInfo(UsuarioComponent, { className: "UsuarioComponent", filePath: "src/app/usuario/usuario/usuario.component.ts", lineNumber: 32 });
})();
(() => {
  const id = "src%2Fapp%2Fusuario%2Fusuario%2Fusuario.component.ts%40UsuarioComponent";
  function UsuarioComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i023.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i023.\u0275\u0275replaceMetadata(UsuarioComponent, m.default, [i023, i119, i214, i311, i46, i55, i63, i72, i8, i9, i10], [BasicService, CommonModule9, DatePickerModule, FormsModule, TableModule2, ButtonModule9, ConfirmDialogModule, DialogModule, InputTextModule, Component21, Output], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && UsuarioComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && UsuarioComponent_HmrLoad(d.timestamp)));
})();

// src/app/usuario/usuario-list/usuario-list.component.ts
import * as i024 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i120 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_common.js?v=ae3c7c69";
import * as i215 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_datepicker.js?v=ae3c7c69";
import * as i312 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_api.js?v=ae3c7c69";
import * as i47 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_forms.js?v=ae3c7c69";
import * as i56 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_table.js?v=ae3c7c69";
import * as i64 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_scroller.js?v=ae3c7c69";
import * as i73 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_button.js?v=ae3c7c69";
import * as i82 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/primeng_confirmdialog.js?v=ae3c7c69";
var _c04 = () => ({ "min-width": "50rem" });
function UsuarioListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    i024.\u0275\u0275elementStart(0, "tr")(1, "th");
    i024.\u0275\u0275text(2, "Nombre");
    i024.\u0275\u0275elementEnd();
    i024.\u0275\u0275elementStart(3, "th");
    i024.\u0275\u0275text(4, "Email");
    i024.\u0275\u0275elementEnd();
    i024.\u0275\u0275elementStart(5, "th");
    i024.\u0275\u0275text(6, "Fecha de Actualizacion");
    i024.\u0275\u0275elementEnd();
    i024.\u0275\u0275elementStart(7, "th");
    i024.\u0275\u0275text(8, "Acciones");
    i024.\u0275\u0275elementEnd()();
  }
}
function UsuarioListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i024.\u0275\u0275getCurrentView();
    i024.\u0275\u0275elementStart(0, "tr")(1, "td");
    i024.\u0275\u0275text(2);
    i024.\u0275\u0275elementEnd();
    i024.\u0275\u0275elementStart(3, "td");
    i024.\u0275\u0275text(4);
    i024.\u0275\u0275elementEnd();
    i024.\u0275\u0275elementStart(5, "td");
    i024.\u0275\u0275text(6);
    i024.\u0275\u0275pipe(7, "date");
    i024.\u0275\u0275elementEnd();
    i024.\u0275\u0275elementStart(8, "td")(9, "button", 9);
    i024.\u0275\u0275listener("click", function UsuarioListComponent_ng_template_9_Template_button_click_9_listener() {
      const item_r2 = i024.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i024.\u0275\u0275nextContext();
      return i024.\u0275\u0275resetView(ctx_r2.updateUsuario(item_r2));
    });
    i024.\u0275\u0275elementEnd();
    i024.\u0275\u0275elementStart(10, "button", 10);
    i024.\u0275\u0275listener("click", function UsuarioListComponent_ng_template_9_Template_button_click_10_listener($event) {
      const item_r2 = i024.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i024.\u0275\u0275nextContext();
      return i024.\u0275\u0275resetView(ctx_r2.deleteUsuario(item_r2, $event));
    });
    i024.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i024.\u0275\u0275advance(2);
    i024.\u0275\u0275textInterpolate(item_r2.name);
    i024.\u0275\u0275advance(2);
    i024.\u0275\u0275textInterpolate(item_r2.email);
    i024.\u0275\u0275advance(2);
    i024.\u0275\u0275textInterpolate(i024.\u0275\u0275pipeBind2(7, 3, item_r2.updated_at, "MM/dd/yyyy"));
  }
}
var UsuarioListComponent = class _UsuarioListComponent {
  usuarioComponent;
  date = /* @__PURE__ */ new Date();
  // dataUsuarios: UsuarioModel[] = [];
  dataUsuarios = signal5([], ...ngDevMode ? [{ debugName: "dataUsuarios" }] : (
    /* istanbul ignore next */
    []
  ));
  // Services
  confirmationService = inject10(ConfirmationService);
  service = inject10(BasicService);
  constructor() {
    afterNextRender2(() => {
      this.loadUsuarios();
    });
  }
  ngOnInit() {
  }
  loadUsuarios() {
    this.service.basePost(`usuariocontroller/getall`, {}).subscribe((response) => {
      console.warn("Usuarios", response);
      this.dataUsuarios.set(response);
    }, (error) => console.error(error));
  }
  createUsuario() {
    this.usuarioComponent.load(0);
  }
  updateUsuario(data) {
    this.usuarioComponent.load(data.id);
  }
  deleteUsuario(data, event) {
    console.log("Delete usuario", data);
    this.confirmationService.confirm({
      target: event.target,
      message: `Esta seguro de eliminar este registro? ${data.name}`,
      header: "Eliminar Usuario!",
      icon: "pi pi-info-circle",
      rejectLabel: "Cancel",
      rejectButtonProps: {
        label: "Cancel",
        severity: "secondary",
        outlined: true
      },
      acceptButtonProps: {
        label: "Delete",
        severity: "danger"
      },
      accept: () => {
      },
      reject: () => {
      }
    });
  }
  static \u0275fac = function UsuarioListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsuarioListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i024.\u0275\u0275defineComponent({ type: _UsuarioListComponent, selectors: [["app-usuario-list"]], viewQuery: function UsuarioListComponent_Query(rf, ctx) {
    if (rf & 1) {
      i024.\u0275\u0275viewQuery(UsuarioComponent, 5);
    }
    if (rf & 2) {
      let _t;
      i024.\u0275\u0275queryRefresh(_t = i024.\u0275\u0275loadQuery()) && (ctx.usuarioComponent = _t.first);
    }
  }, features: [i024.\u0275\u0275ProvidersFeature([
    ConfirmationService,
    BasicService
  ])], decls: 13, vars: 3, consts: [["header", ""], ["body", ""], [1, "card"], [1, "card", "flex", "justify-center"], ["pButton", "", 3, "click"], ["pButtonIcon", "", 1, "pi", "pi-plus"], ["pButtonLabel", ""], [3, "value", "tableStyle"], [3, "messageEvent"], ["pButton", "", "type", "button", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-text", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-trash", "severity", "danger", 1, "p-button-rounded", "p-button-text", 3, "click"]], template: function UsuarioListComponent_Template(rf, ctx) {
    if (rf & 1) {
      i024.\u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "button", 4);
      i024.\u0275\u0275listener("click", function UsuarioListComponent_Template_button_click_2_listener() {
        return ctx.createUsuario();
      });
      i024.\u0275\u0275element(3, "i", 5);
      i024.\u0275\u0275elementStart(4, "span", 6);
      i024.\u0275\u0275text(5, "Nuevo");
      i024.\u0275\u0275elementEnd()()();
      i024.\u0275\u0275elementStart(6, "p-table", 7);
      i024.\u0275\u0275template(7, UsuarioListComponent_ng_template_7_Template, 9, 0, "ng-template", null, 0, i024.\u0275\u0275templateRefExtractor)(9, UsuarioListComponent_ng_template_9_Template, 11, 6, "ng-template", null, 1, i024.\u0275\u0275templateRefExtractor);
      i024.\u0275\u0275elementEnd();
      i024.\u0275\u0275element(11, "p-confirmdialog");
      i024.\u0275\u0275elementStart(12, "app-usuario", 8);
      i024.\u0275\u0275listener("messageEvent", function UsuarioListComponent_Template_app_usuario_messageEvent_12_listener() {
        return ctx.loadUsuarios();
      });
      i024.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i024.\u0275\u0275advance(6);
      i024.\u0275\u0275property("value", ctx.dataUsuarios())("tableStyle", i024.\u0275\u0275pureFunction0(2, _c04));
    }
  }, dependencies: [
    CommonModule10,
    i120.NgClass,
    i120.NgComponentOutlet,
    i120.NgForOf,
    i120.NgIf,
    i120.NgTemplateOutlet,
    i120.NgStyle,
    i120.NgSwitch,
    i120.NgSwitchCase,
    i120.NgSwitchDefault,
    i120.NgPlural,
    i120.NgPluralCase,
    DatePickerModule2,
    i215.DatePicker,
    i312.Header,
    i312.Footer,
    i312.PrimeTemplate,
    FormsModule2,
    i47.\u0275NgNoValidate,
    i47.NgSelectOption,
    i47.\u0275NgSelectMultipleOption,
    i47.DefaultValueAccessor,
    i47.NumberValueAccessor,
    i47.RangeValueAccessor,
    i47.CheckboxControlValueAccessor,
    i47.SelectControlValueAccessor,
    i47.SelectMultipleControlValueAccessor,
    i47.RadioControlValueAccessor,
    i47.NgControlStatus,
    i47.NgControlStatusGroup,
    i47.RequiredValidator,
    i47.MinLengthValidator,
    i47.MaxLengthValidator,
    i47.PatternValidator,
    i47.CheckboxRequiredValidator,
    i47.EmailValidator,
    i47.MinValidator,
    i47.MaxValidator,
    i47.NgModel,
    i47.NgModelGroup,
    i47.NgForm,
    TableModule3,
    i56.Table,
    i56.SortableColumn,
    i56.FrozenColumn,
    i56.RowGroupHeader,
    i56.SelectableRow,
    i56.RowToggler,
    i56.ContextMenuRow,
    i56.ResizableColumn,
    i56.ReorderableColumn,
    i56.EditableColumn,
    i56.CellEditor,
    i56.SortIcon,
    i56.TableRadioButton,
    i56.TableCheckbox,
    i56.TableHeaderCheckbox,
    i56.ReorderableRowHandle,
    i56.ReorderableRow,
    i56.SelectableRowDblClick,
    i56.EditableRow,
    i56.InitEditableRow,
    i56.SaveEditableRow,
    i56.CancelEditableRow,
    i56.ColumnFilter,
    i56.ColumnFilterFormElement,
    i64.Scroller,
    ButtonModule10,
    i73.ButtonDirective,
    i73.Button,
    i73.ButtonLabel,
    i73.ButtonIcon,
    ConfirmDialogModule2,
    i82.ConfirmDialog,
    // ToastModule
    UsuarioComponent,
    i120.AsyncPipe,
    i120.UpperCasePipe,
    i120.LowerCasePipe,
    i120.JsonPipe,
    i120.SlicePipe,
    i120.DecimalPipe,
    i120.PercentPipe,
    i120.TitleCasePipe,
    i120.CurrencyPipe,
    i120.DatePipe,
    i120.I18nPluralPipe,
    i120.I18nSelectPipe,
    i120.KeyValuePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i024.\u0275setClassMetadata(UsuarioListComponent, [{
    type: Component22,
    args: [{ selector: "app-usuario-list", standalone: true, imports: [
      CommonModule10,
      DatePickerModule2,
      FormsModule2,
      TableModule3,
      ButtonModule10,
      ConfirmDialogModule2,
      // ToastModule
      UsuarioComponent
    ], providers: [
      ConfirmationService,
      BasicService
    ], template: `<div class="card">\r
    <!-- <h1>Hola mundo</h1>\r
\r
    <div class="card flex justify-center">\r
        <p-datepicker\r
        [(ngModel)]="date"\r
        />\r
    </div> -->\r
    <div class="card flex justify-center">\r
        <button pButton (click)="createUsuario()">\r
            <i class="pi pi-plus" pButtonIcon></i>\r
            <span pButtonLabel>Nuevo</span>\r
        </button>\r
    </div>\r
    <p-table [value]="dataUsuarios()" [tableStyle]="{ 'min-width': '50rem' }">\r
        <ng-template #header>\r
            <tr>\r
                <th>Nombre</th>\r
                <th>Email</th>\r
                <th>Fecha de Actualizacion</th>\r
                <th>Acciones</th>\r
            </tr>\r
        </ng-template>\r
        <ng-template #body let-item>\r
            <tr>\r
                <td>{{ item.name }}</td>\r
                <td>{{ item.email }}</td>\r
                <td>{{ item.updated_at | date:'MM/dd/yyyy' }}</td>\r
                <td>\r
                    <button pButton type="button" (click)="updateUsuario(item)" icon="pi pi-pencil" class="p-button-rounded p-button-text"></button>\r
                    <button pButton type="button" (click)="deleteUsuario(item, $event)" icon="pi pi-trash" severity="danger" class="p-button-rounded p-button-text"></button>\r
                </td>\r
            </tr>\r
        </ng-template>\r
    </p-table>\r
\r
    <!-- <p-toast /> -->\r
    <p-confirmdialog />\r
    <!-- <app-usuario></app-usuario> -->\r
    <app-usuario (messageEvent)="loadUsuarios()"></app-usuario>\r
</div>` }]
  }], () => [], { usuarioComponent: [{
    type: ViewChild,
    args: [UsuarioComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i024.\u0275setClassDebugInfo(UsuarioListComponent, { className: "UsuarioListComponent", filePath: "src/app/usuario/usuario-list/usuario-list.component.ts", lineNumber: 33 });
})();
(() => {
  const id = "src%2Fapp%2Fusuario%2Fusuario-list%2Fusuario-list.component.ts%40UsuarioListComponent";
  function UsuarioListComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i024.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i024.\u0275\u0275replaceMetadata(UsuarioListComponent, m.default, [i024, i120, i215, i312, i47, i56, i64, i73, i82], [UsuarioComponent, ConfirmationService, BasicService, CommonModule10, DatePickerModule2, FormsModule2, TableModule3, ButtonModule10, ConfirmDialogModule2, Component22, ViewChild], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && UsuarioListComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && UsuarioListComponent_HmrLoad(d.timestamp)));
})();

// src/app.routes.ts
var appRoutes = [
  {
    path: "",
    component: AppLayout,
    children: [
      { path: "", component: Dashboard },
      // { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
      // { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') },
      { path: "usuario", component: UsuarioListComponent }
    ]
  },
  { path: "landing", component: Landing },
  { path: "notfound", component: Notfound },
  { path: "auth", loadChildren: () => import("/chunk-QDE662H4.js") },
  { path: "**", redirectTo: "/notfound" }
];

// src/app.config.ts
var appConfig = {
  providers: [
    provideRouter(appRoutes, withInMemoryScrolling({
      anchorScrolling: "enabled",
      scrollPositionRestoration: "enabled"
    }), withEnabledBlockingInitialNavigation()),
    provideHttpClient(withFetch()),
    provideZonelessChangeDetection(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: { darkModeSelector: ".app-dark" }
      }
    })
  ]
};

// src/app.component.ts
import { Component as Component23 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import { RouterModule as RouterModule10 } from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
import * as i025 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_core.js?v=ae3c7c69";
import * as i121 from "/@fs/app/.angular/cache/21.2.8/sakai-ng/vite/deps/@angular_router.js?v=ae3c7c69";
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i025.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i025.\u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterModule10, i121.RouterOutlet, i121.RouterLink, i121.RouterLinkActive, i121.\u0275EmptyOutletComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i025.\u0275setClassMetadata(AppComponent, [{
    type: Component23,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterModule10],
      template: `<router-outlet></router-outlet>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i025.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app.component.ts", lineNumber: 10 });
})();
(() => {
  const id = "src%2Fapp.component.ts%40AppComponent";
  function AppComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i025.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i025.\u0275\u0275replaceMetadata(AppComponent, m.default, [i025, i121], [RouterModule10, Component23], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AppComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AppComponent_HmrLoad(d.timestamp)));
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC5jb25maWcudHMiLCJzcmMvYXBwL2xheW91dC9jb21wb25lbnQvYXBwLmxheW91dC50cyIsInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudC9hcHAudG9wYmFyLnRzIiwic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50L2FwcC5zaWRlYmFyLnRzIiwic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50L2FwcC5tZW51LnRzIiwic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50L2FwcC5tZW51aXRlbS50cyIsInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudC9hcHAuZm9vdGVyLnRzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnRzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9ub3RpZmljYXRpb25zd2lkZ2V0LnRzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zdGF0c3dpZGdldC50cyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvcmVjZW50c2FsZXN3aWRnZXQudHMiLCJzcmMvYXBwL3BhZ2VzL3NlcnZpY2UvcHJvZHVjdC5zZXJ2aWNlLnRzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9iZXN0c2VsbGluZ3dpZGdldC50cyIsInNyYy9hcHAvc2VydmljZS9iYXNpYy5zZXJ2aWNlLnRzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9yZXZlbnVlc3RyZWFtd2lkZ2V0LnRzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcudHMiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvY29tcG9uZW50cy90b3BiYXJ3aWRnZXQuY29tcG9uZW50LnRzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2NvbXBvbmVudHMvaGVyb3dpZGdldC50cyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9jb21wb25lbnRzL2ZlYXR1cmVzd2lkZ2V0LnRzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2NvbXBvbmVudHMvaGlnaGxpZ2h0c3dpZGdldC50cyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9jb21wb25lbnRzL3ByaWNpbmd3aWRnZXQudHMiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvY29tcG9uZW50cy9mb290ZXJ3aWRnZXQudHMiLCJzcmMvYXBwL3BhZ2VzL25vdGZvdW5kL25vdGZvdW5kLnRzIiwic3JjL2FwcC91c3VhcmlvL3VzdWFyaW8tbGlzdC91c3VhcmlvLWxpc3QuY29tcG9uZW50LnRzIiwic3JjL2FwcC91c3VhcmlvL3VzdWFyaW8tbGlzdC91c3VhcmlvLWxpc3QuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL3VzdWFyaW8vdXN1YXJpby91c3VhcmlvLmNvbXBvbmVudC50cyIsInNyYy9hcHAvdXN1YXJpby91c3VhcmlvL3VzdWFyaW8uY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL3VzdWFyaW8vc2hhcmVkL3VzdWFyaW8ubW9kZWwudHMiLCJzcmMvYXBwLnJvdXRlcy50cyIsInNyYy9hcHAuY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb3RzdHJhcEFwcGxpY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IGFwcENvbmZpZyB9IGZyb20gJy4vYXBwLmNvbmZpZyc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcblxyXG5ib290c3RyYXBBcHBsaWNhdGlvbihBcHBDb21wb25lbnQsIGFwcENvbmZpZykuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuIiwiaW1wb3J0IHsgcHJvdmlkZUh0dHBDbGllbnQsIHdpdGhGZXRjaCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWcsIHByb3ZpZGVab25lbGVzc0NoYW5nZURldGVjdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBwcm92aWRlUm91dGVyLCB3aXRoRW5hYmxlZEJsb2NraW5nSW5pdGlhbE5hdmlnYXRpb24sIHdpdGhJbk1lbW9yeVNjcm9sbGluZyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCBBdXJhIGZyb20gJ0BwcmltZXVpeC90aGVtZXMvYXVyYSc7XHJcbmltcG9ydCB7IHByb3ZpZGVQcmltZU5HIH0gZnJvbSAncHJpbWVuZy9jb25maWcnO1xyXG5pbXBvcnQgeyBhcHBSb3V0ZXMgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcENvbmZpZzogQXBwbGljYXRpb25Db25maWcgPSB7XHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBwcm92aWRlUm91dGVyKFxyXG4gICAgICAgICAgICBhcHBSb3V0ZXMsIFxyXG4gICAgICAgICAgICB3aXRoSW5NZW1vcnlTY3JvbGxpbmcoeyBcclxuICAgICAgICAgICAgICAgIGFuY2hvclNjcm9sbGluZzogJ2VuYWJsZWQnLCBcclxuICAgICAgICAgICAgICAgIHNjcm9sbFBvc2l0aW9uUmVzdG9yYXRpb246ICdlbmFibGVkJyBcclxuICAgICAgICAgICAgfSksIFxyXG4gICAgICAgICAgICB3aXRoRW5hYmxlZEJsb2NraW5nSW5pdGlhbE5hdmlnYXRpb24oKVxyXG4gICAgICAgICksXHJcbiAgICAgICAgcHJvdmlkZUh0dHBDbGllbnQod2l0aEZldGNoKCkpLFxyXG4gICAgICAgIHByb3ZpZGVab25lbGVzc0NoYW5nZURldGVjdGlvbigpLFxyXG4gICAgICAgIHByb3ZpZGVQcmltZU5HKHsgXHJcbiAgICAgICAgICAgIHRoZW1lOiB7IFxyXG4gICAgICAgICAgICAgICAgcHJlc2V0OiBBdXJhLCBcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHsgZGFya01vZGVTZWxlY3RvcjogJy5hcHAtZGFyaycgfSBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9KVxyXG4gICAgXVxyXG59O1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGNvbXB1dGVkLCBlZmZlY3QsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBcHBUb3BiYXIgfSBmcm9tICcuL2FwcC50b3BiYXInO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFyIH0gZnJvbSAnLi9hcHAuc2lkZWJhcic7XHJcbmltcG9ydCB7IEFwcEZvb3RlciB9IGZyb20gJy4vYXBwLmZvb3Rlcic7XHJcbmltcG9ydCB7IExheW91dFNlcnZpY2UgfSBmcm9tICdAL2FwcC9sYXlvdXQvc2VydmljZS9sYXlvdXQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWxheW91dCcsXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQXBwVG9wYmFyLCBBcHBTaWRlYmFyLCBSb3V0ZXJNb2R1bGUsIEFwcEZvb3Rlcl0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImxheW91dC13cmFwcGVyXCIgW25nQ2xhc3NdPVwiY29udGFpbmVyQ2xhc3MoKVwiPlxyXG4gICAgICAgIDxhcHAtdG9wYmFyPjwvYXBwLXRvcGJhcj5cclxuICAgICAgICA8YXBwLXNpZGViYXI+PC9hcHAtc2lkZWJhcj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LW1haW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQtbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGFwcC1mb290ZXI+PC9hcHAtZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQtbWFza1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+IGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcExheW91dCB7XHJcbiAgICBsYXlvdXRTZXJ2aWNlID0gaW5qZWN0KExheW91dFNlcnZpY2UpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5sYXlvdXRTZXJ2aWNlLmxheW91dFN0YXRlKCk7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5tb2JpbGVNZW51QWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2Jsb2NrZWQtc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2NrZWQtc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcclxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmxheW91dFNlcnZpY2UubGF5b3V0Q29uZmlnKCk7XHJcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmxheW91dFNlcnZpY2UubGF5b3V0U3RhdGUoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAnbGF5b3V0LW92ZXJsYXknOiBjb25maWcubWVudU1vZGUgPT09ICdvdmVybGF5JyxcclxuICAgICAgICAgICAgJ2xheW91dC1zdGF0aWMnOiBjb25maWcubWVudU1vZGUgPT09ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAnbGF5b3V0LXN0YXRpYy1pbmFjdGl2ZSc6IHN0YXRlLnN0YXRpY01lbnVEZXNrdG9wSW5hY3RpdmUgJiYgY29uZmlnLm1lbnVNb2RlID09PSAnc3RhdGljJyxcclxuICAgICAgICAgICAgJ2xheW91dC1vdmVybGF5LWFjdGl2ZSc6IHN0YXRlLm92ZXJsYXlNZW51QWN0aXZlLFxyXG4gICAgICAgICAgICAnbGF5b3V0LW1vYmlsZS1hY3RpdmUnOiBzdGF0ZS5tb2JpbGVNZW51QWN0aXZlXHJcbiAgICAgICAgfTtcclxuICAgIH0pXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICdwcmltZW5nL2FwaSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFN0eWxlQ2xhc3NNb2R1bGUgfSBmcm9tICdwcmltZW5nL3N0eWxlY2xhc3MnO1xyXG5pbXBvcnQgeyBBcHBDb25maWd1cmF0b3IgfSBmcm9tICcuL2FwcC5jb25maWd1cmF0b3InO1xyXG5pbXBvcnQgeyBMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnQC9hcHAvbGF5b3V0L3NlcnZpY2UvbGF5b3V0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC10b3BiYXInLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUsIENvbW1vbk1vZHVsZSwgU3R5bGVDbGFzc01vZHVsZSwgQXBwQ29uZmlndXJhdG9yXSxcclxuICAgIHRlbXBsYXRlOiBgIDxkaXYgY2xhc3M9XCJsYXlvdXQtdG9wYmFyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dC10b3BiYXItbG9nby1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxheW91dC1tZW51LWJ1dHRvbiBsYXlvdXQtdG9wYmFyLWFjdGlvblwiIChjbGljayk9XCJsYXlvdXRTZXJ2aWNlLm9uTWVudVRvZ2dsZSgpXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBpIHBpLWJhcnNcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImxheW91dC10b3BiYXItbG9nb1wiIHJvdXRlckxpbms9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNTQgNDBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1ydWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTcuMTYzNyAxOS4yNDY3QzE3LjE1NjYgMTkuNDAzMyAxNy4xNTI5IDE5LjU2MSAxNy4xNTI5IDE5LjcxOTRDMTcuMTUyOSAyNS4zNTAzIDIxLjcyMDMgMjkuOTE1IDI3LjM1NDYgMjkuOTE1QzMyLjk4ODcgMjkuOTE1IDM3LjU1NjEgMjUuMzUwMyAzNy41NTYxIDE5LjcxOTRDMzcuNTU2MSAxOS41NTcyIDM3LjU1MjQgMTkuMzk1OSAzNy41NDQ5IDE5LjIzNTVDMzguNTYxNyAxOS4wODAxIDM5LjU3NTkgMTguOTAxMyA0MC41ODY3IDE4LjY5OTRMNDAuNjkyNiAxOC42NzgyQzQwLjcxOTEgMTkuMDIxOCA0MC43MzI2IDE5LjM2OSA0MC43MzI2IDE5LjcxOTRDNDAuNzMyNiAyNy4xMDM2IDM0Ljc0MyAzMy4wODk2IDI3LjM1NDYgMzMuMDg5NkMxOS45NjYgMzMuMDg5NiAxMy45NzY1IDI3LjEwMzYgMTMuOTc2NSAxOS43MTk0QzEzLjk3NjUgMTkuMzc0IDEzLjk4OTYgMTkuMDMxNiAxNC4wMTU0IDE4LjY5MjdMMTQuMDQ4NiAxOC42OTk0QzE1LjA4MzcgMTguOTA2MiAxNi4xMjIzIDE5LjA4ODYgMTcuMTYzNyAxOS4yNDY3Wk0zMy4zMjg0IDExLjQ1MzhDMzEuNjQ5MyAxMC4yMzk2IDI5LjU4NTUgOS41MjM4MSAyNy4zNTQ2IDkuNTIzODFDMjUuMTE5NSA5LjUyMzgxIDIzLjA1MjQgMTAuMjQyMSAyMS4zNzE3IDExLjQ2MDNDMjAuMDA3OCAxMS4zMjMyIDE4LjY0NzUgMTEuMTM4NyAxNy4yOTMzIDEwLjkwN0MxOS43NDUzIDguMTEzMDggMjMuMzQzOCA2LjM0OTIxIDI3LjM1NDYgNi4zNDkyMUMzMS4zNiA2LjM0OTIxIDM0Ljk1NDMgOC4xMDg0NCAzNy40MDYxIDEwLjg5NkMzNi4wNTIxIDExLjEyOTIgMzQuNjkyIDExLjMxNTIgMzMuMzI4NCAxMS40NTM4Wk00My44MjYgMTguMDUxOEM0My44ODEgMTguNjAwMyA0My45MDkxIDE5LjE1NjYgNDMuOTA5MSAxOS43MTk0QzQzLjkwOTEgMjguODU2OCAzNi40OTczIDM2LjI2NDIgMjcuMzU0NiAzNi4yNjQyQzE4LjIxMTcgMzYuMjY0MiAxMC44IDI4Ljg1NjggMTAuOCAxOS43MTk0QzEwLjggMTkuMTYxNSAxMC44Mjc2IDE4LjYxIDEwLjg4MTYgMTguMDY2M0w3Ljc1MzgzIDE3LjQ0MTFDNy42Njc3NSAxOC4xODg2IDcuNjIzNTQgMTguOTQ4OCA3LjYyMzU0IDE5LjcxOTRDNy42MjM1NCAzMC42MTAyIDE2LjQ1NzQgMzkuNDM4OCAyNy4zNTQ2IDM5LjQzODhDMzguMjUxNyAzOS40Mzg4IDQ3LjA4NTUgMzAuNjEwMiA0Ny4wODU1IDE5LjcxOTRDNDcuMDg1NSAxOC45NDM5IDQ3LjA0MDcgMTguMTc4OSA0Ni45NTM2IDE3LjQyNjdMNDMuODI2IDE4LjA1MThaTTQ0LjI2MTMgOS41NDc0M0w0MC45MDg0IDEwLjIxNzZDMzcuOTEzNCA1Ljk1ODIxIDMyLjk1OTMgMy4xNzQ2IDI3LjM1NDYgMy4xNzQ2QzIxLjc0NDIgMy4xNzQ2IDE2Ljc4NTYgNS45NjM4NSAxMy43OTE1IDEwLjIzMDVMMTAuNDM5OSA5LjU2MDU3QzEzLjg5MiAzLjgzMTc4IDIwLjE3NTYgMCAyNy4zNTQ2IDBDMzQuNTI4MSAwIDQwLjgwNzUgMy44MjU5MSA0NC4yNjEzIDkuNTQ3NDNaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLXByaW1hcnktY29sb3IpXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPVwibWFzazBfMTQxM18xNTUxXCIgc3R5bGU9XCJtYXNrLXR5cGU6IGFscGhhXCIgbWFza1VuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB4PVwiMFwiIHk9XCI4XCIgd2lkdGg9XCI1NFwiIGhlaWdodD1cIjExXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjcgMTguMzY1MkMxMC41MTE0IDE5LjE5NDQgMCA4Ljg4ODkyIDAgOC44ODg5MkMwIDguODg4OTIgMTYuNTE3NiAxNC41ODY2IDI3IDE0LjU4NjZDMzcuNDgyNCAxNC41ODY2IDU0IDguODg4OTIgNTQgOC44ODg5MkM1NCA4Ljg4ODkyIDQzLjQ4ODYgMTcuNTM2MSAyNyAxOC4zNjUyWlwiIGZpbGw9XCJ2YXIoLS1wcmltYXJ5LWNvbG9yKVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIG1hc2s9XCJ1cmwoI21hc2swXzE0MTNfMTU1MSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNLTQuNjczZS0wNSA4Ljg4ODg3TDMuNzMwODQgLTEuOTE0MzRMLTguMDA4MDYgMTcuMDQ3M0wtNC42NzNlLTA1IDguODg4ODdaTTI3IDE4LjM2NTJMMjYuNDI1MyA2Ljk1MTA5TDI3IDE4LjM2NTJaTTU0IDguODg4ODdMNjEuMjY3MyAxNy43MTI3TDUwLjI2OTEgLTEuOTE0MzRMNTQgOC44ODg4N1pNLTQuNjczZS0wNSA4Ljg4ODg3Qy04LjAwODA2IDE3LjA0NzMgLTguMDA0NjkgMTcuMDUwNSAtOC4wMDEzMiAxNy4wNTM4Qy04LjAwMDE4IDE3LjA1NSAtNy45OTY3NSAxNy4wNTgzIC03Ljk5NDQgMTcuMDYwN0MtNy45ODk2MyAxNy4wNjUzIC03Ljk4NDc0IDE3LjA3MDEgLTcuOTc5NjYgMTcuMDc1Qy03Ljk2OTQ5IDE3LjA4NDkgLTcuOTU4NjMgMTcuMDk1NSAtNy45NDcwNyAxNy4xMDY2Qy03LjkyNDAxIDE3LjEyOSAtNy44OTgwOSAxNy4xNTM5IC03Ljg2OTQ0IDE3LjE4MTJDLTcuODEyMiAxNy4yMzYgLTcuNzQzNzcgMTcuMzAwNSAtNy42NjQzNiAxNy4zNzQzQy03LjUwNTY3IDE3LjUyMTggLTcuMzAyNjkgMTcuNzA2MyAtNy4wNTY0NSAxNy45MjIxQy02LjU2NDY3IDE4LjM1MzIgLTUuODk2NjIgMTguOTEyNSAtNS4wNjA4OSAxOS41NTM0Qy0zLjM5NjAzIDIwLjgzIC0xLjAyNTc1IDIyLjQ2MDUgMS45ODAxMiAyNC4wNDU3QzcuOTc4NzQgMjcuMjA5MSAxNi43NzIzIDMwLjMyMjYgMjcuNTc0NiAyOS43NzkzTDI2LjQyNTMgNi45NTEwOUMyMC43MzkxIDcuMjM2OTkgMTYuMDMyNiA1LjYxMjMxIDEyLjY1MzQgMy44MzAyNEMxMC45NzAzIDIuOTQyNjcgOS42ODIyMiAyLjA0ODY2IDguODYwOTEgMS40MTg4OEM4LjQ1MzU2IDEuMTA2NTMgOC4xNzE1NSAwLjg2NzI3OCA4LjAyNDEgMC43MzgwMjdDNy45NTA3MiAwLjY3MzY3MSA3LjkxMTc4IDAuNjM3NTc2IDcuOTA4NDEgMC42MzQ0OTJDNy45MDY4MiAwLjYzMjk4IDcuOTE0MTkgMC42Mzk4MDUgNy45MzA3MSAwLjY1NTU3QzcuOTM4OTcgMC42NjM0NTUgNy45NDk1MiAwLjY3MzU4OSA3Ljk2MjM1IDAuNjg2MDM5QzcuOTY4ODMgMC42OTIyNjIgNy45NzU4MiAwLjY5OTA3NSA3Ljk4MzM4IDAuNzA2NDcxQzcuOTg3MTkgMC43MTAxNjcgNy45OTExMyAwLjcxNDAxNCA3Ljk5NTI2IDAuNzE4MDE0QzcuOTk3MjkgMC43MjAwMDggOC4wMDA0NyAwLjcyMzExOSA4LjAwMTQ4IDAuNzI0MTE2QzguMDA0NjYgMC43MjcyNjUgOC4wMDc5NiAwLjczMDQ0NiAtNC42NzNlLTA1IDguODg4ODdaTTI3LjU3NDYgMjkuNzc5M0MzNy42OTA0IDI5LjI3MDYgNDUuOTQxNiAyNi4zNjg0IDUxLjY2MDIgMjMuNjA1NEM1NC41Mjk2IDIyLjIxOTEgNTYuODA2NCAyMC44NDY1IDU4LjQxODYgMTkuNzc4NEM1OS4yMjY1IDE5LjI0MzEgNTkuODczIDE4Ljc4MDUgNjAuMzQ5NCAxOC40MjU3QzYwLjU4NzggMTguMjQ4MiA2MC43ODQxIDE4LjA5NzEgNjAuOTM3NCAxNy45NzdDNjEuMDE0IDE3LjkxNjkgNjEuMDc5OSAxNy44NjQ1IDYxLjEzNDkgMTcuODIwM0M2MS4xNjI0IDE3Ljc5ODEgNjEuMTg3MiAxNy43NzgxIDYxLjIwOTMgMTcuNzYwMkM2MS4yMjAzIDE3Ljc1MTIgNjEuMjMwNyAxNy43NDI3IDYxLjI0MDMgMTcuNzM0OEM2MS4yNDUyIDE3LjczMDggNjEuMjQ5OSAxNy43MjcgNjEuMjU0NCAxNy43MjMzQzYxLjI1NjYgMTcuNzIxNSA2MS4yNTk4IDE3LjcxODggNjEuMjYxIDE3LjcxNzlDNjEuMjY0MiAxNy43MTUzIDYxLjI2NzMgMTcuNzEyNyA1NCA4Ljg4ODg3QzQ2LjczMjYgMC4wNjUwNTM2IDQ2LjczNTcgMC4wNjI1MjE5IDQ2LjczODcgMC4wNjAwMjQxQzQ2LjczOTcgMC4wNTkyMzQ1IDQ2Ljc0MjcgMC4wNTY3NjU4IDQ2Ljc0NDYgMC4wNTUxODU3QzQ2Ljc0ODUgMC4wNTIwMjM4IDQ2Ljc1MjEgMC4wNDg5ODg3IDQ2Ljc1NTcgMC4wNDYwNzk5QzQ2Ljc2MjggMC4wNDAyNjIzIDQ2Ljc2OTQgMC4wMzQ5NDg3IDQ2Ljc3NTMgMC4wMzAxMzE4QzQ2Ljc4NzEgMC4wMjA0OTg2IDQ2Ljc5NjYgMC4wMTI4NDk1IDQ2LjgwMzcgMC4wMDcxMjU2MkM0Ni44MTggLTAuMDA0MzE4NDggNDYuODIyOCAtMC4wMDgwODMxMSA0Ni44MTg0IC0wLjAwNDYzNzg0QzQ2LjgwOTYgMC4wMDIyODM0NSA0Ni43NjQgMC4wMzc4NjUyIDQ2LjY4MjggMC4wOTgzNzc5QzQ2LjUxOTkgMC4yMTk2NzUgNDYuMjE2NSAwLjQzOTE2MSA0NS43ODEyIDAuNzI3NTE5QzQ0LjkwNzIgMS4zMDY2MyA0My41MjU3IDIuMTQ3NjUgNDEuNzA2MSAzLjAyNjc3QzM4LjA0NjkgNC43OTQ2OCAzMi43OTgxIDYuNjMwNTggMjYuNDI1MyA2Ljk1MTA5TDI3LjU3NDYgMjkuNzc5M1pNNTQgOC44ODg4N0M1MC4yNjkxIC0xLjkxNDMzIDUwLjI3IC0xLjkxNDY3IDUwLjI3MSAtMS45MTQ5OEM1MC4yNzEyIC0xLjkxNTA2IDUwLjI3MiAtMS45MTUzNSA1MC4yNzI0IC0xLjkxNTVDNTAuMjczMyAtMS45MTU4MSA1MC4yNzQgLTEuOTE2MDIgNTAuMjc0MyAtMS45MTYxNkM1MC4yNzUyIC0xLjkxNjQzIDUwLjI3NSAtMS45MTYzNiA1MC4yNzM4IC0xLjkxNTk1QzUwLjI3MTQgLTEuOTE1MTUgNTAuMjY1MiAtMS45MTMwMiA1MC4yNTUyIC0xLjkwOTZDNTAuMjM1MSAtMS45MDI3NiA1MC4xOTk5IC0xLjg5MDc4IDUwLjE1MDMgLTEuODc0QzUwLjA1MDkgLTEuODQwNDMgNDkuODkzOCAtMS43ODc3MyA0OS42ODQ0IC0xLjcxODYzQzQ5LjI2NTIgLTEuNTgwMzEgNDguNjM4NyAtMS4zNzcgNDcuODQ4MSAtMS4xMzAzNUM0Ni4yNjA5IC0wLjYzNTIzNyA0NC4wNDI3IDAuMDI0OTg3NSA0MS41MzI1IDAuNjgyM0MzNi4yMTUgMi4wNzQ3MSAzMC42NzM2IDMuMTU3OTYgMjcgMy4xNTc5NlYyNi4wMTUxQzMzLjgwODcgMjYuMDE1MSA0MS43NjcyIDI0LjI0OTUgNDcuMzI5MiAyMi43OTMxQzUwLjI1ODYgMjIuMDI2IDUyLjgyNSAyMS4yNjE4IDU0LjY2MjUgMjAuNjg4NkM1NS41ODQyIDIwLjQwMTEgNTYuMzMgMjAuMTU5MyA1Ni44NTUxIDE5Ljk4NkM1Ny4xMTc4IDE5Ljg5OTMgNTcuMzI1OCAxOS44Mjk2IDU3LjQ3MzUgMTkuNzc5N0M1Ny41NDc0IDE5Ljc1NDggNTcuNjA2MiAxOS43MzQ4IDU3LjY0OTMgMTkuNzJDNTcuNjcwOSAxOS43MTI3IDU3LjY4ODUgMTkuNzA2NiA1Ny43MDIxIDE5LjcwMTlDNTcuNzA4OSAxOS42OTk2IDU3LjcxNDcgMTkuNjk3NiA1Ny43MTk1IDE5LjY5NkM1Ny43MjE5IDE5LjY5NTIgNTcuNzI0MSAxOS42OTQ0IDU3LjcyNiAxOS42OTM4QzU3LjcyNjkgMTkuNjkzNCA1Ny43MjgxIDE5LjY5MyA1Ny43Mjg2IDE5LjY5MjlDNTcuNzI5OCAxOS42OTI0IDU3LjczMDkgMTkuNjkyIDU0IDguODg4ODdaTTI3IDMuMTU3OTZDMjMuMzI2MyAzLjE1Nzk2IDE3Ljc4NDkgMi4wNzQ3MSAxMi40Njc0IDAuNjgyM0M5Ljk1NzE3IDAuMDI0OTg3NSA3LjczOTA0IC0wLjYzNTIzNyA2LjE1MTg0IC0xLjEzMDM1QzUuMzYxMTggLTEuMzc3IDQuNzM0NjcgLTEuNTgwMzEgNC4zMTU1IC0xLjcxODYzQzQuMTA2MDkgLTEuNzg3NzMgMy45NDg5OSAtMS44NDA0MyAzLjg0OTYxIC0xLjg3NEMzLjc5OTk0IC0xLjg5MDc4IDMuNzY0NzQgLTEuOTAyNzYgMy43NDQ3MSAtMS45MDk2QzMuNzM0NjkgLTEuOTEzMDIgMy43Mjg0OCAtMS45MTUxNSAzLjcyNjEzIC0xLjkxNTk1QzMuNzI0OTYgLTEuOTE2MzYgMy43MjQ3NiAtMS45MTY0MyAzLjcyNTU0IC0xLjkxNjE2QzMuNzI1OTMgLTEuOTE2MDIgMy43MjY1NyAtMS45MTU4MSAzLjcyNzQ1IC0xLjkxNTVDMy43Mjc4OSAtMS45MTUzNSAzLjcyODc0IC0xLjkxNTA2IDMuNzI4OTYgLTEuOTE0OThDMy43Mjk4NyAtMS45MTQ2NyAzLjczMDg0IC0xLjkxNDMzIC00LjY3M2UtMDUgOC44ODg4N0MtMy43MzA5MyAxOS42OTIgLTMuNzI5ODMgMTkuNjkyNCAtMy43Mjg2OCAxOS42OTI5Qy0zLjcyODIxIDE5LjY5MyAtMy43MjY5OCAxOS42OTM0IC0zLjcyNjAzIDE5LjY5MzhDLTMuNzI0MTUgMTkuNjk0NCAtMy43MjIwMSAxOS42OTUyIC0zLjcxOTYxIDE5LjY5NkMtMy43MTQ4MiAxOS42OTc2IC0zLjcwOTAxIDE5LjY5OTYgLTMuNzAyMiAxOS43MDE5Qy0zLjY4ODU4IDE5LjcwNjYgLTMuNjcwOTUgMTkuNzEyNyAtMy42NDk0IDE5LjcyQy0zLjYwNjI5IDE5LjczNDggLTMuNTQ3NDUgMTkuNzU0OCAtMy40NzM1OSAxOS43Nzk3Qy0zLjMyNTg5IDE5LjgyOTYgLTMuMTE3ODggMTkuODk5MyAtMi44NTUxNiAxOS45ODZDLTIuMzMwMDggMjAuMTU5MyAtMS41ODQyNSAyMC40MDExIC0wLjY2MjU4OSAyMC42ODg2QzEuMTc0ODUgMjEuMjYxOCAzLjc0MTI1IDIyLjAyNiA2LjY3MDczIDIyLjc5MzFDMTIuMjMyNyAyNC4yNDk1IDIwLjE5MTMgMjYuMDE1MSAyNyAyNi4wMTUxVjMuMTU3OTZaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ2YXIoLS1wcmltYXJ5LWNvbG9yKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5TQUtBSTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LXRvcGJhci1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQtY29uZmlnLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibGF5b3V0LXRvcGJhci1hY3Rpb25cIiAoY2xpY2spPVwidG9nZ2xlRGFya01vZGUoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIFtuZ0NsYXNzXT1cInsgJ3BpICc6IHRydWUsICdwaS1tb29uJzogbGF5b3V0U2VydmljZS5pc0RhcmtUaGVtZSgpLCAncGktc3VuJzogIWxheW91dFNlcnZpY2UuaXNEYXJrVGhlbWUoKSB9XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGF5b3V0LXRvcGJhci1hY3Rpb24gbGF5b3V0LXRvcGJhci1hY3Rpb24taGlnaGxpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcFN0eWxlQ2xhc3M9XCJAbmV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbUNsYXNzPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJBY3RpdmVDbGFzcz1cImFuaW1hdGUtc2NhbGVpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlVG9DbGFzcz1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlQWN0aXZlQ2xhc3M9XCJhbmltYXRlLWZhZGVvdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbaGlkZU9uT3V0c2lkZUNsaWNrXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwaSBwaS1wYWxldHRlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhcHAtY29uZmlndXJhdG9yIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGF5b3V0LXRvcGJhci1tZW51LWJ1dHRvbiBsYXlvdXQtdG9wYmFyLWFjdGlvblwiIHBTdHlsZUNsYXNzPVwiQG5leHRcIiBlbnRlckZyb21DbGFzcz1cImhpZGRlblwiIGVudGVyQWN0aXZlQ2xhc3M9XCJhbmltYXRlLXNjYWxlaW5cIiBsZWF2ZVRvQ2xhc3M9XCJoaWRkZW5cIiBsZWF2ZUFjdGl2ZUNsYXNzPVwiYW5pbWF0ZS1mYWRlb3V0XCIgW2hpZGVPbk91dHNpZGVDbGlja109XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBpIHBpLWVsbGlwc2lzLXZcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dC10b3BiYXItbWVudSBoaWRkZW4gbGc6YmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQtdG9wYmFyLW1lbnUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibGF5b3V0LXRvcGJhci1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwaSBwaS1jYWxlbmRhclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q2FsZW5kYXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJsYXlvdXQtdG9wYmFyLWFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBpIHBpLWluYm94XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5NZXNzYWdlczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImxheW91dC10b3BiYXItYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGkgcGktdXNlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UHJvZmlsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFRvcGJhciB7XHJcbiAgICBpdGVtcyE6IE1lbnVJdGVtW107XHJcblxyXG4gICAgbGF5b3V0U2VydmljZSA9IGluamVjdChMYXlvdXRTZXJ2aWNlKTtcclxuXHJcbiAgICB0b2dnbGVEYXJrTW9kZSgpIHtcclxuICAgICAgICB0aGlzLmxheW91dFNlcnZpY2UubGF5b3V0Q29uZmlnLnVwZGF0ZSgoc3RhdGUpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBkYXJrVGhlbWU6ICFzdGF0ZS5kYXJrVGhlbWVcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBjb21wdXRlZCwgZWZmZWN0LCBFbGVtZW50UmVmLCBpbmplY3QsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciwgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgZmlsdGVyLCBTdWJqZWN0LCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQXBwTWVudSB9IGZyb20gJy4vYXBwLm1lbnUnO1xyXG5pbXBvcnQgeyBMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnQC9hcHAvbGF5b3V0L3NlcnZpY2UvbGF5b3V0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyJyxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbQXBwTWVudSwgUm91dGVyTW9kdWxlXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dC1zaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIDxhcHAtbWVudT48L2FwcC1tZW51PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhciBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIGxheW91dFNlcnZpY2UgPSBpbmplY3QoTGF5b3V0U2VydmljZSk7XHJcblxyXG4gICAgcm91dGVyID0gaW5qZWN0KFJvdXRlcik7XHJcblxyXG4gICAgZWwgPSBpbmplY3QoRWxlbWVudFJlZik7XHJcblxyXG4gICAgcHJpdmF0ZSBvdXRzaWRlQ2xpY2tMaXN0ZW5lcjogKChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBlZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMubGF5b3V0U2VydmljZS5sYXlvdXRTdGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0U2VydmljZS5pc0Rlc2t0b3AoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLm92ZXJsYXlNZW51QWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iaW5kT3V0c2lkZUNsaWNrTGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmJpbmRPdXRzaWRlQ2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLm1vYmlsZU1lbnVBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbmRPdXRzaWRlQ2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuYmluZE91dHNpZGVDbGlja0xpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHNcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIoKGV2ZW50KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxyXG4gICAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hdkV2ZW50ID0gZXZlbnQgYXMgTmF2aWdhdGlvbkVuZDtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Sb3V0ZUNoYW5nZShuYXZFdmVudC51cmxBZnRlclJlZGlyZWN0cyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm9uUm91dGVDaGFuZ2UodGhpcy5yb3V0ZXIudXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgdGhpcy51bmJpbmRPdXRzaWRlQ2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Sb3V0ZUNoYW5nZShwYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmxheW91dFNlcnZpY2UubGF5b3V0U3RhdGUudXBkYXRlKCh2YWwpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLnZhbCxcclxuICAgICAgICAgICAgYWN0aXZlUGF0aDogcGF0aCxcclxuICAgICAgICAgICAgb3ZlcmxheU1lbnVBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGF0aWNNZW51TW9iaWxlQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgbW9iaWxlTWVudUFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lbnVIb3ZlckFjdGl2ZTogZmFsc2VcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBiaW5kT3V0c2lkZUNsaWNrTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm91dHNpZGVDbGlja0xpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0c2lkZUNsaWNrTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT3V0c2lkZUNsaWNrZWQoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXlvdXRTZXJ2aWNlLmxheW91dFN0YXRlLnVwZGF0ZSgodmFsKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi52YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXlNZW51QWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljTWVudU1vYmlsZUFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZU1lbnVBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51SG92ZXJBY3RpdmU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm91dHNpZGVDbGlja0xpc3RlbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1bmJpbmRPdXRzaWRlQ2xpY2tMaXN0ZW5lcigpIHtcclxuICAgICAgICBpZiAodGhpcy5vdXRzaWRlQ2xpY2tMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3V0c2lkZUNsaWNrTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICB0aGlzLm91dHNpZGVDbGlja0xpc3RlbmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc091dHNpZGVDbGlja2VkKGV2ZW50OiBNb3VzZUV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdG9wYmFyQnV0dG9uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wYmFyLXN0YXJ0ID4gYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3Qgc2lkZWJhckVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgICAgICByZXR1cm4gIShcclxuICAgICAgICAgICAgc2lkZWJhckVsPy5pc1NhbWVOb2RlKGV2ZW50LnRhcmdldCBhcyBOb2RlKSB8fFxyXG4gICAgICAgICAgICBzaWRlYmFyRWw/LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKSB8fFxyXG4gICAgICAgICAgICB0b3BiYXJCdXR0b25FbD8uaXNTYW1lTm9kZShldmVudC50YXJnZXQgYXMgTm9kZSkgfHxcclxuICAgICAgICAgICAgdG9wYmFyQnV0dG9uRWw/LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAncHJpbWVuZy9hcGknO1xyXG5pbXBvcnQgeyBBcHBNZW51aXRlbSB9IGZyb20gJy4vYXBwLm1lbnVpdGVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtbWVudScsXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQXBwTWVudWl0ZW0sIFJvdXRlck1vZHVsZV0sXHJcbiAgICB0ZW1wbGF0ZTogYDx1bCBjbGFzcz1cImxheW91dC1tZW51XCI+XHJcbiAgICAgICAgQGZvciAoaXRlbSBvZiBtb2RlbDsgdHJhY2sgaXRlbS5sYWJlbCkge1xyXG4gICAgICAgICAgICBAaWYgKCFpdGVtLnNlcGFyYXRvcikge1xyXG4gICAgICAgICAgICAgICAgPGxpIGFwcC1tZW51aXRlbSBbaXRlbV09XCJpdGVtXCIgW3Jvb3RdPVwidHJ1ZVwiPjwvbGk+XHJcbiAgICAgICAgICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudS1zZXBhcmF0b3JcIj48L2xpPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgPC91bD4gYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1lbnUge1xyXG4gICAgbW9kZWw6IE1lbnVJdGVtW10gPSBbXTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0hvbWUnLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnRGFzaGJvYXJkJywgaWNvbjogJ3BpIHBpLWZ3IHBpLWhvbWUnLCByb3V0ZXJMaW5rOiBbJy8nXSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdVc3VhcmlvJywgaWNvbjogJ3BpIHBpLWZ3IHBpLXVzZXInLCByb3V0ZXJMaW5rOiBbJy91c3VhcmlvJ10gfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1BhZ2VzJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1icmllZmNhc2UnLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogJy9wYWdlcycsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdMYW5kaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLWdsb2JlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyTGluazogWycvbGFuZGluZyddXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQXV0aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS11c2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJy9hdXRoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktc2lnbi1pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyTGluazogWycvYXV0aC9sb2dpbiddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS10aW1lcy1jaXJjbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckxpbms6IFsnL2F1dGgvZXJyb3InXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FjY2VzcyBEZW5pZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1sb2NrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJMaW5rOiBbJy9hdXRoL2FjY2VzcyddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDcnVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3BpIHBpLWZ3IHBpLXBlbmNpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckxpbms6IFsnL3BhZ2VzL2NydWQnXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ05vdCBGb3VuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdwaSBwaS1mdyBwaS1leGNsYW1hdGlvbi1jaXJjbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJMaW5rOiBbJy9wYWdlcy9ub3Rmb3VuZCddXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRW1wdHknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAncGkgcGktZncgcGktY2lyY2xlLW9mZicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckxpbms6IFsnL3BhZ2VzL2VtcHR5J11cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgY29tcHV0ZWQsIGluamVjdCwgaW5wdXQsIHNpZ25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJpcHBsZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJztcclxuaW1wb3J0IHsgTGF5b3V0U2VydmljZSB9IGZyb20gJ0AvYXBwL2xheW91dC9zZXJ2aWNlL2xheW91dC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ1thcHAtbWVudWl0ZW1dJyxcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgUmlwcGxlTW9kdWxlXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgQGlmIChyb290KCkgJiYgaXNWaXNpYmxlKCkpIHtcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dC1tZW51aXRlbS1yb290LXRleHRcIj57eyBpdGVtKCkubGFiZWwgfX08L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgQGlmICgoIWhhc1JvdXRlckxpbmsoKSB8fCBoYXNDaGlsZHJlbigpKSAmJiBpc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICA8YSBbYXR0ci5ocmVmXT1cIml0ZW0oKS51cmxcIiAoY2xpY2spPVwiaXRlbUNsaWNrKCRldmVudClcIiBbbmdDbGFzc109XCJpdGVtKCkuY2xhc3NcIiBbYXR0ci50YXJnZXRdPVwiaXRlbSgpLnRhcmdldFwiIHRhYmluZGV4PVwiMFwiIHBSaXBwbGU+XHJcbiAgICAgICAgICAgICAgICA8aSBbbmdDbGFzc109XCJpdGVtKCkuaWNvblwiIGNsYXNzPVwibGF5b3V0LW1lbnVpdGVtLWljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxheW91dC1tZW51aXRlbS10ZXh0XCI+e3sgaXRlbSgpLmxhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgQGlmIChoYXNDaGlsZHJlbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwaSBwaS1mdyBwaS1hbmdsZS1kb3duIGxheW91dC1zdWJtZW51LXRvZ2dsZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICB9XHJcbiAgICAgICAgQGlmIChoYXNSb3V0ZXJMaW5rKCkgJiYgIWhhc0NoaWxkcmVuKCkgJiYgaXNWaXNpYmxlKCkpIHtcclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJpdGVtQ2xpY2soJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJpdGVtKCkuY2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwiaXRlbSgpLnJvdXRlckxpbmtcIlxyXG4gICAgICAgICAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZS1yb3V0ZVwiXHJcbiAgICAgICAgICAgICAgICBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVwiaXRlbSgpLnJvdXRlckxpbmtBY3RpdmVPcHRpb25zIHx8IHsgcGF0aHM6ICdleGFjdCcsIHF1ZXJ5UGFyYW1zOiAnaWdub3JlZCcsIG1hdHJpeFBhcmFtczogJ2lnbm9yZWQnLCBmcmFnbWVudDogJ2lnbm9yZWQnIH1cIlxyXG4gICAgICAgICAgICAgICAgW2ZyYWdtZW50XT1cIml0ZW0oKS5mcmFnbWVudFwiXHJcbiAgICAgICAgICAgICAgICBbcXVlcnlQYXJhbXNIYW5kbGluZ109XCJpdGVtKCkucXVlcnlQYXJhbXNIYW5kbGluZ1wiXHJcbiAgICAgICAgICAgICAgICBbcHJlc2VydmVGcmFnbWVudF09XCJpdGVtKCkucHJlc2VydmVGcmFnbWVudFwiXHJcbiAgICAgICAgICAgICAgICBbc2tpcExvY2F0aW9uQ2hhbmdlXT1cIml0ZW0oKS5za2lwTG9jYXRpb25DaGFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgW3JlcGxhY2VVcmxdPVwiaXRlbSgpLnJlcGxhY2VVcmxcIlxyXG4gICAgICAgICAgICAgICAgW3N0YXRlXT1cIml0ZW0oKS5zdGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBbcXVlcnlQYXJhbXNdPVwiaXRlbSgpLnF1ZXJ5UGFyYW1zXCJcclxuICAgICAgICAgICAgICAgIFthdHRyLnRhcmdldF09XCJpdGVtKCkudGFyZ2V0XCJcclxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgICAgICBwUmlwcGxlXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIFtuZ0NsYXNzXT1cIml0ZW0oKS5pY29uXCIgY2xhc3M9XCJsYXlvdXQtbWVudWl0ZW0taWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGF5b3V0LW1lbnVpdGVtLXRleHRcIj57eyBpdGVtKCkubGFiZWwgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICBAaWYgKGhhc0NoaWxkcmVuKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBpIHBpLWZ3IHBpLWFuZ2xlLWRvd24gbGF5b3V0LXN1Ym1lbnUtdG9nZ2xlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIH1cclxuICAgICAgICBAaWYgKGhhc0NoaWxkcmVuKCkgJiYgaXNWaXNpYmxlKCkgJiYgKHJvb3QoKSB8fCBpc0FjdGl2ZSgpKSkge1xyXG4gICAgICAgICAgICA8dWwgW2FuaW1hdGUuZW50ZXJdPVwiaW5pdGlhbGl6ZWQoKSA/ICdwLXN1Ym1lbnUtZW50ZXInIDogbnVsbFwiIFthbmltYXRlLmxlYXZlXT1cIidwLXN1Ym1lbnUtbGVhdmUnXCIgW2NsYXNzLmxheW91dC1yb290LXN1Ym1lbnVsaXN0XT1cInJvb3QoKVwiPlxyXG4gICAgICAgICAgICAgICAgQGZvciAoY2hpbGQgb2YgaXRlbSgpLml0ZW1zOyB0cmFjayBjaGlsZD8ubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICA8bGkgYXBwLW1lbnVpdGVtIFtpdGVtXT1cImNoaWxkXCIgW3BhcmVudFBhdGhdPVwiZnVsbFBhdGgoKVwiIFtyb290XT1cImZhbHNlXCIgW2NsYXNzXT1cImNoaWxkWydiYWRnZUNsYXNzJ11cIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIH1cclxuICAgIGAsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tjbGFzcy5hY3RpdmUtbWVudWl0ZW1dJzogJ2lzQWN0aXZlKCknLFxyXG4gICAgICAgICdbY2xhc3MubGF5b3V0LXJvb3QtbWVudWl0ZW1dJzogJ3Jvb3QoKSdcclxuICAgIH0sXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgICAgICAgIC5wLXN1Ym1lbnUtZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBwLWFuaW1hdGUtc3VibWVudS1leHBhbmQgNDUwbXMgY3ViaWMtYmV6aWVyKDAuODYsIDAsIDAuMDcsIDEpIGZvcndhcmRzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucC1zdWJtZW51LWxlYXZlIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcC1hbmltYXRlLXN1Ym1lbnUtY29sbGFwc2UgNDUwbXMgY3ViaWMtYmV6aWVyKDAuODYsIDAsIDAuMDcsIDEpIGZvcndhcmRzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIHAtYW5pbWF0ZS1zdWJtZW51LWV4cGFuZCB7XHJcbiAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIHAtYW5pbWF0ZS1zdWJtZW51LWNvbGxhcHNlIHtcclxuICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1lbnVpdGVtIHtcclxuICAgIGxheW91dFNlcnZpY2UgPSBpbmplY3QoTGF5b3V0U2VydmljZSk7XHJcblxyXG4gICAgcm91dGVyID0gaW5qZWN0KFJvdXRlcik7XHJcblxyXG4gICAgaXRlbSA9IGlucHV0PGFueT4obnVsbCk7XHJcblxyXG4gICAgcm9vdCA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBwYXJlbnRQYXRoID0gaW5wdXQ8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gICAgaXNWaXNpYmxlID0gY29tcHV0ZWQoKCkgPT4gdGhpcy5pdGVtKCk/LnZpc2libGUgIT09IGZhbHNlKTtcclxuXHJcbiAgICBoYXNDaGlsZHJlbiA9IGNvbXB1dGVkKCgpID0+IHRoaXMuaXRlbSgpPy5pdGVtcyAmJiB0aGlzLml0ZW0oKT8uaXRlbXMubGVuZ3RoID4gMCk7XHJcblxyXG4gICAgaGFzUm91dGVyTGluayA9IGNvbXB1dGVkKCgpID0+ICEhdGhpcy5pdGVtKCk/LnJvdXRlckxpbmspO1xyXG5cclxuICAgIGZ1bGxQYXRoID0gY29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1QYXRoID0gdGhpcy5pdGVtKCk/LnBhdGg7XHJcbiAgICAgICAgaWYgKCFpdGVtUGF0aCkgcmV0dXJuIHRoaXMucGFyZW50UGF0aCgpO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50UGF0aCgpO1xyXG4gICAgICAgIGlmIChwYXJlbnQgJiYgIWl0ZW1QYXRoLnN0YXJ0c1dpdGgocGFyZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50ICsgaXRlbVBhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtUGF0aDtcclxuICAgIH0pO1xyXG5cclxuICAgIGlzQWN0aXZlID0gY29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVBhdGggPSB0aGlzLmxheW91dFNlcnZpY2UubGF5b3V0U3RhdGUoKS5hY3RpdmVQYXRoO1xyXG4gICAgICAgIGlmICh0aGlzLml0ZW0oKT8ucGF0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWN0aXZlUGF0aD8uc3RhcnRzV2l0aCh0aGlzLmZ1bGxQYXRoKCkgPz8gJycpID8/IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbml0aWFsaXplZCA9IHNpZ25hbDxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoZmlsdGVyKChldmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbSgpPy5yb3V0ZXJMaW5rKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZVN0YXRlRnJvbVJvdXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pdGVtKCk/LnJvdXRlckxpbmspIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVTdGF0ZUZyb21Sb3V0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQuc2V0KHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUFjdGl2ZVN0YXRlRnJvbVJvdXRlKCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW0oKTtcclxuICAgICAgICBpZiAoIWl0ZW0/LnJvdXRlckxpbmspIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgaXNSb3V0ZUFjdGl2ZSA9IHRoaXMucm91dGVyLmlzQWN0aXZlKGl0ZW0ucm91dGVyTGlua1swXSwge1xyXG4gICAgICAgICAgICBwYXRoczogJ2V4YWN0JyxcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6ICdpZ25vcmVkJyxcclxuICAgICAgICAgICAgbWF0cml4UGFyYW1zOiAnaWdub3JlZCcsXHJcbiAgICAgICAgICAgIGZyYWdtZW50OiAnaWdub3JlZCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGlzUm91dGVBY3RpdmUpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50UGF0aCA9IHRoaXMucGFyZW50UGF0aCgpO1xyXG4gICAgICAgICAgICBpZiAocGFyZW50UGF0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXlvdXRTZXJ2aWNlLmxheW91dFN0YXRlLnVwZGF0ZSgodmFsKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnZhbCxcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYXRoOiBwYXJlbnRQYXRoXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXRlbUNsaWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW0oKTtcclxuXHJcbiAgICAgICAgaWYgKGl0ZW0/LmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpdGVtPy5jb21tYW5kKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY29tbWFuZCh7IG9yaWdpbmFsRXZlbnQ6IGV2ZW50LCBpdGVtOiBpdGVtIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGFzQ2hpbGRyZW4oKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxheW91dFNlcnZpY2UubGF5b3V0U3RhdGUudXBkYXRlKCh2YWwpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udmFsLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhdGg6IHRoaXMucGFyZW50UGF0aCgpXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxheW91dFNlcnZpY2UubGF5b3V0U3RhdGUudXBkYXRlKCh2YWwpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udmFsLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhdGg6IHRoaXMuZnVsbFBhdGgoKSxcclxuICAgICAgICAgICAgICAgICAgICBtZW51SG92ZXJBY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF5b3V0U2VydmljZS5sYXlvdXRTdGF0ZS51cGRhdGUoKHZhbCkgPT4gKHtcclxuICAgICAgICAgICAgICAgIC4uLnZhbCxcclxuICAgICAgICAgICAgICAgIG92ZXJsYXlNZW51QWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN0YXRpY01lbnVNb2JpbGVBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlTWVudUFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtZW51SG92ZXJBY3RpdmU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBzZWxlY3RvcjogJ2FwcC1mb290ZXInLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibGF5b3V0LWZvb3RlclwiPlxyXG4gICAgICAgIFNBS0FJIGJ5XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcHJpbWVuZy5vcmdcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3M9XCJ0ZXh0LXByaW1hcnkgZm9udC1ib2xkIGhvdmVyOnVuZGVybGluZVwiPlByaW1lTkc8L2E+XHJcbiAgICA8L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBGb290ZXIge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNXaWRnZXQgfSBmcm9tICcuL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uc3dpZGdldCc7XHJcbmltcG9ydCB7IFN0YXRzV2lkZ2V0IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0YXRzd2lkZ2V0JztcclxuaW1wb3J0IHsgUmVjZW50U2FsZXNXaWRnZXQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVjZW50c2FsZXN3aWRnZXQnO1xyXG5pbXBvcnQgeyBCZXN0U2VsbGluZ1dpZGdldCB9IGZyb20gJy4vY29tcG9uZW50cy9iZXN0c2VsbGluZ3dpZGdldCc7XHJcbmltcG9ydCB7IFJldmVudWVTdHJlYW1XaWRnZXQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmV2ZW51ZXN0cmVhbXdpZGdldCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWRhc2hib2FyZCcsXHJcbiAgICBpbXBvcnRzOiBbU3RhdHNXaWRnZXQsIFJlY2VudFNhbGVzV2lkZ2V0LCBCZXN0U2VsbGluZ1dpZGdldCwgUmV2ZW51ZVN0cmVhbVdpZGdldCwgTm90aWZpY2F0aW9uc1dpZGdldF0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIGdyaWQtY29scy0xMiBnYXAtOFwiPlxyXG4gICAgICAgICAgICA8YXBwLXN0YXRzLXdpZGdldCBjbGFzcz1cImNvbnRlbnRzXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zcGFuLTEyIHhsOmNvbC1zcGFuLTZcIj5cclxuICAgICAgICAgICAgICAgIDxhcHAtcmVjZW50LXNhbGVzLXdpZGdldCAvPlxyXG4gICAgICAgICAgICAgICAgPGFwcC1iZXN0LXNlbGxpbmctd2lkZ2V0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNwYW4tMTIgeGw6Y29sLXNwYW4tNlwiPlxyXG4gICAgICAgICAgICAgICAgPGFwcC1yZXZlbnVlLXN0cmVhbS13aWRnZXQgLz5cclxuICAgICAgICAgICAgICAgIDxhcHAtbm90aWZpY2F0aW9ucy13aWRnZXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmQge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcclxuaW1wb3J0IHsgTWVudU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvbWVudSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBzZWxlY3RvcjogJ2FwcC1ub3RpZmljYXRpb25zLXdpZGdldCcsXHJcbiAgICBpbXBvcnRzOiBbQnV0dG9uTW9kdWxlLCBNZW51TW9kdWxlXSxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtc2VtaWJvbGQgdGV4dC14bFwiPk5vdGlmaWNhdGlvbnM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gcEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWNvbj1cInBpIHBpLWVsbGlwc2lzLXZcIiBjbGFzcz1cInAtYnV0dG9uLXJvdW5kZWQgcC1idXR0b24tdGV4dCBwLWJ1dHRvbi1wbGFpblwiIChjbGljayk9XCJtZW51LnRvZ2dsZSgkZXZlbnQpXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8cC1tZW51ICNtZW51IFtwb3B1cF09XCJ0cnVlXCIgW21vZGVsXT1cIml0ZW1zXCI+PC9wLW1lbnU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHRleHQtbXV0ZWQtY29sb3IgZm9udC1tZWRpdW0gbWItNFwiPlRPREFZPC9zcGFuPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cInAtMCBteC0wIG10LTAgbWItNiBsaXN0LW5vbmVcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgcHktMiBib3JkZXItYiBib3JkZXItc3VyZmFjZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTIgaC0xMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibHVlLTEwMCBkYXJrOmJnLWJsdWUtNDAwLzEwIHJvdW5kZWQtZnVsbCBtci00IHNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwaSBwaS1kb2xsYXIgdGV4dC14bCEgdGV4dC1ibHVlLTUwMFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTAgbGVhZGluZy1ub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgID5SaWNoYXJkIEpvbmVzXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1cmZhY2UtNzAwIGRhcms6dGV4dC1zdXJmYWNlLTEwMFwiPmhhcyBwdXJjaGFzZWQgYSBibHVlIHQtc2hpcnQgZm9yIDxzcGFuIGNsYXNzPVwidGV4dC1wcmltYXJ5IGZvbnQtYm9sZFwiPiQ3OS4wMDwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHB5LTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEyIGgtMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctb3JhbmdlLTEwMCBkYXJrOmJnLW9yYW5nZS00MDAvMTAgcm91bmRlZC1mdWxsIG1yLTQgc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBpIHBpLWRvd25sb2FkIHRleHQteGwhIHRleHQtb3JhbmdlLTUwMFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1cmZhY2UtNzAwIGRhcms6dGV4dC1zdXJmYWNlLTEwMCBsZWFkaW5nLW5vcm1hbFwiPllvdXIgcmVxdWVzdCBmb3Igd2l0aGRyYXdhbCBvZiA8c3BhbiBjbGFzcz1cInRleHQtcHJpbWFyeSBmb250LWJvbGRcIj4kMjUwMC4wMDwvc3Bhbj4gaGFzIGJlZW4gaW5pdGlhdGVkLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHRleHQtbXV0ZWQtY29sb3IgZm9udC1tZWRpdW0gbWItNFwiPllFU1RFUkRBWTwvc3Bhbj5cclxuICAgICAgICA8dWwgY2xhc3M9XCJwLTAgbS0wIGxpc3Qtbm9uZSBtYi02XCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHB5LTIgYm9yZGVyLWIgYm9yZGVyLXN1cmZhY2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEyIGgtMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmx1ZS0xMDAgZGFyazpiZy1ibHVlLTQwMC8xMCByb3VuZGVkLWZ1bGwgbXItNCBzaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGkgcGktZG9sbGFyIHRleHQteGwhIHRleHQtYmx1ZS01MDBcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdXJmYWNlLTkwMCBkYXJrOnRleHQtc3VyZmFjZS0wIGxlYWRpbmctbm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICA+S2V5c2VyIFdpY2tcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc3VyZmFjZS03MDAgZGFyazp0ZXh0LXN1cmZhY2UtMTAwXCI+aGFzIHB1cmNoYXNlZCBhIGJsYWNrIGphY2tldCBmb3IgPHNwYW4gY2xhc3M9XCJ0ZXh0LXByaW1hcnkgZm9udC1ib2xkXCI+JDU5LjAwPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgcHktMiBib3JkZXItYiBib3JkZXItc3VyZmFjZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTIgaC0xMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1waW5rLTEwMCBkYXJrOmJnLXBpbmstNDAwLzEwIHJvdW5kZWQtZnVsbCBtci00IHNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwaSBwaS1xdWVzdGlvbiB0ZXh0LXhsISB0ZXh0LXBpbmstNTAwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc3VyZmFjZS05MDAgZGFyazp0ZXh0LXN1cmZhY2UtMCBsZWFkaW5nLW5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPkphbmUgRGF2aXNcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc3VyZmFjZS03MDAgZGFyazp0ZXh0LXN1cmZhY2UtMTAwXCI+aGFzIHBvc3RlZCBhIG5ldyBxdWVzdGlvbnMgYWJvdXQgeW91ciBwcm9kdWN0Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdGV4dC1tdXRlZC1jb2xvciBmb250LW1lZGl1bSBtYi00XCI+TEFTVCBXRUVLPC9zcGFuPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cInAtMCBtLTAgbGlzdC1ub25lXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHB5LTIgYm9yZGVyLWIgYm9yZGVyLXN1cmZhY2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEyIGgtMTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JlZW4tMTAwIGRhcms6YmctZ3JlZW4tNDAwLzEwIHJvdW5kZWQtZnVsbCBtci00IHNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwaSBwaS1hcnJvdy11cCB0ZXh0LXhsISB0ZXh0LWdyZWVuLTUwMFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTAgbGVhZGluZy1ub3JtYWxcIj5Zb3VyIHJldmVudWUgaGFzIGluY3JlYXNlZCBieSA8c3BhbiBjbGFzcz1cInRleHQtcHJpbWFyeSBmb250LWJvbGRcIj4lMjU8L3NwYW4+Ljwvc3Bhbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgcHktMiBib3JkZXItYiBib3JkZXItc3VyZmFjZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTIgaC0xMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1wdXJwbGUtMTAwIGRhcms6YmctcHVycGxlLTQwMC8xMCByb3VuZGVkLWZ1bGwgbXItNCBzaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGkgcGktaGVhcnQgdGV4dC14bCEgdGV4dC1wdXJwbGUtNTAwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc3VyZmFjZS05MDAgZGFyazp0ZXh0LXN1cmZhY2UtMCBsZWFkaW5nLW5vcm1hbFwiPjxzcGFuIGNsYXNzPVwidGV4dC1wcmltYXJ5IGZvbnQtYm9sZFwiPjEyPC9zcGFuPiB1c2VycyBoYXZlIGFkZGVkIHlvdXIgcHJvZHVjdHMgdG8gdGhlaXIgd2lzaGxpc3QuPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zV2lkZ2V0IHtcclxuICAgIGl0ZW1zID0gW1xyXG4gICAgICAgIHsgbGFiZWw6ICdBZGQgTmV3JywgaWNvbjogJ3BpIHBpLWZ3IHBpLXBsdXMnIH0sXHJcbiAgICAgICAgeyBsYWJlbDogJ1JlbW92ZScsIGljb246ICdwaSBwaS1mdyBwaS10cmFzaCcgfVxyXG4gICAgXTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIHNlbGVjdG9yOiAnYXBwLXN0YXRzLXdpZGdldCcsXHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTYgeGw6Y29sLXNwYW4tM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdGV4dC1tdXRlZC1jb2xvciBmb250LW1lZGl1bSBtYi00XCI+T3JkZXJzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdXJmYWNlLTkwMCBkYXJrOnRleHQtc3VyZmFjZS0wIGZvbnQtbWVkaXVtIHRleHQteGxcIj4xNTI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmx1ZS0xMDAgZGFyazpiZy1ibHVlLTQwMC8xMCByb3VuZGVkLWJvcmRlclwiIHN0eWxlPVwid2lkdGg6IDIuNXJlbTsgaGVpZ2h0OiAyLjVyZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwaSBwaS1zaG9wcGluZy1jYXJ0IHRleHQtYmx1ZS01MDAgdGV4dC14bCFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1wcmltYXJ5IGZvbnQtbWVkaXVtXCI+MjQgbmV3IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1tdXRlZC1jb2xvclwiPnNpbmNlIGxhc3QgdmlzaXQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc3Bhbi0xMiBsZzpjb2wtc3Bhbi02IHhsOmNvbC1zcGFuLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHRleHQtbXV0ZWQtY29sb3IgZm9udC1tZWRpdW0gbWItNFwiPlJldmVudWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTAgZm9udC1tZWRpdW0gdGV4dC14bFwiPiQyLjEwMDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1vcmFuZ2UtMTAwIGRhcms6Ymctb3JhbmdlLTQwMC8xMCByb3VuZGVkLWJvcmRlclwiIHN0eWxlPVwid2lkdGg6IDIuNXJlbTsgaGVpZ2h0OiAyLjVyZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwaSBwaS1kb2xsYXIgdGV4dC1vcmFuZ2UtNTAwIHRleHQteGwhXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtcHJpbWFyeSBmb250LW1lZGl1bVwiPiU1MisgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LW11dGVkLWNvbG9yXCI+c2luY2UgbGFzdCB3ZWVrPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tNiB4bDpjb2wtc3Bhbi0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayB0ZXh0LW11dGVkLWNvbG9yIGZvbnQtbWVkaXVtIG1iLTRcIj5DdXN0b21lcnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTAgZm9udC1tZWRpdW0gdGV4dC14bFwiPjI4NDQxPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWN5YW4tMTAwIGRhcms6YmctY3lhbi00MDAvMTAgcm91bmRlZC1ib3JkZXJcIiBzdHlsZT1cIndpZHRoOiAyLjVyZW07IGhlaWdodDogMi41cmVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGkgcGktdXNlcnMgdGV4dC1jeWFuLTUwMCB0ZXh0LXhsIVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXByaW1hcnkgZm9udC1tZWRpdW1cIj41MjAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LW11dGVkLWNvbG9yXCI+bmV3bHkgcmVnaXN0ZXJlZDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTYgeGw6Y29sLXNwYW4tM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdGV4dC1tdXRlZC1jb2xvciBmb250LW1lZGl1bSBtYi00XCI+Q29tbWVudHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTAgZm9udC1tZWRpdW0gdGV4dC14bFwiPjE1MiBVbnJlYWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctcHVycGxlLTEwMCBkYXJrOmJnLXB1cnBsZS00MDAvMTAgcm91bmRlZC1ib3JkZXJcIiBzdHlsZT1cIndpZHRoOiAyLjVyZW07IGhlaWdodDogMi41cmVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGkgcGktY29tbWVudCB0ZXh0LXB1cnBsZS01MDAgdGV4dC14bCFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1wcmltYXJ5IGZvbnQtbWVkaXVtXCI+ODUgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LW11dGVkLWNvbG9yXCI+cmVzcG9uZGVkPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGF0c1dpZGdldCB7fVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGluamVjdCwgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJpcHBsZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJztcclxuaW1wb3J0IHsgVGFibGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3RhYmxlJztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBQcm9kdWN0LCBQcm9kdWN0U2VydmljZSB9IGZyb20gJ0AvYXBwL3BhZ2VzL3NlcnZpY2UvcHJvZHVjdC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIHNlbGVjdG9yOiAnYXBwLXJlY2VudC1zYWxlcy13aWRnZXQnLFxyXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVGFibGVNb2R1bGUsIEJ1dHRvbk1vZHVsZSwgUmlwcGxlTW9kdWxlXSxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNhcmQgbWItOCFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXhsIG1iLTRcIj5SZWNlbnQgU2FsZXM8L2Rpdj5cclxuICAgICAgICA8cC10YWJsZSBbdmFsdWVdPVwicHJvZHVjdHMoKVwiIFtwYWdpbmF0b3JdPVwidHJ1ZVwiIFtyb3dzXT1cIjVcIiByZXNwb25zaXZlTGF5b3V0PVwic2Nyb2xsXCI+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5JbWFnZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHBTb3J0YWJsZUNvbHVtbj1cIm5hbWVcIj5OYW1lIDxwLXNvcnRJY29uIGZpZWxkPVwibmFtZVwiPjwvcC1zb3J0SWNvbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBwU29ydGFibGVDb2x1bW49XCJwcmljZVwiPlByaWNlIDxwLXNvcnRJY29uIGZpZWxkPVwicHJpY2VcIj48L3Atc29ydEljb24+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VmlldzwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI2JvZHkgbGV0LXByb2R1Y3Q+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwid2lkdGg6IDE1JTsgbWluLXdpZHRoOiA1cmVtO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcHJpbWVmYWNlcy5vcmcvY2RuL3ByaW1ldnVlL2ltYWdlcy9wcm9kdWN0L3t7IHByb2R1Y3QuaW1hZ2UgfX1cIiBjbGFzcz1cInNoYWRvdy1sZ1wiIGFsdD1cInt7IHByb2R1Y3QubmFtZSB9fVwiIHdpZHRoPVwiNTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwid2lkdGg6IDM1JTsgbWluLXdpZHRoOiA3cmVtO1wiPnt7IHByb2R1Y3QubmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwid2lkdGg6IDM1JTsgbWluLXdpZHRoOiA4cmVtO1wiPnt7IHByb2R1Y3QucHJpY2UgfCBjdXJyZW5jeTogJ1VTRCcgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cIndpZHRoOiAxNSU7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gcEJ1dHRvbiBwUmlwcGxlIHR5cGU9XCJidXR0b25cIiBpY29uPVwicGkgcGktc2VhcmNoXCIgY2xhc3M9XCJwLWJ1dHRvbiBwLWNvbXBvbmVudCBwLWJ1dHRvbi10ZXh0IHAtYnV0dG9uLWljb24tb25seVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvcC10YWJsZT5cclxuICAgIDwvZGl2PmAsXHJcbiAgICBwcm92aWRlcnM6IFtQcm9kdWN0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlY2VudFNhbGVzV2lkZ2V0IHtcclxuICAgIHByb2R1Y3RzID0gc2lnbmFsPFByb2R1Y3RbXT4oW10pO1xyXG5cclxuICAgIHByb2R1Y3RTZXJ2aWNlID0gaW5qZWN0KFByb2R1Y3RTZXJ2aWNlKTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RzU21hbGwoKS50aGVuKChkYXRhKSA9PiAodGhpcy5wcm9kdWN0cy5zZXQoZGF0YSkpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbnRlcmZhY2UgSW52ZW50b3J5U3RhdHVzIHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3Qge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBjb2RlPzogc3RyaW5nO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gICAgcHJpY2U/OiBudW1iZXI7XHJcbiAgICBxdWFudGl0eT86IG51bWJlcjtcclxuICAgIGludmVudG9yeVN0YXR1cz86IHN0cmluZztcclxuICAgIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gICAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgICByYXRpbmc/OiBudW1iZXI7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZXJ2aWNlIHtcclxuICAgIGdldFByb2R1Y3RzRGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMDAnLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJ2YyMzBmaDBnMycsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnQmFtYm9vIFdhdGNoJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvZHVjdCBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2JhbWJvby13YXRjaC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDY1LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdBY2Nlc3NvcmllcycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogMjQsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlTdGF0dXM6ICdJTlNUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogNVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMDEnLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJ252a2xhbDQzMycsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnQmxhY2sgV2F0Y2gnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnYmxhY2std2F0Y2guanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA3MixcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQWNjZXNzb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDYxLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnSU5TVE9DSycsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IDRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxMDAyJyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICd6ejIxY3ozYzEnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0JsdWUgQmFuZCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdibHVlLWJhbmQuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA3OSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnRml0bmVzcycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogMixcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0xPV1NUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogM1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMDMnLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJzI0NHdnZXJnMicsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnQmx1ZSBULVNoaXJ0JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvZHVjdCBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2JsdWUtdC1zaGlydC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDI5LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdDbG90aGluZycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogMjUsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlTdGF0dXM6ICdJTlNUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogNVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMDQnLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJ2g0NTZ3ZXI1MycsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnQnJhY2VsZXQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnYnJhY2VsZXQuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAxNSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQWNjZXNzb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDczLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnSU5TVE9DSycsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IDRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxMDA1JyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICdhdjIyMzFmd2cnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Jyb3duIFB1cnNlJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvZHVjdCBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2Jyb3duLXB1cnNlLmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogMTIwLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdBY2Nlc3NvcmllcycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogMCxcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ09VVE9GU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiA0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAwNicsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAnYmliMzZwZnZtJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdDaGFrcmEgQnJhY2VsZXQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnY2hha3JhLWJyYWNlbGV0LmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogMzIsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0FjY2Vzc29yaWVzJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiA1LFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnTE9XU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiAzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAwNycsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAnbWJ2amtnaXA1JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdHYWxheHkgRWFycmluZ3MnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnZ2FsYXh5LWVhcnJpbmdzLmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogMzQsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0FjY2Vzc29yaWVzJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAyMyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0lOU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiA1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAwOCcsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAndmJiMTI0YnRyJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdHYW1lIENvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnZ2FtZS1jb250cm9sbGVyLmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogOTksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0VsZWN0cm9uaWNzJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAyLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnTE9XU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiA0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAwOScsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAnY20yMzBmMDMyJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdHYW1pbmcgU2V0JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvZHVjdCBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2dhbWluZy1zZXQuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAyOTksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0VsZWN0cm9uaWNzJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiA2MyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0lOU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiAzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAxMCcsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAncGxiMzQyMzR2JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdHb2xkIFBob25lIENhc2UnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnZ29sZC1waG9uZS1jYXNlLmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogMjQsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0FjY2Vzc29yaWVzJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnT1VUT0ZTVE9DSycsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IDRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxMDExJyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICc0OTIwbm5jMmQnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0dyZWVuIEVhcmJ1ZHMnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnZ3JlZW4tZWFyYnVkcy5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDg5LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdFbGVjdHJvbmljcycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogMjMsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlTdGF0dXM6ICdJTlNUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogNFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMTInLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJzI1MHZtMjNjYycsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnR3JlZW4gVC1TaGlydCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdncmVlbi10LXNoaXJ0LmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogNDksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0Nsb3RoaW5nJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiA3NCxcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0lOU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiA1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAxMycsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAnZmxkc21uMzFiJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdHcmV5IFQtU2hpcnQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnZ3JleS10LXNoaXJ0LmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogNDgsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0Nsb3RoaW5nJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnT1VUT0ZTVE9DSycsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IDNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxMDE0JyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICd3YWFzMXgyYXMnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0hlYWRwaG9uZXMnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnaGVhZHBob25lcy5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDE3NSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnRWxlY3Ryb25pY3MnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDgsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlTdGF0dXM6ICdMT1dTVE9DSycsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IDVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxMDE1JyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICd2YjM0YnRiZzUnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0xpZ2h0IEdyZWVuIFQtU2hpcnQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnbGlnaHQtZ3JlZW4tdC1zaGlydC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDQ5LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdDbG90aGluZycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogMzQsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlTdGF0dXM6ICdJTlNUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogNFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMTYnLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJ2s4bDZqNThqbCcsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTGltZSBCYW5kJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvZHVjdCBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2xpbWUtYmFuZC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDc5LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdGaXRuZXNzJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxMixcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0lOU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiAzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAxNycsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAndjQzNW5uODVuJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdNaW5pIFNwZWFrZXJzJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvZHVjdCBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ21pbmktc3BlYWtlcnMuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA4NSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQ2xvdGhpbmcnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDQyLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnSU5TVE9DSycsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IDRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxMDE4JyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICcwOXp4OWMwemMnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BhaW50ZWQgUGhvbmUgQ2FzZScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdwYWludGVkLXBob25lLWNhc2UuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA1NixcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQWNjZXNzb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDQxLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnSU5TVE9DSycsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IDVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxMDE5JyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICdtbmI1bWIybTUnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BpbmsgQmFuZCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdwaW5rLWJhbmQuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA3OSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnRml0bmVzcycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogNjMsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlTdGF0dXM6ICdJTlNUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogNFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMjAnLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJ3IyM2Z3ZjJ3MycsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUGluayBQdXJzZScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdwaW5rLXB1cnNlLmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogMTEwLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdBY2Nlc3NvcmllcycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogMCxcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ09VVE9GU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiA0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAyMScsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAncHhwemN6bzIzJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdQdXJwbGUgQmFuZCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdwdXJwbGUtYmFuZC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDc5LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdGaXRuZXNzJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiA2LFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnTE9XU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiAzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAyMicsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAnMmM0MmNiNWNiJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdQdXJwbGUgR2Vtc3RvbmUgTmVja2xhY2UnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAncHVycGxlLWdlbXN0b25lLW5lY2tsYWNlLmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogNDUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0FjY2Vzc29yaWVzJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiA2MixcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0lOU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiA0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAyMycsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAnNWs0M2trazIzJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdQdXJwbGUgVC1TaGlydCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdwdXJwbGUtdC1zaGlydC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDQ5LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdDbG90aGluZycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogMixcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0xPV1NUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogNVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMjQnLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJ2xtMnRueTJrNCcsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnU2hvZXMnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnc2hvZXMuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA2NCxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQ2xvdGhpbmcnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlTdGF0dXM6ICdJTlNUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogNFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMjUnLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJ25ibTVtdjQ1bicsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnU25lYWtlcnMnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnc25lYWtlcnMuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA3OCxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQ2xvdGhpbmcnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDUyLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnSU5TVE9DSycsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IDRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxMDI2JyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICd6eDIzemM0MmMnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1RlYWwgVC1TaGlydCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICd0ZWFsLXQtc2hpcnQuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA0OSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQ2xvdGhpbmcnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDMsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlTdGF0dXM6ICdMT1dTVE9DSycsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IDNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxMDI3JyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICdhY3Z4ODcyZ2MnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1llbGxvdyBFYXJidWRzJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvZHVjdCBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ3llbGxvdy1lYXJidWRzLmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogODksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0VsZWN0cm9uaWNzJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAzNSxcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0lOU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiAzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAyOCcsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAndHgxMjVjazQyJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdZb2dhIE1hdCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICd5b2dhLW1hdC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDIwLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdGaXRuZXNzJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxNSxcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0lOU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiA1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAyOScsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAnZ3d1YnkzNDV2JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdZb2dhIFNldCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICd5b2dhLXNldC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDIwLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdGaXRuZXNzJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAyNSxcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0lOU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiA4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2R1Y3RzV2l0aE9yZGVyc0RhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxMDAwJyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICdmMjMwZmgwZzMnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0JhbWJvbyBXYXRjaCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdiYW1ib28td2F0Y2guanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA2NSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQWNjZXNzb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDI0LFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnSU5TVE9DSycsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgICBvcmRlcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnMTAwMC0wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENvZGU6ICdmMjMwZmgwZzMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMjAyMC0wOS0xMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogNjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ0RhdmlkIEphbWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnUEVORElORydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDAwLTEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ2YyMzBmaDBnMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTA1LTE0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAxMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ0xlb24gUm9kcmlndWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnREVMSVZFUkVEJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJzEwMDAtMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiAnZjIzMGZoMGczJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzIwMTktMDEtMDQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDY1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXI6ICdKdWFuIEFsZWphbmRybycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ1JFVFVSTkVEJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJzEwMDAtMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiAnZjIzMGZoMGczJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzIwMjAtMDktMTMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDE5NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyOiAnQ2xhaXJlIE1vcnJvdycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0NBTkNFTExFRCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAwMScsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAnbnZrbGFsNDMzJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdCbGFjayBXYXRjaCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdibGFjay13YXRjaC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDcyLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdBY2Nlc3NvcmllcycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogNjEsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlTdGF0dXM6ICdJTlNUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogNCxcclxuICAgICAgICAgICAgICAgIG9yZGVyczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDAxLTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ252a2xhbDQzMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTA1LTE0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiA3MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyOiAnTWFpc2hhIEplZmZlcnNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0RFTElWRVJFRCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDAxLTEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ252a2xhbDQzMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTAyLTI4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAxNDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ09jdGF2aWEgTXVyaWxsbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ1BFTkRJTkcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMDInLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJ3p6MjFjejNjMScsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnQmx1ZSBCYW5kJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvZHVjdCBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2JsdWUtYmFuZC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDc5LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdGaXRuZXNzJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAyLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnTE9XU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiAzLFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJzEwMDItMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiAnenoyMWN6M2MxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzIwMjAtMDctMDUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDc5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXI6ICdTdGFjZXkgTGVqYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0RFTElWRVJFRCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDAyLTEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ3p6MjFjejNjMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTAyLTA2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiA3OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyOiAnQXNobGV5IFdpY2tlbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdERUxJVkVSRUQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMDMnLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJzI0NHdnZXJnMicsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnQmx1ZSBULVNoaXJ0JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvZHVjdCBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2JsdWUtdC1zaGlydC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDI5LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdDbG90aGluZycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogMjUsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlTdGF0dXM6ICdJTlNUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogNSxcclxuICAgICAgICAgICAgICAgIG9yZGVyczogW11cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxMDA0JyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICdoNDU2d2VyNTMnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0JyYWNlbGV0JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvZHVjdCBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2JyYWNlbGV0LmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogMTUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0FjY2Vzc29yaWVzJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiA3MyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0lOU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiA0LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJzEwMDQtMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiAnaDQ1NndlcjUzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzIwMjAtMDktMDUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDYwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXI6ICdNYXl1bWkgTWlzYWtpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnUEVORElORydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDA0LTEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ2g0NTZ3ZXI1MycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDE5LTA0LTE2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyOiAnRnJhbmNlc2NvIFNhbHZhdG9yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0RFTElWRVJFRCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAwNScsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAnYXYyMjMxZndnJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdCcm93biBQdXJzZScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdicm93bi1wdXJzZS5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDEyMCxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQWNjZXNzb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlTdGF0dXM6ICdPVVRPRlNUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogNCxcclxuICAgICAgICAgICAgICAgIG9yZGVyczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDA1LTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ2F2MjIzMWZ3ZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTAxLTI1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAxMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ0lzYWJlbCBTaW5jbGFpcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ1JFVFVSTkVEJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJzEwMDUtMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiAnYXYyMjMxZndnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzIwMTktMDMtMTInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDI0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyOiAnTGlvbmVsIENsaWZmb3JkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnREVMSVZFUkVEJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJzEwMDUtMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiAnYXYyMjMxZndnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzIwMTktMDUtMDUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDEyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyOiAnQ29keSBDaGF2ZXonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdERUxJVkVSRUQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMDYnLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJ2JpYjM2cGZ2bScsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnQ2hha3JhIEJyYWNlbGV0JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvZHVjdCBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2NoYWtyYS1icmFjZWxldC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDMyLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdBY2Nlc3NvcmllcycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogNSxcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0xPV1NUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogMyxcclxuICAgICAgICAgICAgICAgIG9yZGVyczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDA2LTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ2JpYjM2cGZ2bScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTAyLTI0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAzMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyOiAnQXJ2aW4gRGFyY2knLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdERUxJVkVSRUQnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnMTAwNi0xJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENvZGU6ICdiaWIzNnBmdm0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMjAyMC0wMS0xNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogNjQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ0l6enkgSm9uZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdQRU5ESU5HJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxMDA3JyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICdtYnZqa2dpcDUnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0dhbGF4eSBFYXJyaW5ncycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdnYWxheHktZWFycmluZ3MuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiAzNCxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQWNjZXNzb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDIzLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnSU5TVE9DSycsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgICBvcmRlcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnMTAwNy0wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENvZGU6ICdtYnZqa2dpcDUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMjAyMC0wNi0xOScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogMzQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ0plbm5pZmVyIFNtaXRoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnREVMSVZFUkVEJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxMDA4JyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICd2YmIxMjRidHInLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0dhbWUgQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdnYW1lLWNvbnRyb2xsZXIuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA5OSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnRWxlY3Ryb25pY3MnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDIsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlTdGF0dXM6ICdMT1dTVE9DSycsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IDQsXHJcbiAgICAgICAgICAgICAgICBvcmRlcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnMTAwOC0wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENvZGU6ICd2YmIxMjRidHInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMjAyMC0wMS0wNScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogOTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ0plYW5mcmFuY29pcyBEYXZpZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0RFTElWRVJFRCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDA4LTEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ3ZiYjEyNGJ0cicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTAxLTE5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAxOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ0l2YXIgR3JlZW53b29kJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnUkVUVVJORUQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMDknLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJ2NtMjMwZjAzMicsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnR2FtaW5nIFNldCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdnYW1pbmctc2V0LmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogMjk5LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdFbGVjdHJvbmljcycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogNjMsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlTdGF0dXM6ICdJTlNUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogMyxcclxuICAgICAgICAgICAgICAgIG9yZGVyczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDA5LTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ2NtMjMwZjAzMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTA2LTI0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAyOTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ0thZGVlbSBNdWp0YWJhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnUEVORElORydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDA5LTEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ2NtMjMwZjAzMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTA1LTExJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAyOTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ0FzaGxleSBXaWNrZW5zJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnREVMSVZFUkVEJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJzEwMDktMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiAnY20yMzBmMDMyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzIwMTktMDItMDcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDI5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyOiAnSnVsaWUgSm9obnNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0RFTElWRVJFRCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDA5LTMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ2NtMjMwZjAzMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTA0LTI2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAyOTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ1RvbnkgQ29zdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdDQU5DRUxMRUQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMTAnLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJ3BsYjM0MjM0dicsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnR29sZCBQaG9uZSBDYXNlJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvZHVjdCBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2dvbGQtcGhvbmUtY2FzZS5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDI0LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdBY2Nlc3NvcmllcycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogMCxcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ09VVE9GU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiA0LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJzEwMTAtMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiAncGxiMzQyMzR2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzIwMjAtMDItMDQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDI0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXI6ICdKYW1lcyBCdXR0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnREVMSVZFUkVEJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJzEwMTAtMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiAncGxiMzQyMzR2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzIwMjAtMDUtMDUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDQ4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXI6ICdKb3NlcGhpbmUgRGFyYWtqeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0RFTElWRVJFRCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAxMScsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAnNDkyMG5uYzJkJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdHcmVlbiBFYXJidWRzJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvZHVjdCBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2dyZWVuLWVhcmJ1ZHMuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA4OSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnRWxlY3Ryb25pY3MnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDIzLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnSU5TVE9DSycsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IDQsXHJcbiAgICAgICAgICAgICAgICBvcmRlcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnMTAxMS0wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENvZGU6ICc0OTIwbm5jMmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMjAyMC0wNi0wMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogODksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ0FydCBWZW5lcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdERUxJVkVSRUQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMTInLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJzI1MHZtMjNjYycsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnR3JlZW4gVC1TaGlydCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdncmVlbi10LXNoaXJ0LmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogNDksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0Nsb3RoaW5nJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiA3NCxcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0lOU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiA1LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJzEwMTItMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiAnMjUwdm0yM2NjJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzIwMjAtMDItMDUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDQ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXI6ICdMZW5uYSBQYXByb2NraScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0RFTElWRVJFRCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDEyLTEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJzI1MHZtMjNjYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTAyLTE1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiA0OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyOiAnRG9uZXR0ZSBGb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdQRU5ESU5HJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxMDEzJyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICdmbGRzbW4zMWInLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0dyZXkgVC1TaGlydCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdncmV5LXQtc2hpcnQuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA0OCxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQ2xvdGhpbmcnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlTdGF0dXM6ICdPVVRPRlNUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogMyxcclxuICAgICAgICAgICAgICAgIG9yZGVyczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDEzLTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ2ZsZHNtbjMxYicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTA0LTAxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiA0OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyOiAnU2ltb25hIE1vcmFzY2EnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdERUxJVkVSRUQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMTQnLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJ3dhYXMxeDJhcycsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnSGVhZHBob25lcycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdoZWFkcGhvbmVzLmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogMTc1LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdFbGVjdHJvbmljcycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogOCxcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0xPV1NUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogNSxcclxuICAgICAgICAgICAgICAgIG9yZGVyczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDE0LTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ3dhYXMxeDJhcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTA1LTE1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAxNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ0xlbm5hIFBhcHJvY2tpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnREVMSVZFUkVEJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJzEwMTQtMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiAnd2FhczF4MmFzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzIwMjAtMDEtMDInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDE3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyOiAnRG9uZXR0ZSBGb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdDQU5DRUxMRUQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMTUnLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJ3ZiMzRidGJnNScsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTGlnaHQgR3JlZW4gVC1TaGlydCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdsaWdodC1ncmVlbi10LXNoaXJ0LmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogNDksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0Nsb3RoaW5nJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAzNCxcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0lOU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiA0LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJzEwMTUtMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiAndmIzNGJ0Ymc1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzIwMjAtMDctMDInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDk4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXI6ICdNaXRzdWUgVG9sbG5lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0RFTElWRVJFRCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAxNicsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAnazhsNmo1OGpsJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdMaW1lIEJhbmQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnbGltZS1iYW5kLmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogNzksXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0ZpdG5lc3MnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEyLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnSU5TVE9DSycsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IDMsXHJcbiAgICAgICAgICAgICAgICBvcmRlcnM6IFtdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAxNycsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAndjQzNW5uODVuJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdNaW5pIFNwZWFrZXJzJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvZHVjdCBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ21pbmktc3BlYWtlcnMuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA4NSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQ2xvdGhpbmcnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDQyLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnSU5TVE9DSycsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IDQsXHJcbiAgICAgICAgICAgICAgICBvcmRlcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnMTAxNy0wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENvZGU6ICd2NDM1bm44NW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMjAyMC0wNy0xMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogODUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ01pbm5hIEFtaWdvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0RFTElWRVJFRCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAxOCcsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAnMDl6eDljMHpjJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdQYWludGVkIFBob25lIENhc2UnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAncGFpbnRlZC1waG9uZS1jYXNlLmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogNTYsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0FjY2Vzc29yaWVzJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiA0MSxcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0lOU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiA1LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJzEwMTgtMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiAnMDl6eDljMHpjJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzIwMjAtMDctMDEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDU2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXI6ICdBYmVsIE1hY2xlYWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdERUxJVkVSRUQnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnMTAxOC0xJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENvZGU6ICcwOXp4OWMwemMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMjAyMC0wNS0wMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogNTYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ01pbm5hIEFtaWdvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ1JFVFVSTkVEJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxMDE5JyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICdtbmI1bWIybTUnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BpbmsgQmFuZCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdwaW5rLWJhbmQuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA3OSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnRml0bmVzcycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogNjMsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlTdGF0dXM6ICdJTlNUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogNCxcclxuICAgICAgICAgICAgICAgIG9yZGVyczogW11cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxMDIwJyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICdyMjNmd2YydzMnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BpbmsgUHVyc2UnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAncGluay1wdXJzZS5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDExMCxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnQWNjZXNzb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlTdGF0dXM6ICdPVVRPRlNUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogNCxcclxuICAgICAgICAgICAgICAgIG9yZGVyczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDIwLTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ3IyM2Z3ZjJ3MycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTA1LTI5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAxMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ0tpbGV5IENhbGRhcmVyYScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0RFTElWRVJFRCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDIwLTEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ3IyM2Z3ZjJ3MycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTAyLTExJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAyMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ0dyYWNpZWxhIFJ1dGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdERUxJVkVSRUQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMjEnLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJ3B4cHpjem8yMycsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUHVycGxlIEJhbmQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAncHVycGxlLWJhbmQuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA3OSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnRml0bmVzcycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogNixcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0xPV1NUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogMyxcclxuICAgICAgICAgICAgICAgIG9yZGVyczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDIxLTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ3B4cHpjem8yMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTAyLTAyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiA3OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyOiAnQ2FtbXkgQWxiYXJlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0RFTElWRVJFRCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAyMicsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAnMmM0MmNiNWNiJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdQdXJwbGUgR2Vtc3RvbmUgTmVja2xhY2UnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAncHVycGxlLWdlbXN0b25lLW5lY2tsYWNlLmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogNDUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0FjY2Vzc29yaWVzJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiA2MixcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0lOU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiA0LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJzEwMjItMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiAnMmM0MmNiNWNiJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzIwMjAtMDYtMjknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDQ1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXI6ICdNYXR0aWUgUG9xdWV0dGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdERUxJVkVSRUQnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnMTAyMi0xJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENvZGU6ICcyYzQyY2I1Y2InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMjAyMC0wMi0xMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogMTM1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXI6ICdNZWFnaGFuIEdhcnVmaScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0RFTElWRVJFRCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAyMycsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAnNWs0M2trazIzJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdQdXJwbGUgVC1TaGlydCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdwdXJwbGUtdC1zaGlydC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDQ5LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdDbG90aGluZycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogMixcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0xPV1NUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogNSxcclxuICAgICAgICAgICAgICAgIG9yZGVyczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDIzLTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJzVrNDNra2syMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTA0LTE1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiA0OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyOiAnR2xhZHlzIFJpbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ1JFVFVSTkVEJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxMDI0JyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICdsbTJ0bnkyazQnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1Nob2VzJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvZHVjdCBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ3Nob2VzLmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogNjQsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0Nsb3RoaW5nJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnSU5TVE9DSycsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IDQsXHJcbiAgICAgICAgICAgICAgICBvcmRlcnM6IFtdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAyNScsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAnbmJtNW12NDVuJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdTbmVha2VycycsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdzbmVha2Vycy5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDc4LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdDbG90aGluZycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogNTIsXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlTdGF0dXM6ICdJTlNUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogNCxcclxuICAgICAgICAgICAgICAgIG9yZGVyczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDI1LTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ25ibTVtdjQ1bicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTAyLTE5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiA3OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyOiAnWXVraSBXaG9icmV5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnREVMSVZFUkVEJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJzEwMjUtMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiAnbmJtNW12NDVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzIwMjAtMDUtMjEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDc4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXI6ICdGbGV0Y2hlciBGbG9zaScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ1BFTkRJTkcnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMjYnLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJ3p4MjN6YzQyYycsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGVhbCBULVNoaXJ0JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvZHVjdCBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ3RlYWwtdC1zaGlydC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDQ5LFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdDbG90aGluZycsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogMyxcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0xPV1NUT0NLJyxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogMyxcclxuICAgICAgICAgICAgICAgIG9yZGVyczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDI2LTAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ3p4MjN6YzQyYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTA0LTI0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiA5OCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyOiAnQmV0dGUgTmlja2EnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdERUxJVkVSRUQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJzEwMjcnLFxyXG4gICAgICAgICAgICAgICAgY29kZTogJ2Fjdng4NzJnYycsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnWWVsbG93IEVhcmJ1ZHMnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAneWVsbG93LWVhcmJ1ZHMuanBnJyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiA4OSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnRWxlY3Ryb25pY3MnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDM1LFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnSU5TVE9DSycsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IDMsXHJcbiAgICAgICAgICAgICAgICBvcmRlcnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnMTAyNy0wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENvZGU6ICdhY3Z4ODcyZ2MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMjAyMC0wMS0yOScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogODksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogJ1Zlcm9uaWthIElub3V5ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ0RFTElWRVJFRCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICcxMDI3LTEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZTogJ2Fjdng4NzJnYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6ICcyMDIwLTA2LTExJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiA4OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyOiAnV2lsbGFyZCBLb2xtZXR6JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnREVMSVZFUkVEJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICcxMDI4JyxcclxuICAgICAgICAgICAgICAgIGNvZGU6ICd0eDEyNWNrNDInLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1lvZ2EgTWF0JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUHJvZHVjdCBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJ3lvZ2EtbWF0LmpwZycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogMjAsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ0ZpdG5lc3MnLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDE1LFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5U3RhdHVzOiAnSU5TVE9DSycsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IDUsXHJcbiAgICAgICAgICAgICAgICBvcmRlcnM6IFtdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnMTAyOScsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiAnZ3d1YnkzNDV2JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdZb2dhIFNldCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1Byb2R1Y3QgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICd5b2dhLXNldC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IDIwLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdGaXRuZXNzJyxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAyNSxcclxuICAgICAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogJ0lOU1RPQ0snLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiA4LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJzEwMjktMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiAnZ3d1YnkzNDV2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzIwMjAtMDItMTQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiA4MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXI6ICdNYXJ5YW5uIFJveXN0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdERUxJVkVSRUQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0dXM6IHN0cmluZ1tdID0gWydPVVRPRlNUT0NLJywgJ0lOU1RPQ0snLCAnTE9XU1RPQ0snXTtcclxuXHJcbiAgICBwcm9kdWN0TmFtZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICdCYW1ib28gV2F0Y2gnLFxyXG4gICAgICAgICdCbGFjayBXYXRjaCcsXHJcbiAgICAgICAgJ0JsdWUgQmFuZCcsXHJcbiAgICAgICAgJ0JsdWUgVC1TaGlydCcsXHJcbiAgICAgICAgJ0JyYWNlbGV0JyxcclxuICAgICAgICAnQnJvd24gUHVyc2UnLFxyXG4gICAgICAgICdDaGFrcmEgQnJhY2VsZXQnLFxyXG4gICAgICAgICdHYWxheHkgRWFycmluZ3MnLFxyXG4gICAgICAgICdHYW1lIENvbnRyb2xsZXInLFxyXG4gICAgICAgICdHYW1pbmcgU2V0JyxcclxuICAgICAgICAnR29sZCBQaG9uZSBDYXNlJyxcclxuICAgICAgICAnR3JlZW4gRWFyYnVkcycsXHJcbiAgICAgICAgJ0dyZWVuIFQtU2hpcnQnLFxyXG4gICAgICAgICdHcmV5IFQtU2hpcnQnLFxyXG4gICAgICAgICdIZWFkcGhvbmVzJyxcclxuICAgICAgICAnTGlnaHQgR3JlZW4gVC1TaGlydCcsXHJcbiAgICAgICAgJ0xpbWUgQmFuZCcsXHJcbiAgICAgICAgJ01pbmkgU3BlYWtlcnMnLFxyXG4gICAgICAgICdQYWludGVkIFBob25lIENhc2UnLFxyXG4gICAgICAgICdQaW5rIEJhbmQnLFxyXG4gICAgICAgICdQaW5rIFB1cnNlJyxcclxuICAgICAgICAnUHVycGxlIEJhbmQnLFxyXG4gICAgICAgICdQdXJwbGUgR2Vtc3RvbmUgTmVja2xhY2UnLFxyXG4gICAgICAgICdQdXJwbGUgVC1TaGlydCcsXHJcbiAgICAgICAgJ1Nob2VzJyxcclxuICAgICAgICAnU25lYWtlcnMnLFxyXG4gICAgICAgICdUZWFsIFQtU2hpcnQnLFxyXG4gICAgICAgICdZZWxsb3cgRWFyYnVkcycsXHJcbiAgICAgICAgJ1lvZ2EgTWF0JyxcclxuICAgICAgICAnWW9nYSBTZXQnXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcbiAgICBnZXRQcm9kdWN0c01pbmkoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmdldFByb2R1Y3RzRGF0YSgpLnNsaWNlKDAsIDUpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9kdWN0c1NtYWxsKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5nZXRQcm9kdWN0c0RhdGEoKS5zbGljZSgwLCAxMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2R1Y3RzKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5nZXRQcm9kdWN0c0RhdGEoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvZHVjdHNXaXRoT3JkZXJzU21hbGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmdldFByb2R1Y3RzV2l0aE9yZGVyc0RhdGEoKS5zbGljZSgwLCAxMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlUHJkdWN0KCk6IFByb2R1Y3Qge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3Q6IFByb2R1Y3QgPSB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmdlbmVyYXRlSWQoKSxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5nZW5lcmF0ZU5hbWUoKSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQcm9kdWN0IERlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgcHJpY2U6IHRoaXMuZ2VuZXJhdGVQcmljZSgpLFxyXG4gICAgICAgICAgICBxdWFudGl0eTogdGhpcy5nZW5lcmF0ZVF1YW50aXR5KCksXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnUHJvZHVjdCBDYXRlZ29yeScsXHJcbiAgICAgICAgICAgIGludmVudG9yeVN0YXR1czogdGhpcy5nZW5lcmF0ZVN0YXR1cygpLFxyXG4gICAgICAgICAgICByYXRpbmc6IHRoaXMuZ2VuZXJhdGVSYXRpbmcoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHByb2R1Y3QuaW1hZ2UgPSBwcm9kdWN0Lm5hbWU/LnRvTG9jYWxlTG93ZXJDYXNlKCkuc3BsaXQoL1sgLF0rLykuam9pbignLScpICsgJy5qcGcnO1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlSWQoKSB7XHJcbiAgICAgICAgbGV0IHRleHQgPSAnJztcclxuICAgICAgICBsZXQgcG9zc2libGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICB0ZXh0ICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0TmFtZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcigzMCkpXTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVByaWNlKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDI5OSkgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVF1YW50aXR5KCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDc1KSArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlU3RhdHVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDMpKV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVSYXRpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoNSkgKyAxKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcclxuaW1wb3J0IHsgTWVudU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvbWVudSc7XHJcbmltcG9ydCB7IEJhc2ljU2VydmljZSB9IGZyb20gJ0AvYXBwL3NlcnZpY2UvYmFzaWMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBzZWxlY3RvcjogJ2FwcC1iZXN0LXNlbGxpbmctd2lkZ2V0JyxcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEJ1dHRvbk1vZHVsZSwgTWVudU1vZHVsZV0sXHJcbiAgICAvLyBwcm92aWRlcnM6IFtdLFxyXG4gICAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtc2VtaWJvbGQgdGV4dC14bFwiPkJlc3QgU2VsbGluZyBQcm9kdWN0czwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBwQnV0dG9uIHR5cGU9XCJidXR0b25cIiBpY29uPVwicGkgcGktZWxsaXBzaXMtdlwiIGNsYXNzPVwicC1idXR0b24tcm91bmRlZCBwLWJ1dHRvbi10ZXh0IHAtYnV0dG9uLXBsYWluXCIgKGNsaWNrKT1cIm1lbnUudG9nZ2xlKCRldmVudClcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxwLW1lbnUgI21lbnUgW3BvcHVwXT1cInRydWVcIiBbbW9kZWxdPVwiaXRlbXNcIj48L3AtbWVudT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ub25lIHAtMCBtLTBcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDppdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1iZXR3ZWVuIG1iLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTAgZm9udC1tZWRpdW0gbXItMiBtYi0xIG1kOm1iLTBcIj5TcGFjZSBULVNoaXJ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xIHRleHQtbXV0ZWQtY29sb3JcIj5DbG90aGluZzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMiBtZDptdC0wIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLXN1cmZhY2UtMzAwIGRhcms6Ymctc3VyZmFjZS01MDAgcm91bmRlZC1ib3JkZXIgb3ZlcmZsb3ctaGlkZGVuIHctNDAgbGc6dy0yNFwiIHN0eWxlPVwiaGVpZ2h0OiA4cHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLW9yYW5nZS01MDAgaC1mdWxsXCIgc3R5bGU9XCJ3aWR0aDogNTAlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LW9yYW5nZS01MDAgbWwtNCBmb250LW1lZGl1bVwiPiU1MDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOml0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LWJldHdlZW4gbWItNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc3VyZmFjZS05MDAgZGFyazp0ZXh0LXN1cmZhY2UtMCBmb250LW1lZGl1bSBtci0yIG1iLTEgbWQ6bWItMFwiPlBvcnRhbCBTdGlja2VyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xIHRleHQtbXV0ZWQtY29sb3JcIj5BY2Nlc3NvcmllczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMiBtZDptdC0wIG1sLTAgbWQ6bWwtMjAgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctc3VyZmFjZS0zMDAgZGFyazpiZy1zdXJmYWNlLTUwMCByb3VuZGVkLWJvcmRlciBvdmVyZmxvdy1oaWRkZW4gdy00MCBsZzp3LTI0XCIgc3R5bGU9XCJoZWlnaHQ6IDhweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctY3lhbi01MDAgaC1mdWxsXCIgc3R5bGU9XCJ3aWR0aDogMTYlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWN5YW4tNTAwIG1sLTQgZm9udC1tZWRpdW1cIj4lMTY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDppdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1iZXR3ZWVuIG1iLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTAgZm9udC1tZWRpdW0gbXItMiBtYi0xIG1kOm1iLTBcIj5TdXBlcm5vdmEgU3RpY2tlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMSB0ZXh0LW11dGVkLWNvbG9yXCI+QWNjZXNzb3JpZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTIgbWQ6bXQtMCBtbC0wIG1kOm1sLTIwIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLXN1cmZhY2UtMzAwIGRhcms6Ymctc3VyZmFjZS01MDAgcm91bmRlZC1ib3JkZXIgb3ZlcmZsb3ctaGlkZGVuIHctNDAgbGc6dy0yNFwiIHN0eWxlPVwiaGVpZ2h0OiA4cHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLXBpbmstNTAwIGgtZnVsbFwiIHN0eWxlPVwid2lkdGg6IDY3JVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1waW5rLTUwMCBtbC00IGZvbnQtbWVkaXVtXCI+JTY3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2VlbiBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdXJmYWNlLTkwMCBkYXJrOnRleHQtc3VyZmFjZS0wIGZvbnQtbWVkaXVtIG1yLTIgbWItMSBtZDptYi0wXCI+V29uZGVycyBOb3RlYm9vazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMSB0ZXh0LW11dGVkLWNvbG9yXCI+T2ZmaWNlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0yIG1kOm10LTAgbWwtMCBtZDptbC0yMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiZy1zdXJmYWNlLTMwMCBkYXJrOmJnLXN1cmZhY2UtNTAwIHJvdW5kZWQtYm9yZGVyIG92ZXJmbG93LWhpZGRlbiB3LTQwIGxnOnctMjRcIiBzdHlsZT1cImhlaWdodDogOHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiZy1ncmVlbi01MDAgaC1mdWxsXCIgc3R5bGU9XCJ3aWR0aDogMzUlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXByaW1hcnkgbWwtNCBmb250LW1lZGl1bVwiPiUzNTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOml0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LWJldHdlZW4gbWItNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc3VyZmFjZS05MDAgZGFyazp0ZXh0LXN1cmZhY2UtMCBmb250LW1lZGl1bSBtci0yIG1iLTEgbWQ6bWItMFwiPk1hdCBCbGFjayBDYXNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xIHRleHQtbXV0ZWQtY29sb3JcIj5BY2Nlc3NvcmllczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMiBtZDptdC0wIG1sLTAgbWQ6bWwtMjAgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctc3VyZmFjZS0zMDAgZGFyazpiZy1zdXJmYWNlLTUwMCByb3VuZGVkLWJvcmRlciBvdmVyZmxvdy1oaWRkZW4gdy00MCBsZzp3LTI0XCIgc3R5bGU9XCJoZWlnaHQ6IDhweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctcHVycGxlLTUwMCBoLWZ1bGxcIiBzdHlsZT1cIndpZHRoOiA3NSVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtcHVycGxlLTUwMCBtbC00IGZvbnQtbWVkaXVtXCI+JTc1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2VlbiBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdXJmYWNlLTkwMCBkYXJrOnRleHQtc3VyZmFjZS0wIGZvbnQtbWVkaXVtIG1yLTIgbWItMSBtZDptYi0wXCI+Um9ib3RzIFQtU2hpcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEgdGV4dC1tdXRlZC1jb2xvclwiPkNsb3RoaW5nPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0yIG1kOm10LTAgbWwtMCBtZDptbC0yMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiZy1zdXJmYWNlLTMwMCBkYXJrOmJnLXN1cmZhY2UtNTAwIHJvdW5kZWQtYm9yZGVyIG92ZXJmbG93LWhpZGRlbiB3LTQwIGxnOnctMjRcIiBzdHlsZT1cImhlaWdodDogOHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiZy10ZWFsLTUwMCBoLWZ1bGxcIiBzdHlsZT1cIndpZHRoOiA0MCVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtdGVhbC01MDAgbWwtNCBmb250LW1lZGl1bVwiPiU0MDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCZXN0U2VsbGluZ1dpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgc2VydmljZSA9IGluamVjdChCYXNpY1NlcnZpY2UpO1xyXG4gICAgZW50aXR5SWQgPSAxO1xyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignSG9sYSBNdW5kbyEhISEhISEhISEhISEhISEhJyk7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmJhc2VQb3N0KGBub3RlY29udHJvbGxlci9nZXRieWlkLyR7dGhpcy5lbnRpdHlJZH1gLCB7fSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSksXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIG1lbnUgPSBudWxsO1xyXG5cclxuICAgIGl0ZW1zID0gW1xyXG4gICAgICAgIHsgbGFiZWw6ICdBZGQgTmV3JywgaWNvbjogJ3BpIHBpLWZ3IHBpLXBsdXMnIH0sXHJcbiAgICAgICAgeyBsYWJlbDogJ1JlbW92ZScsIGljb246ICdwaSBwaS1mdyBwaS10cmFzaCcgfVxyXG4gICAgXTtcclxufVxyXG4iLCJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IGluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXHJcbmV4cG9ydCBjbGFzcyBCYXNpY1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzZXJ2aWNlSHR0cCA9IGluamVjdChIdHRwQ2xpZW50KTtcclxuICAgIHByaXZhdGUgYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxJztcclxuXHJcbiAgICBiYXNlUG9zdChtZXRob2RVcmw6IHN0cmluZywgZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlSHR0cFxyXG4gICAgICAgICAgICAucG9zdChgJHt0aGlzLmJhc2VVcmx9LyR7bWV0aG9kVXJsfWAsIGRhdGEsIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KVxyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcCgocmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiByZXNwb25zZS5ib2R5KSxcclxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFuZ3VsYXIgY2FuIHRocm93IG9uIGJvZHkgcGFyc2Ugd2hpbGUgc3RhdHVzIGlzIHN0aWxsIDJ4eCAoZS5nLiAyMDEpLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPj0gMjAwICYmIGVycm9yLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWxsYmFja0JvZHkgPSAoZXJyb3IuZXJyb3IgYXMgeyB0ZXh0Pzogc3RyaW5nIH0pPy50ZXh0ID8/IGVycm9yLmVycm9yID8/IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihmYWxsYmFja0JvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoKCkgPT4gZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGFmdGVyTmV4dFJlbmRlciwgQ29tcG9uZW50LCBlZmZlY3QsIGluamVjdCwgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENoYXJ0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jaGFydCc7XHJcbmltcG9ydCB7IExheW91dFNlcnZpY2UgfSBmcm9tICdAL2FwcC9sYXlvdXQvc2VydmljZS9sYXlvdXQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBzZWxlY3RvcjogJ2FwcC1yZXZlbnVlLXN0cmVhbS13aWRnZXQnLFxyXG4gICAgaW1wb3J0czogW0NoYXJ0TW9kdWxlXSxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNhcmQgbWItOCFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXhsIG1iLTRcIj5SZXZlbnVlIFN0cmVhbTwvZGl2PlxyXG4gICAgICAgIDxwLWNoYXJ0IHR5cGU9XCJiYXJcIiBbZGF0YV09XCJjaGFydERhdGEoKVwiIFtvcHRpb25zXT1cImNoYXJ0T3B0aW9ucygpXCIgY2xhc3M9XCJoLTEwMFwiIC8+XHJcbiAgICA8L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXZlbnVlU3RyZWFtV2lkZ2V0IHtcclxuICAgIGxheW91dFNlcnZpY2UgPSBpbmplY3QoTGF5b3V0U2VydmljZSk7XHJcblxyXG4gICAgY2hhcnREYXRhID0gc2lnbmFsPGFueT4obnVsbCk7XHJcblxyXG4gICAgY2hhcnRPcHRpb25zID0gc2lnbmFsPGFueT4obnVsbCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgYWZ0ZXJOZXh0UmVuZGVyKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRDaGFydCgpO1xyXG4gICAgICAgICAgICB9LCAxNTApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxheW91dFNlcnZpY2UubGF5b3V0Q29uZmlnKCkuZGFya1RoZW1lO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdENoYXJ0KCk7XHJcbiAgICAgICAgICAgIH0sIDE1MCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENoYXJ0KCkge1xyXG4gICAgICAgIGNvbnN0IGRvY3VtZW50U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgdGV4dENvbG9yID0gZG9jdW1lbnRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctLXRleHQtY29sb3InKTtcclxuICAgICAgICBjb25zdCBib3JkZXJDb2xvciA9IGRvY3VtZW50U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLS1zdXJmYWNlLWJvcmRlcicpO1xyXG4gICAgICAgIGNvbnN0IHRleHRNdXRlZENvbG9yID0gZG9jdW1lbnRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctLXRleHQtY29sb3Itc2Vjb25kYXJ5Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhcnREYXRhLnNldCh7XHJcbiAgICAgICAgICAgIGxhYmVsczogWydRMScsICdRMicsICdRMycsICdRNCddLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU3Vic2NyaXB0aW9ucycsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkb2N1bWVudFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy0tcC1wcmltYXJ5LTQwMCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFs0MDAwLCAxMDAwMCwgMTUwMDAsIDQwMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhclRoaWNrbmVzczogMzJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBZHZlcnRpc2luZycsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkb2N1bWVudFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy0tcC1wcmltYXJ5LTMwMCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsyMTAwLCA4NDAwLCAyNDAwLCA3NTAwXSxcclxuICAgICAgICAgICAgICAgICAgICBiYXJUaGlja25lc3M6IDMyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQWZmaWxpYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRvY3VtZW50U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLS1wLXByaW1hcnktMjAwJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzQxMDAsIDUyMDAsIDM0MDAsIDc0MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BMZWZ0OiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BSaWdodDogOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tTGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tUmlnaHQ6IDBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclNraXBwZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhclRoaWNrbmVzczogMzJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYXJ0T3B0aW9ucy5zZXQoe1xyXG4gICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgYXNwZWN0UmF0aW86IDAuOCxcclxuICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0ZXh0Q29sb3JcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgeDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRleHRNdXRlZENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGV4dE11dGVkQ29sb3JcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJvcmRlckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhd1RpY2tzOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSaXBwbGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3JpcHBsZSc7XHJcbmltcG9ydCB7IFN0eWxlQ2xhc3NNb2R1bGUgfSBmcm9tICdwcmltZW5nL3N0eWxlY2xhc3MnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XHJcbmltcG9ydCB7IERpdmlkZXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL2RpdmlkZXInO1xyXG5pbXBvcnQgeyBUb3BiYXJXaWRnZXQgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9wYmFyd2lkZ2V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlcm9XaWRnZXQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVyb3dpZGdldCc7XHJcbmltcG9ydCB7IEZlYXR1cmVzV2lkZ2V0IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZlYXR1cmVzd2lkZ2V0JztcclxuaW1wb3J0IHsgSGlnaGxpZ2h0c1dpZGdldCB9IGZyb20gJy4vY29tcG9uZW50cy9oaWdobGlnaHRzd2lkZ2V0JztcclxuaW1wb3J0IHsgUHJpY2luZ1dpZGdldCB9IGZyb20gJy4vY29tcG9uZW50cy9wcmljaW5nd2lkZ2V0JztcclxuaW1wb3J0IHsgRm9vdGVyV2lkZ2V0IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvb3RlcndpZGdldCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWxhbmRpbmcnLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUsIFRvcGJhcldpZGdldCwgSGVyb1dpZGdldCwgRmVhdHVyZXNXaWRnZXQsIEhpZ2hsaWdodHNXaWRnZXQsIFByaWNpbmdXaWRnZXQsIEZvb3RlcldpZGdldCwgUmlwcGxlTW9kdWxlLCBTdHlsZUNsYXNzTW9kdWxlLCBCdXR0b25Nb2R1bGUsIERpdmlkZXJNb2R1bGVdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmctc3VyZmFjZS0wIGRhcms6Ymctc3VyZmFjZS05MDBcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImhvbWVcIiBjbGFzcz1cImxhbmRpbmctd3JhcHBlciBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDx0b3BiYXItd2lkZ2V0IGNsYXNzPVwicHktNiBweC02IG14LTAgbWQ6bXgtMTIgbGc6bXgtMjAgbGc6cHgtMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJlbGF0aXZlIGxnOnN0YXRpY1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aGVyby13aWRnZXQgLz5cclxuICAgICAgICAgICAgICAgIDxmZWF0dXJlcy13aWRnZXQgLz5cclxuICAgICAgICAgICAgICAgIDxoaWdobGlnaHRzLXdpZGdldCAvPlxyXG4gICAgICAgICAgICAgICAgPHByaWNpbmctd2lkZ2V0IC8+XHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyLXdpZGdldCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIExhbmRpbmcge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0eWxlQ2xhc3NNb2R1bGUgfSBmcm9tICdwcmltZW5nL3N0eWxlY2xhc3MnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJpcHBsZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xyXG5pbXBvcnQge0FwcEZsb2F0aW5nQ29uZmlndXJhdG9yfSBmcm9tIFwiQC9hcHAvbGF5b3V0L2NvbXBvbmVudC9hcHAuZmxvYXRpbmdjb25maWd1cmF0b3JcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0b3BiYXItd2lkZ2V0JyxcclxuICAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUsIFN0eWxlQ2xhc3NNb2R1bGUsIEJ1dHRvbk1vZHVsZSwgUmlwcGxlTW9kdWxlLCBBcHBGbG9hdGluZ0NvbmZpZ3VyYXRvcl0sXHJcbiAgICB0ZW1wbGF0ZTogYDxhIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNTQgNDBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImgtMTIgbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTE3LjE2MzcgMTkuMjQ2N0MxNy4xNTY2IDE5LjQwMzMgMTcuMTUyOSAxOS41NjEgMTcuMTUyOSAxOS43MTk0QzE3LjE1MjkgMjUuMzUwMyAyMS43MjAzIDI5LjkxNSAyNy4zNTQ2IDI5LjkxNUMzMi45ODg3IDI5LjkxNSAzNy41NTYxIDI1LjM1MDMgMzcuNTU2MSAxOS43MTk0QzM3LjU1NjEgMTkuNTU3MiAzNy41NTI0IDE5LjM5NTkgMzcuNTQ0OSAxOS4yMzU1QzM4LjU2MTcgMTkuMDgwMSAzOS41NzU5IDE4LjkwMTMgNDAuNTg2NyAxOC42OTk0TDQwLjY5MjYgMTguNjc4MkM0MC43MTkxIDE5LjAyMTggNDAuNzMyNiAxOS4zNjkgNDAuNzMyNiAxOS43MTk0QzQwLjczMjYgMjcuMTAzNiAzNC43NDMgMzMuMDg5NiAyNy4zNTQ2IDMzLjA4OTZDMTkuOTY2IDMzLjA4OTYgMTMuOTc2NSAyNy4xMDM2IDEzLjk3NjUgMTkuNzE5NEMxMy45NzY1IDE5LjM3NCAxMy45ODk2IDE5LjAzMTYgMTQuMDE1NCAxOC42OTI3TDE0LjA0ODYgMTguNjk5NEMxNS4wODM3IDE4LjkwNjIgMTYuMTIyMyAxOS4wODg2IDE3LjE2MzcgMTkuMjQ2N1pNMzMuMzI4NCAxMS40NTM4QzMxLjY0OTMgMTAuMjM5NiAyOS41ODU1IDkuNTIzODEgMjcuMzU0NiA5LjUyMzgxQzI1LjExOTUgOS41MjM4MSAyMy4wNTI0IDEwLjI0MjEgMjEuMzcxNyAxMS40NjAzQzIwLjAwNzggMTEuMzIzMiAxOC42NDc1IDExLjEzODcgMTcuMjkzMyAxMC45MDdDMTkuNzQ1MyA4LjExMzA4IDIzLjM0MzggNi4zNDkyMSAyNy4zNTQ2IDYuMzQ5MjFDMzEuMzYgNi4zNDkyMSAzNC45NTQzIDguMTA4NDQgMzcuNDA2MSAxMC44OTZDMzYuMDUyMSAxMS4xMjkyIDM0LjY5MiAxMS4zMTUyIDMzLjMyODQgMTEuNDUzOFpNNDMuODI2IDE4LjA1MThDNDMuODgxIDE4LjYwMDMgNDMuOTA5MSAxOS4xNTY2IDQzLjkwOTEgMTkuNzE5NEM0My45MDkxIDI4Ljg1NjggMzYuNDk3MyAzNi4yNjQyIDI3LjM1NDYgMzYuMjY0MkMxOC4yMTE3IDM2LjI2NDIgMTAuOCAyOC44NTY4IDEwLjggMTkuNzE5NEMxMC44IDE5LjE2MTUgMTAuODI3NiAxOC42MSAxMC44ODE2IDE4LjA2NjNMNy43NTM4MyAxNy40NDExQzcuNjY3NzUgMTguMTg4NiA3LjYyMzU0IDE4Ljk0ODggNy42MjM1NCAxOS43MTk0QzcuNjIzNTQgMzAuNjEwMiAxNi40NTc0IDM5LjQzODggMjcuMzU0NiAzOS40Mzg4QzM4LjI1MTcgMzkuNDM4OCA0Ny4wODU1IDMwLjYxMDIgNDcuMDg1NSAxOS43MTk0QzQ3LjA4NTUgMTguOTQzOSA0Ny4wNDA3IDE4LjE3ODkgNDYuOTUzNiAxNy40MjY3TDQzLjgyNiAxOC4wNTE4Wk00NC4yNjEzIDkuNTQ3NDNMNDAuOTA4NCAxMC4yMTc2QzM3LjkxMzQgNS45NTgyMSAzMi45NTkzIDMuMTc0NiAyNy4zNTQ2IDMuMTc0NkMyMS43NDQyIDMuMTc0NiAxNi43ODU2IDUuOTYzODUgMTMuNzkxNSAxMC4yMzA1TDEwLjQzOTkgOS41NjA1N0MxMy44OTIgMy44MzE3OCAyMC4xNzU2IDAgMjcuMzU0NiAwQzM0LjUyODEgMCA0MC44MDc1IDMuODI1OTEgNDQuMjYxMyA5LjU0NzQzWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLXByaW1hcnktY29sb3IpXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bWFzayBpZD1cIm1hc2swXzE0MTNfMTU1MVwiIHN0eWxlPVwibWFzay10eXBlOiBhbHBoYVwiIG1hc2tVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgeD1cIjBcIiB5PVwiOFwiIHdpZHRoPVwiNTRcIiBoZWlnaHQ9XCIxMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjcgMTguMzY1MkMxMC41MTE0IDE5LjE5NDQgMCA4Ljg4ODkyIDAgOC44ODg5MkMwIDguODg4OTIgMTYuNTE3NiAxNC41ODY2IDI3IDE0LjU4NjZDMzcuNDgyNCAxNC41ODY2IDU0IDguODg4OTIgNTQgOC44ODg5MkM1NCA4Ljg4ODkyIDQzLjQ4ODYgMTcuNTM2MSAyNyAxOC4zNjUyWlwiIGZpbGw9XCJ2YXIoLS1wcmltYXJ5LWNvbG9yKVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hc2s+XHJcbiAgICAgICAgICAgICAgICA8ZyBtYXNrPVwidXJsKCNtYXNrMF8xNDEzXzE1NTEpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0tNC42NzNlLTA1IDguODg4ODdMMy43MzA4NCAtMS45MTQzNEwtOC4wMDgwNiAxNy4wNDczTC00LjY3M2UtMDUgOC44ODg4N1pNMjcgMTguMzY1MkwyNi40MjUzIDYuOTUxMDlMMjcgMTguMzY1MlpNNTQgOC44ODg4N0w2MS4yNjczIDE3LjcxMjdMNTAuMjY5MSAtMS45MTQzNEw1NCA4Ljg4ODg3Wk0tNC42NzNlLTA1IDguODg4ODdDLTguMDA4MDYgMTcuMDQ3MyAtOC4wMDQ2OSAxNy4wNTA1IC04LjAwMTMyIDE3LjA1MzhDLTguMDAwMTggMTcuMDU1IC03Ljk5Njc1IDE3LjA1ODMgLTcuOTk0NCAxNy4wNjA3Qy03Ljk4OTYzIDE3LjA2NTMgLTcuOTg0NzQgMTcuMDcwMSAtNy45Nzk2NiAxNy4wNzVDLTcuOTY5NDkgMTcuMDg0OSAtNy45NTg2MyAxNy4wOTU1IC03Ljk0NzA3IDE3LjEwNjZDLTcuOTI0MDEgMTcuMTI5IC03Ljg5ODA5IDE3LjE1MzkgLTcuODY5NDQgMTcuMTgxMkMtNy44MTIyIDE3LjIzNiAtNy43NDM3NyAxNy4zMDA1IC03LjY2NDM2IDE3LjM3NDNDLTcuNTA1NjcgMTcuNTIxOCAtNy4zMDI2OSAxNy43MDYzIC03LjA1NjQ1IDE3LjkyMjFDLTYuNTY0NjcgMTguMzUzMiAtNS44OTY2MiAxOC45MTI1IC01LjA2MDg5IDE5LjU1MzRDLTMuMzk2MDMgMjAuODMgLTEuMDI1NzUgMjIuNDYwNSAxLjk4MDEyIDI0LjA0NTdDNy45Nzg3NCAyNy4yMDkxIDE2Ljc3MjMgMzAuMzIyNiAyNy41NzQ2IDI5Ljc3OTNMMjYuNDI1MyA2Ljk1MTA5QzIwLjczOTEgNy4yMzY5OSAxNi4wMzI2IDUuNjEyMzEgMTIuNjUzNCAzLjgzMDI0QzEwLjk3MDMgMi45NDI2NyA5LjY4MjIyIDIuMDQ4NjYgOC44NjA5MSAxLjQxODg4QzguNDUzNTYgMS4xMDY1MyA4LjE3MTU1IDAuODY3Mjc4IDguMDI0MSAwLjczODAyN0M3Ljk1MDcyIDAuNjczNjcxIDcuOTExNzggMC42Mzc1NzYgNy45MDg0MSAwLjYzNDQ5MkM3LjkwNjgyIDAuNjMyOTggNy45MTQxOSAwLjYzOTgwNSA3LjkzMDcxIDAuNjU1NTdDNy45Mzg5NyAwLjY2MzQ1NSA3Ljk0OTUyIDAuNjczNTg5IDcuOTYyMzUgMC42ODYwMzlDNy45Njg4MyAwLjY5MjI2MiA3Ljk3NTgyIDAuNjk5MDc1IDcuOTgzMzggMC43MDY0NzFDNy45ODcxOSAwLjcxMDE2NyA3Ljk5MTEzIDAuNzE0MDE0IDcuOTk1MjYgMC43MTgwMTRDNy45OTcyOSAwLjcyMDAwOCA4LjAwMDQ3IDAuNzIzMTE5IDguMDAxNDggMC43MjQxMTZDOC4wMDQ2NiAwLjcyNzI2NSA4LjAwNzk2IDAuNzMwNDQ2IC00LjY3M2UtMDUgOC44ODg4N1pNMjcuNTc0NiAyOS43NzkzQzM3LjY5MDQgMjkuMjcwNiA0NS45NDE2IDI2LjM2ODQgNTEuNjYwMiAyMy42MDU0QzU0LjUyOTYgMjIuMjE5MSA1Ni44MDY0IDIwLjg0NjUgNTguNDE4NiAxOS43Nzg0QzU5LjIyNjUgMTkuMjQzMSA1OS44NzMgMTguNzgwNSA2MC4zNDk0IDE4LjQyNTdDNjAuNTg3OCAxOC4yNDgyIDYwLjc4NDEgMTguMDk3MSA2MC45Mzc0IDE3Ljk3N0M2MS4wMTQgMTcuOTE2OSA2MS4wNzk5IDE3Ljg2NDUgNjEuMTM0OSAxNy44MjAzQzYxLjE2MjQgMTcuNzk4MSA2MS4xODcyIDE3Ljc3ODEgNjEuMjA5MyAxNy43NjAyQzYxLjIyMDMgMTcuNzUxMiA2MS4yMzA3IDE3Ljc0MjcgNjEuMjQwMyAxNy43MzQ4QzYxLjI0NTIgMTcuNzMwOCA2MS4yNDk5IDE3LjcyNyA2MS4yNTQ0IDE3LjcyMzNDNjEuMjU2NiAxNy43MjE1IDYxLjI1OTggMTcuNzE4OCA2MS4yNjEgMTcuNzE3OUM2MS4yNjQyIDE3LjcxNTMgNjEuMjY3MyAxNy43MTI3IDU0IDguODg4ODdDNDYuNzMyNiAwLjA2NTA1MzYgNDYuNzM1NyAwLjA2MjUyMTkgNDYuNzM4NyAwLjA2MDAyNDFDNDYuNzM5NyAwLjA1OTIzNDUgNDYuNzQyNyAwLjA1Njc2NTggNDYuNzQ0NiAwLjA1NTE4NTdDNDYuNzQ4NSAwLjA1MjAyMzggNDYuNzUyMSAwLjA0ODk4ODcgNDYuNzU1NyAwLjA0NjA3OTlDNDYuNzYyOCAwLjA0MDI2MjMgNDYuNzY5NCAwLjAzNDk0ODcgNDYuNzc1MyAwLjAzMDEzMThDNDYuNzg3MSAwLjAyMDQ5ODYgNDYuNzk2NiAwLjAxMjg0OTUgNDYuODAzNyAwLjAwNzEyNTYyQzQ2LjgxOCAtMC4wMDQzMTg0OCA0Ni44MjI4IC0wLjAwODA4MzExIDQ2LjgxODQgLTAuMDA0NjM3ODRDNDYuODA5NiAwLjAwMjI4MzQ1IDQ2Ljc2NCAwLjAzNzg2NTIgNDYuNjgyOCAwLjA5ODM3NzlDNDYuNTE5OSAwLjIxOTY3NSA0Ni4yMTY1IDAuNDM5MTYxIDQ1Ljc4MTIgMC43Mjc1MTlDNDQuOTA3MiAxLjMwNjYzIDQzLjUyNTcgMi4xNDc2NSA0MS43MDYxIDMuMDI2NzdDMzguMDQ2OSA0Ljc5NDY4IDMyLjc5ODEgNi42MzA1OCAyNi40MjUzIDYuOTUxMDlMMjcuNTc0NiAyOS43NzkzWk01NCA4Ljg4ODg3QzUwLjI2OTEgLTEuOTE0MzMgNTAuMjcgLTEuOTE0NjcgNTAuMjcxIC0xLjkxNDk4QzUwLjI3MTIgLTEuOTE1MDYgNTAuMjcyIC0xLjkxNTM1IDUwLjI3MjQgLTEuOTE1NUM1MC4yNzMzIC0xLjkxNTgxIDUwLjI3NCAtMS45MTYwMiA1MC4yNzQzIC0xLjkxNjE2QzUwLjI3NTIgLTEuOTE2NDMgNTAuMjc1IC0xLjkxNjM2IDUwLjI3MzggLTEuOTE1OTVDNTAuMjcxNCAtMS45MTUxNSA1MC4yNjUyIC0xLjkxMzAyIDUwLjI1NTIgLTEuOTA5NkM1MC4yMzUxIC0xLjkwMjc2IDUwLjE5OTkgLTEuODkwNzggNTAuMTUwMyAtMS44NzRDNTAuMDUwOSAtMS44NDA0MyA0OS44OTM4IC0xLjc4NzczIDQ5LjY4NDQgLTEuNzE4NjNDNDkuMjY1MiAtMS41ODAzMSA0OC42Mzg3IC0xLjM3NyA0Ny44NDgxIC0xLjEzMDM1QzQ2LjI2MDkgLTAuNjM1MjM3IDQ0LjA0MjcgMC4wMjQ5ODc1IDQxLjUzMjUgMC42ODIzQzM2LjIxNSAyLjA3NDcxIDMwLjY3MzYgMy4xNTc5NiAyNyAzLjE1Nzk2VjI2LjAxNTFDMzMuODA4NyAyNi4wMTUxIDQxLjc2NzIgMjQuMjQ5NSA0Ny4zMjkyIDIyLjc5MzFDNTAuMjU4NiAyMi4wMjYgNTIuODI1IDIxLjI2MTggNTQuNjYyNSAyMC42ODg2QzU1LjU4NDIgMjAuNDAxMSA1Ni4zMyAyMC4xNTkzIDU2Ljg1NTEgMTkuOTg2QzU3LjExNzggMTkuODk5MyA1Ny4zMjU4IDE5LjgyOTYgNTcuNDczNSAxOS43Nzk3QzU3LjU0NzQgMTkuNzU0OCA1Ny42MDYyIDE5LjczNDggNTcuNjQ5MyAxOS43MkM1Ny42NzA5IDE5LjcxMjcgNTcuNjg4NSAxOS43MDY2IDU3LjcwMjEgMTkuNzAxOUM1Ny43MDg5IDE5LjY5OTYgNTcuNzE0NyAxOS42OTc2IDU3LjcxOTUgMTkuNjk2QzU3LjcyMTkgMTkuNjk1MiA1Ny43MjQxIDE5LjY5NDQgNTcuNzI2IDE5LjY5MzhDNTcuNzI2OSAxOS42OTM0IDU3LjcyODEgMTkuNjkzIDU3LjcyODYgMTkuNjkyOUM1Ny43Mjk4IDE5LjY5MjQgNTcuNzMwOSAxOS42OTIgNTQgOC44ODg4N1pNMjcgMy4xNTc5NkMyMy4zMjYzIDMuMTU3OTYgMTcuNzg0OSAyLjA3NDcxIDEyLjQ2NzQgMC42ODIzQzkuOTU3MTcgMC4wMjQ5ODc1IDcuNzM5MDQgLTAuNjM1MjM3IDYuMTUxODQgLTEuMTMwMzVDNS4zNjExOCAtMS4zNzcgNC43MzQ2NyAtMS41ODAzMSA0LjMxNTUgLTEuNzE4NjNDNC4xMDYwOSAtMS43ODc3MyAzLjk0ODk5IC0xLjg0MDQzIDMuODQ5NjEgLTEuODc0QzMuNzk5OTQgLTEuODkwNzggMy43NjQ3NCAtMS45MDI3NiAzLjc0NDcxIC0xLjkwOTZDMy43MzQ2OSAtMS45MTMwMiAzLjcyODQ4IC0xLjkxNTE1IDMuNzI2MTMgLTEuOTE1OTVDMy43MjQ5NiAtMS45MTYzNiAzLjcyNDc2IC0xLjkxNjQzIDMuNzI1NTQgLTEuOTE2MTZDMy43MjU5MyAtMS45MTYwMiAzLjcyNjU3IC0xLjkxNTgxIDMuNzI3NDUgLTEuOTE1NUMzLjcyNzg5IC0xLjkxNTM1IDMuNzI4NzQgLTEuOTE1MDYgMy43Mjg5NiAtMS45MTQ5OEMzLjcyOTg3IC0xLjkxNDY3IDMuNzMwODQgLTEuOTE0MzMgLTQuNjczZS0wNSA4Ljg4ODg3Qy0zLjczMDkzIDE5LjY5MiAtMy43Mjk4MyAxOS42OTI0IC0zLjcyODY4IDE5LjY5MjlDLTMuNzI4MjEgMTkuNjkzIC0zLjcyNjk4IDE5LjY5MzQgLTMuNzI2MDMgMTkuNjkzOEMtMy43MjQxNSAxOS42OTQ0IC0zLjcyMjAxIDE5LjY5NTIgLTMuNzE5NjEgMTkuNjk2Qy0zLjcxNDgyIDE5LjY5NzYgLTMuNzA5MDEgMTkuNjk5NiAtMy43MDIyIDE5LjcwMTlDLTMuNjg4NTggMTkuNzA2NiAtMy42NzA5NSAxOS43MTI3IC0zLjY0OTQgMTkuNzJDLTMuNjA2MjkgMTkuNzM0OCAtMy41NDc0NSAxOS43NTQ4IC0zLjQ3MzU5IDE5Ljc3OTdDLTMuMzI1ODkgMTkuODI5NiAtMy4xMTc4OCAxOS44OTkzIC0yLjg1NTE2IDE5Ljk4NkMtMi4zMzAwOCAyMC4xNTkzIC0xLjU4NDI1IDIwLjQwMTEgLTAuNjYyNTg5IDIwLjY4ODZDMS4xNzQ4NSAyMS4yNjE4IDMuNzQxMjUgMjIuMDI2IDYuNjcwNzMgMjIuNzkzMUMxMi4yMzI3IDI0LjI0OTUgMjAuMTkxMyAyNi4wMTUxIDI3IDI2LjAxNTFWMy4xNTc5NlpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidmFyKC0tcHJpbWFyeS1jb2xvcilcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc3VyZmFjZS05MDAgZGFyazp0ZXh0LXN1cmZhY2UtMCBmb250LW1lZGl1bSB0ZXh0LTJ4bCBsZWFkaW5nLW5vcm1hbCBtci0yMFwiPlNBS0FJPC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgPGEgcEJ1dHRvbiBbdGV4dF09XCJ0cnVlXCIgc2V2ZXJpdHk9XCJzZWNvbmRhcnlcIiBbcm91bmRlZF09XCJ0cnVlXCIgcFJpcHBsZSBjbGFzcz1cImxnOmhpZGRlbiFcIiBwU3R5bGVDbGFzcz1cIkBuZXh0XCIgZW50ZXJGcm9tQ2xhc3M9XCJoaWRkZW5cIiBsZWF2ZVRvQ2xhc3M9XCJoaWRkZW5cIiBbaGlkZU9uT3V0c2lkZUNsaWNrXT1cInRydWVcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJwaSBwaS1iYXJzIHRleHQtMnhsIVwiPjwvaT5cclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtcy1jZW50ZXIgYmctc3VyZmFjZS0wIGRhcms6Ymctc3VyZmFjZS05MDAgZ3JvdyBqdXN0aWZ5LWJldHdlZW4gaGlkZGVuIGxnOmZsZXggYWJzb2x1dGUgbGc6c3RhdGljIHctZnVsbCBsZWZ0LTAgdG9wLWZ1bGwgcHgtMTIgbGc6cHgtMCB6LTIwIHJvdW5kZWQtYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3Qtbm9uZSBwLTAgbS0wIGZsZXggbGc6aXRlbXMtY2VudGVyIHNlbGVjdC1ub25lIGZsZXgtY29sIGxnOmZsZXgtcm93IGN1cnNvci1wb2ludGVyIGdhcC04XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cInJvdXRlci5uYXZpZ2F0ZShbJy9sYW5kaW5nJ10sIHsgZnJhZ21lbnQ6ICdob21lJyB9KVwiIHBSaXBwbGUgY2xhc3M9XCJweC0wIHB5LTQgdGV4dC1zdXJmYWNlLTkwMCBkYXJrOnRleHQtc3VyZmFjZS0wIGZvbnQtbWVkaXVtIHRleHQteGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SG9tZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJyb3V0ZXIubmF2aWdhdGUoWycvbGFuZGluZyddLCB7IGZyYWdtZW50OiAnZmVhdHVyZXMnIH0pXCIgcFJpcHBsZSBjbGFzcz1cInB4LTAgcHktNCB0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTAgZm9udC1tZWRpdW0gdGV4dC14bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5GZWF0dXJlczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJyb3V0ZXIubmF2aWdhdGUoWycvbGFuZGluZyddLCB7IGZyYWdtZW50OiAnaGlnaGxpZ2h0cycgfSlcIiBwUmlwcGxlIGNsYXNzPVwicHgtMCBweS00IHRleHQtc3VyZmFjZS05MDAgZGFyazp0ZXh0LXN1cmZhY2UtMCBmb250LW1lZGl1bSB0ZXh0LXhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkhpZ2hsaWdodHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwicm91dGVyLm5hdmlnYXRlKFsnL2xhbmRpbmcnXSwgeyBmcmFnbWVudDogJ3ByaWNpbmcnIH0pXCIgcFJpcHBsZSBjbGFzcz1cInB4LTAgcHktNCB0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTAgZm9udC1tZWRpdW0gdGV4dC14bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QcmljaW5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGJvcmRlci10IGxnOmJvcmRlci10LTAgYm9yZGVyLXN1cmZhY2UgcHktNCBsZzpweS0wIG10LTQgbGc6bXQtMCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBwQnV0dG9uIHBSaXBwbGUgbGFiZWw9XCJMb2dpblwiIHJvdXRlckxpbms9XCIvYXV0aC9sb2dpblwiIFtyb3VuZGVkXT1cInRydWVcIiBbdGV4dF09XCJ0cnVlXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHBCdXR0b24gcFJpcHBsZSBsYWJlbD1cIlJlZ2lzdGVyXCIgcm91dGVyTGluaz1cIi9hdXRoL2xvZ2luXCIgW3JvdW5kZWRdPVwidHJ1ZVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGFwcC1mbG9hdGluZy1jb25maWd1cmF0b3IgW2Zsb2F0XT1cImZhbHNlXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9wYmFyV2lkZ2V0IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xyXG5pbXBvcnQgeyBSaXBwbGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3JpcHBsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaGVyby13aWRnZXQnLFxyXG4gICAgaW1wb3J0czogW0J1dHRvbk1vZHVsZSwgUmlwcGxlTW9kdWxlXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD1cImhlcm9cIlxyXG4gICAgICAgICAgICBjbGFzcz1cImZsZXggZmxleC1jb2wgcHQtNiBweC02IGxnOnB4LTIwIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpKSwgcmFkaWFsLWdyYWRpZW50KDc3LjM2JSAyNTYuOTclIGF0IDc3LjM2JSA1Ny41MiUsIHJnYigyMzgsIDIzOSwgMTc1KSAwJSwgcmdiKDE5NSwgMjI3LCAyNTApIDEwMCUpOyBjbGlwLXBhdGg6IGVsbGlwc2UoMTUwJSA4NyUgYXQgOTMlIDEzJSlcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm14LTYgbWQ6bXgtMjAgbXQtMCBtZDptdC02XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LTZ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBsZWFkaW5nLXRpZ2h0IGRhcms6IXRleHQtZ3JheS03MDBcIj48c3BhbiBjbGFzcz1cImZvbnQtbGlnaHQgYmxvY2tcIj5FdSBzZW0gaW50ZWdlcjwvc3Bhbj5lZ2V0IG1hZ25hIGZlcm1lbnR1bTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvbnQtbm9ybWFsIHRleHQtMnhsIGxlYWRpbmctbm9ybWFsIG1kOm10LTQgdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS03MDBcIj5TZWQgYmxhbmRpdCBsaWJlcm8gdm9sdXRwYXQgc2VkIGNyYXMuIEZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzIGludGVnZXIuIFBsYWNlcmF0IGluIGVnZXN0YXMgZXJhdC4uLjwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gcEJ1dHRvbiBwUmlwcGxlIFtyb3VuZGVkXT1cInRydWVcIiB0eXBlPVwiYnV0dG9uXCIgbGFiZWw9XCJHZXQgU3RhcnRlZFwiIGNsYXNzPVwidGV4dC14bCEgbXQtOCBweC00IVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgbWQ6anVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9wcmltZWZhY2VzLm9yZy9jZG4vdGVtcGxhdGVzL3Nha2FpL2xhbmRpbmcvc2NyZWVuLTEucG5nXCIgYWx0PVwiSGVybyBJbWFnZVwiIGNsYXNzPVwidy05LzEyIG1kOnctYXV0b1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVyb1dpZGdldCB7fVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmZWF0dXJlcy13aWRnZXQnLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gICAgdGVtcGxhdGU6IGAgPGRpdiBpZD1cImZlYXR1cmVzXCIgY2xhc3M9XCJweS02IHB4LTYgbGc6cHgtMjAgbXQtOCBteC0wIGxnOm14LTIwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTEyIGdhcC00IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc3Bhbi0xMiB0ZXh0LWNlbnRlciBtdC0yMCBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdXJmYWNlLTkwMCBkYXJrOnRleHQtc3VyZmFjZS0wIGZvbnQtbm9ybWFsIG1iLTIgdGV4dC00eGxcIj5NYXJ2ZWxvdXMgRmVhdHVyZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1tdXRlZC1jb2xvciB0ZXh0LTJ4bFwiPlBsYWNlcmF0IGluIGVnZXN0YXMgZXJhdC4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNwYW4tMTIgbWQ6Y29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tNCBwLTAgbGc6cHItOCBsZzpwYi04IG10LTYgbGc6bXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDogMTYwcHg7IHBhZGRpbmc6IDJweDsgYm9yZGVyLXJhZGl1czogMTBweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1MywgMjI4LCAxNjUsIDAuMiksIHJnYmEoMTg3LCAxOTksIDIwNSwgMC4yKSksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjUzLCAyMjgsIDE2NSwgMC4yKSwgcmdiYSgxODcsIDE5OSwgMjA1LCAwLjIpKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTQgYmctc3VyZmFjZS0wIGRhcms6Ymctc3VyZmFjZS05MDAgaC1mdWxsXCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiA4cHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXllbGxvdy0yMDAgbWItNFwiIHN0eWxlPVwid2lkdGg6IDMuNXJlbTsgaGVpZ2h0OiAzLjVyZW07IGJvcmRlci1yYWRpdXM6IDEwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGkgcGktZncgcGktdXNlcnMgdGV4dC0yeGwhIHRleHQteWVsbG93LTcwMFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1iLTIgdGV4dC1zdXJmYWNlLTkwMCBkYXJrOnRleHQtc3VyZmFjZS0wXCI+RWFzeSB0byBVc2U8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc3VyZmFjZS02MDAgZGFyazp0ZXh0LXN1cmZhY2UtMjAwXCI+UG9zdWVyZSBtb3JiaSBsZW8gdXJuYSBtb2xlc3RpZS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNwYW4tMTIgbWQ6Y29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tNCBwLTAgbGc6cHItOCBsZzpwYi04IG10LTYgbGc6bXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDogMTYwcHg7IHBhZGRpbmc6IDJweDsgYm9yZGVyLXJhZGl1czogMTBweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE0NSwgMjI2LCAyMzcsIDAuMiksIHJnYmEoMjUxLCAxOTksIDE0NSwgMC4yKSksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjUzLCAyMjgsIDE2NSwgMC4yKSwgcmdiYSgxNzIsIDE4MCwgMjIzLCAwLjIpKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTQgYmctc3VyZmFjZS0wIGRhcms6Ymctc3VyZmFjZS05MDAgaC1mdWxsXCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiA4cHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWN5YW4tMjAwIG1iLTRcIiBzdHlsZT1cIndpZHRoOiAzLjVyZW07IGhlaWdodDogMy41cmVtOyBib3JkZXItcmFkaXVzOiAxMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBpIHBpLWZ3IHBpLXBhbGV0dGUgdGV4dC0yeGwhIHRleHQtY3lhbi03MDBcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtYi0yIHRleHQtc3VyZmFjZS05MDAgZGFyazp0ZXh0LXN1cmZhY2UtMFwiPkZyZXNoIERlc2lnbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdXJmYWNlLTYwMCBkYXJrOnRleHQtc3VyZmFjZS0yMDBcIj5TZW1wZXIgcmlzdXMgaW4gaGVuZHJlcml0Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc3Bhbi0xMiBtZDpjb2wtc3Bhbi0xMiBsZzpjb2wtc3Bhbi00IHAtMCBsZzpwYi04IG10LTYgbGc6bXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDogMTYwcHg7IHBhZGRpbmc6IDJweDsgYm9yZGVyLXJhZGl1czogMTBweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE0NSwgMjI2LCAyMzcsIDAuMiksIHJnYmEoMTcyLCAxODAsIDIyMywgMC4yKSksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMTcyLCAxODAsIDIyMywgMC4yKSwgcmdiYSgyNDYsIDE1OCwgMTg4LCAwLjIpKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTQgYmctc3VyZmFjZS0wIGRhcms6Ymctc3VyZmFjZS05MDAgaC1mdWxsXCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiA4cHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWluZGlnby0yMDBcIiBzdHlsZT1cIndpZHRoOiAzLjVyZW07IGhlaWdodDogMy41cmVtOyBib3JkZXItcmFkaXVzOiAxMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBpIHBpLWZ3IHBpLW1hcCB0ZXh0LTJ4bCEgdGV4dC1pbmRpZ28tNzAwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTYgbWItMSB0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTAgdGV4dC14bCBmb250LXNlbWlib2xkXCI+V2VsbCBEb2N1bWVudGVkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdXJmYWNlLTYwMCBkYXJrOnRleHQtc3VyZmFjZS0yMDBcIj5Ob24gYXJjdSByaXN1cyBxdWlzIHZhcml1cyBxdWFtIHF1aXNxdWUuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zcGFuLTEyIG1kOmNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTQgcC0wIGxnOnByLTggbGc6cGItOCBtdC02IGxnOm10LTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDE2MHB4OyBwYWRkaW5nOiAycHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxODcsIDE5OSwgMjA1LCAwLjIpLCByZ2JhKDI1MSwgMTk5LCAxNDUsIDAuMikpLCBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1MywgMjI4LCAxNjUsIDAuMiksIHJnYmEoMTQ1LCAyMTAsIDIwNCwgMC4yKSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC00IGJnLXN1cmZhY2UtMCBkYXJrOmJnLXN1cmZhY2UtOTAwIGgtZnVsbFwiIHN0eWxlPVwiYm9yZGVyLXJhZGl1czogOHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1zbGF0ZS0yMDAgbWItNFwiIHN0eWxlPVwid2lkdGg6IDMuNXJlbTsgaGVpZ2h0OiAzLjVyZW07IGJvcmRlci1yYWRpdXM6IDEwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGkgcGktZncgcGktaWQtY2FyZCB0ZXh0LTJ4bCEgdGV4dC1zbGF0ZS03MDBcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtNiBtYi0xIHRleHQtc3VyZmFjZS05MDAgZGFyazp0ZXh0LXN1cmZhY2UtMCB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5SZXNwb25zaXZlIExheW91dDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc3VyZmFjZS02MDAgZGFyazp0ZXh0LXN1cmZhY2UtMjAwXCI+TnVsbGEgbWFsZXN1YWRhIHBlbGxlbnRlc3F1ZSBlbGl0Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc3Bhbi0xMiBtZDpjb2wtc3Bhbi0xMiBsZzpjb2wtc3Bhbi00IHAtMCBsZzpwci04IGxnOnBiLTggbXQtNiBsZzptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiAxNjBweDsgcGFkZGluZzogMnB4OyBib3JkZXItcmFkaXVzOiAxMHB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTg3LCAxOTksIDIwNSwgMC4yKSwgcmdiYSgyNDYsIDE1OCwgMTg4LCAwLjIpKSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgxNDUsIDIyNiwgMjM3LCAwLjIpLCByZ2JhKDE2MCwgMjEwLCAyNTAsIDAuMikpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtNCBiZy1zdXJmYWNlLTAgZGFyazpiZy1zdXJmYWNlLTkwMCBoLWZ1bGxcIiBzdHlsZT1cImJvcmRlci1yYWRpdXM6IDhweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctb3JhbmdlLTIwMCBtYi00XCIgc3R5bGU9XCJ3aWR0aDogMy41cmVtOyBoZWlnaHQ6IDMuNXJlbTsgYm9yZGVyLXJhZGl1czogMTBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwaSBwaS1mdyBwaS1zdGFyIHRleHQtMnhsISB0ZXh0LW9yYW5nZS03MDBcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtNiBtYi0xIHRleHQtc3VyZmFjZS05MDAgZGFyazp0ZXh0LXN1cmZhY2UtMCB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5DbGVhbiBDb2RlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdXJmYWNlLTYwMCBkYXJrOnRleHQtc3VyZmFjZS0yMDBcIj5Db25kaW1lbnR1bSBsYWNpbmlhIHF1aXMgdmVsIGVyb3MuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zcGFuLTEyIG1kOmNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTQgcC0wIGxnOnBiLTggbXQtNiBsZzptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiAxNjBweDsgcGFkZGluZzogMnB4OyBib3JkZXItcmFkaXVzOiAxMHB4OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjUxLCAxOTksIDE0NSwgMC4yKSwgcmdiYSgyNDYsIDE1OCwgMTg4LCAwLjIpKSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgxNzIsIDE4MCwgMjIzLCAwLjIpLCByZ2JhKDIxMiwgMTYyLCAyMjEsIDAuMikpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtNCBiZy1zdXJmYWNlLTAgZGFyazpiZy1zdXJmYWNlLTkwMCBoLWZ1bGxcIiBzdHlsZT1cImJvcmRlci1yYWRpdXM6IDhweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctcGluay0yMDAgbWItNFwiIHN0eWxlPVwid2lkdGg6IDMuNXJlbTsgaGVpZ2h0OiAzLjVyZW07IGJvcmRlci1yYWRpdXM6IDEwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGkgcGktZncgcGktbW9vbiB0ZXh0LTJ4bCEgdGV4dC1waW5rLTcwMFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC02IG1iLTEgdGV4dC1zdXJmYWNlLTkwMCBkYXJrOnRleHQtc3VyZmFjZS0wIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPkRhcmsgTW9kZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc3VyZmFjZS02MDAgZGFyazp0ZXh0LXN1cmZhY2UtMjAwXCI+Q29udmFsbGlzIHRlbGx1cyBpZCBpbnRlcmR1bSB2ZWxpdCBsYW9yZWV0Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc3Bhbi0xMiBtZDpjb2wtc3Bhbi0xMiBsZzpjb2wtc3Bhbi00IHAtMCBsZzpwci04IG10LTYgbGc6bXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDogMTYwcHg7IHBhZGRpbmc6IDJweDsgYm9yZGVyLXJhZGl1czogMTBweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE0NSwgMjEwLCAyMDQsIDAuMiksIHJnYmEoMTYwLCAyMTAsIDI1MCwgMC4yKSksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMTg3LCAxOTksIDIwNSwgMC4yKSwgcmdiYSgxNDUsIDIxMCwgMjA0LCAwLjIpKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTQgYmctc3VyZmFjZS0wIGRhcms6Ymctc3VyZmFjZS05MDAgaC1mdWxsXCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiA4cHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXRlYWwtMjAwIG1iLTRcIiBzdHlsZT1cIndpZHRoOiAzLjVyZW07IGhlaWdodDogMy41cmVtOyBib3JkZXItcmFkaXVzOiAxMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBpIHBpLWZ3IHBpLXNob3BwaW5nLWNhcnQgdGV4dC0yeGwhIHRleHQtdGVhbC03MDBcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtNiBtYi0xIHRleHQtc3VyZmFjZS05MDAgZGFyazp0ZXh0LXN1cmZhY2UtMCB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5SZWFkeSB0byBVc2U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1cmZhY2UtNjAwIGRhcms6dGV4dC1zdXJmYWNlLTIwMFwiPk1hdXJpcyBzaXQgYW1ldCBtYXNzYSB2aXRhZS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNwYW4tMTIgbWQ6Y29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tNCBwLTAgbGc6cHItOCBtdC02IGxnOm10LTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDE2MHB4OyBwYWRkaW5nOiAycHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxNDUsIDIxMCwgMjA0LCAwLjIpLCByZ2JhKDIxMiwgMTYyLCAyMjEsIDAuMikpLCBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1MSwgMTk5LCAxNDUsIDAuMiksIHJnYmEoMTYwLCAyMTAsIDI1MCwgMC4yKSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC00IGJnLXN1cmZhY2UtMCBkYXJrOmJnLXN1cmZhY2UtOTAwIGgtZnVsbFwiIHN0eWxlPVwiYm9yZGVyLXJhZGl1czogOHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibHVlLTIwMCBtYi00XCIgc3R5bGU9XCJ3aWR0aDogMy41cmVtOyBoZWlnaHQ6IDMuNXJlbTsgYm9yZGVyLXJhZGl1czogMTBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwaSBwaS1mdyBwaS1nbG9iZSB0ZXh0LTJ4bCEgdGV4dC1ibHVlLTcwMFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC02IG1iLTEgdGV4dC1zdXJmYWNlLTkwMCBkYXJrOnRleHQtc3VyZmFjZS0wIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPk1vZGVybiBQcmFjdGljZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1cmZhY2UtNjAwIGRhcms6dGV4dC1zdXJmYWNlLTIwMFwiPkVsZW1lbnR1bSBuaWJoIHRlbGx1cyBtb2xlc3RpZSBudW5jIG5vbi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNwYW4tMTIgbWQ6Y29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tNCBwLTAgbGctNCBtdC02IGxnOm10LTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDE2MHB4OyBwYWRkaW5nOiAycHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxNjAsIDIxMCwgMjUwLCAwLjIpLCByZ2JhKDIxMiwgMTYyLCAyMjEsIDAuMikpLCBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI0NiwgMTU4LCAxODgsIDAuMiksIHJnYmEoMjEyLCAxNjIsIDIyMSwgMC4yKSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC00IGJnLXN1cmZhY2UtMCBkYXJrOmJnLXN1cmZhY2UtOTAwIGgtZnVsbFwiIHN0eWxlPVwiYm9yZGVyLXJhZGl1czogOHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1wdXJwbGUtMjAwIG1iLTRcIiBzdHlsZT1cIndpZHRoOiAzLjVyZW07IGhlaWdodDogMy41cmVtOyBib3JkZXItcmFkaXVzOiAxMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBpIHBpLWZ3IHBpLWV5ZSB0ZXh0LTJ4bCEgdGV4dC1wdXJwbGUtNzAwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTYgbWItMSB0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTAgdGV4dC14bCBmb250LXNlbWlib2xkXCI+UHJpdmFjeTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc3VyZmFjZS02MDAgZGFyazp0ZXh0LXN1cmZhY2UtMjAwXCI+TmVxdWUgZWdlc3RhcyBjb25ndWUgcXVpc3F1ZS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNvbC1zcGFuLTEyIG10LTIwIG1iLTIwIHAtMiBtZDpwLTIwXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPVwiYm9yZGVyLXJhZGl1czogMjBweDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpKSwgcmFkaWFsLWdyYWRpZW50KDc3LjM2JSAyNTYuOTclIGF0IDc3LjM2JSA1Ny41MiUsICNlZmUxYWYgMCUsICNjM2RjZmEgMTAwJSlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgcHgtNCBweS00IG1kOnB5LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmF5LTkwMCBtYi0yIHRleHQtM3hsIGZvbnQtc2VtaWJvbGRcIj5Kb3PDqXBoaW5lIE1pbGxlcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ncmF5LTYwMCB0ZXh0LTJ4bFwiPlBlYWsgSW50ZXJhY3RpdmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyYXktOTAwIHNtOmxpbmUtaGVpZ2h0LTIgbWQ6bGluZS1oZWlnaHQtNCB0ZXh0LTJ4bCBtdC02XCIgc3R5bGU9XCJtYXgtd2lkdGg6IDgwMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKAnER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLuKAnVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcHJpbWVmYWNlcy5vcmcvY2RuL3RlbXBsYXRlcy9zYWthaS9sYW5kaW5nL3BlYWstbG9nby5zdmdcIiBjbGFzcz1cIm10LTZcIiBhbHQ9XCJDb21wYW55IGxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmVhdHVyZXNXaWRnZXQge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaGlnaGxpZ2h0cy13aWRnZXQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGlkPVwiaGlnaGxpZ2h0c1wiIGNsYXNzPVwicHktNiBweC02IGxnOnB4LTIwIG14LTAgbXktMTIgbGc6bXgtMjBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdXJmYWNlLTkwMCBkYXJrOnRleHQtc3VyZmFjZS0wIGZvbnQtbm9ybWFsIG1iLTIgdGV4dC00eGxcIj5Qb3dlcmZ1bCBFdmVyeXdoZXJlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbXV0ZWQtY29sb3IgdGV4dC0yeGxcIj5BbWV0IGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTQgbXQtMjAgcGItMiBtZDpwYi0yMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgY29sLXNwYW4tMTIgbGc6Y29sLXNwYW4tNiBiZy1wdXJwbGUtMTAwIHAtMCBvcmRlci0xIGxnOm9yZGVyLTBcIiBzdHlsZT1cImJvcmRlci1yYWRpdXM6IDhweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9wcmltZWZhY2VzLm9yZy9jZG4vdGVtcGxhdGVzL3Nha2FpL2xhbmRpbmcvbW9ja3VwLnBuZ1wiIGNsYXNzPVwidy0xMS8xMlwiIGFsdD1cIm1vY2t1cCBtb2JpbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTYgbXktYXV0byBmbGV4IGZsZXgtY29sIGxnOml0ZW1zLWVuZCB0ZXh0LWNlbnRlciBsZzp0ZXh0LXJpZ2h0IGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXB1cnBsZS0yMDAgc2VsZi1jZW50ZXIgbGc6c2VsZi1lbmRcIiBzdHlsZT1cIndpZHRoOiA0LjJyZW07IGhlaWdodDogNC4ycmVtOyBib3JkZXItcmFkaXVzOiAxMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGkgcGktZncgcGktbW9iaWxlIHRleHQtNHhsISB0ZXh0LXB1cnBsZS03MDBcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlYWRpbmctbm9uZSB0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTAgdGV4dC0zeGwgZm9udC1ub3JtYWxcIj5Db25ndWUgUXVpc3F1ZSBFZ2VzdGFzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1cmZhY2UtNzAwIGRhcms6dGV4dC1zdXJmYWNlLTEwMCB0ZXh0LTJ4bCBsZWFkaW5nLW5vcm1hbCBtbC0wIG1kOm1sLTJcIiBzdHlsZT1cIm1heC13aWR0aDogNjUwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+TGVjdHVzIGFyY3UgYmliZW5kdW0gYXQgdmFyaXVzIHZlbCBwaGFyZXRyYSB2ZWwgdHVycGlzIG51bmMuIEVnZXQgYWxpcXVldCBuaWJoIHByYWVzZW50IHRyaXN0aXF1ZSBtYWduYSBzaXQgYW1ldCBwdXJ1cyBncmF2aWRhLiBTaXQgYW1ldCBtYXR0aXMgdnVscHV0YXRlIGVuaW0gbnVsbGEgYWxpcXVldC48L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTQgbXktMjAgcHQtMiBtZDpwdC0yMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTYgbXktYXV0byBmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIGxnOnRleHQtbGVmdCBsZzppdGVtcy1zdGFydCBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy15ZWxsb3ctMjAwIHNlbGYtY2VudGVyIGxnOnNlbGYtc3RhcnRcIiBzdHlsZT1cIndpZHRoOiA0LjJyZW07IGhlaWdodDogNC4ycmVtOyBib3JkZXItcmFkaXVzOiAxMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGkgcGktZncgcGktZGVza3RvcCB0ZXh0LTN4bCEgdGV4dC15ZWxsb3ctNzAwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWFkaW5nLW5vbmUgdGV4dC1zdXJmYWNlLTkwMCBkYXJrOnRleHQtc3VyZmFjZS0wIHRleHQtM3hsIGZvbnQtbm9ybWFsXCI+Q2VsZXJpc3F1ZSBFdSBVbHRyaWNlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdXJmYWNlLTcwMCBkYXJrOnRleHQtc3VyZmFjZS0xMDAgdGV4dC0yeGwgbGVhZGluZy1ub3JtYWwgbXItMCBtZDptci0yXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDY1MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPkFkaXBpc2NpbmcgY29tbW9kbyBlbGl0IGF0IGltcGVyZGlldCBkdWkuIFZpdmVycmEgbmliaCBjcmFzIHB1bHZpbmFyIG1hdHRpcyBudW5jIHNlZCBibGFuZGl0IGxpYmVyby4gU3VzcGVuZGlzc2UgaW4gZXN0IGFudGUgaW4uIE1hdXJpcyBwaGFyZXRyYSBldCB1bHRyaWNlcyBuZXF1ZSBvcm5hcmUgYWVuZWFuIGV1aXNtb2QgZWxlbWVudHVtIG5pc2kuPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1lbmQgb3JkZXItMSBzbTpvcmRlci0yIGNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTYgYmcteWVsbG93LTEwMCBwLTBcIiBzdHlsZT1cImJvcmRlci1yYWRpdXM6IDhweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9wcmltZWZhY2VzLm9yZy9jZG4vdGVtcGxhdGVzL3Nha2FpL2xhbmRpbmcvbW9ja3VwLWRlc2t0b3AucG5nXCIgY2xhc3M9XCJ3LTExLzEyXCIgYWx0PVwibW9ja3VwXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodHNXaWRnZXQge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcclxuaW1wb3J0IHsgRGl2aWRlck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZGl2aWRlcic7XHJcbmltcG9ydCB7IFJpcHBsZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcmlwcGxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwcmljaW5nLXdpZGdldCcsXHJcbiAgICBpbXBvcnRzOiBbRGl2aWRlck1vZHVsZSwgQnV0dG9uTW9kdWxlLCBSaXBwbGVNb2R1bGVdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGlkPVwicHJpY2luZ1wiIGNsYXNzPVwicHktNiBweC02IGxnOnB4LTIwIG15LTIgbWQ6bXktNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbWItNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VyZmFjZS05MDAgZGFyazp0ZXh0LXN1cmZhY2UtMCBmb250LW5vcm1hbCBtYi0yIHRleHQtNHhsXCI+TWF0Y2hsZXNzIFByaWNpbmc8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1tdXRlZC1jb2xvciB0ZXh0LTJ4bFwiPkFtZXQgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0Li4uPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIGdyaWQtY29scy0xMiBnYXAtNCBqdXN0aWZ5LWJldHdlZW4gbXQtMjAgbWQ6bXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTQgcC0wIG1kOnAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTQgZmxleCBmbGV4LWNvbCBib3JkZXItc3VyZmFjZS0yMDAgZGFyazpib3JkZXItc3VyZmFjZS02MDAgcHJpY2luZy1jYXJkIGN1cnNvci1wb2ludGVyIGJvcmRlci0yIGhvdmVyOmJvcmRlci1wcmltYXJ5IGR1cmF0aW9uLTMwMCB0cmFuc2l0aW9uLWFsbFwiIHN0eWxlPVwiYm9yZGVyLXJhZGl1czogMTBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdXJmYWNlLTkwMCBkYXJrOnRleHQtc3VyZmFjZS0wIHRleHQtY2VudGVyIG15LTggdGV4dC0zeGxcIj5GcmVlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9wcmltZWZhY2VzLm9yZy9jZG4vdGVtcGxhdGVzL3Nha2FpL2xhbmRpbmcvZnJlZS5zdmdcIiBjbGFzcz1cInctMTAvMTIgbXgtYXV0b1wiIGFsdD1cImZyZWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXktOCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LTV4bCBmb250LWJvbGQgbXItMiB0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTBcIj4kMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc3VyZmFjZS02MDAgZGFyazp0ZXh0LXN1cmZhY2UtMjAwXCI+cGVyIG1vbnRoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHBCdXR0b24gcFJpcHBsZSBsYWJlbD1cIkdldCBTdGFydGVkXCIgY2xhc3M9XCJwLWJ1dHRvbi1yb3VuZGVkIGJvcmRlci0wIG1sLTQgZm9udC1saWdodCBsZWFkaW5nLXRpZ2h0IGJnLWJsdWUtNTAwIHRleHQtd2hpdGVcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRpdmlkZXIgY2xhc3M9XCJ3LWZ1bGwgYmctc3VyZmFjZS0yMDBcIj48L3AtZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibXktOCBsaXN0LW5vbmUgcC0wIGZsZXggdGV4dC1zdXJmYWNlLTkwMCBkYXJrOnRleHQtc3VyZmFjZS0wIGZsZXgtY29sIHB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBpIHBpLWZ3IHBpLWNoZWNrIHRleHQteGwgdGV4dC1jeWFuLTUwMCBtci0yXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14bCBsZWFkaW5nLW5vcm1hbFwiPlJlc3BvbnNpdmUgTGF5b3V0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBpIHBpLWZ3IHBpLWNoZWNrIHRleHQteGwgdGV4dC1jeWFuLTUwMCBtci0yXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14bCBsZWFkaW5nLW5vcm1hbFwiPlVubGltaXRlZCBQdXNoIE1lc3NhZ2VzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBpIHBpLWZ3IHBpLWNoZWNrIHRleHQteGwgdGV4dC1jeWFuLTUwMCBtci0yXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14bCBsZWFkaW5nLW5vcm1hbFwiPjUwIFN1cHBvcnQgVGlja2V0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBpIHBpLWZ3IHBpLWNoZWNrIHRleHQteGwgdGV4dC1jeWFuLTUwMCBtci0yXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14bCBsZWFkaW5nLW5vcm1hbFwiPkZyZWUgU2hpcHBpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zcGFuLTEyIGxnOmNvbC1zcGFuLTQgcC0wIG1kOnAtNCBtdC02IG1kOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC00IGZsZXggZmxleC1jb2wgYm9yZGVyLXN1cmZhY2UtMjAwIGRhcms6Ym9yZGVyLXN1cmZhY2UtNjAwIHByaWNpbmctY2FyZCBjdXJzb3ItcG9pbnRlciBib3JkZXItMiBob3Zlcjpib3JkZXItcHJpbWFyeSBkdXJhdGlvbi0zMDAgdHJhbnNpdGlvbi1hbGxcIiBzdHlsZT1cImJvcmRlci1yYWRpdXM6IDEwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VyZmFjZS05MDAgZGFyazp0ZXh0LXN1cmZhY2UtMCB0ZXh0LWNlbnRlciBteS04IHRleHQtM3hsXCI+U3RhcnR1cDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcHJpbWVmYWNlcy5vcmcvY2RuL3RlbXBsYXRlcy9zYWthaS9sYW5kaW5nL3N0YXJ0dXAuc3ZnXCIgY2xhc3M9XCJ3LTEwLzEyIG14LWF1dG9cIiBhbHQ9XCJzdGFydHVwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm15LTggZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC01eGwgZm9udC1ib2xkIG1yLTIgdGV4dC1zdXJmYWNlLTkwMCBkYXJrOnRleHQtc3VyZmFjZS0wXCI+JDE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1cmZhY2UtNjAwIGRhcms6dGV4dC1zdXJmYWNlLTIwMFwiPnBlciBtb250aDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBwQnV0dG9uIHBSaXBwbGUgbGFiZWw9XCJHZXQgU3RhcnRlZFwiIGNsYXNzPVwicC1idXR0b24tcm91bmRlZCBib3JkZXItMCBtbC00IGZvbnQtbGlnaHQgbGVhZGluZy10aWdodCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1kaXZpZGVyIGNsYXNzPVwidy1mdWxsIGJnLXN1cmZhY2UtMjAwXCI+PC9wLWRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm15LTggbGlzdC1ub25lIHAtMCBmbGV4IHRleHQtc3VyZmFjZS05MDAgZGFyazp0ZXh0LXN1cmZhY2UtMCBmbGV4LWNvbCBweC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwaSBwaS1mdyBwaS1jaGVjayB0ZXh0LXhsIHRleHQtY3lhbi01MDAgbXItMlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQteGwgbGVhZGluZy1ub3JtYWxcIj5SZXNwb25zaXZlIExheW91dDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwaSBwaS1mdyBwaS1jaGVjayB0ZXh0LXhsIHRleHQtY3lhbi01MDAgbXItMlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQteGwgbGVhZGluZy1ub3JtYWxcIj5VbmxpbWl0ZWQgUHVzaCBNZXNzYWdlczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwaSBwaS1mdyBwaS1jaGVjayB0ZXh0LXhsIHRleHQtY3lhbi01MDAgbXItMlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQteGwgbGVhZGluZy1ub3JtYWxcIj41MCBTdXBwb3J0IFRpY2tldDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwaSBwaS1mdyBwaS1jaGVjayB0ZXh0LXhsIHRleHQtY3lhbi01MDAgbXItMlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQteGwgbGVhZGluZy1ub3JtYWxcIj5GcmVlIFNoaXBwaW5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc3Bhbi0xMiBsZzpjb2wtc3Bhbi00IHAtMCBtZDpwLTQgbXQtNiBtZDptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtNCBmbGV4IGZsZXgtY29sIGJvcmRlci1zdXJmYWNlLTIwMCBkYXJrOmJvcmRlci1zdXJmYWNlLTYwMCBwcmljaW5nLWNhcmQgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLTIgaG92ZXI6Ym9yZGVyLXByaW1hcnkgZHVyYXRpb24tMzAwIHRyYW5zaXRpb24tYWxsXCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiAxMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTAgdGV4dC1jZW50ZXIgbXktOCB0ZXh0LTN4bFwiPkVudGVycHJpc2U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3ByaW1lZmFjZXMub3JnL2Nkbi90ZW1wbGF0ZXMvc2FrYWkvbGFuZGluZy9lbnRlcnByaXNlLnN2Z1wiIGNsYXNzPVwidy0xMC8xMiBteC1hdXRvXCIgYWx0PVwiZW50ZXJwcmlzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteS04IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtNXhsIGZvbnQtYm9sZCBtci0yIHRleHQtc3VyZmFjZS05MDAgZGFyazp0ZXh0LXN1cmZhY2UtMFwiPiQ1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdXJmYWNlLTYwMCBkYXJrOnRleHQtc3VyZmFjZS0yMDBcIj5wZXIgbW9udGg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gcEJ1dHRvbiBwUmlwcGxlIGxhYmVsPVwiVHJ5IEZyZWVcIiBjbGFzcz1cInAtYnV0dG9uLXJvdW5kZWQgYm9yZGVyLTAgbWwtNCBmb250LWxpZ2h0IGxlYWRpbmctdGlnaHQgYmctYmx1ZS01MDAgdGV4dC13aGl0ZVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtZGl2aWRlciBjbGFzcz1cInctZnVsbCBiZy1zdXJmYWNlLTIwMFwiPjwvcC1kaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJteS04IGxpc3Qtbm9uZSBwLTAgZmxleCB0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTAgZmxleC1jb2wgcHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGkgcGktZncgcGktY2hlY2sgdGV4dC14bCB0ZXh0LWN5YW4tNTAwIG1yLTJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXhsIGxlYWRpbmctbm9ybWFsXCI+UmVzcG9uc2l2ZSBMYXlvdXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGkgcGktZncgcGktY2hlY2sgdGV4dC14bCB0ZXh0LWN5YW4tNTAwIG1yLTJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXhsIGxlYWRpbmctbm9ybWFsXCI+VW5saW1pdGVkIFB1c2ggTWVzc2FnZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGkgcGktZncgcGktY2hlY2sgdGV4dC14bCB0ZXh0LWN5YW4tNTAwIG1yLTJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXhsIGxlYWRpbmctbm9ybWFsXCI+NTAgU3VwcG9ydCBUaWNrZXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGkgcGktZncgcGktY2hlY2sgdGV4dC14bCB0ZXh0LWN5YW4tNTAwIG1yLTJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXhsIGxlYWRpbmctbm9ybWFsXCI+RnJlZSBTaGlwcGluZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcmljaW5nV2lkZ2V0IHt9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZm9vdGVyLXdpZGdldCcsXHJcbiAgICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInB5LTEyIHB4LTEyIG14LTAgbXQtMjAgbGc6bXgtMjBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTEyIGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNwYW4tMTIgbWQ6Y29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJyb3V0ZXIubmF2aWdhdGUoWycvcGFnZXMvbGFuZGluZyddLCB7IGZyYWdtZW50OiAnaG9tZScgfSlcIiBjbGFzcz1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtZDpqdXN0aWZ5LXN0YXJ0IG1kOm1iLTAgbWItNiBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNTQgNDBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImgtMTQgbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE3LjE2MzcgMTkuMjQ2N0MxNy4xNTY2IDE5LjQwMzMgMTcuMTUyOSAxOS41NjEgMTcuMTUyOSAxOS43MTk0QzE3LjE1MjkgMjUuMzUwMyAyMS43MjAzIDI5LjkxNSAyNy4zNTQ2IDI5LjkxNUMzMi45ODg3IDI5LjkxNSAzNy41NTYxIDI1LjM1MDMgMzcuNTU2MSAxOS43MTk0QzM3LjU1NjEgMTkuNTU3MiAzNy41NTI0IDE5LjM5NTkgMzcuNTQ0OSAxOS4yMzU1QzM4LjU2MTcgMTkuMDgwMSAzOS41NzU5IDE4LjkwMTMgNDAuNTg2NyAxOC42OTk0TDQwLjY5MjYgMTguNjc4MkM0MC43MTkxIDE5LjAyMTggNDAuNzMyNiAxOS4zNjkgNDAuNzMyNiAxOS43MTk0QzQwLjczMjYgMjcuMTAzNiAzNC43NDMgMzMuMDg5NiAyNy4zNTQ2IDMzLjA4OTZDMTkuOTY2IDMzLjA4OTYgMTMuOTc2NSAyNy4xMDM2IDEzLjk3NjUgMTkuNzE5NEMxMy45NzY1IDE5LjM3NCAxMy45ODk2IDE5LjAzMTYgMTQuMDE1NCAxOC42OTI3TDE0LjA0ODYgMTguNjk5NEMxNS4wODM3IDE4LjkwNjIgMTYuMTIyMyAxOS4wODg2IDE3LjE2MzcgMTkuMjQ2N1pNMzMuMzI4NCAxMS40NTM4QzMxLjY0OTMgMTAuMjM5NiAyOS41ODU1IDkuNTIzODEgMjcuMzU0NiA5LjUyMzgxQzI1LjExOTUgOS41MjM4MSAyMy4wNTI0IDEwLjI0MjEgMjEuMzcxNyAxMS40NjAzQzIwLjAwNzggMTEuMzIzMiAxOC42NDc1IDExLjEzODcgMTcuMjkzMyAxMC45MDdDMTkuNzQ1MyA4LjExMzA4IDIzLjM0MzggNi4zNDkyMSAyNy4zNTQ2IDYuMzQ5MjFDMzEuMzYgNi4zNDkyMSAzNC45NTQzIDguMTA4NDQgMzcuNDA2MSAxMC44OTZDMzYuMDUyMSAxMS4xMjkyIDM0LjY5MiAxMS4zMTUyIDMzLjMyODQgMTEuNDUzOFpNNDMuODI2IDE4LjA1MThDNDMuODgxIDE4LjYwMDMgNDMuOTA5MSAxOS4xNTY2IDQzLjkwOTEgMTkuNzE5NEM0My45MDkxIDI4Ljg1NjggMzYuNDk3MyAzNi4yNjQyIDI3LjM1NDYgMzYuMjY0MkMxOC4yMTE3IDM2LjI2NDIgMTAuOCAyOC44NTY4IDEwLjggMTkuNzE5NEMxMC44IDE5LjE2MTUgMTAuODI3NiAxOC42MSAxMC44ODE2IDE4LjA2NjNMNy43NTM4MyAxNy40NDExQzcuNjY3NzUgMTguMTg4NiA3LjYyMzU0IDE4Ljk0ODggNy42MjM1NCAxOS43MTk0QzcuNjIzNTQgMzAuNjEwMiAxNi40NTc0IDM5LjQzODggMjcuMzU0NiAzOS40Mzg4QzM4LjI1MTcgMzkuNDM4OCA0Ny4wODU1IDMwLjYxMDIgNDcuMDg1NSAxOS43MTk0QzQ3LjA4NTUgMTguOTQzOSA0Ny4wNDA3IDE4LjE3ODkgNDYuOTUzNiAxNy40MjY3TDQzLjgyNiAxOC4wNTE4Wk00NC4yNjEzIDkuNTQ3NDNMNDAuOTA4NCAxMC4yMTc2QzM3LjkxMzQgNS45NTgyMSAzMi45NTkzIDMuMTc0NiAyNy4zNTQ2IDMuMTc0NkMyMS43NDQyIDMuMTc0NiAxNi43ODU2IDUuOTYzODUgMTMuNzkxNSAxMC4yMzA1TDEwLjQzOTkgOS41NjA1N0MxMy44OTIgMy44MzE3OCAyMC4xNzU2IDAgMjcuMzU0NiAwQzM0LjUyODEgMCA0MC44MDc1IDMuODI1OTEgNDQuMjYxMyA5LjU0NzQzWlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLXByaW1hcnktY29sb3IpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD1cIm1hc2swXzE0MTNfMTU1MVwiIHN0eWxlPVwibWFzay10eXBlOiBhbHBoYVwiIG1hc2tVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgeD1cIjBcIiB5PVwiOFwiIHdpZHRoPVwiNTRcIiBoZWlnaHQ9XCIxMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjcgMTguMzY1MkMxMC41MTE0IDE5LjE5NDQgMCA4Ljg4ODkyIDAgOC44ODg5MkMwIDguODg4OTIgMTYuNTE3NiAxNC41ODY2IDI3IDE0LjU4NjZDMzcuNDgyNCAxNC41ODY2IDU0IDguODg4OTIgNTQgOC44ODg5MkM1NCA4Ljg4ODkyIDQzLjQ4ODYgMTcuNTM2MSAyNyAxOC4zNjUyWlwiIGZpbGw9XCJ2YXIoLS1wcmltYXJ5LWNvbG9yKVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBtYXNrPVwidXJsKCNtYXNrMF8xNDEzXzE1NTEpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0tNC42NzNlLTA1IDguODg4ODdMMy43MzA4NCAtMS45MTQzNEwtOC4wMDgwNiAxNy4wNDczTC00LjY3M2UtMDUgOC44ODg4N1pNMjcgMTguMzY1MkwyNi40MjUzIDYuOTUxMDlMMjcgMTguMzY1MlpNNTQgOC44ODg4N0w2MS4yNjczIDE3LjcxMjdMNTAuMjY5MSAtMS45MTQzNEw1NCA4Ljg4ODg3Wk0tNC42NzNlLTA1IDguODg4ODdDLTguMDA4MDYgMTcuMDQ3MyAtOC4wMDQ2OSAxNy4wNTA1IC04LjAwMTMyIDE3LjA1MzhDLTguMDAwMTggMTcuMDU1IC03Ljk5Njc1IDE3LjA1ODMgLTcuOTk0NCAxNy4wNjA3Qy03Ljk4OTYzIDE3LjA2NTMgLTcuOTg0NzQgMTcuMDcwMSAtNy45Nzk2NiAxNy4wNzVDLTcuOTY5NDkgMTcuMDg0OSAtNy45NTg2MyAxNy4wOTU1IC03Ljk0NzA3IDE3LjEwNjZDLTcuOTI0MDEgMTcuMTI5IC03Ljg5ODA5IDE3LjE1MzkgLTcuODY5NDQgMTcuMTgxMkMtNy44MTIyIDE3LjIzNiAtNy43NDM3NyAxNy4zMDA1IC03LjY2NDM2IDE3LjM3NDNDLTcuNTA1NjcgMTcuNTIxOCAtNy4zMDI2OSAxNy43MDYzIC03LjA1NjQ1IDE3LjkyMjFDLTYuNTY0NjcgMTguMzUzMiAtNS44OTY2MiAxOC45MTI1IC01LjA2MDg5IDE5LjU1MzRDLTMuMzk2MDMgMjAuODMgLTEuMDI1NzUgMjIuNDYwNSAxLjk4MDEyIDI0LjA0NTdDNy45Nzg3NCAyNy4yMDkxIDE2Ljc3MjMgMzAuMzIyNiAyNy41NzQ2IDI5Ljc3OTNMMjYuNDI1MyA2Ljk1MTA5QzIwLjczOTEgNy4yMzY5OSAxNi4wMzI2IDUuNjEyMzEgMTIuNjUzNCAzLjgzMDI0QzEwLjk3MDMgMi45NDI2NyA5LjY4MjIyIDIuMDQ4NjYgOC44NjA5MSAxLjQxODg4QzguNDUzNTYgMS4xMDY1MyA4LjE3MTU1IDAuODY3Mjc4IDguMDI0MSAwLjczODAyN0M3Ljk1MDcyIDAuNjczNjcxIDcuOTExNzggMC42Mzc1NzYgNy45MDg0MSAwLjYzNDQ5MkM3LjkwNjgyIDAuNjMyOTggNy45MTQxOSAwLjYzOTgwNSA3LjkzMDcxIDAuNjU1NTdDNy45Mzg5NyAwLjY2MzQ1NSA3Ljk0OTUyIDAuNjczNTg5IDcuOTYyMzUgMC42ODYwMzlDNy45Njg4MyAwLjY5MjI2MiA3Ljk3NTgyIDAuNjk5MDc1IDcuOTgzMzggMC43MDY0NzFDNy45ODcxOSAwLjcxMDE2NyA3Ljk5MTEzIDAuNzE0MDE0IDcuOTk1MjYgMC43MTgwMTRDNy45OTcyOSAwLjcyMDAwOCA4LjAwMDQ3IDAuNzIzMTE5IDguMDAxNDggMC43MjQxMTZDOC4wMDQ2NiAwLjcyNzI2NSA4LjAwNzk2IDAuNzMwNDQ2IC00LjY3M2UtMDUgOC44ODg4N1pNMjcuNTc0NiAyOS43NzkzQzM3LjY5MDQgMjkuMjcwNiA0NS45NDE2IDI2LjM2ODQgNTEuNjYwMiAyMy42MDU0QzU0LjUyOTYgMjIuMjE5MSA1Ni44MDY0IDIwLjg0NjUgNTguNDE4NiAxOS43Nzg0QzU5LjIyNjUgMTkuMjQzMSA1OS44NzMgMTguNzgwNSA2MC4zNDk0IDE4LjQyNTdDNjAuNTg3OCAxOC4yNDgyIDYwLjc4NDEgMTguMDk3MSA2MC45Mzc0IDE3Ljk3N0M2MS4wMTQgMTcuOTE2OSA2MS4wNzk5IDE3Ljg2NDUgNjEuMTM0OSAxNy44MjAzQzYxLjE2MjQgMTcuNzk4MSA2MS4xODcyIDE3Ljc3ODEgNjEuMjA5MyAxNy43NjAyQzYxLjIyMDMgMTcuNzUxMiA2MS4yMzA3IDE3Ljc0MjcgNjEuMjQwMyAxNy43MzQ4QzYxLjI0NTIgMTcuNzMwOCA2MS4yNDk5IDE3LjcyNyA2MS4yNTQ0IDE3LjcyMzNDNjEuMjU2NiAxNy43MjE1IDYxLjI1OTggMTcuNzE4OCA2MS4yNjEgMTcuNzE3OUM2MS4yNjQyIDE3LjcxNTMgNjEuMjY3MyAxNy43MTI3IDU0IDguODg4ODdDNDYuNzMyNiAwLjA2NTA1MzYgNDYuNzM1NyAwLjA2MjUyMTkgNDYuNzM4NyAwLjA2MDAyNDFDNDYuNzM5NyAwLjA1OTIzNDUgNDYuNzQyNyAwLjA1Njc2NTggNDYuNzQ0NiAwLjA1NTE4NTdDNDYuNzQ4NSAwLjA1MjAyMzggNDYuNzUyMSAwLjA0ODk4ODcgNDYuNzU1NyAwLjA0NjA3OTlDNDYuNzYyOCAwLjA0MDI2MjMgNDYuNzY5NCAwLjAzNDk0ODcgNDYuNzc1MyAwLjAzMDEzMThDNDYuNzg3MSAwLjAyMDQ5ODYgNDYuNzk2NiAwLjAxMjg0OTUgNDYuODAzNyAwLjAwNzEyNTYyQzQ2LjgxOCAtMC4wMDQzMTg0OCA0Ni44MjI4IC0wLjAwODA4MzExIDQ2LjgxODQgLTAuMDA0NjM3ODRDNDYuODA5NiAwLjAwMjI4MzQ1IDQ2Ljc2NCAwLjAzNzg2NTIgNDYuNjgyOCAwLjA5ODM3NzlDNDYuNTE5OSAwLjIxOTY3NSA0Ni4yMTY1IDAuNDM5MTYxIDQ1Ljc4MTIgMC43Mjc1MTlDNDQuOTA3MiAxLjMwNjYzIDQzLjUyNTcgMi4xNDc2NSA0MS43MDYxIDMuMDI2NzdDMzguMDQ2OSA0Ljc5NDY4IDMyLjc5ODEgNi42MzA1OCAyNi40MjUzIDYuOTUxMDlMMjcuNTc0NiAyOS43NzkzWk01NCA4Ljg4ODg3QzUwLjI2OTEgLTEuOTE0MzMgNTAuMjcgLTEuOTE0NjcgNTAuMjcxIC0xLjkxNDk4QzUwLjI3MTIgLTEuOTE1MDYgNTAuMjcyIC0xLjkxNTM1IDUwLjI3MjQgLTEuOTE1NUM1MC4yNzMzIC0xLjkxNTgxIDUwLjI3NCAtMS45MTYwMiA1MC4yNzQzIC0xLjkxNjE2QzUwLjI3NTIgLTEuOTE2NDMgNTAuMjc1IC0xLjkxNjM2IDUwLjI3MzggLTEuOTE1OTVDNTAuMjcxNCAtMS45MTUxNSA1MC4yNjUyIC0xLjkxMzAyIDUwLjI1NTIgLTEuOTA5NkM1MC4yMzUxIC0xLjkwMjc2IDUwLjE5OTkgLTEuODkwNzggNTAuMTUwMyAtMS44NzRDNTAuMDUwOSAtMS44NDA0MyA0OS44OTM4IC0xLjc4NzczIDQ5LjY4NDQgLTEuNzE4NjNDNDkuMjY1MiAtMS41ODAzMSA0OC42Mzg3IC0xLjM3NyA0Ny44NDgxIC0xLjEzMDM1QzQ2LjI2MDkgLTAuNjM1MjM3IDQ0LjA0MjcgMC4wMjQ5ODc1IDQxLjUzMjUgMC42ODIzQzM2LjIxNSAyLjA3NDcxIDMwLjY3MzYgMy4xNTc5NiAyNyAzLjE1Nzk2VjI2LjAxNTFDMzMuODA4NyAyNi4wMTUxIDQxLjc2NzIgMjQuMjQ5NSA0Ny4zMjkyIDIyLjc5MzFDNTAuMjU4NiAyMi4wMjYgNTIuODI1IDIxLjI2MTggNTQuNjYyNSAyMC42ODg2QzU1LjU4NDIgMjAuNDAxMSA1Ni4zMyAyMC4xNTkzIDU2Ljg1NTEgMTkuOTg2QzU3LjExNzggMTkuODk5MyA1Ny4zMjU4IDE5LjgyOTYgNTcuNDczNSAxOS43Nzk3QzU3LjU0NzQgMTkuNzU0OCA1Ny42MDYyIDE5LjczNDggNTcuNjQ5MyAxOS43MkM1Ny42NzA5IDE5LjcxMjcgNTcuNjg4NSAxOS43MDY2IDU3LjcwMjEgMTkuNzAxOUM1Ny43MDg5IDE5LjY5OTYgNTcuNzE0NyAxOS42OTc2IDU3LjcxOTUgMTkuNjk2QzU3LjcyMTkgMTkuNjk1MiA1Ny43MjQxIDE5LjY5NDQgNTcuNzI2IDE5LjY5MzhDNTcuNzI2OSAxOS42OTM0IDU3LjcyODEgMTkuNjkzIDU3LjcyODYgMTkuNjkyOUM1Ny43Mjk4IDE5LjY5MjQgNTcuNzMwOSAxOS42OTIgNTQgOC44ODg4N1pNMjcgMy4xNTc5NkMyMy4zMjYzIDMuMTU3OTYgMTcuNzg0OSAyLjA3NDcxIDEyLjQ2NzQgMC42ODIzQzkuOTU3MTcgMC4wMjQ5ODc1IDcuNzM5MDQgLTAuNjM1MjM3IDYuMTUxODQgLTEuMTMwMzVDNS4zNjExOCAtMS4zNzcgNC43MzQ2NyAtMS41ODAzMSA0LjMxNTUgLTEuNzE4NjNDNC4xMDYwOSAtMS43ODc3MyAzLjk0ODk5IC0xLjg0MDQzIDMuODQ5NjEgLTEuODc0QzMuNzk5OTQgLTEuODkwNzggMy43NjQ3NCAtMS45MDI3NiAzLjc0NDcxIC0xLjkwOTZDMy43MzQ2OSAtMS45MTMwMiAzLjcyODQ4IC0xLjkxNTE1IDMuNzI2MTMgLTEuOTE1OTVDMy43MjQ5NiAtMS45MTYzNiAzLjcyNDc2IC0xLjkxNjQzIDMuNzI1NTQgLTEuOTE2MTZDMy43MjU5MyAtMS45MTYwMiAzLjcyNjU3IC0xLjkxNTgxIDMuNzI3NDUgLTEuOTE1NUMzLjcyNzg5IC0xLjkxNTM1IDMuNzI4NzQgLTEuOTE1MDYgMy43Mjg5NiAtMS45MTQ5OEMzLjcyOTg3IC0xLjkxNDY3IDMuNzMwODQgLTEuOTE0MzMgLTQuNjczZS0wNSA4Ljg4ODg3Qy0zLjczMDkzIDE5LjY5MiAtMy43Mjk4MyAxOS42OTI0IC0zLjcyODY4IDE5LjY5MjlDLTMuNzI4MjEgMTkuNjkzIC0zLjcyNjk4IDE5LjY5MzQgLTMuNzI2MDMgMTkuNjkzOEMtMy43MjQxNSAxOS42OTQ0IC0zLjcyMjAxIDE5LjY5NTIgLTMuNzE5NjEgMTkuNjk2Qy0zLjcxNDgyIDE5LjY5NzYgLTMuNzA5MDEgMTkuNjk5NiAtMy43MDIyIDE5LjcwMTlDLTMuNjg4NTggMTkuNzA2NiAtMy42NzA5NSAxOS43MTI3IC0zLjY0OTQgMTkuNzJDLTMuNjA2MjkgMTkuNzM0OCAtMy41NDc0NSAxOS43NTQ4IC0zLjQ3MzU5IDE5Ljc3OTdDLTMuMzI1ODkgMTkuODI5NiAtMy4xMTc4OCAxOS44OTkzIC0yLjg1NTE2IDE5Ljk4NkMtMi4zMzAwOCAyMC4xNTkzIC0xLjU4NDI1IDIwLjQwMTEgLTAuNjYyNTg5IDIwLjY4ODZDMS4xNzQ4NSAyMS4yNjE4IDMuNzQxMjUgMjIuMDI2IDYuNjcwNzMgMjIuNzkzMUMxMi4yMzI3IDI0LjI0OTUgMjAuMTkxMyAyNi4wMTUxIDI3IDI2LjAxNTFWMy4xNTc5NlpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidmFyKC0tcHJpbWFyeS1jb2xvcilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJmb250LW1lZGl1bSB0ZXh0LTN4bCB0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTBcIj5TQUtBSTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zcGFuLTEyIG1kOmNvbC1zcGFuLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTEyIGdhcC04IHRleHQtY2VudGVyIG1kOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNwYW4tMTIgbWQ6Y29sLXNwYW4tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZm9udC1tZWRpdW0gdGV4dC0yeGwgbGVhZGluZy1ub3JtYWwgbWItNiB0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTBcIj5Db21wYW55PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibGVhZGluZy1ub3JtYWwgdGV4dC14bCBibG9jayBjdXJzb3ItcG9pbnRlciBtYi0yIHRleHQtc3VyZmFjZS03MDAgZGFyazp0ZXh0LXN1cmZhY2UtMTAwXCI+QWJvdXQgVXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxlYWRpbmctbm9ybWFsIHRleHQteGwgYmxvY2sgY3Vyc29yLXBvaW50ZXIgbWItMiB0ZXh0LXN1cmZhY2UtNzAwIGRhcms6dGV4dC1zdXJmYWNlLTEwMFwiPk5ld3M8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxlYWRpbmctbm9ybWFsIHRleHQteGwgYmxvY2sgY3Vyc29yLXBvaW50ZXIgbWItMiB0ZXh0LXN1cmZhY2UtNzAwIGRhcms6dGV4dC1zdXJmYWNlLTEwMFwiPkludmVzdG9yIFJlbGF0aW9uczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibGVhZGluZy1ub3JtYWwgdGV4dC14bCBibG9jayBjdXJzb3ItcG9pbnRlciBtYi0yIHRleHQtc3VyZmFjZS03MDAgZGFyazp0ZXh0LXN1cmZhY2UtMTAwXCI+Q2FyZWVyczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibGVhZGluZy1ub3JtYWwgdGV4dC14bCBibG9jayBjdXJzb3ItcG9pbnRlciB0ZXh0LXN1cmZhY2UtNzAwIGRhcms6dGV4dC1zdXJmYWNlLTEwMFwiPk1lZGlhIEtpdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNwYW4tMTIgbWQ6Y29sLXNwYW4tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZm9udC1tZWRpdW0gdGV4dC0yeGwgbGVhZGluZy1ub3JtYWwgbWItNiB0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTBcIj5SZXNvdXJjZXM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJsZWFkaW5nLW5vcm1hbCB0ZXh0LXhsIGJsb2NrIGN1cnNvci1wb2ludGVyIG1iLTIgdGV4dC1zdXJmYWNlLTcwMCBkYXJrOnRleHQtc3VyZmFjZS0xMDBcIj5HZXQgU3RhcnRlZDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibGVhZGluZy1ub3JtYWwgdGV4dC14bCBibG9jayBjdXJzb3ItcG9pbnRlciBtYi0yIHRleHQtc3VyZmFjZS03MDAgZGFyazp0ZXh0LXN1cmZhY2UtMTAwXCI+TGVhcm48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxlYWRpbmctbm9ybWFsIHRleHQteGwgYmxvY2sgY3Vyc29yLXBvaW50ZXIgdGV4dC1zdXJmYWNlLTcwMCBkYXJrOnRleHQtc3VyZmFjZS0xMDBcIj5DYXNlIFN0dWRpZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zcGFuLTEyIG1kOmNvbC1zcGFuLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImZvbnQtbWVkaXVtIHRleHQtMnhsIGxlYWRpbmctbm9ybWFsIG1iLTYgdGV4dC1zdXJmYWNlLTkwMCBkYXJrOnRleHQtc3VyZmFjZS0wXCI+Q29tbXVuaXR5PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibGVhZGluZy1ub3JtYWwgdGV4dC14bCBibG9jayBjdXJzb3ItcG9pbnRlciBtYi0yIHRleHQtc3VyZmFjZS03MDAgZGFyazp0ZXh0LXN1cmZhY2UtMTAwXCI+RGlzY29yZDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibGVhZGluZy1ub3JtYWwgdGV4dC14bCBmbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBtYi0yIHRleHQtc3VyZmFjZS03MDAgZGFyazp0ZXh0LXN1cmZhY2UtMTAwXCI+RXZlbnRzPGltZyBzcmM9XCJodHRwczovL3ByaW1lZmFjZXMub3JnL2Nkbi90ZW1wbGF0ZXMvc2FrYWkvbGFuZGluZy9uZXctYmFkZ2Uuc3ZnXCIgYWx0PVwiYmFkZ2VcIiBjbGFzcz1cIm1sLTJcIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibGVhZGluZy1ub3JtYWwgdGV4dC14bCBibG9jayBjdXJzb3ItcG9pbnRlciBtYi0yIHRleHQtc3VyZmFjZS03MDAgZGFyazp0ZXh0LXN1cmZhY2UtMTAwXCI+RkFRPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJsZWFkaW5nLW5vcm1hbCB0ZXh0LXhsIGJsb2NrIGN1cnNvci1wb2ludGVyIHRleHQtc3VyZmFjZS03MDAgZGFyazp0ZXh0LXN1cmZhY2UtMTAwXCI+QmxvZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNwYW4tMTIgbWQ6Y29sLXNwYW4tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZm9udC1tZWRpdW0gdGV4dC0yeGwgbGVhZGluZy1ub3JtYWwgbWItNiB0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTBcIj5MZWdhbDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxlYWRpbmctbm9ybWFsIHRleHQteGwgYmxvY2sgY3Vyc29yLXBvaW50ZXIgbWItMiB0ZXh0LXN1cmZhY2UtNzAwIGRhcms6dGV4dC1zdXJmYWNlLTEwMFwiPkJyYW5kIFBvbGljeTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibGVhZGluZy1ub3JtYWwgdGV4dC14bCBibG9jayBjdXJzb3ItcG9pbnRlciBtYi0yIHRleHQtc3VyZmFjZS03MDAgZGFyazp0ZXh0LXN1cmZhY2UtMTAwXCI+UHJpdmFjeSBQb2xpY3k8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxlYWRpbmctbm9ybWFsIHRleHQteGwgYmxvY2sgY3Vyc29yLXBvaW50ZXIgdGV4dC1zdXJmYWNlLTcwMCBkYXJrOnRleHQtc3VyZmFjZS0xMDBcIj5UZXJtcyBvZiBTZXJ2aWNlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvb3RlcldpZGdldCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcclxuaW1wb3J0IHsgQXBwRmxvYXRpbmdDb25maWd1cmF0b3IgfSBmcm9tICcuLi8uLi9sYXlvdXQvY29tcG9uZW50L2FwcC5mbG9hdGluZ2NvbmZpZ3VyYXRvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLW5vdGZvdW5kJyxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLCBBcHBGbG9hdGluZ0NvbmZpZ3VyYXRvciwgQnV0dG9uTW9kdWxlXSxcclxuICAgIHRlbXBsYXRlOiBgIDxhcHAtZmxvYXRpbmctY29uZmlndXJhdG9yIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiNTRcIiBoZWlnaHQ9XCI0MFwiIHZpZXdCb3g9XCIwIDAgNTQgNDBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cIm1iLTggdy0zMiBzaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNy4xNjM3IDE5LjI0NjdDMTcuMTU2NiAxOS40MDMzIDE3LjE1MjkgMTkuNTYxIDE3LjE1MjkgMTkuNzE5NEMxNy4xNTI5IDI1LjM1MDMgMjEuNzIwMyAyOS45MTUgMjcuMzU0NiAyOS45MTVDMzIuOTg4NyAyOS45MTUgMzcuNTU2MSAyNS4zNTAzIDM3LjU1NjEgMTkuNzE5NEMzNy41NTYxIDE5LjU1NzIgMzcuNTUyNCAxOS4zOTU5IDM3LjU0NDkgMTkuMjM1NUMzOC41NjE3IDE5LjA4MDEgMzkuNTc1OSAxOC45MDEzIDQwLjU4NjcgMTguNjk5NEw0MC42OTI2IDE4LjY3ODJDNDAuNzE5MSAxOS4wMjE4IDQwLjczMjYgMTkuMzY5IDQwLjczMjYgMTkuNzE5NEM0MC43MzI2IDI3LjEwMzYgMzQuNzQzIDMzLjA4OTYgMjcuMzU0NiAzMy4wODk2QzE5Ljk2NiAzMy4wODk2IDEzLjk3NjUgMjcuMTAzNiAxMy45NzY1IDE5LjcxOTRDMTMuOTc2NSAxOS4zNzQgMTMuOTg5NiAxOS4wMzE2IDE0LjAxNTQgMTguNjkyN0wxNC4wNDg2IDE4LjY5OTRDMTUuMDgzNyAxOC45MDYyIDE2LjEyMjMgMTkuMDg4NiAxNy4xNjM3IDE5LjI0NjdaTTMzLjMyODQgMTEuNDUzOEMzMS42NDkzIDEwLjIzOTYgMjkuNTg1NSA5LjUyMzgxIDI3LjM1NDYgOS41MjM4MUMyNS4xMTk1IDkuNTIzODEgMjMuMDUyNCAxMC4yNDIxIDIxLjM3MTcgMTEuNDYwM0MyMC4wMDc4IDExLjMyMzIgMTguNjQ3NSAxMS4xMzg3IDE3LjI5MzMgMTAuOTA3QzE5Ljc0NTMgOC4xMTMwOCAyMy4zNDM4IDYuMzQ5MjEgMjcuMzU0NiA2LjM0OTIxQzMxLjM2IDYuMzQ5MjEgMzQuOTU0MyA4LjEwODQ0IDM3LjQwNjEgMTAuODk2QzM2LjA1MjEgMTEuMTI5MiAzNC42OTIgMTEuMzE1MiAzMy4zMjg0IDExLjQ1MzhaTTQzLjgyNiAxOC4wNTE4QzQzLjg4MSAxOC42MDAzIDQzLjkwOTEgMTkuMTU2NiA0My45MDkxIDE5LjcxOTRDNDMuOTA5MSAyOC44NTY4IDM2LjQ5NzMgMzYuMjY0MiAyNy4zNTQ2IDM2LjI2NDJDMTguMjExNyAzNi4yNjQyIDEwLjggMjguODU2OCAxMC44IDE5LjcxOTRDMTAuOCAxOS4xNjE1IDEwLjgyNzYgMTguNjEgMTAuODgxNiAxOC4wNjYzTDcuNzUzODMgMTcuNDQxMUM3LjY2Nzc1IDE4LjE4ODYgNy42MjM1NCAxOC45NDg4IDcuNjIzNTQgMTkuNzE5NEM3LjYyMzU0IDMwLjYxMDIgMTYuNDU3NCAzOS40Mzg4IDI3LjM1NDYgMzkuNDM4OEMzOC4yNTE3IDM5LjQzODggNDcuMDg1NSAzMC42MTAyIDQ3LjA4NTUgMTkuNzE5NEM0Ny4wODU1IDE4Ljk0MzkgNDcuMDQwNyAxOC4xNzg5IDQ2Ljk1MzYgMTcuNDI2N0w0My44MjYgMTguMDUxOFpNNDQuMjYxMyA5LjU0NzQzTDQwLjkwODQgMTAuMjE3NkMzNy45MTM0IDUuOTU4MjEgMzIuOTU5MyAzLjE3NDYgMjcuMzU0NiAzLjE3NDZDMjEuNzQ0MiAzLjE3NDYgMTYuNzg1NiA1Ljk2Mzg1IDEzLjc5MTUgMTAuMjMwNUwxMC40Mzk5IDkuNTYwNTdDMTMuODkyIDMuODMxNzggMjAuMTc1NiAwIDI3LjM1NDYgMEMzNC41MjgxIDAgNDAuODA3NSAzLjgyNTkxIDQ0LjI2MTMgOS41NDc0M1pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidmFyKC0tcHJpbWFyeS1jb2xvcilcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9XCJtYXNrMF8xNDEzXzE1NTFcIiBzdHlsZT1cIm1hc2stdHlwZTogYWxwaGFcIiBtYXNrVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHg9XCIwXCIgeT1cIjhcIiB3aWR0aD1cIjU0XCIgaGVpZ2h0PVwiMTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNyAxOC4zNjUyQzEwLjUxMTQgMTkuMTk0NCAwIDguODg4OTIgMCA4Ljg4ODkyQzAgOC44ODg5MiAxNi41MTc2IDE0LjU4NjYgMjcgMTQuNTg2NkMzNy40ODI0IDE0LjU4NjYgNTQgOC44ODg5MiA1NCA4Ljg4ODkyQzU0IDguODg4OTIgNDMuNDg4NiAxNy41MzYxIDI3IDE4LjM2NTJaXCIgZmlsbD1cInZhcigtLXByaW1hcnktY29sb3IpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L21hc2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgbWFzaz1cInVybCgjbWFzazBfMTQxM18xNTUxKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0tNC42NzNlLTA1IDguODg4ODdMMy43MzA4NCAtMS45MTQzNEwtOC4wMDgwNiAxNy4wNDczTC00LjY3M2UtMDUgOC44ODg4N1pNMjcgMTguMzY1MkwyNi40MjUzIDYuOTUxMDlMMjcgMTguMzY1MlpNNTQgOC44ODg4N0w2MS4yNjczIDE3LjcxMjdMNTAuMjY5MSAtMS45MTQzNEw1NCA4Ljg4ODg3Wk0tNC42NzNlLTA1IDguODg4ODdDLTguMDA4MDYgMTcuMDQ3MyAtOC4wMDQ2OSAxNy4wNTA1IC04LjAwMTMyIDE3LjA1MzhDLTguMDAwMTggMTcuMDU1IC03Ljk5Njc1IDE3LjA1ODMgLTcuOTk0NCAxNy4wNjA3Qy03Ljk4OTYzIDE3LjA2NTMgLTcuOTg0NzQgMTcuMDcwMSAtNy45Nzk2NiAxNy4wNzVDLTcuOTY5NDkgMTcuMDg0OSAtNy45NTg2MyAxNy4wOTU1IC03Ljk0NzA3IDE3LjEwNjZDLTcuOTI0MDEgMTcuMTI5IC03Ljg5ODA5IDE3LjE1MzkgLTcuODY5NDQgMTcuMTgxMkMtNy44MTIyIDE3LjIzNiAtNy43NDM3NyAxNy4zMDA1IC03LjY2NDM2IDE3LjM3NDNDLTcuNTA1NjcgMTcuNTIxOCAtNy4zMDI2OSAxNy43MDYzIC03LjA1NjQ1IDE3LjkyMjFDLTYuNTY0NjcgMTguMzUzMiAtNS44OTY2MiAxOC45MTI1IC01LjA2MDg5IDE5LjU1MzRDLTMuMzk2MDMgMjAuODMgLTEuMDI1NzUgMjIuNDYwNSAxLjk4MDEyIDI0LjA0NTdDNy45Nzg3NCAyNy4yMDkxIDE2Ljc3MjMgMzAuMzIyNiAyNy41NzQ2IDI5Ljc3OTNMMjYuNDI1MyA2Ljk1MTA5QzIwLjczOTEgNy4yMzY5OSAxNi4wMzI2IDUuNjEyMzEgMTIuNjUzNCAzLjgzMDI0QzEwLjk3MDMgMi45NDI2NyA5LjY4MjIyIDIuMDQ4NjYgOC44NjA5MSAxLjQxODg4QzguNDUzNTYgMS4xMDY1MyA4LjE3MTU1IDAuODY3Mjc4IDguMDI0MSAwLjczODAyN0M3Ljk1MDcyIDAuNjczNjcxIDcuOTExNzggMC42Mzc1NzYgNy45MDg0MSAwLjYzNDQ5MkM3LjkwNjgyIDAuNjMyOTggNy45MTQxOSAwLjYzOTgwNSA3LjkzMDcxIDAuNjU1NTdDNy45Mzg5NyAwLjY2MzQ1NSA3Ljk0OTUyIDAuNjczNTg5IDcuOTYyMzUgMC42ODYwMzlDNy45Njg4MyAwLjY5MjI2MiA3Ljk3NTgyIDAuNjk5MDc1IDcuOTgzMzggMC43MDY0NzFDNy45ODcxOSAwLjcxMDE2NyA3Ljk5MTEzIDAuNzE0MDE0IDcuOTk1MjYgMC43MTgwMTRDNy45OTcyOSAwLjcyMDAwOCA4LjAwMDQ3IDAuNzIzMTE5IDguMDAxNDggMC43MjQxMTZDOC4wMDQ2NiAwLjcyNzI2NSA4LjAwNzk2IDAuNzMwNDQ2IC00LjY3M2UtMDUgOC44ODg4N1pNMjcuNTc0NiAyOS43NzkzQzM3LjY5MDQgMjkuMjcwNiA0NS45NDE2IDI2LjM2ODQgNTEuNjYwMiAyMy42MDU0QzU0LjUyOTYgMjIuMjE5MSA1Ni44MDY0IDIwLjg0NjUgNTguNDE4NiAxOS43Nzg0QzU5LjIyNjUgMTkuMjQzMSA1OS44NzMgMTguNzgwNSA2MC4zNDk0IDE4LjQyNTdDNjAuNTg3OCAxOC4yNDgyIDYwLjc4NDEgMTguMDk3MSA2MC45Mzc0IDE3Ljk3N0M2MS4wMTQgMTcuOTE2OSA2MS4wNzk5IDE3Ljg2NDUgNjEuMTM0OSAxNy44MjAzQzYxLjE2MjQgMTcuNzk4MSA2MS4xODcyIDE3Ljc3ODEgNjEuMjA5MyAxNy43NjAyQzYxLjIyMDMgMTcuNzUxMiA2MS4yMzA3IDE3Ljc0MjcgNjEuMjQwMyAxNy43MzQ4QzYxLjI0NTIgMTcuNzMwOCA2MS4yNDk5IDE3LjcyNyA2MS4yNTQ0IDE3LjcyMzNDNjEuMjU2NiAxNy43MjE1IDYxLjI1OTggMTcuNzE4OCA2MS4yNjEgMTcuNzE3OUM2MS4yNjQyIDE3LjcxNTMgNjEuMjY3MyAxNy43MTI3IDU0IDguODg4ODdDNDYuNzMyNiAwLjA2NTA1MzYgNDYuNzM1NyAwLjA2MjUyMTkgNDYuNzM4NyAwLjA2MDAyNDFDNDYuNzM5NyAwLjA1OTIzNDUgNDYuNzQyNyAwLjA1Njc2NTggNDYuNzQ0NiAwLjA1NTE4NTdDNDYuNzQ4NSAwLjA1MjAyMzggNDYuNzUyMSAwLjA0ODk4ODcgNDYuNzU1NyAwLjA0NjA3OTlDNDYuNzYyOCAwLjA0MDI2MjMgNDYuNzY5NCAwLjAzNDk0ODcgNDYuNzc1MyAwLjAzMDEzMThDNDYuNzg3MSAwLjAyMDQ5ODYgNDYuNzk2NiAwLjAxMjg0OTUgNDYuODAzNyAwLjAwNzEyNTYyQzQ2LjgxOCAtMC4wMDQzMTg0OCA0Ni44MjI4IC0wLjAwODA4MzExIDQ2LjgxODQgLTAuMDA0NjM3ODRDNDYuODA5NiAwLjAwMjI4MzQ1IDQ2Ljc2NCAwLjAzNzg2NTIgNDYuNjgyOCAwLjA5ODM3NzlDNDYuNTE5OSAwLjIxOTY3NSA0Ni4yMTY1IDAuNDM5MTYxIDQ1Ljc4MTIgMC43Mjc1MTlDNDQuOTA3MiAxLjMwNjYzIDQzLjUyNTcgMi4xNDc2NSA0MS43MDYxIDMuMDI2NzdDMzguMDQ2OSA0Ljc5NDY4IDMyLjc5ODEgNi42MzA1OCAyNi40MjUzIDYuOTUxMDlMMjcuNTc0NiAyOS43NzkzWk01NCA4Ljg4ODg3QzUwLjI2OTEgLTEuOTE0MzMgNTAuMjcgLTEuOTE0NjcgNTAuMjcxIC0xLjkxNDk4QzUwLjI3MTIgLTEuOTE1MDYgNTAuMjcyIC0xLjkxNTM1IDUwLjI3MjQgLTEuOTE1NUM1MC4yNzMzIC0xLjkxNTgxIDUwLjI3NCAtMS45MTYwMiA1MC4yNzQzIC0xLjkxNjE2QzUwLjI3NTIgLTEuOTE2NDMgNTAuMjc1IC0xLjkxNjM2IDUwLjI3MzggLTEuOTE1OTVDNTAuMjcxNCAtMS45MTUxNSA1MC4yNjUyIC0xLjkxMzAyIDUwLjI1NTIgLTEuOTA5NkM1MC4yMzUxIC0xLjkwMjc2IDUwLjE5OTkgLTEuODkwNzggNTAuMTUwMyAtMS44NzRDNTAuMDUwOSAtMS44NDA0MyA0OS44OTM4IC0xLjc4NzczIDQ5LjY4NDQgLTEuNzE4NjNDNDkuMjY1MiAtMS41ODAzMSA0OC42Mzg3IC0xLjM3NyA0Ny44NDgxIC0xLjEzMDM1QzQ2LjI2MDkgLTAuNjM1MjM3IDQ0LjA0MjcgMC4wMjQ5ODc1IDQxLjUzMjUgMC42ODIzQzM2LjIxNSAyLjA3NDcxIDMwLjY3MzYgMy4xNTc5NiAyNyAzLjE1Nzk2VjI2LjAxNTFDMzMuODA4NyAyNi4wMTUxIDQxLjc2NzIgMjQuMjQ5NSA0Ny4zMjkyIDIyLjc5MzFDNTAuMjU4NiAyMi4wMjYgNTIuODI1IDIxLjI2MTggNTQuNjYyNSAyMC42ODg2QzU1LjU4NDIgMjAuNDAxMSA1Ni4zMyAyMC4xNTkzIDU2Ljg1NTEgMTkuOTg2QzU3LjExNzggMTkuODk5MyA1Ny4zMjU4IDE5LjgyOTYgNTcuNDczNSAxOS43Nzk3QzU3LjU0NzQgMTkuNzU0OCA1Ny42MDYyIDE5LjczNDggNTcuNjQ5MyAxOS43MkM1Ny42NzA5IDE5LjcxMjcgNTcuNjg4NSAxOS43MDY2IDU3LjcwMjEgMTkuNzAxOUM1Ny43MDg5IDE5LjY5OTYgNTcuNzE0NyAxOS42OTc2IDU3LjcxOTUgMTkuNjk2QzU3LjcyMTkgMTkuNjk1MiA1Ny43MjQxIDE5LjY5NDQgNTcuNzI2IDE5LjY5MzhDNTcuNzI2OSAxOS42OTM0IDU3LjcyODEgMTkuNjkzIDU3LjcyODYgMTkuNjkyOUM1Ny43Mjk4IDE5LjY5MjQgNTcuNzMwOSAxOS42OTIgNTQgOC44ODg4N1pNMjcgMy4xNTc5NkMyMy4zMjYzIDMuMTU3OTYgMTcuNzg0OSAyLjA3NDcxIDEyLjQ2NzQgMC42ODIzQzkuOTU3MTcgMC4wMjQ5ODc1IDcuNzM5MDQgLTAuNjM1MjM3IDYuMTUxODQgLTEuMTMwMzVDNS4zNjExOCAtMS4zNzcgNC43MzQ2NyAtMS41ODAzMSA0LjMxNTUgLTEuNzE4NjNDNC4xMDYwOSAtMS43ODc3MyAzLjk0ODk5IC0xLjg0MDQzIDMuODQ5NjEgLTEuODc0QzMuNzk5OTQgLTEuODkwNzggMy43NjQ3NCAtMS45MDI3NiAzLjc0NDcxIC0xLjkwOTZDMy43MzQ2OSAtMS45MTMwMiAzLjcyODQ4IC0xLjkxNTE1IDMuNzI2MTMgLTEuOTE1OTVDMy43MjQ5NiAtMS45MTYzNiAzLjcyNDc2IC0xLjkxNjQzIDMuNzI1NTQgLTEuOTE2MTZDMy43MjU5MyAtMS45MTYwMiAzLjcyNjU3IC0xLjkxNTgxIDMuNzI3NDUgLTEuOTE1NUMzLjcyNzg5IC0xLjkxNTM1IDMuNzI4NzQgLTEuOTE1MDYgMy43Mjg5NiAtMS45MTQ5OEMzLjcyOTg3IC0xLjkxNDY3IDMuNzMwODQgLTEuOTE0MzMgLTQuNjczZS0wNSA4Ljg4ODg3Qy0zLjczMDkzIDE5LjY5MiAtMy43Mjk4MyAxOS42OTI0IC0zLjcyODY4IDE5LjY5MjlDLTMuNzI4MjEgMTkuNjkzIC0zLjcyNjk4IDE5LjY5MzQgLTMuNzI2MDMgMTkuNjkzOEMtMy43MjQxNSAxOS42OTQ0IC0zLjcyMjAxIDE5LjY5NTIgLTMuNzE5NjEgMTkuNjk2Qy0zLjcxNDgyIDE5LjY5NzYgLTMuNzA5MDEgMTkuNjk5NiAtMy43MDIyIDE5LjcwMTlDLTMuNjg4NTggMTkuNzA2NiAtMy42NzA5NSAxOS43MTI3IC0zLjY0OTQgMTkuNzJDLTMuNjA2MjkgMTkuNzM0OCAtMy41NDc0NSAxOS43NTQ4IC0zLjQ3MzU5IDE5Ljc3OTdDLTMuMzI1ODkgMTkuODI5NiAtMy4xMTc4OCAxOS44OTkzIC0yLjg1NTE2IDE5Ljk4NkMtMi4zMzAwOCAyMC4xNTkzIC0xLjU4NDI1IDIwLjQwMTEgLTAuNjYyNTg5IDIwLjY4ODZDMS4xNzQ4NSAyMS4yNjE4IDMuNzQxMjUgMjIuMDI2IDYuNjcwNzMgMjIuNzkzMUMxMi4yMzI3IDI0LjI0OTUgMjAuMTkxMyAyNi4wMTUxIDI3IDI2LjAxNTFWMy4xNTc5NlpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLXByaW1hcnktY29sb3IpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJib3JkZXItcmFkaXVzOiA1NnB4OyBwYWRkaW5nOiAwLjNyZW07IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSwgdHJhbnNwYXJlbnQgNjAlKSAxMCUsIHZhcigtLXN1cmZhY2UtZ3JvdW5kKSAzMCUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBiZy1zdXJmYWNlLTAgZGFyazpiZy1zdXJmYWNlLTkwMCBweS0yMCBweC04IHNtOnB4LTIwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiA1M3B4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1wcmltYXJ5IGZvbnQtYm9sZCB0ZXh0LTN4bFwiPjQwNDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1zdXJmYWNlLTkwMCBkYXJrOnRleHQtc3VyZmFjZS0wIGZvbnQtYm9sZCB0ZXh0LTN4bCBsZzp0ZXh0LTV4bCBtYi0yXCI+Tm90IEZvdW5kPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VyZmFjZS02MDAgZGFyazp0ZXh0LXN1cmZhY2UtMjAwIG1iLThcIj5SZXF1ZXN0ZWQgcmVzb3VyY2UgaXMgbm90IGF2YWlsYWJsZS48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgcm91dGVyTGluaz1cIi9cIiBjbGFzcz1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBweS04IGJvcmRlci1zdXJmYWNlLTMwMCBkYXJrOmJvcmRlci1zdXJmYWNlLTUwMCBib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItMiBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgcm91bmRlZC1ib3JkZXJcIiBzdHlsZT1cImhlaWdodDogMy41cmVtOyB3aWR0aDogMy41cmVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwaSBwaS1mdyBwaS10YWJsZSB0ZXh0LTJ4bCFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1sLTYgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdXJmYWNlLTkwMCBkYXJrOnRleHQtc3VyZmFjZS0wIGxnOnRleHQteGwgZm9udC1tZWRpdW0gbWItMCBibG9ja1wiPkZyZXF1ZW50bHkgQXNrZWQgUXVlc3Rpb25zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdXJmYWNlLTYwMCBkYXJrOnRleHQtc3VyZmFjZS0yMDAgbGc6dGV4dC14bFwiPlVsdHJpY2llcyBtaSBxdWlzIGhlbmRyZXJpdCBkb2xvci48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgcm91dGVyTGluaz1cIi9cIiBjbGFzcz1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBweS04IGJvcmRlci1zdXJmYWNlLTMwMCBkYXJrOmJvcmRlci1zdXJmYWNlLTUwMCBib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXItMiBib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnkgcm91bmRlZC1ib3JkZXJcIiBzdHlsZT1cImhlaWdodDogMy41cmVtOyB3aWR0aDogMy41cmVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJwaSBwaS1mdyBwaS1xdWVzdGlvbi1jaXJjbGUgdGV4dC0yeGwhXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtbC02IGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc3VyZmFjZS05MDAgZGFyazp0ZXh0LXN1cmZhY2UtMCBsZzp0ZXh0LXhsIGZvbnQtbWVkaXVtIG1iLTBcIj5Tb2x1dGlvbiBDZW50ZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1cmZhY2UtNjAwIGRhcms6dGV4dC1zdXJmYWNlLTIwMCBsZzp0ZXh0LXhsXCI+UGhhc2VsbHVzIGZhdWNpYnVzIHNjZWxlcmlzcXVlIGVsZWlmZW5kLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVwiL1wiIGNsYXNzPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIG1iLTggcHktOCBib3JkZXItc3VyZmFjZS0zMDAgZGFyazpib3JkZXItc3VyZmFjZS01MDAgYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLXByaW1hcnkgdGV4dC1wcmltYXJ5IHJvdW5kZWQtYm9yZGVyXCIgc3R5bGU9XCJoZWlnaHQ6IDMuNXJlbTsgd2lkdGg6IDMuNXJlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwicGkgcGktZncgcGktdW5sb2NrIHRleHQtMnhsIVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWwtNiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1cmZhY2UtOTAwIGRhcms6dGV4dC1zdXJmYWNlLTAgbGc6dGV4dC14bCBmb250LW1lZGl1bSBtYi0wXCI+UGVybWlzc2lvbiBNYW5hZ2VyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zdXJmYWNlLTYwMCBkYXJrOnRleHQtc3VyZmFjZS0yMDAgbGc6dGV4dC14bFwiPkFjY3Vtc2FuIGluIG5pc2wgbmlzaSBzY2VsZXJpc3F1ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gbGFiZWw9XCJHbyB0byBEYXNoYm9hcmRcIiByb3V0ZXJMaW5rPVwiL1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90Zm91bmQge31cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIGFmdGVyTmV4dFJlbmRlciwgaW5qZWN0LCBPbkluaXQsIHNpZ25hbCwgdmlld0NoaWxkLCBWaWV3Q2hpbGR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IERhdGVQaWNrZXJNb2R1bGUgfSBmcm9tIFwicHJpbWVuZy9kYXRlcGlja2VyXCI7XHJcbmltcG9ydCB7IFRhYmxlTW9kdWxlIH0gZnJvbSBcInByaW1lbmcvdGFibGVcIjtcclxuaW1wb3J0IHsgVXN1YXJpb01vZGVsIH0gZnJvbSBcIi4uL3NoYXJlZC91c3VhcmlvLm1vZGVsXCI7XHJcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gXCJwcmltZW5nL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBDb25maXJtRGlhbG9nTW9kdWxlIH0gZnJvbSBcInByaW1lbmcvY29uZmlybWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSBcInByaW1lbmcvYXBpXCI7XHJcbmltcG9ydCB7IFRvYXN0TW9kdWxlIH0gZnJvbSBcInByaW1lbmcvdG9hc3RcIjtcclxuaW1wb3J0IHsgQmFzaWNTZXJ2aWNlIH0gZnJvbSBcIkAvYXBwL3NlcnZpY2UvYmFzaWMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc3VhcmlvQ29tcG9uZW50IH0gZnJvbSBcIi4uL3VzdWFyaW8vdXN1YXJpby5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtdXN1YXJpby1saXN0JyxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIERhdGVQaWNrZXJNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgVGFibGVNb2R1bGUsXHJcbiAgICAgICAgQnV0dG9uTW9kdWxlLFxyXG4gICAgICAgIENvbmZpcm1EaWFsb2dNb2R1bGUsXHJcbiAgICAgICAgLy8gVG9hc3RNb2R1bGVcclxuICAgICAgICBVc3VhcmlvQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQ29uZmlybWF0aW9uU2VydmljZSwgXHJcbiAgICAgICAgQmFzaWNTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3VzdWFyaW8tbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc3VhcmlvTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgQFZpZXdDaGlsZChVc3VhcmlvQ29tcG9uZW50KSB1c3VhcmlvQ29tcG9uZW50ITogVXN1YXJpb0NvbXBvbmVudDtcclxuICAgIGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy8gZGF0YVVzdWFyaW9zOiBVc3VhcmlvTW9kZWxbXSA9IFtdO1xyXG4gICAgZGF0YVVzdWFyaW9zID0gc2lnbmFsPFVzdWFyaW9Nb2RlbFtdPihbXSk7XHJcblxyXG4gICAgLy8gU2VydmljZXNcclxuICAgIHByaXZhdGUgY29uZmlybWF0aW9uU2VydmljZSA9IGluamVjdChDb25maXJtYXRpb25TZXJ2aWNlKTtcclxuICAgIHNlcnZpY2UgPSBpbmplY3QoQmFzaWNTZXJ2aWNlKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBhZnRlck5leHRSZW5kZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRVc3VhcmlvcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRVc3VhcmlvcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UuYmFzZVBvc3QoYHVzdWFyaW9jb250cm9sbGVyL2dldGFsbGAsIHt9KS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogVXN1YXJpb01vZGVsW10pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVXN1YXJpb3MnLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFVc3Vhcmlvcy5zZXQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVXN1YXJpbygpIHtcclxuICAgICAgICB0aGlzLnVzdWFyaW9Db21wb25lbnQubG9hZCgwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVc3VhcmlvKGRhdGE6IFVzdWFyaW9Nb2RlbCkge1xyXG4gICAgICAgIHRoaXMudXN1YXJpb0NvbXBvbmVudC5sb2FkKGRhdGEuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVVzdWFyaW8oZGF0YTogVXN1YXJpb01vZGVsLCBldmVudDogRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlIHVzdWFyaW8nLCBkYXRhKTtcclxuICAgICAgICB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2UuY29uZmlybSh7XHJcbiAgICAgICAgICAgIHRhcmdldDogZXZlbnQudGFyZ2V0IGFzIEV2ZW50VGFyZ2V0LFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBgRXN0YSBzZWd1cm8gZGUgZWxpbWluYXIgZXN0ZSByZWdpc3Rybz8gJHtkYXRhLm5hbWV9YCxcclxuICAgICAgICAgICAgaGVhZGVyOiAnRWxpbWluYXIgVXN1YXJpbyEnLFxyXG4gICAgICAgICAgICBpY29uOiAncGkgcGktaW5mby1jaXJjbGUnLFxyXG4gICAgICAgICAgICByZWplY3RMYWJlbDogJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgIHJlamVjdEJ1dHRvblByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICBzZXZlcml0eTogJ3NlY29uZGFyeScsXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lZDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhY2NlcHRCdXR0b25Qcm9wczoge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdEZWxldGUnLFxyXG4gICAgICAgICAgICAgICAgc2V2ZXJpdHk6ICdkYW5nZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGFjY2VwdDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoeyBzZXZlcml0eTogJ2luZm8nLCBzdW1tYXJ5OiAnQ29uZmlybWVkJywgZGV0YWlsOiAnUmVjb3JkIGRlbGV0ZWQnIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWplY3Q6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHsgc2V2ZXJpdHk6ICdlcnJvcicsIHN1bW1hcnk6ICdSZWplY3RlZCcsIGRldGFpbDogJ1lvdSBoYXZlIHJlamVjdGVkJyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgIDwhLS0gPGgxPkhvbGEgbXVuZG88L2gxPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8cC1kYXRlcGlja2VyXHJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJkYXRlXCJcclxuICAgICAgICAvPlxyXG4gICAgPC9kaXY+IC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxidXR0b24gcEJ1dHRvbiAoY2xpY2spPVwiY3JlYXRlVXN1YXJpbygpXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwicGkgcGktcGx1c1wiIHBCdXR0b25JY29uPjwvaT5cclxuICAgICAgICAgICAgPHNwYW4gcEJ1dHRvbkxhYmVsPk51ZXZvPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8cC10YWJsZSBbdmFsdWVdPVwiZGF0YVVzdWFyaW9zKClcIiBbdGFibGVTdHlsZV09XCJ7ICdtaW4td2lkdGgnOiAnNTByZW0nIH1cIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI2hlYWRlcj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPk5vbWJyZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+RW1haWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkZlY2hhIGRlIEFjdHVhbGl6YWNpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkFjY2lvbmVzPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjYm9keSBsZXQtaXRlbT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt7IGl0ZW0ubmFtZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3sgaXRlbS5lbWFpbCB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3sgaXRlbS51cGRhdGVkX2F0IHwgZGF0ZTonTU0vZGQveXl5eScgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gcEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVwZGF0ZVVzdWFyaW8oaXRlbSlcIiBpY29uPVwicGkgcGktcGVuY2lsXCIgY2xhc3M9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXRleHRcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHBCdXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJkZWxldGVVc3VhcmlvKGl0ZW0sICRldmVudClcIiBpY29uPVwicGkgcGktdHJhc2hcIiBzZXZlcml0eT1cImRhbmdlclwiIGNsYXNzPVwicC1idXR0b24tcm91bmRlZCBwLWJ1dHRvbi10ZXh0XCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L3AtdGFibGU+XHJcblxyXG4gICAgPCEtLSA8cC10b2FzdCAvPiAtLT5cclxuICAgIDxwLWNvbmZpcm1kaWFsb2cgLz5cclxuICAgIDwhLS0gPGFwcC11c3VhcmlvPjwvYXBwLXVzdWFyaW8+IC0tPlxyXG4gICAgPGFwcC11c3VhcmlvIChtZXNzYWdlRXZlbnQpPVwibG9hZFVzdWFyaW9zKClcIj48L2FwcC11c3VhcmlvPlxyXG48L2Rpdj4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBpbmplY3QsIE91dHB1dCwgc2lnbmFsIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gXCJwcmltZW5nL2RhdGVwaWNrZXJcIjtcclxuaW1wb3J0IHsgVGFibGVNb2R1bGUgfSBmcm9tIFwicHJpbWVuZy90YWJsZVwiO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tIFwicHJpbWVuZy9idXR0b25cIjtcclxuaW1wb3J0IHsgQ29uZmlybURpYWxvZ01vZHVsZSB9IGZyb20gXCJwcmltZW5nL2NvbmZpcm1kaWFsb2dcIjtcclxuaW1wb3J0IHsgQmFzaWNTZXJ2aWNlIH0gZnJvbSBcIkAvYXBwL3NlcnZpY2UvYmFzaWMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEaWFsb2dNb2R1bGUgfSBmcm9tIFwicHJpbWVuZy9kaWFsb2dcIjtcclxuaW1wb3J0IHsgSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSBcInByaW1lbmcvaW5wdXR0ZXh0XCI7XHJcbmltcG9ydCB7IFVzdWFyaW9Nb2RlbCB9IGZyb20gXCIuLi9zaGFyZWQvdXN1YXJpby5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC11c3VhcmlvJyxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIERhdGVQaWNrZXJNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgVGFibGVNb2R1bGUsXHJcbiAgICAgICAgQnV0dG9uTW9kdWxlLFxyXG4gICAgICAgIENvbmZpcm1EaWFsb2dNb2R1bGUsXHJcbiAgICAgICAgLy8gVG9hc3RNb2R1bGVcclxuICAgICAgICBEaWFsb2dNb2R1bGUsXHJcbiAgICAgICAgSW5wdXRUZXh0TW9kdWxlXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQmFzaWNTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3VzdWFyaW8uY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXN1YXJpb0NvbXBvbmVudCB7XHJcbiAgICBodHRwID0gaW5qZWN0KEJhc2ljU2VydmljZSk7XHJcbiAgICB2aXNpYmxlID0gc2lnbmFsPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGVudGl0eSA9IHNpZ25hbDxVc3VhcmlvTW9kZWw+KG5ldyBVc3VhcmlvTW9kZWwoKSk7XHJcbiAgICBAT3V0cHV0KCkgbWVzc2FnZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICAgIGxvYWQoZW50aXR5SWQ6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5vbkRpYWxvZ1Zpc2libGVDaGFuZ2UodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZU1ldGhvZCgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ0VudGl0eSB0byBzYXZlJywgdGhpcy5lbnRpdHkoKSk7XHJcbiAgICAgICAgLy8gdGhpcy5jbG9zZURpYWxvZygpO1xyXG4gICAgICAgIHRoaXMuaHR0cC5iYXNlUG9zdCgndXN1YXJpb2NvbnRyb2xsZXIvc2F2ZScsIHRoaXMuZW50aXR5KCkpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdTYXZlIHJlc3BvbnNlJywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZURpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlRXZlbnQuZW1pdCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaWFsb2dWaXNpYmxlQ2hhbmdlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlLnNldCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VEaWFsb2coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlLnNldChmYWxzZSk7XHJcbiAgICB9XHJcbn0iLCI8ZGl2IGNsYXNzPVwiY2FyZCBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICA8cC1kaWFsb2cgaGVhZGVyPVwiVXN1YXJpb1wiIFttb2RhbF09XCJ0cnVlXCIgWyh2aXNpYmxlKV09XCJ2aXNpYmxlXCIgW3N0eWxlXT1cInsgd2lkdGg6ICcyNXJlbScgfVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBtYi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiIGNsYXNzPVwiZm9udC1zZW1pYm9sZCB3LTI0XCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgcElucHV0VGV4dCBpZD1cInVzZXJuYW1lXCIgY2xhc3M9XCJmbGV4LWF1dG9cIiBhdXRvY29tcGxldGU9XCJvZmZcIiBbKG5nTW9kZWwpXT1cImVudGl0eSgpLm5hbWVcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IG1iLThcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCIgY2xhc3M9XCJmb250LXNlbWlib2xkIHctMjRcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBwSW5wdXRUZXh0IGlkPVwiZW1haWxcIiBjbGFzcz1cImZsZXgtYXV0b1wiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIFsobmdNb2RlbCldPVwiZW50aXR5KCkuZW1haWxcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBtYi04XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwd2RcIiBjbGFzcz1cImZvbnQtc2VtaWJvbGQgdy0yNFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHBJbnB1dFRleHQgaWQ9XCJwd2RcIiBjbGFzcz1cImZsZXgtYXV0b1wiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIFsobmdNb2RlbCldPVwiZW50aXR5KCkucGFzc3dvcmRcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1lbmQgZ2FwLTJcIj5cclxuICAgICAgICAgICAgPHAtYnV0dG9uIGxhYmVsPVwiQ2FuY2VsXCIgc2V2ZXJpdHk9XCJzZWNvbmRhcnlcIiAoY2xpY2spPVwiY2xvc2VEaWFsb2coKVwiIC8+XHJcbiAgICAgICAgICAgIDxwLWJ1dHRvbiBsYWJlbD1cIlNhdmVcIiAoY2xpY2spPVwic2F2ZU1ldGhvZCgpXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvcC1kaWFsb2c+XHJcbjwvZGl2PiIsImV4cG9ydCBjbGFzcyBVc3VhcmlvTW9kZWwge1xyXG4gICAgaWQhOiBudW1iZXI7XHJcbiAgICBuYW1lITogc3RyaW5nO1xyXG4gICAgZW1haWwhOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZCE6IHN0cmluZztcclxuICAgIGNyZWF0ZWRfYXQhOiBEYXRlO1xyXG4gICAgdXBkYXRlZF9hdCE6IERhdGU7XHJcbn0iLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBcHBMYXlvdXQgfSBmcm9tICcuL2FwcC9sYXlvdXQvY29tcG9uZW50L2FwcC5sYXlvdXQnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmQgfSBmcm9tICcuL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkJztcclxuaW1wb3J0IHsgTGFuZGluZyB9IGZyb20gJy4vYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZyc7XHJcbmltcG9ydCB7IE5vdGZvdW5kIH0gZnJvbSAnLi9hcHAvcGFnZXMvbm90Zm91bmQvbm90Zm91bmQnO1xyXG5pbXBvcnQgeyBVc3VhcmlvTGlzdENvbXBvbmVudCB9IGZyb20gJy4vYXBwL3VzdWFyaW8vdXN1YXJpby1saXN0L3VzdWFyaW8tbGlzdC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQXBwTGF5b3V0LFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogRGFzaGJvYXJkIH0sXHJcbiAgICAgICAgICAgIC8vIHsgcGF0aDogJ3Vpa2l0JywgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vYXBwL3BhZ2VzL3Vpa2l0L3Vpa2l0LnJvdXRlcycpIH0sXHJcbiAgICAgICAgICAgIC8vIHsgcGF0aDogJ3BhZ2VzJywgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vYXBwL3BhZ2VzL3BhZ2VzLnJvdXRlcycpIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ3VzdWFyaW8nLCBjb21wb25lbnQ6IFVzdWFyaW9MaXN0Q29tcG9uZW50fVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7IHBhdGg6ICdsYW5kaW5nJywgY29tcG9uZW50OiBMYW5kaW5nIH0sXHJcbiAgICB7IHBhdGg6ICdub3Rmb3VuZCcsIGNvbXBvbmVudDogTm90Zm91bmQgfSxcclxuICAgIHsgcGF0aDogJ2F1dGgnLCBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9hcHAvcGFnZXMvYXV0aC9hdXRoLnJvdXRlcycpIH0sXHJcbiAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICcvbm90Zm91bmQnIH1cclxuXTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxyXG4gICAgdGVtcGxhdGU6IGA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHt9XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsU0FBUyw0QkFBNEI7OztBQ0FyQyxTQUFTLG1CQUFtQixpQkFBaUI7QUFDN0MsU0FBNEIsc0NBQXNDO0FBQ2xFLFNBQVMsZUFBZSxzQ0FBc0MsNkJBQTZCO0FBQzNGLE9BQU8sVUFBVTtBQUNqQixTQUFTLHNCQUFzQjs7O0FDSi9CLFNBQVMsYUFBQUEsWUFBVyxZQUFBQyxXQUFVLFVBQUFDLFNBQVEsVUFBQUMsZUFBYztBQUNwRCxTQUFTLGdCQUFBQyxxQkFBb0I7QUFDN0IsU0FBUyxnQkFBQUMscUJBQW9COzs7QUNGN0Is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QUEsR0FBQSxvQkFBQSx1QkFBQSxlQUFBLFFBQUEsVUFBQSxHQUFBLENBQUEsR0FBQSxvQkFBQSxVQUFBLEdBQUEsQ0FBQSxHQUFBLGVBQUEsa0JBQUEsaUJBQUEsT0FBQSxXQUFBLFdBQUEsUUFBQSxTQUFBLEdBQUEsQ0FBQSxHQUFBLFVBQUEsU0FBQSxXQUFBLE9BQUEsaUJBQUEsUUFBQSxjQUFBLHlKQUFBLEdBQUEsQ0FBQSxHQUFBLE9BQUEsZ0JBQUEsdUJBQUEsVUFBQSxHQUFBLGlCQUFBLEtBQUEsR0FBQSxDQUFBLEdBQUEsUUFBQSxnQkFBQSxrQkFBQSxpQkFBQSxRQUFBLEdBQUEsU0FBQSxVQUFBLFVBQUEsVUFBQSxpQkFBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsU0FBQSxZQUFBLGFBQUEsaUJBQUEsR0FBQSxDQUFBLEdBQUEsUUFBQSxvQkFBQSxxQkFBQSxHQUFBLENBQUEsR0FBQSxvQkFBQSx1QkFBQSxHQUFBLENBQUEsR0FBQSxVQUFBLFNBQUEsV0FBQSxPQUFBLGlCQUFBLFFBQUEsY0FBQSx5SkFBQSxHQUFBLENBQUEsR0FBQSxRQUFBLGdCQUFBLGtCQUFBLGVBQUEsUUFBQSxHQUFBLFNBQUEsVUFBQSxVQUFBLFVBQUEsaUJBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLFNBQUEsY0FBQSxhQUFBLGVBQUEsR0FBQSxDQUFBLEdBQUEsZUFBQSxrQkFBQSxpQkFBQSxPQUFBLFdBQUEsUUFBQSxTQUFBLEdBQUEsQ0FBQSxHQUFBLFVBQUEsU0FBQSxXQUFBLE9BQUEsaUJBQUEsUUFBQSxjQUFBLHlKQUFBLEdBQUEsQ0FBQSxHQUFBLFFBQUEsZ0JBQUEsa0JBQUEsaUJBQUEsR0FBQSxTQUFBLFVBQUEsVUFBQSxVQUFBLGlCQUFBLE1BQUEsR0FBQSxDQUFBLEdBQUEsTUFBQSxTQUFBLFVBQUEsYUFBQSxpQkFBQSxHQUFBLENBQUEsR0FBQSxRQUFBLFFBQUEsb0JBQUEsdUJBQUEsV0FBQSxlQUFBLEdBQUEsQ0FBQSxHQUFBLFVBQUEsU0FBQSxXQUFBLE9BQUEsaUJBQUEsUUFBQSxjQUFBLHlKQUFBLEdBQUEsQ0FBQSxHQUFBLFFBQUEsZ0JBQUEsa0JBQUEsZ0JBQUEsUUFBQSxHQUFBLFNBQUEsVUFBQSxVQUFBLFVBQUEsaUJBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLFNBQUEsY0FBQSxhQUFBLGdCQUFBLEdBQUEsQ0FBQSxHQUFBLFVBQUEsU0FBQSxXQUFBLE9BQUEsaUJBQUEsUUFBQSxjQUFBLHlKQUFBLEdBQUEsQ0FBQSxHQUFBLFFBQUEsZ0JBQUEsa0JBQUEsaUJBQUEsUUFBQSxHQUFBLFNBQUEsVUFBQSxVQUFBLFVBQUEsaUJBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLFNBQUEsV0FBQSxhQUFBLGlCQUFBLEdBQUEsQ0FBQSxHQUFBLFVBQUEsU0FBQSxXQUFBLE9BQUEsaUJBQUEsUUFBQSxjQUFBLHlKQUFBLEdBQUEsQ0FBQSxHQUFBLFFBQUEsZ0JBQUEsa0JBQUEsZUFBQSxRQUFBLEdBQUEsU0FBQSxVQUFBLFVBQUEsVUFBQSxpQkFBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsU0FBQSxXQUFBLGFBQUEsZUFBQSxHQUFBLENBQUEsR0FBQSxlQUFBLGtCQUFBLGlCQUFBLE9BQUEsV0FBQSxRQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsVUFBQSxTQUFBLFdBQUEsT0FBQSxpQkFBQSxRQUFBLGNBQUEseUpBQUEsR0FBQSxDQUFBLEdBQUEsUUFBQSxnQkFBQSxrQkFBQSxlQUFBLFFBQUEsR0FBQSxTQUFBLFVBQUEsVUFBQSxVQUFBLGlCQUFBLE1BQUEsR0FBQSxDQUFBLEdBQUEsTUFBQSxTQUFBLG9CQUFBLGFBQUEsZUFBQSxHQUFBLENBQUEsR0FBQSxVQUFBLFNBQUEsV0FBQSxPQUFBLGlCQUFBLFFBQUEsY0FBQSx5SkFBQSxHQUFBLENBQUEsR0FBQSxRQUFBLGdCQUFBLGtCQUFBLGVBQUEsUUFBQSxHQUFBLFNBQUEsVUFBQSxVQUFBLFVBQUEsaUJBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLFNBQUEsWUFBQSxhQUFBLGVBQUEsR0FBQSxDQUFBLEdBQUEs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QUYsZ0JBQUFELFdBQUEsR0FBQSxhQUFBLEVBQUEsQ0FBQTtFQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxjQUFBLHFCQUFBLEtBQUEsSUFBQSxDQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxlQUFBLFlBQUEsT0FBQSxZQUFBLElBQUEsR0FBQSw0QkFBQSxPQUFBLEVBQUEsT0FBQSxNQUFBLHFCQUFBLEVBQUEsU0FBQSxDQUFBO0FBQUEsR0FBQTs7O0E5Qkx6QixxQkFBcUIsY0FBYyxTQUFTLEVBQUUsTUFBTSxDQUFDLFFBQVEsUUFBUSxNQUFNLEdBQUcsQ0FBQzsiLCJuYW1lcyI6WyJDb21wb25lbnQiLCJjb21wdXRlZCIsImVmZmVjdCIsImluamVjdCIsIkNvbW1vbk1vZHVsZSIsIlJvdXRlck1vZHVsZSIsIkNvbXBvbmVudCIsImluamVjdCIsIk5hdmlnYXRpb25FbmQiLCJSb3V0ZXIiLCJSb3V0ZXJNb2R1bGUiLCJmaWx0ZXIiLCJDb21wb25lbnQiLCJDb21tb25Nb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJDb21wb25lbnQiLCJpbmplY3QiLCJSb3V0ZXJNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJpbmplY3QiLCJDb21tb25Nb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkxIiwiaTIiLCJpMyIsIl9mb3JUcmFjazAiLCJDb21tb25Nb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkxIiwiaTIiLCJpbmplY3QiLCJSb3V0ZXIiLCJmaWx0ZXIiLCJOYXZpZ2F0aW9uRW5kIiwiUm91dGVyTW9kdWxlIiwiQ29tcG9uZW50IiwiaTAiLCJpMSIsIkNvbXBvbmVudCIsImkwIiwiaW5qZWN0IiwiZWZmZWN0IiwiY29tcHV0ZWQiLCJDb21tb25Nb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkxIiwiaTIiLCJDb21wb25lbnQiLCJDb21wb25lbnQiLCJpMCIsImkxIiwiaTIiLCJpMyIsIkNvbXBvbmVudCIsIkNvbW1vbk1vZHVsZSIsImkwIiwiaTEiLCJDb21wb25lbnQiLCJpbmplY3QiLCJzaWduYWwiLCJSaXBwbGVNb2R1bGUiLCJCdXR0b25Nb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJzaWduYWwiLCJpbmplY3QiLCJDb21tb25Nb2R1bGUiLCJCdXR0b25Nb2R1bGUiLCJSaXBwbGVNb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkxIiwiaTIiLCJpMyIsIkNvbXBvbmVudCIsImluamVjdCIsIkNvbW1vbk1vZHVsZSIsIkJ1dHRvbk1vZHVsZSIsIk1lbnVNb2R1bGUiLCJIdHRwQ2xpZW50IiwiaW5qZWN0IiwiSW5qZWN0YWJsZSIsImluamVjdCIsIkNvbW1vbk1vZHVsZSIsIkJ1dHRvbk1vZHVsZSIsIk1lbnVNb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkxIiwiaTIiLCJpMyIsImk0IiwiQ29tcG9uZW50IiwiZWZmZWN0IiwiaW5qZWN0Iiwic2lnbmFsIiwiaW5qZWN0Iiwic2lnbmFsIiwiZWZmZWN0IiwiQ29tcG9uZW50IiwiaTAiLCJpMSIsImkyIiwiQ29tcG9uZW50IiwiaTAiLCJDb21wb25lbnQiLCJSb3V0ZXJNb2R1bGUiLCJSaXBwbGVNb2R1bGUiLCJTdHlsZUNsYXNzTW9kdWxlIiwiQnV0dG9uTW9kdWxlIiwiRGl2aWRlck1vZHVsZSIsIkNvbXBvbmVudCIsIlN0eWxlQ2xhc3NNb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJSaXBwbGVNb2R1bGUiLCJCdXR0b25Nb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJTdHlsZUNsYXNzTW9kdWxlIiwiQnV0dG9uTW9kdWxlIiwiUmlwcGxlTW9kdWxlIiwiQ29tcG9uZW50IiwiaTAiLCJpMSIsImkyIiwiaTMiLCJpNCIsImk1IiwiQ29tcG9uZW50IiwiQnV0dG9uTW9kdWxlIiwiUmlwcGxlTW9kdWxlIiwiaTAiLCJpMSIsImkyIiwiaTMiLCJDb21wb25lbnQiLCJDb21tb25Nb2R1bGUiLCJpMCIsImkxIiwiQ29tcG9uZW50IiwiaTAiLCJDb21wb25lbnQiLCJCdXR0b25Nb2R1bGUiLCJSaXBwbGVNb2R1bGUiLCJpMCIsImkxIiwiaTIiLCJpMyIsImk0IiwiaTUiLCJDb21wb25lbnQiLCJSb3V0ZXJNb2R1bGUiLCJpMCIsImkxIiwiUm91dGVyTW9kdWxlIiwiUmlwcGxlTW9kdWxlIiwiU3R5bGVDbGFzc01vZHVsZSIsIkJ1dHRvbk1vZHVsZSIsIkRpdmlkZXJNb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkxIiwiaTIiLCJpMyIsImk0IiwiaTUiLCJpNiIsIkNvbXBvbmVudCIsIlJvdXRlck1vZHVsZSIsIkJ1dHRvbk1vZHVsZSIsIlJvdXRlck1vZHVsZSIsIkJ1dHRvbk1vZHVsZSIsIkNvbXBvbmVudCIsImkwIiwiaTEiLCJpMiIsImkzIiwiQ29tbW9uTW9kdWxlIiwiQ29tcG9uZW50IiwiYWZ0ZXJOZXh0UmVuZGVyIiwiaW5qZWN0Iiwic2lnbmFsIiwiRm9ybXNNb2R1bGUiLCJEYXRlUGlja2VyTW9kdWxlIiwiVGFibGVNb2R1bGUiLCJCdXR0b25Nb2R1bGUiLCJDb25maXJtRGlhbG9nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQ29tcG9uZW50IiwiaW5qZWN0Iiwic2lnbmFsIiwiVGFibGVNb2R1bGUiLCJCdXR0b25Nb2R1bGUiLCJpbmplY3QiLCJzaWduYWwiLCJfYzAiLCJDb21tb25Nb2R1bGUiLCJUYWJsZU1vZHVsZSIsIkJ1dHRvbk1vZHVsZSIsIkNvbXBvbmVudCIsImkwIiwiaTEiLCJpMiIsImkzIiwiaTQiLCJpNSIsImk2IiwiaTciLCJzaWduYWwiLCJpbmplY3QiLCJhZnRlck5leHRSZW5kZXIiLCJfYzAiLCJDb21tb25Nb2R1bGUiLCJEYXRlUGlja2VyTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJUYWJsZU1vZHVsZSIsIkJ1dHRvbk1vZHVsZSIsIkNvbmZpcm1EaWFsb2dNb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkxIiwiaTIiLCJpMyIsImk0IiwiaTUiLCJpNiIsImk3IiwiaTgiLCJDb21wb25lbnQiLCJSb3V0ZXJNb2R1bGUiLCJpMCIsImkxIl19