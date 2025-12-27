import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CtaEmailCourseComponent } from '../cta-email-course/cta-email-course.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, CtaEmailCourseComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private destroy$ = new Subject<void>();
  currentLang: string | null = null;
  isMenuOpen = false;

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.langService.lang$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  toggleLanguage(lang: string) {
    this.langService.switchLanguage(lang);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
