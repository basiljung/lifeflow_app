import { Routes } from '@angular/router';
import { LandingpageComponent } from './website/landingpage/landingpage.component';

export const routes: Routes = [
  { path: 'app', redirectTo: 'en/app', pathMatch: 'full' },
  { path: 'click', redirectTo: 'en/click', pathMatch: 'full' },
  {
    path: ':lang',
    children: [
      { path: '', component: LandingpageComponent },
      {
        path: 'app',
        loadComponent: () =>
          import('./selfcheck-app/home/home.component').then(
            (m) => m.HomeComponent,
          ),
      },
      {
        path: 'offer',
        loadComponent: () =>
          import('./offer-page/offer/offer.component').then(
            (m) => m.OfferComponent,
          ),
      },
      {
        path: 'terms',
        loadComponent: () =>
          import(
            './offer-page/termsandconditions/termsandconditions.component'
          ).then((m) => m.TermsandconditionsComponent),
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import(
            './testimonials/feedbackpage-coaching-senja/feedbackpage-coaching-senja.component'
          ).then((m) => m.FeedbackpageCoachingSenjaComponent),
      },
      {
        path: 'click',
        loadComponent: () =>
          import(
            './general-elements/email-course-signup-page/email-course-signup-page.component'
          ).then((m) => m.EmailCourseSignupPageComponent),
      },
      {
        path: '1-1',
        loadComponent: () =>
          import('./website/landingpage-home/landingpage-home.component').then(
            (m) => m.LandingpageHomeComponent,
          ),
      },
      {
        path: 'course',
        loadComponent: () =>
          import('./selfdiscovery-course/selfdiscovery-course.component').then(
            (m) => m.SelfdiscoveryCourseComponent,
          ),
      },
      {
        path: 'clarity',
        loadComponent: () =>
          import('./website/landingpage-home/landingpage-home.component').then(
            (m) => m.LandingpageHomeComponent,
          ),
      },
      {
        path: 'inner-peace',
        loadComponent: () =>
          import('./website/landingpage-home/landingpage-home.component').then(
            (m) => m.LandingpageHomeComponent,
          ),
      },
      {
        path: 'drive',
        loadComponent: () =>
          import('./website/landingpage-home/landingpage-home.component').then(
            (m) => m.LandingpageHomeComponent,
          ),
      },
      {
        path: 'build&be',
        loadComponent: () =>
          import('./website/old/build-andbe/build-andbe.component').then(
            (m) => m.BuildAndbeComponent,
          ),
      },
      {
        path: 'privacy-policy',
        loadComponent: () =>
          import('./footer/privacy-policy/privacy-policy.component').then(
            (m) => m.PrivacyPolicyComponent,
          ),
      },
      {
        path: 'impressum',
        loadComponent: () =>
          import('./footer/impressum/impressum.component').then(
            (m) => m.ImpressumComponent,
          ),
      },
    ],
  },
  { path: '', redirectTo: 'en', pathMatch: 'full' }, // Default redirect
];
