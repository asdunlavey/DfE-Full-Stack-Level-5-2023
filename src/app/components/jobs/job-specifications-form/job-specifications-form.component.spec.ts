import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSpecificationsFormComponent } from './job-specifications-form.component';

describe('JobSpecificationsFormComponent', () => {
  let component: JobSpecificationsFormComponent;
  let fixture: ComponentFixture<JobSpecificationsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobSpecificationsFormComponent]
    });
    fixture = TestBed.createComponent(JobSpecificationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
