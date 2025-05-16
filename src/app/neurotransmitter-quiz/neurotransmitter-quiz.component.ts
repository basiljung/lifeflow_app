import { Component } from '@angular/core';
import { QUESTIONS } from '../data/questions';

type Neurotransmitter = 'oxytocin' | 'serotonin' | 'dopamine' | 'endorphins';

@Component({
  selector: 'app-neurotransmitter-quiz',
  templateUrl: './neurotransmitter-quiz.component.html',
  styleUrls: ['./neurotransmitter-quiz.component.scss'],
})
export class NeurotransmitterQuizComponent {
  currentQuestionIndex = 0;

  questions = QUESTIONS;

  scores: Record<Neurotransmitter, number> = {
    oxytocin: 0,
    serotonin: 0,
    dopamine: 0,
    endorphins: 0,
  };

  selectAnswer(effects: any) {
    for (let key in effects) {
      this.scores[key as Neurotransmitter] += effects[key];
    }
    this.currentQuestionIndex++;
  }

  get isQuizComplete() {
    return this.currentQuestionIndex >= this.questions.length;
  }

  get resultMessage() {
    if (!this.isQuizComplete) return '';
    const results = [];
    for (let key in this.scores) {
      const score = this.scores[key as Neurotransmitter];
      if (score >= 3) {
        results.push(`Possible low ${key}`);
      }
    }
    return results.length > 0 ? results.join(', ') : 'All systems balanced!';
  }
}
