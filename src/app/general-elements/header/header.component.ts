import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';
import { CtaEmailCourseComponent } from '../cta-email-course/cta-email-course.component';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, CtaEmailCourseComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  currentLang: string | null = null;
  private destroy$ = new Subject<void>();
  isMenuOpen = false;

  constructor(
    private langService: LanguageService,
    private router: Router,
    private route: ActivatedRoute,
    protected authService: AuthService,
  ) {}

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

  login() {
    this.router.navigate([`/${this.currentLang}/login`]);
  }

  logout() {
    this.router.navigate([`/${this.currentLang}`]);
    this.authService.logout();
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
