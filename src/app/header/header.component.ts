import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  currentLang: string = 'en';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngAfterViewInit(): void {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }
  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'de' : 'en';

    const segments = this.router.url.split('/').filter(Boolean); // removes empty strings

    // Replace the first segment (language) with newLang
    if (segments.length > 0) {
      segments[0] = this.currentLang;
    } else {
      segments.unshift(this.currentLang); // fallback for just "/"
    }

    // Navigate to the updated path
    this.router.navigate(['/', ...segments]);

    setTimeout(() => {
      const elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems);
    }, 0);
  }
}
