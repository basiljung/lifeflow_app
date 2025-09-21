import { Component, OnDestroy, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { TakeAwaysComponent } from '../../website/landingpage-home/sections/the-formula/take-aways/take-aways.component';
import { OfferFirstPartComponent } from './offer-first-part/offer-first-part.component';
import { LanguageService } from '../../services/language.service';

type PackageKey = '4' | '8' | '12';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TakeAwaysComponent,
    OfferFirstPartComponent,
    RouterModule,
  ],
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  currentLang: string | null = null;
  currentYear = new Date().getFullYear();

  /** Selection state */
  selectedPackage: PackageKey | null = null;

  /** Accept terms (signal) */
  private acceptedSig = signal(false);
  accepted(): boolean {
    return this.acceptedSig();
  }
  toggleAccept(ev: Event) {
    const input = ev.target as HTMLInputElement;
    this.acceptedSig.set(!!input.checked);
  }

  /** Copy */
  labels: Record<PackageKey, string> = {
    '4': '4 Sessions',
    '8': '8 Sessions',
    '12': '12 Sessions',
  };

  prices: Record<PackageKey, string> = {
    '4': 'CHF 450',
    '8': 'CHF 950',
    '12': 'CHF 1400',
  };

  /** Single source of truth for Stripe links */
  stripeLinks: Record<PackageKey, string> = {
    '4': 'https://buy.stripe.com/5kQ4gygSvbbJ3so5LU0gw03',
    '8': 'https://book.stripe.com/8x29ASeKn1B99QMeiq0gw02',
    '12': 'https://book.stripe.com/aFacN40Txa7Fgfa5LU0gw01',
  };

  /** Computed helpers */
  activeLabel = computed(() =>
    this.selectedPackage ? this.labels[this.selectedPackage] : null,
  );
  activePrice = computed(() =>
    this.selectedPackage ? this.prices[this.selectedPackage] : null,
  );
  activeStripeLink = computed(() =>
    this.selectedPackage ? this.stripeLinks[this.selectedPackage] : null,
  );

  /** Legal/Info links */
  termsUrl = '/terms';
  privacyUrl = '/privacy';
  imprintUrl = '/impressum';

  /** Provider block */
  providerName = 'Basil Jung (LifeFlow.Now™)';
  providerStreet = 'General-Wille-Strasse 153';
  providerZipCity = '8707 Feldmeilen, Zurich';
  providerCountry = 'Switzerland';
  providerEmail = 'basil.jung@lifeflow.now';
  providerVat: string | null = null; // e.g., 'CHE-xxx.xxx.xxx MWST'

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.langService.lang$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  selectPackage(pkg: PackageKey) {
    this.selectedPackage = pkg;
  }

  print() {
    window.print();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
