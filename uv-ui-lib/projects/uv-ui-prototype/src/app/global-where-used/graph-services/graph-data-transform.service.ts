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

    public getComboData(): GraphData {

        const labelCfg = {
            autoRotate: true,
            style: {
                stroke: 'white',
                lineWidth: 5,
                fontSize: 20,
            },
        }

        const comboData2 = comboSample;
        const comboData = [{
            id: 'a',
            label: 'ECM',
        },
        {
            id: 'b',
            label: 'Software Build',
            collapsed: true
        },
        {
            id: 'c',
            label: 'Software Version',
            collapsed: true
        },
        {
            id: 'd',
            label: 'Software Component',
        },
        {
            id: 'e',
            label: 'ComboChild', 
            parentId: 'c',
        }];
        const nodeData: { id: string; label: string; comboId?: string; }[] = [{
            id: 'ESN',
            label: 'ESN',
        }];
        const edgeData = [
            {
                source: 'ESN',
                target: 'a',
                label: 'ESN -> ECM',
                size: 3,
                labelCfg: labelCfg,
                style: {
                    stroke: 'red',
                },
            },
            {
                source: 'a',
                target: 'b',
                label: 'ECM -> Software Build',
                size: 3,
                labelCfg: labelCfg,
                style: {
                    stroke: 'red',
                },
            },
            {
                source: 'b',
                target: 'c',
                label: 'Software Build -> Software Version',
                size: 3,
                labelCfg: labelCfg,
                style: {
                    stroke: 'blue',
                }
            },
            {
                source: 'c',
                target: 'd',
                label: 'Software Version -> Software Component',
                size: 3,
                labelCfg: labelCfg,
                style: {
                    stroke: 'blue',
                }
            },];

        for (let i = 0; i < 30; i++) {
            nodeData.push({
                id: 'ECM' + i.toString(),
                label: 'ECM' + i.toString(),
                comboId: 'a'
            }
            )
        };

        for (let i = 0; i < 70; i++) {
            nodeData.push({
                id: 'SB' + i.toString(),
                label: 'SB' + i.toString(),
                comboId: 'b'
            }
            )
        };

        for (let i = 0; i < 20; i++) {
            nodeData.push({
                id: 'SV' + i.toString(),
                label: 'SV' + i.toString(),
                comboId: 'c'
            }
            )
        };

        for (let i = 0; i < 20; i++) {
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
