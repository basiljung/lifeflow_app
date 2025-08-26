import { Component, OnDestroy, OnInit } from '@angular/core';
import { TopicStructureComponent } from '../topic-structure/topic-structure.component';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../../services/language.service';
import { GetDetailsBtnComponent } from '../../../get-details-btn/get-details-btn.component';

@Component({
  selector: 'app-dive-deeper-intro',
  imports: [TopicStructureComponent, GetDetailsBtnComponent],
  templateUrl: './dive-deeper-intro.component.html',
  styleUrl: './dive-deeper-intro.component.scss',
})
export class DiveDeeperIntroComponent implements OnInit, OnDestroy {
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
