import { Injectable, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  user,
  User,
} from '@angular/fire/auth';
import { Observable, Subject, takeUntil } from 'rxjs';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private destroy$ = new Subject<void>();
  user$: Observable<User | null>;
  currentUser = signal<User | null>(null);
  currentLang: string | null = null;

  constructor(
    private auth: Auth,
    private langService: LanguageService,
  ) {
    this.user$ = user(this.auth);

    // Update the signal whenever auth state changes
    this.user$.subscribe((user) => {
      this.currentUser.set(user);
    });
  }

  ngOnInit(): void {
    this.langService.lang$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  // Sign up with email and password
  async signUp(email: string, password: string) {
    try {
      const credential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password,
      );
      return { success: true, user: credential.user };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  // Login with email and password
  async login(email: string, password: string) {
    try {
      const credential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password,
      );
      return { success: true, user: credential.user };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  // Logout
  async logout() {
    try {
      await signOut(this.auth);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return this.currentUser() !== null;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
