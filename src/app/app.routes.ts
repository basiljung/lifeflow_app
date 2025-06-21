import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebsiteHomeComponent } from './website/website-home/website-home.component';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { ImpressumComponent } from './footer/impressum/impressum.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'website', component: WebsiteHomeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'impressum', component: ImpressumComponent },
];
