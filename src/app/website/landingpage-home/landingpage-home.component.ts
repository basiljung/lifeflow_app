import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { SectionDefault2ColComponent } from '../section-default-2col/section-default-2col.component';
import { TitlePageComponent } from '../landingpage/title-page/title-page.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SectionDefaultComponent } from '../section-default/section-default.component';
import { WaitingList1Component } from '../../waiting-list-1/waiting-list-1.component';
import { SenjaCoachingTestimonialsComponent } from '../../testimonials/senja-coaching-testimonials/senja-coaching-testimonials.component';
import { TitlePageTopComponent } from './title-page-top/title-page-top.component';
import { TopicSelectorComponent } from '../landingpage/topic-selector/topic-selector.component';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../language.service';
import { DriveComponent } from './topics/drive/drive.component';
import { InnerPeaceComponent } from './topics/inner-peace/inner-peace.component';
import { DigitalComponent } from './topics/digital/digital.component';
import { ClarityComponent } from './topics/clarity/clarity.component';
import { SectionTrapComponent } from './section-trap/section-trap.component';
import { PersonalStoryComponent } from './personal-story/personal-story.component';
import { TheFormulaComponent } from './the-formula/the-formula.component';

declare var M: any;

@Component({
  selector: 'app-landingpage-home',
  imports: [
    SectionDefault2ColComponent,
    TitlePageComponent,
    CommonModule,
    RouterModule,
    SectionDefaultComponent,
    WaitingList1Component,
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
