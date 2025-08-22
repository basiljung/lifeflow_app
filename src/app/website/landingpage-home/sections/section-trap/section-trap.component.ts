import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../../language.service';
import { DefaultSection1Component } from '../../structure-elements/default-section-1/default-section-1.component';

@Component({
  selector: 'app-section-trap',
  imports: [DefaultSection1Component],
  templateUrl: './section-trap.component.html',
  styleUrl: './section-trap.component.scss',
})
export class SectionTrapComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  currentLang: string | null = null;

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.langService.lang$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
