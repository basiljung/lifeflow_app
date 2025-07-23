import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../../language.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-build-andbe',
  imports: [],
  templateUrl: './build-andbe.component.html',
  styleUrl: './build-andbe.component.scss',
})
export class BuildAndbeComponent implements OnInit, OnDestroy {
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
