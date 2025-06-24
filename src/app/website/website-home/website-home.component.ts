import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { LandingpageComponent } from '../landingpage/landingpage.component';
import { MailerliteformComponent } from '../mailerliteform/mailerliteform.component';
import { Router } from '@angular/router';
import { LanguageService } from '../../language.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TitlePageComponent } from '../landingpage/title-page/title-page.component';
import { SectionDefault2ColComponent } from '../section-default-2col/section-default-2col.component';

declare var M: any;

@Component({
  selector: 'app-website-home',
  imports: [
    LandingpageComponent,
    SectionDefault2ColComponent,
    MailerliteformComponent,
    TitlePageComponent,
    CommonModule,
  ],
  templateUrl: './website-home.component.html',
  styleUrl: './website-home.component.scss',
})
export class WebsiteHomeComponent implements OnInit, OnDestroy, AfterViewInit {
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

  ngAfterViewInit(): void {
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
      dist: 0,
      padding: 20,
      numVisible: 3,
      shift: 0,
      indicators: true,
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
