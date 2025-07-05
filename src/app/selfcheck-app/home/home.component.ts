import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsFAQComponent } from '../details-faq/details-faq.component';
import { SelfcheckLogicComponent } from '../self-check-logic/self-check-logic.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { CtaWhatsappComponent } from '../../cta-whatsapp/cta-whatsapp.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    DetailsFAQComponent,
    SelfcheckLogicComponent,
    RouterModule,
    CtaWhatsappComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  private routerSubscription!: Subscription;
  currentLang: string | null = null;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setLang();
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setLang();
      });
  }

  setLang() {
    const path = this.router.url;
    const lang = path.split('/')[1];
    if (lang !== this.currentLang) {
      this.currentLang = lang;
    }
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
