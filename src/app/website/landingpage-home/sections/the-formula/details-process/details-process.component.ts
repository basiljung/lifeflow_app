import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../../../services/language.service';
import { TakeAwaysComponent } from '../take-aways/take-aways.component';
import { OverviewProgramComponent } from '../overview-program/overview-program.component';
import { ReadMoreComponent } from '../../../structure-elements/read-more/read-more.component';

@Component({
  selector: 'app-details-process',
  imports: [TakeAwaysComponent, OverviewProgramComponent, ReadMoreComponent],
  templateUrl: './details-process.component.html',
  styleUrl: './details-process.component.scss',
})
export class DetailsProcessComponent implements OnInit, OnDestroy {
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
