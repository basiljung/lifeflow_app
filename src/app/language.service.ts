import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private langSubject = new BehaviorSubject<string>('en');
  lang$ = this.langSubject.asObservable();

  private toggleLangSubject = new Subject<string>();
  toggleLang$ = this.toggleLangSubject.asObservable();

  setLanguage(lang: string) {
    this.langSubject.next(lang);
  }

  getCurrentLang(): string {
    return this.langSubject.value;
  }

  triggerToggle(lang: string) {
    this.toggleLangSubject.next(lang);
  }
}
