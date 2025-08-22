import { Component, OnDestroy, OnInit } from '@angular/core';
import { SectionDefault2ColComponent } from '../../../section-default-2col/section-default-2col.component';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../../services/language.service';
import { TopicStructureComponent } from '../topic-structure/topic-structure.component';
import { GetDetailsBtnComponent } from '../../../get-details-btn/get-details-btn.component';

@Component({
  selector: 'app-drive',
  imports: [TopicStructureComponent, GetDetailsBtnComponent],
  templateUrl: './drive.component.html',
  styleUrl: './drive.component.scss',
})
export class DriveComponent implements OnInit, OnDestroy {
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
