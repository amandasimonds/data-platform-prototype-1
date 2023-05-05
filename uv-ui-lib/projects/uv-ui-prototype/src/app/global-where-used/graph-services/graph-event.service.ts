import { Injectable } from '@angular/core';
import { Graph, GraphData } from '@antv/g6';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class GraphEventService {

  public showPaginator = false;

  public paginator = new BehaviorSubject<any>(null);

  public get paginator$(): Observable<any> {
    return this.paginator.asObservable();
  }

  public setPaginator(item: any): void {
    this.paginator.next(item);
  }

  public initEvents(graph: Graph): void {

    graph.on('combo:click', (e: any) => {
      if (e.target.get('name') !== 'next-page') {
        // graph.collapseExpandCombo(e.item.getModel().id);
        graph.collapseExpandCombo(e.item);
        if (graph.get('layout')) graph.layout();
        else graph.refreshPositions();
      }
    });

    graph.on('combo:click', (e: any) => {
      if (e.target.get('name') === 'combo-paginator') {
        if( this.showPaginator) {
          console.log('paginator is open', this.showPaginator);
          this.setPaginator(null);
          this.showPaginator = false;
        } else {
          console.log('paginator is closed', this.showPaginator);
          this.showPaginator = true;
          this.setPaginator(e.item);
          console.log('paginator is was opened:', this.showPaginator);
        }
        if (graph.get('layout')) graph.layout();
        else graph.refreshPositions();
      }
    });
  }
}