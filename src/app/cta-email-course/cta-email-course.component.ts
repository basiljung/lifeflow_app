import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-cta-email-course',
  imports: [],
  templateUrl: './cta-email-course.component.html',
  styleUrl: './cta-email-course.component.scss',
})
export class CtaEmailCourseComponent implements OnInit, OnDestroy {
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
