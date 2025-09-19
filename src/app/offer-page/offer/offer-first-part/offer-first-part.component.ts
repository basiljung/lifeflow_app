import { Component } from '@angular/core';

@Component({
  selector: 'app-offer-first-part',
  imports: [],
  templateUrl: './offer-first-part.component.html',
  styleUrl: './offer-first-part.component.scss',
})
export class OfferFirstPartComponent {
  effectiveDate = new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}
