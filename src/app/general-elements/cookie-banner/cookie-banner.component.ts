import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  imports: [CommonModule],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.scss',
})
export class CookieBannerComponent implements OnInit {
  cookieAccepted = false;

  ngOnInit(): void {
    this.cookieAccepted = document.cookie.includes('cookieaccepted=1');
  }

  acceptCookie(): void {
    const expiryDate = new Date(Date.now() + 86400000); // 1 day
    document.cookie = `cookieaccepted=1; expires=${expiryDate.toUTCString()}; path=/`;
    this.cookieAccepted = true;
  }
}
