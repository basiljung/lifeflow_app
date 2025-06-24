import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-title-page',
  imports: [CommonModule],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.scss',
})
export class TitlePageComponent implements OnInit {
  private destroy$ = new Subject<void>();
  currentLang: string | null = null;

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.langService.lang$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
