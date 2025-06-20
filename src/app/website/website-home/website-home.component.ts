import { Component } from '@angular/core';
import { LandingpageComponent } from '../landingpage/landingpage.component';
import { SectionDefaultComponent } from '../section-default/section-default.component';
import { MailerliteformComponent } from '../mailerliteform/mailerliteform.component';

@Component({
  selector: 'app-website-home',
  imports: [
    LandingpageComponent,
    SectionDefaultComponent,
    MailerliteformComponent,
  ],
  templateUrl: './website-home.component.html',
  styleUrl: './website-home.component.scss',
})
export class WebsiteHomeComponent {}
