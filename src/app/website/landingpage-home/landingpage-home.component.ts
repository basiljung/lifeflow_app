import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SenjaCoachingTestimonialsComponent } from '../../testimonials/senja-coaching-testimonials/senja-coaching-testimonials.component';
import { TitlePageTopComponent } from './title-page-top/title-page-top.component';
import { TopicSelectorComponent } from './title-page-top/topic-selector/topic-selector.component';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { DriveComponent } from './topics/drive/drive.component';
import { InnerPeaceComponent } from './topics/inner-peace/inner-peace.component';
import { DigitalComponent } from './topics/digital/digital.component';
import { ClarityComponent } from './topics/clarity/clarity.component';
import { PersonalStoryComponent } from './sections/personal-story/personal-story.component';
import { TheFormulaComponent } from './sections/the-formula/the-formula.component';
import { Cta1Component } from './sections/cta-1/cta-1.component';
import { FaqComponent } from './sections/faq/faq.component';
import { ForWhoIsItComponent } from './sections/for-who-is-it/for-who-is-it.component';
import { SectionTrapComponent } from './sections/section-trap/section-trap.component';
import { UnderstandingSectionComponent } from './sections/understanding-section/understanding-section.component';
import { UspComponent } from './sections/usp/usp.component';
import { WhatNextComponent } from './sections/what-next/what-next.component';
import { RelevantsComponent } from './sections/relevants/relevants.component';
import { Cta2Component } from './sections/cta-2/cta-2.component';

declare var M: any;

@Component({
  selector: 'app-landingpage-home',
  imports: [
    CommonModule,
    RouterModule,
    SenjaCoachingTestimonialsComponent,
    TitlePageTopComponent,
    TopicSelectorComponent,
    DriveComponent,
    InnerPeaceComponent,
    DigitalComponent,
    ClarityComponent,
    SectionTrapComponent,
    PersonalStoryComponent,
    TheFormulaComponent,
    UspComponent,
    UnderstandingSectionComponent,
    Cta1Component,
    FaqComponent,
    ForWhoIsItComponent,
    WhatNextComponent,
    RelevantsComponent,
    Cta2Component,
  ],
  templateUrl: './landingpage-home.component.html',
  styleUrl: './landingpage-home.component.scss',
})
export class LandingpageHomeComponent
  implements OnInit, OnDestroy, AfterViewInit
{
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
