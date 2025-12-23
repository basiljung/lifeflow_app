import { Component } from '@angular/core';
import { CtaEmailCourseComponent } from '../../../general-elements/cta-email-course/cta-email-course.component';

@Component({
  selector: 'app-newsletter-banner',
  imports: [CtaEmailCourseComponent],
  templateUrl: './newsletter-banner.component.html',
  styleUrl: './newsletter-banner.component.scss',
})
export class NewsletterBannerComponent {}
