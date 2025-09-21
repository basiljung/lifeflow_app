import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-offer-first-part',
  imports: [],
  templateUrl: './offer-first-part.component.html',
  styleUrl: './offer-first-part.component.scss',
})
export class OfferFirstPartComponent implements OnInit, OnDestroy {
  effectiveDate = new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
  private destroy$ = new Subject<void>();
  currentLang: string | null = null;

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.langService.lang$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
