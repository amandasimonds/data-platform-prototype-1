import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'g6-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() public combo: any;

  public nodes: any[] = [];
  public title = '';
  public currentPage = 1;
  public pages = 1;
  public page = 1;

  public pageSizeOptions = [10, 20, 50, 100];
  public pageSize = 10;
  public totalItemsCount = 0;
  public pageOfItems: any[] = []

  ngOnInit(): void {
    this.title = this.combo.get('model').label;
    this.nodes = this.combo.get('model').children;
    this.totalItemsCount = this.nodes.length;
    // this.pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log(this.nodes, this.totalItemsCount);
  }

  public handlePageSizeSelected(pageSize: number) {
    this.pageSize = pageSize;
  }

  public handlePageSelected(page: number) {
    this.page = page;
  }

}
