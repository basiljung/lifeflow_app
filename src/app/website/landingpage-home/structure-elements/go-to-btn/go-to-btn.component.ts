import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../../services/language.service';

@Component({
  selector: 'app-go-to-btn',
  imports: [],
  templateUrl: './go-to-btn.component.html',
  styleUrl: './go-to-btn.component.scss',
})
export class GoToBtnComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  currentLang: string | null = null;
  topic: string | undefined;

  constructor(
    private langService: LanguageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const segments = this.router.url.split('/').filter(Boolean);

    this.topic = segments[1];
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

  handleAction() {
    if (this.topic) {
      this.scrollTo('formula-selector');
    } else {
      this.scrollTo('topic-selector');
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
