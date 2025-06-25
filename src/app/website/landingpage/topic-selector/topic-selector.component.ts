import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-topic-selector',
  imports: [RouterModule],
  templateUrl: './topic-selector.component.html',
  styleUrl: './topic-selector.component.scss',
})
export class TopicSelectorComponent implements OnInit {
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
