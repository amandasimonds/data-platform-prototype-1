"use strict";
(self["webpackChunkuv_ui_prototype"] = self["webpackChunkuv_ui_prototype"] || []).push([[711],{

/***/ 37277:
/*!******************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/pipes/filter-keyword-search.pipe.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterKeywordSearchPipe": () => (/* binding */ FilterKeywordSearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);

class FilterKeywordSearchPipe {
  transform(filters, searchInput) {
    if (!searchInput) {
      return [];
    }
    let keywordsSearch = [];
    searchInput.toLowerCase();
    for (let item of filters) {
      for (let j = 0; j < item.keywords.length; j++) {
        keywordsSearch = filters.filter(item => item.active);
      }
    }
    return keywordsSearch;
  }
}
FilterKeywordSearchPipe.ɵfac = function FilterKeywordSearchPipe_Factory(t) {
  return new (t || FilterKeywordSearchPipe)();
};
FilterKeywordSearchPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "search",
  type: FilterKeywordSearchPipe,
  pure: true
});

/***/ }),

/***/ 26850:
/*!***************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/services/side-by-side.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebySideService": () => (/* binding */ SidebySideService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var _side_by_side_sample_data_source_documents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../side-by-side/sample-data/source-documents */ 7986);
/* harmony import */ var _side_by_side_sample_data_target_documents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../side-by-side/sample-data/target-documents */ 98282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet.service */ 24021);





class SidebySideService {
  constructor(walletService) {
    this.walletService = walletService;
    this.targetDocumentSelectedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.sourceDocumentSelectedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this._sourceDocumentWasSelected = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    this.targetDocuments$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(_side_by_side_sample_data_target_documents__WEBPACK_IMPORTED_MODULE_1__.targetDocumentSamples);
    this.sourceDocumentWasSelected$ = this._sourceDocumentWasSelected.asObservable();
    this.selectedTargetDocuments$ = this.targetDocumentSelectedEvent.asObservable();
    this.sourceDocumentsList$ = this.sourceDocumentSelectedEvent.asObservable();
    this.targetDocuments = _side_by_side_sample_data_target_documents__WEBPACK_IMPORTED_MODULE_1__.targetDocumentSamples;
    this.sourceDocuments = _side_by_side_sample_data_source_documents__WEBPACK_IMPORTED_MODULE_0__.sourceDocumentSamples;
  }
  getTargetDocuments() {
    return this.targetDocuments.slice();
  }
  getSourceDocuments() {
    return this.sourceDocuments.slice();
  }
  selectSourceDocument(document, i) {
    document.active = !document.active;
    let sourceDocsList = [];
    const exceptIndex = i;
    if (document.active) {
      this._sourceDocumentWasSelected.next(true);
      sourceDocsList = this.getSourceDocuments().filter((item, index) => exceptIndex !== index).map(item => Object.assign(Object.assign({}, item), {
        disabled: !item.disabled
      }));
    } else {
      this._sourceDocumentWasSelected.next(false);
      sourceDocsList = this.getSourceDocuments().map(item => Object.assign(Object.assign({}, item), {
        disabled: !item.disabled
      }));
      this.clearTargetDocumentSelections();
      this.walletService.clearSelectedEntities();
    }
    this.sourceDocumentSelectedEvent.next(sourceDocsList);
  }
  selectTargetDocument(document) {
    const selectedTargetDocs = [...this.targetDocumentSelectedEvent.value, document].filter(item => item.active);
    this.targetDocumentSelectedEvent.next(selectedTargetDocs);
  }
  unselectTargetDocument(document) {
    document.active = !document.active;
    const selectedTargetDocs = [...this.targetDocumentSelectedEvent.value, document].filter(item => item.active);
    this.targetDocumentSelectedEvent.next(selectedTargetDocs);
  }
  getSelectedTargetDocuments() {
    return this.targetDocumentSelectedEvent.value.slice();
  }
  clearTargetDocumentSelections() {
    // const targetDocs = this.getTargetDocuments().map(item => ({ ...item, active: !item.active, selected: false }));
    const targetDocs = this.getTargetDocuments().map(item => Object.assign(Object.assign({}, item), {
      active: false,
      selected: false
    }));
    const selectedTargetDocs = targetDocs.filter(item => item.active);
    this.targetDocumentSelectedEvent.next(selectedTargetDocs);
    this.targetDocuments$.next(targetDocs);
  }
}
SidebySideService.ɵfac = function SidebySideService_Factory(t) {
  return new (t || SidebySideService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_wallet_service__WEBPACK_IMPORTED_MODULE_2__.WalletService));
};
SidebySideService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: SidebySideService,
  factory: SidebySideService.ɵfac
});

/***/ }),

/***/ 56710:
/*!***********************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/compareTasks.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compareTasksData": () => (/* binding */ compareTasksData)
/* harmony export */ });
const compareTasksData = [{
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}, {
  started: 'Not Started',
  link: '',
  title: 'Gasket Aluminum Exchangers',
  description: 'Lorem ipsum dolor sit amet consectetur ',
  date: 'Mar, 02'
}];

/***/ }),

/***/ 23320:
/*!************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/dropdownItems.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dropdownItems": () => (/* binding */ dropdownItems)
/* harmony export */ });
const dropdownItems = [{
  name: 'item 1'
}, {
  name: 'item 2'
}, {
  name: 'item 3'
}, {
  name: 'item 4'
}, {
  name: 'item 5'
}];

/***/ }),

/***/ 82082:
/*!**********************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/filter-modal/filter-modal.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterModalComponent": () => (/* binding */ FilterModalComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 7625);
/* harmony import */ var _sample_data_sbs_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sample-data/sbs-filters */ 91392);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _sbs_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sbs-filter.service */ 67972);
/* harmony import */ var _services_on_destroy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/on-destroy.service */ 14270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);
/* harmony import */ var _uv_ui_lib_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/checkbox/checkbox.component */ 85004);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);









function FilterModalComponent_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.appliedFilterList.length, " Filter Applied ");
  }
}
function FilterModalComponent_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.appliedFilterList.length, " Filters Applied ");
  }
}
function FilterModalComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "uvx-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FilterModalComponent_div_7_div_1_Template_uvx_checkbox_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const item_r7 = restoredCtx.$implicit;
      const i_r8 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.onFilterApplied(item_r7, i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "uvx-icon-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", item_r7.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r7.name);
  }
}
function FilterModalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FilterModalComponent_div_7_div_1_Template, 6, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.filterCategoriesList);
  }
}
function FilterModalComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "uvx-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FilterModalComponent_div_8_div_1_Template_uvx_checkbox_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const item_r12 = restoredCtx.$implicit;
      const i_r13 = restoredCtx.index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.onFilterKeywordApplied(item_r12, i_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "uvx-icon-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", item_r12.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r12);
  }
}
function FilterModalComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FilterModalComponent_div_8_div_1_Template, 6, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.keywordSearchResults);
  }
}
function FilterModalComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "uvx-icon-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Custom Keyword");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function FilterModalComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "uvx-checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Custom Keyword");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "uvx-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class FilterModalComponent {
  constructor(filterService, ref, destroy$) {
    this.filterService = filterService;
    this.ref = ref;
    this.destroy$ = destroy$;
    this.searchText = '';
    this.searchFilters = [];
    this.appliedFilterList = [];
    this.filterCategoriesList = _sample_data_sbs_filters__WEBPACK_IMPORTED_MODULE_0__.sbsFilters;
    this.customKeywordMode = false;
    this.keywordSearchResults = [];
  }
  onFilterApplied(item, i) {
    this.filterService.applyFilter(item, i);
  }
  onFilterKeywordApplied(item, i) {
    this.filterService.applyFilterKeyword(item, i);
  }
  ngOnInit() {
    this.filterService.appliedFilters$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(filters => {
      this.appliedFilterList = filters;
      this.ref.detectChanges();
      console.log(filters);
    });
  }
  ngOnChanges() {
    if (this.searchText !== '') {
      this.customKeywordMode = true;
    } else {
      this.customKeywordMode = false;
    }
  }
}
FilterModalComponent.ɵfac = function FilterModalComponent_Factory(t) {
  return new (t || FilterModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_sbs_filter_service__WEBPACK_IMPORTED_MODULE_1__.SbsFilterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_on_destroy_service__WEBPACK_IMPORTED_MODULE_2__.NgOnDestroyService));
};
FilterModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: FilterModalComponent,
  selectors: [["sbs-filter-modal"]],
  inputs: {
    searchText: "searchText",
    searchFilters: "searchFilters"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  decls: 13,
  vars: 6,
  consts: [[1, "sbs-filter-modal"], [1, "sbs-filter-modal-top"], ["class", "uv-body", 4, "ngIf"], [1, "divider"], [1, "scroll-wrapper"], [1, "sbs-filter-modal-middle"], ["class", "flex flex-column gap-12 padding-right-xxs", 4, "ngIf"], [1, "sbs-filter-modal-bottom"], ["class", "flex", 4, "ngIf"], ["class", "flex justify-content-space-between", 4, "ngIf"], [1, "uv-body"], [1, "flex", "flex-column", "gap-12", "padding-right-xxs"], ["class", "flex justify-content-space-between", 4, "ngFor", "ngForOf"], [1, "flex", "justify-content-space-between"], [1, "flex", "align-items-center"], [3, "checked", "click"], ["color", "primary", "size", "xs", "icon", "arrow_forward"], [1, "flex"], ["color", "primary", "icon", "plus"]],
  template: function FilterModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, FilterModalComponent_p_2_Template, 2, 1, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, FilterModalComponent_p_3_Template, 2, 1, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, FilterModalComponent_div_7_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, FilterModalComponent_div_8_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, FilterModalComponent_span_11_Template, 4, 0, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, FilterModalComponent_div_12_Template, 6, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.appliedFilterList.length === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.appliedFilterList.length != 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.customKeywordMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.customKeywordMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.customKeywordMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.customKeywordMode);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_3__.UvxIconComponent, _uv_ui_lib_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__.CheckboxComponent, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_5__.IconButtonComponent],
  styles: [".sbs-filter-modal[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: var(--uv-color-white);\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  right: 2.125rem;\n  top: 2.25rem;\n  border-radius: 4px;\n  box-shadow: var(--uv-box-shadow-2);\n  width: 15.25rem;\n}\n.sbs-filter-modal-top[_ngcontent-%COMP%] {\n  padding: 24px 24px 16px 24px;\n}\n.sbs-filter-modal-middle[_ngcontent-%COMP%] {\n  padding: 12px 6px 0 24px;\n  max-height: 40vh;\n  overflow: auto;\n}\n.sbs-filter-modal-bottom[_ngcontent-%COMP%] {\n  padding: 12px 16px 12px 12px;\n}", ".sbs-tag[_ngcontent-%COMP%] {\n  background-color: var(--uv-color-gray-light-4);\n  padding: 4px 8px;\n  border-radius: 4px;\n  margin: 2px 2px 0 0;\n  display: inline-flex;\n}\n.sbs-tag[_ngcontent-%COMP%]:hover {\n  background-color: var(--uv-color-gray-3);\n}\n.sbs-block[_ngcontent-%COMP%] {\n  border: var(--uv-border-gray);\n  padding: 0 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  min-width: max-content;\n  height: 2.5rem;\n}\n.sbs-block-selection[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--uv-color-gray-light);\n  cursor: pointer;\n  background-color: var(--uv-color-gray-light);\n}\n.sbs-block-with-icon[_ngcontent-%COMP%] {\n  padding: 0 6px 0 14px;\n}\n.sbs-chip[_ngcontent-%COMP%] {\n  border: var(--uv-border-gray);\n  background-color: var(--uv-color-white);\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px 8px;\n  position: relative;\n}\n.sbs-chips-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -8px;\n}\n.sbs-link[_ngcontent-%COMP%] {\n  font-weight: 100;\n  font-size: var(--uv-font-size-xs);\n}\n.sbs-link-md[_ngcontent-%COMP%] {\n  font-weight: var(--uv-font-medium-bold);\n  font-size: var(--uv-font-size-sm);\n}\n\n.options-button[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  top: -28px;\n  right: 16px;\n  border-radius: 4px;\n  box-shadow: var(--uv-box-shadow-hover-2);\n  transition: all 0.3s;\n}"],
  changeDetection: 0
});

/***/ }),

/***/ 27768:
/*!*******************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/filter-modal/filter-modal.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterModalModule": () => (/* binding */ FilterModalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _sbs_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sbs-filter.service */ 67972);
/* harmony import */ var _pipes_filter_keyword_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/filter-keyword-search.pipe */ 37277);
/* harmony import */ var _filter_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-modal.component */ 82082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);






class FilterModalModule {}
FilterModalModule.ɵfac = function FilterModalModule_Factory(t) {
  return new (t || FilterModalModule)();
};
FilterModalModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: FilterModalModule
});
FilterModalModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [_sbs_filter_service__WEBPACK_IMPORTED_MODULE_1__.SbsFilterService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SearchPanelModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxIconModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.TextInputModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FilterModalModule, {
    declarations: [_filter_modal_component__WEBPACK_IMPORTED_MODULE_3__.FilterModalComponent, _pipes_filter_keyword_search_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterKeywordSearchPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SearchPanelModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxIconModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.TextInputModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule],
    exports: [_filter_modal_component__WEBPACK_IMPORTED_MODULE_3__.FilterModalComponent]
  });
})();

/***/ }),

/***/ 87357:
/*!************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/landing/landing.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideBySideLandingComponent": () => (/* binding */ SideBySideLandingComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _services_side_by_side_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/side-by-side.service */ 26850);
/* harmony import */ var _services_on_destroy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/on-destroy.service */ 14270);
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/wallet.service */ 24021);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _sbs_action_bar_sbs_action_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sbs-action-bar/sbs-action-bar.component */ 15025);







class SideBySideLandingComponent {
  constructor(sbsService, destroy$, walletService) {
    this.sbsService = sbsService;
    this.destroy$ = destroy$;
    this.walletService = walletService;
    this.sourceDocumentSelected = false;
    this.currentUser = {
      id: 1,
      new: false,
      name: ''
    };
  }
  get isDevUser() {
    return true;
  }
  ngOnInit() {
    this.walletService.clearSelectedEntities();
    this.sbsService.sourceDocumentWasSelected$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(value => this.sourceDocumentSelected = value);
  }
}
SideBySideLandingComponent.ɵfac = function SideBySideLandingComponent_Factory(t) {
  return new (t || SideBySideLandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_side_by_side_service__WEBPACK_IMPORTED_MODULE_0__.SidebySideService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_on_destroy_service__WEBPACK_IMPORTED_MODULE_1__.NgOnDestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_wallet_service__WEBPACK_IMPORTED_MODULE_2__.WalletService));
};
SideBySideLandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SideBySideLandingComponent,
  selectors: [["uv-prototype-sbs-landing"]],
  inputs: {
    sourceDocumentSelected: "sourceDocumentSelected"
  },
  decls: 5,
  vars: 2,
  consts: [[1, "uv-container--fluid", "h-100"], [1, "row"], [1, "col-12"], [3, "isDevUser", "showTargetDocuments"]],
  template: function SideBySideLandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "sbs-action-bar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isDevUser", ctx.isDevUser)("showTargetDocuments", ctx.sourceDocumentSelected);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _sbs_action_bar_sbs_action_bar_component__WEBPACK_IMPORTED_MODULE_3__.SbsActionBarComponent],
  changeDetection: 0
});

/***/ }),

/***/ 60883:
/*!*********************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/landing/landing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideBySideLandingModule": () => (/* binding */ SideBySideLandingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _sbs_document_source_document_source_document_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sbs-document/source-document/source-document.module */ 44931);
/* harmony import */ var _sbs_document_target_document_target_document_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sbs-document/target-document/target-document.module */ 43318);
/* harmony import */ var _sbs_action_bar_sbs_action_bar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sbs-action-bar/sbs-action-bar.module */ 82428);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing.component */ 87357);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);








class SideBySideLandingModule {}
SideBySideLandingModule.ɵfac = function SideBySideLandingModule_Factory(t) {
  return new (t || SideBySideLandingModule)();
};
SideBySideLandingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: SideBySideLandingModule
});
SideBySideLandingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ActionBarModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ButtonModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxIconModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, _sbs_document_source_document_source_document_module__WEBPACK_IMPORTED_MODULE_1__.SourceDocumentModule, _sbs_document_target_document_target_document_module__WEBPACK_IMPORTED_MODULE_2__.TargetDocumentModule, _sbs_action_bar_sbs_action_bar_module__WEBPACK_IMPORTED_MODULE_3__.SbsActionBarModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.BackdropModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SideBySideLandingModule, {
    declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_4__.SideBySideLandingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ActionBarModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ButtonModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxIconModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, _sbs_document_source_document_source_document_module__WEBPACK_IMPORTED_MODULE_1__.SourceDocumentModule, _sbs_document_target_document_target_document_module__WEBPACK_IMPORTED_MODULE_2__.TargetDocumentModule, _sbs_action_bar_sbs_action_bar_module__WEBPACK_IMPORTED_MODULE_3__.SbsActionBarModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.BackdropModule],
    exports: [_landing_component__WEBPACK_IMPORTED_MODULE_4__.SideBySideLandingComponent]
  });
})();

/***/ }),

/***/ 91392:
/*!**********************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/sample-data/sbs-filters.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sbsFilters": () => (/* binding */ sbsFilters)
/* harmony export */ });
const sbsFilters = [{
  name: 'Author',
  active: false,
  keywords: [{
    name: 'Sullivan Campbell',
    active: false
  }, {
    name: 'Sullivan Ford',
    active: false
  }, {
    name: 'Sullivan Murphy',
    active: false
  }, {
    name: 'Sullivan Smith',
    active: false
  }, {
    name: 'Alexander Myron',
    active: false
  }, {
    name: 'Barnett Silas',
    active: false
  }, {
    name: 'Cross Jack',
    active: false
  }, {
    name: 'Flynn WIllis',
    active: false
  }]
}, {
  name: 'Topics',
  active: false,
  keywords: [{
    name: 'Engineering',
    active: false
  }]
}, {
  name: 'Business unit',
  active: false,
  keywords: [{
    name: 'Sales',
    active: false
  }]
}, {
  name: 'Installation',
  active: false,
  keywords: [{
    name: 'Metal',
    active: false
  }]
}, {
  name: 'Integrity critical',
  active: false,
  keywords: [{
    name: 'Steel',
    active: false
  }]
}, {
  name: 'Technology',
  active: false,
  keywords: [{
    name: 'Materials',
    active: false
  }]
}, {
  name: 'Discipline',
  active: false,
  keywords: [{
    name: 'Design',
    active: false
  }]
}, {
  name: 'Category',
  active: false,
  keywords: [{
    name: 'Parts',
    active: false
  }, {
    name: 'Documents',
    active: false
  }, {
    name: 'Requirements',
    active: false
  }]
}, {
  name: 'Severity',
  active: false,
  keywords: [{
    name: 'High',
    active: false
  }, {
    name: 'Medium',
    active: false
  }, {
    name: 'Low',
    active: false
  }]
}, {
  name: 'Document Type',
  active: false,
  keywords: [{
    name: 'Standards',
    active: false
  }, {
    name: 'Certification',
    active: false
  }]
}, {
  name: 'Custom',
  active: false,
  keywords: [{
    name: '',
    active: false
  }]
}];

/***/ }),

/***/ 7986:
/*!***************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/sample-data/source-documents.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sourceDocumentSamples": () => (/* binding */ sourceDocumentSamples)
/* harmony export */ });
const sourceDocumentSamples = [{
  category: 'Part',
  type: 'file',
  id: 1,
  name: 'EXH-SU-5110-B',
  description: 'A brief description about this item goes here.',
  date: '',
  active: false,
  selected: false,
  disabled: false,
  formattedDate: '',
  showDetails: false,
  tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
  progress: 0,
  walletFavorite: false,
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  walletDate: '',
  formattedWalletDate: '',
  launchbar: false,
  menuActive: false
}, {
  category: 'Part',
  type: 'file',
  id: 2,
  name: 'PBT GF10',
  description: 'A brief description about this item goes here.',
  date: '',
  active: false,
  selected: false,
  disabled: false,
  formattedDate: '',
  showDetails: false,
  tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum'],
  progress: 0,
  walletFavorite: false,
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  walletDate: '',
  formattedWalletDate: '',
  launchbar: false,
  menuActive: false
}, {
  category: 'Part',
  type: 'file',
  id: 3,
  name: 'ZK-8274-1',
  description: 'A brief description about this item goes here.',
  date: '',
  active: false,
  selected: false,
  disabled: false,
  formattedDate: '',
  showDetails: false,
  tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum'],
  progress: 0,
  walletFavorite: false,
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  walletDate: '',
  formattedWalletDate: '',
  launchbar: false,
  menuActive: false
}];

/***/ }),

/***/ 98282:
/*!***************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/sample-data/target-documents.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "targetDocumentSamples": () => (/* binding */ targetDocumentSamples)
/* harmony export */ });
const targetDocumentSamples = [{
  category: '',
  type: 'file',
  name: 'Silopren LSR 3485/35',
  id: 1,
  description: 'A brief description about this item goes here.',
  date: '',
  active: false,
  selected: false,
  disabled: false,
  formattedDate: '',
  showDetails: false,
  tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum'],
  progress: 100,
  walletFavorite: false,
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  walletDate: '',
  formattedWalletDate: '',
  launchbar: false,
  menuActive: false
}, {
  category: '',
  type: 'file',
  name: 'Silicone',
  id: 1,
  description: 'A brief description about this item goes here.',
  date: '',
  active: false,
  selected: false,
  disabled: false,
  formattedDate: '',
  showDetails: false,
  tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum'],
  progress: 86,
  walletFavorite: false,
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  walletDate: '',
  formattedWalletDate: '',
  launchbar: false,
  menuActive: false
}, {
  category: '',
  type: 'file',
  name: 'PBT GF10',
  id: 1,
  description: 'A brief description about this item goes here.',
  date: '',
  active: false,
  selected: false,
  disabled: false,
  formattedDate: '',
  showDetails: false,
  tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum'],
  progress: 80,
  walletFavorite: false,
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  walletDate: '',
  formattedWalletDate: '',
  launchbar: false,
  menuActive: false
}, {
  category: '',
  type: 'file',
  name: 'Urethane Foam',
  id: 1,
  description: 'A brief description about this item goes here.',
  date: '',
  active: false,
  selected: false,
  disabled: false,
  formattedDate: '',
  showDetails: false,
  tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum'],
  progress: 76,
  walletFavorite: false,
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  walletDate: '',
  formattedWalletDate: '',
  launchbar: false,
  menuActive: false
}];

/***/ }),

/***/ 15025:
/*!**************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/sbs-action-bar/sbs-action-bar.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SbsActionBarComponent": () => (/* binding */ SbsActionBarComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 7625);
/* harmony import */ var _sample_data_source_documents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sample-data/source-documents */ 7986);
/* harmony import */ var _sample_data_target_documents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sample-data/target-documents */ 98282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _services_side_by_side_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/side-by-side.service */ 26850);
/* harmony import */ var _services_on_destroy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/on-destroy.service */ 14270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uv_ui_lib_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/button/button.component */ 26218);
/* harmony import */ var _uv_ui_lib_src_lib_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/action-bar/action-bar.component */ 89895);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);
/* harmony import */ var _filter_modal_filter_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../filter-modal/filter-modal.component */ 82082);
/* harmony import */ var _uv_ui_lib_src_lib_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/search-panel/search-panel.component */ 12239);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 24006);















function SbsActionBarComponent_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Select documents to get started ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SbsActionBarComponent_div_3_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Collection: 0 documents selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SbsActionBarComponent_div_3_div_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "uvx-icon-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SbsActionBarComponent_div_3_div_8_span_2_Template_uvx_icon_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      const item_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r9.unselectTargetDocument(item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r8.name, " ");
  }
}
function SbsActionBarComponent_div_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SbsActionBarComponent_div_3_div_8_span_2_Template, 3, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("sbs-target-doc-selections-container-expanded", ctx_r6.showMoreSelections);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r6.showMoreSelections ? "flex flex-wrap" : "sbs-target-doc-selections-container-inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r6.selectedTargetDocuments);
  }
}
function SbsActionBarComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14)(1, "div")(2, "div", 15)(3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "uvx-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "compare");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, SbsActionBarComponent_div_3_p_7_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, SbsActionBarComponent_div_3_div_8_Template, 3, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.loadedSourceDocuments[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.selectedTargetDocuments.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.selectedTargetDocuments.length > 0);
  }
}
function SbsActionBarComponent_div_6_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SbsActionBarComponent_div_6_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r13.toggleShowMoreSelections());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "uvx-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Show ", ctx_r11.selectedTargetDocuments.length - 5, " more");
  }
}
function SbsActionBarComponent_div_6_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SbsActionBarComponent_div_6_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r15.toggleShowMoreSelections());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Show less");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "uvx-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function SbsActionBarComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SbsActionBarComponent_div_6_a_1_Template, 4, 1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SbsActionBarComponent_div_6_a_2_Template, 3, 0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SbsActionBarComponent_div_6_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r17.clearSelections(ctx_r17.selectedTargetDocuments));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Clear all");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "uvx-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.selectedTargetDocuments.length > 5 && !ctx_r2.showMoreSelections);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.showMoreSelections);
  }
}
function SbsActionBarComponent_div_13_uvx_icon_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "uvx-icon-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SbsActionBarComponent_div_13_uvx_icon_button_1_Template_uvx_icon_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r22.toggleFilterModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("active", ctx_r19.showFilterModal);
  }
}
function SbsActionBarComponent_div_13_uvx_search_panel_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "uvx-search-panel", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("searchCloseClicked", function SbsActionBarComponent_div_13_uvx_search_panel_2_Template_uvx_search_panel_searchCloseClicked_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      ctx_r24.toggleFilterModal();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r24.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SbsActionBarComponent_div_13_uvx_search_panel_2_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r26.searchText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r20.searchText);
  }
}
function SbsActionBarComponent_div_13_sbs_filter_modal_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "sbs-filter-modal", 41);
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("searchText", ctx_r21.searchText);
  }
}
function SbsActionBarComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, SbsActionBarComponent_div_13_uvx_icon_button_1_Template, 1, 1, "uvx-icon-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SbsActionBarComponent_div_13_uvx_search_panel_2_Template, 2, 1, "uvx-search-panel", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "uvx-icon-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, SbsActionBarComponent_div_13_sbs_filter_modal_4_Template, 1, 1, "sbs-filter-modal", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r3.showFilterModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.showFilterModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.showFilterModal);
  }
}
function SbsActionBarComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "uvx-icon-button", 42)(2, "uvx-icon-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r4.showTargetDocuments);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r4.showTargetDocuments);
  }
}
const _c0 = function () {
  return ["compare"];
};
const _c1 = function () {
  return {
    app: "sbs"
  };
};
class SbsActionBarComponent {
  constructor(sbsService, ref, destroy$, router) {
    this.sbsService = sbsService;
    this.ref = ref;
    this.destroy$ = destroy$;
    this.router = router;
    this.showTargetDocuments = false;
    this.isDevUser = false;
    this.selectedTargetDocuments = [];
    this.sourceDocumentsList = [];
    this.loadedTargetDocuments = _sample_data_target_documents__WEBPACK_IMPORTED_MODULE_1__.targetDocumentSamples;
    this.loadedSourceDocuments = _sample_data_source_documents__WEBPACK_IMPORTED_MODULE_0__.sourceDocumentSamples;
    this.showMoreSelections = false;
    this.showFilterModal = false;
    this.searchText = '';
  }
  toggleShowMoreSelections() {
    this.showMoreSelections = !this.showMoreSelections;
  }
  toggleFilterModal() {
    if (this.searchText === '') {
      this.showFilterModal = !this.showFilterModal;
    }
  }
  unselectTargetDocument(item) {
    this.sbsService.unselectTargetDocument(item);
  }
  clearSelections(items) {
    this.sbsService.clearTargetDocumentSelections();
  }
  clearSearch() {
    this.searchText = '';
  }
  ngOnInit() {
    this.sbsService.sourceDocumentsList$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(sourceDocs => {
      this.sourceDocumentsList = sourceDocs;
      this.ref.detectChanges();
    });
    this.sbsService.selectedTargetDocuments$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(targetDocs => {
      this.selectedTargetDocuments = targetDocs;
      this.ref.detectChanges();
    });
  }
  navigateToCompare() {
    console.log('clicky');
    this.router.navigate(['compare'], {
      queryParamsHandling: "preserve"
    });
    console.log('navving');
  }
}
SbsActionBarComponent.ɵfac = function SbsActionBarComponent_Factory(t) {
  return new (t || SbsActionBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_side_by_side_service__WEBPACK_IMPORTED_MODULE_2__.SidebySideService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_on_destroy_service__WEBPACK_IMPORTED_MODULE_3__.NgOnDestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
};
SbsActionBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: SbsActionBarComponent,
  selectors: [["sbs-action-bar"]],
  inputs: {
    showTargetDocuments: "showTargetDocuments",
    isDevUser: "isDevUser"
  },
  decls: 18,
  vars: 12,
  consts: [["left", "", 2, "padding-top", "24px"], ["class", "italic uv-font-gray flex align-items-center", "style", "height: 50px", 4, "ngIf"], ["class", "flex flex-row", 4, "ngIf"], ["right", "", 1, "flex", "flex-row", "sbs-action-bar-right-container", "justify-content-flex-end", 2, "padding-top", "24px"], ["class", "flex align-items-center", 4, "ngIf"], ["color", "primary", "label", "Compare", 3, "routerLink", "queryParams", "disabled"], ["bottom", "", 2, "padding-bottom", "24px"], [1, "row"], [1, "col-6", "flex", "justify-content-space-between", "padding-right-sm"], [1, "uv-body", "medium-bold"], ["class", "position-relative flex", 4, "ngIf"], [1, "col-6", "flex", "flex-row", "justify-content-space-between", "border-left", "padding-left-md"], [4, "ngIf"], [1, "italic", "uv-font-gray", "flex", "align-items-center", 2, "height", "50px"], [1, "flex", "flex-row"], [1, "sbs-action-bar-left-container", "flex", "flex-row", "align-items-center"], [1, "sbs-block", "medium-bold", "uv-body", "margin-right-12"], [1, "margin-right-12"], ["class", "italic uv-font-gray", 4, "ngIf"], ["class", "flex align-items-center sbs-target-doc-selections-container margin-right-xs", 3, "sbs-target-doc-selections-container-expanded", 4, "ngIf"], [1, "italic", "uv-font-gray"], [1, "flex", "align-items-center", "sbs-target-doc-selections-container", "margin-right-xs"], [3, "ngClass"], ["class", "\n                            sbs-block\n                            margin-4\n                            sbs-block-with-icon sbs-block-selection\n                            medium-bold\n                            uv-body\n                            flex\n                            align-items-center\n                            padding-right-sm\n                        ", 4, "ngFor", "ngForOf"], [1, "sbs-block", "margin-4", "sbs-block-with-icon", "sbs-block-selection", "medium-bold", "uv-body", "flex", "align-items-center", "padding-right-sm"], ["icon", "close", "color", "primary", 1, "margin-left-xxxs", 3, "click"], [1, "flex", "align-items-center"], ["class", "sbs-action-bar-link uv-link", 3, "click", 4, "ngIf"], [1, "divider-left", 2, "height", "25px", "margin", "0 8px"], [1, "sbs-action-bar-link", "uv-link", "margin-right-sm", 3, "click"], ["color", "primary", 1, "margin-left-xxxs"], [1, "sbs-action-bar-link", "uv-link", 3, "click"], ["icon", "arrow_expand", "color", "primary", 1, "margin-left-xxxs"], [1, "position-relative", "flex"], ["color", "primary", "icon", "search", 3, "active", "click", 4, "ngIf"], ["mode", "component-border", "class", "z-index-front", 3, "searchCloseClicked", 4, "ngIf"], ["icon", "more_horiz", "color", "primary", 1, "margin-left-xxs"], [3, "searchText", 4, "ngIf"], ["color", "primary", "icon", "search", 3, "active", "click"], ["mode", "component-border", 1, "z-index-front", 3, "searchCloseClicked"], [1, "margin-left-xs", 3, "ngModel", "ngModelChange"], [3, "searchText"], ["color", "primary", "icon", "search", 3, "disabled"], ["color", "primary", "icon", "more_horiz", 1, "margin-left-xxs", 3, "disabled"]],
  template: function SbsActionBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "uvx-action-bar")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SbsActionBarComponent_p_2_Template, 2, 0, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, SbsActionBarComponent_div_3_Template, 9, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 3)(5, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, SbsActionBarComponent_div_6_Template, 8, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "uvx-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, SbsActionBarComponent_div_13_Template, 5, 3, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 11)(15, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, SbsActionBarComponent_div_17_Template, 3, 2, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.showTargetDocuments);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showTargetDocuments);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showTargetDocuments);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](10, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](11, _c1))("disabled", !ctx.showTargetDocuments);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.loadedSourceDocuments.length, " documents");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isDevUser);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.showTargetDocuments ? ctx.loadedTargetDocuments.length : "0", " documents ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isDevUser);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _uv_ui_lib_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__.ButtonComponent, _uv_ui_lib_src_lib_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_5__.ActionBarComponent, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_6__.IconButtonComponent, _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_7__.UvxIconComponent, _filter_modal_filter_modal_component__WEBPACK_IMPORTED_MODULE_8__.FilterModalComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _uv_ui_lib_src_lib_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_9__.SearchPanelComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel],
  styles: [".sbs-action-bar-link[_ngcontent-%COMP%] {\n  font-weight: 100;\n  padding: 8px 8px 8px 16px;\n  border-radius: 4px;\n  height: min-content;\n}\n.sbs-action-bar-link[_ngcontent-%COMP%]:hover {\n  background-color: var(--uv-color-gray-light);\n}\n.sbs-action-bar-left-container[_ngcontent-%COMP%] {\n  min-width: 10.9rem;\n  height: 50px;\n}\n.sbs-action-bar-right-container[_ngcontent-%COMP%] {\n  min-width: 25.3rem;\n}\n\n.sbs-target-doc-selections-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  height: 50px;\n  overflow: hidden;\n  gap: 4px;\n  min-width: 0;\n}\n.sbs-target-doc-selections-container-expanded[_ngcontent-%COMP%] {\n  height: auto;\n}\n.sbs-target-doc-selections-container-inner[_ngcontent-%COMP%] {\n  height: 50px;\n}", ".sbs-tag[_ngcontent-%COMP%] {\n  background-color: var(--uv-color-gray-light-4);\n  padding: 4px 8px;\n  border-radius: 4px;\n  margin: 2px 2px 0 0;\n  display: inline-flex;\n}\n.sbs-tag[_ngcontent-%COMP%]:hover {\n  background-color: var(--uv-color-gray-3);\n}\n.sbs-block[_ngcontent-%COMP%] {\n  border: var(--uv-border-gray);\n  padding: 0 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  min-width: max-content;\n  height: 2.5rem;\n}\n.sbs-block-selection[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--uv-color-gray-light);\n  cursor: pointer;\n  background-color: var(--uv-color-gray-light);\n}\n.sbs-block-with-icon[_ngcontent-%COMP%] {\n  padding: 0 6px 0 14px;\n}\n.sbs-chip[_ngcontent-%COMP%] {\n  border: var(--uv-border-gray);\n  background-color: var(--uv-color-white);\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px 8px;\n  position: relative;\n}\n.sbs-chips-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -8px;\n}\n.sbs-link[_ngcontent-%COMP%] {\n  font-weight: 100;\n  font-size: var(--uv-font-size-xs);\n}\n.sbs-link-md[_ngcontent-%COMP%] {\n  font-weight: var(--uv-font-medium-bold);\n  font-size: var(--uv-font-size-sm);\n}\n\n.options-button[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  top: -28px;\n  right: 16px;\n  border-radius: 4px;\n  box-shadow: var(--uv-box-shadow-hover-2);\n  transition: all 0.3s;\n}"],
  changeDetection: 0
});

/***/ }),

/***/ 82428:
/*!***********************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/sbs-action-bar/sbs-action-bar.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SbsActionBarModule": () => (/* binding */ SbsActionBarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _filter_modal_filter_modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-modal/filter-modal.module */ 27768);
/* harmony import */ var _sbs_action_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sbs-action-bar.component */ 15025);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);







class SbsActionBarModule {}
SbsActionBarModule.ɵfac = function SbsActionBarModule_Factory(t) {
  return new (t || SbsActionBarModule)();
};
SbsActionBarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: SbsActionBarModule
});
SbsActionBarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ActionBarModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxIconModule, _filter_modal_filter_modal_module__WEBPACK_IMPORTED_MODULE_1__.FilterModalModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SearchPanelModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SbsActionBarModule, {
    declarations: [_sbs_action_bar_component__WEBPACK_IMPORTED_MODULE_2__.SbsActionBarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ActionBarModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxIconModule, _filter_modal_filter_modal_module__WEBPACK_IMPORTED_MODULE_1__.FilterModalModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SearchPanelModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule],
    exports: [_sbs_action_bar_component__WEBPACK_IMPORTED_MODULE_2__.SbsActionBarComponent]
  });
})();

/***/ }),

/***/ 90689:
/*!********************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/sbs-compare/sbs-compare.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SbsCompareComponent": () => (/* binding */ SbsCompareComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/profile.service */ 14355);
/* harmony import */ var _shared_directives_click_outside_click_outside_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/directives/click-outside/click-outside.directive */ 81576);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);
/* harmony import */ var _uv_ui_lib_src_lib_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/toolbar/toolbar.component */ 84183);





class SbsCompareComponent {
  constructor(profileService) {
    this.profileService = profileService;
    this.linkMenuVisible = false;
    this.optionMenuItems = [{
      title: 'Copy',
      icon: 'link'
    }, {
      title: 'Copy',
      icon: 'edit'
    }, {
      title: 'Copy',
      icon: 'delete'
    }, {
      title: 'Copy',
      icon: 'profile'
    }];
  }
  ngOnInit() {}
  toggleLinkMenu() {
    console.log('toggleLinkMenu', this.linkMenuVisible);
    this.linkMenuVisible = !this.linkMenuVisible;
  }
  openProfile() {
    console.log('open profile');
    this.profileService.setProfileSlideOutState('visible');
  }
}
SbsCompareComponent.ɵfac = function SbsCompareComponent_Factory(t) {
  return new (t || SbsCompareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService));
};
SbsCompareComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SbsCompareComponent,
  selectors: [["app-sbs-compare"]],
  decls: 16,
  vars: 2,
  consts: [[1, "row", "sbs-landing-container"], [1, "col-6", "h-100"], [1, "h-100"], [1, "source-document-container", "h-100"], [1, "box", "doc-wrapper", "padding-md"], ["src", "../../../assets/sbs-doc.png", "alt", "Document"], [1, "doc-text"], [1, "sbs-highlight"], ["icon", "linkage_guidelines", "color", "primary", "size", "md", 1, "link-bubble", 3, "click", "clickOutside"], ["zIndex", "100", "rightPos", "-15%", "topPos", "-100%", 3, "isVisible", "toolbarItems", "click"], [1, "doc-text", "margin-top-xs"]],
  template: function SbsCompareComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 6)(7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "1. Snippet of content that is highlighted and may need to be changed. This content could include regulatory information or any type of information relating to the selected documents. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "uvx-icon-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SbsCompareComponent_Template_uvx_icon_button_click_9_listener() {
        return ctx.toggleLinkMenu();
      })("clickOutside", function SbsCompareComponent_Template_uvx_icon_button_clickOutside_9_listener() {
        return ctx.linkMenuVisible = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "uvx-toolbar", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SbsCompareComponent_Template_uvx_toolbar_click_10_listener() {
        return ctx.openProfile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " More information that would go on this document. Filler Text: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 1)(14, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isVisible", ctx.linkMenuVisible)("toolbarItems", ctx.optionMenuItems);
    }
  },
  dependencies: [_shared_directives_click_outside_click_outside_directive__WEBPACK_IMPORTED_MODULE_1__.ClickOutsideDirective, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__.IconButtonComponent, _uv_ui_lib_src_lib_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__.UvxToolbarComponent],
  styles: [".source-document-container[_ngcontent-%COMP%] {\n  padding: 32px 24px 32px 32px;\n  overflow: auto;\n  border-right: 1px solid var(--uv-border-color-gray);\n  height: calc(100vh - 190px);\n}\n\n.sbs-landing-container[_ngcontent-%COMP%] {\n  height: calc(100% - 129px);\n}\n\n.doc-wrapper[_ngcontent-%COMP%] {\n  height: 800px;\n}\n.doc-wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.sbs-highlight[_ngcontent-%COMP%] {\n  background-color: rgba(0, 163, 229, 0.12);\n}\n\n.doc-text[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n  line-height: 19px;\n  position: relative;\n}\n\n.link-bubble[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 80%;\n  z-index: 100;\n}\n\n.link-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 100;\n  background-color: white;\n  box-shadow: var(--uv-box-shadow-2);\n  width: 216px;\n}"]
});

/***/ }),

/***/ 89123:
/*!*****************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/sbs-document/source-document/source-document.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SourceDocumentComponent": () => (/* binding */ SourceDocumentComponent)
/* harmony export */ });
/* harmony import */ var _sample_data_source_documents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sample-data/source-documents */ 7986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _services_side_by_side_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/side-by-side.service */ 26850);
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/wallet.service */ 24021);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);







function SourceDocumentComponent_div_0_uvx_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "uvx-icon", 21);
  }
}
function SourceDocumentComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tag_r8, " ");
  }
}
function SourceDocumentComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Lorem ipsum dolor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r1.details, " ");
  }
}
function SourceDocumentComponent_div_0_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Show more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "uvx-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function SourceDocumentComponent_div_0_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Show less ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "uvx-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "flex-column": a0
  };
};
function SourceDocumentComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SourceDocumentComponent_div_0_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const item_r1 = restoredCtx.$implicit;
      const i_r2 = restoredCtx.index;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](!item_r1.disabled && ctx_r10.onSourceDocumentSelected(item_r1, i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "uvx-icon-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SourceDocumentComponent_div_0_uvx_icon_5_Template, 1, 0, "uvx-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9)(11, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Not started");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11)(14, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "AD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "SF");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "EF");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 14)(22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, SourceDocumentComponent_div_0_div_23_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, SourceDocumentComponent_div_0_div_24_Template, 5, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 18)(26, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SourceDocumentComponent_div_0_Template_a_click_26_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.onShowMoreDocumentDetails($event, item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, SourceDocumentComponent_div_0_span_27_Template, 4, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, SourceDocumentComponent_div_0_span_28_Template, 3, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("sbs-document-card-active", item_r1.active)("sbs-document-card-disabled", item_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c0, item_r1.showDetails));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("sbs-document-card-bottom-details-container-expanded", item_r1.showDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r1.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r1.showDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r1.showDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r1.showDetails);
  }
}
class SourceDocumentComponent {
  constructor(sbsService, walletService) {
    this.sbsService = sbsService;
    this.walletService = walletService;
    this.sourceDocuments = _sample_data_source_documents__WEBPACK_IMPORTED_MODULE_0__.sourceDocumentSamples;
  }
  ngOnInit() {
    this.walletService.clearSelectedEntities();
  }
  onSourceDocumentSelected(item, i) {
    this.sbsService.selectSourceDocument(item, i);
    this.walletService.selectEntityForWallet(item);
  }
  onShowMoreDocumentDetails(event, item) {
    item.showDetails = !item.showDetails;
    event.stopPropagation();
  }
}
SourceDocumentComponent.ɵfac = function SourceDocumentComponent_Factory(t) {
  return new (t || SourceDocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_side_by_side_service__WEBPACK_IMPORTED_MODULE_1__.SidebySideService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_wallet_service__WEBPACK_IMPORTED_MODULE_2__.WalletService));
};
SourceDocumentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SourceDocumentComponent,
  selectors: [["app-source-document"]],
  decls: 1,
  vars: 1,
  consts: [["class", "sbs-document-card", 3, "sbs-document-card-active", "sbs-document-card-disabled", "click", 4, "ngFor", "ngForOf"], [1, "sbs-document-card", 3, "click"], [1, "sbs-document-card-top", "flex", "flex-column", "gap-sm"], [1, "options-button", "box"], ["icon", "more_horisontal", "color", "primary"], [1, "flex", "flex-row", "sbs-document-card-top-document-heading"], ["icon", "check", "color", "primary", "size", "checkmark", "class", "margin-right-xxs", 4, "ngIf"], [1, "bold", "uv-body", "margin-right-xxs"], [1, "uv-body"], [1, "flex", "flex-row", "align-items-center"], [1, "sbs-block", "uv-label-sbs", "margin-right-xs", "semibold"], [1, "sbs-chips-container", "flex", "flex-row"], [1, "sbs-chip", "uv-label-sbs"], [1, "divider-light"], [1, "sbs-document-card-bottom", "flex", "align-items-center", "justify-content-space-between", 3, "ngClass"], [1, "sbs-document-card-bottom-details-container"], ["class", "sbs-tag uv-label-sbs position-relative", 4, "ngFor", "ngForOf"], ["class", "margin-top-xs", 4, "ngIf"], [1, "sbs-document-card-bottom-show-more"], [1, "sbs-link", "z-1000", "block", 3, "click"], [4, "ngIf"], ["icon", "check", "color", "primary", "size", "checkmark", 1, "margin-right-xxs"], [1, "sbs-tag", "uv-label-sbs", "position-relative"], [1, "margin-top-xs"], [1, "uv-label-sbs", "margin-bottom-xxs"], ["color", "primary", "size", "xs"], ["color", "primary", "size", "xs", "icon", "arrow_expand"]],
  template: function SourceDocumentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SourceDocumentComponent_div_0_Template, 29, 16, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.sourceDocuments);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__.IconButtonComponent, _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_4__.UvxIconComponent],
  styles: [".sbs-document-card[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  margin: 8px 0 auto;\n  transition: all 0.2s;\n  background-color: var(--uv-color-white-2);\n}\n.sbs-document-card-top[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.sbs-document-card-bottom[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  background-color: var(--uv-color-gray-light-3);\n}\n.sbs-document-card-bottom-details-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  height: 1.875rem;\n  transition: ease-in-out 0.2s;\n}\n.sbs-document-card-bottom-details-container-expanded[_ngcontent-%COMP%] {\n  overflow: visible;\n  height: auto;\n  margin-bottom: 16px;\n}\n.sbs-document-card-bottom-show-more[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: all 0.2s;\n  padding: 3px 6px 5px 12px;\n  border-radius: 4px;\n  min-width: max-content;\n  align-self: flex-end;\n  display: inline-block;\n}\n.sbs-document-card-bottom-show-more[_ngcontent-%COMP%]:hover {\n  background-color: var(--uv-color-gray-light);\n}\n.sbs-document-card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: var(--uv-box-shadow-hover);\n  transform: translateY(-1px);\n  background-color: var(--uv-color-white);\n}\n.sbs-document-card[_ngcontent-%COMP%]:hover   .options-button[_ngcontent-%COMP%], .sbs-document-card[_ngcontent-%COMP%]:hover   .sbs-document-card-bottom-show-more[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.sbs-document-card[_ngcontent-%COMP%]:hover   .sbs-document-card-top-document-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--uv-color-primary);\n}\n.sbs-document-card-active[_ngcontent-%COMP%] {\n  box-shadow: var(--uv-box-shadow-hover);\n  background-color: var(--uv-color-white);\n}\n.sbs-document-card-disabled[_ngcontent-%COMP%], .sbs-document-card-disabled[_ngcontent-%COMP%]:hover {\n  cursor: not-allowed;\n  transform: none;\n  color: var(--uv-color-gray-dark);\n  background-color: var(--uv-color-white-2);\n  box-shadow: none;\n  pointer-events: none;\n}\n.sbs-document-card-disabled[_ngcontent-%COMP%]   .options-button[_ngcontent-%COMP%], .sbs-document-card-disabled[_ngcontent-%COMP%]   .sbs-document-card-bottom-show-more[_ngcontent-%COMP%], .sbs-document-card-disabled[_ngcontent-%COMP%]:hover   .options-button[_ngcontent-%COMP%], .sbs-document-card-disabled[_ngcontent-%COMP%]:hover   .sbs-document-card-bottom-show-more[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.sbs-document-card-disabled[_ngcontent-%COMP%]   .sbs-document-card-top-document-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .sbs-document-card-disabled[_ngcontent-%COMP%]:hover   .sbs-document-card-top-document-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.progress-chip[_ngcontent-%COMP%] {\n  font-size: var(--uv-font-size-xs);\n  width: 3rem;\n  height: 1.5rem;\n  padding: 2px 8px;\n  border-radius: 16px;\n  font-weight: 600;\n  text-align: center;\n}\n.progress-chip-success[_ngcontent-%COMP%] {\n  color: var(--uv-color-success);\n  background-color: var(--uv-color-success-light);\n}\n.progress-chip-danger[_ngcontent-%COMP%] {\n  color: var(--uv-color-danger);\n  background-color: var(--uv-color-danger-light);\n}", ".sbs-tag[_ngcontent-%COMP%] {\n  background-color: var(--uv-color-gray-light-4);\n  padding: 4px 8px;\n  border-radius: 4px;\n  margin: 2px 2px 0 0;\n  display: inline-flex;\n}\n.sbs-tag[_ngcontent-%COMP%]:hover {\n  background-color: var(--uv-color-gray-3);\n}\n.sbs-block[_ngcontent-%COMP%] {\n  border: var(--uv-border-gray);\n  padding: 0 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  min-width: max-content;\n  height: 2.5rem;\n}\n.sbs-block-selection[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--uv-color-gray-light);\n  cursor: pointer;\n  background-color: var(--uv-color-gray-light);\n}\n.sbs-block-with-icon[_ngcontent-%COMP%] {\n  padding: 0 6px 0 14px;\n}\n.sbs-chip[_ngcontent-%COMP%] {\n  border: var(--uv-border-gray);\n  background-color: var(--uv-color-white);\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px 8px;\n  position: relative;\n}\n.sbs-chips-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -8px;\n}\n.sbs-link[_ngcontent-%COMP%] {\n  font-weight: 100;\n  font-size: var(--uv-font-size-xs);\n}\n.sbs-link-md[_ngcontent-%COMP%] {\n  font-weight: var(--uv-font-medium-bold);\n  font-size: var(--uv-font-size-sm);\n}\n\n.options-button[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  top: -28px;\n  right: 16px;\n  border-radius: 4px;\n  box-shadow: var(--uv-box-shadow-hover-2);\n  transition: all 0.3s;\n}"],
  changeDetection: 0
});

/***/ }),

/***/ 44931:
/*!**************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/sbs-document/source-document/source-document.module.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SourceDocumentModule": () => (/* binding */ SourceDocumentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _source_document_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./source-document.component */ 89123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);





class SourceDocumentModule {}
SourceDocumentModule.ɵfac = function SourceDocumentModule_Factory(t) {
  return new (t || SourceDocumentModule)();
};
SourceDocumentModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SourceDocumentModule
});
SourceDocumentModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.TooltipModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SourceDocumentModule, {
    declarations: [_source_document_component__WEBPACK_IMPORTED_MODULE_1__.SourceDocumentComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.TooltipModule],
    exports: [_source_document_component__WEBPACK_IMPORTED_MODULE_1__.SourceDocumentComponent]
  });
})();

/***/ }),

/***/ 60074:
/*!*****************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/sbs-document/target-document/target-document.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TargetDocumentComponent": () => (/* binding */ TargetDocumentComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2994);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 7625);
/* harmony import */ var _sample_data_target_documents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sample-data/target-documents */ 98282);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 36053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _services_side_by_side_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/side-by-side.service */ 26850);
/* harmony import */ var _services_on_destroy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/on-destroy.service */ 14270);
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/wallet.service */ 24021);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uv_ui_lib_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/checkbox/checkbox.component */ 85004);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);











function TargetDocumentComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", tag_r6, " ");
  }
}
function TargetDocumentComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19)(1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Lorem ipsum dolor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r1.details, " ");
  }
}
function TargetDocumentComponent_div_0_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Show more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "uvx-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function TargetDocumentComponent_div_0_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Show less ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "uvx-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "expand_less");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a0) {
  return {
    "flex-column": a0
  };
};
function TargetDocumentComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TargetDocumentComponent_div_0_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.onTargetDocumentSelected(item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "uvx-icon-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "uvx-checkbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 11)(14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, TargetDocumentComponent_div_0_div_15_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, TargetDocumentComponent_div_0_div_16_Template, 5, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 15)(18, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TargetDocumentComponent_div_0_Template_a_click_18_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.onShowMoreDocumentDetails($event, item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, TargetDocumentComponent_div_0_span_19_Template, 4, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, TargetDocumentComponent_div_0_span_20_Template, 4, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("sbs-document-card-active", item_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", item_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("progress-chip-success", item_r1.progress > 60)("progress-chip-danger", item_r1.progress < 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r1.progress, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](17, _c0, item_r1.showDetails));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("sbs-document-card-bottom-details-container-expanded", item_r1.showDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", item_r1.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r1.showDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !item_r1.showDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r1.showDetails);
  }
}
class TargetDocumentComponent {
  constructor(sbsService, ref, destroy$, walletService) {
    this.sbsService = sbsService;
    this.ref = ref;
    this.destroy$ = destroy$;
    this.walletService = walletService;
    this.targetDocuments = _sample_data_target_documents__WEBPACK_IMPORTED_MODULE_0__.targetDocumentSamples;
    this.selectedTargetDocuments = [];
  }
  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.sbsService.selectedTargetDocuments$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(entities => this.selectedTargetDocuments = entities)), this.sbsService.targetDocuments$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(entities => this.targetDocuments = entities))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(() => this.ref.detectChanges());
  }
  onTargetDocumentSelected(item) {
    item.active = !item.active;
    this.sbsService.selectTargetDocument(item);
    this.walletService.selectEntityForWallet(item);
  }
  onShowMoreDocumentDetails(event, item) {
    item.showDetails = !item.showDetails;
    event.stopPropagation();
  }
}
TargetDocumentComponent.ɵfac = function TargetDocumentComponent_Factory(t) {
  return new (t || TargetDocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_side_by_side_service__WEBPACK_IMPORTED_MODULE_1__.SidebySideService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_on_destroy_service__WEBPACK_IMPORTED_MODULE_2__.NgOnDestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_wallet_service__WEBPACK_IMPORTED_MODULE_3__.WalletService));
};
TargetDocumentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: TargetDocumentComponent,
  selectors: [["app-target-document"]],
  decls: 1,
  vars: 1,
  consts: [["class", "sbs-document-card", 3, "sbs-document-card-active", "click", 4, "ngFor", "ngForOf"], [1, "sbs-document-card", 3, "click"], [1, "sbs-document-card-top", "flex", "flex-column", "gap-sm"], [1, "options-button", "box"], ["icon", "more_horisontal", "color", "primary"], [1, "flex", "flex-row", "align-items-center"], [3, "checked"], [1, "progress-chip", "margin-right-xxs"], [1, "bold", "uv-body", "margin-right-xxs"], [1, "uv-body"], [1, "divider-light"], [1, "sbs-document-card-bottom", "flex", "align-items-center", "justify-content-space-between", 3, "ngClass"], [1, "sbs-document-card-bottom-details-container"], ["class", "sbs-tag uv-label-sbs position-relative", 4, "ngFor", "ngForOf"], ["class", "margin-top-xs", 4, "ngIf"], [1, "sbs-document-card-bottom-show-more"], [1, "sbs-link", "z-1000", "block", 3, "click"], [4, "ngIf"], [1, "sbs-tag", "uv-label-sbs", "position-relative"], [1, "margin-top-xs"], [1, "uv-label-sbs", "margin-bottom-xxs"], ["color", "primary", "size", "xs"]],
  template: function TargetDocumentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, TargetDocumentComponent_div_0_Template, 21, 19, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.targetDocuments);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _uv_ui_lib_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__.CheckboxComponent, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_5__.IconButtonComponent, _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_6__.UvxIconComponent],
  styles: [".sbs-document-card[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  margin: 8px 0 auto;\n  transition: all 0.2s;\n  background-color: var(--uv-color-white-2);\n}\n.sbs-document-card-top[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.sbs-document-card-bottom[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  background-color: var(--uv-color-gray-light-3);\n}\n.sbs-document-card-bottom-details-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  height: 1.875rem;\n  transition: ease-in-out 0.2s;\n}\n.sbs-document-card-bottom-details-container-expanded[_ngcontent-%COMP%] {\n  overflow: visible;\n  height: auto;\n  margin-bottom: 16px;\n}\n.sbs-document-card-bottom-show-more[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: all 0.2s;\n  padding: 3px 6px 5px 12px;\n  border-radius: 4px;\n  min-width: max-content;\n  align-self: flex-end;\n  display: inline-block;\n}\n.sbs-document-card-bottom-show-more[_ngcontent-%COMP%]:hover {\n  background-color: var(--uv-color-gray-light);\n}\n.sbs-document-card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: var(--uv-box-shadow-hover);\n  transform: translateY(-1px);\n  background-color: var(--uv-color-white);\n}\n.sbs-document-card[_ngcontent-%COMP%]:hover   .options-button[_ngcontent-%COMP%], .sbs-document-card[_ngcontent-%COMP%]:hover   .sbs-document-card-bottom-show-more[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.sbs-document-card[_ngcontent-%COMP%]:hover   .sbs-document-card-top-document-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--uv-color-primary);\n}\n.sbs-document-card-active[_ngcontent-%COMP%] {\n  box-shadow: var(--uv-box-shadow-hover);\n  background-color: var(--uv-color-white);\n}\n.sbs-document-card-disabled[_ngcontent-%COMP%], .sbs-document-card-disabled[_ngcontent-%COMP%]:hover {\n  cursor: not-allowed;\n  transform: none;\n  color: var(--uv-color-gray-dark);\n  background-color: var(--uv-color-white-2);\n  box-shadow: none;\n  pointer-events: none;\n}\n.sbs-document-card-disabled[_ngcontent-%COMP%]   .options-button[_ngcontent-%COMP%], .sbs-document-card-disabled[_ngcontent-%COMP%]   .sbs-document-card-bottom-show-more[_ngcontent-%COMP%], .sbs-document-card-disabled[_ngcontent-%COMP%]:hover   .options-button[_ngcontent-%COMP%], .sbs-document-card-disabled[_ngcontent-%COMP%]:hover   .sbs-document-card-bottom-show-more[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.sbs-document-card-disabled[_ngcontent-%COMP%]   .sbs-document-card-top-document-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .sbs-document-card-disabled[_ngcontent-%COMP%]:hover   .sbs-document-card-top-document-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.progress-chip[_ngcontent-%COMP%] {\n  font-size: var(--uv-font-size-xs);\n  width: 3rem;\n  height: 1.5rem;\n  padding: 2px 8px;\n  border-radius: 16px;\n  font-weight: 600;\n  text-align: center;\n}\n.progress-chip-success[_ngcontent-%COMP%] {\n  color: var(--uv-color-success);\n  background-color: var(--uv-color-success-light);\n}\n.progress-chip-danger[_ngcontent-%COMP%] {\n  color: var(--uv-color-danger);\n  background-color: var(--uv-color-danger-light);\n}", ".sbs-tag[_ngcontent-%COMP%] {\n  background-color: var(--uv-color-gray-light-4);\n  padding: 4px 8px;\n  border-radius: 4px;\n  margin: 2px 2px 0 0;\n  display: inline-flex;\n}\n.sbs-tag[_ngcontent-%COMP%]:hover {\n  background-color: var(--uv-color-gray-3);\n}\n.sbs-block[_ngcontent-%COMP%] {\n  border: var(--uv-border-gray);\n  padding: 0 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  min-width: max-content;\n  height: 2.5rem;\n}\n.sbs-block-selection[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--uv-color-gray-light);\n  cursor: pointer;\n  background-color: var(--uv-color-gray-light);\n}\n.sbs-block-with-icon[_ngcontent-%COMP%] {\n  padding: 0 6px 0 14px;\n}\n.sbs-chip[_ngcontent-%COMP%] {\n  border: var(--uv-border-gray);\n  background-color: var(--uv-color-white);\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px 8px;\n  position: relative;\n}\n.sbs-chips-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -8px;\n}\n.sbs-link[_ngcontent-%COMP%] {\n  font-weight: 100;\n  font-size: var(--uv-font-size-xs);\n}\n.sbs-link-md[_ngcontent-%COMP%] {\n  font-weight: var(--uv-font-medium-bold);\n  font-size: var(--uv-font-size-sm);\n}\n\n.options-button[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  top: -28px;\n  right: 16px;\n  border-radius: 4px;\n  box-shadow: var(--uv-box-shadow-hover-2);\n  transition: all 0.3s;\n}"],
  changeDetection: 0
});

/***/ }),

/***/ 43318:
/*!**************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/sbs-document/target-document/target-document.module.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TargetDocumentModule": () => (/* binding */ TargetDocumentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _target_document_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target-document.component */ 60074);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ 56709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);





class TargetDocumentModule {}
TargetDocumentModule.ɵfac = function TargetDocumentModule_Factory(t) {
  return new (t || TargetDocumentModule)();
};
TargetDocumentModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: TargetDocumentModule
});
TargetDocumentModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxIconModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckboxModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.TooltipModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TargetDocumentModule, {
    declarations: [_target_document_component__WEBPACK_IMPORTED_MODULE_1__.TargetDocumentComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxIconModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckboxModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.TooltipModule],
    exports: [_target_document_component__WEBPACK_IMPORTED_MODULE_1__.TargetDocumentComponent]
  });
})();

/***/ }),

/***/ 67972:
/*!*****************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/sbs-filter.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SbsFilterService": () => (/* binding */ SbsFilterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);


class SbsFilterService {
  constructor() {
    this.filterAppliedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.keywordSearchedEvent = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.appliedFilters$ = this.filterAppliedEvent.asObservable();
    this.keywordSearchResults$ = this.keywordSearchedEvent.asObservable();
    this.keywordSearchResults = [];
  }
  applyFilter(filter, i) {
    filter.active = !filter.active;
    const appliedFilters = [...this.filterAppliedEvent.value, filter].filter(item => item.active);
    this.filterAppliedEvent.next(appliedFilters);
  }
  applyFilterKeyword(filter, i) {
    filter.active = !filter.active;
    const appliedFilters = [...this.filterAppliedEvent.value, filter].filter(item => item.active);
    this.filterAppliedEvent.next(appliedFilters);
  }
  searchMatchingKeywords(filters, searchInput) {
    for (let i = 0; i <= filters.length; i++) {
      for (let j = 0; j < filters[i].keywords.length; j++) {
        const keyword = filters[i].keywords[j].name;
        if (keyword.toLowerCase().includes(searchInput.toLowerCase())) {
          this.keywordSearchResults.push({
            name: filters[i].name,
            active: false,
            keywords: [{
              name: keyword,
              active: false
            }]
          });
        } else {
          this.keywordSearchResults.splice(j, 1);
        }
      }
    }
  }
  getAppliedFilters() {
    return this.filterAppliedEvent.value.slice();
  }
}
SbsFilterService.ɵfac = function SbsFilterService_Factory(t) {
  return new (t || SbsFilterService)();
};
SbsFilterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SbsFilterService,
  factory: SbsFilterService.ɵfac
});

/***/ }),

/***/ 49709:
/*!******************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/select-documents/select-documents.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectDocumentsComponent": () => (/* binding */ SelectDocumentsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _services_side_by_side_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/side-by-side.service */ 26850);
/* harmony import */ var _services_on_destroy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/on-destroy.service */ 14270);
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/wallet.service */ 24021);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _sbs_document_source_document_source_document_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sbs-document/source-document/source-document.component */ 89123);
/* harmony import */ var _sbs_document_target_document_target_document_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sbs-document/target-document/target-document.component */ 60074);








function SelectDocumentsComponent_app_target_document_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-target-document");
  }
}
class SelectDocumentsComponent {
  constructor(sbsService, destroy$, ref, walletService) {
    this.sbsService = sbsService;
    this.destroy$ = destroy$;
    this.ref = ref;
    this.walletService = walletService;
    this.sourceDocumentSelected = false;
  }
  ngOnInit() {
    this.walletService.clearSelectedEntities();
    this.sbsService.sourceDocumentWasSelected$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(value => {
      this.sourceDocumentSelected = value;
      this.ref.detectChanges();
      console.log(this.sourceDocumentSelected);
    });
  }
}
SelectDocumentsComponent.ɵfac = function SelectDocumentsComponent_Factory(t) {
  return new (t || SelectDocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_side_by_side_service__WEBPACK_IMPORTED_MODULE_0__.SidebySideService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_on_destroy_service__WEBPACK_IMPORTED_MODULE_1__.NgOnDestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_wallet_service__WEBPACK_IMPORTED_MODULE_2__.WalletService));
};
SelectDocumentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SelectDocumentsComponent,
  selectors: [["app-select-documents"]],
  inputs: {
    sourceDocumentSelected: "sourceDocumentSelected"
  },
  decls: 9,
  vars: 1,
  consts: [[1, "row", "sbs-landing-container"], [1, "col-6", "h-100"], [1, "scroll-spacing", "h-100"], [1, "source-document-container", "h-100"], [4, "ngIf"]],
  template: function SelectDocumentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-source-document");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 1)(6, "div", 2)(7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, SelectDocumentsComponent_app_target_document_8_Template, 1, 0, "app-target-document", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sourceDocumentSelected);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _sbs_document_source_document_source_document_component__WEBPACK_IMPORTED_MODULE_3__.SourceDocumentComponent, _sbs_document_target_document_target_document_component__WEBPACK_IMPORTED_MODULE_4__.TargetDocumentComponent],
  styles: [".source-document-container[_ngcontent-%COMP%] {\n  padding: 32px 24px 32px 32px;\n  overflow: auto;\n}\n\n.scroll-spacing[_ngcontent-%COMP%] {\n  padding: 0 6px 0 0;\n  border-right: 1px solid var(--uv-border-color-gray);\n}\n\n.sbs-landing-container[_ngcontent-%COMP%] {\n  height: calc(100% - 129px);\n}"]
});

/***/ }),

/***/ 35728:
/*!**************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/side-by-side-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideBySideRoutingModule": () => (/* binding */ SideBySideRoutingModule),
/* harmony export */   "sideBySideRoutes": () => (/* binding */ sideBySideRoutes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _side_by_side_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-by-side.component */ 82449);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing/landing.component */ 87357);
/* harmony import */ var _global_where_used_project_wizard_wizard_container_wizard_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global-where-used/project-wizard/wizard-container/wizard-container.component */ 31227);
/* harmony import */ var _sbs_compare_sbs_compare_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sbs-compare/sbs-compare.component */ 90689);
/* harmony import */ var _select_documents_select_documents_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-documents/select-documents.component */ 49709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);








const sideBySideRoutes = [{
  path: '',
  component: _side_by_side_component__WEBPACK_IMPORTED_MODULE_0__.SideBySideComponent,
  children: [{
    path: 'wizard',
    component: _global_where_used_project_wizard_wizard_container_wizard_container_component__WEBPACK_IMPORTED_MODULE_2__.WizardContainerComponent
  }, {
    path: '',
    component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__.SideBySideLandingComponent,
    children: [{
      path: '',
      redirectTo: 'select-documents',
      pathMatch: 'full'
    }, {
      path: 'select-documents',
      component: _select_documents_select_documents_component__WEBPACK_IMPORTED_MODULE_4__.SelectDocumentsComponent
    }, {
      path: 'compare',
      component: _sbs_compare_sbs_compare_component__WEBPACK_IMPORTED_MODULE_3__.SbsCompareComponent
    }]
  }]
}];
class SideBySideRoutingModule {}
SideBySideRoutingModule.ɵfac = function SideBySideRoutingModule_Factory(t) {
  return new (t || SideBySideRoutingModule)();
};
SideBySideRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: SideBySideRoutingModule
});
SideBySideRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(sideBySideRoutes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SideBySideRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 82449:
/*!*********************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/side-by-side.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideBySideComponent": () => (/* binding */ SideBySideComponent)
/* harmony export */ });
/* harmony import */ var _compareTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compareTasks */ 56710);
/* harmony import */ var _dropdownItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdownItems */ 23320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _services_app_shell_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/app-shell.service */ 97732);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);





class SideBySideComponent {
  constructor(appShellService) {
    this.appShellService = appShellService;
    this.loadTask = true;
    this.tasks = _compareTasks__WEBPACK_IMPORTED_MODULE_0__.compareTasksData;
    this.dropdownItems = _dropdownItems__WEBPACK_IMPORTED_MODULE_1__.dropdownItems;
  }
  trackByFn(_, {
    title
  }) {
    return title;
  }
  ngOnInit() {
    this.appShellService.setTitle('Side By Side');
    this.appShellService.setHeaderIcon('compare');
    this.appShellService.setNavIcon('sbs');
  }
}
SideBySideComponent.ɵfac = function SideBySideComponent_Factory(t) {
  return new (t || SideBySideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_app_shell_service__WEBPACK_IMPORTED_MODULE_2__.AppShellService));
};
SideBySideComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SideBySideComponent,
  selectors: [["prototype-uv-ui-side-by-side"]],
  decls: 1,
  vars: 0,
  template: function SideBySideComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet],
  styles: [".sbs-tag[_ngcontent-%COMP%] {\n  background-color: var(--uv-color-gray-light-4);\n  padding: 4px 8px;\n  border-radius: 4px;\n  margin: 2px 2px 0 0;\n  display: inline-flex;\n}\n.sbs-tag[_ngcontent-%COMP%]:hover {\n  background-color: var(--uv-color-gray-3);\n}\n.sbs-block[_ngcontent-%COMP%] {\n  border: var(--uv-border-gray);\n  padding: 0 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  min-width: max-content;\n  height: 2.5rem;\n}\n.sbs-block-selection[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--uv-color-gray-light);\n  cursor: pointer;\n  background-color: var(--uv-color-gray-light);\n}\n.sbs-block-with-icon[_ngcontent-%COMP%] {\n  padding: 0 6px 0 14px;\n}\n.sbs-chip[_ngcontent-%COMP%] {\n  border: var(--uv-border-gray);\n  background-color: var(--uv-color-white);\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px 8px;\n  position: relative;\n}\n.sbs-chips-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -8px;\n}\n.sbs-link[_ngcontent-%COMP%] {\n  font-weight: 100;\n  font-size: var(--uv-font-size-xs);\n}\n.sbs-link-md[_ngcontent-%COMP%] {\n  font-weight: var(--uv-font-medium-bold);\n  font-size: var(--uv-font-size-sm);\n}\n\n.options-button[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  top: -28px;\n  right: 16px;\n  border-radius: 4px;\n  box-shadow: var(--uv-box-shadow-hover-2);\n  transition: all 0.3s;\n}"],
  changeDetection: 0
});

/***/ }),

/***/ 42711:
/*!******************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/side-by-side.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideBySideModule": () => (/* binding */ SideBySideModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _landing_landing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing/landing.module */ 60883);
/* harmony import */ var _side_by_side_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-by-side-routing.module */ 35728);
/* harmony import */ var _sbs_document_source_document_source_document_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sbs-document/source-document/source-document.module */ 44931);
/* harmony import */ var _side_by_side_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-by-side.component */ 82449);
/* harmony import */ var _wizard_sbs_wizard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wizard/sbs-wizard.service */ 53454);
/* harmony import */ var _sbs_compare_sbs_compare_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sbs-compare/sbs-compare.component */ 90689);
/* harmony import */ var _select_documents_select_documents_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-documents/select-documents.component */ 49709);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 97392);
/* harmony import */ var _shared_directives_click_outside_click_outside_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/directives/click-outside/click-outside.module */ 76772);
/* harmony import */ var _services_change_request_change_request_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/change-request/change-request.service */ 66959);
/* harmony import */ var _sbs_document_target_document_target_document_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sbs-document/target-document/target-document.module */ 43318);
/* harmony import */ var _services_side_by_side_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/side-by-side.service */ 26850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 94650);















class SideBySideModule {}
SideBySideModule.ɵfac = function SideBySideModule_Factory(t) {
  return new (t || SideBySideModule)();
};
SideBySideModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: SideBySideModule
});
SideBySideModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  providers: [_wizard_sbs_wizard_service__WEBPACK_IMPORTED_MODULE_5__.SbsWizardService, _services_change_request_change_request_service__WEBPACK_IMPORTED_MODULE_9__.ChangeRequestService, _services_side_by_side_service__WEBPACK_IMPORTED_MODULE_11__.SidebySideService],
  imports: [_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ActionBarModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ButtonModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, _shared_directives_click_outside_click_outside_module__WEBPACK_IMPORTED_MODULE_8__.ClickOutsideModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _side_by_side_routing_module__WEBPACK_IMPORTED_MODULE_2__.SideBySideRoutingModule, _landing_landing_module__WEBPACK_IMPORTED_MODULE_1__.SideBySideLandingModule, _sbs_document_source_document_source_document_module__WEBPACK_IMPORTED_MODULE_3__.SourceDocumentModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SearchPanelModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _sbs_document_target_document_target_document_module__WEBPACK_IMPORTED_MODULE_10__.TargetDocumentModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxOptionsMenuModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxToolbarModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](SideBySideModule, {
    declarations: [_side_by_side_component__WEBPACK_IMPORTED_MODULE_4__.SideBySideComponent, _sbs_compare_sbs_compare_component__WEBPACK_IMPORTED_MODULE_6__.SbsCompareComponent, _select_documents_select_documents_component__WEBPACK_IMPORTED_MODULE_7__.SelectDocumentsComponent],
    imports: [_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ActionBarModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ButtonModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, _shared_directives_click_outside_click_outside_module__WEBPACK_IMPORTED_MODULE_8__.ClickOutsideModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _side_by_side_routing_module__WEBPACK_IMPORTED_MODULE_2__.SideBySideRoutingModule, _landing_landing_module__WEBPACK_IMPORTED_MODULE_1__.SideBySideLandingModule, _sbs_document_source_document_source_document_module__WEBPACK_IMPORTED_MODULE_3__.SourceDocumentModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SearchPanelModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _sbs_document_target_document_target_document_module__WEBPACK_IMPORTED_MODULE_10__.TargetDocumentModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxOptionsMenuModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxToolbarModule],
    exports: [_side_by_side_component__WEBPACK_IMPORTED_MODULE_4__.SideBySideComponent]
  });
})();

/***/ }),

/***/ 56709:
/*!**************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/checkbox.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR": () => (/* binding */ MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR),
/* harmony export */   "MAT_CHECKBOX_DEFAULT_OPTIONS": () => (/* binding */ MAT_CHECKBOX_DEFAULT_OPTIONS),
/* harmony export */   "MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MAT_CHECKBOX_REQUIRED_VALIDATOR": () => (/* binding */ MAT_CHECKBOX_REQUIRED_VALIDATOR),
/* harmony export */   "MatCheckbox": () => (/* binding */ MatCheckbox),
/* harmony export */   "MatCheckboxChange": () => (/* binding */ MatCheckboxChange),
/* harmony export */   "MatCheckboxModule": () => (/* binding */ MatCheckboxModule),
/* harmony export */   "MatCheckboxRequiredValidator": () => (/* binding */ MatCheckboxRequiredValidator),
/* harmony export */   "_MatCheckboxRequiredValidatorModule": () => (/* binding */ _MatCheckboxRequiredValidatorModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 12687);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 21281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 94650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/observers */ 49643);











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for `mat-checkbox`. */
const _c0 = ["input"];
const _c1 = function (a0) {
  return {
    enterDuration: a0
  };
};
const _c2 = ["*"];
const MAT_CHECKBOX_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-checkbox-default-options', {
  providedIn: 'root',
  factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: 'accent',
    clickAction: 'check-indeterminate'
  };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids for checkbox components.
let nextUniqueId = 0;
// Default checkbox configuration.
const defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
/**
 * Provider Expression that allows mat-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
const MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCheckbox),
  multi: true
};
/** Change event object emitted by MatCheckbox. */
class MatCheckboxChange {}
// Boilerplate for applying mixins to MatCheckbox.
/** @docs-private */
const _MatCheckboxBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinTabIndex)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisabled)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
}))));
/**
 * A material design checkbox component. Supports all of the functionality of an HTML5 checkbox,
 * and exposes a similar API. A MatCheckbox can be either checked, unchecked, indeterminate, or
 * disabled. Note that all additional accessibility attributes are taken care of by the component,
 * so there is no need to provide them yourself. However, if you want to omit a label and still
 * have the checkbox be accessible, you may supply an [aria-label] input.
 * See: https://material.io/design/components/selection-controls.html
 */
class MatCheckbox extends _MatCheckboxBase {
  constructor(elementRef, _changeDetectorRef, _focusMonitor, _ngZone, tabIndex, _animationMode, _options) {
    super(elementRef);
    this._changeDetectorRef = _changeDetectorRef;
    this._focusMonitor = _focusMonitor;
    this._ngZone = _ngZone;
    this._animationMode = _animationMode;
    this._options = _options;
    /**
     * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
     * take precedence so this may be omitted.
     */
    this.ariaLabel = '';
    /**
     * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
     */
    this.ariaLabelledby = null;
    this._uniqueId = `mat-checkbox-${++nextUniqueId}`;
    /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
    this.id = this._uniqueId;
    /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
    this.labelPosition = 'after';
    /** Name value will be applied to the input element if present */
    this.name = null;
    /** Event emitted when the checkbox's `checked` value changes. */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the checkbox's `indeterminate` value changes. */
    this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
     * @docs-private
     */
    this._onTouched = () => {};
    this._currentAnimationClass = '';
    this._currentCheckState = 0 /* Init */;
    this._controlValueAccessorChangeFn = () => {};
    this._checked = false;
    this._disabled = false;
    this._indeterminate = false;
    this._options = this._options || defaults;
    this.color = this.defaultColor = this._options.color || defaults.color;
    this.tabIndex = parseInt(tabIndex) || 0;
  }
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  /** Whether the checkbox is required. */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
      if (!focusOrigin) {
        // When a focused element becomes disabled, the browser *immediately* fires a blur event.
        // Angular does not expect events to be raised during change detection, so any state change
        // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
        // See https://github.com/angular/angular/issues/17793. To work around this, we defer
        // telling the form control it has been touched until the next tick.
        Promise.resolve().then(() => {
          this._onTouched();
          this._changeDetectorRef.markForCheck();
        });
      }
    });
    this._syncIndeterminate(this._indeterminate);
  }
  // TODO: Delete next major revision.
  ngAfterViewChecked() {}
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /**
   * Whether the checkbox is checked.
   */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    const checked = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    if (checked != this.checked) {
      this._checked = checked;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Whether the checkbox is disabled. This fully overrides the implementation provided by
   * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    if (newValue !== this.disabled) {
      this._disabled = newValue;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
   * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
   * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
   * set to false.
   */
  get indeterminate() {
    return this._indeterminate;
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate;
    this._indeterminate = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    if (changed) {
      if (this._indeterminate) {
        this._transitionCheckState(3 /* Indeterminate */);
      } else {
        this._transitionCheckState(this.checked ? 1 /* Checked */ : 2 /* Unchecked */);
      }

      this.indeterminateChange.emit(this._indeterminate);
    }
    this._syncIndeterminate(this._indeterminate);
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Method being called whenever the label text changes. */
  _onLabelTextChange() {
    // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
    // component will be only marked for check, but no actual change detection runs automatically.
    // Instead of going back into the zone in order to trigger a change detection which causes
    // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
    // an explicit change detection for the checkbox view and its children.
    this._changeDetectorRef.detectChanges();
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this.checked = !!value;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  _getAriaChecked() {
    if (this.checked) {
      return 'true';
    }
    return this.indeterminate ? 'mixed' : 'false';
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._elementRef.nativeElement;
    if (oldState === newState) {
      return;
    }
    if (this._currentAnimationClass.length > 0) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      // Remove the animation class to avoid animation when the checkbox is moved between containers
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1000);
      });
    }
  }
  _emitChangeEvent() {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = this.checked;
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(event);
    // Assigning the value again here is redundant, but we have to do it in case it was
    // changed inside the `change` listener which will cause the input to be out of sync.
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  /** Toggles the `checked` state of the checkbox. */
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  /**
   * Event handler for checkbox input element.
   * Toggles checked state if element is not disabled.
   * Do not toggle on (change) event since IE doesn't fire change event when
   *   indeterminate checkbox is clicked.
   * @param event
   */
  _onInputClick(event) {
    const clickAction = this._options?.clickAction;
    // We have to stop propagation for click events on the visual hidden input element.
    // By default, when a user clicks on a label element, a generated click event will be
    // dispatched on the associated input element. Since we are using a label element as our
    // root container, the click event on the `checkbox` will be executed twice.
    // The real click event will bubble up, and the generated click event also tries to bubble up.
    // This will lead to multiple click events.
    // Preventing bubbling for the second event will solve that issue.
    event.stopPropagation();
    // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click
    if (!this.disabled && clickAction !== 'noop') {
      // When user manually click on the checkbox, `indeterminate` is set to false.
      if (this.indeterminate && clickAction !== 'check') {
        Promise.resolve().then(() => {
          this._indeterminate = false;
          this.indeterminateChange.emit(this._indeterminate);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? 1 /* Checked */ : 2 /* Unchecked */);
      // Emit our custom change event if the native input emitted one.
      // It is important to only emit it, if the native input triggered one, because
      // we don't want to trigger a change event, when the `checked` variable changes for example.
      this._emitChangeEvent();
    } else if (!this.disabled && clickAction === 'noop') {
      // Reset native input when clicked with noop. The native checkbox becomes checked after
      // click, reset it to be align with `checked` value of `mat-checkbox`.
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  /** Focuses the checkbox. */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  _onInteractionEvent(event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the `change` output.
    event.stopPropagation();
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    // Don't transition if animations are disabled.
    if (this._animationMode === 'NoopAnimations') {
      return '';
    }
    let animSuffix = '';
    switch (oldState) {
      case 0 /* Init */:
        // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
        // [checked] bound to it.
        if (newState === 1 /* Checked */) {
          animSuffix = 'unchecked-checked';
        } else if (newState == 3 /* Indeterminate */) {
          animSuffix = 'unchecked-indeterminate';
        } else {
          return '';
        }
        break;
      case 2 /* Unchecked */:
        animSuffix = newState === 1 /* Checked */ ? 'unchecked-checked' : 'unchecked-indeterminate';
        break;
      case 1 /* Checked */:
        animSuffix = newState === 2 /* Unchecked */ ? 'checked-unchecked' : 'checked-indeterminate';
        break;
      case 3 /* Indeterminate */:
        animSuffix = newState === 1 /* Checked */ ? 'indeterminate-checked' : 'indeterminate-unchecked';
        break;
    }
    return `mat-checkbox-anim-${animSuffix}`;
  }
  /**
   * Syncs the indeterminate value with the checkbox DOM node.
   *
   * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
   * property is supported on an element boils down to `if (propName in element)`. Domino's
   * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
   * server-side rendering.
   */
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
}
MatCheckbox.ɵfac = function MatCheckbox_Factory(t) {
  return new (t || MatCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_CHECKBOX_DEFAULT_OPTIONS, 8));
};
MatCheckbox.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCheckbox,
  selectors: [["mat-checkbox"]],
  viewQuery: function MatCheckbox_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    }
  },
  hostAttrs: [1, "mat-checkbox"],
  hostVars: 14,
  hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("aria-label", null)("aria-labelledby", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-checkbox-indeterminate", ctx.indeterminate)("mat-checkbox-checked", ctx.checked)("mat-checkbox-disabled", ctx.disabled)("mat-checkbox-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  inputs: {
    disableRipple: "disableRipple",
    color: "color",
    tabIndex: "tabIndex",
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
    id: "id",
    required: "required",
    labelPosition: "labelPosition",
    name: "name",
    value: "value",
    checked: "checked",
    disabled: "disabled",
    indeterminate: "indeterminate"
  },
  outputs: {
    change: "change",
    indeterminateChange: "indeterminateChange"
  },
  exportAs: ["matCheckbox"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c2,
  decls: 17,
  vars: 21,
  consts: [[1, "mat-checkbox-layout"], ["label", ""], [1, "mat-checkbox-inner-container"], ["type", "checkbox", 1, "mat-checkbox-input", "cdk-visually-hidden", 3, "id", "required", "checked", "disabled", "tabIndex", "change", "click"], ["input", ""], ["matRipple", "", 1, "mat-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleRadius", "matRippleCentered", "matRippleAnimation"], [1, "mat-ripple-element", "mat-checkbox-persistent-ripple"], [1, "mat-checkbox-frame"], [1, "mat-checkbox-background"], ["version", "1.1", "focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mat-checkbox-checkmark"], ["fill", "none", "stroke", "white", "d", "M4.1,12.7 9,17.6 20.3,6.3", 1, "mat-checkbox-checkmark-path"], [1, "mat-checkbox-mixedmark"], [1, "mat-checkbox-label", 3, "cdkObserveContent"], ["checkboxLabel", ""], [2, "display", "none"]],
  template: function MatCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0, 1)(2, "span", 2)(3, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MatCheckbox_Template_input_change_3_listener($event) {
        return ctx._onInteractionEvent($event);
      })("click", function MatCheckbox_Template_input_click_3_listener($event) {
        return ctx._onInputClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatCheckbox_Template_span_cdkObserveContent_12_listener() {
        return ctx._onLabelTextChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\xA0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.inputId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-checkbox-inner-container-no-side-margin", !_r2.textContent || !_r2.textContent.trim());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("value", ctx.value)("name", ctx.name)("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-checked", ctx._getAriaChecked())("aria-describedby", ctx.ariaDescribedby);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleRadius", 20)("matRippleCentered", true)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, ctx._animationMode === "NoopAnimations" ? 0 : 150));
    }
  },
  dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__.CdkObserveContent],
  styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-ripple{outline:solid 3px}.mat-checkbox-layout{-webkit-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-checkbox',
      exportAs: 'matCheckbox',
      host: {
        'class': 'mat-checkbox',
        '[id]': 'id',
        '[attr.tabindex]': 'null',
        '[attr.aria-label]': 'null',
        '[attr.aria-labelledby]': 'null',
        '[class.mat-checkbox-indeterminate]': 'indeterminate',
        '[class.mat-checkbox-checked]': 'checked',
        '[class.mat-checkbox-disabled]': 'disabled',
        '[class.mat-checkbox-label-before]': 'labelPosition == "before"',
        '[class._mat-animation-noopable]': `_animationMode === 'NoopAnimations'`
      },
      providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR],
      inputs: ['disableRipple', 'color', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<label [attr.for]=\"inputId\" class=\"mat-checkbox-layout\" #label>\n  <span class=\"mat-checkbox-inner-container\"\n       [class.mat-checkbox-inner-container-no-side-margin]=\"!checkboxLabel.textContent || !checkboxLabel.textContent.trim()\">\n    <input #input\n           class=\"mat-checkbox-input cdk-visually-hidden\" type=\"checkbox\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [checked]=\"checked\"\n           [attr.value]=\"value\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [tabIndex]=\"tabIndex\"\n           [attr.aria-label]=\"ariaLabel || null\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-checked]=\"_getAriaChecked()\"\n           [attr.aria-describedby]=\"ariaDescribedby\"\n           (change)=\"_onInteractionEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n    <span matRipple class=\"mat-checkbox-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleRadius]=\"20\"\n         [matRippleCentered]=\"true\"\n         [matRippleAnimation]=\"{enterDuration: _animationMode === 'NoopAnimations' ? 0 : 150}\">\n      <span class=\"mat-ripple-element mat-checkbox-persistent-ripple\"></span>\n    </span>\n    <span class=\"mat-checkbox-frame\"></span>\n    <span class=\"mat-checkbox-background\">\n      <svg version=\"1.1\"\n           focusable=\"false\"\n           class=\"mat-checkbox-checkmark\"\n           viewBox=\"0 0 24 24\"\n           aria-hidden=\"true\">\n        <path class=\"mat-checkbox-checkmark-path\"\n              fill=\"none\"\n              stroke=\"white\"\n              d=\"M4.1,12.7 9,17.6 20.3,6.3\"/>\n      </svg>\n      <!-- Element for rendering the indeterminate state checkbox. -->\n      <span class=\"mat-checkbox-mixedmark\"></span>\n    </span>\n  </span>\n  <span class=\"mat-checkbox-label\" #checkboxLabel (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
      styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-ripple{outline:solid 3px}.mat-checkbox-layout{-webkit-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_CHECKBOX_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    ariaDescribedby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-describedby']
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    indeterminateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['input']
    }],
    ripple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple]
    }],
    checked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    indeterminate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAT_CHECKBOX_REQUIRED_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCheckboxRequiredValidator),
  multi: true
};
/**
 * Validator for Material checkbox's required attribute in template-driven checkbox.
 * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
 * work with `mat-checkbox`.
 */
class MatCheckboxRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxRequiredValidator {}
MatCheckboxRequiredValidator.ɵfac = /* @__PURE__ */function () {
  let ɵMatCheckboxRequiredValidator_BaseFactory;
  return function MatCheckboxRequiredValidator_Factory(t) {
    return (ɵMatCheckboxRequiredValidator_BaseFactory || (ɵMatCheckboxRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCheckboxRequiredValidator)))(t || MatCheckboxRequiredValidator);
  };
}();
MatCheckboxRequiredValidator.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCheckboxRequiredValidator,
  selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCheckboxRequiredValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-checkbox[required][formControlName],
             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]`,
      providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR]
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** This module is used by both original and MDC-based checkbox implementations. */
class _MatCheckboxRequiredValidatorModule {}
_MatCheckboxRequiredValidatorModule.ɵfac = function _MatCheckboxRequiredValidatorModule_Factory(t) {
  return new (t || _MatCheckboxRequiredValidatorModule)();
};
_MatCheckboxRequiredValidatorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _MatCheckboxRequiredValidatorModule
});
_MatCheckboxRequiredValidatorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatCheckboxRequiredValidatorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [MatCheckboxRequiredValidator],
      declarations: [MatCheckboxRequiredValidator]
    }]
  }], null, null);
})();
class MatCheckboxModule {}
MatCheckboxModule.ɵfac = function MatCheckboxModule_Factory(t) {
  return new (t || MatCheckboxModule)();
};
MatCheckboxModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatCheckboxModule
});
MatCheckboxModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__.ObserversModule, _MatCheckboxRequiredValidatorModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _MatCheckboxRequiredValidatorModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCheckboxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__.ObserversModule, _MatCheckboxRequiredValidatorModule],
      exports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _MatCheckboxRequiredValidatorModule],
      declarations: [MatCheckbox]
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=checkbox.mjs.map

/***/ })

}]);