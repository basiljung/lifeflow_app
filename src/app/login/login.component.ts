import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  currentLang: string | null = null;
  email = '';
  password = '';
  errorMessage = '';
  isSignUp = false;

  constructor(
    private langService: LanguageService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.langService.lang$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  async onSubmit() {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    const result = this.isSignUp
      ? await this.authService.signUp(this.email, this.password)
      : await this.authService.login(this.email, this.password);

    if (result.success) {
      const returnUrl =
        this.route.snapshot.queryParams['returnUrl'] ||
        `/${this.currentLang}/course-home`;
      this.router.navigateByUrl(returnUrl);
      //this.router.navigate([`/${this.currentLang}/course-home`]);
    } else {
      this.errorMessage = result.error || 'Authentication failed';
    }
  }

  toggleMode() {
    this.isSignUp = !this.isSignUp;
    this.errorMessage = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
