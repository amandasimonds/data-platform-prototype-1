"use strict";
(self["webpackChunkuv_ui_prototype"] = self["webpackChunkuv_ui_prototype"] || []).push([[416],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
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
  styles: [".container[_ngcontent-%COMP%] {\n  width: 50%;\n}"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);





function ConnectorTableComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "uvx-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const col_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r2.colName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](col_r2.icon);
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
  consts: [[1, "table-container"], [1, "table"], [1, "table-column"], ["class", "column col-name", 4, "ngFor", "ngForOf"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "column", "col-name"], [1, "flex", "justify-content-space-between"], ["size", "xs", 1, "margin-right-lg"], [1, "table-row"], [1, "row"]],
  template: function ConnectorTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ConnectorTableComponent_div_3_Template, 5, 2, "div", 3);
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
  styles: [".table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-column[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  flex: 0 0 45px;\n  display: flex;\n  align-items: center;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n  -webkit-user-select: none;\n          user-select: none;\n  display: inline-block;\n  box-shadow: var(--uv-box-shadow);\n  background-color: var(--uv-color-white);\n  padding-top: 12px;\n  margin: 32px;\n}\n.table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  height: auto;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  background-color: white;\n  cursor: pointer;\n}\n.table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:nth-child(odd) {\n  background: rgba(0, 0, 0, 0.1);\n}\n.table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: var(--uv-font-size-xs);\n  color: var(--uv-font-color-secondary);\n}\n.table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:first-child {\n  margin: 0 0 0 32px;\n}\n.table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-column[_ngcontent-%COMP%] {\n  background-color: white;\n  cursor: pointer;\n}\n.table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-column[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: var(--uv-font-bold);\n}\n.table-container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .table-column[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:first-child {\n  margin: 0 0 0 32px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uv_ui_lib_src_lib_expanding_menu_expanding_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/expanding-menu/expanding-menu.component */ 12471);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);





const _c0 = ["section"];
function SettingsMenuComponent_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "uvx-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const step_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", step_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](step_r3.complete ? "check" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](step_r3.title);
  }
}
function SettingsMenuComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "div", 4)(3, "uvx-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SettingsMenuComponent_div_2_div_7_Template, 5, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const section_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", section_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.step.complete ? "check" : "");
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
  consts: [[3, "menuIsExpanded", "toggleButtonClicked"], ["content", ""], [4, "ngFor", "ngForOf"], [1, "margin-bottom-md"], [1, "flex", "align-items-center"], ["color", "success", 1, "margin-right-xs"], [1, "uv-body-sm", "bold"], ["class", "flex align-items-center", 4, "ngFor", "ngForOf"], [1, "uv-body-sm"]],
  template: function SettingsMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "uvx-expanding-menu", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("toggleButtonClicked", function SettingsMenuComponent_Template_uvx_expanding_menu_toggleButtonClicked_0_listener() {
        return ctx.toggleSettingsMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SettingsMenuComponent_div_2_Template, 8, 4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("menuIsExpanded", ctx.settingsMenuIsExpanded);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.connectorCreatorSteps);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _uv_ui_lib_src_lib_expanding_menu_expanding_menu_component__WEBPACK_IMPORTED_MODULE_1__.ExpandingMenuComponent, _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_2__.UvxIconComponent]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _settings_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-menu.component */ 40174);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _shared_position_element_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/position-element.directive */ 71418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);





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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _connector_creator_connector_creator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connector-creator/connector-creator.component */ 16493);
/* harmony import */ var _connector_table_connector_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connector-table/connector-table.component */ 49263);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component */ 59778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);






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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _uv_ui_lib_src_lib_navbar_sub_navbar_sub_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/navbar-sub/navbar-sub.component */ 92998);







const _c0 = function (a0) {
  return {
    app: a0
  };
};
function SettingsSubNavbarComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "a", 4)(2, "uvx-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const navlink_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("nav-icon-active-expanded", ctx_r1.subNavbarIsExpanded)("nav-icon-disabled", navlink_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", navlink_r2.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", navlink_r2.navlink)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, navlink_r2.app));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](navlink_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("navbar-expanded-text-visible", ctx_r1.subNavbarIsExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", navlink_r2.tooltip, " ");
  }
}
function SettingsSubNavbarComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SettingsSubNavbarComponent_div_1_div_1_Template, 6, 13, "div", 2);
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
  consts: [[3, "withPadding", "isExpanded", "toggleButtonClicked"], [4, "ngIf"], ["class", "nav-icon", 3, "matTooltip", "nav-icon-active-expanded", "nav-icon-disabled", 4, "ngFor", "ngForOf"], [1, "nav-icon", 3, "matTooltip"], [1, "display-inline-block", 3, "routerLink", "queryParams"], ["color", "black"], [1, "display-inline-block", "margin-left-xxs", "navbar-expanded-text"]],
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
  styles: [".navbar-expanded-text[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n.navbar-expanded-text-visible[_ngcontent-%COMP%] {\n  pointer-events: inherit;\n  opacity: 1;\n  transition-delay: 0.25s;\n  transition-property: opacity;\n}\n\n.toggle-button[_ngcontent-%COMP%] {\n  text-align: right;\n}"]
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2994);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _services_app_shell_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/app-shell.service */ 97732);
/* harmony import */ var _services_on_destroy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/on-destroy.service */ 14270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
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
  styles: [".router-container[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-right: 32px;\n  overflow: auto;\n}"],
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.component */ 59778);
/* harmony import */ var _connector_table_connector_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connector-table/connector-table.component */ 49263);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-routing.module */ 62849);
/* harmony import */ var _settings_menu_settings_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-menu/settings-menu.module */ 71367);
/* harmony import */ var _connector_creator_connector_creator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connector-creator/connector-creator.component */ 16493);
/* harmony import */ var _settings_sub_navbar_settings_sub_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings-sub-navbar/settings-sub-navbar.component */ 4787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);









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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);

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