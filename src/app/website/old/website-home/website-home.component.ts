import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../services/language.service';
import { SenjaCoachingTestimonialsComponent } from '../../../testimonials/senja-coaching-testimonials/senja-coaching-testimonials.component';
import { TitlePageComponent } from '../../landingpage/title-page/title-page.component';
import { SectionDefault2ColComponent } from '../section-default-2col/section-default-2col.component';
import { SectionDefaultComponent } from '../section-default/section-default.component';

@Component({
  selector: 'app-website-home',
  imports: [
    SectionDefault2ColComponent,
    TitlePageComponent,
    CommonModule,
    RouterModule,
    SectionDefaultComponent,
    SenjaCoachingTestimonialsComponent,
  ],
  templateUrl: './website-home.component.html',
  styleUrl: './website-home.component.scss',
})
export class WebsiteHomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  currentLang: string | null = null;
  topic: string | undefined;

  constructor(
    private langService: LanguageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const segments = this.router.url.split('/').filter(Boolean);

    this.topic = segments[1];
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
