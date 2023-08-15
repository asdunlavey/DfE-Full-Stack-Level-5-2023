import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalPrinciplesComponent } from './additional-principles.component';

describe('AdditionalPrinciplesComponent', () => {
  let component: AdditionalPrinciplesComponent;
  let fixture: ComponentFixture<AdditionalPrinciplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdditionalPrinciplesComponent]
    });
    fixture = TestBed.createComponent(AdditionalPrinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
