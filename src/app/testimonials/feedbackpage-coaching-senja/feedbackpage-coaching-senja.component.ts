import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';

declare global {
  interface Window {
    iFrameResize?: any;
  }
}

@Component({
  selector: 'app-feedbackpage-coaching-senja',
  imports: [],
  templateUrl: './feedbackpage-coaching-senja.component.html',
  styleUrl: './feedbackpage-coaching-senja.component.scss',
})
export class FeedbackpageCoachingSenjaComponent implements AfterViewInit {
  @ViewChild('senjaIframe') senjaIframe!: ElementRef<HTMLIFrameElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && window.iFrameResize) {
      window.iFrameResize(
        { log: false, checkOrigin: false },
        this.senjaIframe.nativeElement,
      );
    }
  }
}
