import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-section-default-2col',
  imports: [CommonModule],
  templateUrl: './section-default-2col.component.html',
  styleUrl: './section-default-2col.component.scss',
})
export class SectionDefault2ColComponent implements OnInit {
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
