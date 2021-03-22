import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalWhereUsedComponent } from './global-where-used.component';

describe('GlobalWhereUsedComponent', () => {
  let component: GlobalWhereUsedComponent;
  let fixture: ComponentFixture<GlobalWhereUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalWhereUsedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalWhereUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
