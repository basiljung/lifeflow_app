import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../../services/language.service';

declare function gtag(command: string, target: string, params?: any): void;

@Component({
  selector: 'app-apply-btn',
  imports: [],
  templateUrl: './apply-btn.component.html',
  styleUrl: './apply-btn.component.scss',
})
export class ApplyBtnComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  currentLang: string | null = null;
  isLoading = false;

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.langService.lang$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  applyCoachingDialog() {
    this.isLoading = true;

    // 🔥 Trigger Google Analytics event
    gtag('event', 'apply_coaching_btn_clicked', {
      event_category: 'apply_coaching',
      event_label: 'btn_clicked',
      value: 1,
    });
    setTimeout(() => {
      const elems = document.querySelectorAll('.collapsible');
      this.isLoading = false;
    }, 1500);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
