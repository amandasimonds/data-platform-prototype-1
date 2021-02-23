import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SearchPanelComponent } from './search-panel.component';

describe('SearchPanelComponent', () => {
  let component: SearchPanelComponent;
  let fixture: ComponentFixture<SearchPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPanelComponent);
    component = fixture.componentInstance;
    component.searchBtnClicked = '';
    component.expandFiltersClicked = '';
    component.expandFiltersContainer = () => {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a search icon that is clickable', () => {
    const searchBtnClickedMock = spyOn(component, 'searchBtnClicked');
    const searchBtn = fixture.debugElement.nativeElement.querySelector('#search-button');
    searchBtn.click();
    expect(searchBtnClickedMock).toHaveBeenCalled();
  });


  it('should have a left arrow icon that is clickable', () => {
    const expandFiltersClickedMock = spyOn(component, 'expandFiltersClicked');
    const leftBtn = fixture.debugElement.nativeElement.querySelector('#leftArrow-button');
    leftBtn.click();
    expect(expandFiltersClickedMock).toHaveBeenCalled();
  });

  // it('should have a left arrow icon thats expands the filter container on selection', () => {
  //   const expandFiltersContainerClickedMock = spyOn(component, 'expandFiltersClicked');
  //   const leftBtn = fixture.debugElement.nativeElement.querySelector('#leftArrow-button');
  //   const searchPanelFiltersContainer = fixture.debugElement.nativeElement.querySelector('#search-panel-filters-container');
  //   leftBtn.click();
  //   // expect(".search-panel__filters-container--expanded").toBeTruthy();
  //   expect(searchPanelFiltersContainer).toHaveClass('search-panel__filters-container.search-panel__filters-container--expanded');
  //   // expect(leftArrowBtn).toHaveBeenCalled();
  // });

});
