import { Component, OnDestroy, OnInit } from '@angular/core';
import { DefaultSection2Component } from '../structure-elements/default-section-2/default-section-2.component';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-personal-story',
  imports: [DefaultSection2Component],
  templateUrl: './personal-story.component.html',
  styleUrl: './personal-story.component.scss',
})
export class PersonalStoryComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  currentLang: string | null = null;

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.langService.lang$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
