import { Component, OnDestroy, OnInit } from '@angular/core';
import { LandingpageComponent } from '../landingpage/landingpage.component';
import { SectionDefaultComponent } from '../section-default/section-default.component';
import { MailerliteformComponent } from '../mailerliteform/mailerliteform.component';
import { NavigationEnd, Router } from '@angular/router';
import { LanguageService } from '../../language.service';
import { filter, Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TitlePageComponent } from '../landingpage/title-page/title-page.component';

@Component({
  selector: 'app-website-home',
  imports: [
    LandingpageComponent,
    SectionDefaultComponent,
    MailerliteformComponent,
    TitlePageComponent,
    CommonModule,
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
