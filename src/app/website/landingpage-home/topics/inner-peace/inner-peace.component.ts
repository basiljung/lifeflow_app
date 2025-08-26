import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../../services/language.service';
import { TopicStructureComponent } from '../topic-structure/topic-structure.component';
import { DiveDeeperIntroComponent } from '../dive-deeper-intro/dive-deeper-intro.component';

@Component({
  selector: 'app-inner-peace',
  imports: [TopicStructureComponent, DiveDeeperIntroComponent],
  templateUrl: './inner-peace.component.html',
  styleUrl: './inner-peace.component.scss',
})
export class InnerPeaceComponent implements OnInit, OnDestroy {
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
