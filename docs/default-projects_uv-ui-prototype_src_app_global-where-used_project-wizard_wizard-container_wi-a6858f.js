"use strict";
(self["webpackChunkuv_ui_prototype"] = self["webpackChunkuv_ui_prototype"] || []).push([["default-projects_uv-ui-prototype_src_app_global-where-used_project-wizard_wizard-container_wi-a6858f"],{

/***/ 90378:
/*!************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/form-page/form-page.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPageComponent": () => (/* binding */ FormPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 47504);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 71265);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 10907);
/* harmony import */ var _wizard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../wizard.service */ 563);
/* harmony import */ var _side_by_side_wizard_sbs_wizard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../side-by-side/wizard/sbs-wizard.service */ 74972);
/* harmony import */ var _services_on_destroy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/on-destroy.service */ 14270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _step_directions_step_directions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../step-directions/step-directions.component */ 76845);
/* harmony import */ var _steps_steps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../steps/steps.component */ 21364);
/* harmony import */ var _uv_ui_lib_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/button/button.component */ 26218);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);
/* harmony import */ var _helper_bar_helper_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helper-bar/helper-bar.component */ 52279);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 65504);















function FormPageComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-steps", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("wizardModeIsFullscreen", ctx_r2.wizardModeFullscreen);
  }
}
function FormPageComponent_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-steps");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FormPageComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 19);
  }
}
function FormPageComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-steps");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FormPageComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 28);
  }
}
function FormPageComponent_div_0_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-step-directions", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const currentStep_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("step", currentStep_r1);
  }
}
function FormPageComponent_div_0_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-step-directions", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const currentStep_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("step", currentStep_r1);
  }
}
function FormPageComponent_div_0_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-step-directions", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const currentStep_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("step", currentStep_r1);
  }
}
function FormPageComponent_div_0_app_helper_bar_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-helper-bar");
  }
}
function FormPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FormPageComponent_div_0_div_1_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2)(3, "div")(4, "div", 3)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "uvx-icon-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FormPageComponent_div_0_Template_uvx_icon_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r14.cancelWizard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, FormPageComponent_div_0_div_10_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, FormPageComponent_div_0_div_11_Template, 1, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 8)(13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, FormPageComponent_div_0_div_14_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, FormPageComponent_div_0_div_15_Template, 1, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](17, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, FormPageComponent_div_0_ng_container_18_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, FormPageComponent_div_0_ng_container_19_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, FormPageComponent_div_0_ng_container_20_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, FormPageComponent_div_0_app_helper_bar_21_Template, 1, 0, "app-helper-bar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "span", 16)(23, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, " Total expected results: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 20)(29, "uvx-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FormPageComponent_div_0_Template_uvx_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r16.onSkipStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div")(31, "uvx-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FormPageComponent_div_0_Template_uvx_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r17.currentStepNumber.stepIndex > 1 && ctx_r17.onBackStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "uvx-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FormPageComponent_div_0_Template_uvx_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18.currentStepNumber.isComplete && ctx_r18.onNextStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const currentStep_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("form-page-container-fullscreen", ctx_r0.wizardModeFullscreen)("form-page-container", !ctx_r0.wizardModeFullscreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.wizardModeFullscreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("form-page-container-top-fullscreen", ctx_r0.wizardModeFullscreen)("form-page-container-top", !ctx_r0.wizardModeFullscreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Title of Step ", ctx_r0.currentStepNumber.stepIndex, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("This will be the location of the description to help guide you, the user, throughout step ", ctx_r0.currentStepNumber.stepIndex, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.wizardModeFullscreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.wizardModeFullscreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("fullscreen-bg", ctx_r0.wizardModeFullscreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.wizardModeFullscreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.wizardModeFullscreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("directions-fullscreen", ctx_r0.wizardModeFullscreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", currentStep_r1 == null ? null : currentStep_r1.stepIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.wizardModeFullscreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.totalResults);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.currentStepNumber.stepIndex === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r0.currentStepNumber.isComplete)("matTooltip", !ctx_r0.isLastStep ? "Go to next step" : "Finish and launch into GWU")("label", ctx_r0.getButtonLabel());
  }
}
class FormPageComponent {
  constructor(wizardService, sbsWizardService, destroy$, ref, router, route, location) {
    this.wizardService = wizardService;
    this.sbsWizardService = sbsWizardService;
    this.destroy$ = destroy$;
    this.ref = ref;
    this.router = router;
    this.route = route;
    this.location = location;
    this.onSubmitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.wizardMode = '';
    this.resultsNumber = 0;
    this.app = '';
  }
  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(queryParams => {
      this.wizardMode = queryParams['wizardMode'], this.app = queryParams['app'];
    })), this.wizardService.currentStep$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(value => this.currentStepNumber = value)), this.sbsWizardService.currentStep$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(value => this.currentStepNumber = value)), this.wizardService.wizardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(data => this.wizardData = data)), this.sbsWizardService.wizardData$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(data => this.sbsWizardData = data)), this.wizardService.results$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(value => this.resultsNumber = value)), this.sbsWizardService.results$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(value => this.resultsNumber = value))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(() => this.ref.detectChanges());
    if (this.isGwu) {
      this.currentStep$ = this.wizardService.getCurrentStep();
    } else {
      this.currentStep$ = this.sbsWizardService.getCurrentStep();
    }
  }
  ngAfterViewChecked() {
    this.ref.detectChanges();
  }
  get totalResults() {
    return this.resultsNumber > 0 ? Math.round(this.resultsNumber).toString() : 'No results';
  }
  get wizardModeFullscreen() {
    return this.wizardMode === 'fullscreen';
  }
  get isLastStep() {
    return this.isGwu ? this.wizardService.isLastStep() : this.sbsWizardService.isLastStep();
  }
  get isGwu() {
    return this.app === 'gwu';
  }
  onNextStep() {
    if (this.isGwu && !this.wizardService.isLastStep()) {
      this.wizardService.moveToNextStep();
    } else if (!this.isGwu && !this.sbsWizardService.isLastStep()) {
      this.sbsWizardService.moveToNextStep();
    } else {
      this.onSubmit();
    }
  }
  onBackStep() {
    this.isGwu ? this.wizardService.moveBackStep() : this.sbsWizardService.moveBackStep();
  }
  getButtonLabel() {
    if (this.isGwu) {
      return this.wizardService.isLastStep() ? 'Launch' : 'Next';
    } else {
      return this.sbsWizardService.isLastStep() ? 'Launch' : 'Next';
    }
  }
  onSkipStep() {
    if (this.isGwu) {
      const data = this.wizardData;
      switch (this.currentStepNumber.stepIndex) {
        case 1:
          this.wizardService.updateWizardData('stepOneSkip', true);
          this.wizardService.updateWizardData('stepOneComplete', false);
          break;
        case 2:
          this.wizardService.updateWizardData('stepTwoSkip', true);
          this.wizardService.updateWizardData('stepTwoComplete', false);
          break;
        case 3:
          this.wizardService.updateWizardData('stepThreeSkip', true);
          this.wizardService.updateWizardData('stepThreeComplete', false);
          break;
      }
      if (data.stepOneSkip && data.stepTwoSkip || data.stepOneSkip && data.stepTwoSkip && data.stepThreeSkip) {
        this.wizardService.cancelWizard();
        this.router.navigate(['main/gwu/wave'], {
          queryParams: {
            service: 'wave'
          }
        });
      } else {
        this.onNextStep();
      }
    } else {
      const data = this.sbsWizardData;
      switch (this.currentStepNumber.stepIndex) {
        case 1:
          this.sbsWizardService.updateWizardData('stepOneSkip', true);
          this.sbsWizardService.updateWizardData('stepOneComplete', false);
          break;
        case 2:
          this.sbsWizardService.updateWizardData('stepTwoSkip', true);
          this.sbsWizardService.updateWizardData('stepTwoComplete', false);
          break;
        case 3:
          this.sbsWizardService.updateWizardData('stepThreeSkip', true);
          this.sbsWizardService.updateWizardData('stepThreeComplete', false);
          break;
      }
      if (data.stepOneSkip && data.stepTwoSkip) {
        this.sbsWizardService.cancelWizard();
        this.router.navigate(['main/sbs']);
      } else {
        this.onNextStep();
      }
    }
  }
  cancelWizard() {
    this.wizardService.resetWizard();
    this.wizardService.cancelWizard();
    this.wizardModeFullscreen ? this.location.back() : null;
  }
  onSubmit() {
    console.log('submit');
    this.onSubmitEvent.emit();
    if (this.isGwu) {
      this.router.navigate(['/main/gwu'], {
        queryParams: {
          service: 'wave'
        }
      });
      this.wizardService.resetWizard();
    } else {
      this.router.navigate(['/main/sbs'], {
        queryParams: {
          app: 'sbs'
        }
      });
      this.sbsWizardService.resetWizard();
    }
  }
}
FormPageComponent.ɵfac = function FormPageComponent_Factory(t) {
  return new (t || FormPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_wizard_service__WEBPACK_IMPORTED_MODULE_0__.WizardService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_side_by_side_wizard_sbs_wizard_service__WEBPACK_IMPORTED_MODULE_1__.SbsWizardService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_on_destroy_service__WEBPACK_IMPORTED_MODULE_2__.NgOnDestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.Location));
};
FormPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: FormPageComponent,
  selectors: [["app-form-page"]],
  outputs: {
    onSubmitEvent: "onSubmitEvent"
  },
  decls: 2,
  vars: 3,
  consts: [[3, "form-page-container-fullscreen", "form-page-container", 4, "ngIf"], ["class", "app-steps-fullscreen", 4, "ngIf"], [1, "flex", "flex-column", "w-100"], [1, "flex", "justify-content-space-between", "align-items-center", "margin-bottom-xs"], ["icon", "close", "matTooltip", "Close Wizard", "size", "md", "color", "gray", 3, "click"], [1, "uv-body"], ["class", "app-steps-top", 4, "ngIf"], ["class", "divider", 4, "ngIf"], [1, "flex", "flex-column", "justify-content-space-between", "h-100"], [1, "form-page-container-middle", "flex", "justify-content-space-between"], ["class", "app-steps-side", 4, "ngIf"], ["class", "divider-right margin-right-md steps-divider-side", 4, "ngIf"], [1, "w-100", "flex", "flex-column", "justify-content-space-between", "h-100"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngIf"], [1, "total-results-container", "margin-bottom-sm", "margin-right-sm"], [1, "uv-body", "uv-font-gray", "semi-bold", "color-primary"], [1, "color-primary"], [1, "divider"], [1, "form-page-container-bottom", "flex", "justify-content-space-between", "align-items-center"], ["mode", "tertiary", "label", "Skip", "matTooltip", "Skip this step", "color", "gray", 3, "click"], ["label", "Back", "mode", "primary", "matTooltip", "Go to previous step", 1, "margin-right-sm", 3, "disabled", "click"], ["mode", "primary", 3, "disabled", "matTooltip", "label", "click"], [1, "app-steps-fullscreen"], [3, "wizardModeIsFullscreen"], [1, "app-steps-top"], [1, "app-steps-side"], [1, "divider-right", "margin-right-md", "steps-divider-side"], [3, "step"]],
  template: function FormPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, FormPageComponent_div_0_Template, 33, 29, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx.currentStep$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitchCase, _step_directions_step_directions_component__WEBPACK_IMPORTED_MODULE_3__.StepDirectionsComponent, _steps_steps_component__WEBPACK_IMPORTED_MODULE_4__.StepsComponent, _uv_ui_lib_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__.ButtonComponent, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_6__.IconButtonComponent, _helper_bar_helper_bar_component__WEBPACK_IMPORTED_MODULE_7__.HelperBarComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
  styles: ["[_ngcontent-%COMP%]:root {\n  --uv-font-family: \"Open Sans\", sans-serif;\n  --uv-font-bold: 700;\n  --uv-font-semibold: 600;\n  --uv-font-medium-bold: 500;\n  --uv-color-primary: var(--uv-color-blue);\n  --uv-color-primary-active: var(--uv-color-blue-2);\n  --uv-color-primary-hover: var(--uv-color-blue-3);\n  --uv-color-primary-light: var(--uv-color-blue-4);\n  --uv-color-success: #03a474;\n  --uv-color-success-active: #007b56;\n  --uv-color-success-light: #D6F0E9;\n  --uv-color-danger: #E28003;\n  --uv-color-danger-light: #FAEAD6;\n  --uv-color-help: var(--uv-color-purple);\n  --uv-color-help-active: var(--uv-color-purple);\n  --uv-font-color: var(--uv-color-black);\n  --uv-font-color-secondary: var(--uv-color-gray-dark);\n  --uv-scrollbar-color: var(--uv-color-gray-light-5);\n  --uv-background-color: var(--uv-color-gray-light-2);\n  --uv-svg-color-gray: var(--uv-color-gray);\n  --uv-border-color-gray: var(--uv-color-gray-2);\n  --uv-color-blue: #00A3E5;\n  --uv-color-blue-2:#0375a4;\n  --uv-color-blue-3: rgba(0,163,229,0.08);\n  --uv-color-blue-4: rgba(0, 164, 229, 0.248);\n  --uv-color-purple: #83439A;\n  --uv-color-white: #ffffff;\n  --uv-color-white-2: rgba(251, 251, 251, 0.9);\n  --uv-color-gray: #D2D2D6;\n  --uv-color-gray-2: #dddddd;\n  --uv-color-gray-3: #DBDBDB;\n  --uv-color-gray-4: #4a4a4a;\n  --uv-color-gray-dark: #6E6D7A;\n  --uv-color-gray-light: #F3F3F4;\n  --uv-color-gray-light-2: #f1f1f1;\n  --uv-color-gray-light-3: #f7f7f7;\n  --uv-color-gray-light-4: #EDEDEE;\n  --uv-color-gray-light-5: #E7E7E9;\n  --uv-color-gray-light-6: #F9F9F9;\n  --uv-color-black: #0D0C22;\n  --uv-header-height: 64px;\n  --uv-navbar-width: 64px;\n  --uv-sidebar-width-md: 336px;\n  --uv-sidebar-width-sm: 288px;\n  --uv-grid-gap-vertical: 24px;\n  --uv-grid-gap-horizontal: 24px;\n  --uv-icon-bg: 400px;\n  --uv-box-shadow: 0 2px 12px 0 rgba(234, 234, 234, 0.5);\n  --uv-box-shadow-2: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n  --uv-box-shadow-3: 0 4px 12px 0 rgba(0, 0, 0, 0.1);\n  --uv-box-shadow-4: 0 4px 16px 0 rgba(0,0,0,0.16);\n  --uv-box-shadow-hover: 0 4px 8px 0 rgba(0, 0, 0, 0.16);\n  --uv-box-shadow-hover-2: 0 4px 8px 0 rgba(0, 0, 0, 0.16);\n  --uv-box-shadow-big: 0 24px 144px 0 rgba(0,0,0,0.12);\n  --uv-border-gray: 1px solid var(--uv-border-color-gray);\n  --uv-linear-gradient: linear-gradient(180deg, #84439971 0%, #4acaf571 100%);\n  --uv-font-size-xs: 12px;\n  --uv-font-size-sm: 14px;\n  --uv-font-size-sm-md: 16px;\n  --uv-font-size-md: 18px;\n  --uv-font-size-md-lg: 20px;\n  --uv-font-size-lg: 24px;\n  --uv-font-size-xl: 28px;\n  --uv-font-size-xxl: 36px;\n  --uv-xxxs-size: 4px;\n  --uv-xxs-size: 8px;\n  --uv-xs-size: 16px;\n  --uv-sm-size: 24px;\n  --uv-md-size: 32px;\n  --uv-lg-size: 48px;\n  --uv-xl-size: 64px;\n  --uv-z-index-popup: 2000;\n  --uv-z-index-popup-backdrop: 1080;\n  --uv-z-index-uv-light-backdrop: 1075;\n  --uv-z-index-navbar: 1070;\n  --uv-z-index-search-sidebar-dropdown: 1065;\n  --uv-z-index-search-sidebar-toolmenu: 1061;\n  --uv-z-index-search-sidebar: 1060;\n  --uv-z-index-wallet-sidebar: 1055;\n  --uv-z-index-wallet-entity-preview: 1050;\n  --uv-z-index-search-backdrop: 1050;\n  --uv-z-index-header: 950;\n  --uv-z-index-action-bar: 900;\n  --uv-z-index-sidebar-1: 800;\n  --uv-z-index-sidebar-2: 750;\n}\n\n.form-page-container[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: auto;\n}\n.form-page-container-top[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.form-page-container-top-fullscreen[_ngcontent-%COMP%] {\n  border-bottom: var(--uv-border-gray);\n  box-shadow: var(--uv-box-shadow);\n  padding: 18px 32px;\n  background-color: var(--uv-color-gray-light-6);\n}\n@media (max-height: 800px) {\n  .form-page-container-top[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n}\n.form-page-container-middle[_ngcontent-%COMP%] {\n  padding: 32px;\n  height: calc(100vh - 315px);\n  overflow-y: auto;\n  overflow-x: hidden;\n  width: 100%;\n}\n@media (max-height: 800px) {\n  .form-page-container-middle[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n}\n@media (max-width: 1200px) {\n  .form-page-container-middle[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n}\n.form-page-container-bottom[_ngcontent-%COMP%] {\n  padding: 32px;\n  background-color: var(--uv-color-white);\n}\n@media (max-height: 800px) {\n  .form-page-container-bottom[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n}\n.form-page-container-fullscreen[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n}\n\n.directions-fullscreen[_ngcontent-%COMP%] {\n  width: 72%;\n  max-height: inherit;\n  padding: 18px;\n}\n\n@media (max-height: 800px) {\n  .app-steps-top[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.app-steps-fullscreen[_ngcontent-%COMP%] {\n  min-width: 182px;\n  border-right: var(--uv-border-gray);\n  box-shadow: var(--uv-box-shadow);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 18px;\n  height: 100%;\n}\n\n.app-steps-side[_ngcontent-%COMP%] {\n  min-width: 125px;\n  min-height: 270px;\n}\n@media (min-height: 800px) {\n  .app-steps-side[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (min-height: 800px) {\n  .steps-divider-side[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.fullscreen-bg[_ngcontent-%COMP%] {\n  background-color: var(--uv-color-gray-light-6);\n}\n\n.total-results-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  right: 0;\n  bottom: 0;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHV2LXVpLWxpYlxcc3JjXFxsaWJcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsImZvcm0tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QkE7RUFDSSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUdBLHdDQUFBO0VBQ0EsaURBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsOENBQUE7RUFDQSxzQ0FBQTtFQUNBLG9EQUFBO0VBQ0Esa0RBQUE7RUFDQSxtREFBQTtFQUNBLHlDQUFBO0VBQ0EsOENBQUE7RUFFQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQ0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUdBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBR0Esc0RBQUE7RUFDQSxrREFBQTtFQUNBLGtEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxzREFBQTtFQUNBLHdEQUFBO0VBQ0Esb0RBQUE7RUFDQSx1REFBQTtFQUNBLDJFQUFBO0VBR0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBR0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQzFDSjs7QUFwRkE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7QUF1Rko7QUFyRkk7RUFDSSxhQUFBO0FBdUZSO0FBckZRO0VBQ0ksb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7QUF1Rlo7QUQwQ1E7RUN4SUo7SUFXUSxhQUFBO0VBdUZWO0FBQ0Y7QUFwRkk7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQXNGUjtBRDhCUTtFQ3pISjtJQVFRLGFBQUE7RUF1RlY7QUFDRjtBRDRCUTtFQzVISjtJQVdRLGFBQUE7RUF5RlY7QUFDRjtBQXRGSTtFQUNJLGFBQUE7RUFDQSx1Q0FBQTtBQXdGUjtBRGdCUTtFQzFHSjtJQUlRLGFBQUE7RUEwRlY7QUFDRjtBQXZGSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBeUZSOztBQXJGQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUF3Rko7O0FEQ1E7RUN0RlI7SUFFUSxhQUFBO0VBd0ZOO0FBQ0Y7O0FBckZBO0VBQ0ksZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUF3Rko7O0FBckZBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQXdGSjtBRGZRO0VDM0VSO0lBSVEsYUFBQTtFQTBGTjtBQUNGOztBRHBCUTtFQ25FUjtJQUVRLGFBQUE7RUEwRk47QUFDRjs7QUF2RkE7RUFDSSw4Q0FBQTtBQTBGSjs7QUF2RkE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQTBGSiIsImZpbGUiOiJmb3JtLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZm9udC1mYWNlIHtcbi8vICAgICBmb250LWZhbWlseTogJ05vdG8gU2Fucyc7XG4vLyAgICAgc3JjOiB1cmwoXCJodHRwczovL2RwemFxMXdqMjFjbzMuY2xvdWRmcm9udC5uZXQvZm9udHMvTm90b19TYW5zL05vdG9TYW5zLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyB9XG5cbi8vIEBmb250LWZhY2Uge1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJztcbi8vICAgICBzcmM6IHVybChcImh0dHBzOi8vZHB6YXExd2oyMWNvMy5jbG91ZGZyb250Lm5ldC9mb250cy9Ob3RvX1NhbnMvTm90b1NhbnMtTWVkaXVtLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xuLy8gfVxuXG4vLyBAZm9udC1mYWNlIHtcbi8vICAgICBmb250LWZhbWlseTogJ05vdG8gU2Fucyc7XG4vLyAgICAgc3JjOiB1cmwoXCJodHRwczovL2RwemFxMXdqMjFjbzMuY2xvdWRmcm9udC5uZXQvZm9udHMvTm90b19TYW5zL05vdG9TYW5zLVNlbWlCb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbi8vICAgICBmb250LXdlaWdodDogNjAwO1xuLy8gfVxuXG4vLyBAZm9udC1mYWNlIHtcbi8vICAgICBmb250LWZhbWlseTogJ05vdG8gU2Fucyc7XG4vLyAgICAgc3JjOiB1cmwoXCJodHRwczovL2RwemFxMXdqMjFjbzMuY2xvdWRmcm9udC5uZXQvZm9udHMvTm90b19TYW5zL05vdG9TYW5zLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4vLyB9XG5cbi8vIEBmb250LWZhY2Uge1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJztcbi8vICAgICBzcmM6IHVybChcImh0dHBzOi8vZHB6YXExd2oyMWNvMy5jbG91ZGZyb250Lm5ldC9mb250cy9Ob3RvX1NhbnMvTm90b1NhbnMtSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbi8vICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4vLyB9XG5cbjpyb290IHtcbiAgICAtLXV2LWZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAtLXV2LWZvbnQtYm9sZDogNzAwO1xuICAgIC0tdXYtZm9udC1zZW1pYm9sZDogNjAwO1xuICAgIC0tdXYtZm9udC1tZWRpdW0tYm9sZDogNTAwO1xuXG4gICAgLy9jb2xvcnNcbiAgICAtLXV2LWNvbG9yLXByaW1hcnk6IHZhcigtLXV2LWNvbG9yLWJsdWUpO1xuICAgIC0tdXYtY29sb3ItcHJpbWFyeS1hY3RpdmU6IHZhcigtLXV2LWNvbG9yLWJsdWUtMik7XG4gICAgLS11di1jb2xvci1wcmltYXJ5LWhvdmVyOiB2YXIoLS11di1jb2xvci1ibHVlLTMpO1xuICAgIC0tdXYtY29sb3ItcHJpbWFyeS1saWdodDogdmFyKC0tdXYtY29sb3ItYmx1ZS00KTtcbiAgICAtLXV2LWNvbG9yLXN1Y2Nlc3M6ICMwM2E0NzQ7XG4gICAgLS11di1jb2xvci1zdWNjZXNzLWFjdGl2ZTogIzAwN2I1NjtcbiAgICAtLXV2LWNvbG9yLXN1Y2Nlc3MtbGlnaHQ6ICNENkYwRTk7XG4gICAgLS11di1jb2xvci1kYW5nZXI6ICNFMjgwMDM7XG4gICAgLS11di1jb2xvci1kYW5nZXItbGlnaHQ6ICNGQUVBRDY7XG4gICAgLS11di1jb2xvci1oZWxwOiB2YXIoLS11di1jb2xvci1wdXJwbGUpO1xuICAgIC0tdXYtY29sb3ItaGVscC1hY3RpdmU6IHZhcigtLXV2LWNvbG9yLXB1cnBsZSk7XG4gICAgLS11di1mb250LWNvbG9yOiB2YXIoLS11di1jb2xvci1ibGFjayk7XG4gICAgLS11di1mb250LWNvbG9yLXNlY29uZGFyeTogdmFyKC0tdXYtY29sb3ItZ3JheS1kYXJrKTtcbiAgICAtLXV2LXNjcm9sbGJhci1jb2xvcjogdmFyKC0tdXYtY29sb3ItZ3JheS1saWdodC01KTtcbiAgICAtLXV2LWJhY2tncm91bmQtY29sb3I6IHZhcigtLXV2LWNvbG9yLWdyYXktbGlnaHQtMik7XG4gICAgLS11di1zdmctY29sb3ItZ3JheTogdmFyKC0tdXYtY29sb3ItZ3JheSk7XG4gICAgLS11di1ib3JkZXItY29sb3ItZ3JheTogdmFyKC0tdXYtY29sb3ItZ3JheS0yKTtcblxuICAgIC0tdXYtY29sb3ItYmx1ZTogIzAwQTNFNTtcbiAgICAtLXV2LWNvbG9yLWJsdWUtMjojMDM3NWE0O1xuICAgIC0tdXYtY29sb3ItYmx1ZS0zOiByZ2JhKDAsMTYzLDIyOSwwLjA4KTtcbiAgICAtLXV2LWNvbG9yLWJsdWUtNDogcmdiYSgwLCAxNjQsIDIyOSwgMC4yNDgpO1xuICAgIC0tdXYtY29sb3ItcHVycGxlOiAjODM0MzlBO1xuICAgIC0tdXYtY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4gICAgLS11di1jb2xvci13aGl0ZS0yOiByZ2JhKDI1MSwgMjUxLCAyNTEsIDAuOSk7XG4gICAgLS11di1jb2xvci1ncmF5OiAjRDJEMkQ2O1xuICAgIC0tdXYtY29sb3ItZ3JheS0yOiAjZGRkZGRkO1xuICAgIC0tdXYtY29sb3ItZ3JheS0zOiAjREJEQkRCO1xuICAgIC0tdXYtY29sb3ItZ3JheS00OiAjNGE0YTRhO1xuICAgIC0tdXYtY29sb3ItZ3JheS1kYXJrOiAjNkU2RDdBO1xuICAgIC0tdXYtY29sb3ItZ3JheS1saWdodDogI0YzRjNGNDtcbiAgICAtLXV2LWNvbG9yLWdyYXktbGlnaHQtMjogI2YxZjFmMTtcbiAgICAtLXV2LWNvbG9yLWdyYXktbGlnaHQtMzogI2Y3ZjdmNztcbiAgICAtLXV2LWNvbG9yLWdyYXktbGlnaHQtNDogI0VERURFRTtcbiAgICAtLXV2LWNvbG9yLWdyYXktbGlnaHQtNTogI0U3RTdFOTtcbiAgICAtLXV2LWNvbG9yLWdyYXktbGlnaHQtNjogI0Y5RjlGOTtcbiAgICAtLXV2LWNvbG9yLWJsYWNrOiAjMEQwQzIyO1xuXG4gICAgLy9zaXplc1xuICAgIC0tdXYtaGVhZGVyLWhlaWdodDogNjRweDtcbiAgICAtLXV2LW5hdmJhci13aWR0aDogNjRweDtcbiAgICAtLXV2LXNpZGViYXItd2lkdGgtbWQ6IDMzNnB4O1xuICAgIC0tdXYtc2lkZWJhci13aWR0aC1zbTogMjg4cHg7XG4gICAgLS11di1ncmlkLWdhcC12ZXJ0aWNhbDogMjRweDtcbiAgICAtLXV2LWdyaWQtZ2FwLWhvcml6b250YWw6IDI0cHg7XG4gICAgLS11di1pY29uLWJnOiA0MDBweDtcblxuICAgIC8vc3R5bGVzXG4gICAgLS11di1ib3gtc2hhZG93OiAwIDJweCAxMnB4IDAgcmdiYSgyMzQsIDIzNCwgMjM0LCAwLjUpO1xuICAgIC0tdXYtYm94LXNoYWRvdy0yOiAwIDRweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIC0tdXYtYm94LXNoYWRvdy0zOiAwIDRweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIC0tdXYtYm94LXNoYWRvdy00OiAwIDRweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjE2KTtcbiAgICAtLXV2LWJveC1zaGFkb3ctaG92ZXI6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgLS11di1ib3gtc2hhZG93LWhvdmVyLTI6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgLS11di1ib3gtc2hhZG93LWJpZzogMCAyNHB4IDE0NHB4IDAgcmdiYSgwLDAsMCwwLjEyKTtcbiAgICAtLXV2LWJvcmRlci1ncmF5OiAxcHggc29saWQgdmFyKC0tdXYtYm9yZGVyLWNvbG9yLWdyYXkpO1xuICAgIC0tdXYtbGluZWFyLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjODQ0Mzk5NzEgMCUsICM0YWNhZjU3MSAxMDAlKTtcblxuICAgIC8vdHlwb2dyYXBoeVxuICAgIC0tdXYtZm9udC1zaXplLXhzOiAxMnB4O1xuICAgIC0tdXYtZm9udC1zaXplLXNtOiAxNHB4O1xuICAgIC0tdXYtZm9udC1zaXplLXNtLW1kOiAxNnB4O1xuICAgIC0tdXYtZm9udC1zaXplLW1kOiAxOHB4O1xuICAgIC0tdXYtZm9udC1zaXplLW1kLWxnOiAyMHB4O1xuICAgIC0tdXYtZm9udC1zaXplLWxnOiAyNHB4O1xuICAgIC0tdXYtZm9udC1zaXplLXhsOiAyOHB4O1xuICAgIC0tdXYtZm9udC1zaXplLXh4bDogMzZweDtcblxuICAgIC8vc2l6ZXNcbiAgICAtLXV2LXh4eHMtc2l6ZTogNHB4O1xuICAgIC0tdXYteHhzLXNpemU6IDhweDtcbiAgICAtLXV2LXhzLXNpemU6IDE2cHg7XG4gICAgLS11di1zbS1zaXplOiAyNHB4O1xuICAgIC0tdXYtbWQtc2l6ZTogMzJweDtcbiAgICAtLXV2LWxnLXNpemU6IDQ4cHg7XG4gICAgLS11di14bC1zaXplOiA2NHB4O1xuXG4gICAgLy96LWluZGV4XG4gICAgLS11di16LWluZGV4LXBvcHVwOiAyMDAwO1xuICAgIC0tdXYtei1pbmRleC1wb3B1cC1iYWNrZHJvcDogMTA4MDtcbiAgICAtLXV2LXotaW5kZXgtdXYtbGlnaHQtYmFja2Ryb3A6IDEwNzU7XG4gICAgLS11di16LWluZGV4LW5hdmJhcjogMTA3MDtcbiAgICAtLXV2LXotaW5kZXgtc2VhcmNoLXNpZGViYXItZHJvcGRvd246IDEwNjU7XG4gICAgLS11di16LWluZGV4LXNlYXJjaC1zaWRlYmFyLXRvb2xtZW51OiAxMDYxO1xuICAgIC0tdXYtei1pbmRleC1zZWFyY2gtc2lkZWJhcjogMTA2MDtcbiAgICAtLXV2LXotaW5kZXgtd2FsbGV0LXNpZGViYXI6IDEwNTU7XG4gICAgLS11di16LWluZGV4LXdhbGxldC1lbnRpdHktcHJldmlldzogMTA1MDtcbiAgICAtLXV2LXotaW5kZXgtc2VhcmNoLWJhY2tkcm9wOiAxMDUwO1xuICAgIC0tdXYtei1pbmRleC1oZWFkZXI6IDk1MDtcbiAgICAtLXV2LXotaW5kZXgtYWN0aW9uLWJhcjogOTAwO1xuICAgIC0tdXYtei1pbmRleC1zaWRlYmFyLTE6IDgwMDtcbiAgICAtLXV2LXotaW5kZXgtc2lkZWJhci0yOiA3NTA7XG59XG5cbkBtaXhpbiByZXNwb25kKCRicmVha3BvaW50KSB7XG4gICAgLy8gQGlmICRicmVha3BvaW50ID09IHBob25lIHtcbiAgICAvLyAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3LjVlbSkgeyBAY29udGVudCB9OyAvLzYwMHB4XG4gICAgLy8gfVxuICAgIC8vIEBpZiAkYnJlYWtwb2ludCA9PSB0YWItcG9ydCB7XG4gICAgLy8gICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7IEBjb250ZW50IH07IC8vOTAwcHhcbiAgICAvLyB9XG4gICAgQGlmICRicmVha3BvaW50ID09IHRhYi1sYW5kIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgeyBAY29udGVudCB9O1xuICAgIH1cbiAgICBAaWYgJGJyZWFrcG9pbnQgPT0gc21hbGwtZGVza3RvcC1oZWlnaHQge1xuICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDgwMHB4KSB7IEBjb250ZW50IH07XG4gICAgfVxuICAgIEBpZiAkYnJlYWtwb2ludCA9PSBzbWFsbC1kZXNrdG9wLXdpZHRoIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgeyBAY29udGVudCB9OyBcbiAgICB9XG4gICAgQGlmICRicmVha3BvaW50ID09IGJpZy1kZXNrdG9wLWhlaWdodCB7XG4gICAgICAgIEBtZWRpYSAobWluLWhlaWdodDogODAwcHgpIHsgQGNvbnRlbnQgfTsgXG4gICAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL3V2LXVpLWxpYi9zcmMvbGliL3Njc3MvdmFyaWFibGVzXCI7XG5cbi5mb3JtLXBhZ2UtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiBhdXRvO1xuXG4gICAgJi10b3Age1xuICAgICAgICBwYWRkaW5nOiAzMnB4O1xuXG4gICAgICAgICYtZnVsbHNjcmVlbiB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiB2YXIoLS11di1ib3JkZXItZ3JheSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS11di1ib3gtc2hhZG93KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMzJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXV2LWNvbG9yLWdyYXktbGlnaHQtNik7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSByZXNwb25kKHNtYWxsLWRlc2t0b3AtaGVpZ2h0KSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1taWRkbGUge1xuICAgICAgICBwYWRkaW5nOiAzMnB4O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMTVweCk7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChzbWFsbC1kZXNrdG9wLWhlaWdodCkge1xuICAgICAgICAgICAgcGFkZGluZzogMThweDtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSByZXNwb25kKHNtYWxsLWRlc2t0b3Atd2lkdGgpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWJvdHRvbSB7XG4gICAgICAgIHBhZGRpbmc6IDMycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXV2LWNvbG9yLXdoaXRlKTtcbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChzbWFsbC1kZXNrdG9wLWhlaWdodCkge1xuICAgICAgICAgICAgcGFkZGluZzogMThweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtZnVsbHNjcmVlbiB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG59XG5cbi5kaXJlY3Rpb25zLWZ1bGxzY3JlZW4ge1xuICAgIHdpZHRoOiA3MiU7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAxOHB4O1xufVxuXG4uYXBwLXN0ZXBzLXRvcCB7XG4gICAgQGluY2x1ZGUgcmVzcG9uZChzbWFsbC1kZXNrdG9wLWhlaWdodCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLmFwcC1zdGVwcy1mdWxsc2NyZWVuIHtcbiAgICBtaW4td2lkdGg6IDE4MnB4O1xuICAgIGJvcmRlci1yaWdodDogdmFyKC0tdXYtYm9yZGVyLWdyYXkpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXV2LWJveC1zaGFkb3cpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmFwcC1zdGVwcy1zaWRlIHtcbiAgICBtaW4td2lkdGg6IDEyNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDI3MHB4O1xuICAgIEBpbmNsdWRlIHJlc3BvbmQoYmlnLWRlc2t0b3AtaGVpZ2h0KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4uc3RlcHMtZGl2aWRlci1zaWRlIHtcbiAgICBAaW5jbHVkZSByZXNwb25kKGJpZy1kZXNrdG9wLWhlaWdodCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLmZ1bGxzY3JlZW4tYmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXV2LWNvbG9yLWdyYXktbGlnaHQtNik7XG59XG5cbi50b3RhbC1yZXN1bHRzLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLWxpYi9zcmMvbGliL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vcHJvamVjdHMvdXYtdWktcHJvdG90eXBlL3NyYy9hcHAvZ2xvYmFsLXdoZXJlLXVzZWQvcHJvamVjdC13aXphcmQvZm9ybS1wYWdlL2Zvcm0tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QkE7RUFDSSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUdBLHdDQUFBO0VBQ0EsaURBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsOENBQUE7RUFDQSxzQ0FBQTtFQUNBLG9EQUFBO0VBQ0Esa0RBQUE7RUFDQSxtREFBQTtFQUNBLHlDQUFBO0VBQ0EsOENBQUE7RUFFQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQ0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUdBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBR0Esc0RBQUE7RUFDQSxrREFBQTtFQUNBLGtEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxzREFBQTtFQUNBLHdEQUFBO0VBQ0Esb0RBQUE7RUFDQSx1REFBQTtFQUNBLDJFQUFBO0VBR0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBR0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQzFDSjs7QUFwRkE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7QUF1Rko7QUFyRkk7RUFDSSxhQUFBO0FBdUZSO0FBckZRO0VBQ0ksb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7QUF1Rlo7QUQwQ1E7RUN4SUo7SUFXUSxhQUFBO0VBdUZWO0FBQ0Y7QUFwRkk7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQXNGUjtBRDhCUTtFQ3pISjtJQVFRLGFBQUE7RUF1RlY7QUFDRjtBRDRCUTtFQzVISjtJQVdRLGFBQUE7RUF5RlY7QUFDRjtBQXRGSTtFQUNJLGFBQUE7RUFDQSx1Q0FBQTtBQXdGUjtBRGdCUTtFQzFHSjtJQUlRLGFBQUE7RUEwRlY7QUFDRjtBQXZGSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBeUZSOztBQXJGQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUF3Rko7O0FEQ1E7RUN0RlI7SUFFUSxhQUFBO0VBd0ZOO0FBQ0Y7O0FBckZBO0VBQ0ksZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUF3Rko7O0FBckZBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQXdGSjtBRGZRO0VDM0VSO0lBSVEsYUFBQTtFQTBGTjtBQUNGOztBRHBCUTtFQ25FUjtJQUVRLGFBQUE7RUEwRk47QUFDRjs7QUF2RkE7RUFDSSw4Q0FBQTtBQTBGSjs7QUF2RkE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQTBGSjtBQUNBLGc3WEFBZzdYIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZvbnQtZmFjZSB7XG4vLyAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnO1xuLy8gICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9kcHphcTF3ajIxY28zLmNsb3VkZnJvbnQubmV0L2ZvbnRzL05vdG9fU2Fucy9Ob3RvU2Fucy1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbi8vICAgICBmb250LXdlaWdodDogNDAwO1xuLy8gfVxuXG4vLyBAZm9udC1mYWNlIHtcbi8vICAgICBmb250LWZhbWlseTogJ05vdG8gU2Fucyc7XG4vLyAgICAgc3JjOiB1cmwoXCJodHRwczovL2RwemFxMXdqMjFjbzMuY2xvdWRmcm9udC5uZXQvZm9udHMvTm90b19TYW5zL05vdG9TYW5zLU1lZGl1bS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbi8vIH1cblxuLy8gQGZvbnQtZmFjZSB7XG4vLyAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnO1xuLy8gICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9kcHphcTF3ajIxY28zLmNsb3VkZnJvbnQubmV0L2ZvbnRzL05vdG9fU2Fucy9Ob3RvU2Fucy1TZW1pQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbi8vIH1cblxuLy8gQGZvbnQtZmFjZSB7XG4vLyAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnO1xuLy8gICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9kcHphcTF3ajIxY28zLmNsb3VkZnJvbnQubmV0L2ZvbnRzL05vdG9fU2Fucy9Ob3RvU2Fucy1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbi8vICAgICBmb250LXdlaWdodDogNzAwO1xuLy8gfVxuXG4vLyBAZm9udC1mYWNlIHtcbi8vICAgICBmb250LWZhbWlseTogJ05vdG8gU2Fucyc7XG4vLyAgICAgc3JjOiB1cmwoXCJodHRwczovL2RwemFxMXdqMjFjbzMuY2xvdWRmcm9udC5uZXQvZm9udHMvTm90b19TYW5zL05vdG9TYW5zLUl0YWxpYy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4vLyAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuLy8gfVxuXG46cm9vdCB7XG4gICAgLS11di1mb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgLS11di1mb250LWJvbGQ6IDcwMDtcbiAgICAtLXV2LWZvbnQtc2VtaWJvbGQ6IDYwMDtcbiAgICAtLXV2LWZvbnQtbWVkaXVtLWJvbGQ6IDUwMDtcblxuICAgIC8vY29sb3JzXG4gICAgLS11di1jb2xvci1wcmltYXJ5OiB2YXIoLS11di1jb2xvci1ibHVlKTtcbiAgICAtLXV2LWNvbG9yLXByaW1hcnktYWN0aXZlOiB2YXIoLS11di1jb2xvci1ibHVlLTIpO1xuICAgIC0tdXYtY29sb3ItcHJpbWFyeS1ob3ZlcjogdmFyKC0tdXYtY29sb3ItYmx1ZS0zKTtcbiAgICAtLXV2LWNvbG9yLXByaW1hcnktbGlnaHQ6IHZhcigtLXV2LWNvbG9yLWJsdWUtNCk7XG4gICAgLS11di1jb2xvci1zdWNjZXNzOiAjMDNhNDc0O1xuICAgIC0tdXYtY29sb3Itc3VjY2Vzcy1hY3RpdmU6ICMwMDdiNTY7XG4gICAgLS11di1jb2xvci1zdWNjZXNzLWxpZ2h0OiAjRDZGMEU5O1xuICAgIC0tdXYtY29sb3ItZGFuZ2VyOiAjRTI4MDAzO1xuICAgIC0tdXYtY29sb3ItZGFuZ2VyLWxpZ2h0OiAjRkFFQUQ2O1xuICAgIC0tdXYtY29sb3ItaGVscDogdmFyKC0tdXYtY29sb3ItcHVycGxlKTtcbiAgICAtLXV2LWNvbG9yLWhlbHAtYWN0aXZlOiB2YXIoLS11di1jb2xvci1wdXJwbGUpO1xuICAgIC0tdXYtZm9udC1jb2xvcjogdmFyKC0tdXYtY29sb3ItYmxhY2spO1xuICAgIC0tdXYtZm9udC1jb2xvci1zZWNvbmRhcnk6IHZhcigtLXV2LWNvbG9yLWdyYXktZGFyayk7XG4gICAgLS11di1zY3JvbGxiYXItY29sb3I6IHZhcigtLXV2LWNvbG9yLWdyYXktbGlnaHQtNSk7XG4gICAgLS11di1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11di1jb2xvci1ncmF5LWxpZ2h0LTIpO1xuICAgIC0tdXYtc3ZnLWNvbG9yLWdyYXk6IHZhcigtLXV2LWNvbG9yLWdyYXkpO1xuICAgIC0tdXYtYm9yZGVyLWNvbG9yLWdyYXk6IHZhcigtLXV2LWNvbG9yLWdyYXktMik7XG5cbiAgICAtLXV2LWNvbG9yLWJsdWU6ICMwMEEzRTU7XG4gICAgLS11di1jb2xvci1ibHVlLTI6IzAzNzVhNDtcbiAgICAtLXV2LWNvbG9yLWJsdWUtMzogcmdiYSgwLDE2MywyMjksMC4wOCk7XG4gICAgLS11di1jb2xvci1ibHVlLTQ6IHJnYmEoMCwgMTY0LCAyMjksIDAuMjQ4KTtcbiAgICAtLXV2LWNvbG9yLXB1cnBsZTogIzgzNDM5QTtcbiAgICAtLXV2LWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuICAgIC0tdXYtY29sb3Itd2hpdGUtMjogcmdiYSgyNTEsIDI1MSwgMjUxLCAwLjkpO1xuICAgIC0tdXYtY29sb3ItZ3JheTogI0QyRDJENjtcbiAgICAtLXV2LWNvbG9yLWdyYXktMjogI2RkZGRkZDtcbiAgICAtLXV2LWNvbG9yLWdyYXktMzogI0RCREJEQjtcbiAgICAtLXV2LWNvbG9yLWdyYXktNDogIzRhNGE0YTtcbiAgICAtLXV2LWNvbG9yLWdyYXktZGFyazogIzZFNkQ3QTtcbiAgICAtLXV2LWNvbG9yLWdyYXktbGlnaHQ6ICNGM0YzRjQ7XG4gICAgLS11di1jb2xvci1ncmF5LWxpZ2h0LTI6ICNmMWYxZjE7XG4gICAgLS11di1jb2xvci1ncmF5LWxpZ2h0LTM6ICNmN2Y3Zjc7XG4gICAgLS11di1jb2xvci1ncmF5LWxpZ2h0LTQ6ICNFREVERUU7XG4gICAgLS11di1jb2xvci1ncmF5LWxpZ2h0LTU6ICNFN0U3RTk7XG4gICAgLS11di1jb2xvci1ncmF5LWxpZ2h0LTY6ICNGOUY5Rjk7XG4gICAgLS11di1jb2xvci1ibGFjazogIzBEMEMyMjtcblxuICAgIC8vc2l6ZXNcbiAgICAtLXV2LWhlYWRlci1oZWlnaHQ6IDY0cHg7XG4gICAgLS11di1uYXZiYXItd2lkdGg6IDY0cHg7XG4gICAgLS11di1zaWRlYmFyLXdpZHRoLW1kOiAzMzZweDtcbiAgICAtLXV2LXNpZGViYXItd2lkdGgtc206IDI4OHB4O1xuICAgIC0tdXYtZ3JpZC1nYXAtdmVydGljYWw6IDI0cHg7XG4gICAgLS11di1ncmlkLWdhcC1ob3Jpem9udGFsOiAyNHB4O1xuICAgIC0tdXYtaWNvbi1iZzogNDAwcHg7XG5cbiAgICAvL3N0eWxlc1xuICAgIC0tdXYtYm94LXNoYWRvdzogMCAycHggMTJweCAwIHJnYmEoMjM0LCAyMzQsIDIzNCwgMC41KTtcbiAgICAtLXV2LWJveC1zaGFkb3ctMjogMCA0cHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAtLXV2LWJveC1zaGFkb3ctMzogMCA0cHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtLXV2LWJveC1zaGFkb3ctNDogMCA0cHggMTZweCAwIHJnYmEoMCwwLDAsMC4xNik7XG4gICAgLS11di1ib3gtc2hhZG93LWhvdmVyOiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIC0tdXYtYm94LXNoYWRvdy1ob3Zlci0yOiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIC0tdXYtYm94LXNoYWRvdy1iaWc6IDAgMjRweCAxNDRweCAwIHJnYmEoMCwwLDAsMC4xMik7XG4gICAgLS11di1ib3JkZXItZ3JheTogMXB4IHNvbGlkIHZhcigtLXV2LWJvcmRlci1jb2xvci1ncmF5KTtcbiAgICAtLXV2LWxpbmVhci1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzg0NDM5OTcxIDAlLCAjNGFjYWY1NzEgMTAwJSk7XG5cbiAgICAvL3R5cG9ncmFwaHlcbiAgICAtLXV2LWZvbnQtc2l6ZS14czogMTJweDtcbiAgICAtLXV2LWZvbnQtc2l6ZS1zbTogMTRweDtcbiAgICAtLXV2LWZvbnQtc2l6ZS1zbS1tZDogMTZweDtcbiAgICAtLXV2LWZvbnQtc2l6ZS1tZDogMThweDtcbiAgICAtLXV2LWZvbnQtc2l6ZS1tZC1sZzogMjBweDtcbiAgICAtLXV2LWZvbnQtc2l6ZS1sZzogMjRweDtcbiAgICAtLXV2LWZvbnQtc2l6ZS14bDogMjhweDtcbiAgICAtLXV2LWZvbnQtc2l6ZS14eGw6IDM2cHg7XG5cbiAgICAvL3NpemVzXG4gICAgLS11di14eHhzLXNpemU6IDRweDtcbiAgICAtLXV2LXh4cy1zaXplOiA4cHg7XG4gICAgLS11di14cy1zaXplOiAxNnB4O1xuICAgIC0tdXYtc20tc2l6ZTogMjRweDtcbiAgICAtLXV2LW1kLXNpemU6IDMycHg7XG4gICAgLS11di1sZy1zaXplOiA0OHB4O1xuICAgIC0tdXYteGwtc2l6ZTogNjRweDtcblxuICAgIC8vei1pbmRleFxuICAgIC0tdXYtei1pbmRleC1wb3B1cDogMjAwMDtcbiAgICAtLXV2LXotaW5kZXgtcG9wdXAtYmFja2Ryb3A6IDEwODA7XG4gICAgLS11di16LWluZGV4LXV2LWxpZ2h0LWJhY2tkcm9wOiAxMDc1O1xuICAgIC0tdXYtei1pbmRleC1uYXZiYXI6IDEwNzA7XG4gICAgLS11di16LWluZGV4LXNlYXJjaC1zaWRlYmFyLWRyb3Bkb3duOiAxMDY1O1xuICAgIC0tdXYtei1pbmRleC1zZWFyY2gtc2lkZWJhci10b29sbWVudTogMTA2MTtcbiAgICAtLXV2LXotaW5kZXgtc2VhcmNoLXNpZGViYXI6IDEwNjA7XG4gICAgLS11di16LWluZGV4LXdhbGxldC1zaWRlYmFyOiAxMDU1O1xuICAgIC0tdXYtei1pbmRleC13YWxsZXQtZW50aXR5LXByZXZpZXc6IDEwNTA7XG4gICAgLS11di16LWluZGV4LXNlYXJjaC1iYWNrZHJvcDogMTA1MDtcbiAgICAtLXV2LXotaW5kZXgtaGVhZGVyOiA5NTA7XG4gICAgLS11di16LWluZGV4LWFjdGlvbi1iYXI6IDkwMDtcbiAgICAtLXV2LXotaW5kZXgtc2lkZWJhci0xOiA4MDA7XG4gICAgLS11di16LWluZGV4LXNpZGViYXItMjogNzUwO1xufVxuXG5AbWl4aW4gcmVzcG9uZCgkYnJlYWtwb2ludCkge1xuICAgIC8vIEBpZiAkYnJlYWtwb2ludCA9PSBwaG9uZSB7XG4gICAgLy8gICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNy41ZW0pIHsgQGNvbnRlbnQgfTsgLy82MDBweFxuICAgIC8vIH1cbiAgICAvLyBAaWYgJGJyZWFrcG9pbnQgPT0gdGFiLXBvcnQge1xuICAgIC8vICAgICBAbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkgeyBAY29udGVudCB9OyAvLzkwMHB4XG4gICAgLy8gfVxuICAgIEBpZiAkYnJlYWtwb2ludCA9PSB0YWItbGFuZCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHsgQGNvbnRlbnQgfTtcbiAgICB9XG4gICAgQGlmICRicmVha3BvaW50ID09IHNtYWxsLWRlc2t0b3AtaGVpZ2h0IHtcbiAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA4MDBweCkgeyBAY29udGVudCB9O1xuICAgIH1cbiAgICBAaWYgJGJyZWFrcG9pbnQgPT0gc21hbGwtZGVza3RvcC13aWR0aCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHsgQGNvbnRlbnQgfTsgXG4gICAgfVxuICAgIEBpZiAkYnJlYWtwb2ludCA9PSBiaWctZGVza3RvcC1oZWlnaHQge1xuICAgICAgICBAbWVkaWEgKG1pbi1oZWlnaHQ6IDgwMHB4KSB7IEBjb250ZW50IH07IFxuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi91di11aS1saWIvc3JjL2xpYi9zY3NzL3ZhcmlhYmxlc1wiO1xuXG4uZm9ybS1wYWdlLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogYXV0bztcblxuICAgICYtdG9wIHtcbiAgICAgICAgcGFkZGluZzogMzJweDtcblxuICAgICAgICAmLWZ1bGxzY3JlZW4ge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tdXYtYm9yZGVyLWdyYXkpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tdXYtYm94LXNoYWRvdyk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDMycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11di1jb2xvci1ncmF5LWxpZ2h0LTYpO1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChzbWFsbC1kZXNrdG9wLWhlaWdodCkge1xuICAgICAgICAgICAgcGFkZGluZzogMThweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtbWlkZGxlIHtcbiAgICAgICAgcGFkZGluZzogMzJweDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzE1cHgpO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQoc21hbGwtZGVza3RvcC1oZWlnaHQpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZChzbWFsbC1kZXNrdG9wLXdpZHRoKSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1ib3R0b20ge1xuICAgICAgICBwYWRkaW5nOiAzMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11di1jb2xvci13aGl0ZSk7XG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQoc21hbGwtZGVza3RvcC1oZWlnaHQpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWZ1bGxzY3JlZW4ge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxufVxuXG4uZGlyZWN0aW9ucy1mdWxsc2NyZWVuIHtcbiAgICB3aWR0aDogNzIlO1xuICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgcGFkZGluZzogMThweDtcbn1cblxuLmFwcC1zdGVwcy10b3Age1xuICAgIEBpbmNsdWRlIHJlc3BvbmQoc21hbGwtZGVza3RvcC1oZWlnaHQpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5hcHAtc3RlcHMtZnVsbHNjcmVlbiB7XG4gICAgbWluLXdpZHRoOiAxODJweDtcbiAgICBib3JkZXItcmlnaHQ6IHZhcigtLXV2LWJvcmRlci1ncmF5KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS11di1ib3gtc2hhZG93KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMThweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hcHAtc3RlcHMtc2lkZSB7XG4gICAgbWluLXdpZHRoOiAxMjVweDtcbiAgICBtaW4taGVpZ2h0OiAyNzBweDtcbiAgICBAaW5jbHVkZSByZXNwb25kKGJpZy1kZXNrdG9wLWhlaWdodCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLnN0ZXBzLWRpdmlkZXItc2lkZSB7XG4gICAgQGluY2x1ZGUgcmVzcG9uZChiaWctZGVza3RvcC1oZWlnaHQpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5mdWxsc2NyZWVuLWJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11di1jb2xvci1ncmF5LWxpZ2h0LTYpO1xufVxuXG4udG90YWwtcmVzdWx0cy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 52279:
/*!**************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/helper-bar/helper-bar.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperBarComponent": () => (/* binding */ HelperBarComponent)
/* harmony export */ });
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/animations */ 9689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ 65504);




class HelperBarComponent {
  constructor() {
    this.helperBarState = 'visible';
  }
  toggleHelperBar() {
    this.helperBarState === 'hidden' ? this.helperBarState = 'visible' : this.helperBarState = 'hidden';
  }
}
HelperBarComponent.ɵfac = function HelperBarComponent_Factory(t) {
  return new (t || HelperBarComponent)();
};
HelperBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HelperBarComponent,
  selectors: [["app-helper-bar"]],
  decls: 7,
  vars: 3,
  consts: [[1, "helper-bar", "flex", "flex-column"], [3, "matTooltip", "icon", "click"], [1, "margin-xs", "margin-left-sm"], [1, "margin-bottom-xxxs"], [1, "uv-body-secondary"]],
  template: function HelperBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "uvx-icon-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HelperBarComponent_Template_uvx_icon_button_click_1_listener() {
        return ctx.toggleHelperBar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "h6", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "synopsis");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "This is where we will give you further information based on your actions and selections within Step X.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@slideInOutRight", ctx.helperBarState);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", ctx.helperBarState === "hidden" ? "More info about this step" : "Close helper bar")("icon", ctx.helperBarState === "hidden" ? "double_left" : "double_right");
    }
  },
  dependencies: [_uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_1__.IconButtonComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltip],
  styles: [".helper-bar[_ngcontent-%COMP%] {\n  background-color: var(--uv-color-white);\n  padding: 12px 24px 12px 12px;\n  position: absolute;\n  top: 220px;\n  right: 135px;\n  width: 220px;\n  box-shadow: var(--uv-box-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlci1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQUNKIiwiZmlsZSI6ImhlbHBlci1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVscGVyLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdXYtY29sb3Itd2hpdGUpO1xuICAgIHBhZGRpbmc6IDEycHggMjRweCAxMnB4IDEycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjIwcHg7XG4gICAgcmlnaHQ6IDEzNXB4O1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS11di1ib3gtc2hhZG93KTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL2dsb2JhbC13aGVyZS11c2VkL3Byb2plY3Qtd2l6YXJkL2hlbHBlci1iYXIvaGVscGVyLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBQ0o7QUFDQSw0bkJBQTRuQiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWxwZXItYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11di1jb2xvci13aGl0ZSk7XG4gICAgcGFkZGluZzogMTJweCAyNHB4IDEycHggMTJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMjBweDtcbiAgICByaWdodDogMTM1cHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXV2LWJveC1zaGFkb3cpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [_shared_animations__WEBPACK_IMPORTED_MODULE_0__.slideInOutRightAnimation]
  },
  changeDetection: 0
});

/***/ }),

/***/ 87451:
/*!****************************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/launch-point-page/launch-point-page.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaunchPointPageComponent": () => (/* binding */ LaunchPointPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _wizard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../wizard.service */ 563);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);





function LaunchPointPageComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "uvx-icon-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LaunchPointPageComponent_div_8_Template_uvx_icon_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      ctx_r2.onLaunchPointSelected(item_r1.route);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r1.selected = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("task-selection-selected", item_r1.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("selected", item_r1.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
  }
}
class LaunchPointPageComponent {
  constructor(router, stepsService) {
    this.router = router;
    this.stepsService = stepsService;
    this.selectionHover = false;
    this.wizardData = this.stepsService.wizardData$.value;
    this.taskSelections = [];
  }
  ngOnInit() {
    this.stepsService.wizardData$.subscribe(data => this.wizardData = data);
    this.getLaunchPointOptions();
  }
  onLaunchPointSelected(route) {
    this.stepsService.cancelWizard();
    this.stepsService.resetWizard();
    this.router.navigate([`main/gwu/${route}`], {
      queryParams: {
        service: `${route}`
      }
    });
  }
  getLaunchPointOptions() {
    const data = this.wizardData;
    if (!data.stepOneSkip) {
      this.taskSelections.push({
        name: 'Wave',
        icon: 'compare',
        selected: false,
        route: 'wave'
      }, {
        name: 'Force Directed Graph',
        icon: 'force_directed_graph',
        selected: false,
        route: 'force-directed-graph'
      });
    }
    if (!data.stepTwoSkip) {
      this.taskSelections.push({
        name: 'Profile',
        icon: 'profile',
        selected: false,
        route: 'profile'
      });
    }
  }
  cancelWizard() {
    this.stepsService.cancelWizard();
    this.stepsService.resetWizard();
  }
}
LaunchPointPageComponent.ɵfac = function LaunchPointPageComponent_Factory(t) {
  return new (t || LaunchPointPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_wizard_service__WEBPACK_IMPORTED_MODULE_0__.WizardService));
};
LaunchPointPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LaunchPointPageComponent,
  selectors: [["app-launch-point-page"]],
  inputs: {
    step: "step"
  },
  decls: 9,
  vars: 1,
  consts: [[1, "padding-sm", "flex", "justify-content-space-between"], [1, "medium-bold"], ["size", "md", "color", "gray", 3, "click"], [1, "divider"], [1, "flex", "align-items-center", "justify-content-center", "padding-sm"], [1, "flex", "flex-wrap", "container", "justify-content-center"], ["class", "flex flex-column align-items-center task-selection", 4, "ngFor", "ngForOf"], [1, "flex", "flex-column", "align-items-center", "task-selection"], [1, "task-selection-button", "margin-bottom-xxs", 3, "icon", "click"], [1, "uv-body", "medium-bold"]],
  template: function LaunchPointPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "What is your launch point?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "uvx-icon-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LaunchPointPageComponent_Template_uvx_icon_button_click_3_listener() {
        return ctx.cancelWizard();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, LaunchPointPageComponent_div_8_Template, 4, 6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.taskSelections);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_1__.IconButtonComponent],
  styles: [".task-selection[_ngcontent-%COMP%] {\n  width: 112px;\n  text-align: center;\n}\n.task-selection[_ngcontent-%COMP%]:hover   .task-selection-button[_ngcontent-%COMP%] {\n  background-color: var(--uv-color-gray-light);\n  border: 2px solid var(--uv-color-gray-light);\n  cursor: pointer;\n}\n.task-selection[_ngcontent-%COMP%]:hover   .task-selection-button[_ngcontent-%COMP%]     > * {\n  color: var(--uv-color-primary);\n}\n.task-selection[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: var(--uv-color-primary);\n}\n.task-selection-button[_ngcontent-%COMP%] {\n  border: 2px solid var(--uv-color-gray-2);\n  padding: 1.75rem;\n  border-radius: 50%;\n}\n.task-selection-button-selected[_ngcontent-%COMP%] {\n  background-color: var(--uv-color-gray-light);\n  border: 2px solid var(--uv-color-gray-light);\n  cursor: pointer;\n}\n.task-selection-button-selected[_ngcontent-%COMP%]     > * {\n  color: var(--uv-color-primary);\n}\n\n.selected[_ngcontent-%COMP%] {\n  color: var(--uv-color-primary);\n}\n\n.container[_ngcontent-%COMP%] {\n  column-gap: 100px;\n  row-gap: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhdW5jaC1wb2ludC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFUTtFQUNJLDRDQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0FBQVo7QUFHZ0I7RUFDSSw4QkFBQTtBQURwQjtBQUtRO0VBQ0ksOEJBQUE7QUFIWjtBQU9JO0VBQ0ksd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTFI7QUFPUTtFQUNJLDRDQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0FBTFo7QUFRZ0I7RUFDSSw4QkFBQTtBQU5wQjs7QUFhQTtFQUNJLDhCQUFBO0FBVko7O0FBYUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUFWSiIsImZpbGUiOiJsYXVuY2gtcG9pbnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrLXNlbGVjdGlvbiB7XG4gICAgd2lkdGg6IDExMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgICAudGFzay1zZWxlY3Rpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXV2LWNvbG9yLWdyYXktbGlnaHQpO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdXYtY29sb3ItZ3JheS1saWdodCk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgICAgICAgJiA+ICoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdXYtY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXV2LWNvbG9yLXByaW1hcnkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWJ1dHRvbiB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXV2LWNvbG9yLWdyYXktMik7XG4gICAgICAgIHBhZGRpbmc6IDEuNzVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBcbiAgICAgICAgJi1zZWxlY3RlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11di1jb2xvci1ncmF5LWxpZ2h0KTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXV2LWNvbG9yLWdyYXktbGlnaHQpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgICAgICAgICYgPiAqIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXV2LWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlbGVjdGVkIHtcbiAgICBjb2xvcjogdmFyKC0tdXYtY29sb3ItcHJpbWFyeSlcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgY29sdW1uLWdhcDogMTAwcHg7XG4gICAgcm93LWdhcDogMzJweDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL2dsb2JhbC13aGVyZS11c2VkL3Byb2plY3Qtd2l6YXJkL2xhdW5jaC1wb2ludC1wYWdlL2xhdW5jaC1wb2ludC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFUTtFQUNJLDRDQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0FBQVo7QUFHZ0I7RUFDSSw4QkFBQTtBQURwQjtBQUtRO0VBQ0ksOEJBQUE7QUFIWjtBQU9JO0VBQ0ksd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTFI7QUFPUTtFQUNJLDRDQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0FBTFo7QUFRZ0I7RUFDSSw4QkFBQTtBQU5wQjs7QUFhQTtFQUNJLDhCQUFBO0FBVko7O0FBYUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUFWSjtBQUNBLDQvREFBNC9EIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2stc2VsZWN0aW9uIHtcbiAgICB3aWR0aDogMTEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC50YXNrLXNlbGVjdGlvbi1idXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdXYtY29sb3ItZ3JheS1saWdodCk7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS11di1jb2xvci1ncmF5LWxpZ2h0KTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICAgICAgICAmID4gKiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS11di1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdXYtY29sb3ItcHJpbWFyeSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdXYtY29sb3ItZ3JheS0yKTtcbiAgICAgICAgcGFkZGluZzogMS43NXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIFxuICAgICAgICAmLXNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXV2LWNvbG9yLWdyYXktbGlnaHQpO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdXYtY29sb3ItZ3JheS1saWdodCk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgICAgICAgJiA+ICoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdXYtY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2VsZWN0ZWQge1xuICAgIGNvbG9yOiB2YXIoLS11di1jb2xvci1wcmltYXJ5KVxufVxuXG4uY29udGFpbmVyIHtcbiAgICBjb2x1bW4tZ2FwOiAxMDBweDtcbiAgICByb3ctZ2FwOiAzMnB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 78070:
/*!**************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/start-page/start-page.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPageComponent": () => (/* binding */ StartPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _wizard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../wizard.service */ 563);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);




class StartPageComponent {
  constructor(stepsService) {
    this.stepsService = stepsService;
    this.createNewProjectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  cancelWizard() {
    this.stepsService.resetWizard();
    this.stepsService.cancelWizard();
  }
  createNewProject() {
    this.createNewProjectEvent.emit();
  }
}
StartPageComponent.ɵfac = function StartPageComponent_Factory(t) {
  return new (t || StartPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_wizard_service__WEBPACK_IMPORTED_MODULE_0__.WizardService));
};
StartPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: StartPageComponent,
  selectors: [["app-wizard-start"]],
  outputs: {
    createNewProjectEvent: "createNewProjectEvent"
  },
  decls: 20,
  vars: 0,
  consts: [[1, "flex", "flex-column", "padding-md"], [1, "flex", "margin-bottom-md", "justify-content-space-between"], ["size", "md", "color", "gray", 3, "click"], [3, "click"], [1, "create-project", "margin-bottom-xs"], [1, "project", "flex", "justify-content-space-between", "align-items-center"], [1, "flex", "flex-column", "project-text"], [1, "margin-bottom-xxxs"], [1, "uv-body-sm"], [1, "project-action", "margin-right-xs"], ["color", "primary", 1, "project-action"]],
  template: function StartPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Global Where Used Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "uvx-icon-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StartPageComponent_Template_uvx_icon_button_click_4_listener() {
        return ctx.cancelWizard();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StartPageComponent_Template_a_click_6_listener() {
        return ctx.createNewProject();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " + Create a New Project ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Project 01");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div")(16, "uvx-icon-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "more_horiz");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "uvx-icon-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "arrow_forward");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_1__.IconButtonComponent],
  styles: [".create-project[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px dashed var(--uv-color-gray-2);\n  border-radius: 4px;\n  padding: 2.125rem;\n  text-align: center;\n}\n.create-project[_ngcontent-%COMP%]:hover {\n  background-color: var(--uv-color-gray-light);\n}\n\n.project[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--uv-color-gray-2);\n  border-radius: 4px;\n  padding: 1rem 1.5rem;\n}\n.project-action[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.project-text[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.project[_ngcontent-%COMP%]:hover {\n  background-color: var(--uv-color-gray-light);\n  cursor: pointer;\n}\n.project[_ngcontent-%COMP%]:hover   .project-action[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0ksNENBQUE7QUFDUjs7QUFHQTtFQUNJLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUVJO0VBQ0ksVUFBQTtBQUFSO0FBR0k7RUFDSSxVQUFBO0FBRFI7QUFJSTtFQUNJLDRDQUFBO0VBQ0EsZUFBQTtBQUZSO0FBSVE7RUFDSSxVQUFBO0FBRloiLCJmaWxlIjoic3RhcnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtcHJvamVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLXV2LWNvbG9yLWdyYXktMik7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDIuMTI1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdXYtY29sb3ItZ3JheS1saWdodCk7XG4gICAgfVxufVxuXG4ucHJvamVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdXYtY29sb3ItZ3JheS0yKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG5cbiAgICAmLWFjdGlvbiB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgJi10ZXh0IHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdXYtY29sb3ItZ3JheS1saWdodCk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAucHJvamVjdC1hY3Rpb24ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL2dsb2JhbC13aGVyZS11c2VkL3Byb2plY3Qtd2l6YXJkL3N0YXJ0LXBhZ2Uvc3RhcnQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSw0Q0FBQTtBQUNSOztBQUdBO0VBQ0ksV0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUFKO0FBRUk7RUFDSSxVQUFBO0FBQVI7QUFHSTtFQUNJLFVBQUE7QUFEUjtBQUlJO0VBQ0ksNENBQUE7RUFDQSxlQUFBO0FBRlI7QUFJUTtFQUNJLFVBQUE7QUFGWjtBQUNBLGczQ0FBZzNDIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWF0ZS1wcm9qZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tdXYtY29sb3ItZ3JheS0yKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMi4xMjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11di1jb2xvci1ncmF5LWxpZ2h0KTtcbiAgICB9XG59XG5cbi5wcm9qZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11di1jb2xvci1ncmF5LTIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcblxuICAgICYtYWN0aW9uIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAmLXRleHQge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11di1jb2xvci1ncmF5LWxpZ2h0KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIC5wcm9qZWN0LWFjdGlvbiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */", ".grid[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vh - 64px);\n  display: grid;\n  grid-gap: 0;\n  grid-template-columns: [col1] 336px [col2] auto;\n  grid-template-rows: [row1] 68px [row2] auto;\n  grid-template-areas: \"sidebar appbar\" \"sidebar main\";\n}\n\n.actionbar[_ngcontent-%COMP%] {\n  grid-column: col2;\n  grid-row: row1;\n  border-top: none;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  grid-column: col1;\n  grid-row-start: row1;\n  grid-row-end: 3;\n}\n\n.content[_ngcontent-%COMP%] {\n  grid-column: col2;\n  grid-row: row2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC13aGVyZS11c2VkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7RUFDQSwyQ0FBQTtFQUNBLG9EQUNJO0FBQVI7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6Imdsb2JhbC13aGVyZS11c2VkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAwO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW2NvbDFdIDMzNnB4IFtjb2wyXSBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogW3JvdzFdIDY4cHggW3JvdzJdIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJzaWRlYmFyIGFwcGJhclwiXG4gICAgICAgIFwic2lkZWJhciBtYWluXCIgO1xufVxuXG4uYWN0aW9uYmFyIHtcbiAgICBncmlkLWNvbHVtbjogY29sMjtcbiAgICBncmlkLXJvdzogcm93MTtcbiAgICBib3JkZXItdG9wOiBub25lO1xufVxuLnNpZGViYXIge1xuICAgIGdyaWQtY29sdW1uOiBjb2wxO1xuICAgIGdyaWQtcm93LXN0YXJ0OiByb3cxO1xuICAgIGdyaWQtcm93LWVuZDogMztcbn1cbi5jb250ZW50IHtcbiAgICBncmlkLWNvbHVtbjogY29sMjtcbiAgICBncmlkLXJvdzogcm93Mjtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL2dsb2JhbC13aGVyZS11c2VkL2dsb2JhbC13aGVyZS11c2VkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7RUFDQSwyQ0FBQTtFQUNBLG9EQUNJO0FBQVI7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0EsNHNDQUE0c0MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDA7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbY29sMV0gMzM2cHggW2NvbDJdIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBbcm93MV0gNjhweCBbcm93Ml0gYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcInNpZGViYXIgYXBwYmFyXCJcbiAgICAgICAgXCJzaWRlYmFyIG1haW5cIiA7XG59XG5cbi5hY3Rpb25iYXIge1xuICAgIGdyaWQtY29sdW1uOiBjb2wyO1xuICAgIGdyaWQtcm93OiByb3cxO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG4uc2lkZWJhciB7XG4gICAgZ3JpZC1jb2x1bW46IGNvbDE7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IHJvdzE7XG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xufVxuLmNvbnRlbnQge1xuICAgIGdyaWQtY29sdW1uOiBjb2wyO1xuICAgIGdyaWQtcm93OiByb3cyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 76845:
/*!************************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/step-directions/step-directions.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepDirectionsComponent": () => (/* binding */ StepDirectionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _step_one_step_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step-one/step-one.component */ 500);
/* harmony import */ var _step_two_step_two_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-two/step-two.component */ 2417);
/* harmony import */ var _step_three_step_three_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step-three/step-three.component */ 42026);
/* harmony import */ var _side_by_side_wizard_step_one_step_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../side-by-side/wizard/step-one/step-one.component */ 40226);
/* harmony import */ var _side_by_side_wizard_step_two_step_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../side-by-side/wizard/step-two/step-two.component */ 13385);
/* harmony import */ var _side_by_side_wizard_step_three_step_three_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../side-by-side/wizard/step-three/step-three.component */ 87543);









function StepDirectionsComponent_div_1_app_step_one_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-step-one", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("stepisCompleteEvent", function StepDirectionsComponent_div_1_app_step_one_1_Template_app_step_one_stepisCompleteEvent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.step.isComplete = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function StepDirectionsComponent_div_1_app_step_two_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-step-two", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("stepisCompleteEvent", function StepDirectionsComponent_div_1_app_step_two_2_Template_app_step_two_stepisCompleteEvent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.step.isComplete = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function StepDirectionsComponent_div_1_app_step_three_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-step-three", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("stepisCompleteEvent", function StepDirectionsComponent_div_1_app_step_three_3_Template_app_step_three_stepisCompleteEvent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.step.isComplete = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function StepDirectionsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, StepDirectionsComponent_div_1_app_step_one_1_Template, 1, 0, "app-step-one", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, StepDirectionsComponent_div_1_app_step_two_2_Template, 1, 0, "app-step-two", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, StepDirectionsComponent_div_1_app_step_three_3_Template, 1, 0, "app-step-three", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.step.stepIndex === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.step.stepIndex === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.step.stepIndex === 3);
  }
}
function StepDirectionsComponent_div_2_sbs_step_one_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "sbs-step-one", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("stepisCompleteEvent", function StepDirectionsComponent_div_2_sbs_step_one_1_Template_sbs_step_one_stepisCompleteEvent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.step.isComplete = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function StepDirectionsComponent_div_2_sbs_step_two_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "sbs-step-two", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("stepisCompleteEvent", function StepDirectionsComponent_div_2_sbs_step_two_2_Template_sbs_step_two_stepisCompleteEvent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.step.isComplete = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function StepDirectionsComponent_div_2_sbs_step_three_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "sbs-step-three", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("stepisCompleteEvent", function StepDirectionsComponent_div_2_sbs_step_three_3_Template_sbs_step_three_stepisCompleteEvent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.step.isComplete = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function StepDirectionsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, StepDirectionsComponent_div_2_sbs_step_one_1_Template, 1, 0, "sbs-step-one", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, StepDirectionsComponent_div_2_sbs_step_two_2_Template, 1, 0, "sbs-step-two", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, StepDirectionsComponent_div_2_sbs_step_three_3_Template, 1, 0, "sbs-step-three", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.step.stepIndex === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.step.stepIndex === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.step.stepIndex === 3);
  }
}
class StepDirectionsComponent {
  constructor(route) {
    this.route = route;
    this.app = '';
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.app = params['app'];
    });
  }
  onCompleteStep() {
    this.step.isComplete = true;
  }
}
StepDirectionsComponent.ɵfac = function StepDirectionsComponent_Factory(t) {
  return new (t || StepDirectionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
};
StepDirectionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: StepDirectionsComponent,
  selectors: [["app-step-directions"]],
  inputs: {
    step: "step"
  },
  decls: 3,
  vars: 2,
  consts: [[1, ""], [4, "ngIf"], [3, "stepisCompleteEvent", 4, "ngIf"], [3, "stepisCompleteEvent"]],
  template: function StepDirectionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, StepDirectionsComponent_div_1_Template, 4, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, StepDirectionsComponent_div_2_Template, 4, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.app === "gwu");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.app === "sbs");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _step_one_step_one_component__WEBPACK_IMPORTED_MODULE_0__.StepOneComponent, _step_two_step_two_component__WEBPACK_IMPORTED_MODULE_1__.StepTwoComponent, _step_three_step_three_component__WEBPACK_IMPORTED_MODULE_2__.StepThreeComponent, _side_by_side_wizard_step_one_step_one_component__WEBPACK_IMPORTED_MODULE_3__.SbsStepOneComponent, _side_by_side_wizard_step_two_step_two_component__WEBPACK_IMPORTED_MODULE_4__.SbsStepTwoComponent, _side_by_side_wizard_step_three_step_three_component__WEBPACK_IMPORTED_MODULE_5__.SbsStepThreeComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwLWRpcmVjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL2dsb2JhbC13aGVyZS11c2VkL3Byb2plY3Qtd2l6YXJkL3N0ZXAtZGlyZWN0aW9ucy9zdGVwLWRpcmVjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdMQUFnTCIsInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 500:
/*!**************************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/step-directions/step-one/step-one.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepOneComponent": () => (/* binding */ StepOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 71265);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 10907);
/* harmony import */ var _taskSelections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskSelections */ 89211);
/* harmony import */ var projects_uv_ui_prototype_src_app_global_where_used_wizard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/uv-ui-prototype/src/app/global-where-used/wizard.service */ 563);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var projects_uv_ui_prototype_src_app_services_on_destroy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/uv-ui-prototype/src/app/services/on-destroy.service */ 14270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);
/* harmony import */ var _uv_ui_lib_src_lib_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../uv-ui-lib/src/lib/dropdown/dropdown.component */ 81841);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 65504);











function StepOneComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function StepOneComponent_span_7_Template_span_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const item_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.selectRole(item_r3.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r3.name);
  }
}
function StepOneComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function StepOneComponent_div_12_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const item_r6 = restoredCtx.$implicit;
      const i_r7 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r8.selectGoal(item_r6.name);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.setSelectedGoal(item_r6, i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "uvx-icon-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("task-selection-button-selected", item_r6.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("task-selection-selected", item_r6.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r6.name, " ");
  }
}
function StepOneComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function StepOneComponent_div_14_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const item_r10 = restoredCtx.$implicit;
      const i_r11 = restoredCtx.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r12.selectGoal(item_r10.name);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.setSelectedGoal(item_r10, i_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "uvx-icon-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("task-selection-button-selected", item_r10.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", item_r10.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("task-selection-selected", item_r10.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r10.name, " ");
  }
}
class StepOneComponent {
  constructor(wizardService, route, destroy$, ref) {
    this.wizardService = wizardService;
    this.route = route;
    this.destroy$ = destroy$;
    this.ref = ref;
    this.selectedRole = "Select a role";
    this.taskSelections = _taskSelections__WEBPACK_IMPORTED_MODULE_0__.taskSelections;
    this.wizardMode = '';
    this.stepisCompleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.roles = [{
      name: 'Product Engineer'
    }, {
      name: 'Systems Engineer'
    }, {
      name: 'Service Engineer'
    }, {
      name: 'Design Engineer'
    }, {
      name: 'Process Engineer'
    }];
    const role = this.wizardService.wizardData$.value.role;
    const goal = this.wizardService.wizardData$.value.goal;
    role !== '' ? this.selectedRole = role : null;
    goal === '' ? this.taskSelections.map(item => {
      item.selected = false;
    }) : null;
  }
  ngOnInit() {
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(queryParams => this.wizardMode = queryParams['wizardMode'])).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(() => this.ref.detectChanges());
  }
  selectRole(role) {
    this.selectedRole = role;
    this.wizardService.updateWizardData('role', role);
    this.wizardService.updateResults(436);
    this.wizardService.checkIfStep1Complete();
  }
  selectGoal(goal) {
    this.wizardService.updateWizardData('goal', goal);
    this.wizardService.updateResults(512);
    this.wizardService.checkIfStep1Complete();
  }
  setSelectedGoal(item, i) {
    item.selected = true;
    const array = this.taskSelections;
    const exceptIndex = this.taskSelections.indexOf(item);
    for (let item of array) {
      if (array.indexOf(item) !== exceptIndex) {
        item.selected = false;
      }
    }
  }
}
StepOneComponent.ɵfac = function StepOneComponent_Factory(t) {
  return new (t || StepOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_uv_ui_prototype_src_app_global_where_used_wizard_service__WEBPACK_IMPORTED_MODULE_1__.WizardService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_uv_ui_prototype_src_app_services_on_destroy_service__WEBPACK_IMPORTED_MODULE_2__.NgOnDestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
};
StepOneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: StepOneComponent,
  selectors: [["app-step-one"]],
  outputs: {
    stepisCompleteEvent: "stepisCompleteEvent"
  },
  decls: 15,
  vars: 4,
  consts: [[1, "uv-body", "medium-bold", "margin-bottom-xxs"], ["width", "35%", "matTooltip", "Click to select a role"], ["title", "", 1, "flex", "align-items", "center", "justify-content-space-between", "w-100"], [1, "flex", "align-items-center"], [1, "divider-right", "margin-right-xs"], ["options", "", "class", "custom-option flex justify-content-space-between", 3, "click", 4, "ngFor", "ngForOf"], [1, "margin-top-sm", "margin-bottom-sm"], [1, "flex", "flex-column", "task-selection-container"], [1, "flex", "task-selection-container"], ["class", "flex flex-column align-items-center task-selection", 3, "click", 4, "ngFor", "ngForOf"], ["options", "", 1, "custom-option", "flex", "justify-content-space-between", 3, "click"], [1, "flex", "flex-column", "align-items-center", "task-selection", 3, "click"], ["size", "md", "matTooltip", "Placeholder info about this item", 1, "task-selection-button", "margin-bottom-xxs"], [1, "uv-body", "medium-bold"], ["size", "md", "matTooltip", "Placeholder info about this item", 1, "task-selection-button", "margin-bottom-xxs", 3, "icon"]],
  template: function StepOneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Who are you, what is your role? (Optional)\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "uvx-dropdown", 1)(3, "span", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, StepOneComponent_span_7_Template, 3, 1, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h5", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "What is your desired goal/task?");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7)(11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, StepOneComponent_div_12_Template, 5, 6, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, StepOneComponent_div_14_Template, 4, 6, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.selectedRole);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.roles);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.taskSelections.slice(0, 5));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.taskSelections.slice(5, 9));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__.IconButtonComponent, _uv_ui_lib_src_lib_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.DropdownComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwLWRpcmVjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL2dsb2JhbC13aGVyZS11c2VkL3Byb2plY3Qtd2l6YXJkL3N0ZXAtZGlyZWN0aW9ucy9zdGVwLWRpcmVjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdMQUFnTCIsInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 89211:
/*!**********************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/step-directions/step-one/taskSelections.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskSelections": () => (/* binding */ taskSelections)
/* harmony export */ });
const taskSelections = [{
  name: 'Compare',
  icon: 'compare',
  selected: false
}, {
  name: 'Current',
  icon: 'thunderbolt',
  selected: false
}, {
  name: 'Design',
  icon: 'package',
  selected: false
}, {
  name: 'Replace',
  icon: 'replace',
  selected: false
}, {
  name: 'Similar',
  icon: 'clone',
  selected: false
}, {
  name: 'Update',
  icon: 'refresh',
  selected: false
}, {
  name: 'Validate',
  icon: 'check_alt',
  selected: false
}, {
  name: 'Test',
  icon: 'activate_all',
  selected: false
}, {
  name: 'Security',
  icon: 'check_alt',
  selected: false
}];

/***/ }),

/***/ 42026:
/*!******************************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/step-directions/step-three/step-three.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepThreeComponent": () => (/* binding */ StepThreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var projects_uv_ui_prototype_src_app_global_where_used_wizard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/uv-ui-prototype/src/app/global-where-used/wizard.service */ 563);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 93557);
/* harmony import */ var _uv_ui_lib_src_lib_range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../uv-ui-lib/src/lib/range-slider/range-slider.component */ 80665);
/* harmony import */ var _uv_ui_lib_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../uv-ui-lib/src/lib/checkbox/checkbox.component */ 85004);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ 37366);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ 48281);







class StepThreeComponent {
  constructor(wizardService) {
    this.wizardService = wizardService;
    this.filter1Value = 54;
    this.filter2Value = 23;
    this.filter3Value = 77;
    this.radioSelection = 'option 0';
    this.advancedOptions = false;
  }
  ngOnInit() {
    const data = this.wizardService.wizardData$.value;
    data.filter1 != 0 ? this.filter1Value = data.filter1 : 50;
    data.filter2 != 0 ? this.filter2Value = data.filter2 : 50;
    data.filter3 != 0 ? this.filter3Value = data.filter3 : 50;
  }
  filter1Changed(value) {
    let lastNum = this.filter1Value;
    if (lastNum < value) {
      this.wizardService.updateResults(-(this.filter1Value * .1 * 2));
    } else {
      this.wizardService.updateResults(this.filter1Value * .1 * 2);
    }
    this.filter1Value = value;
  }
  filter2Changed(value) {
    let lastNum = this.filter2Value;
    if (lastNum < value) {
      this.wizardService.updateResults(-(this.filter2Value * .1 * 2));
    } else {
      this.wizardService.updateResults(this.filter2Value * .1 * 2);
    }
    this.filter2Value = value;
  }
  filter3Changed(value) {
    let lastNum = this.filter3Value;
    if (lastNum < value) {
      this.wizardService.updateResults(-(this.filter3Value * .1 * 2));
    } else {
      this.wizardService.updateResults(this.filter3Value * .1 * 2);
    }
    this.filter3Value = value;
  }
  setFilter1() {
    this.wizardService.updateWizardData('filter1', this.filter1Value);
    this.wizardService.checkIfStep3Complete();
  }
  setFilter2() {
    this.wizardService.updateWizardData('filter2', this.filter2Value);
    this.wizardService.checkIfStep3Complete();
  }
  setFilter3() {
    this.wizardService.updateWizardData('filter3', this.filter3Value);
    this.wizardService.checkIfStep3Complete();
  }
}
StepThreeComponent.ɵfac = function StepThreeComponent_Factory(t) {
  return new (t || StepThreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_uv_ui_prototype_src_app_global_where_used_wizard_service__WEBPACK_IMPORTED_MODULE_0__.WizardService));
};
StepThreeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: StepThreeComponent,
  selectors: [["app-step-three"]],
  decls: 66,
  vars: 16,
  consts: [[1, "uv-body"], [1, "flex", "flex-column"], [1, "flex", "justify-content-space-between", "margin-bottom-sm", "margin-top-sm"], [1, "uv-body", "bold", 2, "width", "30%"], ["minLabel", "0%", "maxLabel", "100%", 1, "flex-grow", 3, "tooltip", "numberInput", "value", "valueChangedEvent", "mouseup"], [1, "flex", "margin-top-md"], [1, "flex", "flex-column", "margin-right-md"], [1, "margin-bottom-sm"], [1, "flex", "flex-column", "gap-sm"], ["color", "primary"], [1, "uv-body-sm"], [1, "divider-right", "margin-right-md"], [1, "flex", "flex-column", "gap-sm", 3, "ngModel", "ngModelChange"], ["color", "primary", "name", "option", "value", "option 0"], ["color", "primary", "name", "option", "value", "option 2"], ["color", "primary", "name", "option", "value", "option 3"], [1, "flex"], [1, "flex", "flex-column", "margin-right-md", "gap-sm"], ["label", "Selection 1"], ["label", "Selection 2"], ["label", "Selection 5"], ["label", "Selection 3"], ["label", "Selection 4"], [1, "uv-body", "margin-bottom-sm"], ["minLabel", "0%", "maxLabel", "100%", 3, "numberInput", "value", "valueChangedEvent", "mouseup"]],
  template: function StepThreeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " This will contain guidance information regarding the sliders and the settings for which you could be calibrating.\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Option 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "uvx-range-slider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChangedEvent", function StepThreeComponent_Template_uvx_range_slider_valueChangedEvent_6_listener($event) {
        return ctx.filter1Changed($event);
      })("mouseup", function StepThreeComponent_Template_uvx_range_slider_mouseup_6_listener() {
        return ctx.setFilter1();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2)(8, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Option 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "uvx-range-slider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChangedEvent", function StepThreeComponent_Template_uvx_range_slider_valueChangedEvent_10_listener($event) {
        return ctx.filter2Changed($event);
      })("mouseup", function StepThreeComponent_Template_uvx_range_slider_mouseup_10_listener() {
        return ctx.setFilter2();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 2)(12, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Option 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "uvx-range-slider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChangedEvent", function StepThreeComponent_Template_uvx_range_slider_valueChangedEvent_14_listener($event) {
        return ctx.filter3Changed($event);
      })("mouseup", function StepThreeComponent_Template_uvx_range_slider_mouseup_14_listener() {
        return ctx.setFilter3();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5)(16, "div", 6)(17, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "More settings and options");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 8)(20, "mat-slide-toggle", 9)(21, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Example Option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-slide-toggle", 9)(24, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Example Option 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-slide-toggle", 9)(27, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Example Option 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 6)(31, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Title for this section of settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-radio-group", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function StepThreeComponent_Template_mat_radio_group_ngModelChange_33_listener($event) {
        return ctx.radioSelection = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-radio-button", 13)(35, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "No Selection");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-radio-button", 14)(38, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Option 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-radio-button", 15)(41, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Option 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 1)(45, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "More settings and options");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 16)(48, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "uvx-checkbox", 18)(50, "uvx-checkbox", 19)(51, "uvx-checkbox", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "uvx-checkbox", 21)(54, "uvx-checkbox", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div")(56, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, " More advanced Options ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 7)(59, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Range Input Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "uvx-range-slider", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChangedEvent", function StepThreeComponent_Template_uvx_range_slider_valueChangedEvent_61_listener($event) {
        return ctx.filter1Changed($event);
      })("mouseup", function StepThreeComponent_Template_uvx_range_slider_mouseup_61_listener() {
        return ctx.setFilter1();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 7)(63, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Range Input Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "uvx-range-slider", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChangedEvent", function StepThreeComponent_Template_uvx_range_slider_valueChangedEvent_65_listener($event) {
        return ctx.filter1Changed($event);
      })("mouseup", function StepThreeComponent_Template_uvx_range_slider_mouseup_65_listener() {
        return ctx.setFilter1();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tooltip", true)("numberInput", true)("value", ctx.filter1Value);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tooltip", true)("numberInput", true)("value", ctx.filter2Value);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tooltip", true)("numberInput", true)("value", ctx.filter3Value);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.radioSelection);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("display-none", !ctx.advancedOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("numberInput", true)("value", ctx.filter1Value);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("numberInput", true)("value", ctx.filter1Value);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _uv_ui_lib_src_lib_range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_1__.RangeSliderComponent, _uv_ui_lib_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__.CheckboxComponent, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__.MatSlideToggle, _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioButton],
  styles: [".advanced-options[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border: 1px solid red;\n}\n\n.display-none[_ngcontent-%COMP%] {\n  height: 0px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAtdGhyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJzdGVwLXRocmVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkdmFuY2VkLW9wdGlvbnMge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4uZGlzcGxheS1ub25lIHtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL2dsb2JhbC13aGVyZS11c2VkL3Byb2plY3Qtd2l6YXJkL3N0ZXAtZGlyZWN0aW9ucy9zdGVwLXRocmVlL3N0ZXAtdGhyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNBLDRmQUE0ZiIsInNvdXJjZXNDb250ZW50IjpbIi5hZHZhbmNlZC1vcHRpb25zIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLmRpc3BsYXktbm9uZSB7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 2417:
/*!**************************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/step-directions/step-two/step-two.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepTwoComponent": () => (/* binding */ StepTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var projects_uv_ui_prototype_src_app_global_where_used_wizard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/uv-ui-prototype/src/app/global-where-used/wizard.service */ 563);
/* harmony import */ var projects_uv_ui_prototype_src_app_services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/uv-ui-prototype/src/app/services/search.service */ 81701);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _uv_ui_lib_src_lib_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../uv-ui-lib/src/lib/search-panel/search-panel.component */ 12239);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93557);






function StepTwoComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StepTwoComponent_div_6_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r3.selectEntity(item_r2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.entitySelected = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 8)(4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.description, " ");
  }
}
function StepTwoComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Metadata for the selected entity will be shown here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Document: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "This is the document metadata.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Section: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "This is the section metadata.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Selected entity: ", ctx_r1.selectedEntity.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.selectedEntity.description);
  }
}
class StepTwoComponent {
  constructor(wizardService, searchService, ref) {
    this.wizardService = wizardService;
    this.searchService = searchService;
    this.ref = ref;
    this.searchResults = [];
    this.entitySelected = false;
    this.showSuggestions = false;
    const entity = this.wizardService.wizardData$.value.entity;
    if (entity !== this.wizardService.emptyEntity) {
      this.searchText = entity.name;
      this.selectedEntity = entity;
    } else {
      this.searchText = '';
      this.selectedEntity = this.wizardService.emptyEntity;
    }
  }
  ngAfterViewChecked() {
    if (this.searchText.length > 0) {
      this.searchResults = this.searchService.typeAheadSearch(this.searchText);
    }
    this.ref.detectChanges();
  }
  trackItem(index, item) {
    return item.name;
  }
  selectEntity(item) {
    this.searchText = item.name;
    this.entitySelected = true;
    this.selectedEntity = item;
    this.wizardService.updateWizardData('entity', item);
    this.wizardService.updateResults(310);
    this.wizardService.checkIfStep2Complete();
  }
  clearSearch() {
    this.searchText = '';
    this.entitySelected = false;
    this.wizardService.updateWizardData('entity', this.wizardService.emptyEntity);
    this.wizardService.checkIfStep2Complete();
  }
}
StepTwoComponent.ɵfac = function StepTwoComponent_Factory(t) {
  return new (t || StepTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_uv_ui_prototype_src_app_global_where_used_wizard_service__WEBPACK_IMPORTED_MODULE_0__.WizardService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_uv_ui_prototype_src_app_services_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
};
StepTwoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: StepTwoComponent,
  selectors: [["app-step-two"]],
  inputs: {
    searchResults: "searchResults"
  },
  decls: 8,
  vars: 6,
  consts: [[1, "margin-bottom-xs"], ["mode", "component-border", "width", "50%", "suggestionsDropdownHeight", "34vh", 3, "rounded", "showSuggestions", "searchClearClicked"], ["type", "text", "placeholder", "Search...", "maxlength", "40", 1, "uv-input", "margin-left-xs", 3, "ngModel", "ngModelChange"], ["suggestions", ""], ["class", "custom-option", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "margin-top-md", "style", "width: 600px;", 4, "ngIf"], [1, "custom-option", 3, "click"], [1, "uv-body"], [1, "option-description"], [1, "uv-body-secondary"], [1, "margin-top-md", 2, "width", "600px"], [1, "bold"], [1, "uv-body", "blue"]],
  template: function StepTwoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h5", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Here you will search for a [Insert here] based on Step 1 selections. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "uvx-search-panel", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("searchClearClicked", function StepTwoComponent_Template_uvx_search_panel_searchClearClicked_3_listener() {
        return ctx.clearSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function StepTwoComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.searchText = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, StepTwoComponent_div_6_Template, 6, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, StepTwoComponent_div_7_Template, 15, 2, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rounded", true)("showSuggestions", ctx.searchText != "" && ctx.entitySelected === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.searchResults)("ngForTrackBy", ctx.trackItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.entitySelected);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _uv_ui_lib_src_lib_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_2__.SearchPanelComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
  styles: [".option-description[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-height: 16px;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAtdHdvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FBQ0oiLCJmaWxlIjoic3RlcC10d28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9uLWRlc2NyaXB0aW9uIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL2dsb2JhbC13aGVyZS11c2VkL3Byb2plY3Qtd2l6YXJkL3N0ZXAtZGlyZWN0aW9ucy9zdGVwLXR3by9zdGVwLXR3by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQUNKO0FBQ0Esd2tCQUF3a0IiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9uLWRlc2NyaXB0aW9uIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 21364:
/*!****************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/steps/steps.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepsComponent": () => (/* binding */ StepsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _wizard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../wizard.service */ 563);
/* harmony import */ var _side_by_side_wizard_sbs_wizard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../side-by-side/wizard/sbs-wizard.service */ 74972);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/uvx-icon/uvx-icon.component */ 45187);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 65504);







function StepsComponent_ng_container_2_uvx_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "uvx-icon", 6);
  }
}
function StepsComponent_ng_container_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](step_r2.stepIndex);
  }
}
const _c0 = function (a0) {
  return {
    "background": a0
  };
};
function StepsComponent_ng_container_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 7);
  }
  if (rf & 2) {
    const step_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("step-divider", !ctx_r6.wizardModeIsFullscreen)("step-divider-fullscreen", ctx_r6.wizardModeIsFullscreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, step_r2.isComplete ? "var(--uv-color-success)" : "var(--uv-color-gray)"));
  }
}
const _c1 = function (a0, a1, a2) {
  return {
    "step-complete": a0,
    "step-incomplete": a1,
    "step-current": a2
  };
};
function StepsComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StepsComponent_ng_container_2_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const step_r2 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.onStepClick(step_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, StepsComponent_ng_container_2_uvx_icon_3_Template, 1, 0, "uvx-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, StepsComponent_ng_container_2_span_4_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, StepsComponent_ng_container_2_div_5_Template, 1, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](8, _c1, step_r2.isComplete, !step_r2.isComplete, ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, ctx_r0.currentStep)) == null ? null : tmp_0_0.stepIndex) === step_r2.stepIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", step_r2.isComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !step_r2.isComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r3 < ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, ctx_r0.steps)) == null ? null : tmp_3_0.length) - 1);
  }
}
function StepsComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const step_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](step_r11.title);
  }
}
class StepsComponent {
  constructor(gwuWizardService, sbsWizardService, route) {
    this.gwuWizardService = gwuWizardService;
    this.sbsWizardService = sbsWizardService;
    this.route = route;
    this.wizardModeIsFullscreen = false;
    this.app = '';
  }
  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.app = queryParams['app'];
    });
    this.isGwu ? this.steps = this.gwuWizardService.getSteps() : this.steps = this.sbsWizardService.getSteps();
    this.isGwu ? this.currentStep = this.gwuWizardService.getCurrentStep() : this.currentStep = this.sbsWizardService.getCurrentStep();
  }
  get isGwu() {
    return this.app === 'gwu';
  }
  onStepClick(step) {
    this.isGwu ? this.gwuWizardService.setCurrentStep(step) : this.sbsWizardService.setCurrentStep(step);
  }
  cancelWizard() {
    this.gwuWizardService.resetWizard();
    this.gwuWizardService.cancelWizard();
  }
}
StepsComponent.ɵfac = function StepsComponent_Factory(t) {
  return new (t || StepsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_wizard_service__WEBPACK_IMPORTED_MODULE_0__.WizardService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_side_by_side_wizard_sbs_wizard_service__WEBPACK_IMPORTED_MODULE_1__.SbsWizardService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};
StepsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: StepsComponent,
  selectors: [["app-steps"]],
  inputs: {
    wizardModeIsFullscreen: "wizardModeIsFullscreen"
  },
  decls: 7,
  vars: 18,
  consts: [[4, "ngFor", "ngForOf"], [1, "flex", "justify-content-space-between"], ["matTooltip", "Skip to this step", 1, "step-bubble", 3, "ngClass", "click"], ["icon", "check", "color", "white", 4, "ngIf"], [4, "ngIf"], [3, "step-divider", "step-divider-fullscreen", "ngStyle", 4, "ngIf"], ["icon", "check", "color", "white"], [3, "ngStyle"], [1, "uv-body-sm", "margin-top-xxs"]],
  template: function StepsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, StepsComponent_ng_container_2_Template, 7, 12, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, StepsComponent_ng_container_5_Template, 3, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("form-steps-container", !ctx.wizardModeIsFullscreen)("form-steps-container-fullscreen", ctx.wizardModeIsFullscreen);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("step-bubble-container", !ctx.wizardModeIsFullscreen)("step-bubble-container-fullscreen", ctx.wizardModeIsFullscreen);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 14, ctx.steps));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("step-number-container", !ctx.wizardModeIsFullscreen)("step-number-container-fullscreen", ctx.wizardModeIsFullscreen);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 16, ctx.steps));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _uv_ui_lib_src_lib_uvx_icon_uvx_icon_component__WEBPACK_IMPORTED_MODULE_2__.UvxIconComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwcy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL2dsb2JhbC13aGVyZS11c2VkL3Byb2plY3Qtd2l6YXJkL3N0ZXBzL3N0ZXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 31227:
/*!**************************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/wizard-container/wizard-container.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WizardContainerComponent": () => (/* binding */ WizardContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _wizard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../wizard.service */ 563);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 16873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _uv_ui_lib_src_lib_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/modal/modal.component */ 32101);
/* harmony import */ var _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../start-page/start-page.component */ 78070);
/* harmony import */ var _form_page_form_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-page/form-page.component */ 90378);
/* harmony import */ var _launch_point_page_launch_point_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../launch-point-page/launch-point-page.component */ 87451);








function WizardContainerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "app-form-page", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onSubmitEvent", function WizardContainerComponent_div_0_Template_app_form_page_onSubmitEvent_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.startLaunchPoint());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function WizardContainerComponent_uvx_modal_1_app_wizard_start_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-wizard-start", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("createNewProjectEvent", function WizardContainerComponent_uvx_modal_1_app_wizard_start_1_Template_app_wizard_start_createNewProjectEvent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.startWizard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function WizardContainerComponent_uvx_modal_1_app_form_page_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-form-page", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onSubmitEvent", function WizardContainerComponent_uvx_modal_1_app_form_page_2_Template_app_form_page_onSubmitEvent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.startLaunchPoint());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function WizardContainerComponent_uvx_modal_1_app_launch_point_page_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-launch-point-page");
  }
}
function WizardContainerComponent_uvx_modal_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "uvx-modal", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, WizardContainerComponent_uvx_modal_1_app_wizard_start_1_Template, 1, 0, "app-wizard-start", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, WizardContainerComponent_uvx_modal_1_app_form_page_2_Template, 1, 0, "app-form-page", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, WizardContainerComponent_uvx_modal_1_app_launch_point_page_3_Template, 1, 0, "app-launch-point-page", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.wizardStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.wizardSteps);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.launchPoint);
  }
}
class WizardContainerComponent {
  constructor(stepsService, router, route) {
    this.stepsService = stepsService;
    this.router = router;
    this.route = route;
    this.wizardStart = true;
    this.wizardSteps = false;
    this.launchPoint = false;
    this.wizardMode = '';
  }
  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => this.wizardMode = queryParams['wizardMode']);
  }
  startWizard() {
    this.wizardStart = false;
    this.wizardSteps = true;
  }
  cancelWizard() {
    this.stepsService.cancelWizard();
  }
  startLaunchPoint() {
    this.wizardSteps = false;
    this.launchPoint = true;
  }
}
WizardContainerComponent.ɵfac = function WizardContainerComponent_Factory(t) {
  return new (t || WizardContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_wizard_service__WEBPACK_IMPORTED_MODULE_0__.WizardService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
};
WizardContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: WizardContainerComponent,
  selectors: [["app-wizard-container"]],
  decls: 2,
  vars: 2,
  consts: [["class", "wizard-full", 4, "ngIf"], ["class", "wizard-container", 4, "ngIf"], [1, "wizard-full"], [3, "onSubmitEvent"], [1, "wizard-container"], [3, "createNewProjectEvent", 4, "ngIf"], [3, "onSubmitEvent", 4, "ngIf"], [4, "ngIf"], [3, "createNewProjectEvent"]],
  template: function WizardContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, WizardContainerComponent_div_0_Template, 2, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, WizardContainerComponent_uvx_modal_1_Template, 4, 3, "uvx-modal", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.wizardMode === "fullscreen");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.wizardMode !== "fullscreen");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _uv_ui_lib_src_lib_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__.ModalComponent, _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_2__.StartPageComponent, _form_page_form_page_component__WEBPACK_IMPORTED_MODULE_3__.FormPageComponent, _launch_point_page_launch_point_page_component__WEBPACK_IMPORTED_MODULE_4__.LaunchPointPageComponent],
  styles: ["[_ngcontent-%COMP%]:root {\n  --uv-font-family: \"Open Sans\", sans-serif;\n  --uv-font-bold: 700;\n  --uv-font-semibold: 600;\n  --uv-font-medium-bold: 500;\n  --uv-color-primary: var(--uv-color-blue);\n  --uv-color-primary-active: var(--uv-color-blue-2);\n  --uv-color-primary-hover: var(--uv-color-blue-3);\n  --uv-color-primary-light: var(--uv-color-blue-4);\n  --uv-color-success: #03a474;\n  --uv-color-success-active: #007b56;\n  --uv-color-success-light: #D6F0E9;\n  --uv-color-danger: #E28003;\n  --uv-color-danger-light: #FAEAD6;\n  --uv-color-help: var(--uv-color-purple);\n  --uv-color-help-active: var(--uv-color-purple);\n  --uv-font-color: var(--uv-color-black);\n  --uv-font-color-secondary: var(--uv-color-gray-dark);\n  --uv-scrollbar-color: var(--uv-color-gray-light-5);\n  --uv-background-color: var(--uv-color-gray-light-2);\n  --uv-svg-color-gray: var(--uv-color-gray);\n  --uv-border-color-gray: var(--uv-color-gray-2);\n  --uv-color-blue: #00A3E5;\n  --uv-color-blue-2:#0375a4;\n  --uv-color-blue-3: rgba(0,163,229,0.08);\n  --uv-color-blue-4: rgba(0, 164, 229, 0.248);\n  --uv-color-purple: #83439A;\n  --uv-color-white: #ffffff;\n  --uv-color-white-2: rgba(251, 251, 251, 0.9);\n  --uv-color-gray: #D2D2D6;\n  --uv-color-gray-2: #dddddd;\n  --uv-color-gray-3: #DBDBDB;\n  --uv-color-gray-4: #4a4a4a;\n  --uv-color-gray-dark: #6E6D7A;\n  --uv-color-gray-light: #F3F3F4;\n  --uv-color-gray-light-2: #f1f1f1;\n  --uv-color-gray-light-3: #f7f7f7;\n  --uv-color-gray-light-4: #EDEDEE;\n  --uv-color-gray-light-5: #E7E7E9;\n  --uv-color-gray-light-6: #F9F9F9;\n  --uv-color-black: #0D0C22;\n  --uv-header-height: 64px;\n  --uv-navbar-width: 64px;\n  --uv-sidebar-width-md: 336px;\n  --uv-sidebar-width-sm: 288px;\n  --uv-grid-gap-vertical: 24px;\n  --uv-grid-gap-horizontal: 24px;\n  --uv-icon-bg: 400px;\n  --uv-box-shadow: 0 2px 12px 0 rgba(234, 234, 234, 0.5);\n  --uv-box-shadow-2: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n  --uv-box-shadow-3: 0 4px 12px 0 rgba(0, 0, 0, 0.1);\n  --uv-box-shadow-4: 0 4px 16px 0 rgba(0,0,0,0.16);\n  --uv-box-shadow-hover: 0 4px 8px 0 rgba(0, 0, 0, 0.16);\n  --uv-box-shadow-hover-2: 0 4px 8px 0 rgba(0, 0, 0, 0.16);\n  --uv-box-shadow-big: 0 24px 144px 0 rgba(0,0,0,0.12);\n  --uv-border-gray: 1px solid var(--uv-border-color-gray);\n  --uv-linear-gradient: linear-gradient(180deg, #84439971 0%, #4acaf571 100%);\n  --uv-font-size-xs: 12px;\n  --uv-font-size-sm: 14px;\n  --uv-font-size-sm-md: 16px;\n  --uv-font-size-md: 18px;\n  --uv-font-size-md-lg: 20px;\n  --uv-font-size-lg: 24px;\n  --uv-font-size-xl: 28px;\n  --uv-font-size-xxl: 36px;\n  --uv-xxxs-size: 4px;\n  --uv-xxs-size: 8px;\n  --uv-xs-size: 16px;\n  --uv-sm-size: 24px;\n  --uv-md-size: 32px;\n  --uv-lg-size: 48px;\n  --uv-xl-size: 64px;\n  --uv-z-index-popup: 2000;\n  --uv-z-index-popup-backdrop: 1080;\n  --uv-z-index-uv-light-backdrop: 1075;\n  --uv-z-index-navbar: 1070;\n  --uv-z-index-search-sidebar-dropdown: 1065;\n  --uv-z-index-search-sidebar-toolmenu: 1061;\n  --uv-z-index-search-sidebar: 1060;\n  --uv-z-index-wallet-sidebar: 1055;\n  --uv-z-index-wallet-entity-preview: 1050;\n  --uv-z-index-search-backdrop: 1050;\n  --uv-z-index-header: 950;\n  --uv-z-index-action-bar: 900;\n  --uv-z-index-sidebar-1: 800;\n  --uv-z-index-sidebar-2: 750;\n}\n\n.wizard-container[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  border-radius: 8px;\n  z-index: var(--uv-z-index-popup);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n@media (max-width: 1200px) {\n  .wizard-container[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n@media (max-height: 800px) {\n  .wizard-container[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n.wizard-full[_ngcontent-%COMP%] {\n  background-color: var(--uv-color-white);\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHV2LXVpLWxpYlxcc3JjXFxsaWJcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsIndpemFyZC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJBO0VBQ0kseUNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFHQSx3Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDhDQUFBO0VBQ0Esc0NBQUE7RUFDQSxvREFBQTtFQUNBLGtEQUFBO0VBQ0EsbURBQUE7RUFDQSx5Q0FBQTtFQUNBLDhDQUFBO0VBRUEsd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0VBQ0EsMkNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFHQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUdBLHNEQUFBO0VBQ0Esa0RBQUE7RUFDQSxrREFBQTtFQUNBLGdEQUFBO0VBQ0Esc0RBQUE7RUFDQSx3REFBQTtFQUNBLG9EQUFBO0VBQ0EsdURBQUE7RUFDQSwyRUFBQTtFQUdBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFHQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUdBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMENBQUE7RUFDQSwwQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSx3Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUMxQ0o7O0FBbkZBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFzRko7QUQrQ1E7RUM5SVI7SUFZUSxVQUFBO0VBdUZOO0FBQ0Y7QUR1Q1E7RUMzSVI7SUFnQlEsVUFBQTtFQXdGTjtBQUNGOztBQXJGQTtFQUNJLHVDQUFBO0VBQ0EsWUFBQTtBQXdGSiIsImZpbGUiOiJ3aXphcmQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZvbnQtZmFjZSB7XG4vLyAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnO1xuLy8gICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9kcHphcTF3ajIxY28zLmNsb3VkZnJvbnQubmV0L2ZvbnRzL05vdG9fU2Fucy9Ob3RvU2Fucy1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbi8vICAgICBmb250LXdlaWdodDogNDAwO1xuLy8gfVxuXG4vLyBAZm9udC1mYWNlIHtcbi8vICAgICBmb250LWZhbWlseTogJ05vdG8gU2Fucyc7XG4vLyAgICAgc3JjOiB1cmwoXCJodHRwczovL2RwemFxMXdqMjFjbzMuY2xvdWRmcm9udC5uZXQvZm9udHMvTm90b19TYW5zL05vdG9TYW5zLU1lZGl1bS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbi8vIH1cblxuLy8gQGZvbnQtZmFjZSB7XG4vLyAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnO1xuLy8gICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9kcHphcTF3ajIxY28zLmNsb3VkZnJvbnQubmV0L2ZvbnRzL05vdG9fU2Fucy9Ob3RvU2Fucy1TZW1pQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbi8vIH1cblxuLy8gQGZvbnQtZmFjZSB7XG4vLyAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnO1xuLy8gICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9kcHphcTF3ajIxY28zLmNsb3VkZnJvbnQubmV0L2ZvbnRzL05vdG9fU2Fucy9Ob3RvU2Fucy1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbi8vICAgICBmb250LXdlaWdodDogNzAwO1xuLy8gfVxuXG4vLyBAZm9udC1mYWNlIHtcbi8vICAgICBmb250LWZhbWlseTogJ05vdG8gU2Fucyc7XG4vLyAgICAgc3JjOiB1cmwoXCJodHRwczovL2RwemFxMXdqMjFjbzMuY2xvdWRmcm9udC5uZXQvZm9udHMvTm90b19TYW5zL05vdG9TYW5zLUl0YWxpYy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4vLyAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuLy8gfVxuXG46cm9vdCB7XG4gICAgLS11di1mb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgLS11di1mb250LWJvbGQ6IDcwMDtcbiAgICAtLXV2LWZvbnQtc2VtaWJvbGQ6IDYwMDtcbiAgICAtLXV2LWZvbnQtbWVkaXVtLWJvbGQ6IDUwMDtcblxuICAgIC8vY29sb3JzXG4gICAgLS11di1jb2xvci1wcmltYXJ5OiB2YXIoLS11di1jb2xvci1ibHVlKTtcbiAgICAtLXV2LWNvbG9yLXByaW1hcnktYWN0aXZlOiB2YXIoLS11di1jb2xvci1ibHVlLTIpO1xuICAgIC0tdXYtY29sb3ItcHJpbWFyeS1ob3ZlcjogdmFyKC0tdXYtY29sb3ItYmx1ZS0zKTtcbiAgICAtLXV2LWNvbG9yLXByaW1hcnktbGlnaHQ6IHZhcigtLXV2LWNvbG9yLWJsdWUtNCk7XG4gICAgLS11di1jb2xvci1zdWNjZXNzOiAjMDNhNDc0O1xuICAgIC0tdXYtY29sb3Itc3VjY2Vzcy1hY3RpdmU6ICMwMDdiNTY7XG4gICAgLS11di1jb2xvci1zdWNjZXNzLWxpZ2h0OiAjRDZGMEU5O1xuICAgIC0tdXYtY29sb3ItZGFuZ2VyOiAjRTI4MDAzO1xuICAgIC0tdXYtY29sb3ItZGFuZ2VyLWxpZ2h0OiAjRkFFQUQ2O1xuICAgIC0tdXYtY29sb3ItaGVscDogdmFyKC0tdXYtY29sb3ItcHVycGxlKTtcbiAgICAtLXV2LWNvbG9yLWhlbHAtYWN0aXZlOiB2YXIoLS11di1jb2xvci1wdXJwbGUpO1xuICAgIC0tdXYtZm9udC1jb2xvcjogdmFyKC0tdXYtY29sb3ItYmxhY2spO1xuICAgIC0tdXYtZm9udC1jb2xvci1zZWNvbmRhcnk6IHZhcigtLXV2LWNvbG9yLWdyYXktZGFyayk7XG4gICAgLS11di1zY3JvbGxiYXItY29sb3I6IHZhcigtLXV2LWNvbG9yLWdyYXktbGlnaHQtNSk7XG4gICAgLS11di1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11di1jb2xvci1ncmF5LWxpZ2h0LTIpO1xuICAgIC0tdXYtc3ZnLWNvbG9yLWdyYXk6IHZhcigtLXV2LWNvbG9yLWdyYXkpO1xuICAgIC0tdXYtYm9yZGVyLWNvbG9yLWdyYXk6IHZhcigtLXV2LWNvbG9yLWdyYXktMik7XG5cbiAgICAtLXV2LWNvbG9yLWJsdWU6ICMwMEEzRTU7XG4gICAgLS11di1jb2xvci1ibHVlLTI6IzAzNzVhNDtcbiAgICAtLXV2LWNvbG9yLWJsdWUtMzogcmdiYSgwLDE2MywyMjksMC4wOCk7XG4gICAgLS11di1jb2xvci1ibHVlLTQ6IHJnYmEoMCwgMTY0LCAyMjksIDAuMjQ4KTtcbiAgICAtLXV2LWNvbG9yLXB1cnBsZTogIzgzNDM5QTtcbiAgICAtLXV2LWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuICAgIC0tdXYtY29sb3Itd2hpdGUtMjogcmdiYSgyNTEsIDI1MSwgMjUxLCAwLjkpO1xuICAgIC0tdXYtY29sb3ItZ3JheTogI0QyRDJENjtcbiAgICAtLXV2LWNvbG9yLWdyYXktMjogI2RkZGRkZDtcbiAgICAtLXV2LWNvbG9yLWdyYXktMzogI0RCREJEQjtcbiAgICAtLXV2LWNvbG9yLWdyYXktNDogIzRhNGE0YTtcbiAgICAtLXV2LWNvbG9yLWdyYXktZGFyazogIzZFNkQ3QTtcbiAgICAtLXV2LWNvbG9yLWdyYXktbGlnaHQ6ICNGM0YzRjQ7XG4gICAgLS11di1jb2xvci1ncmF5LWxpZ2h0LTI6ICNmMWYxZjE7XG4gICAgLS11di1jb2xvci1ncmF5LWxpZ2h0LTM6ICNmN2Y3Zjc7XG4gICAgLS11di1jb2xvci1ncmF5LWxpZ2h0LTQ6ICNFREVERUU7XG4gICAgLS11di1jb2xvci1ncmF5LWxpZ2h0LTU6ICNFN0U3RTk7XG4gICAgLS11di1jb2xvci1ncmF5LWxpZ2h0LTY6ICNGOUY5Rjk7XG4gICAgLS11di1jb2xvci1ibGFjazogIzBEMEMyMjtcblxuICAgIC8vc2l6ZXNcbiAgICAtLXV2LWhlYWRlci1oZWlnaHQ6IDY0cHg7XG4gICAgLS11di1uYXZiYXItd2lkdGg6IDY0cHg7XG4gICAgLS11di1zaWRlYmFyLXdpZHRoLW1kOiAzMzZweDtcbiAgICAtLXV2LXNpZGViYXItd2lkdGgtc206IDI4OHB4O1xuICAgIC0tdXYtZ3JpZC1nYXAtdmVydGljYWw6IDI0cHg7XG4gICAgLS11di1ncmlkLWdhcC1ob3Jpem9udGFsOiAyNHB4O1xuICAgIC0tdXYtaWNvbi1iZzogNDAwcHg7XG5cbiAgICAvL3N0eWxlc1xuICAgIC0tdXYtYm94LXNoYWRvdzogMCAycHggMTJweCAwIHJnYmEoMjM0LCAyMzQsIDIzNCwgMC41KTtcbiAgICAtLXV2LWJveC1zaGFkb3ctMjogMCA0cHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAtLXV2LWJveC1zaGFkb3ctMzogMCA0cHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtLXV2LWJveC1zaGFkb3ctNDogMCA0cHggMTZweCAwIHJnYmEoMCwwLDAsMC4xNik7XG4gICAgLS11di1ib3gtc2hhZG93LWhvdmVyOiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIC0tdXYtYm94LXNoYWRvdy1ob3Zlci0yOiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIC0tdXYtYm94LXNoYWRvdy1iaWc6IDAgMjRweCAxNDRweCAwIHJnYmEoMCwwLDAsMC4xMik7XG4gICAgLS11di1ib3JkZXItZ3JheTogMXB4IHNvbGlkIHZhcigtLXV2LWJvcmRlci1jb2xvci1ncmF5KTtcbiAgICAtLXV2LWxpbmVhci1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzg0NDM5OTcxIDAlLCAjNGFjYWY1NzEgMTAwJSk7XG5cbiAgICAvL3R5cG9ncmFwaHlcbiAgICAtLXV2LWZvbnQtc2l6ZS14czogMTJweDtcbiAgICAtLXV2LWZvbnQtc2l6ZS1zbTogMTRweDtcbiAgICAtLXV2LWZvbnQtc2l6ZS1zbS1tZDogMTZweDtcbiAgICAtLXV2LWZvbnQtc2l6ZS1tZDogMThweDtcbiAgICAtLXV2LWZvbnQtc2l6ZS1tZC1sZzogMjBweDtcbiAgICAtLXV2LWZvbnQtc2l6ZS1sZzogMjRweDtcbiAgICAtLXV2LWZvbnQtc2l6ZS14bDogMjhweDtcbiAgICAtLXV2LWZvbnQtc2l6ZS14eGw6IDM2cHg7XG5cbiAgICAvL3NpemVzXG4gICAgLS11di14eHhzLXNpemU6IDRweDtcbiAgICAtLXV2LXh4cy1zaXplOiA4cHg7XG4gICAgLS11di14cy1zaXplOiAxNnB4O1xuICAgIC0tdXYtc20tc2l6ZTogMjRweDtcbiAgICAtLXV2LW1kLXNpemU6IDMycHg7XG4gICAgLS11di1sZy1zaXplOiA0OHB4O1xuICAgIC0tdXYteGwtc2l6ZTogNjRweDtcblxuICAgIC8vei1pbmRleFxuICAgIC0tdXYtei1pbmRleC1wb3B1cDogMjAwMDtcbiAgICAtLXV2LXotaW5kZXgtcG9wdXAtYmFja2Ryb3A6IDEwODA7XG4gICAgLS11di16LWluZGV4LXV2LWxpZ2h0LWJhY2tkcm9wOiAxMDc1O1xuICAgIC0tdXYtei1pbmRleC1uYXZiYXI6IDEwNzA7XG4gICAgLS11di16LWluZGV4LXNlYXJjaC1zaWRlYmFyLWRyb3Bkb3duOiAxMDY1O1xuICAgIC0tdXYtei1pbmRleC1zZWFyY2gtc2lkZWJhci10b29sbWVudTogMTA2MTtcbiAgICAtLXV2LXotaW5kZXgtc2VhcmNoLXNpZGViYXI6IDEwNjA7XG4gICAgLS11di16LWluZGV4LXdhbGxldC1zaWRlYmFyOiAxMDU1O1xuICAgIC0tdXYtei1pbmRleC13YWxsZXQtZW50aXR5LXByZXZpZXc6IDEwNTA7XG4gICAgLS11di16LWluZGV4LXNlYXJjaC1iYWNrZHJvcDogMTA1MDtcbiAgICAtLXV2LXotaW5kZXgtaGVhZGVyOiA5NTA7XG4gICAgLS11di16LWluZGV4LWFjdGlvbi1iYXI6IDkwMDtcbiAgICAtLXV2LXotaW5kZXgtc2lkZWJhci0xOiA4MDA7XG4gICAgLS11di16LWluZGV4LXNpZGViYXItMjogNzUwO1xufVxuXG5AbWl4aW4gcmVzcG9uZCgkYnJlYWtwb2ludCkge1xuICAgIC8vIEBpZiAkYnJlYWtwb2ludCA9PSBwaG9uZSB7XG4gICAgLy8gICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNy41ZW0pIHsgQGNvbnRlbnQgfTsgLy82MDBweFxuICAgIC8vIH1cbiAgICAvLyBAaWYgJGJyZWFrcG9pbnQgPT0gdGFiLXBvcnQge1xuICAgIC8vICAgICBAbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkgeyBAY29udGVudCB9OyAvLzkwMHB4XG4gICAgLy8gfVxuICAgIEBpZiAkYnJlYWtwb2ludCA9PSB0YWItbGFuZCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHsgQGNvbnRlbnQgfTtcbiAgICB9XG4gICAgQGlmICRicmVha3BvaW50ID09IHNtYWxsLWRlc2t0b3AtaGVpZ2h0IHtcbiAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA4MDBweCkgeyBAY29udGVudCB9O1xuICAgIH1cbiAgICBAaWYgJGJyZWFrcG9pbnQgPT0gc21hbGwtZGVza3RvcC13aWR0aCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHsgQGNvbnRlbnQgfTsgXG4gICAgfVxuICAgIEBpZiAkYnJlYWtwb2ludCA9PSBiaWctZGVza3RvcC1oZWlnaHQge1xuICAgICAgICBAbWVkaWEgKG1pbi1oZWlnaHQ6IDgwMHB4KSB7IEBjb250ZW50IH07IFxuICAgIH1cbn1cbiIsIi8vIEBpbXBvcnQgJy4uLy4uLy4uLy4uL3Njc3MvL21haW4uc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi8uLi91di11aS1saWIvc3JjL2xpYi9zY3NzL3ZhcmlhYmxlcyc7XG5cbi53aXphcmQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHotaW5kZXg6IHZhcigtLXV2LXotaW5kZXgtcG9wdXApO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQoc21hbGwtZGVza3RvcC13aWR0aCkge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJlc3BvbmQoc21hbGwtZGVza3RvcC1oZWlnaHQpIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG59XG5cbi53aXphcmQtZnVsbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdXYtY29sb3Itd2hpdGUpO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLWxpYi9zcmMvbGliL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vcHJvamVjdHMvdXYtdWktcHJvdG90eXBlL3NyYy9hcHAvZ2xvYmFsLXdoZXJlLXVzZWQvcHJvamVjdC13aXphcmQvd2l6YXJkLWNvbnRhaW5lci93aXphcmQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCQTtFQUNJLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBR0Esd0NBQUE7RUFDQSxpREFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSw4Q0FBQTtFQUNBLHNDQUFBO0VBQ0Esb0RBQUE7RUFDQSxrREFBQTtFQUNBLG1EQUFBO0VBQ0EseUNBQUE7RUFDQSw4Q0FBQTtFQUVBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBR0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFHQSxzREFBQTtFQUNBLGtEQUFBO0VBQ0Esa0RBQUE7RUFDQSxnREFBQTtFQUNBLHNEQUFBO0VBQ0Esd0RBQUE7RUFDQSxvREFBQTtFQUNBLHVEQUFBO0VBQ0EsMkVBQUE7RUFHQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBR0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFHQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0VBQ0EsMENBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FDMUNKOztBQW5GQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBc0ZKO0FEK0NRO0VDOUlSO0lBWVEsVUFBQTtFQXVGTjtBQUNGO0FEdUNRO0VDM0lSO0lBZ0JRLFVBQUE7RUF3Rk47QUFDRjs7QUFyRkE7RUFDSSx1Q0FBQTtFQUNBLFlBQUE7QUF3Rko7QUFDQSx3NFNBQXc0UyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmb250LWZhY2Uge1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJztcbi8vICAgICBzcmM6IHVybChcImh0dHBzOi8vZHB6YXExd2oyMWNvMy5jbG91ZGZyb250Lm5ldC9mb250cy9Ob3RvX1NhbnMvTm90b1NhbnMtUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbi8vIH1cblxuLy8gQGZvbnQtZmFjZSB7XG4vLyAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnO1xuLy8gICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9kcHphcTF3ajIxY28zLmNsb3VkZnJvbnQubmV0L2ZvbnRzL05vdG9fU2Fucy9Ob3RvU2Fucy1NZWRpdW0udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4vLyB9XG5cbi8vIEBmb250LWZhY2Uge1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJztcbi8vICAgICBzcmM6IHVybChcImh0dHBzOi8vZHB6YXExd2oyMWNvMy5jbG91ZGZyb250Lm5ldC9mb250cy9Ob3RvX1NhbnMvTm90b1NhbnMtU2VtaUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyB9XG5cbi8vIEBmb250LWZhY2Uge1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJztcbi8vICAgICBzcmM6IHVybChcImh0dHBzOi8vZHB6YXExd2oyMWNvMy5jbG91ZGZyb250Lm5ldC9mb250cy9Ob3RvX1NhbnMvTm90b1NhbnMtQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbi8vIH1cblxuLy8gQGZvbnQtZmFjZSB7XG4vLyAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnO1xuLy8gICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9kcHphcTF3ajIxY28zLmNsb3VkZnJvbnQubmV0L2ZvbnRzL05vdG9fU2Fucy9Ob3RvU2Fucy1JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuLy8gICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbi8vIH1cblxuOnJvb3Qge1xuICAgIC0tdXYtZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIC0tdXYtZm9udC1ib2xkOiA3MDA7XG4gICAgLS11di1mb250LXNlbWlib2xkOiA2MDA7XG4gICAgLS11di1mb250LW1lZGl1bS1ib2xkOiA1MDA7XG5cbiAgICAvL2NvbG9yc1xuICAgIC0tdXYtY29sb3ItcHJpbWFyeTogdmFyKC0tdXYtY29sb3ItYmx1ZSk7XG4gICAgLS11di1jb2xvci1wcmltYXJ5LWFjdGl2ZTogdmFyKC0tdXYtY29sb3ItYmx1ZS0yKTtcbiAgICAtLXV2LWNvbG9yLXByaW1hcnktaG92ZXI6IHZhcigtLXV2LWNvbG9yLWJsdWUtMyk7XG4gICAgLS11di1jb2xvci1wcmltYXJ5LWxpZ2h0OiB2YXIoLS11di1jb2xvci1ibHVlLTQpO1xuICAgIC0tdXYtY29sb3Itc3VjY2VzczogIzAzYTQ3NDtcbiAgICAtLXV2LWNvbG9yLXN1Y2Nlc3MtYWN0aXZlOiAjMDA3YjU2O1xuICAgIC0tdXYtY29sb3Itc3VjY2Vzcy1saWdodDogI0Q2RjBFOTtcbiAgICAtLXV2LWNvbG9yLWRhbmdlcjogI0UyODAwMztcbiAgICAtLXV2LWNvbG9yLWRhbmdlci1saWdodDogI0ZBRUFENjtcbiAgICAtLXV2LWNvbG9yLWhlbHA6IHZhcigtLXV2LWNvbG9yLXB1cnBsZSk7XG4gICAgLS11di1jb2xvci1oZWxwLWFjdGl2ZTogdmFyKC0tdXYtY29sb3ItcHVycGxlKTtcbiAgICAtLXV2LWZvbnQtY29sb3I6IHZhcigtLXV2LWNvbG9yLWJsYWNrKTtcbiAgICAtLXV2LWZvbnQtY29sb3Itc2Vjb25kYXJ5OiB2YXIoLS11di1jb2xvci1ncmF5LWRhcmspO1xuICAgIC0tdXYtc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS11di1jb2xvci1ncmF5LWxpZ2h0LTUpO1xuICAgIC0tdXYtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdXYtY29sb3ItZ3JheS1saWdodC0yKTtcbiAgICAtLXV2LXN2Zy1jb2xvci1ncmF5OiB2YXIoLS11di1jb2xvci1ncmF5KTtcbiAgICAtLXV2LWJvcmRlci1jb2xvci1ncmF5OiB2YXIoLS11di1jb2xvci1ncmF5LTIpO1xuXG4gICAgLS11di1jb2xvci1ibHVlOiAjMDBBM0U1O1xuICAgIC0tdXYtY29sb3ItYmx1ZS0yOiMwMzc1YTQ7XG4gICAgLS11di1jb2xvci1ibHVlLTM6IHJnYmEoMCwxNjMsMjI5LDAuMDgpO1xuICAgIC0tdXYtY29sb3ItYmx1ZS00OiByZ2JhKDAsIDE2NCwgMjI5LCAwLjI0OCk7XG4gICAgLS11di1jb2xvci1wdXJwbGU6ICM4MzQzOUE7XG4gICAgLS11di1jb2xvci13aGl0ZTogI2ZmZmZmZjtcbiAgICAtLXV2LWNvbG9yLXdoaXRlLTI6IHJnYmEoMjUxLCAyNTEsIDI1MSwgMC45KTtcbiAgICAtLXV2LWNvbG9yLWdyYXk6ICNEMkQyRDY7XG4gICAgLS11di1jb2xvci1ncmF5LTI6ICNkZGRkZGQ7XG4gICAgLS11di1jb2xvci1ncmF5LTM6ICNEQkRCREI7XG4gICAgLS11di1jb2xvci1ncmF5LTQ6ICM0YTRhNGE7XG4gICAgLS11di1jb2xvci1ncmF5LWRhcms6ICM2RTZEN0E7XG4gICAgLS11di1jb2xvci1ncmF5LWxpZ2h0OiAjRjNGM0Y0O1xuICAgIC0tdXYtY29sb3ItZ3JheS1saWdodC0yOiAjZjFmMWYxO1xuICAgIC0tdXYtY29sb3ItZ3JheS1saWdodC0zOiAjZjdmN2Y3O1xuICAgIC0tdXYtY29sb3ItZ3JheS1saWdodC00OiAjRURFREVFO1xuICAgIC0tdXYtY29sb3ItZ3JheS1saWdodC01OiAjRTdFN0U5O1xuICAgIC0tdXYtY29sb3ItZ3JheS1saWdodC02OiAjRjlGOUY5O1xuICAgIC0tdXYtY29sb3ItYmxhY2s6ICMwRDBDMjI7XG5cbiAgICAvL3NpemVzXG4gICAgLS11di1oZWFkZXItaGVpZ2h0OiA2NHB4O1xuICAgIC0tdXYtbmF2YmFyLXdpZHRoOiA2NHB4O1xuICAgIC0tdXYtc2lkZWJhci13aWR0aC1tZDogMzM2cHg7XG4gICAgLS11di1zaWRlYmFyLXdpZHRoLXNtOiAyODhweDtcbiAgICAtLXV2LWdyaWQtZ2FwLXZlcnRpY2FsOiAyNHB4O1xuICAgIC0tdXYtZ3JpZC1nYXAtaG9yaXpvbnRhbDogMjRweDtcbiAgICAtLXV2LWljb24tYmc6IDQwMHB4O1xuXG4gICAgLy9zdHlsZXNcbiAgICAtLXV2LWJveC1zaGFkb3c6IDAgMnB4IDEycHggMCByZ2JhKDIzNCwgMjM0LCAyMzQsIDAuNSk7XG4gICAgLS11di1ib3gtc2hhZG93LTI6IDAgNHB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgLS11di1ib3gtc2hhZG93LTM6IDAgNHB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLS11di1ib3gtc2hhZG93LTQ6IDAgNHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMTYpO1xuICAgIC0tdXYtYm94LXNoYWRvdy1ob3ZlcjogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAtLXV2LWJveC1zaGFkb3ctaG92ZXItMjogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAtLXV2LWJveC1zaGFkb3ctYmlnOiAwIDI0cHggMTQ0cHggMCByZ2JhKDAsMCwwLDAuMTIpO1xuICAgIC0tdXYtYm9yZGVyLWdyYXk6IDFweCBzb2xpZCB2YXIoLS11di1ib3JkZXItY29sb3ItZ3JheSk7XG4gICAgLS11di1saW5lYXItZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM4NDQzOTk3MSAwJSwgIzRhY2FmNTcxIDEwMCUpO1xuXG4gICAgLy90eXBvZ3JhcGh5XG4gICAgLS11di1mb250LXNpemUteHM6IDEycHg7XG4gICAgLS11di1mb250LXNpemUtc206IDE0cHg7XG4gICAgLS11di1mb250LXNpemUtc20tbWQ6IDE2cHg7XG4gICAgLS11di1mb250LXNpemUtbWQ6IDE4cHg7XG4gICAgLS11di1mb250LXNpemUtbWQtbGc6IDIwcHg7XG4gICAgLS11di1mb250LXNpemUtbGc6IDI0cHg7XG4gICAgLS11di1mb250LXNpemUteGw6IDI4cHg7XG4gICAgLS11di1mb250LXNpemUteHhsOiAzNnB4O1xuXG4gICAgLy9zaXplc1xuICAgIC0tdXYteHh4cy1zaXplOiA0cHg7XG4gICAgLS11di14eHMtc2l6ZTogOHB4O1xuICAgIC0tdXYteHMtc2l6ZTogMTZweDtcbiAgICAtLXV2LXNtLXNpemU6IDI0cHg7XG4gICAgLS11di1tZC1zaXplOiAzMnB4O1xuICAgIC0tdXYtbGctc2l6ZTogNDhweDtcbiAgICAtLXV2LXhsLXNpemU6IDY0cHg7XG5cbiAgICAvL3otaW5kZXhcbiAgICAtLXV2LXotaW5kZXgtcG9wdXA6IDIwMDA7XG4gICAgLS11di16LWluZGV4LXBvcHVwLWJhY2tkcm9wOiAxMDgwO1xuICAgIC0tdXYtei1pbmRleC11di1saWdodC1iYWNrZHJvcDogMTA3NTtcbiAgICAtLXV2LXotaW5kZXgtbmF2YmFyOiAxMDcwO1xuICAgIC0tdXYtei1pbmRleC1zZWFyY2gtc2lkZWJhci1kcm9wZG93bjogMTA2NTtcbiAgICAtLXV2LXotaW5kZXgtc2VhcmNoLXNpZGViYXItdG9vbG1lbnU6IDEwNjE7XG4gICAgLS11di16LWluZGV4LXNlYXJjaC1zaWRlYmFyOiAxMDYwO1xuICAgIC0tdXYtei1pbmRleC13YWxsZXQtc2lkZWJhcjogMTA1NTtcbiAgICAtLXV2LXotaW5kZXgtd2FsbGV0LWVudGl0eS1wcmV2aWV3OiAxMDUwO1xuICAgIC0tdXYtei1pbmRleC1zZWFyY2gtYmFja2Ryb3A6IDEwNTA7XG4gICAgLS11di16LWluZGV4LWhlYWRlcjogOTUwO1xuICAgIC0tdXYtei1pbmRleC1hY3Rpb24tYmFyOiA5MDA7XG4gICAgLS11di16LWluZGV4LXNpZGViYXItMTogODAwO1xuICAgIC0tdXYtei1pbmRleC1zaWRlYmFyLTI6IDc1MDtcbn1cblxuQG1peGluIHJlc3BvbmQoJGJyZWFrcG9pbnQpIHtcbiAgICAvLyBAaWYgJGJyZWFrcG9pbnQgPT0gcGhvbmUge1xuICAgIC8vICAgICBAbWVkaWEgKG1heC13aWR0aDogMzcuNWVtKSB7IEBjb250ZW50IH07IC8vNjAwcHhcbiAgICAvLyB9XG4gICAgLy8gQGlmICRicmVha3BvaW50ID09IHRhYi1wb3J0IHtcbiAgICAvLyAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHsgQGNvbnRlbnQgfTsgLy85MDBweFxuICAgIC8vIH1cbiAgICBAaWYgJGJyZWFrcG9pbnQgPT0gdGFiLWxhbmQge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7IEBjb250ZW50IH07XG4gICAgfVxuICAgIEBpZiAkYnJlYWtwb2ludCA9PSBzbWFsbC1kZXNrdG9wLWhlaWdodCB7XG4gICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogODAwcHgpIHsgQGNvbnRlbnQgfTtcbiAgICB9XG4gICAgQGlmICRicmVha3BvaW50ID09IHNtYWxsLWRlc2t0b3Atd2lkdGgge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7IEBjb250ZW50IH07IFxuICAgIH1cbiAgICBAaWYgJGJyZWFrcG9pbnQgPT0gYmlnLWRlc2t0b3AtaGVpZ2h0IHtcbiAgICAgICAgQG1lZGlhIChtaW4taGVpZ2h0OiA4MDBweCkgeyBAY29udGVudCB9OyBcbiAgICB9XG59XG4iLCIvLyBAaW1wb3J0ICcuLi8uLi8uLi8uLi9zY3NzLy9tYWluLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vdXYtdWktbGliL3NyYy9saWIvc2Nzcy92YXJpYWJsZXMnO1xuXG4ud2l6YXJkLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB6LWluZGV4OiB2YXIoLS11di16LWluZGV4LXBvcHVwKTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kKHNtYWxsLWRlc2t0b3Atd2lkdGgpIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSByZXNwb25kKHNtYWxsLWRlc2t0b3AtaGVpZ2h0KSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxufVxuXG4ud2l6YXJkLWZ1bGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXV2LWNvbG9yLXdoaXRlKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */", ".grid[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vh - 64px);\n  display: grid;\n  grid-gap: 0;\n  grid-template-columns: [col1] 336px [col2] auto;\n  grid-template-rows: [row1] 68px [row2] auto;\n  grid-template-areas: \"sidebar appbar\" \"sidebar main\";\n}\n\n.actionbar[_ngcontent-%COMP%] {\n  grid-column: col2;\n  grid-row: row1;\n  border-top: none;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  grid-column: col1;\n  grid-row-start: row1;\n  grid-row-end: 3;\n}\n\n.content[_ngcontent-%COMP%] {\n  grid-column: col2;\n  grid-row: row2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC13aGVyZS11c2VkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7RUFDQSwyQ0FBQTtFQUNBLG9EQUNJO0FBQVI7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6Imdsb2JhbC13aGVyZS11c2VkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAwO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW2NvbDFdIDMzNnB4IFtjb2wyXSBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogW3JvdzFdIDY4cHggW3JvdzJdIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJzaWRlYmFyIGFwcGJhclwiXG4gICAgICAgIFwic2lkZWJhciBtYWluXCIgO1xufVxuXG4uYWN0aW9uYmFyIHtcbiAgICBncmlkLWNvbHVtbjogY29sMjtcbiAgICBncmlkLXJvdzogcm93MTtcbiAgICBib3JkZXItdG9wOiBub25lO1xufVxuLnNpZGViYXIge1xuICAgIGdyaWQtY29sdW1uOiBjb2wxO1xuICAgIGdyaWQtcm93LXN0YXJ0OiByb3cxO1xuICAgIGdyaWQtcm93LWVuZDogMztcbn1cbi5jb250ZW50IHtcbiAgICBncmlkLWNvbHVtbjogY29sMjtcbiAgICBncmlkLXJvdzogcm93Mjtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL2dsb2JhbC13aGVyZS11c2VkL2dsb2JhbC13aGVyZS11c2VkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7RUFDQSwyQ0FBQTtFQUNBLG9EQUNJO0FBQVI7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0EsNHNDQUE0c0MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDA7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbY29sMV0gMzM2cHggW2NvbDJdIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBbcm93MV0gNjhweCBbcm93Ml0gYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcInNpZGViYXIgYXBwYmFyXCJcbiAgICAgICAgXCJzaWRlYmFyIG1haW5cIiA7XG59XG5cbi5hY3Rpb25iYXIge1xuICAgIGdyaWQtY29sdW1uOiBjb2wyO1xuICAgIGdyaWQtcm93OiByb3cxO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG59XG4uc2lkZWJhciB7XG4gICAgZ3JpZC1jb2x1bW46IGNvbDE7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IHJvdzE7XG4gICAgZ3JpZC1yb3ctZW5kOiAzO1xufVxuLmNvbnRlbnQge1xuICAgIGdyaWQtY29sdW1uOiBjb2wyO1xuICAgIGdyaWQtcm93OiByb3cyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
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

/***/ 74972:
/*!************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/wizard/sbs-wizard.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SbsWizardService": () => (/* binding */ SbsWizardService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 18406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 39609);


const STEPS = [{
  stepIndex: 1,
  isComplete: false,
  title: 'Title of Step 1',
  description: ''
}, {
  stepIndex: 2,
  isComplete: false,
  title: 'Title of Step 2',
  description: ''
}, {
  stepIndex: 3,
  isComplete: false,
  title: 'Title of Step 3',
  description: ''
}];
class SbsWizardService {
  constructor() {
    this.emptyEntity = {
      category: '',
      name: '',
      id: null,
      description: '',
      active: false,
      disabled: false,
      date: '',
      formattedDate: ''
    };
    this.wizardData = {
      locations: [],
      goal: '',
      focus: '',
      entity: this.emptyEntity,
      stepOneComplete: false,
      stepTwoComplete: false,
      stepThreeComplete: false,
      stepOneSkip: false,
      stepTwoSkip: false,
      stepThreeSkip: false
    };
    this.initialResultsNumber = 5093;
    this.wizardData$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.wizardData);
    this.steps$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(STEPS);
    this.currentStep$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.onCancelWizard$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.results$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.initialResultsNumber);
    this.currentStep$.next(this.steps$.value[0]);
  }
  setCurrentStep(step) {
    this.currentStep$.next(step);
  }
  getCurrentStep() {
    return this.currentStep$.asObservable();
  }
  getSteps() {
    return this.steps$.asObservable();
  }
  getWizardData() {
    return this.wizardData$.asObservable();
  }
  getResults() {
    return this.results$.asObservable();
  }
  updateResults(value) {
    const newValue = Math.floor(Math.random() * 1000);
    this.results$.next(newValue);
  }
  updateWizardData(property, value) {
    const wizardDataObject = this.wizardData$.value;
    if (property !== 'location') {
      this.wizardData$.next(Object.defineProperty(wizardDataObject, property, {
        value: value
      }));
    } else {
      wizardDataObject.locations.push(value);
    }
    console.log('update', this.wizardData$.value);
  }
  unselectLocation(item, i) {
    const wizardDataObject = this.wizardData$.value;
    wizardDataObject.locations.splice(i, 1);
  }
  moveToNextStep() {
    const index = this.currentStep$.value.stepIndex;
    if (index < this.steps$.value.length) {
      this.currentStep$.next(this.steps$.value[index]);
    }
  }
  moveBackStep() {
    const index = this.currentStep$.value.stepIndex;
    this.currentStep$.next(this.steps$.value[index - 2]);
  }
  checkIfStep1Complete() {
    const wizardData = this.wizardData$;
    if (wizardData.value.entity === this.emptyEntity || wizardData.value.entity === null) {
      wizardData.value.stepTwoComplete = false;
      this.steps$.value[0].isComplete = false;
    } else {
      wizardData.value.stepTwoComplete = true;
      this.steps$.value[0].isComplete = true;
    }
    // const wizardData = this.wizardData$;
    // if (wizardData.value.locations !== []) {
    //     wizardData.value.stepOneComplete = true;
    //     this.steps$.value[0].isComplete = true;
    // } else {
    //     this.steps$.value[0].isComplete = false;
    // }
  }

  checkIfStep2Complete() {
    const wizardData = this.wizardData$;
    if (wizardData.value.goal !== '') {
      wizardData.value.stepTwoComplete = true;
      this.steps$.value[1].isComplete = true;
    } else {
      wizardData.value.stepTwoComplete = false;
      this.steps$.value[1].isComplete = false;
    }
  }
  checkIfStep3Complete() {
    const data = this.wizardData$.value;
    if (data.focus !== '') {
      data.stepTwoComplete = true;
      this.steps$.value[2].isComplete = true;
    } else {
      data.stepTwoComplete = false;
      this.steps$.value[2].isComplete = false;
    }
  }
  resetWizard() {
    for (const step of STEPS) {
      step.isComplete = false;
    }
    this.setCurrentStep(this.steps$.value[0]);
    this.wizardData$.next({
      locations: [],
      goal: '',
      focus: '',
      entity: this.emptyEntity,
      stepOneComplete: false,
      stepTwoComplete: false,
      stepThreeComplete: false,
      stepOneSkip: false,
      stepTwoSkip: false,
      stepThreeSkip: false
    });
    this.results$.next(this.initialResultsNumber);
    console.log('reset wizard');
  }
  isLastStep() {
    return this.currentStep$.value.stepIndex === this.steps$.value.length;
  }
  cancelWizard() {
    this.onCancelWizard$.next(false);
    this.resetWizard();
  }
}
SbsWizardService.ɵfac = function SbsWizardService_Factory(t) {
  return new (t || SbsWizardService)();
};
SbsWizardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SbsWizardService,
  factory: SbsWizardService.ɵfac
});

/***/ }),

/***/ 63756:
/*!************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/wizard/step-one/locations.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locations": () => (/* binding */ locations)
/* harmony export */ });
const locations = [{
  name: 'Location 01',
  selected: false
}, {
  name: 'Location 02',
  selected: false
}, {
  name: 'Location 03',
  selected: false
}, {
  name: 'Location 04',
  selected: false
}, {
  name: 'Location 05',
  selected: false
}, {
  name: 'Location 06',
  selected: false
}];

/***/ }),

/***/ 40226:
/*!*********************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/wizard/step-one/step-one.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SbsStepOneComponent": () => (/* binding */ SbsStepOneComponent)
/* harmony export */ });
/* harmony import */ var _search_search_results_sample_search_results_allSearchResults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../search/search-results/sample-search-results/allSearchResults */ 81271);
/* harmony import */ var _locations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locations */ 63756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _sbs_wizard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sbs-wizard.service */ 74972);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/search.service */ 81701);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _uv_ui_lib_src_lib_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/search-panel/search-panel.component */ 12239);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 93557);








function SbsStepOneComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SbsStepOneComponent_div_6_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r3.selectEntity(item_r2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.entitySelected = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 8)(4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r2.description, " ");
  }
}
function SbsStepOneComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Metadata for the selected entity will be shown here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Document: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "This is the document metadata.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Section: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "This is the section metadata.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Selected entity: ", ctx_r1.selectedEntity.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.selectedEntity.description);
  }
}
class SbsStepOneComponent {
  constructor(sbsWizardService, ref, searchService) {
    this.sbsWizardService = sbsWizardService;
    this.ref = ref;
    this.searchService = searchService;
    this.locations = _locations__WEBPACK_IMPORTED_MODULE_1__.locations;
    this.locationSelected = false;
    this.showSuggestions = false;
    this.selectedLocations = [];
    this.searchResults = _search_search_results_sample_search_results_allSearchResults__WEBPACK_IMPORTED_MODULE_0__.allSearchResults;
    this.entitySelected = false;
    const entity = this.sbsWizardService.wizardData$.value.entity;
    if (entity !== this.sbsWizardService.emptyEntity) {
      this.searchText = entity.name;
    } else {
      this.searchText = '';
    }
  }
  ngAfterViewChecked() {
    if (this.searchText.length > 0) {
      this.searchResults = this.searchService.typeAheadSearch(this.searchText);
    }
    this.ref.detectChanges();
  }
  trackItem(index, item) {
    return item.name;
  }
  selectLocation(item, i) {
    if (!item.selected) {
      item.selected = true;
      this.sbsWizardService.updateWizardData('location', item.name);
      this.selectedLocations.push(item);
      this.sbsWizardService.updateResults(36);
    } else {
      this.unselectLocation(item, i);
    }
    this.sbsWizardService.checkIfStep1Complete();
  }
  // public clearSearch() {
  //     this.searchText = '';
  //     this.locationSelected = false;
  //     this.sbsWizardService.updateWizardData('location', '');
  //     this.sbsWizardService.checkIfStep1Complete();
  // }
  clearSearch() {
    this.searchText = '';
    this.entitySelected = false;
    this.sbsWizardService.updateWizardData('entity', this.sbsWizardService.emptyEntity);
    this.sbsWizardService.checkIfStep1Complete();
  }
  unselectLocation(item, i) {
    item.selected = false;
    this.selectedLocations.splice(i, 1);
    this.sbsWizardService.unselectLocation(item, i);
  }
  typeAhead(input) {
    let results = this.locations;
    results = results.filter(item => item.name.toLowerCase().includes(input.toLowerCase()));
    return results;
  }
  selectEntity(item) {
    this.searchText = item.name;
    this.entitySelected = true;
    this.selectedEntity = item;
    this.sbsWizardService.updateWizardData('entity', item);
    this.sbsWizardService.updateResults(310);
    this.sbsWizardService.checkIfStep1Complete();
  }
}
SbsStepOneComponent.ɵfac = function SbsStepOneComponent_Factory(t) {
  return new (t || SbsStepOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_sbs_wizard_service__WEBPACK_IMPORTED_MODULE_2__.SbsWizardService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_3__.SearchService));
};
SbsStepOneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SbsStepOneComponent,
  selectors: [["sbs-step-one"]],
  inputs: {
    locations: "locations"
  },
  decls: 8,
  vars: 6,
  consts: [[1, "margin-bottom-xs"], ["mode", "component-border", "width", "50%", "suggestionsDropdownHeight", "34vh", 3, "rounded", "showSuggestions", "searchClearClicked"], ["type", "text", "placeholder", "Search...", "maxlength", "40", 1, "uv-input", "margin-left-xs", 3, "ngModel", "ngModelChange"], ["suggestions", ""], ["class", "custom-option", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "margin-top-md", "style", "width: 600px;", 4, "ngIf"], [1, "custom-option", 3, "click"], [1, "uv-body"], [1, "option-description"], [1, "uv-body-secondary"], [1, "margin-top-md", 2, "width", "600px"], [1, "bold"], [1, "uv-body", "blue"]],
  template: function SbsStepOneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "h5", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Here you will search for a [insert item here]. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "uvx-search-panel", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("searchClearClicked", function SbsStepOneComponent_Template_uvx_search_panel_searchClearClicked_3_listener() {
        return ctx.clearSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SbsStepOneComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.searchText = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SbsStepOneComponent_div_6_Template, 6, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SbsStepOneComponent_div_7_Template, 15, 2, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rounded", true)("showSuggestions", ctx.searchText != "" && ctx.entitySelected === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.searchResults)("ngForTrackBy", ctx.trackItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.entitySelected);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _uv_ui_lib_src_lib_search_panel_search_panel_component__WEBPACK_IMPORTED_MODULE_4__.SearchPanelComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwLW9uZS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL3NpZGUtYnktc2lkZS93aXphcmQvc3RlcC1vbmUvc3RlcC1vbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 40476:
/*!***************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/wizard/step-three/selections.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selections": () => (/* binding */ selections)
/* harmony export */ });
const selections = [{
  name: 'Completion',
  icon: 'tasks',
  selected: false
}, {
  name: 'Drilling',
  icon: 'parts',
  selected: false
}, {
  name: 'Subsea',
  icon: 'package',
  selected: false
}, {
  name: 'Research & Development',
  icon: 'analytics_alt',
  selected: false
}, {
  name: 'Process',
  icon: 'windows',
  selected: false
}, {
  name: 'Facilities Design',
  icon: 'replace',
  selected: false
}];

/***/ }),

/***/ 87543:
/*!*************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/wizard/step-three/step-three.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SbsStepThreeComponent": () => (/* binding */ SbsStepThreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _selections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selections */ 40476);
/* harmony import */ var _sbs_wizard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sbs-wizard.service */ 74972);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 65504);







function SbsStepThreeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SbsStepThreeComponent_div_4_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const item_r2 = restoredCtx.$implicit;
      const i_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r4.selectFocus(item_r2.name);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.setSelectedFocus(item_r2, i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "uvx-icon-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("task-selection-button-selected", item_r2.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("task-selection-selected", item_r2.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.name, " ");
  }
}
function SbsStepThreeComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SbsStepThreeComponent_div_6_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const item_r6 = restoredCtx.$implicit;
      const i_r7 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r8.selectFocus(item_r6.name);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.setSelectedFocus(item_r6, i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "uvx-icon-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("task-selection-button-selected", item_r6.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", item_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("task-selection-selected", item_r6.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r6.name, " ");
  }
}
class SbsStepThreeComponent {
  constructor(sbsWizardService) {
    this.sbsWizardService = sbsWizardService;
    this.stepisCompleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.selections = _selections__WEBPACK_IMPORTED_MODULE_0__.selections;
  }
  ngOnInit() {}
  selectFocus(goal) {
    this.sbsWizardService.updateWizardData('focus', goal);
    this.sbsWizardService.updateResults(512);
    this.sbsWizardService.checkIfStep3Complete();
  }
  setSelectedFocus(item, i) {
    item.selected = true;
    const array = this.selections;
    const exceptIndex = this.selections.indexOf(item);
    for (let item of array) {
      if (array.indexOf(item) !== exceptIndex) {
        item.selected = false;
      }
    }
  }
}
SbsStepThreeComponent.ɵfac = function SbsStepThreeComponent_Factory(t) {
  return new (t || SbsStepThreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_sbs_wizard_service__WEBPACK_IMPORTED_MODULE_1__.SbsWizardService));
};
SbsStepThreeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SbsStepThreeComponent,
  selectors: [["sbs-step-three"]],
  outputs: {
    stepisCompleteEvent: "stepisCompleteEvent"
  },
  decls: 7,
  vars: 2,
  consts: [[1, "margin-bottom-sm"], [1, "flex", "flex-column", "task-selection-container"], [1, "flex", "task-selection-container"], ["class", "flex flex-column align-items-center task-selection", 3, "click", 4, "ngFor", "ngForOf"], [1, "flex", "flex-column", "align-items-center", "task-selection", 3, "click"], ["size", "md", "matTooltip", "Placeholder info about this item", 1, "task-selection-button", "margin-bottom-xxs", 3, "icon"], [1, "uv-body", "medium-bold"]],
  template: function SbsStepThreeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h5", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " What is your area of focus?\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SbsStepThreeComponent_div_4_Template, 4, 6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SbsStepThreeComponent_div_6_Template, 4, 6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.selections.slice(0, 3));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.selections.slice(3, 6));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__.IconButtonComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwLWRpcmVjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL2dsb2JhbC13aGVyZS11c2VkL3Byb2plY3Qtd2l6YXJkL3N0ZXAtZGlyZWN0aW9ucy9zdGVwLWRpcmVjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdMQUFnTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 31826:
/*!*************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/wizard/step-two/selections.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selections": () => (/* binding */ selections)
/* harmony export */ });
const selections = [{
  name: 'Consolidation',
  icon: 'package',
  selected: false
}, {
  name: 'Spec. Review',
  icon: 'show',
  selected: false
}, {
  name: 'Spec Approval',
  icon: 'tasks_alt',
  selected: false
}, {
  name: 'BU/Corporate Comparison',
  icon: 'clone',
  selected: false
}, {
  name: 'Revision',
  icon: 'section',
  selected: false
}, {
  name: 'Requirement Analysis',
  icon: 'analytics_alt',
  selected: false
}];

/***/ }),

/***/ 13385:
/*!*********************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/side-by-side/wizard/step-two/step-two.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SbsStepTwoComponent": () => (/* binding */ SbsStepTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 39609);
/* harmony import */ var _selections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selections */ 31826);
/* harmony import */ var _sbs_wizard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sbs-wizard.service */ 74972);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 52954);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 65504);







function SbsStepTwoComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SbsStepTwoComponent_div_4_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const item_r2 = restoredCtx.$implicit;
      const i_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r4.selectFocus(item_r2.name);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.setSelectedFocus(item_r2, i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "uvx-icon-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("task-selection-button-selected", item_r2.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("task-selection-selected", item_r2.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.name, " ");
  }
}
function SbsStepTwoComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SbsStepTwoComponent_div_6_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const item_r6 = restoredCtx.$implicit;
      const i_r7 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      ctx_r8.selectFocus(item_r6.name);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.setSelectedFocus(item_r6, i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "uvx-icon-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("task-selection-button-selected", item_r6.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", item_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("task-selection-selected", item_r6.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r6.name, " ");
  }
}
class SbsStepTwoComponent {
  constructor(wizardService) {
    this.wizardService = wizardService;
    this.stepisCompleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.selections = _selections__WEBPACK_IMPORTED_MODULE_0__.selections;
  }
  ngOnInit() {}
  selectFocus(goal) {
    this.wizardService.updateWizardData('goal', goal);
    this.wizardService.updateResults(512);
    this.wizardService.checkIfStep2Complete();
  }
  setSelectedFocus(item, i) {
    item.selected = true;
    const array = this.selections;
    const exceptIndex = this.selections.indexOf(item);
    for (let item of array) {
      if (array.indexOf(item) !== exceptIndex) {
        item.selected = false;
      }
    }
  }
}
SbsStepTwoComponent.ɵfac = function SbsStepTwoComponent_Factory(t) {
  return new (t || SbsStepTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_sbs_wizard_service__WEBPACK_IMPORTED_MODULE_1__.SbsWizardService));
};
SbsStepTwoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SbsStepTwoComponent,
  selectors: [["sbs-step-two"]],
  outputs: {
    stepisCompleteEvent: "stepisCompleteEvent"
  },
  decls: 7,
  vars: 2,
  consts: [[1, "margin-bottom-sm"], [1, "flex", "flex-column", "task-selection-container"], [1, "flex", "task-selection-container"], ["class", "flex flex-column align-items-center task-selection", 3, "click", 4, "ngFor", "ngForOf"], [1, "flex", "flex-column", "align-items-center", "task-selection", 3, "click"], ["size", "md", "matTooltip", "Placeholder info about this item", 1, "task-selection-button", "margin-bottom-xxs", 3, "icon"], [1, "uv-body", "medium-bold"]],
  template: function SbsStepTwoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h5", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " What is your desired goal/task?\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SbsStepTwoComponent_div_4_Template, 4, 6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SbsStepTwoComponent_div_6_Template, 4, 6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.selections.slice(0, 3));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.selections.slice(3, 6));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_2__.IconButtonComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwLWRpcmVjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3V2LXVpLXByb3RvdHlwZS9zcmMvYXBwL2dsb2JhbC13aGVyZS11c2VkL3Byb2plY3Qtd2l6YXJkL3N0ZXAtZGlyZWN0aW9ucy9zdGVwLWRpcmVjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdMQUFnTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 48281:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/radio.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_RADIO_DEFAULT_OPTIONS": () => (/* binding */ MAT_RADIO_DEFAULT_OPTIONS),
/* harmony export */   "MAT_RADIO_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_RADIO_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MAT_RADIO_GROUP": () => (/* binding */ MAT_RADIO_GROUP),
/* harmony export */   "MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR": () => (/* binding */ MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR),
/* harmony export */   "MatRadioButton": () => (/* binding */ MatRadioButton),
/* harmony export */   "MatRadioChange": () => (/* binding */ MatRadioChange),
/* harmony export */   "MatRadioGroup": () => (/* binding */ MatRadioGroup),
/* harmony export */   "MatRadioModule": () => (/* binding */ MatRadioModule),
/* harmony export */   "_MatRadioButtonBase": () => (/* binding */ _MatRadioButtonBase),
/* harmony export */   "_MatRadioGroupBase": () => (/* binding */ _MatRadioGroupBase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 39609);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 24716);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 72467);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 20576);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 35630);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 93557);










/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const _c0 = ["input"];
const _c1 = function (a0) {
  return {
    enterDuration: a0
  };
};
const _c2 = ["*"];
const MAT_RADIO_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-radio-default-options', {
  providedIn: 'root',
  factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});
function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: 'accent'
  };
}
// Increasing integer for generating unique ids for radio components.
let nextUniqueId = 0;
/**
 * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * @docs-private
 */
const MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatRadioGroup),
  multi: true
};
/** Change event object emitted by MatRadio and MatRadioGroup. */
class MatRadioChange {
  constructor( /** The MatRadioButton that emits the change event. */
  source, /** The value of the MatRadioButton. */
  value) {
    this.source = source;
    this.value = value;
  }
}
/**
 * Injection token that can be used to inject instances of `MatRadioGroup`. It serves as
 * alternative token to the actual `MatRadioGroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_RADIO_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatRadioGroup');
/**
 * Base class with all of the `MatRadioGroup` functionality.
 * @docs-private
 */
class _MatRadioGroupBase {
  constructor(_changeDetector) {
    this._changeDetector = _changeDetector;
    /** Selected value for the radio group. */
    this._value = null;
    /** The HTML name attribute applied to radio buttons in this group. */
    this._name = `mat-radio-group-${nextUniqueId++}`;
    /** The currently selected radio button. Should match value. */
    this._selected = null;
    /** Whether the `value` has been set to its initial value. */
    this._isInitialized = false;
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
    this._labelPosition = 'after';
    /** Whether the radio group is disabled. */
    this._disabled = false;
    /** Whether the radio group is required. */
    this._required = false;
    /** The method to be called in order to update ngModel */
    this._controlValueAccessorChangeFn = () => {};
    /**
     * onTouch function registered via registerOnTouch (ControlValueAccessor).
     * @docs-private
     */
    this.onTouched = () => {};
    /**
     * Event emitted when the group value changes.
     * Change events are only emitted when the value changes due to user interaction with
     * a radio button (the same behavior as `<input type-"radio">`).
     */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /** Name of the radio button group. All radio buttons inside this group will use this name. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._updateRadioButtonNames();
  }
  /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition;
  }
  set labelPosition(v) {
    this._labelPosition = v === 'before' ? 'before' : 'after';
    this._markRadiosForCheck();
  }
  /**
   * Value for the radio-group. Should equal the value of the selected radio button if there is
   * a corresponding radio button with a matching value. If there is not such a corresponding
   * radio button, this value persists to be applied in case a new radio button is added with a
   * matching value.
   */
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this._value !== newValue) {
      // Set this before proceeding to ensure no circular loop occurs with selection.
      this._value = newValue;
      this._updateSelectedRadioFromValue();
      this._checkSelectedRadioButton();
    }
  }
  _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
  /**
   * The currently selected radio button. If set to a new radio button, the radio group value
   * will be updated to match the new selected button.
   */
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this._checkSelectedRadioButton();
  }
  /** Whether the radio group is disabled */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
    this._markRadiosForCheck();
  }
  /** Whether the radio group is required */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
    this._markRadiosForCheck();
  }
  /**
   * Initialize properties once content children are available.
   * This allows us to propagate relevant attributes to associated buttons.
   */
  ngAfterContentInit() {
    // Mark this component as initialized in AfterContentInit because the initial value can
    // possibly be set by NgModel on MatRadioGroup, and it is possible that the OnInit of the
    // NgModel occurs *after* the OnInit of the MatRadioGroup.
    this._isInitialized = true;
  }
  /**
   * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
   * radio buttons upon their blur.
   */
  _touch() {
    if (this.onTouched) {
      this.onTouched();
    }
  }
  _updateRadioButtonNames() {
    if (this._radios) {
      this._radios.forEach(radio => {
        radio.name = this.name;
        radio._markForCheck();
      });
    }
  }
  /** Updates the `selected` radio button from the internal _value state. */
  _updateSelectedRadioFromValue() {
    // If the value already matches the selected radio, do nothing.
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
    if (this._radios && !isAlreadySelected) {
      this._selected = null;
      this._radios.forEach(radio => {
        radio.checked = this.value === radio.value;
        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent() {
    if (this._isInitialized) {
      this.change.emit(new MatRadioChange(this._selected, this._value));
    }
  }
  _markRadiosForCheck() {
    if (this._radios) {
      this._radios.forEach(radio => radio._markForCheck());
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  /**
   * Registers a callback to be triggered when the model value changes.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  /**
   * Registers a callback to be triggered when the control is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   * @param isDisabled Whether the control should be disabled.
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetector.markForCheck();
  }
}
_MatRadioGroupBase.ɵfac = function _MatRadioGroupBase_Factory(t) {
  return new (t || _MatRadioGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
_MatRadioGroupBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatRadioGroupBase,
  inputs: {
    color: "color",
    name: "name",
    labelPosition: "labelPosition",
    value: "value",
    selected: "selected",
    disabled: "disabled",
    required: "required"
  },
  outputs: {
    change: "change"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRadioGroupBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
 */
class MatRadioGroup extends _MatRadioGroupBase {}
MatRadioGroup.ɵfac = /* @__PURE__ */function () {
  let ɵMatRadioGroup_BaseFactory;
  return function MatRadioGroup_Factory(t) {
    return (ɵMatRadioGroup_BaseFactory || (ɵMatRadioGroup_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRadioGroup)))(t || MatRadioGroup);
  };
}();
MatRadioGroup.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatRadioGroup,
  selectors: [["mat-radio-group"]],
  contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatRadioButton, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._radios = _t);
    }
  },
  hostAttrs: ["role", "radiogroup", 1, "mat-radio-group"],
  exportAs: ["matRadioGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
    provide: MAT_RADIO_GROUP,
    useExisting: MatRadioGroup
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-radio-group',
      exportAs: 'matRadioGroup',
      providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }],
      host: {
        'role': 'radiogroup',
        'class': 'mat-radio-group'
      }
    }]
  }], null, {
    _radios: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatRadioButton), {
        descendants: true
      }]
    }]
  });
})();
// Boilerplate for applying mixins to MatRadioButton.
/** @docs-private */
class MatRadioButtonBase {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
}
const _MatRadioButtonMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinTabIndex)(MatRadioButtonBase));
/**
 * Base class with all of the `MatRadioButton` functionality.
 * @docs-private
 */
class _MatRadioButtonBase extends _MatRadioButtonMixinBase {
  constructor(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, animationMode, _providerOverride, tabIndex) {
    super(elementRef);
    this._changeDetector = _changeDetector;
    this._focusMonitor = _focusMonitor;
    this._radioDispatcher = _radioDispatcher;
    this._providerOverride = _providerOverride;
    this._uniqueId = `mat-radio-${++nextUniqueId}`;
    /** The unique ID for the radio button. */
    this.id = this._uniqueId;
    /**
     * Event emitted when the checked state of this radio button changes.
     * Change events are only emitted when the value changes due to user interaction with
     * the radio button (the same behavior as `<input type-"radio">`).
     */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Whether this radio is checked. */
    this._checked = false;
    /** Value assigned to this radio. */
    this._value = null;
    /** Unregister function for _radioDispatcher */
    this._removeUniqueSelectionListener = () => {};
    // Assertions. Ideally these should be stripped out by the compiler.
    // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
    this.radioGroup = radioGroup;
    this._noopAnimations = animationMode === 'NoopAnimations';
    if (tabIndex) {
      this.tabIndex = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(tabIndex, 0);
    }
    this._removeUniqueSelectionListener = _radioDispatcher.listen((id, name) => {
      if (id !== this.id && name === this.name) {
        this.checked = false;
      }
    });
  }
  /** Whether this radio button is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    const newCheckedState = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
    if (this._checked !== newCheckedState) {
      this._checked = newCheckedState;
      if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      } else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
        // When unchecking the selected radio button, update the selected radio
        // property on the group.
        this.radioGroup.selected = null;
      }
      if (newCheckedState) {
        // Notify all radio buttons with the same name to un-check.
        this._radioDispatcher.notify(this.id, this.name);
      }
      this._changeDetector.markForCheck();
    }
  }
  /** The value of this radio button. */
  get value() {
    return this._value;
  }
  set value(value) {
    if (this._value !== value) {
      this._value = value;
      if (this.radioGroup !== null) {
        if (!this.checked) {
          // Update checked when the value changed to match the radio group's value
          this.checked = this.radioGroup.value === value;
        }
        if (this.checked) {
          this.radioGroup.selected = this;
        }
      }
    }
  }
  /** Whether the label should appear after or before the radio button. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || 'after';
  }
  set labelPosition(value) {
    this._labelPosition = value;
  }
  /** Whether the radio button is disabled. */
  get disabled() {
    return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
  }
  set disabled(value) {
    this._setDisabled((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value));
  }
  /** Whether the radio button is required. */
  get required() {
    return this._required || this.radioGroup && this.radioGroup.required;
  }
  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
  }
  /** Theme color of the radio button. */
  get color() {
    // As per Material design specifications the selection control radio should use the accent color
    // palette by default. https://material.io/guidelines/components/selection-controls.html
    return this._color || this.radioGroup && this.radioGroup.color || this._providerOverride && this._providerOverride.color || 'accent';
  }
  set color(newValue) {
    this._color = newValue;
  }
  /** ID of the native input element inside `<mat-radio-button>` */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  /** Focuses the radio button. */
  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  /**
   * Marks the radio button as needing checking for change detection.
   * This method is exposed because the parent radio group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    // When group value changes, the button will not be notified. Use `markForCheck` to explicit
    // update radio button's status
    this._changeDetector.markForCheck();
  }
  ngOnInit() {
    if (this.radioGroup) {
      // If the radio is inside a radio group, determine if it should be checked
      this.checked = this.radioGroup.value === this._value;
      if (this.checked) {
        this.radioGroup.selected = this;
      }
      // Copy name from parent radio group
      this.name = this.radioGroup.name;
    }
  }
  ngDoCheck() {
    this._updateTabIndex();
  }
  ngAfterViewInit() {
    this._updateTabIndex();
    this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
      if (!focusOrigin && this.radioGroup) {
        this.radioGroup._touch();
      }
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._removeUniqueSelectionListener();
  }
  /** Dispatch change event with current value. */
  _emitChangeEvent() {
    this.change.emit(new MatRadioChange(this, this._value));
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  _onInputClick(event) {
    // We have to stop propagation for click events on the visual hidden input element.
    // By default, when a user clicks on a label element, a generated click event will be
    // dispatched on the associated input element. Since we are using a label element as our
    // root container, the click event on the `radio-button` will be executed twice.
    // The real click event will bubble up, and the generated click event also tries to bubble up.
    // This will lead to multiple click events.
    // Preventing bubbling for the second event will solve that issue.
    event.stopPropagation();
  }
  /** Triggered when the radio button receives an interaction from the user. */
  _onInputInteraction(event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the `change` output.
    event.stopPropagation();
    if (!this.checked && !this.disabled) {
      const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
      this.checked = true;
      this._emitChangeEvent();
      if (this.radioGroup) {
        this.radioGroup._controlValueAccessorChangeFn(this.value);
        if (groupValueChanged) {
          this.radioGroup._emitChangeEvent();
        }
      }
    }
  }
  /** Sets the disabled state and marks for check if a change occurred. */
  _setDisabled(value) {
    if (this._disabled !== value) {
      this._disabled = value;
      this._changeDetector.markForCheck();
    }
  }
  /** Gets the tabindex for the underlying input element. */
  _updateTabIndex() {
    const group = this.radioGroup;
    let value;
    // Implement a roving tabindex if the button is inside a group. For most cases this isn't
    // necessary, because the browser handles the tab order for inputs inside a group automatically,
    // but we need an explicitly higher tabindex for the selected button in order for things like
    // the focus trap to pick it up correctly.
    if (!group || !group.selected || this.disabled) {
      value = this.tabIndex;
    } else {
      value = group.selected === this ? this.tabIndex : -1;
    }
    if (value !== this._previousTabIndex) {
      // We have to set the tabindex directly on the DOM node, because it depends on
      // the selected state which is prone to "changed after checked errors".
      const input = this._inputElement?.nativeElement;
      if (input) {
        input.setAttribute('tabindex', value + '');
        this._previousTabIndex = value;
      }
    }
  }
}
_MatRadioButtonBase.ɵfac = function _MatRadioButtonBase_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
};
_MatRadioButtonBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatRadioButtonBase,
  viewQuery: function _MatRadioButtonBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
    }
  },
  inputs: {
    id: "id",
    name: "name",
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
    checked: "checked",
    value: "value",
    labelPosition: "labelPosition",
    disabled: "disabled",
    required: "required",
    color: "color"
  },
  outputs: {
    change: "change"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRadioButtonBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _MatRadioGroupBase
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher
    }, {
      type: undefined
    }, {
      type: undefined
    }, {
      type: undefined
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
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
    checked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['input']
    }]
  });
})();
/**
 * A Material design radio-button. Typically placed inside of `<mat-radio-group>` elements.
 */
class MatRadioButton extends _MatRadioButtonBase {
  constructor(radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher, animationMode, providerOverride, tabIndex) {
    super(radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher, animationMode, providerOverride, tabIndex);
  }
}
MatRadioButton.ɵfac = function MatRadioButton_Factory(t) {
  return new (t || MatRadioButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RADIO_GROUP, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RADIO_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'));
};
MatRadioButton.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatRadioButton,
  selectors: [["mat-radio-button"]],
  hostAttrs: [1, "mat-radio-button"],
  hostVars: 17,
  hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatRadioButton_focus_HostBindingHandler() {
        return ctx._inputElement.nativeElement.focus();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("id", ctx.id)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-radio-checked", ctx.checked)("mat-radio-disabled", ctx.disabled)("_mat-animation-noopable", ctx._noopAnimations)("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
    }
  },
  inputs: {
    disableRipple: "disableRipple",
    tabIndex: "tabIndex"
  },
  exportAs: ["matRadioButton"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c2,
  decls: 13,
  vars: 19,
  consts: [[1, "mat-radio-label"], ["label", ""], [1, "mat-radio-container"], [1, "mat-radio-outer-circle"], [1, "mat-radio-inner-circle"], ["type", "radio", 1, "mat-radio-input", 3, "id", "checked", "disabled", "required", "change", "click"], ["input", ""], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mat-radio-label-content"], [2, "display", "none"]],
  template: function MatRadioButton_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0, 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MatRadioButton_Template_input_change_5_listener($event) {
        return ctx._onInputInteraction($event);
      })("click", function MatRadioButton_Template_input_click_5_listener($event) {
        return ctx._onInputClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9)(10, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xA0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.inputId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled)("required", ctx.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx._noopAnimations ? 0 : 150));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-radio-label-before", ctx.labelPosition == "before");
    }
  },
  dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple],
  styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;opacity:0;transition:transform ease 280ms,background-color ease 280ms,opacity linear 1ms 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5);opacity:1;transition:transform ease 280ms,background-color ease 280ms}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-label-content{-webkit-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none;top:0;left:0}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{opacity:0;position:absolute;top:0;left:0;margin:0;width:100%;height:100%;cursor:inherit;z-index:-1}.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-ripple,.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-ripple{outline:solid 3px}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-radio-button',
      inputs: ['disableRipple', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matRadioButton',
      host: {
        'class': 'mat-radio-button',
        '[class.mat-radio-checked]': 'checked',
        '[class.mat-radio-disabled]': 'disabled',
        '[class._mat-animation-noopable]': '_noopAnimations',
        '[class.mat-primary]': 'color === "primary"',
        '[class.mat-accent]': 'color === "accent"',
        '[class.mat-warn]': 'color === "warn"',
        // Needs to be removed since it causes some a11y issues (see #21266).
        '[attr.tabindex]': 'null',
        '[attr.id]': 'id',
        '[attr.aria-label]': 'null',
        '[attr.aria-labelledby]': 'null',
        '[attr.aria-describedby]': 'null',
        // Note: under normal conditions focus shouldn't land on this element, however it may be
        // programmatically set, for example inside of a focus trap, in this case we want to forward
        // the focus to the native element.
        '(focus)': '_inputElement.nativeElement.focus()'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<!-- TODO(jelbourn): render the radio on either side of the content -->\n<!-- TODO(mtlin): Evaluate trade-offs of using native radio vs. cost of additional bindings. -->\n<label [attr.for]=\"inputId\" class=\"mat-radio-label\" #label>\n  <!-- The actual 'radio' part of the control. -->\n  <span class=\"mat-radio-container\">\n    <span class=\"mat-radio-outer-circle\"></span>\n    <span class=\"mat-radio-inner-circle\"></span>\n    <input #input class=\"mat-radio-input\" type=\"radio\"\n        [id]=\"inputId\"\n        [checked]=\"checked\"\n        [disabled]=\"disabled\"\n        [attr.name]=\"name\"\n        [attr.value]=\"value\"\n        [required]=\"required\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        [attr.aria-describedby]=\"ariaDescribedby\"\n        (change)=\"_onInputInteraction($event)\"\n        (click)=\"_onInputClick($event)\">\n\n    <!-- The ripple comes after the input so that we can target it with a CSS\n         sibling selector when the input is focused. -->\n    <span mat-ripple class=\"mat-radio-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleCentered]=\"true\"\n         [matRippleRadius]=\"20\"\n         [matRippleAnimation]=\"{enterDuration: _noopAnimations ? 0 : 150}\">\n\n      <span class=\"mat-ripple-element mat-radio-persistent-ripple\"></span>\n    </span>\n  </span>\n\n  <!-- The label content for radio control. -->\n  <span class=\"mat-radio-label-content\" [class.mat-radio-label-before]=\"labelPosition == 'before'\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
      styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;opacity:0;transition:transform ease 280ms,background-color ease 280ms,opacity linear 1ms 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5);opacity:1;transition:transform ease 280ms,background-color ease 280ms}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-label-content{-webkit-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none;top:0;left:0}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{opacity:0;position:absolute;top:0;left:0;margin:0;width:100%;height:100%;cursor:inherit;z-index:-1}.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-ripple,.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-ripple{outline:solid 3px}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"]
    }]
  }], function () {
    return [{
      type: MatRadioGroup,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_RADIO_GROUP]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher
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
        args: [MAT_RADIO_DEFAULT_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
    }];
  }, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatRadioModule {}
MatRadioModule.ɵfac = function MatRadioModule_Factory(t) {
  return new (t || MatRadioModule)();
};
MatRadioModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatRadioModule
});
MatRadioModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
      exports: [MatRadioGroup, MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
      declarations: [MatRadioGroup, MatRadioButton]
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



/***/ }),

/***/ 37366:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/slide-toggle.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS": () => (/* binding */ MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS),
/* harmony export */   "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR": () => (/* binding */ MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR),
/* harmony export */   "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR": () => (/* binding */ MAT_SLIDE_TOGGLE_VALUE_ACCESSOR),
/* harmony export */   "MatSlideToggle": () => (/* binding */ MatSlideToggle),
/* harmony export */   "MatSlideToggleChange": () => (/* binding */ MatSlideToggleChange),
/* harmony export */   "MatSlideToggleModule": () => (/* binding */ MatSlideToggleModule),
/* harmony export */   "MatSlideToggleRequiredValidator": () => (/* binding */ MatSlideToggleRequiredValidator),
/* harmony export */   "_MatSlideToggleRequiredValidatorModule": () => (/* binding */ _MatSlideToggleRequiredValidatorModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/observers */ 19407);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 39609);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 24716);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 72467);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 20576);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 93557);











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for `mat-slide-toggle`. */
const _c0 = ["thumbContainer"];
const _c1 = ["toggleBar"];
const _c2 = ["input"];
const _c3 = function (a0) {
  return {
    enterDuration: a0
  };
};
const _c4 = ["*"];
const MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-slide-toggle-default-options', {
  providedIn: 'root',
  factory: () => ({
    disableToggleValue: false
  })
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids for slide-toggle components.
let nextUniqueId = 0;
/** @docs-private */
const MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSlideToggle),
  multi: true
};
/** Change event object emitted by a MatSlideToggle. */
class MatSlideToggleChange {
  constructor( /** The source MatSlideToggle of the event. */
  source, /** The new `checked` value of the MatSlideToggle. */
  checked) {
    this.source = source;
    this.checked = checked;
  }
}
// Boilerplate for applying mixins to MatSlideToggle.
/** @docs-private */
const _MatSlideToggleBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinTabIndex)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisabled)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
}))));
/** Represents a slidable "switch" toggle that can be moved between on and off. */
class MatSlideToggle extends _MatSlideToggleBase {
  constructor(elementRef, _focusMonitor, _changeDetectorRef, tabIndex, defaults, animationMode) {
    super(elementRef);
    this._focusMonitor = _focusMonitor;
    this._changeDetectorRef = _changeDetectorRef;
    this.defaults = defaults;
    this._onChange = _ => {};
    this._onTouched = () => {};
    this._uniqueId = `mat-slide-toggle-${++nextUniqueId}`;
    this._required = false;
    this._checked = false;
    /** Name value will be applied to the input element if present. */
    this.name = null;
    /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */
    this.id = this._uniqueId;
    /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */
    this.labelPosition = 'after';
    /** Used to set the aria-label attribute on the underlying input element. */
    this.ariaLabel = null;
    /** Used to set the aria-labelledby attribute on the underlying input element. */
    this.ariaLabelledby = null;
    /** An event will be dispatched each time the slide-toggle changes its value. */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event will be dispatched each time the slide-toggle input is toggled.
     * This event is always emitted when the user toggles the slide toggle, but this does not mean
     * the slide toggle's value has changed.
     */
    this.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.tabIndex = parseInt(tabIndex) || 0;
    this.color = this.defaultColor = defaults.color || 'accent';
    this._noopAnimations = animationMode === 'NoopAnimations';
  }
  /** Whether the slide-toggle is required. */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /** Whether the slide-toggle element is checked or not. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    this._changeDetectorRef.markForCheck();
  }
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  ngAfterContentInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
      if (!focusOrigin) {
        // When a focused element becomes disabled, the browser *immediately* fires a blur event.
        // Angular does not expect events to be raised during change detection, so any state
        // change (such as a form control's 'ng-touched') will cause a changed-after-checked
        // error. See https://github.com/angular/angular/issues/17793. To work around this,
        // we defer telling the form control it has been touched until the next tick.
        Promise.resolve().then(() => this._onTouched());
      }
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /** Method being called whenever the underlying input emits a change event. */
  _onChangeEvent(event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the component's `change` output.
    event.stopPropagation();
    this.toggleChange.emit();
    // When the slide toggle's config disables toggle change event by setting
    // `disableToggleValue: true`, the slide toggle's value does not change, and the
    // checked state of the underlying input needs to be changed back.
    if (this.defaults.disableToggleValue) {
      this._inputElement.nativeElement.checked = this.checked;
      return;
    }
    // Sync the value from the underlying input element with the component instance.
    this.checked = this._inputElement.nativeElement.checked;
    // Emit our custom change event only if the underlying input emitted one. This ensures that
    // there is no change event, when the checked state changes programmatically.
    this._emitChangeEvent();
  }
  /** Method being called whenever the slide-toggle has been clicked. */
  _onInputClick(event) {
    // We have to stop propagation for click events on the visual hidden input element.
    // By default, when a user clicks on a label element, a generated click event will be
    // dispatched on the associated input element. Since we are using a label element as our
    // root container, the click event on the `slide-toggle` will be executed twice.
    // The real click event will bubble up, and the generated click event also tries to bubble up.
    // This will lead to multiple click events.
    // Preventing bubbling for the second event will solve that issue.
    event.stopPropagation();
  }
  /** Implemented as part of ControlValueAccessor. */
  writeValue(value) {
    this.checked = !!value;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /** Implemented as part of ControlValueAccessor. */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /** Implemented as a part of ControlValueAccessor. */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the slide-toggle. */
  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  /** Toggles the checked state of the slide-toggle. */
  toggle() {
    this.checked = !this.checked;
    this._onChange(this.checked);
  }
  /**
   * Emits a change event on the `change` output. Also notifies the FormControl about the change.
   */
  _emitChangeEvent() {
    this._onChange(this.checked);
    this.change.emit(new MatSlideToggleChange(this, this.checked));
  }
  /** Method being called whenever the label text changes. */
  _onLabelTextChange() {
    // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
    // slide-toggle component will be only marked for check, but no actual change detection runs
    // automatically. Instead of going back into the zone in order to trigger a change detection
    // which causes *all* components to be checked (if explicitly marked or not using OnPush),
    // we only trigger an explicit change detection for the slide-toggle view and its children.
    this._changeDetectorRef.detectChanges();
  }
}
MatSlideToggle.ɵfac = function MatSlideToggle_Factory(t) {
  return new (t || MatSlideToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
};
MatSlideToggle.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatSlideToggle,
  selectors: [["mat-slide-toggle"]],
  viewQuery: function MatSlideToggle_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._thumbEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._thumbBarEl = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
    }
  },
  hostAttrs: [1, "mat-slide-toggle"],
  hostVars: 13,
  hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("aria-label", null)("aria-labelledby", null)("name", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-checked", ctx.checked)("mat-disabled", ctx.disabled)("mat-slide-toggle-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._noopAnimations);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    color: "color",
    tabIndex: "tabIndex",
    name: "name",
    id: "id",
    labelPosition: "labelPosition",
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
    required: "required",
    checked: "checked"
  },
  outputs: {
    change: "change",
    toggleChange: "toggleChange"
  },
  exportAs: ["matSlideToggle"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c4,
  decls: 16,
  vars: 20,
  consts: [[1, "mat-slide-toggle-label"], ["label", ""], [1, "mat-slide-toggle-bar"], ["toggleBar", ""], ["type", "checkbox", "role", "switch", 1, "mat-slide-toggle-input", "cdk-visually-hidden", 3, "id", "required", "tabIndex", "checked", "disabled", "change", "click"], ["input", ""], [1, "mat-slide-toggle-thumb-container"], ["thumbContainer", ""], [1, "mat-slide-toggle-thumb"], ["mat-ripple", "", 1, "mat-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-slide-toggle-persistent-ripple"], [1, "mat-slide-toggle-content", 3, "cdkObserveContent"], ["labelContent", ""], [2, "display", "none"]],
  template: function MatSlideToggle_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0, 1)(2, "span", 2, 3)(4, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MatSlideToggle_Template_input_change_4_listener($event) {
        return ctx._onChangeEvent($event);
      })("click", function MatSlideToggle_Template_input_click_4_listener($event) {
        return ctx._onInputClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatSlideToggle_Template_span_cdkObserveContent_11_listener() {
        return ctx._onLabelTextChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xA0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.inputId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-slide-toggle-bar-no-side-margin", !_r4.textContent || !_r4.textContent.trim());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex)("checked", ctx.checked)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx.name)("aria-checked", ctx.checked)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c3, ctx._noopAnimations ? 0 : 150));
    }
  },
  dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__.CdkObserveContent],
  styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{-webkit-user-select:none;user-select:none;display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%;display:block}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSlideToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-slide-toggle',
      exportAs: 'matSlideToggle',
      host: {
        'class': 'mat-slide-toggle',
        '[id]': 'id',
        // Needs to be removed since it causes some a11y issues (see #21266).
        '[attr.tabindex]': 'null',
        '[attr.aria-label]': 'null',
        '[attr.aria-labelledby]': 'null',
        '[attr.name]': 'null',
        '[class.mat-checked]': 'checked',
        '[class.mat-disabled]': 'disabled',
        '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
        '[class._mat-animation-noopable]': '_noopAnimations'
      },
      providers: [MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
      inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<label [attr.for]=\"inputId\" class=\"mat-slide-toggle-label\" #label>\n  <span #toggleBar class=\"mat-slide-toggle-bar\"\n       [class.mat-slide-toggle-bar-no-side-margin]=\"!labelContent.textContent || !labelContent.textContent.trim()\">\n\n    <input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\"\n           role=\"switch\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [attr.aria-checked]=\"checked\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-describedby]=\"ariaDescribedby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n\n    <span class=\"mat-slide-toggle-thumb-container\" #thumbContainer>\n      <span class=\"mat-slide-toggle-thumb\"></span>\n      <span class=\"mat-slide-toggle-ripple mat-focus-indicator\" mat-ripple\n           [matRippleTrigger]=\"label\"\n           [matRippleDisabled]=\"disableRipple || disabled\"\n           [matRippleCentered]=\"true\"\n           [matRippleRadius]=\"20\"\n           [matRippleAnimation]=\"{enterDuration: _noopAnimations ? 0 : 150}\">\n\n        <span class=\"mat-ripple-element mat-slide-toggle-persistent-ripple\"></span>\n      </span>\n    </span>\n\n  </span>\n\n  <span class=\"mat-slide-toggle-content\" #labelContent (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
      styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{-webkit-user-select:none;user-select:none;display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%;display:block}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    _thumbEl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['thumbContainer']
    }],
    _thumbBarEl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['toggleBar']
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
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
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    checked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    toggleChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['input']
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
const MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSlideToggleRequiredValidator),
  multi: true
};
/**
 * Validator for Material slide-toggle components with the required attribute in a
 * template-driven form. The default validator for required form controls asserts
 * that the control value is not undefined but that is not appropriate for a slide-toggle
 * where the value is always defined.
 *
 * Required slide-toggle form controls are valid when checked.
 */
class MatSlideToggleRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxRequiredValidator {}
MatSlideToggleRequiredValidator.ɵfac = /* @__PURE__ */function () {
  let ɵMatSlideToggleRequiredValidator_BaseFactory;
  return function MatSlideToggleRequiredValidator_Factory(t) {
    return (ɵMatSlideToggleRequiredValidator_BaseFactory || (ɵMatSlideToggleRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSlideToggleRequiredValidator)))(t || MatSlideToggleRequiredValidator);
  };
}();
MatSlideToggleRequiredValidator.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatSlideToggleRequiredValidator,
  selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSlideToggleRequiredValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-slide-toggle[required][formControlName],
             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]`,
      providers: [MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
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
/** This module is used by both original and MDC-based slide-toggle implementations. */
class _MatSlideToggleRequiredValidatorModule {}
_MatSlideToggleRequiredValidatorModule.ɵfac = function _MatSlideToggleRequiredValidatorModule_Factory(t) {
  return new (t || _MatSlideToggleRequiredValidatorModule)();
};
_MatSlideToggleRequiredValidatorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _MatSlideToggleRequiredValidatorModule
});
_MatSlideToggleRequiredValidatorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatSlideToggleRequiredValidatorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [MatSlideToggleRequiredValidator],
      declarations: [MatSlideToggleRequiredValidator]
    }]
  }], null, null);
})();
class MatSlideToggleModule {}
MatSlideToggleModule.ɵfac = function MatSlideToggleModule_Factory(t) {
  return new (t || MatSlideToggleModule)();
};
MatSlideToggleModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatSlideToggleModule
});
MatSlideToggleModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__.ObserversModule], _MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSlideToggleModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_MatSlideToggleRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__.ObserversModule],
      exports: [_MatSlideToggleRequiredValidatorModule, MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
      declarations: [MatSlideToggle]
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



/***/ })

}]);
//# sourceMappingURL=default-projects_uv-ui-prototype_src_app_global-where-used_project-wizard_wizard-container_wi-a6858f.js.map