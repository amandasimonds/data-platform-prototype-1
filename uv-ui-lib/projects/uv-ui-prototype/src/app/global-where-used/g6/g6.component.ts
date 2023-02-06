import { AfterViewInit, ChangeDetectionStrategy, Component, OnChanges, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import G6, { Graph, GraphData, ModeType } from '@antv/g6';
import { G6TreeNode } from './node';
import { GraphTransformDataService } from '../graph-services/graph-data-transform.service';
import { G6RegisterNodeService } from '../graph-services/register-node.service';
import { GraphEventService } from '../graph-services/graph-event.service';
import { GraphLayoutService } from '../graph-services/graph-layout.service';

@Component({
  selector: 'g6-graph',
  templateUrl: './g6.component.html',
  styleUrls: ['./g6.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class G6Component implements AfterViewInit, OnChanges {

  public graphData: GraphData = [];
  public displayNodeCountInputs = false;
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

  constructor(
    private graphDataService: GraphTransformDataService,
    private registerNodeService: G6RegisterNodeService,
    private graphEventService: GraphEventService,
    private graphLayoutService: GraphLayoutService
  ) {
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
      minZoom: 0.00000001,
      modes: {
        default: this.defaultModes
      },
      defaultCombo: {
        type: "circle",
        /* The minimum size of the combo. combo 最小大小 */
        size: [50, 50],
        /* style for the keyShape */
        style: {
          lineWidth: 1
        },
        labelCfg: {
          position: "top"
        }
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
    this.graphEventService.initEvents(this.graph);
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
    const formInput = this.graphControlForm.controls
    this.graphData = this.graphDataService.getComboData(formInput.ecmCount.value, formInput.softwareBuildCount.value, formInput.softwareVersionCount.value, formInput.softwareComponentCount.value);
    this.graph.read(this.graphData);
  }

  public loadComboLayout(): void {
    const layout =
    {
      type: 'comboCombined',
      // center: [0,0],
      innerLayout: new G6.Layout['grid']()
    }

    this.graph.updateLayout(layout);
    this.graph.fitView();
    console.log(this.graph);
  }

  public loadDagreLayout(): void {
    this.graphLayoutService.loadDagreLayout(this.graph);
  }
}

declare global {
  interface Window { G6Graph: Graph; }
}