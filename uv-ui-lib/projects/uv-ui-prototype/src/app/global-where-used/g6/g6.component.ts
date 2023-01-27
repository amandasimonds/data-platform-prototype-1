import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { Graph, ModeType } from '@antv/g6';
import configData from '../../../sample-data/configurations.json';
import {GraphTransformDataService} from '../graph-services/graph-data-transform.service';

@Component({
  selector: 'g6-graph',
  templateUrl: './g6.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class G6Component implements AfterViewInit, OnDestroy {

  public configData = configData;

  public data = {
    nodes: [
      {
        id: 'node1',
        label: 'node1',
      },
      {
        id: 'node2',
        label: 'node2',
      },
    ],
    edges: [
      {
        source: 'node1',
        target: 'node2',
      },
    ],
  };

  @Input('ngStyle')
  public style: any = {
    width: '100%',
    height: 'calc(100vh - 64px)',
    border: '3px solid gray'
  };

  @Input()
  public defaultModes: ModeType[] = [
    'drag-node',
    'drag-canvas',
    'drag-combo',
    'zoom-canvas',
    'click-select',
    'brush-select'
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

    this.graph = new Graph({
      container: el,
      width: el.width,
      height: el.height,
      modes: {
        default: this.defaultModes
      },
      plugins: this.plugins
    });

    this.graphReady.emit(this.graph);
    this.graph.data(this.data);
    this.graph.read(this.data);

    this.graphDataService.transformConfigDataToGraphData();
  }

  public ngOnDestroy(): void {
    // unsure if this is actually necessary since the entire observer should get GC'd along with the component
    this.resizeObserver.unobserve(this.graphContainer.nativeElement);
  }
}

declare global {
  interface Window { G6Graph: Graph; }
}