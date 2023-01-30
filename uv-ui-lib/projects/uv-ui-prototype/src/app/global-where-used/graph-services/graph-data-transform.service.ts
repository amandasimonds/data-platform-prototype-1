import { Injectable } from '@angular/core';
import { EdgeConfig, Graph, GraphData, NodeConfig } from '@antv/g6';
import configData from '../../../sample-data/configurations.json';

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
        console.log(graphData);
        return graphData;
    }

    public transformConfigDataToTreeGraphData(): GraphData {
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
            isRoot: true,
            id: this.configData[0].id.toString(),
            style: {
                fill: 'gray'
            },
            children: [{
                id: 'SubTreeNode1',
                raw: {},
                children: [{
                    id: 'SubTreeNode1.1'
                }, {
                    id: 'SubTreeNode1.2',
                    children: [{
                        id: 'SubTreeNode1.2.1'
                    }, {
                        id: 'SubTreeNode1.2.2'
                    }, {
                        id: 'SubTreeNode1.2.3'
                    }]
                }]
            }, {
                id: 'SubTreeNode2',
                children: [{
                    id: 'SubTreeNode2.1'
                }]
            }, {
                id: 'SubTreeNode3',
                children: [{
                    id: 'SubTreeNode3.1'
                }, {
                    id: 'SubTreeNode3.2'
                }, {
                    id: 'SubTreeNode3.3'
                }]
            }, {
                id: 'SubTreeNode4'
            }, {
                id: 'SubTreeNode5'
            }, {
                id: 'SubTreeNode6'
            }, {
                id: 'SubTreeNode7'
            }, {
                id: 'SubTreeNode8'
            }, {
                id: 'SubTreeNode9'
            }, {
                id: 'SubTreeNode10'
            }, {
                id: 'SubTreeNode11'
            }]
        };
        console.log(graphData);
        return graphData;
    }
}
