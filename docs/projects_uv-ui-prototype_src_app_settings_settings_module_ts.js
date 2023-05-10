"use strict";
(self["webpackChunkuv_ui_prototype"] = self["webpackChunkuv_ui_prototype"] || []).push([["projects_uv-ui-prototype_src_app_settings_settings_module_ts"],{

/***/ 59697:
/*!************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/settings/connector-creator/connector-creator-steps.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connectorCreatorSteps": () => (/* binding */ connectorCreatorSteps)
/* harmony export */ });
const connectorCreatorSteps = [{
  sectionTitle: 'Details',
  name: 'details',
  required: true,
  complete: false,
  yPos: '',
  steps: [{
    title: 'Connector Name',
    yPos: '',
    name: 'connection-name',
    required: true,
    complete: false,
    selection: '',
    type: 'input',
    options: ['']
  }, {
    title: 'Restricted Access Format',
    yPos: '',
    name: 'restricted-access-format',
    required: true,
    complete: false,
    selection: '',
    type: 'dropdown',
    options: ['Hidden', 'Restricted']
  }]
}, {
  sectionTitle: 'Setup',
  name: 'setup',
  required: true,
  complete: false,
  yPos: '',
  steps: [{
    title: 'Connection Type',
    yPos: '',
    name: 'connection-type',
    required: true,
    complete: false,
    selection: '',
    type: 'dropdown',
    options: ['Gen2', 'Option', 'Option 2']
  }, {
    title: 'Authorization Method',
    yPos: '',
    name: 'authorization-method',
    required: true,
    complete: false,
    selection: '',
    type: 'dropdown',
    options: ['Active Directory Service Principal (recommended)', 'Option', 'Option 2']
  }, {
    title: 'Account Name',
    yPos: '',
    name: 'account-name',
    required: true,
    complete: false,
    selection: '',
    type: 'input',
    options: ['']
  }, {
    title: 'Client ID',
    yPos: '',
    name: 'client-id',
    required: true,
    complete: false,
    selection: '',
    type: 'input',
    options: ['']
  }, {
    title: 'Tenant ID',
    yPos: '',
    name: 'tenant-id',
    required: true,
    complete: false,
    selection: '',
    type: 'input',
    options: ['']
  }]
}];

/***/ }),

/***/ 16493:
/*!****************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/settings/connector-creator/connector-creator.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectorCreatorComponent": () => (/* binding */ ConnectorCreatorComponent)
/* harmony export */ });
/* harmony import */ var _connector_creator_steps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connector-creator-steps */ 59697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _uv_ui_lib_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/button/button.component */ 26218);
/* harmony import */ var _uv_ui_lib_src_lib_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/dropdown/dropdown.component */ 81841);
/* harmony import */ var _uv_ui_lib_src_lib_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/text-input/text-input.component */ 21751);






const _c0 = ["formSection"];
const _c1 = ["formStep"];
function ConnectorCreatorComponent_div_1_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "uvx-text-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function ConnectorCreatorComponent_div_1_div_6_div_2_Template_uvx_text_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const step_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const section_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.enterFormInputSelection($event, step_r4, section_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const step_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", step_r4.title)("required", step_r4.required);
  }
}
function ConnectorCreatorComponent_div_1_div_6_div_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConnectorCreatorComponent_div_1_div_6_div_3_span_4_Template_span_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const option_r14 = restoredCtx.$implicit;
      const step_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const section_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.selectFormDropdownOption(step_r4, option_r14, section_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r14, " ");
  }
}
function ConnectorCreatorComponent_div_1_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "uvx-dropdown", 15)(2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ConnectorCreatorComponent_div_1_div_6_div_3_span_4_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const step_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hasBorder", true)("label", step_r4.title)("required", step_r4.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](step_r4.selection != "" ? step_r4.selection : step_r4.options[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", step_r4.options);
  }
}
function ConnectorCreatorComponent_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ConnectorCreatorComponent_div_1_div_6_div_2_Template, 2, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ConnectorCreatorComponent_div_1_div_6_div_3_Template, 5, 5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", step_r4.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("id", step_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "input");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "dropdown");
  }
}
function ConnectorCreatorComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5, 6)(2, "div", 7)(3, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ConnectorCreatorComponent_div_1_div_6_Template, 4, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const section_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("topPosition", section_r1.complete ? "" : ctx_r0.formSectionYPos);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("id", section_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](section_r1.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", section_r1.steps);
  }
}
class ConnectorCreatorComponent {
  getYPos(el) {
    return this.elRef.nativeElement.querySelector(el).offsetTop;
  }
  setYPos() {
    const sectionElements = this.formSections;
    const stepElements = this.formSteps;
    const sections = this.connectorCreatorSteps;
    sectionElements.forEach(el => {
      sections.map(section => {
        if (section.name === el.nativeElement.id) {
          section.yPos = el.nativeElement.offsetTop;
        }
      });
    });
    stepElements.forEach(el => {
      sections.forEach(section => {
        section.steps.map(step => {
          if (step.name === el.nativeElement.id) {
            step.yPos = el.nativeElement.offsetTop;
          }
        });
      });
    });
  }
  enterFormInputSelection(event, step, section) {
    const target = event.target;
    target.value.length > 2 ? step.complete = true : step.complete = false;
    this.checkIfSectionComplete(section);
  }
  selectFormDropdownOption(step, option, section) {
    step.selection = option;
    step.complete = true;
    this.checkIfSectionComplete(section);
  }
  checkIfSectionComplete(section) {
    const result = section.steps.every(step => {
      return step.complete;
    });
    result ? section.complete = true : section.complete = false;
  }
  constructor(elRef) {
    this.elRef = elRef;
    this.connectorCreatorSteps = _connector_creator_steps__WEBPACK_IMPORTED_MODULE_0__.connectorCreatorSteps;
  }
  ngOnInit() {}
  ngAfterViewChecked() {
    this.setYPos();
  }
}
ConnectorCreatorComponent.ɵfac = function ConnectorCreatorComponent_Factory(t) {
  return new (t || ConnectorCreatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef));
};
ConnectorCreatorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ConnectorCreatorComponent,
  selectors: [["app-connector-creator"]],
  viewQuery: function ConnectorCreatorComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.formSections = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.formSteps = _t);
    }
  },
  decls: 7,
  vars: 1,
  consts: [[1, "container", "padding-md", "flex", "flex-column"], ["yPosition", "", "class", "margin-bottom-md", 3, "topPosition", 4, "ngFor", "ngForOf"], [1, "divider", "margin-top-sm", "margin-bottom-sm"], ["label", "+ Add Additional File Path", 1, "margin-bottom-sm"], ["label", "Add Container", "mode", "primary"], ["yPosition", "", 1, "margin-bottom-md", 3, "topPosition"], ["formSection", ""], [1, "flex", "flex-column"], [1, "margin-bottom-sm"], [1, "flex", "flex-column", "gap-xs"], ["class", "form-item", 3, "ngSwitch", 4, "ngFor", "ngForOf"], [1, "form-item", 3, "ngSwitch"], ["formStep", ""], [4, "ngSwitchCase"], [3, "label", "value", "required", "keyup"], [3, "hasBorder", "label", "required"], ["title", ""], ["options", "", "class", "custom-option flex justify-content-space-between", 3, "click", 4, "ngFor", "ngForOf"], ["options", "", 1, "custom-option", "flex", "justify-content-space-between", 3, "click"]],
  template: function ConnectorCreatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ConnectorCreatorComponent_div_1_Template, 7, 4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Data Source");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 2)(5, "uvx-button", 3)(6, "uvx-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.connectorCreatorSteps);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _uv_ui_lib_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _uv_ui_lib_src_lib_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_2__.DropdownComponent, _uv_ui_lib_src_lib_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_3__.TextInputComponent],
  styles: [".container[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rvci1jcmVhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6ImNvbm5lY3Rvci1jcmVhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwJTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL3NldHRpbmdzL2Nvbm5lY3Rvci1jcmVhdG9yL2Nvbm5lY3Rvci1jcmVhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKO0FBQ0EsZ1VBQWdVIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwJTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 19377:
/*!*************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/settings/connector-table/connector-cols.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connectorCols": () => (/* binding */ connectorCols)
/* harmony export */ });
const connectorCols = [{
  colName: 'Name',
  fieldName: 'name',
  icon: 'search'
}, {
  colName: 'Type',
  fieldName: 'type',
  icon: 'list-right'
}, {
  colName: 'Last Modified',
  fieldName: 'lastModified',
  icon: 'calendar'
}, {
  colName: 'Restricted Access',
  fieldName: 'restrictedAccess',
  icon: 'list-right'
}];

/***/ }),

/***/ 9906:
/*!*************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/settings/connector-table/connector-data.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connectorData": () => (/* binding */ connectorData)
/* harmony export */ });
const connectorData = [{
  name: 'Database 1',
  type: 'Data Lake Connector',
  lastModified: '10/10/21',
  restrictedAccess: 'Hidden'
}, {
  name: 'Database 1',
  type: 'Data Lake Connector',
  lastModified: '10/10/21',
  restrictedAccess: 'Hidden'
}, {
  name: 'Database 1',
  type: 'Data Lake Connector',
  lastModified: '10/10/21',
  restrictedAccess: 'Hidden'
}, {
  name: 'Database 1',
  type: 'Data Lake Connector',
  lastModified: '10/10/21',
  restrictedAccess: 'Hidden'
}, {
  name: 'Database 1',
  type: 'Data Lake Connector',
  lastModified: '10/10/21',
  restrictedAccess: 'Hidden'
}, {
  name: 'Database 1',
  type: 'Data Lake Connector',
  lastModified: '10/10/21',
  restrictedAccess: 'Hidden'
}];

/***/ }),

/***/ 49263:
/*!************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/settings/connector-table/connector-table.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectorTableComponent": () => (/* binding */ ConnectorTableComponent)
/* harmony export */ });
/* harmony import */ var _connector_cols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connector-cols */ 19377);
/* harmony import */ var _connector_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connector-data */ 9906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);





function ConnectorTableComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "uvx-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const col_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r2.colName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", col_r2.icon);
  }
}
function ConnectorTableComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.lastModified);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.restrictedAccess);
  }
}
class ConnectorTableComponent {
  constructor() {
    this.cols = _connector_cols__WEBPACK_IMPORTED_MODULE_0__.connectorCols;
    this.data = _connector_data__WEBPACK_IMPORTED_MODULE_1__.connectorData;
  }
  ngOnInit() {}
}
ConnectorTableComponent.ɵfac = function ConnectorTableComponent_Factory(t) {
  return new (t || ConnectorTableComponent)();
};
ConnectorTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ConnectorTableComponent,
  selectors: [["app-connector-table"]],
  decls: 5,
  vars: 2,
  consts: [[1, "table-container"], [1, "table"], [1, "table-column"], ["class", "column col-name", 4, "ngFor", "ngForOf"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "column", "col-name"], [1, "flex", "justify-content-space-between"], ["size", "xs", 1, "margin-right-lg", 3, "icon"], [1, "table-row"], [1, "row"]],
  template: function ConnectorTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ConnectorTableComponent_div_3_Template, 4, 2, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ConnectorTableComponent_div_4_Template, 9, 4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.cols);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.data);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_2__.UvxIconComponent],
  styles: [".table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-column[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  flex: 0 0 45px;\n  display: flex;\n  align-items: center;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n  -webkit-user-select: none;\n          user-select: none;\n  display: inline-block;\n  box-shadow: var(--uv-box-shadow);\n  background-color: var(--uv-color-white);\n  padding-top: 12px;\n  margin: 32px;\n}\n.table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  height: auto;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  background-color: white;\n  cursor: pointer;\n}\n.table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgba(0, 0, 0, 0.1);\n}\n.table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: var(--uv-font-size-xs);\n  color: var(--uv-font-color-secondary);\n}\n.table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:first-child {\n  margin: 0 0 0 32px;\n}\n.table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-column[_ngcontent-%COMP%] {\n  background-color: white;\n  cursor: pointer;\n}\n.table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-column[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: var(--uv-font-bold);\n}\n.table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-column[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:first-child {\n  margin: 0 0 0 32px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rvci10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQUNSO0FBQ1E7RUFFSSx1QkFBQTtFQUVBLGVBQUE7QUFEWjtBQUFZO0VBQWtCLDhCQUFBO0FBRzlCO0FBQVk7RUFFSSxPQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtBQUNoQjtBQUpnQjtFQUFlLGtCQUFBO0FBTy9CO0FBQVE7RUFFSSx1QkFBQTtFQUNBLGVBQUE7QUFDWjtBQUFZO0VBRUksT0FBQTtFQUNBLGdDQUFBO0FBQ2hCO0FBSGdCO0VBQWUsa0JBQUE7QUFNL0I7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJjb25uZWN0b3ItdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlY29sdW1uUm93QmFzZVN0eWxlcyB7XG4gICAgZmxleDogMCAwIDQ1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgXG4gICAgYm94LXNoYWRvdzogdmFyKC0tdXYtYm94LXNoYWRvdyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdXYtY29sb3Itd2hpdGUpO1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgIG1hcmdpbjogMzJweDtcblxuICAgIC50YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcblxuICAgICAgICAudGFibGUtcm93IHtcbiAgICAgICAgICAgIEBleHRlbmQgJWNvbHVtblJvd0Jhc2VTdHlsZXM7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKG9kZCkge2JhY2tncm91bmQ6ICByZ2JhKDAsMCwwLDAuMSl9XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgIC5yb3cge1xuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge21hcmdpbjogMCAwIDAgMzJweDt9XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXV2LWZvbnQtc2l6ZS14cyk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXV2LWZvbnQtY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50YWJsZS1jb2x1bW4ge1xuICAgICAgICAgICAgQGV4dGVuZCAlY29sdW1uUm93QmFzZVN0eWxlcztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7bWFyZ2luOiAwIDAgMCAzMnB4O31cbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS11di1mb250LWJvbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL3NldHRpbmdzL2Nvbm5lY3Rvci10YWJsZS9jb25uZWN0b3ItdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7QUFDUjtBQUNRO0VBRUksdUJBQUE7RUFFQSxlQUFBO0FBRFo7QUFBWTtFQUFrQiw4QkFBQTtBQUc5QjtBQUFZO0VBRUksT0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7QUFDaEI7QUFKZ0I7RUFBZSxrQkFBQTtBQU8vQjtBQUFRO0VBRUksdUJBQUE7RUFDQSxlQUFBO0FBQ1o7QUFBWTtFQUVJLE9BQUE7RUFDQSxnQ0FBQTtBQUNoQjtBQUhnQjtFQUFlLGtCQUFBO0FBTS9COztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFFQSw0a0ZBQTRrRiIsInNvdXJjZXNDb250ZW50IjpbIiVjb2x1bW5Sb3dCYXNlU3R5bGVzIHtcbiAgICBmbGV4OiAwIDAgNDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICBcbiAgICBib3gtc2hhZG93OiB2YXIoLS11di1ib3gtc2hhZG93KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11di1jb2xvci13aGl0ZSk7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgbWFyZ2luOiAzMnB4O1xuXG4gICAgLnRhYmxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXG4gICAgICAgIC50YWJsZS1yb3cge1xuICAgICAgICAgICAgQGV4dGVuZCAlY29sdW1uUm93QmFzZVN0eWxlcztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgJjpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZDogIHJnYmEoMCwwLDAsMC4xKX1cbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7bWFyZ2luOiAwIDAgMCAzMnB4O31cbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdXYtZm9udC1zaXplLXhzKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdXYtZm9udC1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRhYmxlLWNvbHVtbiB7XG4gICAgICAgICAgICBAZXh0ZW5kICVjb2x1bW5Sb3dCYXNlU3R5bGVzO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHttYXJnaW46IDAgMCAwIDMycHg7fVxuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXV2LWZvbnQtYm9sZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 40174:
/*!********************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/settings/settings-menu/settings-menu.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsMenuComponent": () => (/* binding */ SettingsMenuComponent)
/* harmony export */ });
/* harmony import */ var _connector_creator_connector_creator_steps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../connector-creator/connector-creator-steps */ 59697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _uv_ui_lib_src_lib_expanding_menu_expanding_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/expanding-menu/expanding-menu.component */ 12471);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);





const _c0 = ["section"];
function SettingsMenuComponent_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "uvx-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const step_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", step_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", step_r3.complete ? "check" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](step_r3.title);
  }
}
function SettingsMenuComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "uvx-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SettingsMenuComponent_div_2_div_6_Template, 4, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const section_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", section_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", section_r1.complete ? "check" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](section_r1.sectionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", section_r1.steps);
  }
}
class SettingsMenuComponent {
  constructor() {
    this.settingsMenuIsExpanded = true;
    this.connectorCreatorSteps = _connector_creator_connector_creator_steps__WEBPACK_IMPORTED_MODULE_0__.connectorCreatorSteps;
  }
  toggleSettingsMenu() {
    this.settingsMenuIsExpanded = !this.settingsMenuIsExpanded;
  }
}
SettingsMenuComponent.ɵfac = function SettingsMenuComponent_Factory(t) {
  return new (t || SettingsMenuComponent)();
};
SettingsMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SettingsMenuComponent,
  selectors: [["app-settings-menu"]],
  viewQuery: function SettingsMenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.div = _t.first);
    }
  },
  decls: 3,
  vars: 2,
  consts: [[3, "menuIsExpanded", "toggleButtonClicked"], ["content", ""], [4, "ngFor", "ngForOf"], [1, "margin-bottom-md"], [1, "flex", "align-items-center"], ["color", "success", 1, "margin-right-xs", 3, "icon"], [1, "uv-body-sm", "bold"], ["class", "flex align-items-center", 4, "ngFor", "ngForOf"], [1, "uv-body-sm"]],
  template: function SettingsMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "uvx-expanding-menu", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("toggleButtonClicked", function SettingsMenuComponent_Template_uvx_expanding_menu_toggleButtonClicked_0_listener() {
        return ctx.toggleSettingsMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SettingsMenuComponent_div_2_Template, 7, 4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("menuIsExpanded", ctx.settingsMenuIsExpanded);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.connectorCreatorSteps);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _uv_ui_lib_src_lib_expanding_menu_expanding_menu_component__WEBPACK_IMPORTED_MODULE_1__.ExpandingMenuComponent, _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_2__.UvxIconComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy1tZW51LmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLW1lbnUvc2V0dGluZ3MtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 71367:
/*!*****************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/settings/settings-menu/settings-menu.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsMenuModule": () => (/* binding */ SettingsMenuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _settings_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-menu.component */ 40174);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _shared_position_element_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/position-element.directive */ 71418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);





class SettingsMenuModule {}
SettingsMenuModule.ɵfac = function SettingsMenuModule_Factory(t) {
  return new (t || SettingsMenuModule)();
};
SettingsMenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: SettingsMenuModule
});
SettingsMenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.ExpandingMenuModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.UvxIconModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SettingsMenuModule, {
    declarations: [_settings_menu_component__WEBPACK_IMPORTED_MODULE_0__.SettingsMenuComponent, _shared_position_element_directive__WEBPACK_IMPORTED_MODULE_2__.PositionElementDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.ExpandingMenuModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.UvxIconModule],
    exports: [_settings_menu_component__WEBPACK_IMPORTED_MODULE_0__.SettingsMenuComponent]
  });
})();

/***/ }),

/***/ 62849:
/*!******************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/settings/settings-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsRoutingModule": () => (/* binding */ SettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _connector_creator_connector_creator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connector-creator/connector-creator.component */ 16493);
/* harmony import */ var _connector_table_connector_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connector-table/connector-table.component */ 49263);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component */ 59778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);






const routes = [{
  path: '',
  component: _settings_component__WEBPACK_IMPORTED_MODULE_2__.SettingsComponent,
  children: [{
    path: '',
    redirectTo: 'connector-table',
    pathMatch: 'full'
  }, {
    path: 'connector-creator',
    component: _connector_creator_connector_creator_component__WEBPACK_IMPORTED_MODULE_0__.ConnectorCreatorComponent
  }, {
    path: 'connector-table',
    component: _connector_table_connector_table_component__WEBPACK_IMPORTED_MODULE_1__.ConnectorTableComponent
  }]
}];
class SettingsRoutingModule {}
SettingsRoutingModule.ɵfac = function SettingsRoutingModule_Factory(t) {
  return new (t || SettingsRoutingModule)();
};
SettingsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: SettingsRoutingModule
});
SettingsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SettingsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 4787:
/*!********************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/settings/settings-sub-navbar/settings-sub-navbar.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsSubNavbarComponent": () => (/* binding */ SettingsSubNavbarComponent)
/* harmony export */ });
/* harmony import */ var _settingsNavLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settingsNavLinks */ 9312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 65504);
/* harmony import */ var _uv_ui_lib_src_lib_navbar_sub_navbar_sub_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/navbar-sub/navbar-sub.component */ 92998);







const _c0 = function (a0) {
  return {
    app: a0
  };
};
function SettingsSubNavbarComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "uvx-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const navlink_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("nav-icon-active-expanded", ctx_r1.subNavbarIsExpanded)("nav-icon-disabled", navlink_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", navlink_r2.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", navlink_r2.navlink)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, navlink_r2.app));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", navlink_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("navbar-expanded-text-visible", ctx_r1.subNavbarIsExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", navlink_r2.tooltip, " ");
  }
}
function SettingsSubNavbarComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SettingsSubNavbarComponent_div_1_div_1_Template, 5, 13, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.settingsNavlinks);
  }
}
class SettingsSubNavbarComponent {
  constructor() {
    this.subNavbarIsExpanded = false;
    this.settingsNavlinks = _settingsNavLinks__WEBPACK_IMPORTED_MODULE_0__.settingsNavlinks;
  }
  toggleSubNavbar() {
    this.subNavbarIsExpanded = !this.subNavbarIsExpanded;
  }
}
SettingsSubNavbarComponent.ɵfac = function SettingsSubNavbarComponent_Factory(t) {
  return new (t || SettingsSubNavbarComponent)();
};
SettingsSubNavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SettingsSubNavbarComponent,
  selectors: [["app-settings-sub-navbar"]],
  inputs: {
    subNavbarIsExpanded: "subNavbarIsExpanded"
  },
  decls: 2,
  vars: 3,
  consts: [[3, "withPadding", "isExpanded", "toggleButtonClicked"], [4, "ngIf"], ["class", "nav-icon", 3, "matTooltip", "nav-icon-active-expanded", "nav-icon-disabled", 4, "ngFor", "ngForOf"], [1, "nav-icon", 3, "matTooltip"], [1, "display-inline-block", 3, "routerLink", "queryParams"], ["color", "black", 3, "icon"], [1, "display-inline-block", "margin-left-xxs", "navbar-expanded-text"]],
  template: function SettingsSubNavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "uvx-navbar-sub", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("toggleButtonClicked", function SettingsSubNavbarComponent_Template_uvx_navbar_sub_toggleButtonClicked_0_listener() {
        return ctx.toggleSubNavbar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SettingsSubNavbarComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("withPadding", true)("isExpanded", ctx.subNavbarIsExpanded);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.subNavbarIsExpanded);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_1__.UvxIconComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _uv_ui_lib_src_lib_navbar_sub_navbar_sub_component__WEBPACK_IMPORTED_MODULE_2__.NavbarSubComponent],
  styles: [".navbar-expanded-text[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n.navbar-expanded-text-visible[_ngcontent-%COMP%] {\n  pointer-events: inherit;\n  opacity: 1;\n  transition-delay: 0.25s;\n  transition-property: opacity;\n}\n\n.toggle-button[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLXN1Yi1uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7QUFBUjtBQUVRO0VBQ0ksdUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQUFaOztBQUtBO0VBQ0ksaUJBQUE7QUFGSiIsImZpbGUiOiJzZXR0aW5ncy1zdWItbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1leHBhbmRlZCB7XG4gICAgJi10ZXh0IHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAgICAgJi12aXNpYmxlIHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBpbmhlcml0O1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMjVzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRvZ2dsZS1idXR0b24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLXN1Yi1uYXZiYXIvc2V0dGluZ3Mtc3ViLW5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtBQUFSO0FBRVE7RUFDSSx1QkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FBQVo7O0FBS0E7RUFDSSxpQkFBQTtBQUZKO0FBQ0Esd3pCQUF3ekIiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWV4cGFuZGVkIHtcbiAgICAmLXRleHQge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgICAmLXZpc2libGUge1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGluaGVyaXQ7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4yNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udG9nZ2xlLWJ1dHRvbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 59778:
/*!*************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/settings/settings.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 71265);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 10907);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _services_app_shell_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/app-shell.service */ 97732);
/* harmony import */ var _services_on_destroy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/on-destroy.service */ 14270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);
/* harmony import */ var _uv_ui_lib_src_lib_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../uv-ui-lib/src/lib/action-bar/action-bar.component */ 89895);








function SettingsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "uvx-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "New Data Lake Connector");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class SettingsComponent {
  constructor(appShellService, destroy$, ref, route) {
    this.appShellService = appShellService;
    this.destroy$ = destroy$;
    this.ref = ref;
    this.route = route;
    this.currentApp = '';
    this.currentService = '';
  }
  get isCreateConnector() {
    return this.currentService === 'connector-creator';
  }
  ngOnInit() {
    this.appShellService.setTitle('Settings');
    this.appShellService.setHeaderIcon('settings');
    this.appShellService.setNavIcon('settings');
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(params => {
      this.currentApp = params['app'];
      this.currentService = params['service'];
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(() => this.ref.detectChanges());
  }
  launchDataLakeConnectorCreator() {}
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
  return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_app_shell_service__WEBPACK_IMPORTED_MODULE_0__.AppShellService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_on_destroy_service__WEBPACK_IMPORTED_MODULE_1__.NgOnDestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
};
SettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SettingsComponent,
  selectors: [["app-settings"]],
  decls: 7,
  vars: 1,
  consts: [[1, "row"], [1, "w-100"], ["left", "", 1, "flex", "margin-top-xs", "margin-bottom-xs"], ["class", "flex align-items-center", 4, "ngIf"], ["right", "", 1, "flex", "margin-top-xs", "margin-bottom-xs"], [1, "router-container"], [1, "flex", "align-items-center"], ["icon", "datalake", 1, "margin-right-xs"]],
  template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "uvx-action-bar", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SettingsComponent_div_3_Template, 4, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isCreateConnector);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_2__.UvxIconComponent, _uv_ui_lib_src_lib_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_3__.ActionBarComponent],
  styles: [".router-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 132px);\n  margin-right: 32px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3V0ZXItY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzJweCk7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUNBLG9hQUFvYSIsInNvdXJjZXNDb250ZW50IjpbIi5yb3V0ZXItY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzJweCk7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 82416:
/*!**********************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/settings/settings.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.component */ 59778);
/* harmony import */ var _connector_table_connector_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connector-table/connector-table.component */ 49263);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-routing.module */ 62849);
/* harmony import */ var _settings_menu_settings_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-menu/settings-menu.module */ 71367);
/* harmony import */ var _connector_creator_connector_creator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connector-creator/connector-creator.component */ 16493);
/* harmony import */ var _settings_sub_navbar_settings_sub_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings-sub-navbar/settings-sub-navbar.component */ 4787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 39609);









class SettingsModule {}
SettingsModule.ɵfac = function SettingsModule_Factory(t) {
  return new (t || SettingsModule)();
};
SettingsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: SettingsModule
});
SettingsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.DropdownModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.IconButtonModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__.SettingsRoutingModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.UvxIconModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.TextInputModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.ActionBarModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.TooltipModule, _settings_menu_settings_menu_module__WEBPACK_IMPORTED_MODULE_4__.SettingsMenuModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.ExpandingMenuModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.NavbarSubModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SettingsModule, {
    declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent, _connector_table_connector_table_component__WEBPACK_IMPORTED_MODULE_1__.ConnectorTableComponent, _connector_creator_connector_creator_component__WEBPACK_IMPORTED_MODULE_5__.ConnectorCreatorComponent, _settings_sub_navbar_settings_sub_navbar_component__WEBPACK_IMPORTED_MODULE_6__.SettingsSubNavbarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.DropdownModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.IconButtonModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__.SettingsRoutingModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.UvxIconModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.TextInputModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.ActionBarModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.TooltipModule, _settings_menu_settings_menu_module__WEBPACK_IMPORTED_MODULE_4__.SettingsMenuModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.ExpandingMenuModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__.NavbarSubModule],
    exports: [_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent, _settings_sub_navbar_settings_sub_navbar_component__WEBPACK_IMPORTED_MODULE_6__.SettingsSubNavbarComponent]
  });
})();

/***/ }),

/***/ 71418:
/*!*******************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/shared/position-element.directive.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositionElementDirective": () => (/* binding */ PositionElementDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 39609);

class PositionElementDirective {
  constructor(el) {
    this.el = el;
    this.stylePos = 'relative';
  }
  ngOnInit() {}
  ngAfterViewChecked() {
    this.el.nativeElement.style.position = this.stylePos;
    this.el.nativeElement.style.top = `${this.topPosition}px`;
    //   console.log(
    //     this.el.nativeElement.id, '\n',
    //     this.topPosition, '\n',
    //     this.el.nativeElement.style.top, '\n',
    //     this.el.nativeElement.offsetTop);
  }
}

PositionElementDirective.ɵfac = function PositionElementDirective_Factory(t) {
  return new (t || PositionElementDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
PositionElementDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: PositionElementDirective,
  selectors: [["", "yPosition", ""]],
  inputs: {
    topPosition: "topPosition",
    stylePos: "stylePos"
  }
});

/***/ })

}]);
//# sourceMappingURL=projects_uv-ui-prototype_src_app_settings_settings_module_ts.js.map