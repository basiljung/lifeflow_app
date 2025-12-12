import { Component, OnDestroy, OnInit } from '@angular/core';
import { CtaEmailCourseComponent } from '../cta-email-course/cta-email-course.component';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-email-course-signup-page',
  imports: [CtaEmailCourseComponent],
  templateUrl: './email-course-signup-page.component.html',
  styleUrl: './email-course-signup-page.component.scss',
})
export class EmailCourseSignupPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  currentLang: string | null = null;
  isLoading = false;

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
