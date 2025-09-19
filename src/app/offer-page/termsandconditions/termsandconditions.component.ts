import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-termsandconditions',
  imports: [],
  templateUrl: './termsandconditions.component.html',
  styleUrl: './termsandconditions.component.scss',
})
export class TermsandconditionsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  currentLang: string | null = null;

  constructor(
    private langService: LanguageService,
    private location: Location,
  ) {}

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
