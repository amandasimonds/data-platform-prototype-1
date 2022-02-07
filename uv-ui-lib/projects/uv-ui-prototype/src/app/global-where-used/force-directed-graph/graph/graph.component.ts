import { Component, OnInit, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as platformData from '../../../../sample-data/platforms.json';
import * as programData from '../../../../sample-data/programs.json';
import * as configData from '../../../../sample-data/configurations.json';
import * as optionData from '../../../../sample-data/options.json';
import * as parts2Data from '../../../../sample-data/parts.json';
import * as material2Data from '../../../../sample-data/materials.json';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {

  platformObj = platformData;
  programObj = programData;
  configObj = configData;
  optionObj = optionData;
  parts2Obj = parts2Data;
  material2Obj = material2Data;

  option = {
    title: {
      text: 'Les Miserables',
      subtext: 'Default layout',
      top: 'bottom',
      left: 'right'
    },
    tooltip: {},
    legend: [
      ['Platform', 'Family', 'Configurations', 'Options', 'Parts']
    ],
    series: [
      {
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
      }
    ]
  };

  nodeGraph = {
    title: {
      text: 'Sample Graph',
      top: 'bottom',
      left: 'right'
    },
    legend: {
      data: [
        { name: 'Sample Graph' }
      ]
    },
    tooltip: {},
    series: [
      {
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
          draggable: true,
        }
      }
    ],

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
        draggable: true,
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
