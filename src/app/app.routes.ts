import { Routes } from '@angular/router';
import { LandingpageComponent } from './website/landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'app', redirectTo: 'en/app', pathMatch: 'full' },
  { path: 'click', redirectTo: 'en/click', pathMatch: 'full' },
  {
    path: ':lang',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./website/landingpage/landingpage.component').then(
            (m) => m.LandingpageComponent,
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'course-home',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (m) => m.DashboardComponent,
          ),
        canActivate: [authGuard],
        canActivateChild: [authGuard],
      },
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
          import(
            './dashboard/selfdiscovery-course/selfdiscovery-course.component'
          ).then((m) => m.SelfdiscoveryCourseComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'books',
        loadComponent: () =>
          import('./books/books.component').then((m) => m.BooksComponent),
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
