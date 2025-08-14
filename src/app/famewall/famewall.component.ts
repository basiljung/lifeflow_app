import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-famewall',
  imports: [],
  templateUrl: './famewall.component.html',
  styleUrl: './famewall.component.scss',
})
export class FamewallComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Load the iFrameResizer script dynamically
    const script = this.renderer.createElement('script');
    script.src = 'https://page.famewall.io/iframeResizer.min.js';
    script.onload = () => {
      // @ts-ignore - this comes from the external script
      iFrameResize(
        { log: false, checkOrigin: false },
        '#famewall-collection-embed',
      );
    };
    this.renderer.appendChild(document.body, script);
  }
}
