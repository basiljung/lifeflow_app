import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';
import { Subject, takeUntil } from 'rxjs';

declare var M: any;

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit, OnInit {
  private destroy$ = new Subject<void>();
  currentLang: string | null = null;

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.langService.lang$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  ngAfterViewInit(): void {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }

  toggleLanguage(lang: string) {
    this.langService.switchLanguage(lang);
  }
}
