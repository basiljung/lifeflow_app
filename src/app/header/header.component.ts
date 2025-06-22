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

    // Current URL segments as an array
    const currentSegments = this.route.snapshot.url.map(
      (segment) => segment.path,
    );

    // Replace the first segment (language) with the new language
    if (currentSegments.length > 0) {
      currentSegments[0] = this.currentLang;
    } else {
      currentSegments.unshift(this.currentLang); // fallback if somehow empty
    }

    this.router.navigate(currentSegments);

    setTimeout(() => {
      const elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems);
    }, 0);
  }
}
