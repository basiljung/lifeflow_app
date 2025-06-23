import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { ImpressumComponent } from './footer/impressum/impressum.component';
import { HomeComponent } from './selfcheck-app/home/home.component';
import { WebsiteHomeComponent } from './website/website-home/website-home.component';
import { LandingpageComponent } from './website/landingpage/landingpage.component';

export const routes: Routes = [
  { path: 'app', redirectTo: 'en/app', pathMatch: 'full' },
  {
    path: ':lang',
    children: [
      { path: 'app', component: HomeComponent },
      { path: '', component: LandingpageComponent },
      { path: 'drive', component: WebsiteHomeComponent },
      { path: 'inner-peace', component: WebsiteHomeComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'impressum', component: ImpressumComponent },
    ],
  },
  { path: '', redirectTo: 'en', pathMatch: 'full' }, // Default redirect
];
