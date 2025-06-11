import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ResultData } from '../self-check-logic.component';

@Component({
  selector: 'app-display-result',
  imports: [CommonModule],
  templateUrl: './display-result.component.html',
  styleUrl: './display-result.component.scss',
})
export class DisplayResultComponent {
  resultsOutOfBalance = input<ResultData>();
}
