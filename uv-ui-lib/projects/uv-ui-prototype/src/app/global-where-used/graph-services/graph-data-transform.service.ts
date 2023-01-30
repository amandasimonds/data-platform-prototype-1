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

    public transformConfigDataToTreeGraphData(value?: number): GraphData {
        const subTree = [];
        const chosenValue = value ? value : 100;

        // for (let item of this.configData) {
        //     subTree.push({
        //         id: item.id.toString(),
        //         label: item.name,
        //         type: 'rect'
        //     })
        // };

        for (let i = 0; i < chosenValue; i++) {
            subTree.push({
                id: i.toString(),
                label: 'Component' + i.toString(),
                type: 'rect'
            })
        };

        const graphData = {
            isRoot: true,
            id: 'root',
            label: 'Root',
            type: 'rect',
            children: [
                {
                    id: 'SubTree',
                    children: subTree
                }
            ]
        };
        console.log(graphData);
        return graphData;
    }
}
