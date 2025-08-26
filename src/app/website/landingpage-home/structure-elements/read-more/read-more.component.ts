import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-read-more',
  imports: [CommonModule],
  templateUrl: './read-more.component.html',
  styleUrl: './read-more.component.scss',
})
export class ReadMoreComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  currentLang: string | null = null;
  @Input() lines = 3; // number of characters before truncation
  expanded = false;
  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.langService.lang$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  toggle() {
    this.expanded = !this.expanded;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
