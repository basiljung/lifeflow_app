import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsFAQComponent } from '../details-faq/details-faq.component';
import { NeurotransmitterQuizComponent } from '../neurotransmitter-quiz/neurotransmitter-quiz.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DetailsFAQComponent, NeurotransmitterQuizComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
