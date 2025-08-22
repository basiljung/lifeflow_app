import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-get-details-btn',
  imports: [RouterModule],
  templateUrl: './get-details-btn.component.html',
  styleUrl: './get-details-btn.component.scss',
})
export class GetDetailsBtnComponent implements OnInit, OnDestroy {
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
