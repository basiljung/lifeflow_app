import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CtaEmailCourseComponent } from '../cta-email-course/cta-email-course.component';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-email-course-signup-page',
  imports: [CtaEmailCourseComponent],
  templateUrl: './email-course-signup-page.component.html',
  styleUrl: './email-course-signup-page.component.scss',
})
export class EmailCourseSignupPageComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  private destroy$ = new Subject<void>();
  currentLang: string | null = null;
  isLoading = false;

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.langService.lang$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  ngAfterViewInit() {
    // Prevent loading it multiple times
    if (!document.getElementById('senja-script')) {
      const scriptApp = document.createElement('script');
      scriptApp.id = 'senja-script';
      scriptApp.src =
        'https://widget.senja.io/widget/31c90a2f-c3da-45f5-b0bb-68659ffc39cb/platform.js';
      scriptApp.type = 'text/javascript';
      scriptApp.async = true;
      document.body.appendChild(scriptApp);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
