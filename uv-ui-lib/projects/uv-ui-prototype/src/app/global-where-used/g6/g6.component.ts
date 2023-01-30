import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import G6, { Graph, GraphData, ModeType } from '@antv/g6';
import configData from '../../../sample-data/configurations.json';
import { GraphTransformDataService } from '../graph-services/graph-data-transform.service';

@Component({
  selector: 'g6-graph',
  templateUrl: './g6.component.html',
  styleUrls: ['./g6.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class G6Component implements AfterViewInit, OnDestroy {

  public configData = configData;
  public graphData: GraphData = [];
  public graphControlForm: FormGroup = new FormGroup({
    nodeCount: new FormControl(''),
});

  @Input('ngStyle')
  public style: any = {
    width: '100%',
    height: 'calc(100vh - 64px)',
  };

  @Input()
  public defaultModes: ModeType[] = [
    'drag-node',
    'drag-canvas',
    'drag-combo',
    'zoom-canvas',
    'click-select',
    'brush-select',
    { type: 'collapse-expand' }
  ];
  @Input()
  public plugins: any[] = [];

  @Output()
  public readonly graphReady = new EventEmitter<Graph>();

  @ViewChild('g6GraphContainer')
  private graphContainer!: ElementRef;

  private resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
    if (this.graphContainer?.nativeElement && this.graph) {
      const entry = entries.find((e: ResizeObserverEntry) => e.target === this.graphContainer.nativeElement);
      if (entry) {
        this.graph.changeSize(entry.contentRect.width, entry.contentRect.height);
      }
    }
  });

  private graph!: Graph;

  constructor(private graphDataService: GraphTransformDataService) { }

  public ngAfterViewInit(): void {
    const el = this.graphContainer.nativeElement;
    this.resizeObserver.observe(el);
    el.onselectstart = () => { return false }
    this.graphData = this.graphDataService.transformConfigDataToTreeGraphData();
    this.graph = new G6.TreeGraph({
      container: el,
      width: el.width,
      height: el.height,
      modes: {
        default: this.defaultModes
      },
      layout: {
        type: 'dendrogram',
        direction: 'LR',
        nodeSep: 50,
        rankSep: 100,
        center: [500, 300],
      },
      fitCenter: true
    });

    this.graphReady.emit(this.graph);
    this.graph.read(this.graphData);
  }

  public ngOnDestroy(): void {
    // unsure if this is actually necessary since the entire observer should get GC'd along with the component
    this.resizeObserver.unobserve(this.graphContainer.nativeElement);
  }

  public updateGraph(): void {
    this.graphData = this.graphDataService.transformConfigDataToTreeGraphData(this.graphControlForm.controls.nodeCount.value);
    this.graph.read(this.graphData);
  }
}
declare global {
  interface Window { G6Graph: Graph; }
}