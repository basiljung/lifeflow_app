import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../language.service';

declare const M: any;

@Component({
  selector: 'app-faq-website',
  imports: [],
  templateUrl: './faq-website.component.html',
  styleUrl: './faq-website.component.scss',
})
export class FaqWebsiteComponent implements OnInit, OnDestroy {
  currentLang: string | null = null;
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
