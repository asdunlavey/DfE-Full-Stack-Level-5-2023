import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsLinksComponent } from './socials-links.component';

describe('SocialsLinksComponent', () => {
  let component: SocialsLinksComponent;
  let fixture: ComponentFixture<SocialsLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialsLinksComponent]
    });
    fixture = TestBed.createComponent(SocialsLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
