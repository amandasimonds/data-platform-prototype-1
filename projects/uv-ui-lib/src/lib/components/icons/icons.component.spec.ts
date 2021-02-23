import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IconsComponent } from './icons.component';

describe('IconsComponent', () => {
  let component: IconsComponent;
  let fixture: ComponentFixture<IconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsComponent);
    component = fixture.componentInstance;
    component.name = 'test name';
    fixture.detectChanges();
  });

  // it('should create an icon-type button', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should have the proper name', () => {
  //   const icon = fixture.debugElement.query(By.css('moreHorizontal')).nativeElement;
  //   expect(icon.innerHTML).toBe('test name');
  // });

});
