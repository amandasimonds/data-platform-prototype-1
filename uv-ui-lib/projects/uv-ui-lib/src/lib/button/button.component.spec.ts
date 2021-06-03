import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.label = 'test text';
    fixture.detectChanges();
  });

  it('should create a text-type button', () => {
    expect(component).toBeTruthy();
  });

  it('should have the proper text', () => {
    const button = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(button.innerHTML).toBe('test text');
  });
});

