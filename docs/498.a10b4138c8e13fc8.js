"use strict";
(self["webpackChunkuv_ui_prototype"] = self["webpackChunkuv_ui_prototype"] || []).push([[498],{

/***/ 21148:
/*!*******************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/force-directed-graph/force-directed-graph.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForceDirectedGraphComponent": () => (/* binding */ ForceDirectedGraphComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph/graph.component */ 81654);


class ForceDirectedGraphComponent {}
ForceDirectedGraphComponent.ɵfac = function ForceDirectedGraphComponent_Factory(t) {
  return new (t || ForceDirectedGraphComponent)();
};
ForceDirectedGraphComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ForceDirectedGraphComponent,
  selectors: [["app-force-directed-graph"]],
  decls: 2,
  vars: 0,
  consts: [[1, "graph-container"]],
  template: function ForceDirectedGraphComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-graph");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_graph_graph_component__WEBPACK_IMPORTED_MODULE_0__.GraphComponent],
  styles: [".graph-container[_ngcontent-%COMP%] {\n  height: 100%;\n  max-width: 100%;\n}"]
});

/***/ }),

/***/ 81654:
/*!**********************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/force-directed-graph/graph/graph.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var _sample_data_platforms_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
var _sample_data_programs_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
var _sample_data_configurations_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
var _sample_data_options_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache;
var _sample_data_parts_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache;
var _sample_data_materials_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphComponent": () => (/* binding */ GraphComponent)
/* harmony export */ });
/* harmony import */ var _sample_data_platforms_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../sample-data/platforms.json */ 46541);
/* harmony import */ var _sample_data_programs_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../sample-data/programs.json */ 70392);
/* harmony import */ var _sample_data_configurations_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../sample-data/configurations.json */ 2787);
/* harmony import */ var _sample_data_options_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../sample-data/options.json */ 29843);
/* harmony import */ var _sample_data_parts_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../sample-data/parts.json */ 32180);
/* harmony import */ var _sample_data_materials_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../sample-data/materials.json */ 15807);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-echarts */ 34984);








class GraphComponent {
  constructor() {
    this.platformObj = /*#__PURE__*/ (_sample_data_platforms_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_sample_data_platforms_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_sample_data_platforms_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
    this.programObj = /*#__PURE__*/ (_sample_data_programs_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_sample_data_programs_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_sample_data_programs_json__WEBPACK_IMPORTED_MODULE_1__, 2)));
    this.configObj = /*#__PURE__*/ (_sample_data_configurations_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_sample_data_configurations_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_sample_data_configurations_json__WEBPACK_IMPORTED_MODULE_2__, 2)));
    this.optionObj = /*#__PURE__*/ (_sample_data_options_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (_sample_data_options_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(_sample_data_options_json__WEBPACK_IMPORTED_MODULE_3__, 2)));
    this.parts2Obj = /*#__PURE__*/ (_sample_data_parts_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (_sample_data_parts_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(_sample_data_parts_json__WEBPACK_IMPORTED_MODULE_4__, 2)));
    this.material2Obj = /*#__PURE__*/ (_sample_data_materials_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (_sample_data_materials_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(_sample_data_materials_json__WEBPACK_IMPORTED_MODULE_5__, 2)));
    this.option = {
      title: {
        text: 'Les Miserables',
        subtext: 'Default layout',
        top: 'bottom',
        left: 'right'
      },
      tooltip: {},
      legend: [['Platform', 'Family', 'Configurations', 'Options', 'Parts']],
      series: [{
        name: 'Les Miserables',
        type: 'graph',
        layout: 'force',
        data: this.parseJsonData(),
        links: this.parseJsonLinkData(),
        // categories: graph.categories,
        draggable: true,
        // roam: true,
        label: {
          position: 'right'
        },
        force: {
          repulsion: 100
        }
      }]
    };
    this.nodeGraph = {
      title: {
        text: 'Sample Graph',
        top: 'bottom',
        left: 'right'
      },
      legend: {
        data: [{
          name: 'Sample Graph'
        }]
      },
      tooltip: {
        show: true,
        trigger: 'item',
        // position: ['35%', '32%'],
        backgroundColor: 'implements',
        textStyle: {
          color: '#000000',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: 'sans-serif',
          fontSize: 15
        }
      },
      series: [{
        // name: 'legend',
        type: 'graph',
        layout: 'force',
        draggable: true,
        legendHoverLink: true,
        data: this.parseJsonData(),
        links: this.parseJsonLinkData(),
        roam: true,
        label: {
          position: 'right'
        },
        force: {
          repulsion: 100,
          //   initLayout: null,
          gravity: 0.1,
          friction: 0.6,
          edgeLength: 30,
          layoutAnimation: false,
          draggable: true
        }
      }]
    };
  }
  parseJsonData() {
    var platformData = this.platformObj;
    var programData = this.programObj;
    var configData = this.configObj;
    var optionData = this.optionObj;
    var parts2Data = this.parts2Obj;
    var material2Data = this.material2Obj;
    var chartItems = [];
    for (var i = 0; i < platformData.length; i++) {
      chartItems.push({
        name: "Platform: " + platformData[i].id,
        id: JSON.stringify(platformData[i].id),
        symbolSize: 10,
        itemStyle: {
          color: '#5470c6'
        },
        //   x: null,
        //   y: null,
        draggable: true
        // attributes: {
        //   modularity_class: 0
        // }
      });
    }

    for (var i = 0; i < programData.length; i++) {
      chartItems.push({
        name: "Program: " + programData[i].id,
        id: JSON.stringify(programData[i].id),
        symbolSize: 10,
        itemStyle: {
          color: '#91cc75'
        },
        //   x: null,
        //   y: null,
        draggable: true
      });
    }
    for (var i = 0; i < configData.length; i++) {
      chartItems.push({
        name: "Config: " + configData[i].id,
        id: JSON.stringify(configData[i].id),
        symbolSize: 10,
        itemStyle: {
          color: '#fac858'
        },
        //   x: null,
        //   y: null,
        draggable: true
      });
    }
    // for (var i = 0; i < optionData.length; i++){
    //   chartItems.push({
    //     name: "Option: " + configData[i].id,
    //     id: JSON.stringify(optionData[i].id),
    //     symbolSize: 10,
    //     itemStyle: {
    //       color: '#C9BDE3'
    //     },
    //     x: null,
    //     y: null,
    //     draggable: true
    //   });
    // }
    // for (var i = 0; i < parts2Data.length; i++){
    //   chartItems.push({
    //     name: "Part: " + parts2Data[i].id,
    //     id: JSON.stringify(parts2Data[i].id),
    //     symbolSize: 10,
    //     itemStyle: {
    //       color: '#00147E'
    //     },
    //     x: null,
    //     y: null,
    //     draggable: true
    //   });
    // }
    // for (var i = 0; i < material2Data.length; i++){
    //   chartItems.push({
    //     name: "Material: " + material2Data[i].id,
    //     id: JSON.stringify(material2Data[i].id),
    //     symbolSize: 10,
    //     itemStyle: {
    //       color: '#D598CF'
    //     },
    //     x: null,
    //     y: null,
    //     draggable: true
    //   });
    // }
    return chartItems;
  }
  parseJsonLinkData() {
    const platformData = this.platformObj;
    const programData = this.programObj;
    const configData = this.configObj;
    const optionData = this.optionObj;
    const parts2Data = this.parts2Obj;
    const material2Data = this.material2Obj;
    let linkItems = [];
    //program to platform
    for (var i = 0; i < programData.length; i++) {
      for (var k = 0; k < platformData.length; k++) {
        for (var z = 0; z < 15; z++) {
          if (programData[i].id === platformData[k].links.programs[z]) {
            linkItems.push({
              id: 'l' + i,
              source: JSON.stringify(platformData[k].id),
              target: JSON.stringify(programData[i].id),
              lineStyle: {
                color: 'black',
                width: 1
              }
            });
            // console.log(platformData[k].id)
          }
        }
      }
    }
    //config to program
    for (var i = 0; i < configData.length; i++) {
      for (var k = 0; k < programData.length; k++) {
        for (var z = 0; z < 15; z++) {
          if (configData[i].id === programData[k].links.configurations[z]) {
            linkItems.push({
              id: 'l2' + i,
              source: JSON.stringify(programData[k].id),
              target: JSON.stringify(configData[i].id),
              lineStyle: {
                color: 'black',
                width: 1
              }
            });
          }
        }
      }
    }
    //options to config
    // for(var i = 0; i < optionData.length; i++){
    //   for(var k = 0; k < configData.length; k++){
    //     for(var z = 0; z < 15; z++){
    //       if(optionData[i].id === configData[k].links.options[z]){
    //         linkItems.push({
    //               id: 'lo'+ i,
    //               target: JSON.stringify(optionData[i].id),
    //               source: JSON.stringify(configData[k].id),
    // //            lineStyle: {
    //                 color: 'black',
    //                 width: 1
    //               }
    //             });
    //       }
    //     }
    //   }
    // }
    //  //parts to options
    //  for(var i = 0; i < parts2Data.length; i++){
    //   for(var k = 0; k < optionData.length; k++){
    //     for(var z = 0; z < 15; z++){
    //       if(parts2Data[i].id === optionData[k].links.parts[z]){
    //         linkItems.push({
    //               id: 'lp'+ i,
    //               target: JSON.stringify(parts2Data[i].id),
    //               source: JSON.stringify(optionData[k].id),
    //               lineStyle: {
    //                 color: 'black',
    //                 width: 1
    //               }
    //             });
    //       }
    //     }
    //   }
    // }
    // //materials to parts
    // for(var i = 0; i < material2Data.length; i++){
    //   for(var k = 0; k < parts2Data.length; k++){
    //     for(var z = 0; z < 15; z++){
    //       if(material2Data[i].id === parts2Data[k].links.materials[z]){
    //         linkItems.push({
    //               id: 'lm'+ i,
    //               target: JSON.stringify(material2Data[i].id),
    //               source: JSON.stringify(parts2Data[k].id),
    //               lineStyle: {
    //                 color: 'black',
    //                 width: 1
    //               }
    //             });
    //       }
    //     }
    //   }
    // }
    return linkItems;
  }
}
GraphComponent.ɵfac = function GraphComponent_Factory(t) {
  return new (t || GraphComponent)();
};
GraphComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: GraphComponent,
  selectors: [["app-graph"]],
  decls: 1,
  vars: 1,
  consts: [["echarts", "", 1, "graph", 3, "options"]],
  template: function GraphComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.nodeGraph);
    }
  },
  dependencies: [ngx_echarts__WEBPACK_IMPORTED_MODULE_7__.NgxEchartsDirective],
  styles: [".graph[_ngcontent-%COMP%] {\n  height: 100%;\n  max-width: 100%;\n}"]
});

/***/ }),

/***/ 81090:
/*!*******************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/force-directed-graph/graph/graph.module.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphModule": () => (/* binding */ GraphModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _graph_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph.component */ 81654);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 34984);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);






class GraphModule {}
GraphModule.ɵfac = function GraphModule_Factory(t) {
  return new (t || GraphModule)();
};
GraphModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: GraphModule
});
GraphModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.UvxIconModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_4__.NgxEchartsModule.forRoot({
    echarts: () => __webpack_require__.e(/*! import() */ 347).then(__webpack_require__.bind(__webpack_require__, /*! echarts */ 13347))
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GraphModule, {
    declarations: [_graph_component__WEBPACK_IMPORTED_MODULE_0__.GraphComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.UvxIconModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_4__.NgxEchartsModule],
    exports: [_graph_component__WEBPACK_IMPORTED_MODULE_0__.GraphComponent]
  });
})();

/***/ }),

/***/ 46249:
/*!************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/global-where-used-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GwuRoutingModule": () => (/* binding */ GwuRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _global_where_used_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-where-used.component */ 52691);
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/landing/landing.component */ 99559);
/* harmony import */ var _wave_wave_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wave/wave.component */ 28361);
/* harmony import */ var _force_directed_graph_force_directed_graph_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./force-directed-graph/force-directed-graph.component */ 21148);
/* harmony import */ var _profile_viewer_container_profile_viewer_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-viewer-container/profile-viewer-container.component */ 91134);
/* harmony import */ var _project_wizard_wizard_container_wizard_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-wizard/wizard-container/wizard-container.component */ 31227);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);









const routes = [{
  path: '',
  component: _global_where_used_component__WEBPACK_IMPORTED_MODULE_0__.GlobalWhereUsedComponent,
  children: [{
    path: 'wizard',
    component: _project_wizard_wizard_container_wizard_container_component__WEBPACK_IMPORTED_MODULE_5__.WizardContainerComponent
  }, {
    path: '',
    component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent,
    children: [{
      path: '',
      redirectTo: 'wave',
      pathMatch: 'full'
    }, {
      path: 'wave',
      component: _wave_wave_component__WEBPACK_IMPORTED_MODULE_2__.WaveComponent
    }, {
      path: 'force-directed-graph',
      component: _force_directed_graph_force_directed_graph_component__WEBPACK_IMPORTED_MODULE_3__.ForceDirectedGraphComponent
    }, {
      path: 'profile',
      component: _profile_viewer_container_profile_viewer_container_component__WEBPACK_IMPORTED_MODULE_4__.ProfileViewerContainerComponent
    }]
  }]
}];
class GwuRoutingModule {}
GwuRoutingModule.ɵfac = function GwuRoutingModule_Factory(t) {
  return new (t || GwuRoutingModule)();
};
GwuRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: GwuRoutingModule
});
GwuRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](GwuRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 52691:
/*!*******************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/global-where-used.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalWhereUsedComponent": () => (/* binding */ GlobalWhereUsedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _services_app_shell_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/app-shell.service */ 97732);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);



class GlobalWhereUsedComponent {
  constructor(appShellService) {
    this.appShellService = appShellService;
  }
  ngOnInit() {
    this.appShellService.setTitle('Global Where Used');
    this.appShellService.setHeaderIcon('global_where_used');
    this.appShellService.setNavIcon('gwu');
  }
}
GlobalWhereUsedComponent.ɵfac = function GlobalWhereUsedComponent_Factory(t) {
  return new (t || GlobalWhereUsedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_app_shell_service__WEBPACK_IMPORTED_MODULE_0__.AppShellService));
};
GlobalWhereUsedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: GlobalWhereUsedComponent,
  selectors: [["prototype-uv-ui-global-where-used"]],
  decls: 1,
  vars: 0,
  template: function GlobalWhereUsedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
  styles: [".grid[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vh - 64px);\n  display: grid;\n  grid-gap: 0;\n  grid-template-columns: [col1] 336px [col2] auto;\n  grid-template-rows: [row1] 68px [row2] auto;\n  grid-template-areas: \"sidebar appbar\" \"sidebar main\";\n}\n\n.actionbar[_ngcontent-%COMP%] {\n  grid-column: col2;\n  grid-row: row1;\n  border-top: none;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  grid-column: col1;\n  grid-row-start: row1;\n  grid-row-end: 3;\n}\n\n.content[_ngcontent-%COMP%] {\n  grid-column: col2;\n  grid-row: row2;\n}"],
  changeDetection: 0
});

/***/ }),

/***/ 4498:
/*!**************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/gwu.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GwuModule": () => (/* binding */ GwuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 73555);
/* harmony import */ var _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _global_where_used_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-where-used.component */ 52691);
/* harmony import */ var _global_where_used_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-where-used-routing.module */ 46249);
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/landing/landing.component */ 99559);
/* harmony import */ var _profile_viewer_container_profile_viewer_container_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-viewer-container/profile-viewer-container.module */ 85820);
/* harmony import */ var _wave_wave_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wave/wave.component */ 28361);
/* harmony import */ var _force_directed_graph_force_directed_graph_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./force-directed-graph/force-directed-graph.component */ 21148);
/* harmony import */ var _force_directed_graph_graph_graph_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./force-directed-graph/graph/graph.module */ 81090);
/* harmony import */ var _profile_viewer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-viewer.service */ 64238);
/* harmony import */ var _project_wizard_project_wizard_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project-wizard/project-wizard.module */ 61220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94650);













class GwuModule {}
GwuModule.ɵfac = function GwuModule_Factory(t) {
  return new (t || GwuModule)();
};
GwuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: GwuModule
});
GwuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [_profile_viewer_service__WEBPACK_IMPORTED_MODULE_8__.ProfileViewerService],
  imports: [_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.BackdropModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SidePanelModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.TabModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ButtonModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SearchPanelModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__.DragDropModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, _force_directed_graph_graph_graph_module__WEBPACK_IMPORTED_MODULE_7__.GraphModule, _global_where_used_routing_module__WEBPACK_IMPORTED_MODULE_2__.GwuRoutingModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ActionBarModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.RangeSliderModule, _profile_viewer_container_profile_viewer_container_module__WEBPACK_IMPORTED_MODULE_4__.ProfileViewerContainerModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxIconModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SelectableEntityModule, _project_wizard_project_wizard_module__WEBPACK_IMPORTED_MODULE_9__.ProjectWizardModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](GwuModule, {
    declarations: [_global_where_used_component__WEBPACK_IMPORTED_MODULE_1__.GlobalWhereUsedComponent, _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__.LandingComponent, _wave_wave_component__WEBPACK_IMPORTED_MODULE_5__.WaveComponent, _force_directed_graph_force_directed_graph_component__WEBPACK_IMPORTED_MODULE_6__.ForceDirectedGraphComponent],
    imports: [_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.BackdropModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SidePanelModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.TabModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ButtonModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SearchPanelModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__.DragDropModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, _force_directed_graph_graph_graph_module__WEBPACK_IMPORTED_MODULE_7__.GraphModule, _global_where_used_routing_module__WEBPACK_IMPORTED_MODULE_2__.GwuRoutingModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ActionBarModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.RangeSliderModule, _profile_viewer_container_profile_viewer_container_module__WEBPACK_IMPORTED_MODULE_4__.ProfileViewerContainerModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxIconModule, _uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SelectableEntityModule, _project_wizard_project_wizard_module__WEBPACK_IMPORTED_MODULE_9__.ProjectWizardModule],
    exports: [_global_where_used_component__WEBPACK_IMPORTED_MODULE_1__.GlobalWhereUsedComponent]
  });
})();

/***/ }),

/***/ 25110:
/*!**************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/pages/landing/gwu-tabs.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gwuTabs": () => (/* binding */ gwuTabs)
/* harmony export */ });
const gwuTabs = [{
  label: "Wave",
  icon: "waves",
  service: "wave"
}, {
  label: "Force Directed Graph",
  icon: "insights",
  service: "force-directed-graph"
}, {
  label: "Profile",
  icon: "person",
  service: "profile"
}];

/***/ }),

/***/ 99559:
/*!***********************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/pages/landing/landing.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 36053);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 2994);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 7625);
/* harmony import */ var _gwu_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gwu-tabs */ 25110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _wizard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../wizard.service */ 563);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _profile_viewer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../profile-viewer.service */ 64238);
/* harmony import */ var _services_on_destroy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/on-destroy.service */ 14270);
/* harmony import */ var _uv_ui_lib_src_lib_backdrop_backdrop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/backdrop/backdrop.component */ 5742);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uv_ui_lib_src_lib_tab_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/tab/tab.component */ 38335);
/* harmony import */ var _uv_ui_lib_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/button/button.component */ 26218);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);
/* harmony import */ var _uv_ui_lib_src_lib_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/action-bar/action-bar.component */ 89895);
/* harmony import */ var _uv_ui_lib_src_lib_range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/range-slider/range-slider.component */ 80665);















const _c0 = function (a0) {
  return {
    service: a0
  };
};
function LandingComponent_uvx_action_bar_2_uvx_tab_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "uvx-tab", 13);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", item_r7.label)("icon", item_r7.icon)("routerLink", item_r7.service)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](5, _c0, item_r7.service))("isActive", ctx_r5.activeService === item_r7.service);
  }
}
function LandingComponent_uvx_action_bar_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14)(1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Page: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "uvx-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "uvx-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Columns:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "uvx-range-slider", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("valueChangedEvent", function LandingComponent_uvx_action_bar_2_div_5_Template_uvx_range_slider_valueChangedEvent_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r8.columnCountChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", ctx_r6.currentProfileViewerPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", ctx_r6.profileViewerPageLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("min", 1)("max", 4)("value", ctx_r6.columnCount)("valueMarkers", true);
  }
}
function LandingComponent_uvx_action_bar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "uvx-action-bar", 7)(1, "div", 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, LandingComponent_uvx_action_bar_2_uvx_tab_3_Template, 1, 7, "uvx-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, LandingComponent_uvx_action_bar_2_div_5_Template, 9, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.gwuTabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.activeService === "profile");
  }
}
function LandingComponent_ng_template_3_uvx_action_bar_0_uvx_tab_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "uvx-tab", 13);
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", item_r13.label)("icon", item_r13.icon)("routerLink", item_r13.service)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](5, _c0, item_r13.service))("isActive", ctx_r11.activeService === item_r13.service);
  }
}
function LandingComponent_ng_template_3_uvx_action_bar_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14)(1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Page: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "uvx-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "uvx-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Columns:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "uvx-range-slider", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("valueChangedEvent", function LandingComponent_ng_template_3_uvx_action_bar_0_div_5_Template_uvx_range_slider_valueChangedEvent_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r14.columnCountChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", ctx_r12.currentProfileViewerPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", ctx_r12.profileViewerPageLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("min", 1)("max", 4)("value", ctx_r12.columnCount)("valueMarkers", true);
  }
}
function LandingComponent_ng_template_3_uvx_action_bar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "uvx-action-bar", 7)(1, "div", 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, LandingComponent_ng_template_3_uvx_action_bar_0_uvx_tab_3_Template, 1, 7, "uvx-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, LandingComponent_ng_template_3_uvx_action_bar_0_div_5_Template, 9, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r10.gwuTabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.activeService === "profile");
  }
}
function LandingComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, LandingComponent_ng_template_3_uvx_action_bar_0_Template, 6, 2, "uvx-action-bar", 19);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.currentUser.name !== "user_cummins@test.com");
  }
}
function LandingComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1)(1, "uvx-action-bar", 7)(2, "uvx-icon-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "uvx-icon-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function LandingComponent_app_wizard_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-wizard-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onCancelWizard", function LandingComponent_app_wizard_container_7_Template_app_wizard_container_onCancelWizard_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r16.projectWizard = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
class LandingComponent {
  get backdropMode() {
    return this.projectWizard ? 'popup' : 'hidden';
  }
  get isDevUser() {
    return this.currentUser.name === this.chevronUser || this.currentUser.name === this.cumminsUser ? false : true;
  }
  get backdropState() {
    return this.projectWizard ? 'visible' : 'hidden';
  }
  // public gwuTabs = [
  //     {
  //         icon: 'more_horisontal',
  //         link: '/',
  //         linkText: 'Link',
  //         results: ''
  //     },
  //     {
  //         icon: 'more_horisontal',
  //         link: '/',
  //         linkText: 'Link',
  //         results: ''
  //     },
  //     {
  //         icon: 'more_horisontal',
  //         link: '/',
  //         linkText: 'Link',
  //         results: ''
  //     }
  // ];
  constructor(stepsService, route, router, profileViewerService, destroy$, ref) {
    this.stepsService = stepsService;
    this.route = route;
    this.router = router;
    this.profileViewerService = profileViewerService;
    this.destroy$ = destroy$;
    this.ref = ref;
    this.expandActionBar = false;
    this.projectWizard = false;
    this.activeService = '';
    this.columnCount = 1;
    this.profileViewerPageLength = '';
    this.currentProfileViewerPage = '';
    this.currentUser = {
      id: 1,
      new: false,
      name: ''
    };
    this.columns = ['1', '2', '3', '4'];
    this.gwuTabs = _gwu_tabs__WEBPACK_IMPORTED_MODULE_0__.gwuTabs;
    this.chevronUser = 'user_chevron@test.com';
    this.cumminsUser = 'user_cummins@test.com';
  }
  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.stepsService.onCancelWizard$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(value => this.projectWizard = value)), this.profileViewerService.currentPage$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(value => this.currentProfileViewerPage = value.toString())), this.profileViewerService.currentColumnCount$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(value => this.columnCount = value)), this.profileViewerService.pages$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(value => this.profileViewerPageLength = value.length.toString()))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(() => this.ref.detectChanges());
    this.route.queryParams.subscribe(params => {
      this.activeService = params['service'];
    });
  }
  columnCountChanged(value) {
    this.columnCount = value;
    this.profileViewerService.setCurrentColumnCount(this.columnCount);
    this.router.navigate([], {
      queryParams: {
        service: 'profile',
        columnCount: this.columnCount
      }
    });
  }
  getClosest(val) {
    // return this.columns.reduce(value => (prev, curr) {
    //     // return (Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev);
    //   });
  }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) {
  return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_wizard_service__WEBPACK_IMPORTED_MODULE_1__.WizardService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_profile_viewer_service__WEBPACK_IMPORTED_MODULE_2__.ProfileViewerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_on_destroy_service__WEBPACK_IMPORTED_MODULE_3__.NgOnDestroyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef));
};
LandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: LandingComponent,
  selectors: [["app-landing"]],
  decls: 9,
  vars: 6,
  consts: [[1, "uv-container-fluid", "h-100"], [1, "row"], ["class", "w-100", 4, "ngIf", "ngIfElse"], ["customerUserTpl", ""], ["class", "row", 4, "ngIf"], [3, "onCancelWizard", 4, "ngIf"], [3, "backdropState", "mode", "backdropClicked"], [1, "w-100"], ["left", "", 1, "flex"], [1, "flex", "margin-top-sm", "margin-right-sm"], ["mode", "horizontal", "class", "margin-right-xxs", 3, "label", "icon", "routerLink", "queryParams", "isActive", 4, "ngFor", "ngForOf"], ["right", "", 1, "flex"], ["class", "flex align-items-center", 4, "ngIf"], ["mode", "horizontal", 1, "margin-right-xxs", 3, "label", "icon", "routerLink", "queryParams", "isActive"], [1, "flex", "align-items-center"], [1, "flex", "justify-content-space-between", "margin-right-sm", "divider-right", "padding-right-sm", "gap-10", "bold"], [3, "label"], [1, "uv-body", "margin-right-xs"], [3, "min", "max", "value", "valueMarkers", "valueChangedEvent"], ["class", "w-100", 4, "ngIf"], ["color", "primary", 1, "margin-right-xs"], ["color", "primary"], [3, "onCancelWizard"]],
  template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, LandingComponent_uvx_action_bar_2_Template, 6, 2, "uvx-action-bar", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, LandingComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, LandingComponent_div_5_Template, 6, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, LandingComponent_app_wizard_container_7_Template, 1, 0, "app-wizard-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "uvx-backdrop", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("backdropClicked", function LandingComponent_Template_uvx_backdrop_backdropClicked_8_listener() {
        return ctx.projectWizard = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isDevUser)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.expandActionBar);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.projectWizard);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("backdropState", ctx.backdropState)("mode", ctx.backdropMode);
    }
  },
  dependencies: [_uv_ui_lib_src_lib_backdrop_backdrop_component__WEBPACK_IMPORTED_MODULE_4__.BackdropComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _uv_ui_lib_src_lib_tab_tab_component__WEBPACK_IMPORTED_MODULE_5__.TabComponent, _uv_ui_lib_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__.ButtonComponent, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_7__.IconButtonComponent, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _uv_ui_lib_src_lib_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_8__.ActionBarComponent, _uv_ui_lib_src_lib_range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_9__.RangeSliderComponent],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 91134:
/*!***************************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/profile-viewer-container/profile-viewer-container.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileViewerContainerComponent": () => (/* binding */ ProfileViewerContainerComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7625);
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/animations */ 9689);
/* harmony import */ var _search_search_results_sample_search_results_allSearchResults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../search/search-results/sample-search-results/allSearchResults */ 81271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _profile_viewer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile-viewer.service */ 64238);
/* harmony import */ var _services_on_destroy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/on-destroy.service */ 14270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _profile_viewer_profile_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-viewer/profile-viewer.component */ 67364);








function ProfileViewerContainerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-profile-viewer", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", ctx_r0.items[0].name)("description", ctx_r0.items[0].description);
  }
}
function ProfileViewerContainerComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-profile-viewer", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", item_r7.name)("description", item_r7.description);
  }
}
function ProfileViewerContainerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileViewerContainerComponent_div_2_div_1_Template, 2, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.items.slice(0, 2));
  }
}
function ProfileViewerContainerComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-profile-viewer", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", item_r9.name)("description", item_r9.description);
  }
}
function ProfileViewerContainerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileViewerContainerComponent_div_3_div_2_Template, 2, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.items.slice(0, 3));
  }
}
function ProfileViewerContainerComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-profile-viewer", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", item_r11.name)("description", item_r11.description);
  }
}
function ProfileViewerContainerComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileViewerContainerComponent_div_4_div_1_Template, 2, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.items.slice(0, 4));
  }
}
function ProfileViewerContainerComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileViewerContainerComponent_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.currentPageNumber > 1 && ctx_r12.paginate(ctx_r12.currentPageNumber - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProfileViewerContainerComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileViewerContainerComponent_div_6_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.currentPageNumber < 4 && ctx_r14.paginate(ctx_r14.currentPageNumber + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class ProfileViewerContainerComponent {
  constructor(profileViewerService, ref, destroy$) {
    this.profileViewerService = profileViewerService;
    this.ref = ref;
    this.destroy$ = destroy$;
    this.items = _search_search_results_sample_search_results_allSearchResults__WEBPACK_IMPORTED_MODULE_1__.allSearchResults.slice(0, 12);
    this.pageAnimationState = 'back';
    this.pageAnimationState2 = 'in';
  }
  ngOnInit() {
    this.pages = this.profileViewerService.getPages();
    this.profileViewerService.currentPage$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(value => this.currentPageNumber = value);
    this.profileViewerService.columnCount$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(count => {
      this.columnCount = count;
      this.ref.detectChanges();
    });
  }
  paginate(value) {
    console.log(this.currentPageNumber < value);
    if (this.currentPageNumber < value) {
      this.pageAnimationState = 'next';
      this.pageAnimationState2 = 'back';
    } else {
      this.pageAnimationState = 'back';
      this.pageAnimationState2 = 'next';
    }
    this.profileViewerService.setCurrentPage(value);
    // this.setPageAnimationState(value);
  }

  setPageAnimationState(page, name) {
    // console.log(page);
    console.log(name, this.currentPageNumber === page ? 'in' : 'out');
    return this.currentPageNumber === page ? 'in' : 'out';
  }
}
ProfileViewerContainerComponent.ɵfac = function ProfileViewerContainerComponent_Factory(t) {
  return new (t || ProfileViewerContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_profile_viewer_service__WEBPACK_IMPORTED_MODULE_2__.ProfileViewerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_on_destroy_service__WEBPACK_IMPORTED_MODULE_3__.NgOnDestroyService));
};
ProfileViewerContainerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ProfileViewerContainerComponent,
  selectors: [["app-profile-viewer-container"]],
  inputs: {
    columnCount: "columnCount"
  },
  decls: 7,
  vars: 6,
  consts: [[1, "uv-container-fluid", "h-100", "padding-sm"], ["class", "row profile-row", 4, "ngIf"], ["class", "udemy-row profile-row", 4, "ngIf"], ["class", "paginate paginate-back", 3, "click", 4, "ngIf"], ["class", "paginate paginate-next", 3, "click", 4, "ngIf"], [1, "row", "profile-row"], [1, "col-12"], [3, "name", "description"], [1, "udemy-row", "profile-row"], ["class", "col-1-of-2", 4, "ngFor", "ngForOf"], [1, "col-1-of-2"], ["class", "col-1-of-3", 4, "ngFor", "ngForOf"], [1, "col-1-of-3"], ["class", "col-1-of-4", 4, "ngFor", "ngForOf"], [1, "col-1-of-4"], [1, "paginate", "paginate-back", 3, "click"], [1, "paginate", "paginate-next", 3, "click"]],
  template: function ProfileViewerContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileViewerContainerComponent_div_1_Template, 3, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileViewerContainerComponent_div_2_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProfileViewerContainerComponent_div_3_Template, 3, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProfileViewerContainerComponent_div_4_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProfileViewerContainerComponent_div_5_Template, 1, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ProfileViewerContainerComponent_div_6_Template, 1, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.columnCount === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.columnCount === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.columnCount === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.columnCount === 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentPageNumber > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentPageNumber < 4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _profile_viewer_profile_viewer_component__WEBPACK_IMPORTED_MODULE_4__.ProfileViewerComponent],
  styles: [".profile-viewer-container[_ngcontent-%COMP%] {\n  border: 2px solid green;\n  height: calc(100vh - 150px);\n  display: grid;\n  grid-gap: 16px;\n  padding: 16px;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  grid-auto-flow: column;\n  grid-auto-columns: minmax(160px, 1fr);\n  overflow-x: auto;\n}\n.profile-viewer-container   [_nghost-%COMP%] {\n  width: 100%;\n}\n\n.profile-row[_ngcontent-%COMP%] {\n  height: calc(100% - 53px);\n}\n\n.paginate[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  height: 144px;\n  width: 144px;\n  border-radius: 100%;\n  background-color: var(--uv-color-gray-2);\n}\n.paginate[_ngcontent-%COMP%]:hover {\n  background-color: var(--uv-color-gray);\n}\n.paginate-next[_ngcontent-%COMP%] {\n  right: -123px;\n}\n.paginate-back[_ngcontent-%COMP%] {\n  left: -58px;\n}\n\n.animate-exit-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_moveOutRight 1s 1;\n}\n.animate-exit-left[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_moveOutLeft 1s 1;\n}\n.animate-enter-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_moveInRight 1s 1;\n}\n.animate-enter-left[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_moveInLeft 1s 1;\n}\n\n@keyframes _ngcontent-%COMP%_moveInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-2000px);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_moveInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(2000px);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_moveOutLeft {\n  100% {\n    opacity: 0;\n    transform: translateX(-2000px);\n  }\n}\n@keyframes _ngcontent-%COMP%_moveOutRight {\n  100% {\n    opacity: 0;\n    transform: translateX(2000px);\n  }\n}"],
  data: {
    animation: [_shared_animations__WEBPACK_IMPORTED_MODULE_0__.flyInOutAnimation, _shared_animations__WEBPACK_IMPORTED_MODULE_0__.nextPageAnimation, _shared_animations__WEBPACK_IMPORTED_MODULE_0__.EnterExitLeft, _shared_animations__WEBPACK_IMPORTED_MODULE_0__.Container, _shared_animations__WEBPACK_IMPORTED_MODULE_0__.EnterExitRight]
  },
  changeDetection: 0
});

/***/ }),

/***/ 85820:
/*!************************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/profile-viewer-container/profile-viewer-container.module.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileViewerContainerModule": () => (/* binding */ ProfileViewerContainerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _profile_viewer_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-viewer-container.component */ 91134);
/* harmony import */ var _profile_viewer_profile_viewer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-viewer/profile-viewer.module */ 17138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);




class ProfileViewerContainerModule {}
ProfileViewerContainerModule.ɵfac = function ProfileViewerContainerModule_Factory(t) {
  return new (t || ProfileViewerContainerModule)();
};
ProfileViewerContainerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ProfileViewerContainerModule
});
ProfileViewerContainerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _profile_viewer_profile_viewer_module__WEBPACK_IMPORTED_MODULE_1__.ProfileViewerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileViewerContainerModule, {
    declarations: [_profile_viewer_container_component__WEBPACK_IMPORTED_MODULE_0__.ProfileViewerContainerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _profile_viewer_profile_viewer_module__WEBPACK_IMPORTED_MODULE_1__.ProfileViewerModule],
    exports: [_profile_viewer_container_component__WEBPACK_IMPORTED_MODULE_0__.ProfileViewerContainerComponent]
  });
})();

/***/ }),

/***/ 67364:
/*!********************************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/profile-viewer-container/profile-viewer/profile-viewer.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileViewerComponent": () => (/* binding */ ProfileViewerComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _profile_viewer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../profile-viewer.service */ 64238);
/* harmony import */ var _services_on_destroy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/on-destroy.service */ 14270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uv_ui_lib_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/button/button.component */ 26218);
/* harmony import */ var _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/icon-button/icon-button.component */ 35145);
/* harmony import */ var _uv_ui_lib_src_lib_tab_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../uv-ui-lib/src/lib/tab/tab.component */ 38335);








function ProfileViewerComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "uvx-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Compare");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "uvx-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProfileViewerComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "uvx-icon-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "uvx-icon-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ProfileViewerComponent_uvx_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "uvx-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileViewerComponent_uvx_button_20_Template_uvx_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.expandDescription());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "See more");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProfileViewerComponent_div_26_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tag_r10);
  }
}
function ProfileViewerComponent_div_26_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileViewerComponent_div_26_div_6_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r6.tags);
  }
}
function ProfileViewerComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ProfileViewerComponent_div_26_div_6_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r6.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r6.tags[0] != "");
  }
}
class ProfileViewerComponent {
  constructor(profileViewerService, ref, destroy$) {
    this.profileViewerService = profileViewerService;
    this.ref = ref;
    this.destroy$ = destroy$;
    this.expandedDescription = false;
    this.metadataTabActive = false;
    this.historyTabActive = false;
    this.columnCount = 0;
    this.name = '';
    this.description = '';
    this.items = [{
      title: 'Taxonomy',
      breadcrumbs: ['Lorem ipsum dolor sit amet consectetur adipiscing', 'Brazed Aluminum', 'Heat parameters'],
      details: '',
      tags: ['']
    }, {
      title: 'Parent Text',
      breadcrumbs: [''],
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
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
  }
  ngOnInit() {
    this.profileViewerService.columnCount$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(count => {
      this.columnCount = count;
      this.ref.detectChanges();
    });
    console.log(this.columnCount);
  }
  isTextOverflow(elementId) {
    const elem = document.getElementById(elementId);
    if (elem) {
      // console.log(elem.offsetWidth < elem.scrollHeight);
      // console.log(elem, elem.offsetWidth, elem.scrollHeight);
      return elem.offsetWidth < elem.scrollHeight;
    } else {
      return false;
    }
  }
  onDescriptionResized(event) {
    // console.log(event);
    this.ref.markForCheck();
  }
  expandDescription() {
    this.expandedDescription = true;
  }
  changeTab(tab) {
    tab === 'metadata' ? (this.metadataTabActive = true, this.historyTabActive = false) : (this.historyTabActive = true, this.metadataTabActive = false);
  }
}
ProfileViewerComponent.ɵfac = function ProfileViewerComponent_Factory(t) {
  return new (t || ProfileViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_profile_viewer_service__WEBPACK_IMPORTED_MODULE_0__.ProfileViewerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_on_destroy_service__WEBPACK_IMPORTED_MODULE_1__.NgOnDestroyService));
};
ProfileViewerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ProfileViewerComponent,
  selectors: [["app-profile-viewer"]],
  inputs: {
    columnCount: "columnCount",
    name: "name",
    description: "description"
  },
  decls: 27,
  vars: 8,
  consts: [[1, "box", "box-rounded", "h-100", "profile-viewer", "margin-auto"], [1, "padding-sm", "profile-viewer-top"], [1, "flex", "justify-content-space-between", "margin-bottom-md"], [1, "flex", "justify-content-space-between"], [4, "ngIf"], [1, "flex"], ["color", "gray-dark", 1, "margin-right-xs"], ["color", "gray-dark"], [1, "margin-bottom-md"], ["id", "description", 1, "profile-viewer-top-description", 3, "resized"], [1, "uv-body"], ["label", "See more", 3, "click", 4, "ngIf"], ["mode", "horizontal", "label", "Meta Data", 3, "isActive", "click"], ["mode", "horizontal", "label", "History", 3, "isActive", "click"], [1, "divider"], [1, "padding-sm", "profile-viewer-metadata"], ["class", "flex margin-bottom-xs", 4, "ngFor", "ngForOf"], ["mode", "secondary", "label", "Compare", 1, "margin-right-xxxs"], ["mode", "secondary", "label", "Design Ripple", "icon", "design", 1, "margin-right-xs"], ["mode", "secondary", 1, "margin-right-xxxs"], ["mode", "secondary", 1, "margin-right-xs"], ["label", "See more", 3, "click"], [1, "flex", "margin-bottom-xs"], [1, "profile-viewer-title"], [1, "uv-body", "bold"], ["class", "flex flex-wrap", 4, "ngIf"], [1, "flex", "flex-wrap"], ["class", "uv-tag", 4, "ngFor", "ngForOf"], [1, "uv-tag"]],
  template: function ProfileViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProfileViewerComponent_div_4_Template, 4, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProfileViewerComponent_div_5_Template, 5, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "uvx-icon-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "more_horiz");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5)(9, "uvx-icon-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "unlock");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "uvx-icon-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "fullscreen");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "uvx-icon-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "h5", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resized", function ProfileViewerComponent_Template_div_resized_17_listener($event) {
        return ctx.onDescriptionResized($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ProfileViewerComponent_uvx_button_20_Template, 2, 0, "uvx-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 5)(22, "uvx-tab", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileViewerComponent_Template_uvx_tab_click_22_listener() {
        return ctx.changeTab("metadata");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "uvx-tab", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileViewerComponent_Template_uvx_tab_click_23_listener() {
        return ctx.changeTab("history");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ProfileViewerComponent_div_26_Template, 7, 3, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.columnCount == 1 || ctx.columnCount == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.columnCount == 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.description, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isTextOverflow("description"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isActive", ctx.metadataTabActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isActive", ctx.historyTabActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _uv_ui_lib_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent, _uv_ui_lib_src_lib_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__.IconButtonComponent, _uv_ui_lib_src_lib_tab_tab_component__WEBPACK_IMPORTED_MODULE_4__.TabComponent],
  styles: [".profile-viewer[_ngcontent-%COMP%] {\n  max-width: 1105px;\n  height: calc(100vh - 177px);\n}\n.profile-viewer-top[_ngcontent-%COMP%] {\n  height: 333px;\n  overflow: hidden;\n}\n.profile-viewer-metadata[_ngcontent-%COMP%] {\n  height: calc(100% - 393px);\n  overflow: auto;\n}\n.profile-viewer-title[_ngcontent-%COMP%] {\n  min-width: 150px;\n}"],
  changeDetection: 0
});

/***/ }),

/***/ 17138:
/*!*****************************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/profile-viewer-container/profile-viewer/profile-viewer.module.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileViewerModule": () => (/* binding */ ProfileViewerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _profile_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-viewer.component */ 67364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);




class ProfileViewerModule {}
ProfileViewerModule.ɵfac = function ProfileViewerModule_Factory(t) {
  return new (t || ProfileViewerModule)();
};
ProfileViewerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ProfileViewerModule
});
ProfileViewerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.TabModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileViewerModule, {
    declarations: [_profile_viewer_component__WEBPACK_IMPORTED_MODULE_1__.ProfileViewerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.TabModule],
    exports: [_profile_viewer_component__WEBPACK_IMPORTED_MODULE_1__.ProfileViewerComponent]
  });
})();

/***/ }),

/***/ 64238:
/*!**************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/profile-viewer.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileViewerService": () => (/* binding */ ProfileViewerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);


const PAGES = [1, 2, 3, 4];
class ProfileViewerService {
  constructor() {
    this.pages$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(PAGES);
    this.currentPage$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.columnCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(3);
    this.currentPage$.next(this.pages$.value[0]);
  }
  get currentColumnCount$() {
    return this.columnCount$.asObservable();
  }
  setCurrentColumnCount(value) {
    this.columnCount$.next(value);
    console.log('service', value);
  }
  setCurrentPage(page) {
    this.currentPage$.next(page);
    console.log(this.currentPage$.value);
  }
  getCurrentPage() {
    return this.currentPage$.asObservable();
  }
  getPages() {
    return this.pages$.asObservable();
  }
}
ProfileViewerService.ɵfac = function ProfileViewerService_Factory(t) {
  return new (t || ProfileViewerService)();
};
ProfileViewerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ProfileViewerService,
  factory: ProfileViewerService.ɵfac
});

/***/ }),

/***/ 44075:
/*!*********************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/form-page/form-page.module.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPageModule": () => (/* binding */ FormPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _wizard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../wizard.service */ 563);
/* harmony import */ var _helper_bar_helper_bar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper-bar/helper-bar.module */ 25587);
/* harmony import */ var _step_directions_step_directions_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../step-directions/step-directions.module */ 45266);
/* harmony import */ var _steps_steps_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../steps/steps.module */ 6271);
/* harmony import */ var _form_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-page.component */ 90378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);








class FormPageModule {}
FormPageModule.ɵfac = function FormPageModule_Factory(t) {
  return new (t || FormPageModule)();
};
FormPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: FormPageModule
});
FormPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_wizard_service__WEBPACK_IMPORTED_MODULE_1__.WizardService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _step_directions_step_directions_module__WEBPACK_IMPORTED_MODULE_3__.StepDirectionsModule, _steps_steps_module__WEBPACK_IMPORTED_MODULE_4__.StepsModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ModalModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, _helper_bar_helper_bar_module__WEBPACK_IMPORTED_MODULE_2__.HelperBarModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.TooltipModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FormPageModule, {
    declarations: [_form_page_component__WEBPACK_IMPORTED_MODULE_5__.FormPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _step_directions_step_directions_module__WEBPACK_IMPORTED_MODULE_3__.StepDirectionsModule, _steps_steps_module__WEBPACK_IMPORTED_MODULE_4__.StepsModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ModalModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, _helper_bar_helper_bar_module__WEBPACK_IMPORTED_MODULE_2__.HelperBarModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.TooltipModule],
    exports: [_form_page_component__WEBPACK_IMPORTED_MODULE_5__.FormPageComponent]
  });
})();

/***/ }),

/***/ 25587:
/*!***********************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/helper-bar/helper-bar.module.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperBarModule": () => (/* binding */ HelperBarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _helper_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-bar.component */ 52279);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);




class HelperBarModule {}
HelperBarModule.ɵfac = function HelperBarModule_Factory(t) {
  return new (t || HelperBarModule)();
};
HelperBarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: HelperBarModule
});
HelperBarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.IconButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.TooltipModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HelperBarModule, {
    declarations: [_helper_bar_component__WEBPACK_IMPORTED_MODULE_0__.HelperBarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.IconButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.TooltipModule],
    exports: [_helper_bar_component__WEBPACK_IMPORTED_MODULE_0__.HelperBarComponent]
  });
})();

/***/ }),

/***/ 6849:
/*!************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/helper-bar/helper-bar.service.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperBarService": () => (/* binding */ HelperBarService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);

class HelperBarService {
  setCurrentState(state) {
    this.currentState$.next(state);
  }
  getCurrentState() {
    return this.currentState$.asObservable();
  }
}
HelperBarService.ɵfac = function HelperBarService_Factory(t) {
  return new (t || HelperBarService)();
};
HelperBarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: HelperBarService,
  factory: HelperBarService.ɵfac
});

/***/ }),

/***/ 88699:
/*!*************************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/launch-point-page/launch-point-page.module.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaunchPointPageModule": () => (/* binding */ LaunchPointPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _launch_point_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./launch-point-page.component */ 87451);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);




class LaunchPointPageModule {}
LaunchPointPageModule.ɵfac = function LaunchPointPageModule_Factory(t) {
  return new (t || LaunchPointPageModule)();
};
LaunchPointPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: LaunchPointPageModule
});
LaunchPointPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.IconButtonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LaunchPointPageModule, {
    declarations: [_launch_point_page_component__WEBPACK_IMPORTED_MODULE_0__.LaunchPointPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_1__.IconButtonModule],
    exports: [_launch_point_page_component__WEBPACK_IMPORTED_MODULE_0__.LaunchPointPageComponent]
  });
})();

/***/ }),

/***/ 61220:
/*!****************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/project-wizard.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectWizardModule": () => (/* binding */ ProjectWizardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _helper_bar_helper_bar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-bar/helper-bar.module */ 25587);
/* harmony import */ var _helper_bar_helper_bar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper-bar/helper-bar.service */ 6849);
/* harmony import */ var _step_directions_step_directions_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step-directions/step-directions.module */ 45266);
/* harmony import */ var _steps_steps_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./steps/steps.module */ 6271);
/* harmony import */ var _wizard_container_wizard_container_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wizard-container/wizard-container.module */ 62383);
/* harmony import */ var _wizard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../wizard.service */ 563);
/* harmony import */ var _side_by_side_wizard_sbs_wizard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../side-by-side/wizard/sbs-wizard.service */ 53454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);









class ProjectWizardModule {}
ProjectWizardModule.ɵfac = function ProjectWizardModule_Factory(t) {
  return new (t || ProjectWizardModule)();
};
ProjectWizardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: ProjectWizardModule
});
ProjectWizardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [_helper_bar_helper_bar_service__WEBPACK_IMPORTED_MODULE_1__.HelperBarService, _wizard_service__WEBPACK_IMPORTED_MODULE_5__.WizardService, _side_by_side_wizard_sbs_wizard_service__WEBPACK_IMPORTED_MODULE_6__.SbsWizardService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _helper_bar_helper_bar_module__WEBPACK_IMPORTED_MODULE_0__.HelperBarModule, _step_directions_step_directions_module__WEBPACK_IMPORTED_MODULE_2__.StepDirectionsModule, _steps_steps_module__WEBPACK_IMPORTED_MODULE_3__.StepsModule, _wizard_container_wizard_container_module__WEBPACK_IMPORTED_MODULE_4__.WizardContainerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ProjectWizardModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _helper_bar_helper_bar_module__WEBPACK_IMPORTED_MODULE_0__.HelperBarModule, _step_directions_step_directions_module__WEBPACK_IMPORTED_MODULE_2__.StepDirectionsModule, _steps_steps_module__WEBPACK_IMPORTED_MODULE_3__.StepsModule, _wizard_container_wizard_container_module__WEBPACK_IMPORTED_MODULE_4__.WizardContainerModule]
  });
})();

/***/ }),

/***/ 21942:
/*!***********************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/start-page/start-page.module.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPageModule": () => (/* binding */ StartPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _start_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-page.component */ 78070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);




class StartPageModule {}
StartPageModule.ɵfac = function StartPageModule_Factory(t) {
  return new (t || StartPageModule)();
};
StartPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: StartPageModule
});
StartPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ModalModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StartPageModule, {
    declarations: [_start_page_component__WEBPACK_IMPORTED_MODULE_1__.StartPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ModalModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule],
    exports: [_start_page_component__WEBPACK_IMPORTED_MODULE_1__.StartPageComponent]
  });
})();

/***/ }),

/***/ 45266:
/*!*********************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/step-directions/step-directions.module.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepDirectionsModule": () => (/* binding */ StepDirectionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ 90455);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ 71948);
/* harmony import */ var _wizard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../wizard.service */ 563);
/* harmony import */ var _step_directions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step-directions.component */ 76845);
/* harmony import */ var _step_one_step_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step-one/step-one.component */ 500);
/* harmony import */ var _step_two_step_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./step-two/step-two.component */ 2417);
/* harmony import */ var _step_three_step_three_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./step-three/step-three.component */ 42026);
/* harmony import */ var _side_by_side_wizard_step_one_step_one_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../side-by-side/wizard/step-one/step-one.component */ 40226);
/* harmony import */ var _side_by_side_wizard_step_two_step_two_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../side-by-side/wizard/step-two/step-two.component */ 13385);
/* harmony import */ var _side_by_side_wizard_step_three_step_three_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../side-by-side/wizard/step-three/step-three.component */ 87543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94650);














class StepDirectionsModule {}
StepDirectionsModule.ɵfac = function StepDirectionsModule_Factory(t) {
  return new (t || StepDirectionsModule)();
};
StepDirectionsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: StepDirectionsModule
});
StepDirectionsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [_wizard_service__WEBPACK_IMPORTED_MODULE_1__.WizardService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.DropdownModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.TextInputModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SearchPanelModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.RangeSliderModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.TooltipModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxIconModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ChipModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggleModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](StepDirectionsModule, {
    declarations: [_step_directions_component__WEBPACK_IMPORTED_MODULE_2__.StepDirectionsComponent, _step_one_step_one_component__WEBPACK_IMPORTED_MODULE_3__.StepOneComponent, _step_two_step_two_component__WEBPACK_IMPORTED_MODULE_4__.StepTwoComponent, _step_three_step_three_component__WEBPACK_IMPORTED_MODULE_5__.StepThreeComponent, _side_by_side_wizard_step_one_step_one_component__WEBPACK_IMPORTED_MODULE_6__.SbsStepOneComponent, _side_by_side_wizard_step_two_step_two_component__WEBPACK_IMPORTED_MODULE_7__.SbsStepTwoComponent, _side_by_side_wizard_step_three_step_three_component__WEBPACK_IMPORTED_MODULE_8__.SbsStepThreeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.DropdownModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.TextInputModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.SearchPanelModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.RangeSliderModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.TooltipModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxIconModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CheckboxModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ChipModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggleModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule],
    exports: [_step_directions_component__WEBPACK_IMPORTED_MODULE_2__.StepDirectionsComponent]
  });
})();

/***/ }),

/***/ 6271:
/*!*************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/steps/steps.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepsModule": () => (/* binding */ StepsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _steps_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./steps.component */ 21364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);




class StepsModule {}
StepsModule.ɵfac = function StepsModule_Factory(t) {
  return new (t || StepsModule)();
};
StepsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: StepsModule
});
StepsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxIconModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.TooltipModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StepsModule, {
    declarations: [_steps_component__WEBPACK_IMPORTED_MODULE_1__.StepsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IconButtonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.UvxIconModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.TooltipModule],
    exports: [_steps_component__WEBPACK_IMPORTED_MODULE_1__.StepsComponent]
  });
})();

/***/ }),

/***/ 62383:
/*!***********************************************************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/project-wizard/wizard-container/wizard-container.module.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WizardContainerModule": () => (/* binding */ WizardContainerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/uv-ui-lib/src/public-api */ 92709);
/* harmony import */ var _wizard_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wizard-container.component */ 31227);
/* harmony import */ var _start_page_start_page_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../start-page/start-page.module */ 21942);
/* harmony import */ var _form_page_form_page_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-page/form-page.module */ 44075);
/* harmony import */ var _launch_point_page_launch_point_page_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../launch-point-page/launch-point-page.module */ 88699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);







class WizardContainerModule {}
WizardContainerModule.ɵfac = function WizardContainerModule_Factory(t) {
  return new (t || WizardContainerModule)();
};
WizardContainerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: WizardContainerModule
});
WizardContainerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ModalModule, _start_page_start_page_module__WEBPACK_IMPORTED_MODULE_2__.StartPageModule, _form_page_form_page_module__WEBPACK_IMPORTED_MODULE_3__.FormPageModule, _launch_point_page_launch_point_page_module__WEBPACK_IMPORTED_MODULE_4__.LaunchPointPageModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](WizardContainerModule, {
    declarations: [_wizard_container_component__WEBPACK_IMPORTED_MODULE_1__.WizardContainerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, projects_uv_ui_lib_src_public_api__WEBPACK_IMPORTED_MODULE_0__.ModalModule, _start_page_start_page_module__WEBPACK_IMPORTED_MODULE_2__.StartPageModule, _form_page_form_page_module__WEBPACK_IMPORTED_MODULE_3__.FormPageModule, _launch_point_page_launch_point_page_module__WEBPACK_IMPORTED_MODULE_4__.LaunchPointPageModule],
    exports: [_wizard_container_component__WEBPACK_IMPORTED_MODULE_1__.WizardContainerComponent]
  });
})();

/***/ }),

/***/ 89092:
/*!********************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/wave/gwu-columns.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "columns": () => (/* binding */ columns)
/* harmony export */ });
const columns = [{
  column: 1,
  entities: [{
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'WHFA-196',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }],
  image: ''
}, {
  column: 2,
  entities: [],
  image: '../../../assets/wave-lines/001.png'
}, {
  column: 3,
  entities: [{
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'EXH-SU-B3',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'EXH-SU-B4',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'EXH-SU-B42',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'EXH-SU-B43',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }],
  image: ''
}, {
  column: 4,
  entities: [],
  image: '../../../assets/wave-lines/002.png'
}, {
  column: 5,
  entities: [{
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'PBYJ-873',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'AMYU-897',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'LQBY-17',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'FKKR-176',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'AGSC-053',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'FERO-700',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }],
  image: ''
}, {
  column: 6,
  entities: [],
  image: '../../../assets/wave-lines/003.png'
}, {
  column: 7,
  entities: [{
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'OGA-546',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'ADTC-116',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }],
  image: ''
}, {
  column: 8,
  entities: [],
  image: '../../../assets/wave-lines/004.png'
}, {
  column: 9,
  entities: [{
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'EXH-SU-B9',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'EXH-SU-B11',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }],
  image: ''
}, {
  column: 10,
  entities: [],
  image: '../../../assets/wave-lines/005.png'
}, {
  column: 11,
  entities: [{
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'QDUF-602',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'VALO-460',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'QKQ-58',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    category: 'Part',
    type: 'file',
    id: 1,
    name: 'EXH-SU-B1342',
    description: 'Description of the item. Details and metadata may go here, and well as other useful information. Year: 2019',
    date: '',
    active: false,
    selected: false,
    disabled: false,
    formattedDate: '',
    showDetails: false,
    tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
    progress: 0,
    walletFavorite: false,
    walletDate: '',
    formattedWalletDate: '',
    launchbar: false,
    menuActive: false,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }],
  image: ''
}
// {
//     column: 12,
//     entities: [
//     ],
//     image: '../../../assets/gwulines.png'
// }
];

/***/ }),

/***/ 28361:
/*!***********************************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/app/global-where-used/wave/wave.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaveComponent": () => (/* binding */ WaveComponent)
/* harmony export */ });
/* harmony import */ var _gwu_columns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gwu-columns */ 89092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/wallet.service */ 24021);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _uv_ui_lib_src_lib_selectable_entity_selectable_entity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../uv-ui-lib/src/lib/selectable-entity/selectable-entity.component */ 70158);





function WaveComponent_div_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span")(1, "uvx-selectable-entity", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemUnselectedEvent", function WaveComponent_div_2_span_2_Template_uvx_selectable_entity_itemUnselectedEvent_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const entity_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.onGwuEntitySelected(entity_r4));
    })("itemSelectedEvent", function WaveComponent_div_2_span_2_Template_uvx_selectable_entity_itemSelectedEvent_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const entity_r4 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.onGwuEntitySelected(entity_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const entity_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isSelected", entity_r4.selected)("label", entity_r4.name)("dragIsDisabled", true);
  }
}
function WaveComponent_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", column_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function WaveComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WaveComponent_div_2_span_2_Template, 2, 3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WaveComponent_div_2_span_3_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const column_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", column_r1.entities);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", column_r1.image !== "");
  }
}
class WaveComponent {
  constructor(walletService) {
    this.walletService = walletService;
    this.columns = _gwu_columns__WEBPACK_IMPORTED_MODULE_0__.columns;
  }
  ngOnInit() {
    this.walletService.clearSelectedEntities();
  }
  onGwuEntitySelected(entity) {
    this.walletService.selectEntityForWallet(entity);
  }
}
WaveComponent.ɵfac = function WaveComponent_Factory(t) {
  return new (t || WaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_wallet_service__WEBPACK_IMPORTED_MODULE_1__.WalletService));
};
WaveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: WaveComponent,
  selectors: [["app-wave"]],
  decls: 3,
  vars: 1,
  consts: [[1, "wave-container"], [1, "uv-container", "padding-xs", "column-container", 2, "min-width", "1389px"], [4, "ngFor", "ngForOf"], [1, "col-1", "flex", "flex-column", "gap-10"], [4, "ngIf"], [3, "isSelected", "label", "dragIsDisabled", "itemUnselectedEvent", "itemSelectedEvent"], ["alt", "", 3, "src"]],
  template: function WaveComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WaveComponent_div_2_Template, 4, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.columns);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _uv_ui_lib_src_lib_selectable_entity_selectable_entity_component__WEBPACK_IMPORTED_MODULE_2__.SelectableEntityComponent],
  styles: [".wave-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: calc(100vw - 62px);\n}\n\n.wave-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.column-container[_ngcontent-%COMP%] {\n  width: 100%;\n}"]
});

/***/ }),

/***/ 2787:
/*!**********************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/sample-data/configurations.json ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":355054,"mechanism":"Piston","cylinder layout":"Straight","cylinders":"2","valve":"Aspin valve","camshaft":"cast iron","name":"S2AV-CI","type":"configuration","links":{"options":[185076,463050]}},{"id":313146,"mechanism":"Piston","cylinder layout":"Straight","cylinders":"2","valve":"Aspin valve","camshaft":"billet steel","name":"S2AV-BS","type":"configuration","links":{"options":[923148]}},{"id":437701,"mechanism":"Piston","cylinder layout":"Straight","cylinders":"2","valve":"Crankcase ventilation system","camshaft":"cast iron","name":"S2CVS-CI","type":"configuration","links":{"options":[601880]}},{"id":377399,"mechanism":"Piston","cylinder layout":"Straight","cylinders":"2","valve":"Crankcase ventilation system","camshaft":"billet steel","name":"S2CVS-BS","type":"configuration","links":{"options":[715213,466317]}},{"id":517511,"mechanism":"Piston","cylinder layout":"Straight","cylinders":"2","valve":"Pneumatic valve springs","camshaft":"cast iron","name":"S2PVS-CI","type":"configuration","links":{"options":[334894,318249]}},{"id":145114,"mechanism":"Piston","cylinder layout":"Straight","cylinders":"2","valve":"Pneumatic valve springs","camshaft":"billet steel","name":"S2PVS-BS","type":"configuration","links":{"options":[114760]}},{"id":629668,"mechanism":"Piston","cylinder layout":"Straight","cylinders":"6","valve":"Pneumatic valve springs","camshaft":"cast iron","name":"S6PVS-CI","type":"configuration","links":{"options":[901509]}},{"id":309190,"mechanism":"Piston","cylinder layout":"Straight","cylinders":"6","valve":"Pneumatic valve springs","camshaft":"billet steel","name":"S6PVS-BS","type":"configuration","links":{"options":[781584,171848]}},{"id":894941,"mechanism":"Piston","cylinder layout":"Straight","cylinders":"6","valve":"Aspin valve","camshaft":"cast iron","name":"S6AV-CI","type":"configuration","links":{"options":[589041]}},{"id":117993,"mechanism":"Piston","cylinder layout":"Straight","cylinders":"6","valve":"Aspin valve","camshaft":"billet steel","name":"S6AV-BS","type":"configuration","links":{"options":[815239]}},{"id":303594,"mechanism":"Piston","cylinder layout":"Straight","cylinders":"6","valve":"Corliss steam engine","camshaft":"cast iron","name":"S6CSE-CI","type":"configuration","links":{"options":[307078]}},{"id":381280,"mechanism":"Piston","cylinder layout":"Straight","cylinders":"6","valve":"Corliss steam engine","camshaft":"billet steel","name":"S6CSE-BS","type":"configuration","links":{"options":[723106]}},{"id":729252,"mechanism":"Piston","cylinder layout":"Straight","cylinders":"3","valve":"Reed valve","camshaft":"cast iron","name":"S3RV-CI","type":"configuration","links":{"options":[510644]}},{"id":432428,"mechanism":"Piston","cylinder layout":"Straight","cylinders":"3","valve":"Reed valve","camshaft":"billet steel","name":"S3RV-BS","type":"configuration","links":{"options":[289947,996908]}},{"id":187808,"mechanism":"Piston","cylinder layout":"Straight","cylinders":"3","valve":"Corliss valve","camshaft":"cast iron","name":"S3CV-CI","type":"configuration","links":{"options":[475413]}},{"id":457715,"mechanism":"Piston","cylinder layout":"Straight","cylinders":"3","valve":"Corliss valve","camshaft":"billet steel","name":"S3CV-BS","type":"configuration","links":{"options":[935416]}},{"id":681471,"mechanism":"Piston","cylinder layout":"Straight","cylinders":"3","valve":"Aspin valve","camshaft":"cast iron","name":"S3AV-CI","type":"configuration","links":{"options":[694012]}},{"id":663800,"mechanism":"Piston","cylinder layout":"Straight","cylinders":"3","valve":"Aspin valve","camshaft":"billet steel","name":"S3AV-BS","type":"configuration","links":{"options":[263158]}},{"id":517706,"mechanism":"Piston","cylinder layout":"H","cylinders":"2","valve":"Valve guide","camshaft":"cast iron","name":"H2VG-CI","type":"configuration","links":{"options":[597121]}},{"id":914695,"mechanism":"Piston","cylinder layout":"H","cylinders":"2","valve":"Valve guide","camshaft":"billet steel","name":"H2VG-BS","type":"configuration","links":{"options":[149653]}},{"id":129595,"mechanism":"Piston","cylinder layout":"H","cylinders":"2","valve":"Piston valve (steam engine)","camshaft":"cast iron","name":"H2PVSE-CI","type":"configuration","links":{"options":[441060]}},{"id":369328,"mechanism":"Piston","cylinder layout":"H","cylinders":"2","valve":"Piston valve (steam engine)","camshaft":"billet steel","name":"H2PVSE-BS","type":"configuration","links":{"options":[149653]}},{"id":848435,"mechanism":"Piston","cylinder layout":"H","cylinders":"2","valve":"Two-stroke power valve system","camshaft":"cast iron","name":"H2TSPVS-CI","type":"configuration","links":{"options":[935416]}},{"id":973230,"mechanism":"Piston","cylinder layout":"H","cylinders":"2","valve":"Two-stroke power valve system","camshaft":"billet steel","name":"H2TSPVS-BS","type":"configuration","links":{"options":[888427]}},{"id":609733,"mechanism":"Piston","cylinder layout":"H","cylinders":"6","valve":"Valve seat","camshaft":"cast iron","name":"H6VS-CI","type":"configuration","links":{"options":[706489,527071]}},{"id":457062,"mechanism":"Piston","cylinder layout":"H","cylinders":"6","valve":"Valve seat","camshaft":"billet steel","name":"H6VS-BS","type":"configuration","links":{"options":[804958]}},{"id":515040,"mechanism":"Piston","cylinder layout":"H","cylinders":"6","valve":"Reed valve","camshaft":"cast iron","name":"H6RV-CI","type":"configuration","links":{"options":[185076]}},{"id":335038,"mechanism":"Piston","cylinder layout":"H","cylinders":"6","valve":"Reed valve","camshaft":"billet steel","name":"H6RV-BS","type":"configuration","links":{"options":[700901,354977]}},{"id":981160,"mechanism":"Piston","cylinder layout":"H","cylinders":"6","valve":"Valve timing","camshaft":"cast iron","name":"H6VT-CI","type":"configuration","links":{"options":[307078]}},{"id":625606,"mechanism":"Piston","cylinder layout":"H","cylinders":"6","valve":"Valve timing","camshaft":"billet steel","name":"H6VT-BS","type":"configuration","links":{"options":[935416]}},{"id":106250,"mechanism":"Piston","cylinder layout":"H","cylinders":"8","valve":"Camless piston engine","camshaft":"cast iron","name":"H8CPE-CI","type":"configuration","links":{"options":[839621,857088]}},{"id":932347,"mechanism":"Piston","cylinder layout":"H","cylinders":"8","valve":"Camless piston engine","camshaft":"billet steel","name":"H8CPE-BS","type":"configuration","links":{"options":[923148,321895,518066]}},{"id":928926,"mechanism":"Piston","cylinder layout":"H","cylinders":"8","valve":"Sleeve valve","camshaft":"cast iron","name":"H8SV-CI","type":"configuration","links":{"options":[579969,902222]}},{"id":730401,"mechanism":"Piston","cylinder layout":"H","cylinders":"8","valve":"Sleeve valve","camshaft":"billet steel","name":"H8SV-BS","type":"configuration","links":{"options":[893239]}},{"id":738748,"mechanism":"Piston","cylinder layout":"H","cylinders":"8","valve":"Slide valve","camshaft":"cast iron","name":"H8SV-CI","type":"configuration","links":{"options":[888427,231573]}},{"id":618494,"mechanism":"Piston","cylinder layout":"H","cylinders":"8","valve":"Slide valve","camshaft":"billet steel","name":"H8SV-BS","type":"configuration","links":{"options":[688770,181227]}},{"id":583143,"mechanism":"Piston","cylinder layout":"W","cylinders":"3","valve":"Trip valve gear","camshaft":"cast iron","name":"W3TVG-CI","type":"configuration","links":{"options":[589041,507759]}},{"id":479417,"mechanism":"Piston","cylinder layout":"W","cylinders":"3","valve":"Trip valve gear","camshaft":"billet steel","name":"W3TVG-BS","type":"configuration","links":{"options":[957386]}},{"id":801442,"mechanism":"Piston","cylinder layout":"W","cylinders":"3","valve":"Air suction valve","camshaft":"cast iron","name":"W3ASV-CI","type":"configuration","links":{"options":[909899,292101]}},{"id":997372,"mechanism":"Piston","cylinder layout":"W","cylinders":"3","valve":"Air suction valve","camshaft":"billet steel","name":"W3ASV-BS","type":"configuration","links":{"options":[598662]}},{"id":541200,"mechanism":"Piston","cylinder layout":"W","cylinders":"3","valve":"Dump valve","camshaft":"cast iron","name":"W3DV-CI","type":"configuration","links":{"options":[200869]}},{"id":430832,"mechanism":"Piston","cylinder layout":"W","cylinders":"3","valve":"Dump valve","camshaft":"billet steel","name":"W3DV-BS","type":"configuration","links":{"options":[510644]}},{"id":570859,"mechanism":"Piston","cylinder layout":"W","cylinders":"6","valve":"Dump valve","camshaft":"cast iron","name":"W6DV-CI","type":"configuration","links":{"options":[264481,806376]}},{"id":459696,"mechanism":"Piston","cylinder layout":"W","cylinders":"6","valve":"Dump valve","camshaft":"billet steel","name":"W6DV-BS","type":"configuration","links":{"options":[935416]}},{"id":950877,"mechanism":"Piston","cylinder layout":"W","cylinders":"6","valve":"Corliss steam engine","camshaft":"cast iron","name":"W6CSE-CI","type":"configuration","links":{"options":[598662]}},{"id":890326,"mechanism":"Piston","cylinder layout":"W","cylinders":"6","valve":"Corliss steam engine","camshaft":"billet steel","name":"W6CSE-BS","type":"configuration","links":{"options":[815239]}},{"id":301819,"mechanism":"Piston","cylinder layout":"W","cylinders":"6","valve":"Valve float","camshaft":"cast iron","name":"W6VF-CI","type":"configuration","links":{"options":[149653,412642,689737]}},{"id":960333,"mechanism":"Piston","cylinder layout":"W","cylinders":"6","valve":"Valve float","camshaft":"billet steel","name":"W6VF-BS","type":"configuration","links":{"options":[576833,720591,421583]}},{"id":165475,"mechanism":"Piston","cylinder layout":"W","cylinders":"1","valve":"Caprotti valve gear","camshaft":"cast iron","name":"W1CVG-CI","type":"configuration","links":{"options":[429398]}},{"id":982508,"mechanism":"Piston","cylinder layout":"W","cylinders":"1","valve":"Caprotti valve gear","camshaft":"billet steel","name":"W1CVG-BS","type":"configuration","links":{"options":[200869]}},{"id":534873,"mechanism":"Piston","cylinder layout":"W","cylinders":"1","valve":"Expansion valve (steam engine)","camshaft":"cast iron","name":"W1EVSE-CI","type":"configuration","links":{"options":[475413]}},{"id":493567,"mechanism":"Piston","cylinder layout":"W","cylinders":"1","valve":"Expansion valve (steam engine)","camshaft":"billet steel","name":"W1EVSE-BS","type":"configuration","links":{"options":[700901,126264]}},{"id":624785,"mechanism":"Piston","cylinder layout":"W","cylinders":"1","valve":"Valve guide","camshaft":"cast iron","name":"W1VG-CI","type":"configuration","links":{"options":[598662]}},{"id":378375,"mechanism":"Piston","cylinder layout":"W","cylinders":"1","valve":"Valve guide","camshaft":"billet steel","name":"W1VG-BS","type":"configuration","links":{"options":[283300]}},{"id":969644,"mechanism":"Wankel","rotors":"1","name":"WA1","type":"configuration","links":{"options":[791921]}},{"id":283373,"mechanism":"Wankel","rotors":"2","name":"WA2","type":"configuration","links":{"options":[815239]}},{"id":997928,"mechanism":"Wankel","rotors":"3","name":"WA3","type":"configuration","links":{"options":[747872,573016]}},{"id":686185,"mechanism":"Wankel","rotors":"4","name":"WA4","type":"configuration","links":{"options":[200869]}},{"id":494688,"mechanism":"Wankel","rotors":"5","name":"WA5","type":"configuration","links":{"options":[510644]}},{"id":486418,"mechanism":"Wankel","rotors":"6","name":"WA6","type":"configuration","links":{"options":[909899,538467]}},{"id":172518,"mechanism":"Wankel","rotors":"7","name":"WA7","type":"configuration","links":{"options":[576833,700180]}},{"id":410272,"mechanism":"Wankel","rotors":"8","name":"WA8","type":"configuration","links":{"options":[747872,800622]}},{"id":228268,"mechanism":"Wankel","rotors":"9","name":"WA9","type":"configuration","links":{"options":[263158]}},{"id":378308,"mechanism":"Wankel","rotors":"10","name":"WA10","type":"configuration","links":{"options":[839621]}},{"id":627255,"mechanism":"Wankel","rotors":"11","name":"WA11","type":"configuration","links":{"options":[888427,756400]}},{"id":959625,"mechanism":"Wankel","rotors":"12","name":"WA12","type":"configuration","links":{"options":[393247]}},{"id":734861,"mechanism":"Gas Turbine","category":"turbojets","name":"GB-TB","type":"configuration","links":{"options":[956357,213101]}},{"id":437886,"mechanism":"Gas Turbine","category":"turbofans","name":"GB-TF","type":"configuration","links":{"options":[737811,730801]}},{"id":157578,"mechanism":"Gas Turbine","category":"turboprops","name":"GB-TB","type":"configuration","links":{"options":[510644,272446]}},{"id":499072,"mechanism":"Gas Turbine","category":"turboshafts","name":"GB-TS","type":"configuration","links":{"options":[329753,308783]}}]');

/***/ }),

/***/ 15807:
/*!*****************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/sample-data/materials.json ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":154110,"name":"Stainless Steel","type":"material"},{"id":714432,"name":"Ceramic","type":"material"},{"id":507285,"name":"Anodized Aluminum","type":"material"},{"id":413014,"name":"Nylon 6-6","type":"material"},{"id":212686,"name":"Semi-Rigid Modified Polyolefin","type":"material"},{"id":588162,"name":"Modified Polyolefin","type":"material"},{"id":701390,"name":"NBCCS","type":"material"},{"id":902784,"name":"Fluid Resistant Modified Elastomer","type":"material"},{"id":840652,"name":"Modified Fluoropolymer","type":"material"},{"id":440467,"name":"Modified Fluoro-Elastomer","type":"material"},{"id":354460,"name":"Polyolefin Flexible Modified","type":"material"},{"id":778256,"name":"Low Fire Hazard Material","type":"material"},{"id":567059,"name":"Semi rigid Modified Polyolefin","type":"material"},{"id":378831,"name":"Semi-flexible ZEROHAL Polyolefin","type":"material"},{"id":981694,"name":"Flexible Modified Polyolefin","type":"material"},{"id":560557,"name":"Crosslinked Fluoropolymer","type":"material"},{"id":690103,"name":"Crosslinked Ethylene Tetrafluoroethylene","type":"material"},{"id":699283,"name":"Crosslinked Polyvinylidene Fluoride","type":"material"},{"id":460766,"name":"Irradiated Modified Polyolefin","type":"material"},{"id":360480,"name":"Crosslinked Polyolefin","type":"material"},{"id":824008,"name":"Medical Grade Crosslinked Fluoropolymer","type":"material"},{"id":577611,"name":"Medical Grade Crosslinked Polyolefin","type":"material"},{"id":625332,"name":"Polyolefin","type":"material"},{"id":702887,"name":"Adhesive","type":"material"},{"id":388380,"name":"Polyethylene/Polyester","type":"material"},{"id":453557,"name":"Polyester","type":"material"},{"id":151137,"name":"ZEROHAL Polyolefin","type":"material"},{"id":291056,"name":"Medical Grade Flouropolymer","type":"material"},{"id":229330,"name":"Medical Grade Crosslinked PEBA","type":"material"},{"id":120879,"name":"Crosslinked Fluoroelastomer","type":"material"},{"id":548916,"name":"Chlorinated Polyolefin","type":"material"},{"id":792274,"name":"Crosslinked Silicone Elastomer","type":"material"},{"id":620574,"name":"Silicone Rubber","type":"material"},{"id":869405,"name":"Crosslinked Elastomer","type":"material"},{"id":238296,"name":"Polymer","type":"material"},{"id":600508,"name":"Elastomer","type":"material"},{"id":661098,"name":"Composite","type":"material"},{"id":144837,"name":"Fluorosilicone","type":"material"},{"id":593153,"name":"Modified Elastomer","type":"material"},{"id":668236,"name":"Aluminum Alloy","type":"material"},{"id":248427,"name":"Polyisobutylene","type":"material"},{"id":441669,"name":"Nylon","type":"material"},{"id":487743,"name":"Aluminum","type":"material"},{"id":331585,"name":"Flexible Fluoropolymer","type":"material"},{"id":726723,"name":"Aluminum 5056-H18","type":"material"},{"id":133715,"name":"5056 Aluminum Alloy","type":"material"},{"id":585916,"name":"Aluminum 5056","type":"material"},{"id":628604,"name":"Aluminum 5056(56S)","type":"material"},{"id":730604,"name":"Aluminum 56S","type":"material"},{"id":911909,"name":"Phenolic","type":"material"},{"id":402734,"name":"Molded Phenolic Resin","type":"material"},{"id":840031,"name":"Brass","type":"material"},{"id":708283,"name":"Thermoplastic","type":"material"},{"id":114614,"name":"PBT","type":"material"},{"id":436197,"name":"Nylon 6/6","type":"material"},{"id":865297,"name":"PVC","type":"material"},{"id":505275,"name":"Nylon 6","type":"material"},{"id":338631,"name":"Nylon 66","type":"material"},{"id":821409,"name":"Nylon 6.6","type":"material"},{"id":165678,"name":"PBT GF","type":"material"},{"id":365669,"name":"PBT GF20","type":"material"},{"id":398941,"name":"PA6 GF","type":"material"},{"id":276182,"name":"LCP","type":"material"},{"id":536267,"name":"Polyester PBT","type":"material"},{"id":474997,"name":"PBT Polyester Non-Reinforced","type":"material"},{"id":545620,"name":"PA6","type":"material"},{"id":145514,"name":"Mewlus","type":"material"},{"id":736547,"name":"Brass (BNC)","type":"material"},{"id":113600,"name":"Beryllium Copper","type":"material"},{"id":620942,"name":"Polyamide 6.6","type":"material"},{"id":806498,"name":"Carbon Steel","type":"material"},{"id":272773,"name":"Die Cast Aluminum","type":"material"},{"id":307870,"name":"Die Cast Zinc Alloy","type":"material"},{"id":148885,"name":"Plastic","type":"material"},{"id":382538,"name":"Polycarbonate","type":"material"},{"id":650263,"name":"Copper","type":"material"},{"id":273988,"name":"Molded Plastic","type":"material"},{"id":900961,"name":"Thermoplastic Polyester","type":"material"},{"id":872405,"name":"PA","type":"material"},{"id":657036,"name":"LDPE","type":"material"},{"id":980424,"name":"PA GF","type":"material"},{"id":303483,"name":"PP MF","type":"material"},{"id":417459,"name":"Nylon GF","type":"material"},{"id":624118,"name":"PPS","type":"material"},{"id":590095,"name":"Other","type":"material"},{"id":335024,"name":"66Nylon","type":"material"},{"id":396167,"name":"Polyethylene","type":"material"},{"id":653449,"name":"Thermoplastic Elastomer","type":"material"},{"id":196635,"name":"Glass-Filled PBT","type":"material"},{"id":208242,"name":"PA66","type":"material"},{"id":564217,"name":"Silicone Foam","type":"material"},{"id":742631,"name":"Polychloroprene","type":"material"},{"id":671433,"name":"Urethane Foam","type":"material"},{"id":684479,"name":"Copper Alloy","type":"material"},{"id":392866,"name":"Steel","type":"material"},{"id":946593,"name":"PBT GF10","type":"material"},{"id":304785,"name":"Silicone","type":"material"},{"id":646000,"name":"Silopren LSR 3485/35","type":"material"},{"id":171067,"name":"NBR","type":"material"},{"id":766357,"name":"VMQ","type":"material"},{"id":511443,"name":"Polyacetal","type":"material"},{"id":526154,"name":"Metal","type":"material"},{"id":936520,"name":"Zinc Alloy","type":"material"},{"id":929966,"name":"PA 66 GF25","type":"material"},{"id":570344,"name":"PP","type":"material"},{"id":216337,"name":"PCT GF","type":"material"},{"id":163073,"name":"Phosphor Bronze","type":"material"},{"id":697696,"name":"Tin","type":"material"},{"id":553676,"name":"PC","type":"material"},{"id":898696,"name":"PC-GF20","type":"material"},{"id":785861,"name":"Thermoplastic or Thermoset Epoxy","type":"material"},{"id":557191,"name":"Thermoset Epoxy for Insulators/Copper Alloy for Clips","type":"material"},{"id":642419,"name":"Diallyl Phthalate","type":"material"},{"id":473781,"name":"Glass Filled Nylon","type":"material"},{"id":261321,"name":"Glass Reinforced Nylon","type":"material"},{"id":617177,"name":"PBT GF30","type":"material"},{"id":241096,"name":"Polyamide","type":"material"},{"id":303905,"name":"Glass-Reinforced Nylon","type":"material"},{"id":321910,"name":"Glass-Filled Thermoplastic","type":"material"},{"id":353033,"name":"Polyester GF","type":"material"},{"id":139381,"name":"PA 66","type":"material"},{"id":356354,"name":"Aluminum Alloy & Stainless Steel Lock Nut","type":"material"},{"id":318287,"name":"Flexible PVC","type":"material"},{"id":177007,"name":"Cold-Forged Aluminum","type":"material"},{"id":523258,"name":"Nylon 6.6 V15","type":"material"},{"id":127119,"name":"Polyethylene Flame-Retardant","type":"material"},{"id":111488,"name":"Outdoor Nylon","type":"material"},{"id":532247,"name":"Fluoropolymer","type":"material"},{"id":788089,"name":"Outdoor Polyethylene","type":"material"},{"id":437556,"name":"Polyamide 6.6 GF","type":"material"},{"id":673495,"name":"Tinned Cu","type":"material"},{"id":131404,"name":"Aluminum-Copper","type":"material"},{"id":143874,"name":"Tinned Brass","type":"material"},{"id":358507,"name":"Tinned Phosphor Bronze","type":"material"},{"id":866267,"name":"Pre Nickel Plated Steel","type":"material"},{"id":994326,"name":"Pre Nickel Plated Brass","type":"material"},{"id":556826,"name":"Tinned Aluminum","type":"material"},{"id":832771,"name":"Inflatable bladder of flexible aluminum-polyethylene laminate","type":"material"},{"id":405537,"name":"Cold Rolled Steel","type":"material"},{"id":294959,"name":"Nickel","type":"material"},{"id":418960,"name":"Platinum","type":"material"},{"id":218194,"name":"Polycarbonate + Stainless Mounting Bracket","type":"material"},{"id":396273,"name":"316L","type":"material"},{"id":803541,"name":"17-4PH","type":"material"},{"id":774265,"name":"Clear Vinyl","type":"material"},{"id":961716,"name":"Polyvinyl Fluoride (PVF)","type":"material"},{"id":440592,"name":"Vinyl","type":"material"},{"id":322309,"name":"Vinyl Film","type":"material"},{"id":640535,"name":"Polyimide","type":"material"},{"id":127227,"name":"Polypropylene","type":"material"},{"id":885030,"name":"Polyvinyl Fluoride","type":"material"},{"id":479094,"name":"Polyoxymethylene","type":"material"},{"id":924261,"name":"Unplated","type":"material"},{"id":260300,"name":"Pre-Tin","type":"material"},{"id":588526,"name":"Bright Tin","type":"material"},{"id":335860,"name":"Silver","type":"material"},{"id":534412,"name":"PVF2","type":"material"},{"id":332835,"name":"Gold","type":"material"},{"id":635353,"name":"PTFE","type":"material"},{"id":794599,"name":"Polytetrafluoroethylene (PTFE)","type":"material"},{"id":555714,"name":"Tin-Lead","type":"material"},{"id":509650,"name":"Alumel","type":"material"},{"id":687711,"name":"Chromel","type":"material"},{"id":298136,"name":"Electro Tin","type":"material"},{"id":509035,"name":"Nylon 66 GF","type":"material"},{"id":180812,"name":"Nylon - GF","type":"material"},{"id":621072,"name":"PA 6.6+6","type":"material"},{"id":144663,"name":"PA 6.6","type":"material"},{"id":400716,"name":"Tin-Plated Copper","type":"material"},{"id":245985,"name":"Nickel-Plated","type":"material"},{"id":598750,"name":"Heat Shrink Radiation-Crosslinked Modified Fluoropolymer","type":"material"},{"id":866740,"name":"Heat-Shrinkable, Radiation Cross-Linked Modified Fluoropolymer","type":"material"},{"id":855463,"name":"Modified Polyvinylidene","type":"material"},{"id":212029,"name":"Polyvinylidene","type":"material"},{"id":232098,"name":"Polyvinylidene Fluoride","type":"material"},{"id":227930,"name":"Heat-shrinkable, Radiation Cross-Linked Modified Polyvinylidene Fluoride","type":"material"},{"id":582454,"name":"Heat Shrink Radiation-Crosslinked Modified Polyvinylidene Fluoride","type":"material"},{"id":470025,"name":"Heat Shrink Radiation-Crosslinked Modified Polyvinylidene","type":"material"},{"id":678604,"name":"Heat Shrink Radiation-Crosslinked Modified Polyamide with hot-melt adhesive lining","type":"material"},{"id":744464,"name":"Heat Shrink Radiation-Crosslinked Modified Polyamide with Thermoplastic Adhesive","type":"material"},{"id":118268,"name":"Heat Shrink Radiation-Crosslinked Modified Polyolefin","type":"material"},{"id":566649,"name":"Tin/Silver","type":"material"},{"id":646174,"name":"Nickel Immersion","type":"material"},{"id":470153,"name":"Heat Shrink Radiation-Crosslinked Polyvinylidene Fluoride","type":"material"},{"id":402783,"name":"Heat Shrink Nylon","type":"material"},{"id":480415,"name":"Tin-Plated","type":"material"},{"id":323738,"name":"Silver-Plated Copper","type":"material"},{"id":509559,"name":"Tin/Silver/Nickel","type":"material"},{"id":149529,"name":"Silver-Plated","type":"material"},{"id":210862,"name":"Heat Shrinkable, Crosslinked, Flame-Retardant Modified Polyolefin","type":"material"},{"id":633221,"name":"Heat Shrinkable, Crosslinked Modified Polyolefin","type":"material"},{"id":970004,"name":"Heat Shrinkable, Transparent Blue, Radiation Crosslinked Polyvinylidene Fluoride","type":"material"},{"id":889587,"name":"Semi-Rigid, Irradiated Modified Polyolefin","type":"material"},{"id":199464,"name":"Chloroprene","type":"material"},{"id":721620,"name":"PEEK","type":"material"},{"id":796710,"name":"Cadmium Over Electroless Nickel","type":"material"},{"id":440644,"name":"Electroless Nickel","type":"material"},{"id":871895,"name":"Radiation Crosslinked Modified Polyvinylidene Fluoride","type":"material"},{"id":186791,"name":"Solder Impregnated, Flux Coated Copper","type":"material"},{"id":918424,"name":"Copper Braid with Activated Rosin Flux","type":"material"},{"id":801230,"name":"Sn96 Ag Solder Alloy","type":"material"},{"id":315955,"name":"Cadmium Plating over Electroless Nickel","type":"material"},{"id":502950,"name":"ETFE","type":"material"},{"id":288530,"name":"Polymide/PTFE","type":"material"},{"id":539132,"name":"Carbon Composition","type":"material"},{"id":232274,"name":"Carbon Film","type":"material"},{"id":598245,"name":"Metal Film","type":"material"},{"id":247400,"name":"Ceramic Composition","type":"material"},{"id":992712,"name":"Metal Oxide","type":"material"},{"id":105573,"name":"Oxide Film","type":"material"},{"id":270462,"name":"Carbon","type":"material"},{"id":927152,"name":"Thick Film","type":"material"},{"id":932591,"name":"Wire Wound","type":"material"},{"id":190499,"name":"Cermet","type":"material"},{"id":447105,"name":"Metal Clad","type":"material"},{"id":133859,"name":"Silver Cadmium Oxide","type":"material"},{"id":202982,"name":"Gold over Nickel","type":"material"},{"id":253521,"name":"Ag Alloy","type":"material"},{"id":329714,"name":"AgSnO2","type":"material"},{"id":579834,"name":"Silver Tin Oxide","type":"material"},{"id":551103,"name":"AgNi0.15","type":"material"},{"id":310576,"name":"Spring Brass","type":"material"},{"id":793429,"name":"Glass-Filled Polyester","type":"material"},{"id":524322,"name":"Copper Tin","type":"material"},{"id":162521,"name":"Phenolformaldehyde","type":"material"},{"id":159107,"name":"Retaining Clip","type":"material"},{"id":259066,"name":"Polybutylene Terephthalate (PBT)","type":"material"},{"id":219942,"name":"Polyphenylenether","type":"material"},{"id":583744,"name":"Ruthenium","type":"material"},{"id":829490,"name":"Nickel-Palladium","type":"material"},{"id":194673,"name":"AgNi+Au","type":"material"},{"id":240854,"name":"Gold F","type":"material"},{"id":800815,"name":"Nickel-Titanium","type":"material"},{"id":143178,"name":"Gold-Rhodium","type":"material"},{"id":476368,"name":"PdNi","type":"material"},{"id":560822,"name":"Silver Palladium (AgPd) Alloy","type":"material"},{"id":951463,"name":"AgNi","type":"material"},{"id":959518,"name":"AgNi Alloy","type":"material"},{"id":316372,"name":"Gold Flash","type":"material"},{"id":956589,"name":"Ag, Gold Flashed","type":"material"},{"id":350758,"name":"PdRu","type":"material"},{"id":346554,"name":"Nickel-Palladium Alloy","type":"material"},{"id":922896,"name":"Nickel-Titanium Alloy","type":"material"},{"id":552251,"name":"AgPd Alloy","type":"material"},{"id":458043,"name":"PdRu+Au","type":"material"},{"id":804208,"name":"PPA","type":"material"},{"id":249953,"name":"Nickel, Silver","type":"material"},{"id":193745,"name":"Thermoplastic (LCP)","type":"material"},{"id":808079,"name":"Nickel Silver Alloy","type":"material"},{"id":110004,"name":"PET Film","type":"material"},{"id":405854,"name":"Silver Clad Copper","type":"material"},{"id":443284,"name":"Acetal","type":"material"},{"id":801659,"name":"Polyacetal Resin","type":"material"},{"id":520176,"name":"Steel-Tin Plate","type":"material"},{"id":462340,"name":"Polytetrafluoroethylene","type":"material"},{"id":925116,"name":"AgSnO","type":"material"},{"id":340021,"name":"AgCdO","type":"material"},{"id":954224,"name":"AgSnOInO","type":"material"},{"id":163832,"name":"AgSnOlnO","type":"material"},{"id":160770,"name":"Ag","type":"material"},{"id":676891,"name":"AgNi90/10","type":"material"},{"id":167741,"name":"AgNi90/10, Gold-Plated","type":"material"},{"id":215687,"name":"AgCdO, Gold Flashed","type":"material"},{"id":361804,"name":"Silver Nickel","type":"material"},{"id":402061,"name":"AgNi90/10 gold plated","type":"material"},{"id":345862,"name":"W + AgSnO","type":"material"},{"id":231191,"name":"AgSnO2+Au","type":"material"},{"id":684408,"name":"W + AgSnO2","type":"material"},{"id":931126,"name":"PdNi+Au","type":"material"},{"id":100843,"name":"AgCu3","type":"material"},{"id":923119,"name":"Silver-Nickel Gold Covered","type":"material"},{"id":734067,"name":"AgSnO, Gold-Plated","type":"material"},{"id":904698,"name":"AgZnO","type":"material"},{"id":771942,"name":"Brushed Chrome","type":"material"},{"id":994577,"name":"Tin-Lead Plate","type":"material"},{"id":669517,"name":"Polished Chrome","type":"material"},{"id":376050,"name":"Gold over Silver","type":"material"},{"id":541316,"name":"Gold Flash over Silver","type":"material"},{"id":682149,"name":"Silver Alloy","type":"material"},{"id":485608,"name":"Cu","type":"material"},{"id":488613,"name":"POM","type":"material"},{"id":756501,"name":"PBT Basin","type":"material"},{"id":236578,"name":"PA 46","type":"material"},{"id":987622,"name":"High Temperature Nylon","type":"material"},{"id":537115,"name":"Polyphenylene Sulfide (PPS)","type":"material"},{"id":134835,"name":"Silver Clad","type":"material"},{"id":731928,"name":"Epoxy","type":"material"},{"id":403383,"name":"Silver Cadmium Oxide with Gold Plating","type":"material"},{"id":466849,"name":"Epoxy Resin","type":"material"},{"id":428700,"name":"Nickel-Plated Copper Alloy","type":"material"},{"id":823760,"name":"Silver Clad with Gold Flash","type":"material"},{"id":982533,"name":"Thermoset","type":"material"},{"id":103446,"name":"Phenol Resin","type":"material"},{"id":939355,"name":"Diallyl Phthalate (DAP)","type":"material"},{"id":467570,"name":"Nylon 4/6","type":"material"},{"id":630959,"name":"Zirconia","type":"material"},{"id":895713,"name":"Nickel Aluminum Bronze","type":"material"},{"id":103039,"name":"EPDM","type":"material"},{"id":778013,"name":"Liquid Crystal Polymer (LCP)","type":"material"},{"id":408422,"name":"Fluorosilicone Rubber Compound","type":"material"},{"id":183765,"name":"Nickel-Plated Copper","type":"material"},{"id":496909,"name":"Aluminum Bronze","type":"material"},{"id":854575,"name":"Pre-Nickel","type":"material"},{"id":292584,"name":"Post-Tin","type":"material"},{"id":739641,"name":"PP/E-Cu","type":"material"},{"id":441457,"name":"Heat Shrinkable Nylon","type":"material"},{"id":566320,"name":"None","type":"material"},{"id":209700,"name":"Silver over Nickel","type":"material"},{"id":869059,"name":"Pre-Silver","type":"material"},{"id":725297,"name":"Copper or Nickel","type":"material"},{"id":881793,"name":"Polyamide - GF","type":"material"},{"id":659989,"name":"Glass Filled Nylon 66","type":"material"},{"id":308378,"name":"Soft Vinyl Chloride","type":"material"},{"id":518457,"name":"Soft PVC","type":"material"},{"id":765746,"name":"Polyamide 4.6 GF","type":"material"},{"id":811332,"name":"Brass Alloy","type":"material"},{"id":174038,"name":"Copper Nickel","type":"material"},{"id":300990,"name":"Nickel-Silver","type":"material"},{"id":315317,"name":"Tin (Sn)","type":"material"},{"id":857383,"name":"Silver (Ag)","type":"material"},{"id":475670,"name":"Gold (Au)","type":"material"},{"id":548131,"name":"Nickel (Ni)","type":"material"},{"id":915813,"name":"Tin-Lead (SnPb)","type":"material"},{"id":604224,"name":"Tin Silver (SnAg)","type":"material"},{"id":397061,"name":"Cadmium","type":"material"},{"id":785227,"name":"Copper (Cu)","type":"material"},{"id":679679,"name":"Nickel-Copper Flash","type":"material"},{"id":671135,"name":"Nickel-Chromium","type":"material"},{"id":271290,"name":"Nickel Silver","type":"material"},{"id":506102,"name":"CuSn4","type":"material"},{"id":128012,"name":"Copper Zinc","type":"material"},{"id":373011,"name":"Soft Copper","type":"material"},{"id":864119,"name":"Zinc","type":"material"},{"id":132629,"name":"TFE Fluorocarbon","type":"material"},{"id":901502,"name":"Polymethylpentene","type":"material"},{"id":755760,"name":"VALOX","type":"material"},{"id":805131,"name":"Die Cast Zinc","type":"material"},{"id":269193,"name":"Polyester, PBT","type":"material"},{"id":917993,"name":"TFE","type":"material"},{"id":302034,"name":"TPX","type":"material"},{"id":483275,"name":"Gold over Copper","type":"material"},{"id":292940,"name":"White Bronze","type":"material"},{"id":205710,"name":"PTFE Fluorocarbon","type":"material"},{"id":243007,"name":"Brass/Copper","type":"material"},{"id":849154,"name":"Fluoroelastomer","type":"material"},{"id":734066,"name":"Bronze","type":"material"},{"id":206320,"name":"Polyphenylene","type":"material"},{"id":383587,"name":"Silver over Copper","type":"material"},{"id":227145,"name":"Nickel over Copper","type":"material"},{"id":177166,"name":"Conductive Silver","type":"material"},{"id":478651,"name":"Silicone Elastomers","type":"material"},{"id":159539,"name":"Conductive Fluorosilicone","type":"material"},{"id":367230,"name":"Bottom-Acetal/Middle-Acetal/Front-Polypropylene","type":"material"},{"id":478695,"name":"Polyester, PCT","type":"material"},{"id":236410,"name":"PTX","type":"material"},{"id":364316,"name":"PTFE Thermoplastic","type":"material"},{"id":530700,"name":"Soft Copper Alloy","type":"material"},{"id":197272,"name":"Conductive Elastomers","type":"material"},{"id":751247,"name":"Silver Plated Steel","type":"material"},{"id":372611,"name":"Ethylene Propylene","type":"material"},{"id":644650,"name":"Brass/Beryllium Copper","type":"material"},{"id":930913,"name":"Nitrile","type":"material"},{"id":680613,"name":"PTFE or PFA","type":"material"},{"id":225176,"name":"Passivated","type":"material"},{"id":798593,"name":"PTC","type":"material"},{"id":660919,"name":"PTC/PEEK","type":"material"},{"id":226828,"name":"Phosphorous","type":"material"},{"id":445809,"name":"LCP (Liquid Crystal Polymer)","type":"material"},{"id":400835,"name":"Annealed Copper","type":"material"},{"id":938071,"name":"ABS","type":"material"},{"id":939922,"name":"Mild Steel","type":"material"},{"id":768976,"name":"White Silicone Rubber","type":"material"},{"id":899077,"name":"Delrin","type":"material"},{"id":789907,"name":"PBT Polyester","type":"material"},{"id":423393,"name":"PE-606","type":"material"},{"id":560857,"name":"Polyphthalamide","type":"material"},{"id":346391,"name":"Tin over Copper","type":"material"},{"id":105610,"name":"High Temperature Thermoplastic UL94-V0","type":"material"},{"id":198114,"name":"Polyetherimide (PEI)","type":"material"},{"id":979552,"name":"Corning Glass 7070","type":"material"},{"id":218746,"name":"Neoprene","type":"material"},{"id":749401,"name":"Cadmium (AMS-QQ-P-416, Type II, Class 3)","type":"material"},{"id":205828,"name":"Passivated (SAE AMS-QQ-P-35 or MIL-S-5002)","type":"material"},{"id":904624,"name":"Corrosion Resisting Steel","type":"material"},{"id":562362,"name":"Electroless Nickel (AMS-C-26074)","type":"material"},{"id":977986,"name":"Zinc Nickel (ASTM B841)","type":"material"},{"id":507117,"name":"Unplated (Shotblast Glass Bead)","type":"material"},{"id":957333,"name":"Zinc Cobalt","type":"material"},{"id":476196,"name":"Electroless Nickel (AMS-C-26074, Class 3 or 4)","type":"material"},{"id":806832,"name":"Anodized Hard (MIL-A-8625, Type III, Class 2)","type":"material"},{"id":289052,"name":"Zinc Cobalt (Contact TE Connectivity)","type":"material"},{"id":960125,"name":"Glass Filled Polyester","type":"material"},{"id":238731,"name":"Glass-Filled Polycarbonate","type":"material"},{"id":506235,"name":"Gold Flash over Palladium Nickel","type":"material"},{"id":100365,"name":"ABS (Acrylonitrile-Butadiene-Styrene)","type":"material"},{"id":535535,"name":"High Temperature Thermoplastic","type":"material"},{"id":319840,"name":"PVC-Vinyl","type":"material"},{"id":351639,"name":"Glass-Filled Polyamide Nylon","type":"material"},{"id":104480,"name":"PA 9T GF","type":"material"},{"id":946906,"name":"PA 9T","type":"material"},{"id":537474,"name":"Nylon 9T","type":"material"},{"id":235939,"name":"PA 6.6 GF","type":"material"},{"id":941945,"name":"Glass-Filled, PBT (UL94 V-0)","type":"material"},{"id":988326,"name":"66 Nylon","type":"material"},{"id":187928,"name":"Polyester - GF","type":"material"},{"id":283135,"name":"GF Nylon","type":"material"},{"id":662170,"name":"Nylon 6/6 GF","type":"material"},{"id":379636,"name":"Thermoplastic-Polyester","type":"material"},{"id":541767,"name":"Polyester PBT GF","type":"material"},{"id":276315,"name":"6/6 Nylon","type":"material"},{"id":915154,"name":"Nylon 6T","type":"material"},{"id":509083,"name":"6/6 Nylon GF","type":"material"},{"id":968291,"name":"HSG 6T","type":"material"},{"id":420419,"name":"6T PA GF 30","type":"material"},{"id":168072,"name":"PA GF30","type":"material"},{"id":124984,"name":"6T PA(GF)","type":"material"},{"id":227942,"name":"Nylon(G.F)","type":"material"},{"id":929668,"name":"Nylon (G.F)","type":"material"},{"id":696595,"name":"Nylon GF15","type":"material"},{"id":512812,"name":"Polyester - GF 30","type":"material"},{"id":379040,"name":"LCP GF30 (Liquid Crystal Polymer)","type":"material"},{"id":696034,"name":"Thermoplastic - PA9T","type":"material"},{"id":156161,"name":"Liquid Crystal Polymer","type":"material"},{"id":769106,"name":"PA 4.6","type":"material"},{"id":807530,"name":"LCP - GF (Liquid Crystal Polymer)","type":"material"},{"id":670003,"name":"PA 6","type":"material"},{"id":849011,"name":"PA 6 Nylon","type":"material"},{"id":297127,"name":"Phosphor Bronze Alloy","type":"material"},{"id":425407,"name":"PA 66 GF20","type":"material"},{"id":426532,"name":"Phenolic - GF","type":"material"},{"id":726467,"name":"PA 66 GF","type":"material"},{"id":673993,"name":"FEP","type":"material"},{"id":922383,"name":"DAP","type":"material"},{"id":793959,"name":"Thermoset Epoxy","type":"material"},{"id":454647,"name":"Fluorosilicone Rubber","type":"material"},{"id":123761,"name":"Epoxy Thermoset","type":"material"},{"id":797913,"name":"Thermosetting Resin Shell","type":"material"},{"id":252322,"name":"PC + ABS","type":"material"},{"id":423080,"name":"G.F. PA 9T","type":"material"},{"id":398723,"name":"G.F. PA 4.6","type":"material"},{"id":309677,"name":"Select Gold","type":"material"},{"id":547716,"name":"Precious Metal","type":"material"},{"id":322263,"name":"Tellurium Copper","type":"material"},{"id":621660,"name":"High Conductivity Copper Alloy","type":"material"},{"id":147151,"name":"Cu-Ni Alloy","type":"material"},{"id":543256,"name":"Tin over Nickel","type":"material"},{"id":168851,"name":"Polyamide 66","type":"material"},{"id":937977,"name":"Glass-Filled Nylon 66","type":"material"},{"id":939526,"name":"Glass-Filled Nylon","type":"material"},{"id":261435,"name":"Nickel/Silver","type":"material"},{"id":278419,"name":"Electroless Nickel (Aluminum alloy, SAE AMS-C-26074, Class 3 or Class 4, Grade B)","type":"material"},{"id":798428,"name":"Cadmium (SAE AMS-QQ-P-416, Type II, Class 3)","type":"material"},{"id":149642,"name":"Suitable Material per SAE-AS85049 (500 Hour Salt Spray)","type":"material"},{"id":676590,"name":"Electroless Nickel (SAE AMS-C-26074, Class 1, Grade B)","type":"material"},{"id":333178,"name":"303 Stainless Steel","type":"material"},{"id":969572,"name":"Anodized (MIL-A-8625, Type II, Class 2)","type":"material"},{"id":165778,"name":"Cadmium (Special, SAE AMS-QQ-P-416, Type II, Class 3)","type":"material"},{"id":570785,"name":"Nickel PTFE (SAE AS85049)","type":"material"},{"id":706381,"name":"Gold or Gold Flash over Palladium Nickel","type":"material"},{"id":299040,"name":"Nickel Plating","type":"material"},{"id":520184,"name":"High Temperature Plastic","type":"material"},{"id":697000,"name":"Zinc Alloy Die Casting","type":"material"},{"id":853234,"name":"Polycarbonate GF","type":"material"},{"id":956869,"name":"Trivalent Chromium","type":"material"},{"id":555110,"name":"PA 6/6","type":"material"},{"id":845685,"name":"Polyester PCT","type":"material"},{"id":660777,"name":"Nylon 66/6","type":"material"},{"id":482864,"name":"PA 66/6","type":"material"},{"id":178229,"name":"PA 6 GF","type":"material"},{"id":971297,"name":"Zytel","type":"material"},{"id":326688,"name":"Thermoplastic Polyester - GF","type":"material"},{"id":194047,"name":"Hard Gold","type":"material"},{"id":560658,"name":"PC/PET","type":"material"},{"id":144807,"name":"Tin-Lead over Nickel","type":"material"},{"id":660918,"name":"High Current Copper Alloy","type":"material"},{"id":426588,"name":"Noble Metal","type":"material"},{"id":835373,"name":"Valox","type":"material"},{"id":132752,"name":"Palladium Nickel","type":"material"},{"id":318347,"name":"Phenolic GF","type":"material"},{"id":808006,"name":"Valox 420 SEO","type":"material"},{"id":137366,"name":"Matte Tin","type":"material"},{"id":263772,"name":"Nylon 66 GF20","type":"material"},{"id":996858,"name":"Polycarbonate GF20","type":"material"},{"id":775098,"name":"Zytel 79 G13","type":"material"},{"id":650844,"name":"PPS - GF40","type":"material"},{"id":203401,"name":"Beryllium Copper Alloy","type":"material"},{"id":848605,"name":"Polyester PBT Thermoplastic","type":"material"},{"id":153226,"name":"ENI","type":"material"},{"id":978130,"name":"Valox 420-SE-0","type":"material"},{"id":531785,"name":"Zinc with Trivalent Chromate","type":"material"},{"id":935895,"name":"Zinc-Plated Steel with Non-Hexavalent Chromate","type":"material"},{"id":866763,"name":"Glassfiber Filled Thermoplastic","type":"material"},{"id":595450,"name":"Gold per MIL-G-45204","type":"material"},{"id":745151,"name":"Epiall","type":"material"},{"id":503006,"name":"Leaded Copper","type":"material"},{"id":449971,"name":"Lead","type":"material"},{"id":794060,"name":"Selective Tin","type":"material"},{"id":291302,"name":"Tin/Lead","type":"material"},{"id":774152,"name":"Machined Brass/Formed Copper","type":"material"},{"id":789808,"name":"Machined Brass","type":"material"},{"id":524363,"name":"Mylar","type":"material"},{"id":549456,"name":"PA 6T","type":"material"},{"id":790042,"name":"PA 66 GF30","type":"material"},{"id":813362,"name":"Nylon 6T GF REGRIND","type":"material"},{"id":208981,"name":"PA 9T GN GF","type":"material"},{"id":191551,"name":"Reflowed Tin over Nickel","type":"material"},{"id":145618,"name":"Zinc Diecast","type":"material"},{"id":326484,"name":"Pre-Tin Brass","type":"material"},{"id":259631,"name":"PA 4.6 GF","type":"material"},{"id":788404,"name":"CuZn","type":"material"},{"id":941895,"name":"66 Nylon (GF)","type":"material"},{"id":775247,"name":"Glass Filled 66 Nylon","type":"material"},{"id":242541,"name":"Matte","type":"material"},{"id":920046,"name":"Tin-Copper over Nickel","type":"material"},{"id":840216,"name":"Thermoplastic - GF","type":"material"},{"id":793449,"name":"High heat-resisted resin","type":"material"},{"id":712084,"name":"Polyimide Film","type":"material"},{"id":416630,"name":"Bright","type":"material"},{"id":482510,"name":"Crastin","type":"material"},{"id":634885,"name":"Liquid crystal polymer(LCP)","type":"material"},{"id":541242,"name":"Gold or Palladium Nickel or Performance Based","type":"material"},{"id":840075,"name":"Gold or Palladium Nickel","type":"material"},{"id":375978,"name":"Select Gold Flash","type":"material"},{"id":397451,"name":"PBTP GF","type":"material"},{"id":530937,"name":"Vydyne M-344","type":"material"},{"id":985614,"name":"LCP (High Temp Thermoplastic)","type":"material"},{"id":292967,"name":"LCP-GF (Liquid Crystal Polymer)","type":"material"},{"id":659426,"name":"CuSn/Phosphor Bronze","type":"material"},{"id":654843,"name":"Copper-Nickel-Silicon","type":"material"},{"id":986221,"name":"CuNiSi","type":"material"},{"id":792917,"name":"Ultramid 66 H2G/25","type":"material"},{"id":676447,"name":"Nylon 46","type":"material"},{"id":196074,"name":"PA9T GF","type":"material"},{"id":996393,"name":"Tin-Silver","type":"material"},{"id":102489,"name":"Tin-Silver-Copper","type":"material"},{"id":708537,"name":"Philips Ryton","type":"material"},{"id":733242,"name":"Polyamide 6","type":"material"},{"id":843697,"name":"Zinc Chromate","type":"material"},{"id":251022,"name":"Roughened Synthetic","type":"material"},{"id":644991,"name":"Polyamide 6/6","type":"material"},{"id":895755,"name":"Zinc/Chrome","type":"material"},{"id":725806,"name":"Thermoplastic Polyamide","type":"material"},{"id":796106,"name":"Copper Alloy 725","type":"material"},{"id":729797,"name":"Copper Alloy 173","type":"material"},{"id":206043,"name":"Copper-Nickel-Tin","type":"material"},{"id":576102,"name":"Gold Inlay","type":"material"},{"id":787075,"name":"Glass Filled PBT","type":"material"},{"id":358254,"name":"CuSn","type":"material"},{"id":757374,"name":"PBTP","type":"material"},{"id":937336,"name":"Glass Filled Nylon/PBT","type":"material"},{"id":967883,"name":"Thermoplastic Polyester -20% GF","type":"material"},{"id":678003,"name":"Thermoplastic Polyester 20 % Glass Filled","type":"material"},{"id":602688,"name":"Glass Filled Nylon /Glass Filled polyester","type":"material"},{"id":130881,"name":"Cu Sn4","type":"material"},{"id":489717,"name":"Thermoplastic GF","type":"material"},{"id":410649,"name":"PPA GF","type":"material"},{"id":947251,"name":"Flame Retardant Thermoplastic","type":"material"},{"id":889486,"name":"Gold Duplex","type":"material"},{"id":588006,"name":"PCT","type":"material"},{"id":491616,"name":"PBT GF15","type":"material"},{"id":779362,"name":"CuSn6","type":"material"},{"id":876091,"name":"PBT GV","type":"material"},{"id":398022,"name":"Nylon-GF","type":"material"},{"id":973985,"name":"Polyester-GF","type":"material"},{"id":664663,"name":"PBTP GV","type":"material"},{"id":900686,"name":"PCT GV","type":"material"},{"id":690006,"name":"CuNiSn","type":"material"},{"id":714990,"name":"CuZn37","type":"material"},{"id":783939,"name":"PBT 15GF","type":"material"},{"id":924281,"name":"Berrylium Copper","type":"material"},{"id":455073,"name":"Tin-Copper","type":"material"},{"id":308333,"name":"Die Cast Metal","type":"material"},{"id":277400,"name":"Lexans","type":"material"},{"id":141604,"name":"Ultradur","type":"material"},{"id":493104,"name":"Acrylonitrile-Butadiene-Styrene(ABS)","type":"material"},{"id":154932,"name":"Nitrile Rubber","type":"material"},{"id":714389,"name":"Acrylonitrile-Butadiene-Styrene (ABS)","type":"material"},{"id":201532,"name":"Vition Rubber","type":"material"},{"id":614672,"name":"Acrylonitrile-Butadiene-Styrene","type":"material"},{"id":941195,"name":"Noryl","type":"material"},{"id":490543,"name":"Brass, Copper Alloy","type":"material"},{"id":891002,"name":"HTN Molding Compound","type":"material"},{"id":541843,"name":"Thermoplastic Rubber","type":"material"},{"id":795518,"name":"Molded Glass Epoxy","type":"material"},{"id":285810,"name":"Zinc Plate With Non-Hexavalent Chromate","type":"material"},{"id":209808,"name":"Polyphenylene Oxide","type":"material"},{"id":789237,"name":"Black Zinc-Nickel Alloy","type":"material"},{"id":748068,"name":"Nickel PTFE","type":"material"},{"id":176375,"name":"Black Chromate","type":"material"},{"id":342775,"name":"PA 66/6 GBF","type":"material"},{"id":701691,"name":"Crastin SK642FR","type":"material"},{"id":502332,"name":"PA 66 - GF13","type":"material"},{"id":242392,"name":"PBTB GV","type":"material"},{"id":631083,"name":"PBT GV15","type":"material"},{"id":812644,"name":"Flame-Retardant Thermoplastic","type":"material"},{"id":847441,"name":"Flame-Retardant Polycarbonate","type":"material"},{"id":204263,"name":"PA66 GF35","type":"material"},{"id":900627,"name":"PA 6/66 Nylon","type":"material"},{"id":611821,"name":"Nylon 6/66","type":"material"},{"id":651218,"name":"Bright Tin over Nickel","type":"material"},{"id":892675,"name":"Brass or Beryllium Copper","type":"material"},{"id":342985,"name":"Zinc with Supplementary Chromate (Cr3+)","type":"material"},{"id":757599,"name":"Tin-Lead over Copper","type":"material"},{"id":934358,"name":"Leaded Nickel Copper","type":"material"},{"id":650729,"name":"Nylon (UV Resistant)","type":"material"},{"id":621698,"name":"Nylon 6/6 (UV Resistant)","type":"material"},{"id":451532,"name":"PA 6-6 GF","type":"material"},{"id":430619,"name":"Glass Filled Nylon 6/6","type":"material"},{"id":734096,"name":"Polyamide 6-6 GF","type":"material"},{"id":762311,"name":"Self-Adhesive Cotton Stain","type":"material"},{"id":985180,"name":"PBT GT","type":"material"},{"id":536478,"name":"Copper-Tin-Phosphor Bronze","type":"material"},{"id":923575,"name":"Polypheylene Oxide","type":"material"},{"id":900513,"name":"Polyphenylene Oxide (PPO)","type":"material"},{"id":780098,"name":"ABS Molding Compound","type":"material"},{"id":380408,"name":"Flame-Retardant Nylon","type":"material"},{"id":454253,"name":"ABS/Polycarbonate","type":"material"},{"id":808934,"name":"Tin-Nickel Alloy","type":"material"},{"id":604248,"name":"Tin-Nickel","type":"material"},{"id":285026,"name":"Zinc Die Cast","type":"material"},{"id":346706,"name":"High Grade Polyarylene Thermoplastic","type":"material"},{"id":207074,"name":"Aluminum/Polyarylene Thermoplastic","type":"material"},{"id":864197,"name":"Polyarylene Thermoplastic","type":"material"},{"id":847383,"name":"Aluminum/Nickel Plated","type":"material"},{"id":981465,"name":"Aluminum/Black Nickel Plated","type":"material"},{"id":155299,"name":"Polyamide GF","type":"material"},{"id":824414,"name":"Nylon Resin","type":"material"},{"id":640827,"name":"Electrolytic Nickel","type":"material"},{"id":845722,"name":"VALOX 420SE0","type":"material"},{"id":911389,"name":"Fluid Resistant Elastomer","type":"material"},{"id":250692,"name":"Chromate","type":"material"},{"id":486940,"name":"Zinc Nickel","type":"material"},{"id":142488,"name":"Gold Flash over Nickel","type":"material"},{"id":247118,"name":"High Temperature Polyamide","type":"material"},{"id":254319,"name":"Tin over Copper Alloy","type":"material"},{"id":946449,"name":"CuMg","type":"material"},{"id":780575,"name":"NY - FR15","type":"material"},{"id":275364,"name":"Nylon or Polyester","type":"material"},{"id":818759,"name":"Chromated","type":"material"},{"id":819209,"name":"High Temperature Nylon or Polyester","type":"material"},{"id":518813,"name":"Black Nickel","type":"material"},{"id":880510,"name":"Thermoplastic (6T Nylon)","type":"material"},{"id":948562,"name":"Noryl SE1","type":"material"},{"id":287514,"name":"Glass Filled PBT/Nylon","type":"material"},{"id":908862,"name":"Nylon/Polyester","type":"material"},{"id":685275,"name":"Glass Filled Nylon/Polyester","type":"material"},{"id":361121,"name":"Glass-Filled PBT/Nylon","type":"material"},{"id":633338,"name":"PBT-30","type":"material"},{"id":785796,"name":"Copper Zinc Alloy","type":"material"},{"id":291519,"name":"PCT Polyester","type":"material"},{"id":909459,"name":"Polyester Moulding Compound","type":"material"},{"id":609506,"name":"LCP With 30% G.F","type":"material"},{"id":624427,"name":"Copper Preplated with Nickel","type":"material"},{"id":801085,"name":"PA 46 GF30","type":"material"},{"id":105495,"name":"PA 9T GF30","type":"material"},{"id":593456,"name":"PA 4T GF30","type":"material"},{"id":263333,"name":"Hot Dipped Tin","type":"material"},{"id":390131,"name":"Conforms to the requirements of TE product specification 108-32038 based on EIA/ECA-364-1000.0IA.","type":"material"},{"id":467192,"name":"Black Oxide","type":"material"},{"id":809571,"name":"PBTP GF30","type":"material"},{"id":629456,"name":"Selective Gold","type":"material"},{"id":769473,"name":"Low Fire Hazard Rubber","type":"material"},{"id":560079,"name":"Black Chromate Over Zn Cobalt","type":"material"},{"id":335723,"name":"Low Fire Hazard Thermoplastic","type":"material"},{"id":170137,"name":"Cadmium O.D","type":"material"},{"id":547612,"name":"Alodine","type":"material"},{"id":882798,"name":"Black Anodized","type":"material"},{"id":989880,"name":"Passivated Stainless Steel Firewall","type":"material"},{"id":595327,"name":"Glass","type":"material"},{"id":515560,"name":"Glass/Silicone","type":"material"},{"id":434055,"name":"Electrodeposited Nickel","type":"material"},{"id":149577,"name":"Polyphenylene Sulfide","type":"material"},{"id":768854,"name":"Polyamide 66 GF25","type":"material"},{"id":550237,"name":"Hard Dielectric/Silicone","type":"material"},{"id":536667,"name":"Cadmium O.D.","type":"material"},{"id":831081,"name":"Black Zinc","type":"material"},{"id":192536,"name":"Cadmium, O.D.","type":"material"},{"id":443213,"name":"PTFE/Silicone","type":"material"},{"id":564949,"name":"Aluminum 6061-T6","type":"material"},{"id":586374,"name":"Polyetherimide","type":"material"},{"id":115170,"name":"Black Zinc Nickel","type":"material"},{"id":217075,"name":"Space-Grade Electroless","type":"material"},{"id":139852,"name":"Sulfur Nickel Over Nickel","type":"material"},{"id":848361,"name":"Polyamide 67 GF30","type":"material"},{"id":469815,"name":"TPU","type":"material"},{"id":482874,"name":"Polymer - GF","type":"material"},{"id":435875,"name":"Glass-Filled Polymer","type":"material"},{"id":916118,"name":"High Temperature Glass Filled Polyester","type":"material"},{"id":349891,"name":"Thermoplastic PBT GF","type":"material"},{"id":834393,"name":"Tin Lead","type":"material"},{"id":674877,"name":"Color Coded Fluoropolymer","type":"material"},{"id":828702,"name":"Ribbon Cable FEP","type":"material"},{"id":806074,"name":"Color Coded Fluoropolymer per MIL-STD-681","type":"material"},{"id":689383,"name":"Tefzel M22759/33","type":"material"},{"id":599231,"name":"PTFE M16878/6","type":"material"},{"id":864926,"name":"Nomex","type":"material"},{"id":905981,"name":"Kapton","type":"material"},{"id":962115,"name":"Polyphthalmide","type":"material"},{"id":717187,"name":"Zinc Plated Brass","type":"material"},{"id":828957,"name":"High Strength Copper Alloy","type":"material"},{"id":457724,"name":"Clear Chromate","type":"material"},{"id":797904,"name":"Copper-Zinc Alloy","type":"material"},{"id":344907,"name":"SPCC","type":"material"},{"id":134247,"name":"Polyester LCP","type":"material"},{"id":293623,"name":"Gold over Palladium Nickel","type":"material"},{"id":232823,"name":"Gold Flash over Palladium Nickel or Gold over Nickel","type":"material"},{"id":785109,"name":"Nickel over Copper Flash","type":"material"},{"id":570585,"name":"Copper-Nickel Alloy","type":"material"},{"id":312161,"name":"Tin over Copper Flash","type":"material"},{"id":955317,"name":"Polyamide, GV","type":"material"},{"id":810065,"name":"Thermoplastic PBTP","type":"material"},{"id":977097,"name":"PBTP/PPS GF","type":"material"},{"id":591673,"name":"Thermoplastic Polyester GF","type":"material"},{"id":549385,"name":"Copper Alloy C7025","type":"material"},{"id":770414,"name":"Post Tin","type":"material"},{"id":978630,"name":"Glass Filled PPA","type":"material"},{"id":114938,"name":"Brass, Phosphor Bronze","type":"material"},{"id":465102,"name":"Thermoplastic with Glass Fill","type":"material"},{"id":780554,"name":"PBT (Thermoplastic)","type":"material"},{"id":231108,"name":"Polycarbonate","type":"material"},{"id":382243,"name":"Pre-Tinned","type":"material"},{"id":473775,"name":"Tin/Nickel","type":"material"},{"id":670837,"name":"Gold Flash/Palladium Nickel or Gold/Nickel","type":"material"},{"id":425855,"name":"CuZn30","type":"material"},{"id":806888,"name":"CuFe2","type":"material"},{"id":174966,"name":"Constantan","type":"material"},{"id":462800,"name":"Tribor","type":"material"},{"id":315825,"name":"Post Plated - Tin-Lead","type":"material"},{"id":933655,"name":"Leaded Bronze","type":"material"},{"id":149186,"name":"Copper-Zinc-Lead Alloy","type":"material"},{"id":223837,"name":"Copper Wire","type":"material"},{"id":685531,"name":"Copper Clad Steel","type":"material"},{"id":234781,"name":"FEP Fluorocarbon","type":"material"},{"id":642213,"name":"Copper/Brass","type":"material"},{"id":110540,"name":"PUR","type":"material"},{"id":729088,"name":"Performance Based","type":"material"},{"id":609679,"name":"Ni/Pd/Au","type":"material"},{"id":640448,"name":"Polycarbonate Film Plus Acrylic Adhesive Layer","type":"material"},{"id":540857,"name":"Gilding Metal","type":"material"},{"id":519105,"name":"ABS/PC Alloy","type":"material"},{"id":838485,"name":"Die Cast","type":"material"},{"id":623823,"name":"Metal Plated Thermoplastic","type":"material"},{"id":167228,"name":"Thermoplastic with Shielding Plates","type":"material"},{"id":937360,"name":"PPS GF","type":"material"},{"id":297589,"name":"PEI (Polyetherimide)","type":"material"},{"id":292362,"name":"Plastic GF","type":"material"},{"id":466047,"name":"Glass Filled Thermoplastic Polyester","type":"material"},{"id":340003,"name":"NBR (Nitrile Butadiene Rubber)","type":"material"},{"id":445075,"name":"PA 46 GF","type":"material"},{"id":831887,"name":"Gold over Nickel over Copper","type":"material"},{"id":534843,"name":"DuraGold","type":"material"},{"id":872915,"name":"Iron-Nickel Alloy","type":"material"},{"id":612022,"name":"Aluminum/Polyester Tape/Tin-Plated Copper Braid","type":"material"},{"id":222646,"name":"Zinc Die","type":"material"},{"id":515151,"name":"Aluminum/Polyester/Aluminum Tape/Tin-Plated Copper Braid","type":"material"},{"id":176802,"name":"Tin-Plated Zinc Diecast","type":"material"},{"id":476517,"name":"Tinned Copper","type":"material"},{"id":634425,"name":"Stranded Tinned Copper","type":"material"},{"id":493809,"name":"Polyurethane","type":"material"},{"id":207491,"name":"PA66+25GF","type":"material"},{"id":305476,"name":"Spark Resistant","type":"material"},{"id":369651,"name":"PUR-PVC","type":"material"},{"id":193992,"name":"XLPE Halogen-Free","type":"material"},{"id":826050,"name":"No","type":"material"},{"id":226930,"name":"Modified Radiation Cross-linked PVDF","type":"material"},{"id":486073,"name":"Tin-Coated Copper","type":"material"},{"id":283408,"name":"Nickel-Coated Copper","type":"material"},{"id":299251,"name":"Silver-Coated High Strength Copper Alloy","type":"material"},{"id":186405,"name":"Silver-Coated Copper","type":"material"},{"id":168575,"name":"Radiation-Crosslinked, Extruded Polyalkene","type":"material"},{"id":542762,"name":"Radiation-Crosslinked, Modified PDVF","type":"material"},{"id":957857,"name":"Modified Radiation Cross-linked ETFE","type":"material"},{"id":776653,"name":"Modified Radiation Cross-linked ETFE Polymer","type":"material"},{"id":786447,"name":"Radiation-Crosslinked, Modified Fluoropolymer","type":"material"},{"id":570283,"name":"Silver-Plated High Strength Copper Alloy","type":"material"},{"id":865870,"name":"Radiation Crosslinked Modified ETFE","type":"material"},{"id":557987,"name":"Nickel-Coated High Strength Copper Alloy","type":"material"},{"id":569109,"name":"Radiation-Crosslinked, Modified PVDF","type":"material"},{"id":849345,"name":"Silver-Coated Ultra High Strength Copper Alloy","type":"material"},{"id":142336,"name":"Radiation-Crosslinked, Modified ETFE","type":"material"},{"id":534752,"name":"Radiation-Crosslinked, Modified PVF2","type":"material"},{"id":154052,"name":"Solid Tin-Coated Copper","type":"material"},{"id":198480,"name":"Modified Polyester","type":"material"},{"id":413655,"name":"Solid Silver-Plated Copper","type":"material"},{"id":632153,"name":"Radiation-Crosslinked, Extruded Modified ETFE","type":"material"},{"id":511648,"name":"Radiation Crosslinked Modified Fluropolymer","type":"material"},{"id":494708,"name":"Tin-Plated Cadmium Copper","type":"material"},{"id":973681,"name":"Nickel-Plated High Strength Copper Alloy","type":"material"},{"id":985156,"name":"Bare Copper","type":"material"},{"id":867127,"name":"Radiation-Crosslinked, Modified Flexible ETFE","type":"material"},{"id":448474,"name":"Halogen-Free Polymer","type":"material"},{"id":485645,"name":"Radiation-Crosslinked, Modified Polyester","type":"material"},{"id":466136,"name":"Radiation-Crosslinked, Modified Polyalkene","type":"material"},{"id":166173,"name":"Radiation-Crosslinked, Polyalkene","type":"material"},{"id":449295,"name":"Flame-Retardant, Modified Polyester","type":"material"},{"id":735112,"name":"Flame-Retardant, Flexible Polyolefin","type":"material"},{"id":294436,"name":"Solid Bare Copper","type":"material"},{"id":226975,"name":"TPO","type":"material"},{"id":128272,"name":"Tin Plated Copper","type":"material"},{"id":565979,"name":"Radiation-Crosslinked ETFE Polymer","type":"material"},{"id":510869,"name":"IEC Class 5 - Flexible","type":"material"},{"id":624379,"name":"Radiation-Crosslinked Fluoroelastomer","type":"material"},{"id":436960,"name":"Spiral Nickel Coated Copper","type":"material"},{"id":134571,"name":"Silver-Coated Ultra Hi-Strength Copper Alloy","type":"material"},{"id":965315,"name":"Polyalkene","type":"material"},{"id":314558,"name":"E.C. Aluminum","type":"material"},{"id":942919,"name":"Modified PFA","type":"material"},{"id":400944,"name":"Radiation-Crosslinked Polyester","type":"material"},{"id":431431,"name":"EPR","type":"material"},{"id":837073,"name":"Zerohal","type":"material"},{"id":401006,"name":"Radiation-Crosslinked Polyalkene","type":"material"},{"id":259076,"name":"Thermorad","type":"material"},{"id":435325,"name":"ZEROHAL","type":"material"},{"id":734356,"name":"XL-ETFE","type":"material"},{"id":594601,"name":"Halogen-Free","type":"material"},{"id":478219,"name":"Rope Stranded Tin Coated Copper","type":"material"},{"id":337388,"name":"Fuel & Diesel Resistant Elastomer","type":"material"},{"id":660351,"name":"Rope Stranded Bare Copper","type":"material"},{"id":890732,"name":"FDR25","type":"material"},{"id":136133,"name":"Flexible Polyolefin containing no added Halogens","type":"material"},{"id":745538,"name":"Flexible Polyolefin","type":"material"},{"id":593783,"name":"Fuel and Diesel Resistant (FDR)","type":"material"},{"id":979100,"name":"FDR25 Fuel and diesel resistant Elastomer","type":"material"},{"id":263281,"name":"Polyvinylidene Fluoride (PVDF)","type":"material"},{"id":318093,"name":"Foam Polyolefin","type":"material"},{"id":446214,"name":"ALU Foil wrap","type":"material"},{"id":352416,"name":"Tin Coated Copper","type":"material"},{"id":834257,"name":"Aluminized PET","type":"material"},{"id":598981,"name":"Bare Copper Spiral Braid","type":"material"},{"id":685224,"name":"Optimized Tin-Coated Copper","type":"material"},{"id":332403,"name":"Alumel/Chromel","type":"material"},{"id":990044,"name":"Nickel-Plated High Strength Copper","type":"material"},{"id":427318,"name":"PE","type":"material"},{"id":914283,"name":"Rayfoam L","type":"material"},{"id":270561,"name":"Thermorad S","type":"material"},{"id":306449,"name":"Rayolin","type":"material"},{"id":586067,"name":"Silver-Plated High Strength Copper","type":"material"},{"id":605737,"name":"Thermorad F","type":"material"},{"id":927218,"name":"Silver-Coated Copper Clad Steel","type":"material"},{"id":446888,"name":"Tin-Plated Copper Clad Steel","type":"material"},{"id":599154,"name":"Tin-Coated Copper Clad Steel","type":"material"},{"id":756872,"name":"Rayolin F","type":"material"},{"id":568636,"name":"Rayfoam H","type":"material"},{"id":585744,"name":"Modified ETFE","type":"material"},{"id":946718,"name":"Modified FEP","type":"material"},{"id":382773,"name":"Thermorad LS","type":"material"},{"id":557554,"name":"Thermoplastic Polymer","type":"material"},{"id":854636,"name":"LSFRZH","type":"material"},{"id":407687,"name":"Foam Polyethylene","type":"material"},{"id":183178,"name":"Tin Copper Braid","type":"material"},{"id":782941,"name":"HDPE","type":"material"},{"id":512775,"name":"Aluminum/Polyester/Aluminum","type":"material"},{"id":588623,"name":"Solid Bare Copper Weld","type":"material"},{"id":203330,"name":"Braid","type":"material"},{"id":740283,"name":"Aluminized Polyester","type":"material"},{"id":985336,"name":"Foamed FEP","type":"material"},{"id":437748,"name":"Steel Conductor/Galvanised","type":"material"},{"id":501362,"name":"Aluminum Clad Steel","type":"material"},{"id":693734,"name":"Aluminum/Copper","type":"material"},{"id":691188,"name":"Polycarbonate (PC)","type":"material"},{"id":742455,"name":"Polyphenylene Ether (PPE) + Polystyrene (PS)","type":"material"},{"id":656156,"name":"CuFe","type":"material"},{"id":235598,"name":"PBT 30% Glass Filled Polyester","type":"material"},{"id":344473,"name":"High Impact Polypropylene with UV-Stabilized Polycarbonate Window","type":"material"},{"id":911843,"name":"UV-Stabilized, High Impact Conical Housing","type":"material"},{"id":160148,"name":"High Impact Noryl with UV-Stabilized Acrylic Window","type":"material"},{"id":268833,"name":"Polycarbonate with UV-Stabilized Window","type":"material"},{"id":829979,"name":"High Impact UV-Stabilized Polycarbonate","type":"material"},{"id":536461,"name":"High Impact Polypropylene","type":"material"},{"id":928316,"name":"Thermal-Set Phenolic Base","type":"material"},{"id":633969,"name":"Thermal-Set Phenolic Base with Protective Cast Aluminum Housing","type":"material"},{"id":565720,"name":"UV Stabilized Polypropylene Cover & High-Temperature Polyster Base","type":"material"},{"id":809969,"name":"Aluminum & Copper","type":"material"},{"id":739121,"name":"Porcelain","type":"material"},{"id":385957,"name":"Polymeric","type":"material"},{"id":736902,"name":"Porcelain/Glass","type":"material"},{"id":346481,"name":"Polyphenylene Ether (PPE)","type":"material"}]');

/***/ }),

/***/ 29843:
/*!***************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/sample-data/options.json ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":171848,"code":"AF9149","name":"ADAPTER,FRONT DRIVE","type":"option","links":{"parts":[124684,246522,576245,743045,752895,426016,804668,630338,258828,314234,194924,341995,105934,291198,520804,792670,810552,665043,559301,787581,531954,798979,339369,299625,904232,641521,863033,707244,663192,542153,977752,678458,675790,632763,931221,871185,832508,908443,730093,216278,293194,592101,209167,682892,352223,483860,841714,690856,331145,449729,138831,975844,338110,766759,226764,179155,357894,912893,269181,680630,586091,937913,345275,408553,274041,745901,350099,139171,502753,612925,173133,796963,668823,737316,339921,965755,800069,587728,388965,419721,815956,701494,446795,179572,856967,210408,471100,457875,205833,623370,462119,832830,847557,728198,848146,632286,847698,120880,936830,959410,590139,523903,347077,285179,878759,432434,751331,374611,474763,169182,863179,259930,591310,423231,755682,133169,618885,417334,921123,696652,550630,800861,437942,269038,419980]}},{"id":747872,"code":"AP9962","name":"APPROVAL,AGENCY","type":"option","links":{"parts":[452504,768684,820660,752033,822057,758279,436328,766195,395375,604751,319693,583789,960853,246694,870742,860272,402875,508182,720184,347544,801190,986092,528471,798102,781486,464613,387352,181017,385898,168654,663905,535626,906794,406348,571547,641205,629342,942534,306357,971963,313387,231652,824009,732159,506581,456622,976317,209560,146870,984451,777121,462933,166237,794670,565961,736087,604182,274896,316562,585973,715533,131353,493026,469522,897075,733033,256563,624955,848765,914595,154313,959263,863931,273024,878694,570318,857699,145799,139918,747077,446795,582170,253032,456019,761382,495138,210185,220695,327494,615963,435335,508325,443835,942511,632439,951377,250529,739688,167747,208093,184605,930684,235458,934867,176052,804734,425568,287265,763040,767943,210374,878759,663520,346980,915248,582525,398040,662878,663178,141346,966939,714868,949746,302018,277773,327166,545744,717304,909011,819968,818254]}},{"id":589041,"code":"BB9277","name":"BLOCK,CYLINDER","type":"option","links":{"parts":[433728,241423,289694,342538,785065,413852,243617,638719,510669,244596,825978,621974,783166,177429,923155,621185,217551,857204,695437,959609,785339,175765,658471,530144,995524,157342,591142,589084,790698,617232,586479,543984,332802,121801,742898,647614,437899,785727,444099,490585,136433,825477,246040,761579,338978,190588,112114,604182,706712,256697,192567,221197,795322,806310,159223,521002,730047,380669,710455,803225,343950,410071,487672,406271,567513,226200,662655,742207,321436,125591,629717,742884,722957,656914,107884,185521,186146,215737,501818,478626,777423,254146,443478,225357,559573,936830,710168,124472,157888,983390,405632,132076,340133,457518,126789,325831,742500,565721,439163,615999,898216,266869,421940,260355,834229,767798,705409,174696,714146]}},{"id":996908,"code":"BB9439","name":"HOUSING,REAR GEAR","type":"option","links":{"parts":[725675,645544,827940,381256,339942,224468,792670,416854,169133,810552,773073,138009,802844,814464,753310,549478,325778,174745,276640,861264,582052,729659,792486,992300,754545,464693,714809,948122,499665,607588,607376,457918,168089,844625,944729,583109,896963,798775,743994,606373,597431,398019,852432,269827,686947,218435,107856,528681,523994,414625,707576,322466,808056,733033,194725,545804,495660,266055,465614,277823,803225,941032,252576,791137,145799,979179,330780,318132,802032,103724,699281,475989,547652,375562,382642,598088,615404,696965,747484,123690,830463,658566,856881,808342,423560,332213,517738,501298,685736,365605,264427,513250,374611,518130,615646,753740,535623,302658,287990,610640,488429,667150,574303,510046,594488,569170,435690,985717,869495,545744,396191,218998,887542,851840,603688,724106,724343]}},{"id":412642,"code":"BR9387","name":"BREATHER,CRANKCASE","type":"option","links":{"parts":[697162,880147,629275,974386,903125,885036,426080,919715,199587,931432,920371,863033,180981,587156,675669,985399,276640,523323,801190,960416,476110,125975,179337,480666,276879,189396,439004,699413,206195,223533,740772,118582,693065,525993,423487,702863,517235,209167,797249,661819,487828,578155,745126,208156,490585,854097,413660,281997,337369,981784,294596,550089,897445,830372,826544,975559,228232,756993,149714,418807,449791,380591,440389,361165,848558,422381,939815,364504,117459,568974,699281,662964,471100,453807,186879,907828,187402,343828,704946,389944,272421,422226,547313,837398,699262,681047,943799,113542,577438,236997,101907,881862,476660,402638,223470,876189,851342,778195,929071,741528,579080,763768,705459,108120,678905,201986,738135,282483,251463,725852,159787]}},{"id":601880,"code":"CA9142","name":"PLUMBING,AIR CLEANER","type":"option","links":{"parts":[556264,881039,411507,222007,905186,726845,741254,673636,279602,579473,168079,919715,583789,960853,369605,221117,350673,860272,779469,594083,894912,659444,865157,702268,576097,332574,462630,772680,618438,662047,397956,747830,727445,760831,148551,298559,426687,460398,592101,247149,687626,543984,456145,372964,451131,886600,434058,626781,433319,215909,356101,105554,505079,269861,701195,289133,246040,532524,389383,162931,681252,365841,780869,284275,493026,784090,435305,421894,752165,348144,489945,500010,545804,108097,899912,829885,544839,775184,116956,947512,338391,685979,602213,844573,602894,164278,111150,861735,169267,444604,664532,288764,905688,680148,443835,832896,988548,713710,528139,455735,934715,100770,441890,866494,555522,864196,396378,284828,861466,820279,764988,509652,252128,294411,865532,792184,337800,221106,997774,902156,762489,407728,719923,245875,500902,112811,724106]}},{"id":263158,"code":"CC9426","name":"ARRANGEMENT,CPR COOLANT","type":"option","links":{"parts":[342637,253361,380386,848343,355696,268806,453132,343466,999983,393223,158902,743936,616966,126368,299625,520919,361181,931432,832453,568591,184853,347544,941495,726570,208808,969607,696043,378778,771131,894697,612369,230238,216112,609414,446844,643305,541512,759593,231284,216849,829444,536775,741993,443474,701950,104750,106214,156920,543407,858059,546675,249854,472134,837337,276633,802724,569232,981273,440533,784090,908042,644612,982157,807885,964669,490451,716430,809022,519876,525123,330486,752747,507338,782795,704649,477038,865391,406914,823512,221342,882569,844573,737268,115593,693795,460414,318500,619221,417688,255783,940193,145979,205833,430771,559968,298766,400605,501013,469820,739688,470458,938197,157381,811420,322279,284828,216685,913295,138052,173400,799104,429949,223370,720786,137608,717267,950152,770566,421940,900383,475814,611290,125133,489942,262682,466268,229716,437942,282483,475841,933343,442483,137240]}},{"id":329753,"code":"CH9139","name":"AID,COO HEATER STARTING","type":"option","links":{"parts":[270611,886598,230465,955641,905796,207936,482487,211522,813343,220549,852195,508182,801353,158607,660150,704339,330102,141356,623673,398499,743515,916243,890689,209167,967046,385041,839313,139311,374628,613470,617152,385543,570503,863403,776838,110050,868666,162931,642013,768436,314920,831676,802724,239804,559795,154233,905597,904023,978594,139692,484979,438412,528329,885901,490460,430972,693795,686141,553665,186879,392083,881213,500533,747183,984906,549152,924602,982876,680148,568360,982452,755175,521849,846732,334747,225357,397884,499605,644305,749019,572319,501298,572210,382303,192605,623448,514726,489268,433103,806969,987176,985624,930318,864517,650179,421235,781995,663178,618885,253714,980006,480422,698938,417425,135313,800861,896427,811507,929463,916281,158165,602103]}},{"id":909899,"code":"CL9118","name":"CLUTCH,REAR","type":"option","links":{"parts":[714868,674318,763406,747319,808058,489967,690646,932273,340195,359274,764661,756087,239329,638719,980466,346401,920371,659126,962039,254943,194366,198553,739547,179337,698789,673096,799145,843378,954423,576923,836537,431397,141276,628499,365519,857349,636118,847704,854079,786049,528242,616385,538893,261704,499580,398782,409298,523300,595882,246639,421407,221322,790745,588089,477223,936578,116419,765983,391537,964151,746251,802032,689876,564686,252742,883104,205833,623370,288764,649360,408659,676885,923122,688933,247936,225357,304437,352893,834614,597347,648841,702634,814447,977156,940971,817924,888876,506118,730934,627651,373491,273564,501210,260355,640706,843268,489942,459217,950311,738135,635933,919526,271912]}},{"id":318249,"code":"CP9550","name":"COMPRESSOR,AIR","type":"option","links":{"parts":[221322,697162,377941,619107,700874,783993,728168,348967,749219,239329,243444,770236,378672,182693,515678,998799,166027,203959,410019,957688,330102,105359,643610,120273,472883,325197,864007,642515,207429,681347,293194,634047,495538,197875,293110,234827,490849,499873,772766,869226,382397,175123,222686,223053,215655,981784,673560,162931,863821,614478,781642,889783,345275,123764,855531,489085,141414,499504,433728,223713,311729,304579,634101,376925,166635,576642,152107,885640,358360,138731,681516,808702,264629,330157,717126,239835,566663,253302,802579,923122,802487,547957,423161,235458,680730,589968,771136,648841,452576,151532,785338,101907,624066,213012,145984,138052,775129,758087,928266,760075,664276,398668,311191,969995,667150,698938,635759,390625,526269,600299,332478,925827]}},{"id":441060,"code":"DA9216","name":"DAMPER,VIBRATION","type":"option","links":{"parts":[456385,241423,234056,622835,652652,196749,514711,845819,291157,879326,142236,663639,353799,712797,485600,585631,833333,958360,410570,995430,309776,803975,576097,296208,785339,299666,171692,822757,864007,196645,841869,915930,170694,307300,137602,647614,611726,721076,219876,391992,337369,656273,901010,479613,489448,472134,930014,222988,406995,356369,199083,540284,891593,938986,518679,305918,582680,795504,941198,518441,213002,935123,751343,408333,184897,921838,406914,116956,657285,954580,614400,714600,549841,117059,329353,453807,265967,823805,205126,400605,773397,197133,246129,332169,579058,635840,547957,310561,366584,252685,433474,577438,861810,774511,373175,743679,185155,536770,140792,360914,278900,685372,995969,259389,988934,505134,618885,111278,948356,724654,218998,437942,947533,890494,496054,341913]}},{"id":800622,"code":"DL9247","name":"LOCATION,DRAIN","type":"option","links":{"parts":[962039,725812,889059,490853,572079,257895,945124,241686,757011,303379,168079,151885,840246,602032,393217,979826,438001,538317,559336,302799,353971,704339,179337,901890,330102,883474,808834,556209,442117,959609,617941,497449,192921,446844,301247,687626,485079,121801,272819,451131,690856,555288,656890,979465,360531,338794,945149,493192,249452,901010,269181,664780,712688,605437,107856,576469,398799,150494,722912,805737,263700,530201,724226,335258,853117,336202,154313,657245,252576,685408,791137,431214,841385,822618,622506,939815,319315,866228,655453,408876,754360,901542,252742,631971,737350,951422,674122,473084,680148,566031,525336,521849,502501,696280,239835,660836,830383,294222,328856,733533,162971,176052,959410,811420,203784,287265,379886,956590,318478,271407,895517,455951,841048,232462,398040,904216,277927,674951,445508,198140,501210,244590,730780,612321,724343,341913]}},{"id":688770,"code":"DO92999","name":"SOFTWARE,CUS INTERFACE","type":"option","links":{"parts":[808702,639066,504308,752895,798152,194924,237639,775351,648780,829913,166027,360125,560593,979331,694441,328468,413957,123200,587462,739547,480666,316987,698789,581982,299666,451097,842086,335668,246949,350493,765014,319435,894984,640700,372296,908562,817423,299229,155289,891556,598399,712311,561410,429615,854487,852999,676950,934569,981784,531166,931435,244714,128871,256556,236929,715533,538893,427496,391540,698294,687447,969681,188532,421407,121915,842378,433979,587728,888459,383060,947878,912165,261928,780738,280492,885901,152631,698299,921311,264194,987253,400758,110962,324029,247936,498212,304437,441890,403978,739173,231089,528061,426559,200353,247480,289810,913002,335667,490265,566198,283774,183653,376178,379885,579080,953282,271225,542451,925827]}},{"id":857088,"code":"DR9042","name":"DRIVE,RER GER TRA ACC","type":"option","links":{"parts":[181743,704419,788989,200501,506217,287050,841182,239750,618336,923369,308465,395375,173412,421315,221117,166544,978581,879558,663245,857204,712943,289842,996415,747830,699413,995524,658155,673838,810736,274271,535626,168089,947961,492385,307300,690216,663111,952791,306357,118314,555288,136433,903542,841461,326506,843640,464020,700129,756587,261704,515728,523300,309987,848765,272197,262026,830196,763311,120673,273024,450485,588426,541703,727850,381068,859137,167120,310218,403313,565779,174426,707049,581333,152679,659662,471100,123882,496894,262147,861338,899629,553134,705491,373777,510075,762966,796661,923560,183757,397898,877796,686605,848183,456163,969816,457631,200353,637760,463604,222509,138052,453811,191765,898216,302071,872135,763768,584234,641130,997774,385187,169370,459951,518671,933343]}},{"id":902222,"code":"DR9059","name":"MOUNTING,RER GER TRA ACC","type":"option","links":{"parts":[623428,367183,357145,300560,808003,317041,675042,559443,603611,279470,735483,443189,138009,173412,792177,357164,772173,622212,774019,508182,675669,332706,100123,407467,636663,864556,705811,383476,617817,932962,552608,648428,267692,727995,678862,662792,493605,238349,456364,536775,844625,359019,197687,143816,520322,490333,563719,656283,550089,122680,763170,541790,364819,224716,226766,314161,569232,520850,977221,346130,698294,785467,635071,914595,905597,371569,425579,202582,529332,507338,965755,139692,279181,583268,155103,244812,286747,969387,242674,450280,336981,570780,810937,195301,632992,650090,653390,597942,984970,796608,903577,177563,559300,349470,696701,835883,185948,374230,844900,987253,940908,380735,734431,481388,328856,719542,737692,653536,979379,959184,544743,805727,834756,477070,754245,172835,945931,474763,760726,327152,156671,600499,254112,822909,279520,881217,684883,859565,449181,678905,961080,230994,111133,160875,922571,159787,133637,170192]}},{"id":576833,"code":"EC9045","name":"THERMOSTAT","type":"option","links":{"parts":[462933,752895,464306,800934,417187,539752,618336,758279,543974,919715,353926,763442,667746,328468,413957,407467,984133,123200,106747,652241,765805,576097,296208,105558,526360,795183,827679,676669,439223,461724,626162,841869,139481,174371,805309,497871,197687,722989,896963,984416,829544,114368,130581,563719,845747,813300,896336,892561,199539,131353,503682,671734,826544,197468,518679,305918,549165,534926,533774,957186,310031,263232,882569,677919,747077,102348,178152,783915,811979,117459,305751,564686,444604,205205,689201,852096,889803,348901,367039,680018,849937,635840,923122,882826,247419,603946,448031,816448,327696,917215,990707,236997,879841,995673,814447,827686,399241,902933,694110,198389,354453,564628,601854,139522,263346,808469,881217,213068,125133,234474,612950,851840,186604,496054]}},{"id":715213,"code":"EE9708","name":"ALTERNATOR","type":"option","links":{"parts":[876556,842728,234590,222007,992485,302399,992363,463828,235550,996557,985399,167367,891056,156389,783594,325415,306941,293054,866680,529900,154788,910999,500303,493994,322119,916134,956330,118615,983528,366798,877468,598484,984026,657736,850392,613470,338110,429615,147377,338794,671050,357719,968430,852432,837337,936939,802724,538893,244761,733033,348144,796963,813249,798287,128935,517270,269204,978594,733745,495660,770655,534926,477038,775184,882319,868610,226200,885901,667504,139703,177854,364504,942478,685667,379609,349470,374230,854901,747484,725628,303716,120880,199658,589968,379525,318478,416419,989391,103384,932160,347415,717247,257923,993151,327502,395606,535623,423231,311494,864517,657622,547970,562087,134852,421940,583382,394607,939258,262682,273579,494897,422856,219966,730202,663796,403694]}},{"id":231573,"code":"EH97841","name":"MOUNTING,ALTERNATOR","type":"option","links":{"parts":[110169,283467,834833,747319,342177,656468,775632,158067,491604,780382,243617,305428,604751,200044,778863,978581,587462,801190,734746,729659,286637,396523,760348,439004,451097,159098,617625,325197,560435,118779,349231,893711,987450,372296,385158,455364,119007,483860,910749,278908,885877,451194,896292,385543,357898,659943,870575,208576,163745,565961,841461,199539,568234,230015,691317,179654,326773,231244,392447,231305,103165,425579,507282,115383,871090,284628,203219,609461,425428,718258,614400,446795,885640,358360,323261,887018,678387,664672,854901,655756,663289,123882,562685,235491,782485,953570,651235,571134,589566,501818,348212,629008,116437,449528,119960,974877,327696,917697,705337,330989,516451,157888,944107,206677,537009,100971,751331,407288,971031,338778,517881,472563,281318,664626,612309,388538,882283,823323,577890,641130,975416,809907,593085,709159,454263]}},{"id":307078,"code":"FA9330","name":"DRIVE,FAN","type":"option","links":{"parts":[632286,791137,236219,139692,411116,301127,438896,262283,566414,291157,894680,487036,333794,645372,140597,245540,488972,427379,674477,661879,396523,576097,208808,996081,590272,632763,357844,133049,251460,576238,626162,535626,947511,915930,598484,431397,690856,351744,603905,878604,301605,493192,546675,891164,765798,163745,912893,502123,794670,241057,961682,604182,230015,200300,261704,422580,889955,277221,848627,993661,477038,806253,192884,917284,969387,811707,284628,630472,614400,454664,586482,707049,885640,549542,379609,453807,326301,707747,886884,447228,389944,470458,598185,184605,930684,303121,234943,137320,932334,447690,801068,677552,849024,983390,488134,820279,236997,132076,383213,338974,490576,837227,384751,444986,197748,344898,120854,418864,399028,917056,535623,137608,273806,273455,884755,663178,363148,722774,149829,489942,568163,304976,820020]}},{"id":804958,"code":"FF90132","name":"PLUMBING,FUEL FILTER","type":"option","links":{"parts":[728168,940472,683282,562461,587498,932273,906341,911132,105745,689677,828734,631493,468071,213200,998799,397039,881807,415873,206195,171987,265267,149971,154788,771680,600746,448623,473399,576923,443474,167511,793576,721076,453527,901010,249854,680630,529604,530114,576469,323915,435295,258801,908042,808056,539603,345266,520775,955397,820716,559035,216687,773538,830196,833271,729394,124793,618321,257730,848558,451811,587732,459235,912165,544839,419721,177750,446795,707049,347124,693795,305751,934520,792987,408269,786757,371024,260306,501818,828269,958057,882826,604890,522861,402921,995629,397884,828333,363035,288814,181571,152683,903866,913002,686478,623448,896272,247319,695718,717267,948916,266869,322866,799934,445460,421917,696652,902156,868454,496510,412935]}},{"id":597121,"code":"FF90274","name":"LOCATION,FUEL FILTER","type":"option","links":{"parts":[196645,886598,683282,587498,905186,800484,593307,239329,825978,877922,119116,653333,410019,502342,628457,941490,857204,656708,618438,167195,372342,714809,520270,634047,765894,201249,983742,663111,647614,813810,797748,638931,944729,621381,975844,257346,714316,510363,336337,911435,596131,921981,896677,357183,250979,382030,968430,165888,613064,735150,213640,627795,181331,516386,180523,664435,967911,254122,135184,531491,481709,543688,618322,335258,326143,383009,115999,512083,125419,248328,807333,167120,822618,718037,810937,115593,219052,113821,353504,912412,156075,659552,180083,449528,629792,397877,247419,304437,601992,633422,271255,285527,679467,181863,888440,726510,929337,838261,618411,751331,913002,971031,474763,787579,664626,760639,470314,248092,479660,134197,139839,224283,421940,840321,331650,822208,762489,292146,509458,496510,174696,896427,780221,714146,113465]}},{"id":308783,"code":"FH9929","name":"HOUSING,FLYWHEEL","type":"option","links":{"parts":[883104,411116,940472,584265,552777,897614,136607,963539,265890,168079,885036,215174,299637,361181,490761,485600,308089,662475,953361,881807,854363,270104,451097,886447,165023,112237,278995,983528,408361,953323,745126,911079,971963,371584,330225,825477,908829,967695,872161,680630,198925,841478,406995,335758,818754,224716,977039,398799,979804,515728,195382,531491,569722,680714,382725,149714,116226,305308,684427,785580,261565,163293,621933,144873,175951,584367,587510,682703,659662,228096,420847,856590,223104,616863,655756,817160,348901,671292,839431,543632,965467,807118,323155,789774,806162,194888,888958,882489,861466,110169,551763,336107,381549,175258,538826,852389,430271,945931,474763,120854,899483,562529,409428,714318,182724,484641,812149,326799,496510,387166]}},{"id":321895,"code":"FI9219","name":"FITTING,FUEL INLET","type":"option","links":{"parts":[312164,269106,495940,673636,639066,588680,514317,248758,179337,401254,483389,221486,886447,688555,900948,478790,840603,640166,162924,469345,902522,477300,586479,857879,492385,307300,984955,393265,739586,529599,397665,547407,177877,872800,742395,915875,634403,457223,341321,604300,852999,575540,896336,744917,411395,873563,156035,876867,981273,126036,434848,208659,388210,273024,834800,434121,931341,947878,713963,224013,284628,139703,850613,575982,803903,911250,815101,273402,276773,590230,997315,537761,769399,566031,500844,358950,137254,727895,238877,115271,670718,998305,763040,589968,394698,984479,281834,347077,404382,931900,101907,474734,347964,846291,889387,930367,481307,327152,707208,137608,363348,914307,453047,421940,298167,915970,835598,196030,933343,582796,890494,542721,270315,231519,602103]}},{"id":573016,"code":"FL90007","name":"GRADE,FUEL","type":"option","links":{"parts":[156967,283467,873744,343681,450372,590491,484025,435881,123963,959007,516609,663678,836441,816162,473808,907118,984133,179337,840364,576097,916750,798102,316987,162776,632763,233546,120273,362110,357578,535626,489637,446844,142782,637779,987492,918490,797748,613470,173983,186127,520322,160460,747020,794446,368886,327773,852432,393913,650566,301589,564348,161960,699653,256563,619193,549372,500896,396161,672222,530620,330486,871090,912165,268322,614400,103724,716918,372799,569137,912412,481747,769399,890811,161582,359454,260706,127435,778809,547313,888825,462711,867653,363578,396378,161454,143420,160220,426559,501298,755503,163253,880016,808678,225477,913295,827022,988168,585157,832382,997506,707208,789591,996577,847589,657622,302071,488429,169428,386098,883669,763715,569170,509458,261291,435058,892827]}},{"id":901509,"code":"FP91810","name":"PUMP,FUEL","type":"option","links":{"parts":[159016,739597,186124,836284,492363,907208,628622,393223,510086,712336,138009,825978,249602,960853,157824,235550,998799,694597,512441,346826,984133,411685,624226,996282,462630,423303,864556,580892,154908,461724,246395,952521,495538,278995,853847,283285,487828,379952,451131,158598,189792,975844,771290,879629,440089,813300,946408,664435,872664,156035,649742,698294,574329,148328,173133,763087,225427,926742,498576,834766,934304,484979,477038,650983,232357,847605,369924,470941,802520,526003,644700,275609,162939,742207,788682,549841,152631,177563,169049,655453,892476,881213,205466,539581,558506,855216,246129,340063,377460,423055,955305,935027,247936,119960,766394,930684,203308,877353,299695,770547,166975,756966,979379,977003,731606,818875,755503,430271,804542,511959,841048,746242,983493,900148,362389,940090,398040,566198,898216,221761,743638,921123,139143,567047,698269,271225,218998,678896,336014]}},{"id":781584,"code":"FP91939","name":"CALIBRATION,FUEL PUMP","type":"option","links":{"parts":[520919,285825,291157,752033,400874,621213,649694,876340,353799,920371,751621,387483,374654,680472,502342,483828,146868,714035,350493,168001,959592,460398,765894,201249,380472,365448,334263,932841,678188,232331,762485,746939,475713,721076,516140,542253,835675,549375,244714,728032,720164,793888,837337,924105,263749,855531,256697,626996,458079,247504,543497,641120,165039,418818,188532,559035,269204,964562,154313,225427,842378,170462,670583,508332,887622,419721,868610,280446,466004,653390,620041,175661,292642,880802,817305,680254,288764,600254,400605,129459,521849,882457,479014,848146,894034,555881,235570,423161,140387,487177,124621,984479,550532,270036,383213,394561,464410,875490,192605,666047,913380,302658,916634,732142,339673,959473,273564,313651,970430,350290,915970,834229,875524,324305,545744,489809,102036,269038]}},{"id":510644,"code":"FR93172","name":"RATING,FUEL","type":"option","links":{"parts":[739586,411116,722942,266159,752895,117103,342538,750547,294524,603138,208524,586857,395375,168079,777163,709106,798858,839323,182830,909801,628229,996719,984133,245995,494869,948403,373244,141356,681425,952607,727995,442671,456364,115904,484444,844625,659580,202308,846060,344699,407764,337369,984416,705770,472134,900073,951165,636118,153041,604182,506101,396161,377780,534926,727850,872188,286877,311608,725627,224013,136803,802032,867864,596111,888062,615287,844900,764632,704946,864177,137254,203782,498370,247936,604890,668508,238877,877353,816448,365016,599621,554033,577438,832382,615233,864517,178812,898216,445508,162027,569170,883095,991685,496054]}},{"id":334894,"code":"FT9567","name":"PLUMBING,FUEL","type":"option","links":{"parts":[308918,486138,417351,467825,156787,792670,332903,795924,279602,126368,138009,874281,977109,545979,557006,543861,276518,643371,909014,425512,442038,869455,174371,617232,913576,278995,742281,294501,893301,483860,102634,499873,897687,803352,209560,789765,918226,735150,949391,444379,930682,719142,932933,855531,164319,292272,430606,643150,975559,707576,905597,684181,329122,941198,541703,529312,533774,666571,516015,954580,718037,826311,111150,116052,276773,573270,590230,389952,619497,205126,125970,212259,687677,235491,368090,683767,777423,921426,698468,632286,712762,149729,231153,844607,960076,805727,878759,744603,366610,380634,374611,971031,838993,988168,489268,362389,495476,248092,970887,657622,694035,692172,967892,475814,467634,915970,919951,862521,743996,192651,496510,774587,435058,916809,132019,532199]}},{"id":185076,"code":"FW90388","name":"FLYWHEEL","type":"option","links":{"parts":[389940,760348,283242,524843,448482,907208,207936,874640,735483,283235,888107,490761,221117,140597,746889,774019,839323,441117,892062,702586,869552,974999,798451,162924,822757,663443,643784,626162,572523,241283,988199,940562,768482,896631,528896,653577,897687,561410,772766,356101,428965,514901,257346,293786,921981,851226,404350,859337,830372,996017,107856,452808,398799,461561,411753,768995,141414,476229,482469,582680,105417,293103,749513,834800,380669,657245,138109,925383,394864,500101,424172,947512,811502,783915,301542,912412,295720,985771,725675,400605,704946,755175,369271,381494,881193,724595,567439,699262,835285,877796,135128,597347,767943,842728,103548,172850,316461,676728,910263,102367,682580,125401,489268,889387,485149,753740,838355,707208,755480,613262,308376,683745,834157,598414,239929,961080,490343,392856,944930,643872]}},{"id":463050,"code":"FW9934","name":"MOUNTING,FLYWHEEL","type":"option","links":{"parts":[555522,722942,205449,355198,250690,800934,342997,928979,109281,830408,370925,841182,782182,359548,711400,850579,712797,920371,833367,795657,277458,909801,792486,961069,330102,959609,483828,405450,224645,298559,607588,380472,543984,951265,576923,663111,657736,306357,987492,190524,918490,159117,711970,557156,926383,665789,606373,114368,145806,918540,371981,199539,781642,602680,961682,323857,673860,653827,499504,767896,549372,500896,912512,371569,792198,863931,351389,830027,531975,616982,544839,921838,547237,458315,830177,581333,178152,783222,659662,383308,282730,924602,874007,416025,835754,579058,845112,506945,904859,699262,789774,859374,232847,547003,368620,806527,110451,200353,175258,455951,458968,607541,107850,259389,135740,191432,371009,313651,726442,871948,521828,743996,196030,649200,751209,305894,747240,404737]}},{"id":200869,"code":"HC9092","name":"PLUMBING,CABIN HEATER","type":"option","links":{"parts":[126036,905191,955641,440042,359274,746910,773073,312522,744144,895756,228788,232461,677009,803729,584147,582052,978525,729659,336695,332574,969607,289144,154908,299775,981323,867564,908391,706192,592101,835806,118615,267215,891556,690856,896631,528896,536227,674777,897687,601388,156920,582639,605968,151638,837802,813300,896336,922912,872381,951165,119245,493026,496772,414625,188532,905597,912512,383009,660247,779001,790745,692719,434121,999053,167120,666571,785129,430972,168118,186879,586049,433657,960112,137254,355142,635840,921426,710178,943067,839703,567270,368620,927338,383555,418668,512283,282197,188581,102367,673379,307484,945909,790551,722344,915248,706665,512138,342791,157750,926746,576797,707723,722774,834229,806797,668052,862521,838319,694722,982684,118915,922571]}},{"id":706489,"code":"HD9436","name":"PUMP,AUXILIARY","type":"option","links":{"parts":[888825,300549,237054,488988,886598,234056,655151,623079,915830,615407,207936,717447,484962,267802,272039,909606,308089,198106,208808,618438,736387,405450,838673,350493,298559,319435,730093,541262,452389,641660,259594,301247,898219,456364,887965,885161,236218,984955,541167,888737,568128,285096,312164,736908,179255,453527,651558,439144,368886,428880,273255,785754,330369,681252,236330,866555,830372,171572,348992,715533,981273,592918,846647,618322,421407,816891,554518,128928,114365,495660,934304,286877,595677,175951,882319,280446,691438,889059,177563,887658,372799,899671,812506,586049,832896,568360,400758,358950,801397,848146,683117,594158,328856,756966,839703,644305,580949,830997,569665,123721,490576,892721,183782,374037,976701,498065,898216,929071,445508,428879,224283,129885,706257,636858,975416,696652,509458,390961,208169,607633]}},{"id":264481,"code":"HD9710","name":"MOUNTING,AUXILIARY PUMP","type":"option","links":{"parts":[386098,199033,342538,194924,569168,553844,435881,780710,207936,752033,593307,490193,243444,496913,912153,704076,859419,515678,801489,246888,886183,136586,970667,119820,835973,332506,327952,760831,366745,451097,617941,995524,461724,467716,581765,334067,172246,152189,801201,951265,578275,720590,307300,352709,605438,202308,595991,490585,413660,356101,223900,293786,152174,813568,537620,900073,541790,256697,320035,915307,185190,104936,780978,499504,912512,139213,927467,252743,500860,623428,431689,280492,304306,179572,632992,796608,416037,497997,842470,666861,819811,830463,213910,587518,541615,173929,638775,137320,839669,148202,756966,342637,820279,463971,444847,152593,945909,338778,582525,808228,928266,760075,615233,566198,139522,273564,769620,202109,156915,950389,239929,678905,965703,236140,953334,925827]}},{"id":923148,"code":"HE90017","name":"PLUMBING,AUX COOLING","type":"option","links":{"parts":[880147,604300,709085,917478,678896,833588,411116,250690,381282,378935,783993,784291,291157,923369,482487,692005,487036,265890,980466,358265,878506,426948,921163,751621,189275,582052,628457,119820,313064,783594,754545,666599,673838,791673,236218,487828,282702,876424,385809,656890,308760,740900,449857,147377,701195,854487,246040,546368,991997,388227,945623,639474,937913,356369,708204,516386,330148,327829,253006,165144,932213,796963,421794,735482,684181,532851,198261,612944,729240,780738,102898,299473,878438,844573,982832,202674,327494,924602,827128,416025,632439,755175,231298,808601,265886,658574,447920,313979,656010,710178,458953,688272,923560,323155,287265,979379,550532,316461,764988,468674,307484,192605,624392,252128,902933,760075,981927,799104,707208,453811,822909,817329,169428,667150,385025,322866,764284,985717,112236,230994,219966,929463,612950,245875,261807,737706,276505]}},{"id":839621,"code":"IC90207","name":"CONNECTION,AIR INTAKE","type":"option","links":{"parts":[284017,982494,151575,649646,901986,181784,391260,350788,302399,603611,887868,425324,512485,501064,327924,868806,227295,167367,680472,406443,282131,600055,632763,535639,473230,676669,439223,464693,798451,665464,693065,535626,765894,310656,142782,597702,130920,678125,896631,753584,885877,429615,147377,570503,493192,743994,223053,907393,596708,686947,837337,636118,218435,929027,726994,114509,406149,834365,446556,723599,307150,380698,244812,210380,928500,336981,904998,496629,991249,659662,392083,573270,370129,196163,616863,553929,563935,951422,663289,598088,696965,265615,190858,953570,899629,951377,921426,485896,848146,134518,492842,574406,603946,181743,697833,844607,866494,848183,399803,837394,363035,572319,539213,895517,172850,300885,374864,577438,560321,232462,895800,849197,496791,605424,796338,135740,601482,907199,580115]}},{"id":737811,"code":"IM9192","name":"MANIFOLD,AIR INTAKE","type":"option","links":{"parts":[710826,449216,552851,800934,931429,248293,669859,752427,343923,860956,564316,712780,710551,885036,764032,272039,909801,953889,888794,984133,977752,489127,959609,154908,758434,154788,893711,586479,281458,956066,983742,794067,118558,603905,998385,177880,984451,237743,436594,114518,796512,694491,394626,943968,735150,332131,378401,570239,604182,654903,855531,320035,664435,826544,126036,733033,569722,853439,642698,154313,120010,498576,671912,809360,692719,138109,477038,451811,911392,841385,177854,446795,430399,391537,480238,845485,616863,592055,235491,262147,358950,217911,975218,723182,200462,116437,184605,243187,675690,287265,951614,707837,806527,956590,448188,630814,271407,656374,343189,614049,197748,122093,338778,262344,173400,707208,456482,914466,425189,781995,903469,978502,892827,268687,977234]}},{"id":723106,"code":"IT9245","name":"CONNECTION,AIR TRANSFER","type":"option","links":{"parts":[375867,711573,224468,992021,492363,549115,673636,142702,169133,180730,756529,265890,649694,988513,455057,723725,424509,233584,857812,156615,320129,523323,978525,739547,137261,785533,526644,425512,595438,497449,171692,995712,224645,843378,634047,547827,209167,278995,177799,484444,500539,745126,753584,882374,405467,175123,719526,736646,660086,404053,842307,508707,565961,334192,784090,108350,580991,581782,520775,188532,947787,175305,219698,145799,299473,714600,930821,503917,496629,539918,565810,326301,374230,812506,532181,180546,581724,877623,235491,747484,902367,757145,485485,579058,520087,559413,856881,323155,650940,853276,439366,270036,480089,300885,792541,805814,613366,264427,574472,536770,458459,664626,299073,692172,902156,299515,124684,343653,238194,929463,725852,542721,269038]}},{"id":700901,"code":"LA9182","name":"ARRANGEMENT,LIFTING","type":"option","links":{"parts":[403978,126999,266159,283242,435881,802256,196762,301818,564316,126368,915088,214211,175780,104350,588680,860272,271809,180981,663192,659444,545979,336586,978525,594704,167195,827679,335668,761371,879995,614080,569993,662792,155476,641866,536775,484444,802895,730710,736908,373703,516140,945149,713029,753370,771948,813441,735150,406995,930682,919938,108350,383787,638021,421894,518679,618322,128935,415374,521002,244812,931341,847605,208256,526003,497025,882319,538303,544768,112365,872086,871694,380201,602213,753626,104638,279748,997315,982065,615963,737350,904866,508325,968428,953081,544755,492678,423055,656010,856881,830383,980998,651326,235570,799848,988886,861344,959410,681047,956590,300885,285179,460676,348371,646838,335667,838355,399028,799104,400391,674893,977002,542809,487610,320279,953778,611290,277773,437942,902742,475059,580115]}},{"id":720591,"code":"LB9150","name":"LABELING,ENGINE","type":"option","links":{"parts":[636873,736087,611169,758662,611994,276096,663988,233136,826706,452123,659301,772173,819940,358971,408233,174745,817752,502342,119820,124107,316629,330102,114913,783594,775937,216112,410375,179682,947511,731414,471416,385809,785727,428965,349301,803352,942207,249854,398019,245900,908099,265679,604182,915071,640378,224716,627157,950442,809625,223713,669113,529005,987662,596951,266055,147152,941032,141296,210380,706387,401740,889022,336981,707049,650090,954342,597942,104638,111150,659662,814505,736855,559968,995833,502231,965130,801397,116437,882826,119960,808342,834614,559202,820279,592645,459262,958666,212772,623448,138052,760075,398040,945387,857250,212599,450011,564628,143788,641130,799934,968118,636858,589260,984084,678896,925827]}},{"id":126264,"code":"LB9164","name":"LABELING,ENGINE","type":"option","links":{"parts":[914004,387388,301127,421766,366858,808058,342177,847905,123963,780382,609151,663678,475151,895756,600185,194327,387816,625737,603798,334241,984133,678938,476110,704339,281749,145506,397754,442038,558560,648570,674077,459399,588516,279805,372964,282702,877022,910749,325598,493631,722989,617152,293786,245329,601706,772490,209560,199591,614478,670065,256697,334192,853744,768995,333881,894599,984840,499504,231305,801837,273024,122034,495660,704649,501422,841704,683049,889022,815956,113883,786082,305751,853150,925506,594769,747376,656914,615963,180546,835754,140108,543445,441687,389944,371577,291778,137320,719542,951614,987827,657390,570841,224461,805727,103384,814447,430271,593452,846291,388259,995969,862561,542809,667150,587934,526849,915275,673094,324305,390961,626291,909011]}},{"id":466317,"code":"LC9366","name":"COOLER,ENGINE OIL","type":"option","links":{"parts":[476052,291198,764036,655151,224468,248293,867590,435881,921274,603611,343923,121686,860272,863033,802673,680472,826828,105359,415873,154908,398499,850891,240952,676669,869075,948122,607376,184570,334067,747063,669610,294501,443474,413061,701210,797748,772766,401550,990456,690550,918226,383833,170951,739597,437423,343597,931005,193957,645291,899676,600654,421894,275893,305918,183271,138967,232414,535543,383009,695194,125419,330486,206056,139692,527418,232385,477038,533774,487672,865391,707636,724470,403313,593627,954607,311531,374965,112370,573270,901542,770433,238813,443463,128684,416025,560200,250058,508325,659552,270460,469820,503685,907585,214417,995629,323155,699262,206034,622596,728351,152683,784179,630475,481307,607541,839179,335269,576927,608665,640248,322866,665953,101097,859620,407728,174016,282483,826822,693996,582796,231519]}},{"id":689737,"code":"LF9068","name":"FILTER,FULL FLOW OIL","type":"option","links":{"parts":[972391,714600,988513,187629,250690,266574,903374,475823,463597,808058,579489,944945,692005,211453,804701,919715,421315,682699,235550,271809,798064,441027,675669,742028,347544,563593,249331,623803,922566,804591,676669,775937,649754,642515,493994,422688,151015,341873,919226,939558,598484,379952,871282,499873,247044,444401,314243,345275,627795,226766,855531,327829,883577,103165,684427,223011,978594,976326,941198,591908,850066,507338,576114,398949,707646,676600,302362,820673,351766,965850,716918,596803,389952,856590,489777,249423,328219,755175,166994,262147,690165,191258,128388,990036,235458,707837,853276,295710,215900,764036,614803,326134,428312,428879,515967,169428,660300,722774,149413,796707,589414,678905,271225,774587,433073,542721,410407]}},{"id":289947,"code":"LG90427","name":"GAUGE,OIL LEVEL","type":"option","links":{"parts":[423231,556264,853938,194924,435881,942445,906341,586857,905796,978961,963539,417865,689677,558678,583789,588680,308089,395225,141789,521977,105359,175765,705811,383476,149115,399460,405450,981323,965857,614080,859286,893711,694995,916134,155476,310656,823562,483860,952791,874262,829716,177877,495626,312249,179255,732159,927048,505079,357898,794446,357183,828280,190588,181331,398799,707576,208659,177939,103165,798287,684181,846246,572384,813797,256602,888459,807333,303519,865391,919789,470737,544768,850613,103724,728064,655453,282730,888062,997315,137887,489777,565580,433657,410722,539581,232365,113526,696770,536361,761580,253302,423055,202456,688933,603946,208150,934867,798520,998305,569269,749277,303367,494392,371064,892721,673379,601544,121865,252128,742500,808490,385334,776524,566198,355395,643810,948916,959473,980006,970430,116862,488687,683745,545744,767798,991685,433073,842673,933343,751500]}},{"id":935416,"code":"LO9107","name":"OIL,ENGINE","type":"option","links":{"parts":[184897,864556,679352,587498,248293,830408,109638,660545,251282,165729,138009,904232,426948,942634,825318,306511,508182,395225,649916,985399,415194,563593,322846,281749,969607,131202,378094,246949,405450,649754,426687,336618,389487,780859,731414,653165,266257,711970,514901,617152,853968,493192,690550,488320,226026,193957,258801,112406,275877,568691,202387,329122,833271,244055,330486,128523,677501,570109,587510,203219,729554,614400,298205,707049,219052,811979,701012,795865,781387,453807,621029,366493,416025,520248,527546,348367,537248,443478,668508,877353,559490,934867,801068,737692,767943,749019,157888,514571,263335,100371,749277,430871,103384,680391,834756,765319,241282,229990,742500,355218,901369,666047,175379,324050,253939,474363,736493,869002,215138,726442,969499,108120,324305,851840,806764]}},{"id":700180,"code":"LO9701","name":"OIL,ENGINE","type":"option","links":{"parts":[810736,307150,166246,453132,178706,905796,692005,773073,446631,634081,556017,289924,609081,905544,939750,803729,174745,765805,762065,704339,892062,156389,401254,643610,385645,357844,277183,474648,838673,960949,293054,229673,744239,339491,890386,186760,855614,396157,393491,341873,403944,118558,500539,282702,185716,896631,701210,609668,873244,401670,124965,175123,349301,289133,113214,709791,912893,110138,686947,769678,335758,570239,802724,916282,671734,160970,908042,983014,305308,947787,139213,171619,498576,333682,147152,723599,415563,476965,175491,403311,707319,850613,397594,179572,480238,908110,186879,770433,500533,375562,965724,924602,731269,125970,408659,788438,109332,291778,975218,498212,328856,559573,699262,844607,277943,286300,580391,514571,924298,577438,494392,507845,206289,430271,179495,300130,485149,511202,423231,805649,824299,781995,302071,588065,643715,279520,322866,231289,184525,407728,273579,475841,656727,601482]}},{"id":429398,"code":"LP9130","name":"PUMP,LUBRICATING OIL","type":"option","links":{"parts":[472563,459217,668681,268096,716085,224468,552777,347537,258828,233431,370925,353706,343466,604722,635297,649694,710551,850579,353926,836441,825318,175445,359924,286723,762065,601106,281854,644784,286899,405450,552608,776553,137907,322900,983528,162318,632419,481182,485079,480163,759450,775190,854097,721076,543407,371084,976317,984416,695509,443089,789765,517652,681252,958157,900073,198925,444379,961682,541790,529604,719142,256697,489085,628369,976379,391540,419640,581782,908814,600590,256563,863407,763087,128935,122575,345292,619836,857075,392729,792796,193527,274726,397497,347445,632992,576605,116052,417688,912412,520248,427020,186146,253302,470458,313979,988886,594752,452504,756966,116285,816581,284828,123415,807678,673379,601544,307484,124912,429457,760075,160523,428269,223470,995969,421940,139143,835598,871948,633062,991685,780004,958958]}},{"id":475413,"code":"NN9726","name":"NAMEPLATE","type":"option","links":{"parts":[480316,909178,951802,575127,266925,120837,323904,232526,251282,752256,357164,836441,596629,429883,560593,162086,322846,459787,739547,313064,961069,332574,427160,511017,667345,632763,325415,617941,959592,508222,430222,278995,484648,256341,139311,136577,121801,202308,915806,401670,222840,456167,506581,457223,338794,984416,970217,931435,502302,794670,763170,336924,712688,326506,502924,875074,664435,722912,709085,805737,166102,421894,256563,739026,197500,853439,563934,305308,684181,821320,836686,975403,380680,500101,775184,166635,391537,380201,494993,614252,865828,431836,290685,358618,749677,874007,928740,284977,683767,371316,335997,183495,357701,119960,555236,181743,493899,989001,157888,983390,842728,478006,316461,101907,179762,593452,266390,945931,328269,519211,423231,864517,488429,948916,967892,919998,808469,196030,830794,490343,218998,622185]}},{"id":579969,"code":"OB9440","name":"ARRANGEMENT,OIL FILL","type":"option","links":{"parts":[503682,728198,126999,670990,463597,902864,756741,716872,663678,367921,748234,940774,995052,795183,561290,663443,864007,601408,529900,156967,855614,678862,739188,744168,656427,131949,850485,198090,764888,952791,433319,176246,619995,737824,628499,398110,269861,887988,942207,896336,763170,552116,295227,132730,786049,185190,566480,203875,151997,398782,619264,638021,977221,658503,104496,426641,618322,103165,330231,190375,792198,139692,252576,725627,409919,486976,203219,724874,922164,405984,408876,163511,433657,205126,350427,123263,846732,210360,801397,253302,503685,904859,506671,207101,987827,887279,601544,913295,115745,925631,396248,958865,450011,474363,847589,988934,647213,641430,428879,313651,149413,409122,327166,971594,959921,437942,207237]}},{"id":354977,"code":"OP9676","name":"PAN,OIL","type":"option","links":{"parts":[314161,340133,266159,939590,174452,905186,806622,802256,413852,487036,814440,919715,573022,588680,667746,812098,861264,827540,732216,400060,296208,783594,646124,299666,481794,442038,699413,617062,838673,261819,541262,856462,706273,228556,424286,720590,983742,598484,132439,529516,272819,971963,159117,407035,846060,175123,556988,544972,620805,664216,112425,359046,326506,859337,128773,541790,323472,937913,854079,786049,154849,303050,131353,266668,156035,784090,485374,481709,258725,480316,121915,708689,733745,221322,802659,531975,844306,981246,526003,203219,480238,783915,667246,716918,141985,444604,422834,295720,615963,435335,205466,944727,696965,492822,323608,253302,485896,184605,322327,403786,843730,644305,437327,842728,281310,852389,993151,834756,374037,138052,988168,865141,864517,663178,959473,156915,480422,526849,915970,569170,774587,288558]}},{"id":272446,"code":"PE9187","name":"DEVICE,AFTERTREATME","type":"option","links":{"parts":[656273,519876,831405,250618,460592,231383,597457,827714,876556,641463,168079,556017,563848,450640,588680,567142,662475,245503,123200,314644,961069,576097,705811,637200,869455,362110,871185,157211,955984,446844,367183,620547,474937,595991,251548,428965,801748,556012,651558,390950,134963,781642,951165,569232,784090,518484,256563,202387,351389,779001,438867,799253,725627,897183,860205,882319,582653,142604,950713,113883,887950,115593,802032,772250,406706,305751,475989,997315,982065,202235,543445,396751,237054,211835,994049,360289,965467,971653,225357,780872,574406,923560,728351,998305,873182,826972,231089,657390,550532,285179,418668,279862,610069,764988,913002,533907,125401,400391,726442,698938,835598,216159,785169,299515,960737,542721,102036,137240]}},{"id":888427,"code":"PH9323","name":"LOCATION,ENG CNT MODULE","type":"option","links":{"parts":[951614,177854,299073,348978,831405,153188,413905,804668,836284,945005,336408,231383,919260,620666,779610,711859,457891,915088,802844,114795,915631,237816,279346,799321,290579,906807,259940,643610,335668,288280,168654,581765,103077,446844,706254,495274,956066,915930,578275,170694,177799,434432,374628,876424,753584,828224,102634,216185,153395,583109,854615,585750,391992,337369,944592,705770,223053,656273,706811,261675,323098,860788,837337,607631,231244,231305,905597,177939,269609,115999,495660,493886,973585,279181,203344,792796,336981,742207,287952,942478,911250,169049,771946,842470,677140,279748,481747,951422,844900,801397,635840,660836,397877,683117,407120,341187,712762,591413,399803,550532,316461,508395,151532,620131,610069,490576,827022,863337,476052,988934,898216,770566,959473,969995,363148,840321,949746,997774,237388,384513,270611,862521,785169,327166,367844,392900,726269]}},{"id":893239,"code":"PH9337","name":"MODULE,ENGINE CONTROL","type":"option","links":{"parts":[308376,424387,399803,800934,248293,702054,872604,660545,103922,576195,942445,281485,769121,773073,151885,800590,167642,260074,779469,410019,334241,637122,428802,404040,557006,582242,854363,995052,836894,141356,821106,740942,385645,833366,293054,952607,471141,750534,435847,548694,231284,620547,137602,891556,802895,819992,266626,471416,270494,203149,980296,828685,974036,112425,722512,927699,751090,756587,664435,496772,653827,104496,752165,269204,518441,273024,219698,803225,706387,707636,166974,718037,113883,207039,163511,696701,494989,845587,568360,696965,960815,747484,259411,831411,320438,466329,453987,207101,241751,352143,590139,698886,846033,471166,879841,625103,313969,113293,593452,778784,869273,362389,793484,973163,365013,302071,311567,475814,441583,324305]}},{"id":694012,"code":"PP43846","name":"PARTS,PERFORMANCE","type":"option","links":{"parts":[526644,884817,288154,700874,588901,628622,482487,753377,905685,487036,119337,298945,124132,639066,357145,212756,816162,410019,835973,296208,511017,464613,489088,286124,224645,906587,298559,955197,446844,341873,403944,533492,571547,474537,256341,115904,177799,600361,251818,595991,499873,644495,147377,379605,621098,743994,771948,921570,613064,776538,918540,301589,444379,893686,224716,696799,568234,786049,745901,622028,266668,967911,380761,421894,518679,669113,582680,437236,272197,413784,737316,814363,880837,898331,322727,967241,222827,939815,421911,942478,460414,590230,433657,738935,416025,728198,469820,348212,650378,228179,719738,771136,326939,648841,630743,362389,472563,870736,173400,822909,770429,584234,741435,390625,448433,948356,621693,261807,496054,353565]}},{"id":393247,"code":"PP99732","name":"TURBOCHARGER","type":"option","links":{"parts":[232526,422580,957840,519234,117103,688945,747319,548813,343923,168079,735483,895756,850116,679504,104350,905544,889809,879476,370402,156389,464693,154788,520270,678862,242641,541490,774368,983742,162318,599697,187144,490585,433319,189792,415269,159117,356101,472134,452396,449275,364819,290485,202951,688509,649739,619264,751808,908814,993171,133902,876654,148328,500896,638685,737316,185284,147152,534926,286747,280550,395916,835170,865424,498456,503917,753626,310885,341427,664033,620671,622524,585551,583025,527685,508622,418682,558512,685567,548810,706634,780872,923560,749277,774799,475734,338974,620131,902794,666930,623114,732529,259612,863337,775129,893189,863179,799104,494634,104733,566198,865607,766747,315000,559037,692912,270611,589260,979898,683419,387166,456385]}},{"id":114760,"code":"RL9772","name":"LEVER,ROCKER","type":"option","links":{"parts":[434058,305715,929015,800934,268806,372258,604751,239329,374828,358863,770236,458257,485600,979826,454280,156615,918473,909014,785533,146205,316987,795183,675790,299666,705811,362110,842086,405450,552608,459196,720590,770775,391724,598050,415269,711970,423920,489956,617152,147377,336337,323098,855635,343597,900073,236522,529604,756587,300549,206104,141414,522116,114509,456827,121915,395462,440216,125419,588089,591301,587510,717956,707646,859937,152631,486893,471100,677140,266320,769399,668394,786757,888004,265615,348367,202664,780872,137320,703038,756966,105857,998305,633422,358938,507153,905278,318478,685736,929337,175258,681601,225477,980164,251418,449274,495476,864517,704419,302071,287990,373491,200731,323220,480740,841197,671947,273579,494897,245875,261807,737706,726269]}},{"id":756400,"code":"RP9160","name":"VENT,ENGINE COOLANT","type":"option","links":{"parts":[458968,126999,276860,856156,806622,348967,785065,323904,496913,661181,871228,249602,313556,568591,816162,983032,228899,194366,909014,996282,425101,887527,131202,452186,676669,959592,259594,223388,118615,513176,379952,272819,434432,173999,736908,808034,510363,493192,366630,673560,872161,519775,549375,570239,830372,330148,715533,826544,104936,819343,435305,965647,600590,932213,231305,395462,116871,809360,207605,298700,194148,500860,947878,914601,147134,649193,954580,939815,887950,894601,569023,666114,400605,501818,288543,340063,421822,137320,441890,816448,327696,728351,979379,763040,725812,352428,383213,151532,100971,808678,841048,320305,365555,728286,204396,933973,501210,840321,799530,722774,764284,124808,785169,743996,247538,433073,916809]}},{"id":421583,"code":"SC99771","name":"SOFTWARE,CALIBRATION","type":"option","links":{"parts":[389952,837802,421315,752895,301788,524843,233431,506217,389940,301028,995849,847014,359548,793164,753310,372363,374554,576837,346033,803729,747216,902275,336695,299458,553034,357844,796472,640166,239117,239819,640700,782956,268114,199561,690216,782439,444099,490585,454435,975844,505079,506581,570503,453527,100975,929655,978123,295227,643150,697721,151877,386659,426608,724226,246639,853439,684181,269204,828371,343375,653468,284813,666571,319257,968351,480238,219052,831717,406949,655453,867864,205833,655756,123882,589277,562685,981259,237054,740590,260306,598185,559573,789774,210049,816448,332213,287265,514571,510959,132076,920771,289810,334078,160789,767351,259612,794130,755480,612309,967892,966939,320279,902156,270611,671947,844597,673094,239929,926097,924695,217524]}},{"id":181227,"code":"SH9117","name":"SHIELD,HEAT","type":"option","links":{"parts":[909014,125975,261986,716647,572079,700874,836579,266925,391260,511337,490193,989133,143950,556017,780051,159791,825978,655083,530956,688636,335119,570690,918473,158607,702268,252319,801190,713166,590272,869552,508120,162776,714809,171692,437456,549959,170317,586479,687626,118615,887965,965748,499999,536775,637779,187144,918490,118314,595991,613556,186127,113091,572230,705770,931012,295227,290485,244761,975589,476229,421894,188532,332769,154313,330486,779001,813797,924700,949141,588089,232385,792796,191889,544839,860205,835170,496629,845199,815259,559300,622524,320323,835883,982065,146137,262147,533825,935027,477471,834614,934867,148202,881455,672482,396378,363035,701893,141917,464410,352930,232462,562581,327152,354453,224039,815441,836720,942104,596741,560671,975584,891057,488687,947990,124808,356059,271225,601482,404737]}},{"id":791921,"code":"SK9016","name":"ARRANGEMENT,SHIPPING","type":"option","links":{"parts":[241272,937163,722942,301127,735488,812489,306927,562477,384022,749219,966691,357905,809044,265890,426080,509731,424509,659444,394750,395225,819940,850975,410570,347544,353971,978525,208055,185848,197032,154908,362110,324151,917478,727995,242641,189909,641205,816280,536775,443474,925029,306357,378640,202301,957845,179213,885877,219876,543407,664216,709791,519775,112425,343597,855531,671734,108350,305139,532477,305918,910297,225427,863931,339921,351389,281323,359830,528413,111150,116052,471662,444604,418659,471924,205466,527546,781895,882457,400758,368090,123690,763291,558512,579058,629792,769439,618300,464714,624203,680391,902794,477070,827686,711085,973163,918469,706484,884755,785169,826125,890640,919526,412962,737706,423019]}},{"id":538467,"code":"SM9790","name":"MOUNTING,STARTING MOTOR","type":"option","links":{"parts":[795183,601408,446556,722942,266159,556264,852936,175538,808058,372127,656468,178706,484237,593307,487913,509716,957840,445591,480441,244573,921163,346033,662475,803729,293456,108165,179337,656708,506732,191629,666677,535603,451097,617062,640166,104423,168654,186124,132042,535626,430222,748549,281458,246425,836537,925029,270494,582929,944729,375867,428880,737877,764085,709791,436594,974036,936795,316881,147982,346455,637049,107856,688509,854079,244373,569232,675887,946159,135184,696100,293728,484979,487672,595677,289300,116956,753626,351460,572102,728193,145979,205466,785675,909920,308918,945983,403786,231153,153618,937371,651586,580949,415568,721415,827022,928266,755480,400391,840880,423231,553886,824299,970887,147214,260355,949746,213183,551118]}},{"id":956357,"code":"SS9606","name":"PAINT","type":"option","links":{"parts":[240952,588415,860768,846336,775201,955641,453132,802256,641831,143950,251282,294096,755310,189266,874281,803040,558086,530956,136586,865157,266526,158607,123200,989324,330102,650817,795183,154908,439004,224645,246395,771680,662792,754695,366798,808810,343594,119007,881453,739586,365419,206467,387388,433319,557156,454435,456167,707993,777121,771948,291008,841461,763170,627795,865004,863885,203875,600590,392447,212483,684427,362949,395462,121541,828371,301108,657245,871090,161543,437764,406914,500503,166974,787264,503917,887950,532606,257430,451821,815259,655453,230226,241272,594769,940193,128684,167126,123882,285822,632439,521849,645264,716865,202899,485896,595299,835285,516430,844607,804734,728351,691995,737692,853276,887279,661085,407360,422263,743679,751331,934549,263881,293540,146862,815441,995969,453811,741435,589352,489942,671947,975611,673094,802427,705409,175629,269680]}},{"id":598662,"code":"ST9491","name":"MOTOR,STARTING","type":"option","links":{"parts":[915248,143292,253361,557245,450372,806622,641463,166948,156336,139225,828734,600185,842892,205727,235550,180981,801489,424387,876451,675669,558252,184853,266526,680472,704339,415873,401254,167195,705811,464693,785528,148551,293447,574992,148832,883695,303527,315813,844625,961034,240977,173999,801748,293786,887988,852999,990456,855635,681252,639474,164319,671320,214191,419640,664260,148328,580727,146806,116949,909488,401740,315017,729240,395916,459011,221473,802032,103373,275612,406706,300469,119015,874282,907828,254423,205833,725135,527546,525336,165399,261232,212848,759037,545762,830463,658566,916346,728351,719542,737692,853276,444115,204616,300025,949433,420503,457679,913988,838355,967730,107850,223370,223470,338269,805649,977002,103311,942104,897235,919998,498054,394247,358135,567224,108120,968114,102962,475828,662880,724106]}},{"id":149653,"code":"SV9002","name":"VOLTAGE,ENGINE OPERATING","type":"option","links":{"parts":[593627,325994,735488,836478,930081,417351,425190,564316,835459,721342,770236,580344,520919,349420,904232,754359,829913,970236,370280,311045,296208,604244,836042,746014,473540,350493,461724,348283,589084,856462,678862,446844,201249,451131,932861,433319,609668,177877,124965,175123,885684,371512,945149,493192,357957,872161,489448,970217,237046,388227,841461,712688,406995,915307,921950,930882,449656,259026,581782,413784,348573,299371,763884,706373,533774,284813,369231,406914,930994,615223,503917,707049,285964,138731,668331,655453,705562,475989,573270,673375,132111,710826,636873,232365,855357,614294,475431,146669,544755,777423,586786,488988,203308,808342,137320,618300,859494,800914,207101,287265,983390,842728,422902,371937,139545,784179,627651,973163,504693,505833,657622,809912,533523,236219,969995,574303,889213,718067,108120,568163,948356,961080,714146,774177]}},{"id":527071,"code":"TB91823","name":"ARRANGEMENT,TURBOCHARGER","type":"option","links":{"parts":[695509,780149,820660,597840,751346,752033,603611,809044,487036,770833,119324,165729,931432,110999,235550,431219,761616,500049,532421,423303,685424,960949,293054,246395,118582,339491,201249,491236,643305,653896,268114,969280,744997,451131,595991,547407,178715,706811,404053,945566,365841,639474,136536,893686,847704,356369,323915,236929,179639,969681,535265,208659,834800,657245,434121,670027,792796,732639,729240,539482,459011,421911,783915,486893,408622,902190,586049,249423,418682,348367,261232,284977,988109,675241,724595,501818,994397,202456,908019,584274,120880,547313,904859,936830,877796,170746,589968,980609,418668,151532,755503,955061,103694,492206,259612,402167,170852,996499,928266,365013,577510,811703,554460,914307,846208,488687,270611,407728,769116,218998,780221,542721,872496]}},{"id":283300,"code":"TP97564","name":"PLUMBING,TURBOCHARGER","type":"option","links":{"parts":[152107,833367,359548,956147,757505,258828,792239,490853,340721,159016,405199,180730,564316,168079,444498,313671,426080,583789,104350,481973,119820,464613,425512,902975,869552,795183,454542,221486,798451,282563,677797,589084,495538,312350,586479,965748,911079,662863,475713,410271,315789,721183,357898,276202,765421,802821,335758,323915,401819,435892,899560,643150,976454,736451,386659,918660,820129,830359,204282,853117,833271,987662,959263,863931,313966,807333,244812,882319,729554,177854,655422,617887,220858,202195,308522,389944,527976,250529,940908,470458,512845,672482,925010,551763,563035,197748,897200,262569,175379,641195,581074,566198,425189,278953,737903,503386,777596,927460,711368,834157,223460,901344,407728,213183,286077]}},{"id":507759,"code":"VC9594","name":"ARRANGEMENT,VALVE COVER","type":"option","links":{"parts":[544972,421766,486706,881039,117103,351944,343466,207936,478133,676099,228788,703170,819940,628229,108081,995430,602411,119862,785533,307256,913281,656708,790914,506732,276879,474814,604244,454655,740772,490300,893711,790698,322900,804470,452372,690216,490849,900559,167511,177212,581012,253426,605968,456622,190588,284017,793491,948060,964865,639474,837337,278911,427296,628755,421894,876654,798287,630746,169048,292417,619836,415374,581950,343950,683049,217068,882319,382640,539918,220858,776732,343690,560512,740013,266320,792987,616863,854901,924602,205126,674122,173852,492730,475431,315579,832404,357701,915883,238877,405497,128281,399803,404194,297457,284738,852353,580949,551763,837026,460676,892721,106240,179495,838993,827022,287760,396248,917056,804549,707208,296703,462591,956750,822909,139839,373491,971175,927460,921123,139143,762489,687931,324305,525373,196030,347127,714146,312017,154577,387166]}},{"id":806376,"code":"VC9599","name":"COVER,VALVE","type":"option","links":{"parts":[578155,572451,299372,932273,537727,455521,151885,321196,710551,622633,426080,621877,600185,249602,333794,515678,992238,860693,563593,141789,799321,217551,717775,806411,216112,346599,956066,731414,829444,933869,789977,724217,499873,982494,413660,490333,346571,993727,688220,921570,336206,565961,927699,837337,404350,831676,335758,323915,237318,516386,682116,916365,231305,798287,122575,138967,987662,440216,175305,519035,124793,770655,692244,402255,408333,280550,406914,835170,319468,299473,724935,351766,815101,665573,119015,279748,408876,240456,713710,716865,165399,903073,541615,324029,439273,808342,304437,697833,283316,839703,848183,172729,657390,990707,285179,102367,521986,490576,601544,492206,623448,988168,784179,489268,472563,250903,981927,987176,414686,421940,215138,592379,784284,993109,200175,327166,433073,410407,885850]}},{"id":815239,"code":"WI9466","name":"CONNECTION,WATER INLET","type":"option","links":{"parts":[425101,283467,534582,554247,417351,448482,892526,656468,440841,255435,169133,620666,944945,251282,319352,802844,543365,417309,921539,779469,659444,243547,579204,557006,587462,827540,924222,327952,442038,366745,154788,906794,168089,495274,145966,867723,272819,490849,987492,208156,528896,726865,499873,177877,899164,457223,976317,852432,331812,441472,422446,781642,201937,550666,855531,742790,804069,915307,154849,164319,967911,254122,187671,105058,630746,912512,225427,286354,888459,803228,318050,470941,226200,677919,406679,750698,570780,894916,113475,630935,291105,466796,111150,616132,874282,621029,163511,223257,581071,653326,410722,435335,680148,615404,925855,965482,165399,544755,832404,697833,665508,224921,977003,270036,924298,838261,328224,601544,121865,133185,967730,107850,400391,520624,988934,744658,763768,568163,223460,553670,929242,851840]}},{"id":730801,"code":"WO9112","name":"CONNECTION,WATER OUTLET","type":"option","links":{"parts":[626162,716464,126999,283242,804540,417351,700874,986233,453871,498744,166027,984133,799321,290697,459787,628457,428822,835973,785533,799219,959609,480666,864556,385645,362110,464693,589084,835806,497327,937259,353382,932841,896631,701210,603905,872800,998385,885684,341099,595859,720164,859337,323472,838728,843426,563122,105417,116214,913396,692719,358629,657245,101218,792796,793786,175951,470941,948587,367951,139703,358360,318132,972391,799229,185948,223104,653326,186146,882457,951377,253302,830463,921538,955234,486913,542938,439438,317707,176052,719542,990913,181852,878759,490576,468674,518094,983493,232462,414724,223370,866570,354453,843894,889517,590435,468925,573277,699274,373113,419300,799934,149413,698938,409122,673094,595309,299515,106715,269038]}},{"id":213101,"code":"WP97367","name":"TENSIONER,BELT","type":"option","links":{"parts":[933343,959263,746815,417092,355696,945005,700874,749219,255435,260042,338035,711400,895756,271668,621974,357164,319515,864379,742028,712474,108081,563593,952419,765805,729659,977752,835973,803975,226272,686476,705811,805691,760831,350493,164564,424062,234827,857879,975961,578275,641866,137602,443474,565551,876424,793576,337369,586091,198925,124320,179864,330148,528242,476482,675887,780978,326143,960542,396161,450747,733745,493886,585263,282333,627721,831404,885901,397594,810937,724935,421911,620041,358360,941470,668331,430317,572102,255783,823657,924602,690165,808601,684034,235570,866494,517738,585913,898699,676728,879841,861810,204165,101907,810231,513037,196108,391492,293540,235933,284532,223370,365013,248092,929071,993109,827924,635759,673094,196030,364261]}},{"id":292101,"code":"WP97909","name":"DRIVE,WATER PUMP","type":"option","links":{"parts":[822154,811703,424111,363716,747319,569168,999983,175919,939533,366807,126368,556560,895756,238775,166645,682765,558086,140597,308089,659444,704339,876422,480666,836894,993282,795183,439223,759871,179849,495538,156667,641205,578275,948008,573659,374628,759450,356101,257346,516140,966388,724504,369035,471091,852842,335758,146656,930682,850265,808056,434848,885580,223631,121915,927467,857119,844306,294005,608110,293826,583894,707646,942478,275612,233973,742884,842470,622524,565810,569137,690935,814505,494989,941556,343828,262147,926445,506886,629792,651326,375420,834614,517738,633422,954789,726510,879841,974156,407360,976333,592645,920771,464410,903866,253867,915248,173306,246454,884755,288600,668681,822208,985717,487203,929463,662880,751500]}},{"id":518066,"code":"WR9538","name":"HARNESS,ETR CNT MDL WRG","type":"option","links":{"parts":[120273,464306,552777,836284,808003,642737,780382,963539,243444,711400,272782,342199,228788,663192,622212,583471,395225,557006,978525,610402,205799,452186,221486,793909,335668,401008,216112,224645,960949,874337,906794,932841,306357,444099,336953,832779,854097,428880,328223,413309,549375,712688,256182,528242,532090,634557,845095,386659,628755,581782,983014,305918,132522,272197,500896,947787,371569,564700,927467,603968,294005,347445,747077,446795,430399,856967,507794,788682,650090,653390,553665,688058,481747,145979,993117,566031,982452,389944,180083,243823,953570,492822,475431,940908,443478,966662,915883,429143,862573,402508,644305,152894,480089,676728,929337,805727,610069,179762,683979,137608,259389,884755,503386,574303,864972,320279,402539,149413,277773,862521,883095,160349,904827,925827,892827,341913]}},{"id":957386,"code":"XS9571","name":"CONNECTION,EXHAUST OUTLET","type":"option","links":{"parts":[674777,246522,343276,798152,279124,710167,976511,660545,500215,756741,885749,455521,395375,501064,299625,289924,770236,915088,825318,120405,636663,137261,996282,914004,553034,397956,931221,820869,617062,545002,224645,661963,442076,999735,410839,459196,576923,115904,690897,728205,109702,708961,212832,968250,429615,490333,246040,828685,688220,813300,660086,916768,831676,706712,720976,330148,334192,745901,131353,244205,899560,967911,981273,321714,768995,427496,463439,919692,482469,115999,351389,108097,587728,487672,595677,778099,707636,752310,718037,391537,321436,275612,370023,808702,209376,541810,615963,419337,924602,265615,387571,185521,352031,558512,969603,520087,108578,629792,642630,890143,567447,861344,224921,763040,657390,133719,383213,168833,715802,373245,685372,156915,822154,741435,698938,566460,219966,874471,263746]}}]');

/***/ }),

/***/ 32180:
/*!*************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/sample-data/parts.json ***!
  \*************************************************************/
/***/ ((module) => {


/***/ }),

/***/ 46541:
/*!*****************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/sample-data/platforms.json ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":914823,"name":"C-302","year":"2009","type":"platform","links":{"programs":[379501,191421,379501]}},{"id":537511,"name":"DPC-2801 (LE)","year":"2002","type":"platform","links":{"programs":[241618,979234,497540,457352]}},{"id":276408,"name":"DPC-2801 (STD)","year":"2011","type":"platform","links":{"programs":[380679]}},{"id":419091,"name":"DPC-2802 (LE)","year":"2013","type":"platform","links":{"programs":[212931,267418,688211]}},{"id":740798,"name":"DPC-2802 (STD)","year":"2014","type":"platform","links":{"programs":[191421,688211]}},{"id":441611,"name":"DPC-2803 (LE)","year":"2001","type":"platform","links":{"programs":[212931,191421]}},{"id":280398,"name":"DPC-2803 (STD)","year":"2003","type":"platform","links":{"programs":[497540,241618]}},{"id":348561,"name":"DPC-2803 (ULE)","year":"2003","type":"platform","links":{"programs":[993477,527023]}},{"id":263339,"name":"DPC-2804 (LE)","year":"2007","type":"platform","links":{"programs":[662248]}},{"id":123641,"name":"DPC-2804 (STD)","year":"2019","type":"platform","links":{"programs":[457352]}},{"id":730209,"name":"DPC-280x","year":"2005","type":"platform","links":{"programs":[379501]}},{"id":529974,"name":"E565","year":"2016","type":"platform","links":{"programs":[453597,457352,448334]}},{"id":572791,"name":"WH 6","year":"2000","type":"platform","links":{"programs":[662248]}},{"id":880192,"name":"EM","year":"2007","type":"platform","links":{"programs":[906309]}},{"id":544594,"name":"FM","year":"2011","type":"platform","links":{"programs":[453597,154422,906309,267418]}},{"id":312674,"name":"GLWM","year":"2012","type":"platform","links":{"programs":[267418]}},{"id":644242,"name":"GMV","year":"2008","type":"platform","links":{"programs":[662248,457352,379501,457352]}},{"id":512387,"name":"GMVA","year":"2018","type":"platform","links":{"programs":[267418,527023,453597]}},{"id":439956,"name":"GMVC","year":"2017","type":"platform","links":{"programs":[453597,689633]}},{"id":388113,"name":"GMVE","year":"2012","type":"platform","links":{"programs":[212931,154907]}},{"id":723544,"name":"GMVG","year":"2019","type":"platform","links":{"programs":[457352,993477]}},{"id":871482,"name":"GMVH","year":"2005","type":"platform","links":{"programs":[906309]}},{"id":600075,"name":"GMW","year":"2008","type":"platform","links":{"programs":[212931,241618,662248,380679]}},{"id":751289,"name":"GMWA","year":"2010","type":"platform","links":{"programs":[993477,154422,662248]}},{"id":325664,"name":"GMWC","year":"2010","type":"platform","links":{"programs":[191421]}},{"id":173545,"name":"GMWH","year":"2009","type":"platform","links":{"programs":[212931,140007]}},{"id":340155,"name":"GMWK","year":"2008","type":"platform","links":{"programs":[497540]}},{"id":239985,"name":"GMWS","year":"2015","type":"platform","links":{"programs":[993477]}},{"id":521235,"name":"GMX","year":"2002","type":"platform","links":{"programs":[688211]}},{"id":594079,"name":"GMXA","year":"2012","type":"platform","links":{"programs":[688211,212931]}},{"id":299555,"name":"GMXD","year":"2018","type":"platform","links":{"programs":[453597]}},{"id":464129,"name":"GMXE","year":"2012","type":"platform","links":{"programs":[191421,993477,688211]}},{"id":883871,"name":"KM","year":"2015","type":"platform","links":{"programs":[241618]}},{"id":910720,"name":"KSV-T","year":"2011","type":"platform","links":{"programs":[993477,154422]}},{"id":627244,"name":"LM","year":"2014","type":"platform","links":{"programs":[689633,979234,241618]}},{"id":694930,"name":"LSV","year":"2003","type":"platform","links":{"programs":[241618,191421,241618]}},{"id":658214,"name":"LSVB","year":"2003","type":"platform","links":{"programs":[688211,906309,448334,379501]}},{"id":844323,"name":"SGTD825","year":"2006","type":"platform","links":{"programs":[380679,448334,241618]}},{"id":585424,"name":"V-250","year":"2002","type":"platform","links":{"programs":[191421,154907]}},{"id":436024,"name":"W-330","year":"2003","type":"platform","links":{"programs":[154422]}},{"id":487933,"name":"Z-330","year":"2014","type":"platform","links":{"programs":[154422,688211]}},{"id":250465,"name":"HBA","year":"2017","type":"platform","links":{"programs":[457352,906309]}},{"id":604205,"name":"HRA","year":"2002","type":"platform","links":{"programs":[154907,688211,662248]}},{"id":121707,"name":"KVG","year":"2014","type":"platform","links":{"programs":[688211]}},{"id":523472,"name":"KVGR","year":"2001","type":"platform","links":{"programs":[979234,154422,267418,527023]}},{"id":856471,"name":"KVS","year":"2008","type":"platform","links":{"programs":[241618,453597,448334,154422]}},{"id":351598,"name":"LTC","year":"2016","type":"platform","links":{"programs":[380679,380679]}},{"id":849729,"name":"TCVA","year":"2018","type":"platform","links":{"programs":[497540,448334]}},{"id":596292,"name":"UTC","year":"2004","type":"platform","links":{"programs":[380679]}},{"id":637613,"name":"R-48","year":"2016","type":"platform","links":{"programs":[453597,688211,380679]}},{"id":671205,"name":"A352","year":"2009","type":"platform","links":{"programs":[154422,212931,689633,154422]}},{"id":681756,"name":"A354","year":"2011","type":"platform","links":{"programs":[689633]}},{"id":319800,"name":"A35x","year":"2008","type":"platform","links":{"programs":[497540,457352,380679,267418,154422]}},{"id":587988,"name":"DEF","year":"2017","type":"platform","links":{"programs":[154422,212931]}},{"id":709851,"name":"DS604","year":"2008","type":"platform","links":{"programs":[906309]}},{"id":381822,"name":"H302","year":"2018","type":"platform","links":{"programs":[497540,267418,191421,154422,191421]}},{"id":223020,"name":"H304","year":"2007","type":"platform","links":{"programs":[688211]}},{"id":609482,"name":"H30x","year":"2008","type":"platform","links":{"programs":[212931]}},{"id":962177,"name":"M/H","year":"2007","type":"platform","links":{"programs":[379501]}},{"id":124538,"name":"CFA 32","year":"2009","type":"platform","links":{"programs":[979234]}},{"id":189816,"name":"CFA 34","year":"2006","type":"platform","links":{"programs":[689633]}},{"id":656665,"name":"CFA 3x","year":"2001","type":"platform","links":{"programs":[993477,457352,140007,267418,979234]}},{"id":315050,"name":"MH 6","year":"2010","type":"platform","links":{"programs":[497540,191421,527023]}},{"id":289866,"name":"MH/WH","year":"2014","type":"platform","links":{"programs":[154422,527023,379501]}},{"id":900877,"name":"MW6","year":"2003","type":"platform","links":{"programs":[979234]}},{"id":630767,"name":"RAM 5","year":"2010","type":"platform","links":{"programs":[689633,662248,267418,380679]}},{"id":546004,"name":"WG","year":"2005","type":"platform","links":{"programs":[906309,154907]}},{"id":493167,"name":"WG 6","year":"2000","type":"platform","links":{"programs":[688211]}},{"id":883059,"name":"WG 7","year":"2015","type":"platform","links":{"programs":[906309]}},{"id":251606,"name":"WH 7","year":"2001","type":"platform","links":{"programs":[380679,212931]}},{"id":267289,"name":"2400DR","year":"2007","type":"platform","links":{"programs":[267418,212931,906309]}},{"id":309905,"name":"G510","year":"2018","type":"platform","links":{"programs":[689633,241618]}},{"id":790427,"name":"G825","year":"2004","type":"platform","links":{"programs":[191421]}},{"id":230536,"name":"GTLB825","year":"2005","type":"platform","links":{"programs":[140007,191421]}},{"id":944209,"name":"MODEL 40 (GDX)","year":"2006","type":"platform","links":{"programs":[689633]}},{"id":972639,"name":"DSX","year":"2017","type":"platform","links":{"programs":[497540,497540]}}]');

/***/ }),

/***/ 70392:
/*!****************************************************************!*\
  !*** ./projects/uv-ui-prototype/src/sample-data/programs.json ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":154907,"year":"2000","name":"WHFA-196","type":"program","links":{"configurations":[457715,228268,313146,517511,894941,457715,663800,335038,459696,959625,734861,499072]}},{"id":380679,"year":"2001","name":"AKX-101","type":"program","links":{"configurations":[459696,437886,801442,145114,730401,624785]}},{"id":191421,"year":"2002","name":"EZA-697","type":"program","links":{"configurations":[663800,381280,172518,609733,618494,997372,459696,301819]}},{"id":906309,"year":"2003","name":"PBYJ-873","type":"program","links":{"configurations":[437886,437701,145114,381280,848435,609733,928926,459696,960333]}},{"id":527023,"year":"2004","name":"AMYU-897","type":"program","links":{"configurations":[437886,355054,377399,145114,681471,973230,950877,486418,378308]}},{"id":379501,"year":"2005","name":"LQBY-17","type":"program","links":{"configurations":[486418,629668,117993,517706,369328,106250,950877,165475,627255]}},{"id":212931,"year":"2006","name":"FKKR-176","type":"program","links":{"configurations":[663800,437701,515040]}},{"id":979234,"year":"2007","name":"AGSC-053","type":"program","links":{"configurations":[165475,729252,369328,541200,228268,627255,959625]}},{"id":140007,"year":"2008","name":"RQXB-738","type":"program","links":{"configurations":[479417,309190,515040,932347,738748,430832,486418]}},{"id":497540,"year":"2009","name":"FERO-700","type":"program","links":{"configurations":[663800,369328,609733,457062,479417,172518]}},{"id":662248,"year":"2010","name":"OGA-546","type":"program","links":{"configurations":[890326,681471,932347,914695,932347,459696,378308]}},{"id":689633,"year":"2011","name":"ADTC-116","type":"program","links":{"configurations":[738748,165475,801442,145114,303594,187808,960333,982508,494688]}},{"id":448334,"year":"2012","name":"ZRM-86","type":"program","links":{"configurations":[627255,493567]}},{"id":457352,"year":"2013","name":"KIP-85","type":"program","links":{"configurations":[627255,629668,981160,801442,570859,997928]}},{"id":993477,"year":"2014","name":"LAUU-61","type":"program","links":{"configurations":[493567,355054,106250,378308]}},{"id":154422,"year":"2015","name":"LVH-08","type":"program","links":{"configurations":[493567,437701,432428,609733,583143,157578,499072]}},{"id":267418,"year":"2016","name":"RJEU-652","type":"program","links":{"configurations":[369328,494688,801442,534873,283373]}},{"id":241618,"year":"2017","name":"QDUF-602","type":"program","links":{"configurations":[437701,914695,625606,890326,686185]}},{"id":453597,"year":"2018","name":"VALO-460","type":"program","links":{"configurations":[301819,618494,486418,381280,129595,969644,627255,499072]}},{"id":688211,"year":"2019","name":"QKQ-58","type":"program","links":{"configurations":[479417,303594,729252,432428,369328,534873,378375,410272,437886]}}]');

/***/ })

}]);