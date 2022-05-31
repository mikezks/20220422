import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectedDetailAComponent } from './projected-detail-a.component';

describe('ProjectedDetailAComponent', () => {
  let component: ProjectedDetailAComponent;
  let fixture: ComponentFixture<ProjectedDetailAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectedDetailAComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectedDetailAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
