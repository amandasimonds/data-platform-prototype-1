import { Injectable } from '@angular/core';
import { EdgeConfig, GraphData, NodeConfig } from '@antv/g6';
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
        return graphData;
    }

    public transformConfigDataToTreeGraphData(): GraphData {
        const subTree = [];

        for (let item of this.configData) {
            subTree.push({
                id: item.id.toString(),
                label: item.name,
                type: 'rect'
            })
        };

        const graphData = {
            isRoot: true,
            id: '1',
            label: 'Root',
            type: 'rect',
            children: [
                {
                    id: 'SubTree',
                    children: subTree
                }
            ]
        };
        return graphData;
    }
}
