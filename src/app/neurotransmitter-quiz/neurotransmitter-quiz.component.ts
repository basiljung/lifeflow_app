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

  scores: Record<Neurotransmitter, number> = {
    clarity: 0,
    challenge: 0,
    space: 0,
    structure: 0,
    focus: 0,
    feasibility: 0,
    goal: 0,
    meaning: 0,
    oxytocin: 0,
    dopamine: 0,
    serotonin: 0,
    endorphins: 0,
  };
  resultDataSet: {
    [key: string]: {
      tips: { title: string; text: string }[];
      reasons: string[];
    };
  } = {};

  answerHistory: {
    index: number;
    effects: Record<Neurotransmitter, number>;
  }[] = [];

  ngAfterViewInit() {
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
  }

  selectAnswer(effects: any) {
    this.answerHistory.push({
      index: this.currentQuestionIndex,
      effects: { ...effects },
    });

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

  goBack() {
    if (this.answerHistory.length === 0 || this.currentQuestionIndex === 0)
      return;

    const lastAnswer = this.answerHistory.pop()!;

    for (let key in lastAnswer.effects) {
      if (key in this.scores) {
        const ntKey = key as Neurotransmitter;
        this.scores[ntKey] -= lastAnswer.effects[ntKey];
      }
    }

    // Zurück zur letzten Frage
    this.currentQuestionIndex = lastAnswer.index;
    this.showQuestions = true;
    this.showResult = false;
  }

  isQuizComplete() {
    return this.currentQuestionIndex >= this.questions.length;
  }

  getTestResults() {
    const results: Neurotransmitter[] = [];
    for (let key in this.scores) {
      const score = this.scores[key as Neurotransmitter];
      if (score >= 3) {
        results.push(key as Neurotransmitter);
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
