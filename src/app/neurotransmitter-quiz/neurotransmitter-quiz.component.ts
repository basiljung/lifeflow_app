import { AfterViewInit, Component } from '@angular/core';
import { QUESTIONS } from '../data/questions';
import { RESULTDATA } from '../data/resultData';
import { Neurotransmitter } from '../data/resultData';
import { CommonModule } from '@angular/common';

declare var M: any;

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-neurotransmitter-quiz',
  templateUrl: './neurotransmitter-quiz.component.html',
  styleUrls: ['./neurotransmitter-quiz.component.scss'],
})
export class NeurotransmitterQuizComponent implements AfterViewInit {
  currentQuestionIndex = 0;

  questions = QUESTIONS;
  resultData = RESULTDATA;
  showResult = false;
  showQuestions = true;

  ngAfterViewInit() {
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
  }

  scores: Record<Neurotransmitter, number> = {
    oxytocin: 0,
    serotonin: 0,
    dopamine: 0,
    endorphins: 0,
    ziel: 0,
    machbarkeit: 0,
    sinn: 0,
  };
  resultDataSet: {
    [key: string]: {
      tips: { title: string; text: string }[];
      reasons: string[];
    };
  } = {};

  selectAnswer(effects: any) {
    for (let key in effects) {
      this.scores[key as Neurotransmitter] += effects[key];
    }
    this.currentQuestionIndex++;

    if (this.isQuizComplete()) {
      this.showQuestions = false;
      this.showResult = true;
      this.getTestResults();
    }
  }

  isQuizComplete() {
    return this.currentQuestionIndex >= this.questions.length;
  }

  getTestResults() {
    const results = [];
    for (let key in this.scores) {
      const score = this.scores[key as Neurotransmitter];
      if (score >= 3) {
        results.push(key);
      }
    }
    this.resultDataSet = results.reduce(
      (acc, key) => {
        if (this.resultData[key]) {
          acc[key] = this.resultData[key];
        }
        return acc;
      },
      {} as {
        [key: string]: {
          tips: { title: string; text: string }[];
          reasons: string[];
        };
      },
    );

    setTimeout(() => {
      const elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems);
    }, 0);
    return this.resultDataSet;
  }
}
