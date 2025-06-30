import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FAQDETAILSDATA_DE, FAQDETAILSDATA_EN } from '../data/faq_details';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../language.service';

declare const M: any;

@Component({
  selector: 'app-details-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-faq.component.html',
  styleUrl: './details-faq.component.scss',
})
export class DetailsFAQComponent implements OnInit, OnDestroy {
  currentLang: string | null = null;
  faqDetailsData_de = FAQDETAILSDATA_DE;
  faqDetailsData_en = FAQDETAILSDATA_EN;
  private destroy$ = new Subject<void>();

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.langService.lang$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
      setTimeout(() => {
        const elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);
      }, 200);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
