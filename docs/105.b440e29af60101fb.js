"use strict";
(self["webpackChunkuv_ui_prototype"] = self["webpackChunkuv_ui_prototype"] || []).push([[105],{

/***/ 15717:
/*!*****************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/file-folder-structure/breadcrumbs/breadcrumbs.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbsComponent": () => (/* binding */ BreadcrumbsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xng-breadcrumb */ 38909);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);



function BreadcrumbsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "uvx-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class BreadcrumbsComponent {
  constructor(breadcrumbService) {
    this.breadcrumbService = breadcrumbService;
    this.openedFolder = '';
  }
  ngOnInit() {
    // this.breadcrumbService.set('@Profile', 'Profile');
    this.breadcrumbService.set('@MainPage', 'Main Page');
    this.breadcrumbService.set('@Folder', this.openedFolder);
  }
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) {
  return new (t || BreadcrumbsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbService));
};
BreadcrumbsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BreadcrumbsComponent,
  selectors: [["app-folder-file-breadcrumbs"]],
  decls: 4,
  vars: 1,
  consts: [[1, "flex", "gap-xxs", "align-items-center", 2, "height", "40px"], [3, "separator"], ["breadcrumbSeperator", ""], ["size", "md"]],
  template: function BreadcrumbsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "xng-breadcrumb", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BreadcrumbsComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("separator", _r0);
    }
  },
  dependencies: [xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_0__.UvxIconComponent]
});

/***/ }),

/***/ 5590:
/*!*********************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/file-folder-structure/create-folder/create-folder.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateFolderComponent": () => (/* binding */ CreateFolderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _services_file_folder_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/file-folder.service */ 75108);
/* harmony import */ var _uv_ui_lib_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/button/button.component */ 26218);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);






const _c0 = ["createFolderInput"];
class CreateFolderComponent {
  constructor(fileFolderService) {
    this.fileFolderService = fileFolderService;
    this.newFolderName = '';
    this.closeModalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  ngAfterViewInit() {
    this.createFolderInput.nativeElement.focus();
  }
  createFolder(event) {
    event.stopPropagation();
    this.fileFolderService.createFolder(this.newFolderName);
    this.closeModalEvent.emit(event);
  }
  closeDialogue(event) {
    event.stopPropagation();
    this.closeModalEvent.emit(event);
  }
}
CreateFolderComponent.ɵfac = function CreateFolderComponent_Factory(t) {
  return new (t || CreateFolderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_file_folder_service__WEBPACK_IMPORTED_MODULE_0__.FileFolderStructureService));
};
CreateFolderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CreateFolderComponent,
  selectors: [["app-create-folder"]],
  viewQuery: function CreateFolderComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.createFolderInput = _t.first);
    }
  },
  inputs: {
    newFolderName: "newFolderName"
  },
  outputs: {
    closeModalEvent: "closeModalEvent"
  },
  decls: 10,
  vars: 1,
  consts: [[1, "box", "create-dialogue", "padding-sm"], [1, "text-align-right"], ["icon", "close", 3, "click"], [1, "flex", "flex-column", "gap-xs"], [1, ""], [1, "flex", "flex-column", "gap-xs", 3, "submit"], ["type", "text", "placeholder", "New Folder Name Here...", "maxlength", "40", "label", "New Folder Name", "name", "newFolder", 1, "uv-input", "uv-input-border", 3, "ngModel", "ngModelChange"], ["createFolderInput", ""], ["type", "submit", "mode", "primary", "label", "Create Folder", 3, "click"]],
  template: function CreateFolderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "uvx-icon-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateFolderComponent_Template_uvx_icon_button_click_2_listener($event) {
        return ctx.closeDialogue($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Create New Folder");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function CreateFolderComponent_Template_form_submit_6_listener($event) {
        return ctx.createFolder($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CreateFolderComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.newFolderName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "uvx-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateFolderComponent_Template_uvx_button_click_9_listener($event) {
        return ctx.createFolder($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newFolderName);
    }
  },
  dependencies: [_uv_ui_lib_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__.IconButtonComponent],
  styles: [".create-dialogue[_ngcontent-%COMP%] {\n  box-shadow: var(--uv-box-shadow-2);\n  z-index: var(--uv-z-index-popup);\n  border-radius: 8px;\n  position: absolute;\n  right: 0px;\n  width: max-content;\n  text-align: left;\n}"]
});

/***/ }),

/***/ 50345:
/*!********************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/file-folder-structure/file-folder-structure-routing.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileFolderStructureRoutingModule": () => (/* binding */ FileFolderStructureRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _file_folder_structure_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-folder-structure.component */ 65937);
/* harmony import */ var _folder_folder_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder/folder.component */ 36228);
/* harmony import */ var _files_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files-main/main.component */ 39163);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ 36272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);







const routes = [{
  path: '',
  component: _file_folder_structure_component__WEBPACK_IMPORTED_MODULE_0__.FileFolderStructureComponent,
  data: {
    breadcrumb: {
      alias: 'MainPage'
    },
    queryParams: {
      app: 'file-folder-structure'
    }
  },
  children: [{
    path: '',
    pathMatch: 'full',
    data: {
      queryParams: {
        app: 'file-folder-structure'
      }
    },
    component: _files_main_main_component__WEBPACK_IMPORTED_MODULE_2__.FilesMainComponent
  }, {
    path: 'folder',
    component: _folder_folder_component__WEBPACK_IMPORTED_MODULE_1__.FolderComponent,
    data: {
      queryParams: {
        app: 'file-folder-structure'
      },
      breadcrumb: {
        skip: true
      }
    },
    children: [{
      path: ':foldername',
      component: _folder_folder_component__WEBPACK_IMPORTED_MODULE_1__.FolderComponent,
      data: {
        breadcrumb: {
          alias: 'Folder'
        }
      }
    }, {
      path: ':foldername/:profilename',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent,
      data: {
        breadcrumb: {
          alias: 'Profile'
        }
      }
    }]
  }, {
    path: 'profile',
    component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent,
    data: {
      breadcrumb: {
        skip: true
      }
    },
    children: [{
      path: ':profilename',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent,
      data: {
        breadcrumb: {
          alias: 'Profile'
        }
      }
    }]
  }]
}];
class FileFolderStructureRoutingModule {}
FileFolderStructureRoutingModule.ɵfac = function FileFolderStructureRoutingModule_Factory(t) {
  return new (t || FileFolderStructureRoutingModule)();
};
FileFolderStructureRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: FileFolderStructureRoutingModule
});
FileFolderStructureRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FileFolderStructureRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 65937:
/*!***************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/file-folder-structure/file-folder-structure.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileFolderStructureComponent": () => (/* binding */ FileFolderStructureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _services_app_shell_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/app-shell.service */ 97732);
/* harmony import */ var _services_file_folder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/file-folder.service */ 75108);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _uv_ui_lib_src_lib_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../uv-ui-lib/src/lib/action-bar/action-bar.component */ 89895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _uv_ui_lib_src_lib_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../uv-ui-lib/src/lib/search-panel/search-panel.component */ 12239);
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ 15717);
/* harmony import */ var _create_folder_create_folder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-folder/create-folder.component */ 5590);













function FileFolderStructureComponent_app_create_folder_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-create-folder", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("closeModalEvent", function FileFolderStructureComponent_app_create_folder_10_Template_app_create_folder_closeModalEvent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.createFolderDialogue = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
class FileFolderStructureComponent {
  constructor(appShellService, fileFolderService, location, ref, router) {
    this.appShellService = appShellService;
    this.fileFolderService = fileFolderService;
    this.location = location;
    this.ref = ref;
    this.router = router;
    this.searchText = '';
    this.newFolderName = '';
    this.createFolderDialogue = false;
  }
  ngOnInit() {
    this.appShellService.setTitle('File Management');
    this.appShellService.setHeaderIcon('folder');
    this.appShellService.setNavIcon('file-folder-structure');
    this.router.events.subscribe(event => {
      // console.log(event);
    });
  }
  ngAfterViewChecked() {
    if (this.searchText !== '') {
      this.fileFolderService.typeAheadSearchFileFolder(this.searchText, 'explorer');
      this.ref.detectChanges();
    } else if (this.searchText === '') {
      this.fileFolderService.fileFolderSearchResults.next([]);
    }
  }
  navigateToMain() {
    this.router.navigate(['/main/file-folder-structure'], {
      queryParamsHandling: 'merge'
    });
  }
  createFolder() {
    this.createFolderDialogue = true;
  }
  back() {
    // this.history.pop()
    // if (this.history.length > 0) {
    this.location.back();
    // } else {
    //   this.router.navigateByUrl('/')
    // }
  }

  forward() {
    // this.history.pop()
    // if (this.history.length > 0) {
    this.location.forward();
    // } else {
    //   this.router.navigateByUrl('/')
    // }
  }
}

FileFolderStructureComponent.ɵfac = function FileFolderStructureComponent_Factory(t) {
  return new (t || FileFolderStructureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_app_shell_service__WEBPACK_IMPORTED_MODULE_0__.AppShellService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_file_folder_service__WEBPACK_IMPORTED_MODULE_1__.FileFolderStructureService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
};
FileFolderStructureComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: FileFolderStructureComponent,
  selectors: [["app-file-folder-structure"]],
  inputs: {
    searchText: "searchText",
    newFolderName: "newFolderName"
  },
  decls: 21,
  vars: 3,
  consts: [[1, "row"], [1, "w-100"], ["left", "", 1, "flex", "margin-top-xs", "margin-bottom-xs"], [1, "margin-right-xs"], ["icon", "arrow_back", "matTooltip", "Go Back", 1, "margin-right-xs", 3, "click"], ["icon", "arrow_forward", "matTooltip", "Go Forward", 3, "click"], ["mode", "global", "width", "240px", 3, "searchClearClicked"], ["type", "text", "placeholder", "Search files", "maxlength", "40", 1, "uv-input", "margin-left-xs", 3, "ngModel", "ngModelChange"], ["right", "", 1, "flex", "margin-top-xs", "margin-bottom-xs", "gap-xxs", "align-items-center"], ["type", "submit", "icon", "create_new_folder", "matTooltip", "Create new folder", 1, "position-relative", 3, "matTooltipDisabled", "click", "keydown.enter"], [3, "closeModalEvent", 4, "ngIf"], [1, "divider-left"], ["icon", "sort"], [1, "router-container"], [1, "flex", "gap-xxs", "align-items-center", "padding-top-sm", "padding-left-sm"], [1, "margin-right-xxs"], [1, "padding-sm", "content"], [3, "closeModalEvent"]],
  template: function FileFolderStructureComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "uvx-action-bar", 1)(2, "div", 2)(3, "div", 3)(4, "uvx-icon-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FileFolderStructureComponent_Template_uvx_icon_button_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "uvx-icon-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FileFolderStructureComponent_Template_uvx_icon_button_click_5_listener() {
        return ctx.forward();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "uvx-search-panel", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("searchClearClicked", function FileFolderStructureComponent_Template_uvx_search_panel_searchClearClicked_6_listener() {
        return ctx.searchText = "";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function FileFolderStructureComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.searchText = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8)(9, "uvx-icon-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FileFolderStructureComponent_Template_uvx_icon_button_click_9_listener() {
        return ctx.createFolder();
      })("keydown.enter", function FileFolderStructureComponent_Template_uvx_icon_button_keydown_enter_9_listener() {
        return ctx.createFolder();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, FileFolderStructureComponent_app_create_folder_10_Template, 1, 0, "app-create-folder", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "div", 11)(12, "uvx-icon-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 13)(14, "div", 14)(15, "uvx-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "inventory_2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "app-folder-file-breadcrumbs");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 15)(19, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltipDisabled", ctx.createFolderDialogue);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.createFolderDialogue);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _uv_ui_lib_src_lib_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_2__.ActionBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__.IconButtonComponent, _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_4__.UvxIconComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _uv_ui_lib_src_lib_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_5__.SearchPanelComponent, _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _create_folder_create_folder_component__WEBPACK_IMPORTED_MODULE_7__.CreateFolderComponent],
  styles: [".content[_ngcontent-%COMP%] {\n  height: calc(100vh - 202px);\n  overflow-y: auto;\n  overflow-x: hidden;\n}"]
});

/***/ }),

/***/ 37105:
/*!************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/file-folder-structure/file-folder-structure.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileFolderStructureModule": () => (/* binding */ FileFolderStructureModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _file_folder_structure_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-folder-structure.component */ 65937);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _file_folder_structure_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-folder-structure-routing.module */ 50345);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _files_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files-main/main.component */ 39163);
/* harmony import */ var _files_menu_files_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files-menu/files-menu.component */ 60595);
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ 15717);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ 36272);
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! xng-breadcrumb */ 38909);
/* harmony import */ var _folder_folder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./folder/folder.component */ 36228);
/* harmony import */ var _create_folder_create_folder_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-folder/create-folder.component */ 5590);
/* harmony import */ var _shared_directives_click_outside_click_outside_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/directives/click-outside/click-outside.module */ 76772);
/* harmony import */ var _options_menu_options_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./options-menu/options-menu.component */ 36391);
/* harmony import */ var _services_file_folder_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/file-folder.service */ 75108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 94650);

















class FileFolderStructureModule {}
FileFolderStructureModule.ɵfac = function FileFolderStructureModule_Factory(t) {
  return new (t || FileFolderStructureModule)();
};
FileFolderStructureModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: FileFolderStructureModule
});
FileFolderStructureModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  providers: [xng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__.BreadcrumbService, _services_file_folder_service__WEBPACK_IMPORTED_MODULE_11__.FileFolderStructureService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.ActionBarModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.ButtonModule, xng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__.BreadcrumbModule, _file_folder_structure_routing_module__WEBPACK_IMPORTED_MODULE_2__.FileFolderStructureRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.IconButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.NavbarSubModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.UvxIconModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.TooltipModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.RangeSliderModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.SearchPanelModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.TextInputModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.FolderTreeIconModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.ModalModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.TabModule, _shared_directives_click_outside_click_outside_module__WEBPACK_IMPORTED_MODULE_9__.ClickOutsideModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](FileFolderStructureModule, {
    declarations: [_file_folder_structure_component__WEBPACK_IMPORTED_MODULE_0__.FileFolderStructureComponent, _files_main_main_component__WEBPACK_IMPORTED_MODULE_3__.FilesMainComponent, _files_menu_files_menu_component__WEBPACK_IMPORTED_MODULE_4__.FilesMenuComponent, _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__.ProfileComponent, _folder_folder_component__WEBPACK_IMPORTED_MODULE_7__.FolderComponent, _create_folder_create_folder_component__WEBPACK_IMPORTED_MODULE_8__.CreateFolderComponent, _options_menu_options_menu_component__WEBPACK_IMPORTED_MODULE_10__.OptionsMenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.ActionBarModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.ButtonModule, xng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__.BreadcrumbModule, _file_folder_structure_routing_module__WEBPACK_IMPORTED_MODULE_2__.FileFolderStructureRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.IconButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.NavbarSubModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.UvxIconModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.TooltipModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.RangeSliderModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.SearchPanelModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.TextInputModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.FolderTreeIconModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.ModalModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.TabModule, _shared_directives_click_outside_click_outside_module__WEBPACK_IMPORTED_MODULE_9__.ClickOutsideModule],
    exports: [_file_folder_structure_component__WEBPACK_IMPORTED_MODULE_0__.FileFolderStructureComponent, _files_main_main_component__WEBPACK_IMPORTED_MODULE_3__.FilesMainComponent, _files_menu_files_menu_component__WEBPACK_IMPORTED_MODULE_4__.FilesMenuComponent]
  });
})();

/***/ }),

/***/ 39163:
/*!*********************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/file-folder-structure/files-main/main.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesMainComponent": () => (/* binding */ FilesMainComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 36053);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 2994);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 7625);
/* harmony import */ var _presetFiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../presetFiles */ 75747);
/* harmony import */ var _options_menu_options_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options-menu/options-menu */ 48535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _services_file_folder_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/file-folder.service */ 75108);
/* harmony import */ var _services_on_destroy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/on-destroy.service */ 14270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uv_ui_lib_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/button/button.component */ 26218);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _options_menu_options_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../options-menu/options-menu.component */ 36391);













function FilesMainComponent_div_0_div_1_uvx_icon_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "uvx-icon-button", 13)(1, "div", 14)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Description about the folder and the people it is shared with.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "img", 17)(8, "uvx-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const fileFolder_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](fileFolder_r5.name);
  }
}
function FilesMainComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FilesMainComponent_div_0_div_1_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const fileFolder_r5 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.navigateToFolder(fileFolder_r5, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, FilesMainComponent_div_0_div_1_uvx_icon_button_3_Template, 9, 1, "uvx-icon-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "uvx-icon-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FilesMainComponent_div_0_div_1_Template_uvx_icon_button_click_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const fileFolder_r5 = restoredCtx.$implicit;
      const i_r6 = restoredCtx.index;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.optionsMenuClicked(fileFolder_r5, $event, i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-options-menu", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 10)(7, "uvx-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const fileFolder_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fileFolder_r5.shared);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", !fileFolder_r5.menuActive ? "Options Menu" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fileFolder", fileFolder_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](fileFolder_r5.name);
  }
}
function FilesMainComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FilesMainComponent_div_0_div_2_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const file_r12 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.navigateToProfile(file_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "uvx-icon-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FilesMainComponent_div_0_div_2_Template_uvx_icon_button_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const file_r12 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r15.optionsMenuClicked(file_r12, $event, ctx_r15.i));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-options-menu", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 10)(4, "uvx-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const file_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", !file_r12.menuActive ? "Options Menu" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fileFolder", file_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](file_r12.name);
  }
}
function FilesMainComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FilesMainComponent_div_0_div_1_Template, 11, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, FilesMainComponent_div_0_div_2_Template, 8, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.allFolders.folders);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.allFolders.files);
  }
}
function FilesMainComponent_ng_template_1_div_0_div_1_uvx_icon_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "uvx-icon-button", 23)(1, "div", 24)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Description about the folder and the people it is shared with.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "img", 26)(8, "uvx-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const fileFolder_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](fileFolder_r20.name);
  }
}
function FilesMainComponent_ng_template_1_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FilesMainComponent_ng_template_1_div_0_div_1_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);
      const fileFolder_r20 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r24.navigateToFolder(fileFolder_r20, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 21)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, FilesMainComponent_ng_template_1_div_0_div_1_uvx_icon_button_3_Template, 9, 1, "uvx-icon-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "uvx-icon-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FilesMainComponent_ng_template_1_div_0_div_1_Template_uvx_icon_button_click_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);
      const fileFolder_r20 = restoredCtx.$implicit;
      const i_r21 = restoredCtx.index;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r26.optionsMenuClicked(fileFolder_r20, $event, i_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-options-menu", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 10)(7, "uvx-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const fileFolder_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", fileFolder_r20.shared);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", !fileFolder_r20.menuActive ? "Options Menu" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fileFolder", fileFolder_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](fileFolder_r20.name);
  }
}
function FilesMainComponent_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FilesMainComponent_ng_template_1_div_0_div_1_Template, 11, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r16.searchResults);
  }
}
function FilesMainComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " Your search query did not match any folder or file names. ");
  }
}
function FilesMainComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, FilesMainComponent_ng_template_1_div_0_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FilesMainComponent_ng_template_1_ng_template_1_Template, 1, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r2.noSearchResults)("ngIfElse", _r17);
  }
}
class FilesMainComponent {
  constructor(fileFolderService, destroy$, ref) {
    this.fileFolderService = fileFolderService;
    this.destroy$ = destroy$;
    this.ref = ref;
    this.allFolders = _presetFiles__WEBPACK_IMPORTED_MODULE_0__.presetFiles;
    this.optionMenuItems = _options_menu_options_menu__WEBPACK_IMPORTED_MODULE_1__.optionsMenu;
    this.searchResults = [];
  }
  ngOnInit() {
    this.allFolders = this.fileFolderService.getFolderFiles();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.fileFolderService.folderFiles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(files => this.allFolders = files)), this.fileFolderService.fileFolderSearchResults.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(results => this.searchResults = results))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(() => {
      this.ref.detectChanges();
    });
    console.log(this.searchResults);
  }
  get noSearchResults() {
    return this.searchResults[0] === "no results";
  }
  navigateToFolder(fileFolder, event) {
    event.stopPropagation();
    this.fileFolderService.navigateToFolder(fileFolder);
    console.log('navigating to folder from main');
  }
  navigateToProfile(file) {
    event.stopPropagation();
    this.fileFolderService.navigateToProfile(file);
    console.log('navigating to profile from main');
  }
  optionsMenuClicked(fileFolder, event, index) {
    event.stopPropagation();
    !fileFolder.menuActive ? fileFolder.menuActive = true : fileFolder.menuActive = false;
    this.fileFolderService.clearFileFolderMenus(fileFolder, index);
  }
}
FilesMainComponent.ɵfac = function FilesMainComponent_Factory(t) {
  return new (t || FilesMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_file_folder_service__WEBPACK_IMPORTED_MODULE_2__.FileFolderStructureService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_on_destroy_service__WEBPACK_IMPORTED_MODULE_3__.NgOnDestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef));
};
FilesMainComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: FilesMainComponent,
  selectors: [["app-files-main"]],
  decls: 3,
  vars: 2,
  consts: [["class", "flex flex-wrap gap-sm", 4, "ngIf", "ngIfElse"], ["resultsTpl", ""], [1, "flex", "flex-wrap", "gap-sm"], ["class", "file flex flex-column padding-top-xxs", 3, "click", 4, "ngFor", "ngForOf"], [1, "file", "flex", "flex-column", "padding-top-xxs", 3, "click"], [1, "flex", "align-items-center", "justify-content-space-between"], [1, "padding-left-xxs"], ["icon", "people", "class", "shared", 4, "ngIf"], ["icon", "more_vertical", 1, "text-align-right", "position-relative", 3, "matTooltip", "click"], [3, "fileFolder"], [1, "flex", "align-items-center", "h-100", "justify-content-space-between", "flex-column", "padding-left-md", "padding-right-md", "padding-bottom-xs"], ["size", "xxl"], [1, "file-name"], ["icon", "people", 1, "shared"], [1, "padding-sm", "padding-right-md", "box", "shared-menu"], [1, "margin-top-xs"], [1, "flex", "justify-content-space-between", "align-items-center", "margin-top-xs"], ["src", "../../../assets/users.png", "alt", "", 2, "width", "130px", "height", "33px"], ["mode", "text", "color", "gray", "label", "View Details"], ["icon", "more_vertical", 1, "text-align-right", 3, "matTooltip", "click"], ["noResultsTpl", ""], ["x", "", "matTooltip", "Open folder", 1, "flex", "align-items-center", "justify-content-space-between"], ["icon", "folder", "class", "shared", 4, "ngIf"], ["icon", "folder", 1, "shared"], [1, "shared-menu", "padding-sm", "box"], [1, "flex", "justify-content-space-between"], ["src", "../../../assets/users.png", "alt", ""], ["mode", "secondary", "label", "View Details"]],
  template: function FilesMainComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, FilesMainComponent_div_0_Template, 3, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FilesMainComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.searchResults.length < 1)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _uv_ui_lib_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__.ButtonComponent, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_5__.IconButtonComponent, _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_6__.UvxIconComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _options_menu_options_menu_component__WEBPACK_IMPORTED_MODULE_7__.OptionsMenuComponent],
  styles: [".file[_ngcontent-%COMP%] {\n  border: 1px solid var(--uv-color-gray);\n  background-color: var(--uv-color-white);\n  border-radius: 2px;\n  cursor: pointer;\n  width: 165px;\n  height: 167px;\n}\n.file[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--uv-box-shadow);\n  background-color: var(--uv-color-gray-light-2);\n}\n.file[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  color: var(--uv-color-primary);\n}\n.file-name[_ngcontent-%COMP%] {\n  line-height: 1.25em;\n  text-align: center;\n}\n\n.shared[_ngcontent-%COMP%] {\n  position: relative;\n}\n.shared-menu[_ngcontent-%COMP%] {\n  color: var(--uv-color-black);\n  text-align: left;\n  width: max-content;\n  max-width: 324px;\n  opacity: 0;\n  position: absolute;\n  box-shadow: var(--uv-box-shadow-2);\n  border-radius: 4px;\n  visibility: hidden;\n}\n.shared[_ngcontent-%COMP%]:hover   .shared-menu[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition-property: opacity;\n  visibility: visible;\n}"]
});

/***/ }),

/***/ 60595:
/*!***************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/file-folder-structure/files-menu/files-menu.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilesMenuComponent": () => (/* binding */ FilesMenuComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 36053);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 2994);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 7625);
/* harmony import */ var _search_search_results_sample_search_results_allSearchResults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../search/search-results/sample-search-results/allSearchResults */ 81271);
/* harmony import */ var _shared_launch_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/launch-services */ 33004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _services_file_folder_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/file-folder.service */ 75108);
/* harmony import */ var _services_on_destroy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/on-destroy.service */ 14270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);
/* harmony import */ var _uv_ui_lib_src_lib_navbar_sub_navbar_sub_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/navbar-sub/navbar-sub.component */ 92998);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _uv_ui_lib_src_lib_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/search-panel/search-panel.component */ 12239);















function FilesMenuComponent_div_1_div_10_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FilesMenuComponent_div_1_div_10_div_1_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const folder_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](folder_r7.menuOpen = !folder_r7.menuOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 5)(2, "uvx-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "uvx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const folder_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("color", folder_r7.menuOpen ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](folder_r7.menuOpen ? "expand_more" : "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](folder_r7.menuOpen ? "folder_open" : "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("color-primary", folder_r7.menuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](folder_r7.name);
  }
}
function FilesMenuComponent_div_1_div_10_div_1_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25)(1, "div", 5)(2, "uvx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const folder_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](folder_r16.menuOpen ? "folder_open" : "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](folder_r16.name);
  }
}
function FilesMenuComponent_div_1_div_10_div_1_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FilesMenuComponent_div_1_div_10_div_1_div_2_div_2_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const file_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18.openEntityProfileFromMenu(file_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 5)(2, "uvx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](file_r17.name);
  }
}
function FilesMenuComponent_div_1_div_10_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FilesMenuComponent_div_1_div_10_div_1_div_2_div_1_Template, 6, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, FilesMenuComponent_div_1_div_10_div_1_div_2_div_2_Template, 6, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const folder_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", folder_r7.folders);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", folder_r7.files);
  }
}
function FilesMenuComponent_div_1_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FilesMenuComponent_div_1_div_10_div_1_div_1_Template, 8, 6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, FilesMenuComponent_div_1_div_10_div_1_div_2_Template, 3, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const folder_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", folder_r7.type === "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", folder_r7.menuOpen);
  }
}
function FilesMenuComponent_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FilesMenuComponent_div_1_div_10_div_1_Template, 3, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.allFolders.folders);
  }
}
function FilesMenuComponent_div_1_ng_template_11_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30)(1, "div", 5)(2, "uvx-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "uvx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("color", file_r22.menuOpen ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](file_r22.menuOpen ? "expand_less" : "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](file_r22.menuOpen ? "folder_open" : "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("color-primary", file_r22.menuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](file_r22.name);
  }
}
function FilesMenuComponent_div_1_ng_template_11_div_1_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25)(1, "div", 5)(2, "uvx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const folder_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](folder_r28.menuOpen ? "folder_open" : "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](folder_r28.name);
  }
}
function FilesMenuComponent_div_1_ng_template_11_div_1_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25)(1, "div", 5)(2, "uvx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](file_r29.name);
  }
}
function FilesMenuComponent_div_1_ng_template_11_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FilesMenuComponent_div_1_ng_template_11_div_1_div_2_div_1_Template, 6, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, FilesMenuComponent_div_1_ng_template_11_div_1_div_2_div_2_Template, 6, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", file_r22.folders);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", file_r22.files);
  }
}
function FilesMenuComponent_div_1_ng_template_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FilesMenuComponent_div_1_ng_template_11_div_1_div_1_Template, 8, 6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, FilesMenuComponent_div_1_ng_template_11_div_1_div_2_Template, 3, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", file_r22.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", file_r22.menuOpen);
  }
}
function FilesMenuComponent_div_1_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FilesMenuComponent_div_1_ng_template_11_div_1_Template, 3, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.searchResults);
  }
}
function FilesMenuComponent_div_1_span_18_uvx_icon_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "uvx-icon-button", 36);
  }
  if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", item_r33.icon)("matTooltip", item_r33.tooltip)("routerLink", item_r33.link);
  }
}
function FilesMenuComponent_div_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 31)(1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FilesMenuComponent_div_1_span_18_Template_p_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const item_r31 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r34.openEntityProfileFromMenu(item_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, FilesMenuComponent_div_1_span_18_uvx_icon_button_4_Template, 1, 3, "uvx-icon-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "uvx-icon-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "\\");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r31.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.launchServices);
  }
}
function FilesMenuComponent_div_1_span_21_uvx_icon_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "uvx-icon-button", 36);
  }
  if (rf & 2) {
    const item_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", item_r38.icon)("matTooltip", item_r38.tooltip)("routerLink", item_r38.link);
  }
}
function FilesMenuComponent_div_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 31)(1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FilesMenuComponent_div_1_span_21_Template_p_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r40);
      const item_r36 = restoredCtx.$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r39.openEntityProfileFromMenu(item_r36));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, FilesMenuComponent_div_1_span_21_uvx_icon_button_4_Template, 1, 3, "uvx-icon-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "uvx-icon-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r36 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r36.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r5.launchServices);
  }
}
function FilesMenuComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Headline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "uvx-search-panel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("searchClearClicked", function FilesMenuComponent_div_1_Template_uvx_search_panel_searchClearClicked_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r41.searchText = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function FilesMenuComponent_div_1_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r43.searchText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, FilesMenuComponent_div_1_div_10_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, FilesMenuComponent_div_1_ng_template_11_Template, 2, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 5)(15, "div", 12)(16, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Recently Viewed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, FilesMenuComponent_div_1_span_18_Template, 7, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Most Popular");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, FilesMenuComponent_div_1_span_21_Template, 6, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.searchText === "")("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.recentlyViewed);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.mostPopular);
  }
}
class FilesMenuComponent {
  constructor(fileFolderService, destroy$, ref) {
    this.fileFolderService = fileFolderService;
    this.destroy$ = destroy$;
    this.ref = ref;
    this.subNavbarIsExpanded = true;
    this.searchText = '';
    this.launchServices = _shared_launch_services__WEBPACK_IMPORTED_MODULE_1__.launchServices;
    this.recentlyViewed = _search_search_results_sample_search_results_allSearchResults__WEBPACK_IMPORTED_MODULE_0__.allSearchResults.slice(0, 3);
    this.mostPopular = _search_search_results_sample_search_results_allSearchResults__WEBPACK_IMPORTED_MODULE_0__.allSearchResults.slice(5, 9);
    this.searchResults = [];
  }
  ngOnInit() {
    this.allFolders = this.fileFolderService.getFolderFiles();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.fileFolderService.folderFiles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(files => this.allFolders = files))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(() => this.ref.detectChanges());
  }
  ngAfterViewChecked() {
    if (this.searchText !== '') {
      this.searchResults = this.fileFolderService.typeAheadSearchFileFolder(this.searchText, 'menu');
      this.ref.detectChanges();
      console.log(this.searchText);
    }
  }
  toggleSubNavbar() {
    this.subNavbarIsExpanded = !this.subNavbarIsExpanded;
  }
  openEntityProfileFromMenu(file) {
    this.fileFolderService.navigateToProfile(file);
  }
}
FilesMenuComponent.ɵfac = function FilesMenuComponent_Factory(t) {
  return new (t || FilesMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_file_folder_service__WEBPACK_IMPORTED_MODULE_2__.FileFolderStructureService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_on_destroy_service__WEBPACK_IMPORTED_MODULE_3__.NgOnDestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef));
};
FilesMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: FilesMenuComponent,
  selectors: [["app-files-menu"]],
  inputs: {
    subNavbarIsExpanded: "subNavbarIsExpanded",
    searchText: "searchText"
  },
  decls: 2,
  vars: 2,
  consts: [["name", "Headline", "expandedWidth", "380px", 3, "isExpanded", "toggleButtonClicked"], ["class", "files-menu-content", 4, "ngIf"], [1, "files-menu-content"], [1, "padding-bottom-xs", "padding-left-sm"], [1, "divider"], [1, "margin-right-xxs"], [1, "margin-top-sm", "margin-left-sm", "margin-right-sm"], ["mode", "global", 3, "searchClearClicked"], ["type", "text", "placeholder", "Search Entities", "maxlength", "40", 1, "uv-input", "margin-left-xs", 3, "ngModel", "ngModelChange"], [1, "top-container", "padding-sm"], ["class", "flex flex-column gap-xs", 4, "ngIf", "ngIfElse"], ["searchResultsTpl", ""], [1, "padding-sm", "flex", "flex-column", "gap-xs", "bottom-container"], [1, "uv-body", "uv-body-secondary"], ["class", "margin-left-sm pointer link position-relative recent-item", 4, "ngFor", "ngForOf"], [1, "flex", "flex-column", "gap-xs"], [4, "ngFor", "ngForOf"], ["class", "flex file-item", 3, "click", 4, "ngIf"], ["class", "margin-left-md margin-top-xs flex flex-column gap-xxs", 4, "ngIf"], [1, "flex", "file-item", 3, "click"], [3, "color"], [1, "semibold"], [1, "margin-left-md", "margin-top-xs", "flex", "flex-column", "gap-xxs"], ["class", "flex", 4, "ngFor", "ngForOf"], ["class", "flex pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "flex"], [1, "flex", "pointer", 3, "click"], [1, "semibold", "hover-blue"], [1, "margin-top-sm", "flex", "flex-column", "gap-xs"], ["class", "flex file-item", 4, "ngIf"], [1, "flex", "file-item"], [1, "margin-left-sm", "pointer", "link", "position-relative", "recent-item"], [1, "semibold", 3, "click"], [1, "launch-bar"], [3, "icon", "matTooltip", "routerLink", 4, "ngFor", "ngForOf"], ["icon", "error_outline", "matTooltip", "Launch Service 4"], [3, "icon", "matTooltip", "routerLink"]],
  template: function FilesMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "uvx-navbar-sub", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("toggleButtonClicked", function FilesMenuComponent_Template_uvx_navbar_sub_toggleButtonClicked_0_listener() {
        return ctx.toggleSubNavbar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FilesMenuComponent_div_1_Template, 22, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isExpanded", ctx.subNavbarIsExpanded);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.subNavbarIsExpanded);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_4__.IconButtonComponent, _uv_ui_lib_src_lib_navbar_sub_navbar_sub_component__WEBPACK_IMPORTED_MODULE_5__.NavbarSubComponent, _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_6__.UvxIconComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _uv_ui_lib_src_lib_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_7__.SearchPanelComponent],
  styles: [".files-menu-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.toggle-button[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n}\n\n.file-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.top-container[_ngcontent-%COMP%] {\n  max-height: 40vh;\n  overflow: auto;\n}\n\n.bottom-container[_ngcontent-%COMP%] {\n  overflow: auto;\n  min-height: 100%;\n  max-height: 50vh;\n}\n\n.recent-item[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: var(--uv-color-primary);\n}\n.recent-item[_ngcontent-%COMP%]:hover   .launch-bar[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: 0.2s;\n  transition-delay: 0.75s;\n}\n\n.launch-bar[_ngcontent-%COMP%] {\n  display: none;\n  opacity: 0;\n  position: absolute;\n  padding: 10px 12px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  top: -2.2rem;\n  right: 3rem;\n  border-radius: 4px;\n  box-shadow: var(--uv-box-shadow-hover-2);\n  background-color: var(--uv-color-white);\n}"]
});

/***/ }),

/***/ 36228:
/*!*******************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/file-folder-structure/folder/folder.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderComponent": () => (/* binding */ FolderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 36053);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2994);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 7625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/data.service */ 37487);
/* harmony import */ var _services_file_folder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/file-folder.service */ 75108);
/* harmony import */ var _services_on_destroy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/on-destroy.service */ 14270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _options_menu_options_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../options-menu/options-menu.component */ 36391);













function FolderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FolderComponent_div_1_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const fileFolder_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.navigateToFolder(fileFolder_r2, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "uvx-icon-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FolderComponent_div_1_Template_uvx_icon_button_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const fileFolder_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.optionsMenuClicked(fileFolder_r2, $event, ctx_r5.i));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-options-menu", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 5)(4, "uvx-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const fileFolder_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matTooltip", !fileFolder_r2.menuActive ? "Options Menu" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fileFolder", fileFolder_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](fileFolder_r2.name);
  }
}
function FolderComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FolderComponent_div_2_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const file_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.navigateToProfile(file_r6, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "uvx-icon-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FolderComponent_div_2_Template_uvx_icon_button_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const file_r6 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.optionsMenuClicked(file_r6, $event, ctx_r9.i));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-options-menu", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 8)(4, "uvx-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const file_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matTooltip", !file_r6.menuActive ? "Options Menu" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fileFolder", file_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](file_r6.name);
  }
}
class FolderComponent {
  // public currentFolder: any;
  // public currentFile = '';
  constructor(dataService, fileFolderService, router, route, destroy$, ref) {
    this.dataService = dataService;
    this.fileFolderService = fileFolderService;
    this.router = router;
    this.route = route;
    this.destroy$ = destroy$;
    this.ref = ref;
    this.searchResults = [];
  }
  ngOnInit() {
    this.allFolders = this.fileFolderService.getFolderFiles();
    this.getFolderFromUrlTree();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this.fileFolderService.folderFiles$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(files => this.allFolders = files)), this.fileFolderService.fileFolderSearchResults.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(results => this.searchResults = results))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(() => {
      this.ref.detectChanges();
    });
    console.log(this.searchResults.length);
  }
  ngAfterViewChecked() {
    this.searchResults.length !== 0 ? this.router.navigate(['/main/file-folder-structure'], {
      queryParamsHandling: 'merge'
    }) : null;
  }
  getFolderFromUrlTree() {
    const tree = this.router.parseUrl(this.router.url);
    const segmentGroup = tree.root.children[_angular_router__WEBPACK_IMPORTED_MODULE_10__.PRIMARY_OUTLET];
    const urlSegment = segmentGroup.segments;
    if (urlSegment[3]) {
      console.log('current folder: ', urlSegment[3].path);
      const folderName = urlSegment[3].path;
      let folder = this.allFolders.folders.find(folder => folder.name === folderName);
      this.openFolder = folder;
    } else {
      console.log('in main: ', urlSegment[0].path);
    }
  }
  navigateToFolder(fileFolder, event) {
    event.stopPropagation();
    this.fileFolderService.navigateToFolder(fileFolder);
    console.log('navigating to folder from folder', fileFolder);
  }
  navigateToProfile(file, event) {
    event.stopPropagation();
    this.fileFolderService.navigateToProfile(file);
    console.log('navigating to profile from folder');
  }
  optionsMenuClicked(fileFolder, event, index) {
    event.stopPropagation();
    !fileFolder.menuActive ? fileFolder.menuActive = true : fileFolder.menuActive = false;
    this.fileFolderService.clearFileFolderMenus(fileFolder, index);
  }
}
FolderComponent.ɵfac = function FolderComponent_Factory(t) {
  return new (t || FolderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_file_folder_service__WEBPACK_IMPORTED_MODULE_1__.FileFolderStructureService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_on_destroy_service__WEBPACK_IMPORTED_MODULE_2__.NgOnDestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
};
FolderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: FolderComponent,
  selectors: [["app-folder"]],
  decls: 3,
  vars: 2,
  consts: [[1, "flex", "flex-wrap", "gap-sm"], ["class", "file flex flex-column padding-top-xxs", 3, "click", 4, "ngFor", "ngForOf"], [1, "file", "flex", "flex-column", "padding-top-xxs", 3, "click"], ["icon", "more_vert", 1, "text-align-right", "position-relative", 3, "matTooltip", "click"], [3, "fileFolder"], [1, "flex", "align-items-center", "h-100", "justify-content-space-between", "flex-column", "padding-left-md", "padding-right-md", "padding-bottom-xs"], ["size", "xxl"], [1, "file-name"], [1, "flex", "align-items-center", "flex-column", "h-100", "justify-content-space-between", "padding-left-md", "padding-right-md", "padding-bottom-xs"]],
  template: function FolderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FolderComponent_div_1_Template, 8, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, FolderComponent_div_2_Template, 8, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.openFolder.folders);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.openFolder.files);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__.IconButtonComponent, _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_4__.UvxIconComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _options_menu_options_menu_component__WEBPACK_IMPORTED_MODULE_5__.OptionsMenuComponent],
  styles: [".file[_ngcontent-%COMP%] {\n  border: 1px solid var(--uv-color-gray);\n  background-color: var(--uv-color-white);\n  border-radius: 2px;\n  cursor: pointer;\n  width: 165px;\n  height: 167px;\n}\n.file[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--uv-box-shadow);\n  background-color: var(--uv-color-gray-light-2);\n}\n.file[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  color: var(--uv-color-primary);\n}\n.file-name[_ngcontent-%COMP%] {\n  line-height: 1.25em;\n  text-align: center;\n}"]
});

/***/ }),

/***/ 36391:
/*!*******************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/file-folder-structure/options-menu/options-menu.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsMenuComponent": () => (/* binding */ OptionsMenuComponent)
/* harmony export */ });
/* harmony import */ var _options_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options-menu */ 48535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);
/* harmony import */ var _shared_directives_click_outside_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directives/click-outside/click-outside.directive */ 81576);





function OptionsMenuComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "uvx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.title);
  }
}
class OptionsMenuComponent {
  constructor() {
    this.optionMenuItems = _options_menu__WEBPACK_IMPORTED_MODULE_0__.optionsMenu;
  }
}
OptionsMenuComponent.ɵfac = function OptionsMenuComponent_Factory(t) {
  return new (t || OptionsMenuComponent)();
};
OptionsMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: OptionsMenuComponent,
  selectors: [["app-options-menu"]],
  inputs: {
    fileFolder: "fileFolder"
  },
  decls: 3,
  vars: 3,
  consts: [[1, "options-menu", "box", 3, "clickOutside"], [1, "flex", "flex-column", "gap-xxs"], ["class", "flex gap-xs options-menu-item", 4, "ngFor", "ngForOf"], [1, "flex", "gap-xs", "options-menu-item"]],
  template: function OptionsMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("clickOutside", function OptionsMenuComponent_Template_div_clickOutside_0_listener() {
        return ctx.fileFolder.menuActive = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, OptionsMenuComponent_div_2_Template, 5, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("options-menu-display", ctx.fileFolder.menuActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.optionMenuItems);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_1__.UvxIconComponent, _shared_directives_click_outside_click_outside_directive__WEBPACK_IMPORTED_MODULE_2__.ClickOutsideDirective],
  styles: [".options-menu[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  opacity: 1;\n  position: absolute;\n  color: var(--uv-color-black);\n  text-align: left;\n  width: 125px;\n  max-width: 200px;\n  opacity: 0;\n  position: absolute;\n  box-shadow: var(--uv-box-shadow-2);\n  border-radius: 4px;\n  visibility: hidden;\n}\n.options-menu-item[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 4px 8px;\n}\n.options-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--uv-color-gray-light-2);\n}\n.options-menu-display[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}"]
});

/***/ }),

/***/ 48535:
/*!*********************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/file-folder-structure/options-menu/options-menu.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "optionsMenu": () => (/* binding */ optionsMenu)
/* harmony export */ });
const optionsMenu = [{
  title: 'Copy',
  icon: 'windows'
}, {
  title: 'Move',
  icon: 'edit_erea'
}, {
  title: 'Rename',
  icon: 'edit'
}, {
  title: 'Delete',
  icon: 'delete'
}, {
  title: 'Share',
  icon: 'share'
}, {
  title: 'Sync',
  icon: 'repeat'
}, {
  title: 'Version',
  icon: 'refresh'
}];

/***/ }),

/***/ 36272:
/*!*********************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/file-folder-structure/profile/profile.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 36053);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2994);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 7625);
/* harmony import */ var _models_entity_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/entity.model */ 45270);
/* harmony import */ var _shared_launch_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/launch-services */ 33004);
/* harmony import */ var _shared_metaDataPlaceholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/metaDataPlaceholder */ 60063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _services_on_destroy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/on-destroy.service */ 14270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ 37487);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _uv_ui_lib_src_lib_tab_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/tab/tab.component */ 38335);













function ProfileComponent_uvx_icon_button_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "uvx-icon-button", 19);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matTooltip", item_r2.tooltip)("routerLink", item_r2.link)("icon", item_r2.icon);
  }
}
function ProfileComponent_div_20_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](tag_r7);
  }
}
function ProfileComponent_div_20_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProfileComponent_div_20_div_6_div_1_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", item_r3.tags);
  }
}
function ProfileComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ProfileComponent_div_20_div_6_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r3.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r3.tags[0] != "");
  }
}
class ProfileComponent {
  constructor(ref, destroy$, router, dataService) {
    this.ref = ref;
    this.destroy$ = destroy$;
    this.router = router;
    this.dataService = dataService;
    this.metaDataItems = _shared_metaDataPlaceholder__WEBPACK_IMPORTED_MODULE_2__.metaDataPlaceholder;
    this.launchServices = _shared_launch_services__WEBPACK_IMPORTED_MODULE_1__.launchServices;
    // this.dataService.entityBeingViewed ? this.entity = this.dataService.entityBeingViewed : this.entity = emptyEntity;
  }

  ngOnInit() {
    console.log(this.entity);
    if (this.entity === _models_entity_model__WEBPACK_IMPORTED_MODULE_0__.emptyEntity) {
      this.router.navigate(['/main/file-folder-structure'], {
        queryParamsHandling: 'merge'
      });
    }
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.dataService.entityBeingViewed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(entity => this.entity = entity))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(() => this.ref.detectChanges());
  }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_on_destroy_service__WEBPACK_IMPORTED_MODULE_3__.NgOnDestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService));
};
ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  inputs: {
    entity: "entity"
  },
  decls: 21,
  vars: 4,
  consts: [[1, "box", "box-rounded", "h-100", "profile-viewer", "margin-auto"], [1, "h-100", "profile-viewer"], [1, "padding-sm", "profile-viewer-top"], [1, "flex", "justify-content-space-between", "margin-bottom-md"], [1, "flex", "justify-content-space-between"], [1, "flex", "gap-xs"], [3, "matTooltip", "routerLink", "icon", 4, "ngFor", "ngForOf"], [1, "divider-left", 2, "margin", "0"], ["icon", "more_horiz"], [1, "margin-bottom-md"], ["id", "description", 1, "profile-viewer-top-description"], [1, "uv-body"], [1, "flex"], ["mode", "horizontal", "label", "Meta Data"], ["mode", "horizontal", "label", "History"], [1, "divider"], [1, "padding-sm", "profile-viewer-metadata"], [1, "padding-sm", "metadata-container-content"], ["class", "flex margin-bottom-xs", 4, "ngFor", "ngForOf"], [3, "matTooltip", "routerLink", "icon"], [1, "flex", "margin-bottom-xs"], [1, "metadata-container-title"], [1, "uv-body", "bold"], ["class", "flex flex-wrap", 4, "ngIf"], [1, "flex", "flex-wrap"], ["class", "uv-tag", 4, "ngFor", "ngForOf"], [1, "uv-tag"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ProfileComponent_uvx_icon_button_6_Template, 1, 3, "uvx-icon-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "span", 7)(8, "uvx-icon-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "h5", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 10)(12, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "uvx-tab", 13)(16, "uvx-tab", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 16)(19, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ProfileComponent_div_20_Template, 7, 3, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.launchServices);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.entity.name ? ctx.entity.name : "", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.entity.description ? ctx.entity.description : "", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.metaDataItems);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_5__.IconButtonComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _uv_ui_lib_src_lib_tab_tab_component__WEBPACK_IMPORTED_MODULE_6__.TabComponent],
  styles: [".metadata-container[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 64px;\n}\n.metadata-container-content[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: 100%;\n}\n.metadata-container-title[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n\n.profile-viewer[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}"]
});

/***/ }),

/***/ 81271:
/*!**********************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/search/search-results/sample-search-results/allSearchResults.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allSearchResults": () => (/* binding */ allSearchResults)
/* harmony export */ });
const allSearchResults = [{
  category: 'Parts',
  name: 'API 13M-4 / ISO 13503-4',
  id: 1234,
  description: '1. The LGC NCOE has witnessed several LNG bunkering operations over the last few months and seen common errors/failures, some that have resulted in the release of LNG and/or near misses, but also others that have gone very well. It is critically important for all parties involved to fully understand the risks that are presented when transferring LNG. While LNG can be handled safely, its cryogenic, asphyxiant, and flammability hazards must be recognized and mitigated in order to avoid serious personnel injury, vessel damage, and/or other harmful effects. This LGC NCOE Field Notice augments references (a) and (b) and shares the following recommendations based off best practices and lessons learned observed during recent LNG bunkering operations in order to prevent',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Parts',
  name: 'EXH-SU-5110-B1',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Parts',
  name: 'EXH-A-SU-5110-B2',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Parts',
  name: 'EXH-B-SU-5110',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Parts',
  name: 'EXH-C-SU-5110',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Parts',
  name: 'EXH-SU-5110',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Parts',
  name: 'ZK-8285',
  id: 1234,
  description: 'CRANKSHAFT, C-302',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Parts',
  name: 'ZK-8285-0',
  id: 1234,
  description: 'CRANKSHAFT, C-302',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Parts',
  name: 'ZK-8274',
  id: 1234,
  description: 'C-202 AND',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Parts',
  name: 'ZK-8274-0',
  id: 1234,
  description: 'C-202 AND C302 COMPRESSOR FRAME',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Parts',
  name: 'ZK-8285-1',
  id: 1234,
  description: 'CRANKSHAFT COMPRESSOR',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Parts',
  name: 'ZBM-11083-X-1-B-0',
  id: 1234,
  description: 'VALVE, DIVIDER',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Parts',
  name: 'ZK-6911-A-1-309',
  id: 1234,
  description: 'PISTON - END, C.E.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Parts',
  name: 'ZK-6911-A-1-310',
  id: 1234,
  description: 'PISTON ADJ CLEAR',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Parts',
  name: 'ZK-6911-A-1-311',
  id: 1234,
  description: 'PISTON - 16.75\"\" ZD 7\"\" STROKE',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Parts',
  name: 'ZK-6911-A-1-312',
  id: 1234,
  description: 'PISTON - END, H.E.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Materials',
  name: 'Stainless Steel',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Materials',
  name: 'Ceramic',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Materials',
  name: 'Anodized Aluminum',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Materials',
  name: 'Semi-Rigid Modified Polyolefin',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Materials',
  name: 'Modified Polyolefin',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Materials',
  name: 'NBCCS',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Materials',
  name: 'Fluid Resistant Modified Elastomer',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Materials',
  name: 'Modified Fluoropolymer',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Materials',
  name: 'Modified Fluoropolymer',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Materials',
  name: 'Modified Fluoro-Elastomer',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Materials',
  name: 'Polyolefin Flexible Modified',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Materials',
  name: 'Crosslinked Ethylene Tetrafluoroethylene',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Materials',
  name: 'Crosslinked Polyvinylidene Fluoride',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}, {
  category: 'Materials',
  name: 'Irradiated Modified Polyolefin',
  id: 1234,
  description: 'This is a description of the entitity. Details and metadata may go here, and well as other useful information.',
  active: false,
  disabled: false,
  date: '',
  formattedDate: ''
}];

/***/ }),

/***/ 60063:
/*!************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/shared/metaDataPlaceholder.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metaDataPlaceholder": () => (/* binding */ metaDataPlaceholder)
/* harmony export */ });
const metaDataPlaceholder = [{
  title: 'Taxonomy',
  breadcrumbs: ['Lorem ipsum dolor sit amet consectetur adipiscing', 'Brazed Aluminum', 'Heat parameters'],
  details: '',
  tags: ['']
}, {
  title: 'Parent Text',
  breadcrumbs: [''],
  details: 'Details about the entity. Lorem ipsum dolor sit amet consectetur adipiscing. More placeholder text.',
  tags: ['']
}, {
  title: 'Key Phrases',
  breadcrumbs: [''],
  details: '',
  tags: ['Lorem ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more']
}, {
  title: 'Parameters',
  breadcrumbs: [''],
  details: '',
  tags: ['Lorem ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more']
}, {
  title: 'Values',
  breadcrumbs: [''],
  details: '',
  tags: ['']
}];

/***/ }),

/***/ 38909:
/*!*****************************************************************!*\
  !*** ./node_modules/xng-breadcrumb/fesm2020/xng-breadcrumb.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent),
/* harmony export */   "BreadcrumbItemDirective": () => (/* binding */ BreadcrumbItemDirective),
/* harmony export */   "BreadcrumbModule": () => (/* binding */ BreadcrumbModule),
/* harmony export */   "BreadcrumbService": () => (/* binding */ BreadcrumbService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 92198);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 24850);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);









/**
 * This directive is used to customize the breadcrumb label behavior
 * *xngBreadcrumbItem directive can be used in the child element of xng-breadcrumb
 * Usage: refer to the demo - app.component.html
 */
function BreadcrumbComponent_ng_container_2_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function BreadcrumbComponent_ng_container_2_a_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const breadcrumb_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r1.label);
  }
}
const _c0 = function (a0) {
  return {
    "xng-breadcrumb-link-disabled": a0
  };
};
const _c1 = function (a0, a1, a2, a3, a4, a5) {
  return {
    $implicit: a0,
    info: a1,
    last: a2,
    first: a3,
    index: a4,
    count: a5
  };
};
function BreadcrumbComponent_ng_container_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_container_2_a_2_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_ng_container_2_a_2_ng_container_2_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const breadcrumb_r1 = ctx_r12.$implicit;
    const isLast_r2 = ctx_r12.last;
    const isFirst_r3 = ctx_r12.first;
    const index_r4 = ctx_r12.index;
    const count_r5 = ctx_r12.count;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, breadcrumb_r1.disable))("routerLink", breadcrumb_r1.routeInterceptor ? breadcrumb_r1.routeInterceptor(breadcrumb_r1.routeLink, breadcrumb_r1) : breadcrumb_r1.routeLink)("queryParams", ctx_r6.preserveQueryParams ? breadcrumb_r1.queryParams : undefined)("fragment", ctx_r6.preserveFragment ? breadcrumb_r1.fragment : undefined)("target", ctx_r6.anchorTarget ? ctx_r6.anchorTarget : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", breadcrumb_r1.disable)("tabIndex", breadcrumb_r1.disable ? -1 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](12, _c1, breadcrumb_r1.label, breadcrumb_r1.info, isLast_r2, isFirst_r3, index_r4, count_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.itemTemplate);
  }
}
function BreadcrumbComponent_ng_container_2_label_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function BreadcrumbComponent_ng_container_2_label_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const breadcrumb_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r1.label);
  }
}
function BreadcrumbComponent_ng_container_2_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_container_2_label_3_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_ng_container_2_label_3_ng_container_2_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const breadcrumb_r1 = ctx_r16.$implicit;
    const isLast_r2 = ctx_r16.last;
    const isFirst_r3 = ctx_r16.first;
    const index_r4 = ctx_r16.index;
    const count_r5 = ctx_r16.count;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction6"](3, _c1, breadcrumb_r1.label, breadcrumb_r1.info, isLast_r2, isFirst_r3, index_r4, count_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.itemTemplate);
  }
}
function BreadcrumbComponent_ng_container_2_li_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function BreadcrumbComponent_ng_container_2_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.separator);
  }
}
function BreadcrumbComponent_ng_container_2_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_ng_container_2_li_4_ng_container_1_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_ng_container_2_li_4_ng_container_2_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.separatorTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.separatorTemplate);
  }
}
function BreadcrumbComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_ng_container_2_a_2_Template, 3, 19, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BreadcrumbComponent_ng_container_2_label_3_Template, 3, 10, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BreadcrumbComponent_ng_container_2_li_4_Template, 3, 2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const isLast_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isLast_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r2);
  }
}
class BreadcrumbItemDirective {}
BreadcrumbItemDirective.ɵfac = function BreadcrumbItemDirective_Factory(t) {
  return new (t || BreadcrumbItemDirective)();
};
BreadcrumbItemDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: BreadcrumbItemDirective,
  selectors: [["", "xngBreadcrumbItem", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbItemDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[xngBreadcrumbItem]'
    }]
  }], null, null);
})();
const PATH_PARAM = {
  PREFIX: ':',
  REGEX_IDENTIFIER: '/:[^/]+',
  REGEX_REPLACER: '/[^/]+'
};
const ALIAS_PREFIX = '@';
const isNonEmpty = obj => {
  return obj && Object.keys(obj).length > 0;
};
class BreadcrumbService {
  constructor(activatedRoute, router) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.baseHref = '/';
    /**
     * dynamicBreadcrumbStore holds information about dynamically updated breadcrumbs.
     * Breadcrumbs can be set from anywhere (component, service) in the app.
     * On every breadcrumb update check this store and use the info if available.
     */
    this.dynamicBreadcrumbStore = [];
    /**
     * breadcrumbList for the current route
     * When breadcrumb info is changed dynamically, check if the currentBreadcrumbs is effected
     * If effected, update the change and emit a new stream
     */
    this.currentBreadcrumbs = [];
    this.previousBreadcrumbs = [];
    /**
     * Breadcrumbs observable to be subscribed by BreadcrumbComponent
     * Emits on every route change OR dynamic update of breadcrumb
     */
    this.breadcrumbs = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.breadcrumbs$ = this.breadcrumbs.asObservable();
    this.detectRouteChanges();
  }
  /**
   * Whenever route changes build breadcrumb list again
   */
  detectRouteChanges() {
    // Special case where breadcrumb service & component instantiates after a route is navigated.
    // Ex: put breadcrumbs within *ngIf and this.router.events would be empty
    // This check is also required where  { initialNavigation: 'enabledBlocking' } is applied to routes
    this.setupBreadcrumbs(this.activatedRoute.snapshot);
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.GuardsCheckEnd)).subscribe(event => {
      // activatedRoute doesn't carry data when shouldReuseRoute returns false
      // use the event data with GuardsCheckEnd as workaround
      // Check for shouldActivate in case where the authGuard returns false the breadcrumbs shouldn't be changed
      if (event.shouldActivate) {
        this.setupBreadcrumbs(event.state.root);
      }
    });
  }
  setupBreadcrumbs(activatedRouteSnapshot) {
    this.previousBreadcrumbs = this.currentBreadcrumbs;
    // breadcrumb label for base OR root path. Usually, this can be set as 'Home'
    const rootBreadcrumb = this.getRootBreadcrumb();
    this.currentBreadcrumbs = rootBreadcrumb ? [rootBreadcrumb] : [];
    this.prepareBreadcrumbList(activatedRouteSnapshot, this.baseHref);
  }
  getRootBreadcrumb() {
    const rootConfig = this.router.config.find(config => config.path === '');
    const rootBreadcrumb = this.extractObject(rootConfig?.data?.breadcrumb);
    const storeItem = this.getFromStore(rootBreadcrumb.alias, '/');
    if (isNonEmpty(rootBreadcrumb) || isNonEmpty(storeItem)) {
      return {
        ...storeItem,
        ...rootBreadcrumb,
        routeLink: this.baseHref,
        ...this.getQueryParamsFromPreviousList('/')
      };
    }
  }
  prepareBreadcrumbItem(activatedRouteSnapshot, routeLinkPrefix) {
    const {
      path,
      breadcrumb
    } = this.parseRouteData(activatedRouteSnapshot.routeConfig);
    const resolvedSegment = this.resolvePathSegment(path, activatedRouteSnapshot);
    const routeLink = `${routeLinkPrefix}${resolvedSegment}`;
    const storeItem = this.getFromStore(breadcrumb.alias, routeLink);
    const label = this.extractLabel(storeItem?.label || breadcrumb?.label, resolvedSegment);
    let isAutoGeneratedLabel = false;
    let autoGeneratedLabel = '';
    if (!label) {
      isAutoGeneratedLabel = true;
      autoGeneratedLabel = resolvedSegment;
    }
    return {
      ...storeItem,
      ...breadcrumb,
      label: isAutoGeneratedLabel ? autoGeneratedLabel : label,
      routeLink,
      isAutoGeneratedLabel,
      ...this.getQueryParamsFromPreviousList(routeLink)
    };
  }
  prepareBreadcrumbList(activatedRouteSnapshot, routeLinkPrefix) {
    if (activatedRouteSnapshot.routeConfig?.path) {
      const breadcrumbItem = this.prepareBreadcrumbItem(activatedRouteSnapshot, routeLinkPrefix);
      this.currentBreadcrumbs.push(breadcrumbItem);
      if (activatedRouteSnapshot.firstChild) {
        return this.prepareBreadcrumbList(activatedRouteSnapshot.firstChild, breadcrumbItem.routeLink + '/');
      }
    } else if (activatedRouteSnapshot.firstChild) {
      return this.prepareBreadcrumbList(activatedRouteSnapshot.firstChild, routeLinkPrefix);
    }
    const lastCrumb = this.currentBreadcrumbs[this.currentBreadcrumbs.length - 1];
    this.setQueryParamsForActiveBreadcrumb(lastCrumb, activatedRouteSnapshot);
    // remove breadcrumb items that needs to be hidden
    const breadcrumbsToShow = this.currentBreadcrumbs.filter(item => !item.skip);
    this.breadcrumbs.next(breadcrumbsToShow);
  }
  getFromStore(alias, routeLink) {
    return this.dynamicBreadcrumbStore.find(item => {
      return alias && alias === item.alias || routeLink && routeLink === item.routeLink || this.matchRegex(routeLink, item.routeRegex);
    });
  }
  /**
   * use exact match instead of regexp.test
   * for /mentor/[^/]+ we should match '/mentor/12' but not '/mentor/12/abc'
   */
  matchRegex(routeLink, routeRegex) {
    const match = routeLink.match(new RegExp(routeRegex));
    return match?.[0] === routeLink;
  }
  /**
   * if the path segment has route params, read the param value from url
   * for each segment of route this gets called
   *
   * for mentor/:id/view - it gets called with mentor, :id, view 3 times
   */
  resolvePathSegment(segment, activatedRouteSnapshot) {
    //quirk -segment can be defined as view/:id in route config in which case you need to make it view/<resolved-param>
    if (segment.includes(PATH_PARAM.PREFIX)) {
      Object.entries(activatedRouteSnapshot.params).forEach(([key, value]) => {
        segment = segment.replace(`:${key}`, `${value}`);
      });
    }
    return segment;
  }
  /**
   * queryParams & fragments for previous breadcrumb path are copied over to new list
   */
  getQueryParamsFromPreviousList(routeLink) {
    const {
      queryParams,
      fragment
    } = this.previousBreadcrumbs.find(item => item.routeLink === routeLink) || {};
    return {
      queryParams,
      fragment
    };
  }
  /**
   * set current activated route query params to the last breadcrumb item
   */
  setQueryParamsForActiveBreadcrumb(lastItem, activatedRouteSnapshot) {
    if (lastItem) {
      const {
        queryParams,
        fragment
      } = activatedRouteSnapshot;
      lastItem.queryParams = queryParams ? {
        ...queryParams
      } : undefined;
      lastItem.fragment = fragment;
    }
  }
  /**
   * For a specific route, breadcrumb can be defined either on parent OR it's child(which has empty path)
   * When both are defined, child takes precedence
   *
   * Ex: Below we are setting breadcrumb on both parent and child.
   * So, child takes precedence and "Defined On Child" is displayed for the route 'home'
   * { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) , data: {breadcrumb: "Defined On Module"}}
   *                                                AND
   * children: [
   *   { path: '', component: ShowUserComponent, data: {breadcrumb: "Defined On Child" }
   * ]
   */
  parseRouteData(routeConfig) {
    const {
      path,
      data
    } = routeConfig;
    const breadcrumb = this.mergeWithBaseChildData(routeConfig, data?.breadcrumb);
    return {
      path,
      breadcrumb
    };
  }
  /**
   * get empty children of a module or Component. Empty child is the one with path: ''
   * When parent and it's children (that has empty route path) define data merge them both with child taking precedence
   */
  mergeWithBaseChildData(routeConfig, config) {
    if (!routeConfig) {
      return this.extractObject(config);
    }
    let baseChild;
    if (routeConfig.loadChildren) {
      // To handle a module with empty child route
      baseChild = routeConfig._loadedRoutes.find(route => route.path === '');
    } else if (routeConfig.children) {
      // To handle a component with empty child route
      baseChild = routeConfig.children.find(route => route.path === '');
    }
    const childConfig = baseChild?.data?.breadcrumb;
    return childConfig ? this.mergeWithBaseChildData(baseChild, {
      ...this.extractObject(config),
      ...this.extractObject(childConfig)
    }) : this.extractObject(config);
  }
  /**
   * Update breadcrumb dynamically
   *
   * key can be a path | alias
   *
   * 1) Using complete route path. route can be passed the same way you define angular routes
   * - path can be passed as 'exact path(routeLink)' or 'path with params(routeRegex)'
   * - update label Ex: set('/mentor', 'Mentor'), set('/mentor/:id', 'Mentor Details')
   * - change visibility Ex: set('/mentor/:id/edit', { skip: true })
   * ------------------------------------------ OR ------------------------------------------
   * 2) Using route alias (prefixed with '@'). alias should be unique for a route
   * - update label Ex: set('@mentor', 'Enabler')
   * - change visibility Ex: set('@mentorEdit', { skip: true })
   *
   *
   * value can be string | BreadcrumbObject | BreadcrumbFunction
   */
  set(key, breadcrumb) {
    const breadcrumbObject = this.extractObject(breadcrumb);
    let updateArgs;
    if (key.startsWith(ALIAS_PREFIX)) {
      updateArgs = ['alias', {
        ...breadcrumbObject,
        alias: key.slice(1)
      }];
    } else if (key.includes(PATH_PARAM.PREFIX)) {
      updateArgs = ['routeRegex', {
        ...breadcrumbObject,
        routeRegex: this.buildRegex(key)
      }];
    } else {
      updateArgs = ['routeLink', {
        ...breadcrumbObject,
        routeLink: this.ensureLeadingSlash(key)
      }];
    }
    // For this route if previously a breadcrumb is not defined that sets isAutoGeneratedLabel: true
    // change it to false since this is user supplied value
    updateArgs[1].isAutoGeneratedLabel = false;
    this.updateStore(...updateArgs);
    this.updateCurrentBreadcrumbs(...updateArgs);
  }
  /**
   * Update the store to reuse for dynamic declarations
   * If the store already has this route definition update it, else add
   */
  updateStore(key, breadcrumb) {
    const storeItemIndex = this.dynamicBreadcrumbStore.findIndex(item => {
      return breadcrumb[key] === item[key];
    });
    if (storeItemIndex > -1) {
      this.dynamicBreadcrumbStore[storeItemIndex] = {
        ...this.dynamicBreadcrumbStore[storeItemIndex],
        ...breadcrumb
      };
    } else {
      this.dynamicBreadcrumbStore.push({
        ...breadcrumb
      });
    }
  }
  /**
   * If breadcrumb is present in current breadcrumbs update it and emit new stream
   */
  updateCurrentBreadcrumbs(key, breadcrumb) {
    const itemIndex = this.currentBreadcrumbs.findIndex(item => {
      return key === 'routeRegex' ? this.matchRegex(item.routeLink, breadcrumb[key]) : breadcrumb[key] === item[key];
    });
    if (itemIndex > -1) {
      this.currentBreadcrumbs[itemIndex] = {
        ...this.currentBreadcrumbs[itemIndex],
        ...breadcrumb
      };
      const breadcrumbsToShow = this.currentBreadcrumbs.filter(item => !item.skip);
      this.breadcrumbs.next([...breadcrumbsToShow]);
    }
  }
  /**
   * For a route with path param, we create regex dynamically from angular route syntax
   * '/mentor/:id' becomes '/mentor/[^/]',
   * breadcrumbService.set('/mentor/:id', 'Uday') should update 'Uday' as label for '/mentor/2' OR 'mentor/ada'
   */
  buildRegex(path) {
    return this.ensureLeadingSlash(path).replace(new RegExp(PATH_PARAM.REGEX_IDENTIFIER, 'g'), PATH_PARAM.REGEX_REPLACER);
  }
  ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : `/${path}`;
  }
  /**
   * In App's RouteConfig, breadcrumb can be defined as a string OR a function OR an object
   *
   * string: simple static breadcrumb label for a path
   * function: callback that gets invoked with resolved path param
   * object: additional data defined along with breadcrumb label that gets passed to *xngBreadcrumbItem directive
   */
  extractLabel(config, resolvedParam) {
    const label = typeof config === 'object' ? config.label : config;
    if (typeof label === 'function') {
      return label(resolvedParam);
    }
    return label;
  }
  extractObject(config) {
    // don't include {label} if config is undefined. This is important since we merge the configs
    if (config && (typeof config === 'string' || typeof config === 'function')) {
      return {
        label: config
      };
    }
    return config || {};
  }
}
BreadcrumbService.ɵfac = function BreadcrumbService_Factory(t) {
  return new (t || BreadcrumbService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
BreadcrumbService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: BreadcrumbService,
  factory: BreadcrumbService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
    }];
  }, null);
})();
class BreadcrumbComponent {
  constructor(breadcrumbService, activateRoute) {
    this.breadcrumbService = breadcrumbService;
    this._separator = '/';
    /**
     * If true, breadcrumb is auto generated even without any mapping label
     * Default label is same as route segment
     */
    this.autoGenerate = true;
    /**
     * By default query params will be preserved with breadcrumbs
     */
    this.preserveQueryParams = true;
    /**
     * By default query fragments will be preserved with breadcrumbs
     */
    this.preserveFragment = true;
    /**
     * custom class provided by consumer to increase specificity
     * This will benefit to override styles that are conflicting
     */
    this.class = '';
    this.setupMessage = 'not set up yet';
    this.someParameterValue = null;
    // breadcrumb inside ngIf works only this way
    activateRoute.params.subscribe(params => {
      this.setupComponent(params['someParam']);
    });
  }
  /**
   * separator between breadcrumbs, defaults to '/'.
   * User can customize separator either by passing a String or Template
   *
   * String --> Ex: <xng-breadcrumb separator="-"> </xng-breadcrumb>
   *
   * Template --> Ex: <xng-breadcrumb [separator]="separatorTemplate"> </xng-breadcrumb>
   * <ng-template #separatorTemplate><mat-icon>arrow_right</mat-icon></ng-template>
   */
  set separator(value) {
    if (value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef) {
      this.separatorTemplate = value;
      this._separator = undefined;
    } else {
      this.separatorTemplate = undefined;
      this._separator = value || '/';
    }
  }
  get separator() {
    return this._separator;
  }
  setupComponent(someParam) {
    this.setupMessage = 'set up at ' + new Date();
    this.someParameterValue = someParam;
  }
  ngOnInit() {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(breadcrumbs => {
      return breadcrumbs.filter(breadcrumb => {
        // Usually, breadcrumb list can contain a combination of auto generated and user specified labels
        // this filters autogenerated labels in case of "[autoGenerate]: false"
        if (this.autoGenerate) {
          return true;
        }
        return !breadcrumb.isAutoGeneratedLabel;
      }).map(breadcrumb => {
        // Do not mutate breadcrumb as its source of truth.
        // There can be scenarios where we can have multiple xng-breadcrumb instances in page
        const {
          routeInterceptor,
          routeLink
        } = breadcrumb;
        return {
          ...breadcrumb,
          routeLink: routeInterceptor?.(routeLink, breadcrumb) || routeLink
        };
      });
    }));
  }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
  return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BreadcrumbService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
};
BreadcrumbComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BreadcrumbComponent,
  selectors: [["xng-breadcrumb"]],
  contentQueries: function BreadcrumbComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, BreadcrumbItemDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
    }
  },
  inputs: {
    autoGenerate: "autoGenerate",
    preserveQueryParams: "preserveQueryParams",
    preserveFragment: "preserveFragment",
    class: "class",
    anchorTarget: "anchorTarget",
    separator: "separator"
  },
  decls: 4,
  vars: 4,
  consts: [["aria-label", "breadcrumb", 1, "xng-breadcrumb-root", 3, "ngClass"], [1, "xng-breadcrumb-list"], [4, "ngFor", "ngForOf"], [1, "xng-breadcrumb-item"], ["class", "xng-breadcrumb-link", "role", "button", "rel", "noopener noreferrer", 3, "ngClass", "routerLink", "queryParams", "fragment", "target", 4, "ngIf"], ["class", "xng-breadcrumb-trail", 4, "ngIf"], ["class", "xng-breadcrumb-separator", "aria-hidden", "true", 4, "ngIf"], ["role", "button", "rel", "noopener noreferrer", 1, "xng-breadcrumb-link", 3, "ngClass", "routerLink", "queryParams", "fragment", "target"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [1, "xng-breadcrumb-trail"], ["aria-hidden", "true", 1, "xng-breadcrumb-separator"], [4, "ngTemplateOutlet"]],
  template: function BreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "ol", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_ng_container_2_Template, 5, 3, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.class);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.breadcrumbs$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: [".xng-breadcrumb-root{margin:0;color:#0009}.xng-breadcrumb-list{display:flex;align-items:center;flex-wrap:wrap;margin:0;padding:0}.xng-breadcrumb-item{list-style:none}.xng-breadcrumb-trail{display:flex;align-items:center;color:#000000e6}.xng-breadcrumb-link{display:flex;align-items:center;white-space:nowrap;color:inherit;text-decoration:none;transition:-webkit-text-decoration .3s;transition:text-decoration .3s;transition:text-decoration .3s,-webkit-text-decoration .3s;cursor:pointer}.xng-breadcrumb-link:hover{text-decoration:underline}.xng-breadcrumb-link-disabled{pointer-events:none;cursor:disabled}.xng-breadcrumb-separator{display:flex;-webkit-user-select:none;user-select:none;margin-left:8px;margin-right:8px}\n"],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'xng-breadcrumb',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: "<nav aria-label=\"breadcrumb\" class=\"xng-breadcrumb-root\" [ngClass]=\"class\">\n  <ol class=\"xng-breadcrumb-list\">\n    <ng-container\n      *ngFor=\"\n        let breadcrumb of breadcrumbs$ | async;\n        last as isLast;\n        first as isFirst;\n        index as index;\n        count as count\n      \"\n    >\n      <li class=\"xng-breadcrumb-item\">\n        <a\n          *ngIf=\"!isLast\"\n          class=\"xng-breadcrumb-link\"\n          [ngClass]=\"{ 'xng-breadcrumb-link-disabled': breadcrumb.disable }\"\n          [attr.aria-disabled]=\"breadcrumb.disable\"\n          [attr.tabIndex]=\"breadcrumb.disable ? -1 : 0\"\n          role=\"button\"\n          rel=\"noopener noreferrer\"\n          [routerLink]=\"\n            breadcrumb.routeInterceptor\n              ? breadcrumb.routeInterceptor(breadcrumb.routeLink, breadcrumb)\n              : breadcrumb.routeLink\n          \"\n          [queryParams]=\"\n            preserveQueryParams ? breadcrumb.queryParams : undefined\n          \"\n          [fragment]=\"preserveFragment ? breadcrumb.fragment : undefined\"\n          [target]=\"anchorTarget ? anchorTarget : '_self'\"\n        >\n          <ng-container\n            *ngTemplateOutlet=\"\n              itemTemplate;\n              context: {\n                $implicit: breadcrumb.label,\n                info: breadcrumb.info,\n                last: isLast,\n                first: isFirst,\n                index: index,\n                count: count\n              }\n            \"\n          ></ng-container>\n          <ng-container *ngIf=\"!itemTemplate\">{{\n            breadcrumb.label\n          }}</ng-container>\n        </a>\n\n        <label *ngIf=\"isLast\" class=\"xng-breadcrumb-trail\">\n          <ng-container\n            *ngTemplateOutlet=\"\n              itemTemplate;\n              context: {\n                $implicit: breadcrumb.label,\n                info: breadcrumb.info,\n                last: isLast,\n                first: isFirst,\n                index: index,\n                count: count\n              }\n            \"\n          ></ng-container>\n          <ng-container *ngIf=\"!itemTemplate\">{{\n            breadcrumb.label\n          }}</ng-container>\n        </label>\n      </li>\n\n      <li *ngIf=\"!isLast\" class=\"xng-breadcrumb-separator\" aria-hidden=\"true\">\n        <ng-container *ngTemplateOutlet=\"separatorTemplate\"></ng-container>\n        <ng-container *ngIf=\"!separatorTemplate\">{{ separator }}</ng-container>\n      </li>\n    </ng-container>\n  </ol>\n</nav>\n",
      styles: [".xng-breadcrumb-root{margin:0;color:#0009}.xng-breadcrumb-list{display:flex;align-items:center;flex-wrap:wrap;margin:0;padding:0}.xng-breadcrumb-item{list-style:none}.xng-breadcrumb-trail{display:flex;align-items:center;color:#000000e6}.xng-breadcrumb-link{display:flex;align-items:center;white-space:nowrap;color:inherit;text-decoration:none;transition:-webkit-text-decoration .3s;transition:text-decoration .3s;transition:text-decoration .3s,-webkit-text-decoration .3s;cursor:pointer}.xng-breadcrumb-link:hover{text-decoration:underline}.xng-breadcrumb-link-disabled{pointer-events:none;cursor:disabled}.xng-breadcrumb-separator{display:flex;-webkit-user-select:none;user-select:none;margin-left:8px;margin-right:8px}\n"]
    }]
  }], function () {
    return [{
      type: BreadcrumbService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
    }];
  }, {
    itemTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [BreadcrumbItemDirective, {
        static: false,
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    autoGenerate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    preserveQueryParams: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    preserveFragment: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    class: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    anchorTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    separator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['separator']
    }]
  });
})();
class BreadcrumbModule {}
BreadcrumbModule.ɵfac = function BreadcrumbModule_Factory(t) {
  return new (t || BreadcrumbModule)();
};
BreadcrumbModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: BreadcrumbModule
});
BreadcrumbModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [BreadcrumbComponent, BreadcrumbItemDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
      exports: [BreadcrumbComponent, BreadcrumbItemDirective]
    }]
  }], null, null);
})();

/*
 * Public API Surface of xng-breadcrumb
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=xng-breadcrumb.mjs.map

/***/ })

}]);