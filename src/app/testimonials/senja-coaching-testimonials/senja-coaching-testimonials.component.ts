import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-senja-coaching-testimonials',
  imports: [],
  templateUrl: './senja-coaching-testimonials.component.html',
  styleUrl: './senja-coaching-testimonials.component.scss',
})
export class SenjaCoachingTestimonialsComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Prevent loading it multiple times
    if (!document.getElementById('senja-script')) {
      const scriptVideo = document.createElement('script');
      scriptVideo.id = 'senja-script';
      scriptVideo.src =
        'https://widget.senja.io/widget/a2526f95-ae2e-42b8-96eb-964c4008cb71/platform.js';
      scriptVideo.type = 'text/javascript';
      scriptVideo.async = true;
      document.body.appendChild(scriptVideo);

      const scriptText = document.createElement('script');
      scriptText.id = 'senja-script';
      scriptText.src =
        'https://widget.senja.io/widget/9ec9d44d-91fd-438a-ae2b-a74601326aaa/platform.js';
      scriptText.type = 'text/javascript';
      scriptText.async = true;
      document.body.appendChild(scriptText);
    }
  }
}
