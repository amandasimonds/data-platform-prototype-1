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
    component.name = 'dashboard';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the proper name', () => {
    fixture.detectChanges();
    const icon = fixture.debugElement.nativeElement.querySelector('#lib-icon')
    const svg = icon.innerHTML;
    console.log(svg)
    expect(svg.id).toBe('dashboard');
  });

});
