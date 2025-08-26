import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../../services/language.service';
import { TopicStructureComponent } from '../topic-structure/topic-structure.component';
import { DiveDeeperIntroComponent } from '../dive-deeper-intro/dive-deeper-intro.component';

@Component({
  selector: 'app-drive',
  imports: [TopicStructureComponent, DiveDeeperIntroComponent],
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
