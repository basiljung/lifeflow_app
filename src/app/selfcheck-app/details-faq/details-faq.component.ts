import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FAQDETAILSDATA_DE, FAQDETAILSDATA_EN } from '../data/faq_details';
import { filter, Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

declare const M: any;

@Component({
  selector: 'app-details-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-faq.component.html',
  styleUrl: './details-faq.component.scss',
})
export class DetailsFAQComponent implements OnInit {
  private routerSubscription!: Subscription;
  currentLang: string | null = null;
  faqDetailsData_de = FAQDETAILSDATA_DE;
  faqDetailsData_en = FAQDETAILSDATA_EN;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setLang();
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setLang();
      });
  }

  setLang() {
    const path = this.router.url;
    const lang = path.split('/')[1];
    if (lang !== this.currentLang) {
      this.currentLang = lang;
      this.changeLanguage();
    }
  }

  changeLanguage() {
    setTimeout(() => {
      const elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems);
    }, 0);
  }
}
