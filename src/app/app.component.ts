import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailsFAQComponent } from './details-faq/details-faq.component';
import { NeurotransmitterQuizComponent } from './neurotransmitter-quiz/neurotransmitter-quiz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DetailsFAQComponent, NeurotransmitterQuizComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'neurotransmitter-quiz';
}
