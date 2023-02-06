import { AfterViewInit, ChangeDetectionStrategy, Component, OnChanges, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import G6, { Graph, GraphData, ModeType } from '@antv/g6';
import { G6TreeNode } from './node';
import { GraphTransformDataService } from '../graph-services/graph-data-transform.service';
import { G6RegisterNodeService } from '../graph-services/register-node.service';

@Component({
  selector: 'g6-graph',
  templateUrl: './g6.component.html',
  styleUrls: ['./g6.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class G6Component implements AfterViewInit, OnChanges {

  public graphData: GraphData = [];
  public graphControlForm: FormGroup = new FormGroup({
    ecmCount: new FormControl(''),
    softwareBuildCount: new FormControl(''),
    softwareVersionCount: new FormControl(''),
    softwareComponentCount: new FormControl(''),
  });

  @Input('ngStyle')
  public style: any = {
    width: '100%',
    height: 'calc(100vh - 64px)',
  };

  @Input()
  public defaultModes: ModeType[] = [
    // 'drag-node',
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

  constructor(private graphDataService: GraphTransformDataService, private registerNodeService: G6RegisterNodeService) {
    this.graphData = this.graphDataService.getComboData();
  }

  public ngAfterViewInit(): void {
    const el = this.graphContainer.nativeElement;
    this.resizeObserver.observe(el);
    el.onselectstart = () => { return false }

    // this.registerNodeService.registerNode();

    this.graph = new G6.Graph({
      container: el,
      width: el.width,
      height: el.height,
      modes: {
        default: this.defaultModes
      },
      fitCenter: true
    });

    // this.graph.node(function (node) {
    //   return {
    //     size: 16,
    //     anchorPoints: [
    //       [0, 0.5],
    //       [1, 0.5],
    //     ],
    //     style: {
    //       fill: '#C6E5FF',
    //       stroke: '#5B8FF9',
    //     },
    //     label: node.id,
    //     labelCfg: {
    //       position: node.children && node.children.length > 0 ? 'left' : 'right',
    //       offset: 5,
    //     },
    //   };
    // });

    this.graphReady.emit(this.graph);
    this.graph.read(this.graphData);
    this.graph.fitView();
    this.loadComboLayout();
    this.initEvents();
    console.log('init', this.graph);
  }

  public ngOnChanges() {
    this.graph.layout();
    this.graph.render();
  }

  public ngOnDestroy(): void {
    // unsure if this is actually necessary since the entire observer should get GC'd along with the component
    this.resizeObserver.unobserve(this.graphContainer.nativeElement);
  }

  public updateGraph(): void {
    // this.graphData = this.graphDataService.getTreeGraphData(this.graphControlForm.controls.nodeCount.value);
    this.graph.read(this.graphData);
  }

  public initEvents(): void {

    this.graph.on('combo:click', (e: any) => {
      // if (e.target.get('name') === 'combo-marker-shape') {
      //   // graph.collapseExpandCombo(e.item.getModel().id);
      this.graph.collapseExpandCombo(e.item);
      if (this.graph.get('layout')) this.graph.layout();
      else this.graph.refreshPositions();
      // }
    });
  }

  public loadComboLayout() {
    const layout =
    {
      type: 'comboCombined',
      spacing: 5,
      outerLayout: new G6.Layout['forceAtlas2']({
        kr: 10
      })
    }

    this.graph.updateLayout(layout);
    this.graph.fitView();
    console.log(this.graph);
  }

  public loadDagreLayout() {
    const layout =
    {
      type: 'dagre',
      // begin: [100, this.graph.getHeight() / 2],
      center: [this.graph.getWidth() / 2, this.graph.getHeight() / 2],
      rankdir: 'LR',
      // nodeSep: 100,
      // comboSep: 100,
      // nodesep: 0,
      sortByCombo: true
    }

    this.graph.updateLayout(layout);
    this.graph.fitView();
    console.log(this.graph);
  }
}
declare global {
  interface Window { G6Graph: Graph; }
}