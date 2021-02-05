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
    component.btnText = 'test text';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event when the button is clicked', () => {
    spyOn(component.onClick, 'emit');
    component.onClickButton({test:'test'});
    expect(component.onClick.emit).toHaveBeenCalledOnceWith({test:'test'});
  });

  it('should have the proper text', () => {
    const button = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(button.innerHTML).toBe('test text');
  });

  it('should have a button with a click event', () => {
    spyOn(component.onClick, 'emit');
    const button = fixture.debugElement.query(By.css('a')).nativeElement;
    button.click();
    expect(component.onClick.emit).toHaveBeenCalledTimes(1);
  });

  it('should have the proper classes', () => {
    component.buttonConfig = {disabled: true};
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.disabled'));
    expect(button).toBeTruthy();
  });
});
