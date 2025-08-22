import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import { HeaderComponent } from './general-elements/header/header.component';
import { FooterComponent } from './footer/footer.component';

declare function gtag(command: string, target: string, params?: any): void;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    CookieBannerComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-DFYEQXV8R9', {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
}
