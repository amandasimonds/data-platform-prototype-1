"use strict";
(self["webpackChunkuv_ui_prototype"] = self["webpackChunkuv_ui_prototype"] || []).push([["projects_uv-ui-prototype_src_app_layouts_dashboard_dashboard_module_ts"],{

/***/ 92974:
/*!****************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/layouts/dashboard/dashboard-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 58455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 39609);




const routes = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}];
class DashboardRoutingModule {}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) {
  return new (t || DashboardRoutingModule)();
};
DashboardRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: DashboardRoutingModule
});
DashboardRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 58455:
/*!***********************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/layouts/dashboard/dashboard.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _services_app_shell_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/app-shell.service */ 97732);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);
/* harmony import */ var _uv_ui_lib_src_lib_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/dropdown/dropdown.component */ 81841);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);






function DashboardComponent_uvx_dropdown_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "uvx-dropdown")(1, "div", 11)(2, "uvx-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Placeholder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class DashboardComponent {
  constructor(appShellService) {
    this.appShellService = appShellService;
    this.placeholderDropdowns = [{
      title: 'Placeholder'
    }, {
      title: 'Placeholder'
    }, {
      title: 'Placeholder'
    }, {
      title: 'Placeholder'
    }];
  }
  ngOnInit() {
    this.appShellService.setTitle('Dashboard');
    this.appShellService.setHeaderIcon('dashboard');
    this.appShellService.setNavIcon('home-splash');
  }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_app_shell_service__WEBPACK_IMPORTED_MODULE_0__.AppShellService));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 20,
  vars: 1,
  consts: [[1, "container", "flex", "padding-sm"], [1, "side-container", "gap-sm", "flex-column", "padding-right-sm", "padding-left-sm"], [1, "item", "item-square"], [1, "item", "item-square", "margin-top-sm"], [1, "main-container", "flex", "flex-column"], [1, "top-container", "padding-right-sm", "padding-left-sm", "flex", "justify-content-space-between"], [4, "ngFor", "ngForOf"], [1, "widget-container", "align-items-stretch", "align-content-stretch", "flex", "flex-column", "gap-sm", "padding-top-sm", "padding-left-sm"], [1, "flex", "h-100", "align-items-stretch", "align-content-stretch", "gap-sm"], [1, "item"], [1, "wallet"], ["title", ""], ["size", "sm", 1, "margin-right-xxs"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2)(3, "div", 3)(4, "div", 3)(5, "div", 3)(6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4)(8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, DashboardComponent_uvx_dropdown_9_Template, 5, 0, "uvx-dropdown", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7)(11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 9)(13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "div", 9)(16, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 10)(18, "uvx-icon-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "chevron_left");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.placeholderDropdowns);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_1__.UvxIconComponent, _uv_ui_lib_src_lib_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_2__.DropdownComponent, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__.IconButtonComponent],
  styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.item[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--uv-color-white);\n}\n.item-square[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.widget-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.wallet[_ngcontent-%COMP%] {\n  width: 20vw;\n  position: relative;\n  right: -30px;\n  background-color: var(--uv-color-white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSx1Q0FBQTtBQUFKO0FBRUk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUFSOztBQVFBO0VBRUksV0FBQTtFQUNBLFlBQUE7QUFOSjs7QUFhQTtFQUNJLFlBQUE7QUFWSjs7QUFjQTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtBQVpKIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIC8vIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLml0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXV2LWNvbG9yLXdoaXRlKTtcblxuICAgICYtc3F1YXJlIHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbn1cblxuLnNpZGUtY29udGFpbmVyIHtcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgLy8gYm9yZGVyOiAzcHggc29saWQgb3JhbmdlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnRvcC1jb250YWluZXIge1xuLy8gYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xufVxuXG4ud2lkZ2V0LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIHB1cnBsZTtcbn1cblxuLndhbGxldCB7XG4gICAgLy8gYm9yZGVyOiAycHggc29saWQgZ3JlZW47XG4gICAgd2lkdGg6IDIwdnc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAtMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11di1jb2xvci13aGl0ZSk7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL2xheW91dHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSx1Q0FBQTtBQUFKO0FBRUk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUFSOztBQVFBO0VBRUksV0FBQTtFQUNBLFlBQUE7QUFOSjs7QUFhQTtFQUNJLFlBQUE7QUFWSjs7QUFjQTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtBQVpKO0FBQ0EsdzBDQUF3MEMiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICAvLyBib3JkZXI6IDNweCBzb2xpZCBncmVlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11di1jb2xvci13aGl0ZSk7XG5cbiAgICAmLXNxdWFyZSB7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG59XG5cbi5zaWRlLWNvbnRhaW5lciB7XG4gICAgLy8gYm9yZGVyOiAycHggc29saWQgcmVkO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIC8vIGJvcmRlcjogM3B4IHNvbGlkIG9yYW5nZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50b3AtY29udGFpbmVyIHtcbi8vIGJvcmRlcjogMnB4IHNvbGlkIHB1cnBsZTtcbn1cblxuLndpZGdldC1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCBwdXJwbGU7XG59XG5cbi53YWxsZXQge1xuICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xuICAgIHdpZHRoOiAyMHZ3O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogLTMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdXYtY29sb3Itd2hpdGUpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 26636:
/*!********************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/layouts/dashboard/dashboard.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 58455);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-routing.module */ 92974);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);





class DashboardModule {}
DashboardModule.ɵfac = function DashboardModule_Factory(t) {
  return new (t || DashboardModule)();
};
DashboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: DashboardModule
});
DashboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.UvxIconModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.DropdownModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.IconButtonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.UvxIconModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.DropdownModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.IconButtonModule],
    exports: [_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=projects_uv-ui-prototype_src_app_layouts_dashboard_dashboard_module_ts.js.map