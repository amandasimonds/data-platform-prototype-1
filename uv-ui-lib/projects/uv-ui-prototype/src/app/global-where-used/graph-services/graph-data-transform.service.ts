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

        const comboData2 = comboSample;
        const comboData = [{
            id: 'a',
            label: 'ECM',
        },
        {
            id: 'b',
            label: 'Software Build',
        },
        {
            id: 'c',
            label: 'Software Version',
        },
        {
            id: 'd',
            label: 'Software Component',
            // parentId: 'b',
        },];
        const nodeData: {id: string; label: string; comboId?: string;}[] = [{
            id: 'ESN',
            label: 'ESN',
        }];
        const edgeData = [{
            source: 'a',
            target: 'b',
            label: 'ESM -> Software Build',
            size: 3,
            labelCfg: {
                autoRotate: true,
                style: {
                    stroke: 'white',
                    lineWidth: 5,
                    fontSize: 20,
                },
            },
            style: {
                stroke: 'red',
            },
        },
        {
            source: 'b',
            target: 'c',
            label: 'Software Build -> Software Version',
            size: 3,
            labelCfg: {
                autoRotate: true,
                style: {
                    stroke: '#fff',
                    lineWidth: 5,
                    fontSize: 20,
                },
            },
            style: {
                stroke: 'blue',
            }
        }];

        for (let i = 0; i < 30; i++) {
            nodeData.push({
                id: 'ESM' + i.toString(),
                label: 'ESM' + i.toString(),
                comboId: 'a'
            }
            )
        };

        for (let i = 0; i < 10; i++) {
            nodeData.push({
                id: 'SoftwareBuild' + i.toString(),
                label: 'Software Build' + i.toString(),
                comboId: 'b'
            }
            )
        };

        for (let i = 0; i < 50; i++) {
            nodeData.push({
                id: 'SoftwareVersion' + i.toString(),
                label: 'Software Version' + i.toString(),
                comboId: 'c'
            }
            )
        };

        const graphData = {
            combos: comboData,
            nodes: nodeData,
            edges: edgeData
        };

        console.log('combo data', comboData2);
        return comboData2;
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
