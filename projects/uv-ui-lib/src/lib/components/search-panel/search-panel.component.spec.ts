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
    component.searchBtnClicked = 'test function call';
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

  it('should have a search icon that is clickable', () => {
    const searchBtnClickedMock = spyOn(component, 'searchBtnClicked');
    const searchBtn = fixture.debugElement.nativeElement.querySelector('#search-button');
    searchBtn.click();
    expect(searchBtnClickedMock).toHaveBeenCalled();
  });
  
});
