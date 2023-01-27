import { Injectable } from '@angular/core';
import { Graph, GraphData } from '@antv/g6';
import configData from '../../../sample-data/configurations.json';

@Injectable()
export class GraphTransformDataService {

    public configData = configData;

    public transformConfigDataToGraphData() {
        for (let item of this.configData) {
            const nodes = [
                {
                    id: item.id,
                    label: item.name
                }
            ]
            const edges = [
                {
                    source: item.id,
                    target: item.id
                }
            ]

            const graphData = {
                nodes,
                edges
            }
            console.log(graphData);

        }
    }
}
