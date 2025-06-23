import { Component, OnDestroy, OnInit } from '@angular/core';
import { LandingpageComponent } from '../landingpage/landingpage.component';
import { SectionDefaultComponent } from '../section-default/section-default.component';
import { MailerliteformComponent } from '../mailerliteform/mailerliteform.component';
import { NavigationEnd, Router } from '@angular/router';
import { LanguageService } from '../../language.service';
import { filter } from 'rxjs';
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
  routerSubscription: any;
  showTopicSelection: boolean = true;
  constructor(
    private router: Router,
    private langService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        debugger;
        const segments = this.router.url.split('/').filter(Boolean);
        if (segments.length > 1) {
          this.showTopicSelection = false;
        } else {
          this.showTopicSelection = true;
        }
      });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
