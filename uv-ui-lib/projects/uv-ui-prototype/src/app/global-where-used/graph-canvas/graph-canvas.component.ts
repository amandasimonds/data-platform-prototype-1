import { ChangeDetectionStrategy, Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Graph, GraphData } from '@antv/g6';
import { GraphEventService, GRAPH_EVENT_SERVICE } from '../graph-services/graph-event.service';

@Component({
  selector: 'atlas-graph-canvas',
  templateUrl: './graph-canvas.component.html',
  styleUrls: ['./graph-canvas.component.scss']
})
export class GraphCanvasComponent implements OnChanges {

  @Input() public graphData!: GraphData | null;

  public defaultPlugins: any[] = [];

  constructor(
    @Inject(GRAPH_EVENT_SERVICE) private eventService: GraphEventService
  ) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.graphData?.currentValue) {
      this.eventService.onLoad(changes.graphData.currentValue);
    }
  }

  public graphReady(graph: Graph): void {

    this.eventService.setGraph(graph);

    this.eventService.onLoad(this.graphData as GraphData);
  }

}
