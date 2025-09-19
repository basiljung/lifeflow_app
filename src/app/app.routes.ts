import { Routes } from '@angular/router';
import { LandingpageHomeComponent } from './website/landingpage-home/landingpage-home.component';
import { Component } from '@angular/core';

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
      {
        path: 'offer',
        loadComponent: () =>
          import('./offer-page/offer/offer.component').then(
            (m) => m.OfferComponent,
          ),
        children: [
          {
            path: 't&c',
            loadComponent: () =>
              import(
                './offer-page/termsandconditions/termsandconditions.component'
              ).then((m) => m.TermsandconditionsComponent),
          },
        ],
      },
      {
        path: 'terms',
        loadComponent: () =>
          import(
            './offer-page/termsandconditions/termsandconditions.component'
          ).then((m) => m.TermsandconditionsComponent),
      },
      { path: '', component: LandingpageHomeComponent },
      {
        path: 'wl',
        loadComponent: () =>
          import('./waiting-list-1/waiting-list-1.component').then(
            (m) => m.WaitingList1Component,
          ),
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import(
            './testimonials/feedbackpage-coaching-senja/feedbackpage-coaching-senja.component'
          ).then((m) => m.FeedbackpageCoachingSenjaComponent),
      },
      {
        path: '31',
        loadComponent: () =>
          import(
            './general-elements/email-course-signup-page/email-course-signup-page.component'
          ).then((m) => m.EmailCourseSignupPageComponent),
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
        path: 'digital',
        loadComponent: () =>
          import('./website/old/website-home/website-home.component').then(
            (m) => m.WebsiteHomeComponent,
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
