import { InjectionToken } from '@angular/core';
import { Graph, GraphData } from '@antv/g6';

export interface GraphEventService {
    setGraph(graph: Graph): void;
    onLoad(graphData: GraphData): void;
}

export const GRAPH_EVENT_SERVICE: InjectionToken<GraphEventService> =
  new InjectionToken<GraphEventService>('Event service to be used by the graph');
