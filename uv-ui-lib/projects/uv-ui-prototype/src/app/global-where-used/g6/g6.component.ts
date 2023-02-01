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
    // this.graphData = this.graphDataService.transformConfigDataToGraphData();
    this.graphData = this.graphDataService.getTreeGraphData();
    // this.graphData = this.graphDataService.getComboData();

    // this.graph = new G6.TreeGraph({
    //   container: el,
    //   width: el.width,
    //   height: el.height,
    //   modes: {
    //     default: this.defaultModes
    //   },
    //   layout: {
    //     type: 'dendrogram',
    //     direction: 'LR',
    //     nodeSep: 50,
    //     rankSep: 100,
    //     center: [500, 300],
    //   },
    //   fitCenter: true
    // });

    this.graph = new G6.TreeGraph({
      container: el,
      width: el.width,
      height: el.height,
      modes: {
        default: [
          {
            type: 'collapse-expand',
            // onChange: function onChange(item, collapsed) {
            //   const data = item.get('model');
            //   this.graph.updateItem(item, {
            //     collapsed,
            //   });
            //   data.collapsed = collapsed;
            //   return true;
            // },
          },
          'drag-canvas',
          'zoom-canvas',
        ],
      },
      defaultNode: {
        type: 'tree-node',
        anchorPoints: [
          [0, 0.5],
          [1, 0.5],
        ],
      },
      layout: {
        type: 'compactBox',
        direction: 'LR',
      },
      fitCenter: true
    });

    // this.graph = new G6.Graph({
    //   container: el,
    //   width: el.width,
    //   height: el.height,
    //   modes: {
    //     default: this.defaultModes
    //   },
    //   layout: {
    //     type: 'dagre',
    //     rankdir: 'LR',
    //     align: 'UL',
    //     controlPoints: true,
    //     nodesepFunc: () => 1,
    //     ranksepFunc: () => 1,
    //   },
    //   defaultNode: {
    //     style: {
    //       lineWidth: 2,
    //       stroke: '#5B8FF9',
    //       fill: '#C6E5FF',
    //     },
    //   },
    //   defaultEdge: {
    //     size: 1,
    //     color: 'black'
    //   },
    //   fitCenter: true
    // });

    this.graphReady.emit(this.graph);
    this.graph.read(this.graphData);
    this.graph.fitView();
  }

  public ngOnDestroy(): void {
    // unsure if this is actually necessary since the entire observer should get GC'd along with the component
    this.resizeObserver.unobserve(this.graphContainer.nativeElement);
  }

  public updateGraph(): void {
    this.graphData = this.graphDataService.getTreeGraphData(this.graphControlForm.controls.nodeCount.value);
    this.graph.read(this.graphData);
  }
}
declare global {
  interface Window { G6Graph: Graph; }
}