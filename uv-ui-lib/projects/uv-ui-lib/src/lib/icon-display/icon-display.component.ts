import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IconSetValue, ICON_SET } from '../register-icon/icon-set';

@Component({
  selector: 'uvx-icon-display',
  templateUrl: './icon-display.component.html',
  styleUrls: ['./icon-display.component.scss']
})
export class IconDisplayComponent implements OnInit {

  public icons = ICON_SET;
  public sortedArray: IconSetValue[] = [];
  public searchResults: IconSetValue[] = []
  public searchText = '';

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.sortArray('recent');
  }

  ngAfterViewChecked(): void {
    if (this.searchText != '') {
      this.typeAheadSearch(this.searchText);
    }
    this.ref.detectChanges();
  }

  public sortArrayByName(x: IconSetValue , y: IconSetValue){
    if (x.name < y.name) {return -1;}
    if (x.name > y.name) {return 1;}
    return 0;
  }

  public sortArrayByCategory(x: IconSetValue , y: IconSetValue){
    if (x.url < y.url) {return -1;}
    if (x.url > y.url) {return 1;}
    return 0;
  }

  public sortArray(sortBy: string) {
    this.clearSearch()
    let newSortedArray = this.icons.slice();
    switch(sortBy) {
      case 'name':
        newSortedArray.sort(this.sortArrayByName);
        break;
      case 'category':
        newSortedArray.sort(this.sortArrayByCategory);
        break;
      case 'recent':
        newSortedArray.reverse();
        break;
      default:
        newSortedArray.reverse();
    }
    this.sortedArray = newSortedArray;
  }

  public typeAheadSearch(input: string) {
    console.log('searching');
    let results = this.icons.slice();
    results = results.filter(item =>
        item.name.toLowerCase().includes(input.toLowerCase())
    );

    this.sortedArray = results;
  }

  public clearSearch(): void {
    this.searchText = ''; 
  }

}
