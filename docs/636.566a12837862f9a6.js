"use strict";
(self["webpackChunkuv_ui_prototype"] = self["webpackChunkuv_ui_prototype"] || []).push([[636],{

/***/ 92974:
/*!****************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/layouts/dashboard/dashboard-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 58455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);




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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _services_app_shell_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/app-shell.service */ 97732);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
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
  styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.item[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--uv-color-white);\n}\n.item-square[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.widget-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.wallet[_ngcontent-%COMP%] {\n  width: 20vw;\n  position: relative;\n  right: -30px;\n  background-color: var(--uv-color-white);\n}"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 58455);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-routing.module */ 92974);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);





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