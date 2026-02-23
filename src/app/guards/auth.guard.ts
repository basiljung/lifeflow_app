import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth, authState } from '@angular/fire/auth';
import { map, take } from 'rxjs/operators';
import { LanguageService } from '../services/language.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);
  const langService = inject(LanguageService);

  return authState(auth).pipe(
    take(1),
    map((user) => {
      if (user) return true;
      router.navigate([`/${langService.getCurrentLang()}/login`], {
        queryParams: { returnUrl: state.url },
      });

      return false;
    }),
  );
};
