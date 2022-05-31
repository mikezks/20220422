import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectedDetailBComponent } from './projected-detail-b.component';

describe('ProjectedDetailBComponent', () => {
  let component: ProjectedDetailBComponent;
  let fixture: ComponentFixture<ProjectedDetailBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectedDetailBComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectedDetailBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
