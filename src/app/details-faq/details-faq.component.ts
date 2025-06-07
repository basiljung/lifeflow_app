import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FAQDETAILSDATA_DE, FAQDETAILSDATA_EN } from '../data/faq_details';

@Component({
  selector: 'app-details-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-faq.component.html',
  styleUrl: './details-faq.component.scss',
})
export class DetailsFAQComponent {
  currentLang: string = 'DE';
  faqDetailsData_de = FAQDETAILSDATA_DE;
  faqDetailsData_en = FAQDETAILSDATA_EN;

  toggleLanguage() {
    this.currentLang = this.currentLang === 'DE' ? 'EN' : 'DE';
  }
}
