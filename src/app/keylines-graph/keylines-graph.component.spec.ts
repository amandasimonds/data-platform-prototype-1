import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeylinesGraphComponent } from './keylines-graph.component';

describe('KeylinesGraphComponent', () => {
  let component: KeylinesGraphComponent;
  let fixture: ComponentFixture<KeylinesGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeylinesGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeylinesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
