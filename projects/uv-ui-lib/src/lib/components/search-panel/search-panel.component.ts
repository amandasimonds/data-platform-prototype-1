import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class SearchPanelComponent implements OnInit {

  @Input('ngModel') model: any

  constructor() { }

  ngOnInit(): void {
  }

}
