import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebsiteHomeComponent } from './website/website-home/website-home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'website', component: WebsiteHomeComponent },
];
