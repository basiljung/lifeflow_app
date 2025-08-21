import { Component, OnDestroy, OnInit } from '@angular/core';
import { SectionDefault2ColComponent } from '../../../section-default-2col/section-default-2col.component';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../../language.service';
import { GetDetailsBtnComponent } from '../../../get-details-btn/get-details-btn.component';
import { TopicStructureComponent } from '../topic-structure/topic-structure.component';

@Component({
  selector: 'app-inner-peace',
  imports: [TopicStructureComponent, GetDetailsBtnComponent],
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
