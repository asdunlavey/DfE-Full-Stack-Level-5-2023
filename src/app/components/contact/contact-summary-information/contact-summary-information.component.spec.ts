import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSummaryInformationComponent } from './contact-summary-information.component';

describe('ContactSummaryInformationComponent', () => {
  let component: ContactSummaryInformationComponent;
  let fixture: ComponentFixture<ContactSummaryInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactSummaryInformationComponent]
    });
    fixture = TestBed.createComponent(ContactSummaryInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
