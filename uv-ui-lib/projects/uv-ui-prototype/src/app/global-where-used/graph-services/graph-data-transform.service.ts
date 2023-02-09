import { Injectable } from '@angular/core';
import { EdgeConfig, GraphData, NodeConfig } from '@antv/g6';
import configData from '../../../sample-data/configurations.json';
import { comboSample } from '../g6/sample_data/combo-sample';

@Injectable()
export class GraphTransformDataService {

    public configData = configData;

    public transformConfigDataToGraphData(): GraphData {
        const nodes: NodeConfig[] = [];
        const edges: EdgeConfig[] = [];

        for (let item of this.configData) {
            nodes.push({
                id: item.id.toString(),
                label: item.name
            })
        };

        for (let item of this.configData) {
            edges.push({
                source: item.id.toString(),
                target: item.name
            })
        };

        const graphData = {
            nodes,
            edges
        }
        return graphData;
    }

    public getComboData(ecmCount?: number, softwareBuildCount?: number, softwareVersionCount?: number, softwareComponentCount?: number,): GraphData {

        const ecmCountInput = ecmCount ? ecmCount : 30;
        const softwareBuildCountInput = softwareBuildCount ? softwareBuildCount : 70;
        const softwareVersionCountInput = softwareVersionCount ? softwareVersionCount : 10;
        const softwareComponentCountInput = softwareComponentCount ? softwareComponentCount : 400;

        const labelCfg = {
            autoRotate: true,
            style: {
                stroke: 'white',
                lineWidth: 5,
                fontSize: 20,
                position: 'top',
            },
        }

        const comboLabel = {
            style: {
                lineWidth: 5,
                fontSize: 20,
            },
        }

        const comboData2 = comboSample;
        const comboData = [{
            id: 'a',
            label: 'ECM',
            collapsed: true,
            labelCfg: comboLabel,
            type: 'combo-node',
            // x: 100,
        },
        {
            id: 'b',
            label: 'Software Build',
            collapsed: true,
            labelCfg: comboLabel,
            type: 'combo-node',
            x: 100
        },
        {
            id: 'c',
            label: 'Software Version',
            collapsed: true,
            labelCfg: comboLabel,
            type: 'combo-node',
            x: 100
        },
        {
            id: 'd',
            label: 'Software Component',
            collapsed: true,
            labelCfg: comboLabel,
            type: 'combo-node',
            x: 100
        },
            // {
            //     id: 'e',
            //     label: 'ComboChild',
            //     labelCfg: comboLabel,
            //     type: 'combo-node',
            //     parentId: 'c',
            //     x: 100
            // }
        ];
        const nodeData: any[] = [{
            id: 'ESN',
            label: 'ESN',
            labelCfg: comboLabel,
            x: 10,
            y: 10
        }];
        const edgeData = [
            {
                source: 'ESN',
                target: 'a',
                size: 3,
            },
            {
                source: 'a',
                target: 'b',
                label: 'ECM -> Software Build',
                size: 3,
                labelCfg: labelCfg,
            },
            {
                source: 'b',
                target: 'c',
                size: 3,
            },
            {
                source: 'c',
                target: 'd',
                size: 3,
            },
            {
                source: 'c',
                target: 'd',
                size: 3,
            },
            {
                source: 'ECM1',
                target: 'SB2',
            },
            {
                source: 'ECM2',
                target: 'SB3',
            }, {
                source: 'ECM4',
                target: 'SB7',
            }, {
                source: 'ECM7',
                target: 'SB6',
            },
            {
                source: 'ECM20',
                target: 'SB7',
            },
            {
                source: 'ECM15',
                target: 'SB63',
            },];

        for (let i = 0; i < ecmCountInput; i++) {
            nodeData.push({
                id: 'ECM' + i.toString(),
                label: 'ECM' + i.toString(),
                comboId: 'a'
            }
            )
        };

        for (let i = 0; i < softwareBuildCountInput; i++) {
            nodeData.push({
                id: 'SB' + i.toString(),
                label: 'SB' + i.toString(),
                comboId: 'b'
            }
            )
        };

        for (let i = 0; i < softwareVersionCountInput; i++) {
            nodeData.push({
                id: 'SV' + i.toString(),
                label: 'SV' + i.toString(),
                comboId: 'c'
            }
            )
        };

        for (let i = 0; i < softwareComponentCountInput; i++) {
            nodeData.push({
                id: 'SC' + i.toString(),
                label: 'SC' + i.toString(),
                comboId: 'd'
            }
            )
        };

        const graphData = {
            combos: comboData,
            nodes: nodeData,
            edges: edgeData
        };

        console.log('combo data', graphData);
        return graphData;
    }

    public getTreeGraphData(value?: number): GraphData {
        const ecmTree = [];
        const chosenValue = value ? value : 10;

        // for (let item of this.configData) {
        //     subTree.push({
        //         id: item.id.toString(),
        //         label: item.name,
        //         type: 'rect'
        //     })
        // };

        for (let i = 0; i < chosenValue; i++) {
            ecmTree.push({
                id: i.toString(),
                label: 'Component' + i.toString(),
                comboId: 'a',
                type: 'tree-node',
                children: [
                    {
                        id: '1',
                        label: 'Component',
                        comboId: 'a',
                        type: 'tree-node',
                    },
                    {
                        id: '2',
                        label: 'Component',
                        comboId: 'a',
                        type: 'tree-node',
                    },
                    {
                        id: '3',
                        label: 'Component',
                        comboId: 'a',
                        type: 'tree-node',
                    }
                ]
            })
        };

        const graphData = {
            isRoot: true,
            id: 'root',
            label: 'ESN',
            type: 'tree-node',
            children: [
                {
                    id: 'ECM',
                    children: ecmTree,
                    collapsed: true
                }
            ],
            combos: [
                {
                    id: 'a',
                    label: 'Combo A',
                },
                {
                    id: 'b',
                    label: 'Combo B',
                },
            ]
        };
        console.log(graphData);
        return graphData;
    }
}
