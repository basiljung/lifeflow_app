import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../services/language.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GetDetailsBtnComponent } from '../../get-details-btn/get-details-btn.component';

@Component({
  selector: 'app-title-page-top',
  imports: [CommonModule, RouterModule, GetDetailsBtnComponent],
  templateUrl: './title-page-top.component.html',
  styleUrl: './title-page-top.component.scss',
})
export class TitlePageTopComponent implements OnInit, OnDestroy {
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
