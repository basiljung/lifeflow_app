import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { Subject, takeUntil } from 'rxjs';

declare function gtag(command: string, target: string, params?: any): void;

@Component({
  selector: 'app-cta-email-course',
  imports: [],
  templateUrl: './cta-email-course.component.html',
  styleUrl: './cta-email-course.component.scss',
})
export class CtaEmailCourseComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  currentLang: string | null = null;
  isLoading = false;

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.langService.lang$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  openSignUpDialog() {
    this.isLoading = true;

    // 🔥 Trigger Google Analytics event
    gtag('event', 'email_course_signup_clicked', {
      event_category: 'email_course',
      event_label: 'signup_clicked',
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
