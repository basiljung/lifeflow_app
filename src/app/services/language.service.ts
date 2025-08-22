import { Injectable, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService implements OnDestroy {
  private langSubject = new BehaviorSubject<string>('en');
  lang$ = this.langSubject.asObservable();
  private routerSubscription!: Subscription;

  private toggleLangSubject = new Subject<string>();
  toggleLang$ = this.toggleLangSubject.asObservable();

  constructor(private router: Router) {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const path = this.router.url;
        const lang = path.split('/')[1];
        if (lang && lang !== this.getCurrentLang()) {
          this.setLanguage(lang);
        }
      });
  }

  setLanguage(lang: string) {
    this.langSubject.next(lang);
  }

  getCurrentLang(): string {
    return this.langSubject.value;
  }

  switchLanguage(newlang: string) {
    this.setLanguage(newlang);

    const segments = this.router.url.split('/').filter(Boolean);
    segments[0] = newlang;
    this.router.navigate(['/', ...segments]);
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
