import { Component, OnDestroy, OnInit } from '@angular/core';
import { TakeAwaysComponent } from '../../website/landingpage-home/sections/the-formula/take-aways/take-aways.component';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { OverviewProgramComponent } from '../../website/landingpage-home/sections/the-formula/overview-program/overview-program.component';

@Component({
  selector: 'app-offer',
  imports: [TakeAwaysComponent, OverviewProgramComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss',
})
export class OfferComponent implements OnInit, OnDestroy {
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
