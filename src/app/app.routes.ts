import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { ImpressumComponent } from './footer/impressum/impressum.component';
import { LandingpageComponent } from './website/landingpage/landingpage.component';

export const routes: Routes = [
  { path: 'app', redirectTo: 'en/app', pathMatch: 'full' },
  { path: '31', redirectTo: 'en/31', pathMatch: 'full' },
  {
    path: ':lang',
    children: [
      {
        path: 'app',
        loadComponent: () =>
          import('./selfcheck-app/home/home.component').then(
            (m) => m.HomeComponent,
          ),
      },
      { path: '', component: LandingpageComponent },
      {
        path: 'wl',
        loadComponent: () =>
          import('./waiting-list-1/waiting-list-1.component').then(
            (m) => m.WaitingList1Component,
          ),
      },
      {
        path: '31',
        loadComponent: () =>
          import(
            './email-course-signup-page/email-course-signup-page.component'
          ).then((m) => m.EmailCourseSignupPageComponent),
      },
      {
        path: 'clarity',
        loadComponent: () =>
          import('./website/website-home/website-home.component').then(
            (m) => m.WebsiteHomeComponent,
          ),
      },
      {
        path: 'inner-peace',
        loadComponent: () =>
          import('./website/website-home/website-home.component').then(
            (m) => m.WebsiteHomeComponent,
          ),
      },
      {
        path: 'drive',
        loadComponent: () =>
          import('./website/website-home/website-home.component').then(
            (m) => m.WebsiteHomeComponent,
          ),
      },
      {
        path: 'digital',
        loadComponent: () =>
          import('./website/website-home/website-home.component').then(
            (m) => m.WebsiteHomeComponent,
          ),
      },
      {
        path: 'build&be',
        loadComponent: () =>
          import('./website/build-andbe/build-andbe.component').then(
            (m) => m.BuildAndbeComponent,
          ),
      },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'impressum', component: ImpressumComponent },
    ],
  },
  { path: '', redirectTo: 'en', pathMatch: 'full' }, // Default redirect
];
