import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopicSelectorComponent } from '../topic-selector/topic-selector.component';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-title-page',
  imports: [CommonModule, RouterModule, TopicSelectorComponent],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.scss',
})
export class TitlePageComponent {
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
