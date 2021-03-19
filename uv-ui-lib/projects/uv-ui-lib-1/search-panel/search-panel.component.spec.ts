import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { element } from 'protractor';
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

  it('should add a class to the filter container when the left arrow is clicked', () => {
    component.expanded = false;
    component.expandFiltersContainer();
    expect(component.expanded).toBe(true);
  });

  it('should add a class to the filter container when the left arrow is clicked', () => {
    component.expanded = true;
    component.expandFiltersContainer();
    expect(component.expanded).toBe(false);
  });
});
