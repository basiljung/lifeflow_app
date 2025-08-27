import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FAQDETAILSDATA_DE, FAQDETAILSDATA_EN } from '../data/faq_details';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../services/language.service';

type FaqEntry = { title: string; text: string };

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

  openIndex: number | null = null;

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.langService.lang$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  get entries(): FaqEntry[] {
    return this.currentLang === 'de'
      ? this.faqDetailsData_de
      : this.faqDetailsData_en;
  }

  toggle(i: number) {
    this.openIndex = this.openIndex === i ? null : i;
  }

  trackByIndex = (i: number) => i;

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
