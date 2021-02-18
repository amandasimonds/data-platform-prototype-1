import { ComponentFixture, TestBed } from '@angular/core/testing';
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
    component.searchBtnClicked = 'searchBtnClicked()';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have a search button', () => {
  //   const searchButton = fixture.debugElement.query(By.css('search-panel__icon-search-container')).nativeElement;
  //   // const searchButton = fixture.debugElement.nativeElement.querySelector('#search');
  //   expect(searchButton).toBeTruthy();
  // });

  it('should have a search button with a click listener', () => {
    spyOn(component, 'searchBtnClicked');
    const searchButton = fixture.debugElement.query(By.css('search-panel__icon-search-container')).nativeElement;
    // const searchButton = fixture.debugElement.nativeElement.querySelector('#search');
    searchButton.click();
    expect(component.searchBtnClicked).toHaveBeenCalledTimes(1);
  });
});
