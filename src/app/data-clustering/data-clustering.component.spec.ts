import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataClusteringComponent } from './data-clustering.component';

describe('DataClusteringComponent', () => {
  let component: DataClusteringComponent;
  let fixture: ComponentFixture<DataClusteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataClusteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataClusteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
