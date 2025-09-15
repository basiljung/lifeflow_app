import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../../services/language.service';
import { CarouselFormulaComponent } from './carousel-formula/carousel-formula.component';
import { TakeAwaysComponent } from './take-aways/take-aways.component';
import { DetailsProcessComponent } from './details-process/details-process.component';

@Component({
  selector: 'app-the-formula',
  imports: [
    CarouselFormulaComponent,
    TakeAwaysComponent,
    DetailsProcessComponent,
  ],
  templateUrl: './the-formula.component.html',
  styleUrl: './the-formula.component.scss',
})
export class TheFormulaComponent implements OnInit, OnDestroy {
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
