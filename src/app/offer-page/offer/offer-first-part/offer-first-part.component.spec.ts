import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferFirstPartComponent } from './offer-first-part.component';

describe('OfferFirstPartComponent', () => {
  let component: OfferFirstPartComponent;
  let fixture: ComponentFixture<OfferFirstPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferFirstPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferFirstPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
