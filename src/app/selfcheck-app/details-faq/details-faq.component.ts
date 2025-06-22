import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FAQDETAILSDATA_DE, FAQDETAILSDATA_EN } from '../data/faq_details';

declare const M: any;

@Component({
  selector: 'app-details-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-faq.component.html',
  styleUrl: './details-faq.component.scss',
})
export class DetailsFAQComponent implements OnInit {
  currentLang: string = 'DE';
  faqDetailsData_de = FAQDETAILSDATA_DE;
  faqDetailsData_en = FAQDETAILSDATA_EN;

  ngOnInit(): void {
    this.toggleLanguage();
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'DE' ? 'EN' : 'DE';

    setTimeout(() => {
      const elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems);
    }, 0);
  }
}
