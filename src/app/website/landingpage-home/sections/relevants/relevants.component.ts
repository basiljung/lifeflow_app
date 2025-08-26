import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../../services/language.service';
import { ReadMoreComponent } from '../../structure-elements/read-more/read-more.component';

@Component({
  selector: 'app-relevants',
  imports: [ReadMoreComponent],
  templateUrl: './relevants.component.html',
  styleUrl: './relevants.component.scss',
})
export class RelevantsComponent implements OnInit, OnDestroy {
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
