import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import G6, { Graph, GraphData, ModeType } from '@antv/g6';
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
export class G6Component implements AfterViewInit {

  public graphData: GraphData = [];
  public paginator = false;
  public selectedComboForPaginator: any[] = [];
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
    this.registerNodeService.registerCustomNodes();
    this.graphData = this.graphDataService.getComboData();
    this.graphEventService.paginator$.subscribe((item: any) => {
      if (item) {
        this.paginator = true;
        this.selectedComboForPaginator = item;
        console.log(this.paginator, this.selectedComboForPaginator);
        this.paginateNodes(item);
      } else {
        this.paginator = false;
        this.selectedComboForPaginator = item;
        console.log(this.paginator, this.selectedComboForPaginator);
      }
    });
  }

  public ngAfterViewInit(): void {
    const el = this.graphContainer.nativeElement;
    this.resizeObserver.observe(el);
    el.onselectstart = () => { return false }

    this.graph = new G6.Graph({
      container: el,
      width: el.width,
      height: el.height,
      minZoom: 0.00000001,
      modes: {
        default: this.defaultModes
      },
      fitCenter: true
    });

    this.graphReady.emit(this.graph);
    this.graph.read(this.graphData);
    this.graph.fitView();
    this.loadComboLayout();
    this.graphEventService.initEvents(this.graph);
  }

  public ngOnDestroy(): void {
    // unsure if this is actually necessary since the entire observer should get GC'd along with the component
    this.resizeObserver.unobserve(this.graphContainer.nativeElement);
  }

  public paginateNodes(combo: any) {
    const model = combo.get('model');
    model.collapsed ? this.graph.expandCombo(combo) : null;
    console.log(combo.get('model').collapsed);
    console.log(combo.x);
    console.log('paginateNodes method', combo.getNodes());
    const hiddenNodes = combo.getNodes().slice(0, 5)
    console.log(hiddenNodes);
    hiddenNodes.forEach((node: any) => {
      this.graph.hideItem(node)
    })
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
      center: [0, 0],
      rankdir: 'LR',
      comboSep: 100,
      nodeSep: 5,
      preventComboOverlap: true,
      preventOverlapPadding: 20,
      innerLayout: new G6.Layout['grid'](), //random, grid, forceAtlas2
      comboPadding: (d: any) => 100
      // spacing: (d: any) => {
      //   // d is a node
      //   if (d.type === 'combo-node') {
      //     return 100;
      //   }
      //   return 100;
      // }
    }

    this.graph.updateLayout(layout);
    this.graph.fitView();
  }

  public loadDagreLayout(): void {
    this.graphLayoutService.loadDagreLayout(this.graph);
  }
}

declare global {
  interface Window { G6Graph: Graph; }
}