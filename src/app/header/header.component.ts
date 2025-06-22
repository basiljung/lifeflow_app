import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

declare var M: any;

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit, OnInit {
  currentLang: string = 'en';

  constructor(
    private router: Router,
    private langService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.langService.toggleLang$.subscribe((lang) => {
      this.toggleLanguage(lang);
    });
  }

  ngAfterViewInit(): void {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }

  toggleLanguage(lang: string) {
    const newLang = lang;

    this.currentLang = newLang;
    this.langService.setLanguage(newLang);

    const segments = this.router.url.split('/').filter(Boolean);
    segments[0] = newLang;
    this.router.navigate(['/', ...segments]);

    setTimeout(() => {
      const elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems);
    }, 0);
  }
}
