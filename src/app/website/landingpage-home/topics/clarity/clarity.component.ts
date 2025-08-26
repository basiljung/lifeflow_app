import { Component, OnDestroy, OnInit } from '@angular/core';
import { SectionDefault2ColComponent } from '../../../section-default-2col/section-default-2col.component';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../../services/language.service';
import { TopicStructureComponent } from '../topic-structure/topic-structure.component';
import { GetDetailsBtnComponent } from '../../../get-details-btn/get-details-btn.component';
import { DiveDeeperIntroComponent } from '../dive-deeper-intro/dive-deeper-intro.component';

@Component({
  selector: 'app-clarity',
  imports: [
    TopicStructureComponent,
    GetDetailsBtnComponent,
    DiveDeeperIntroComponent,
  ],
  templateUrl: './clarity.component.html',
  styleUrl: './clarity.component.scss',
})
export class ClarityComponent implements OnInit, OnDestroy {
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
