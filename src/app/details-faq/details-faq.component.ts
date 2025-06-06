import { Component } from '@angular/core';

@Component({
  selector: 'app-details-faq',
  standalone: true,
  templateUrl: './details-faq.component.html',
  styleUrl: './details-faq.component.scss',
})
export class DetailsFAQComponent {
  currentLang: string = 'DE';

  toggleLanguage() {
    this.currentLang = this.currentLang === 'DE' ? 'EN' : 'DE';
  }
}
