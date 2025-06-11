import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RESULTDATA } from '../data/resultData';
import { SelfcheckTopics } from '../data/resultData';
import { CommonModule } from '@angular/common';
import { QUESTIONS_DE } from '../data/questions-de';
import { QUESTIONS_EN } from '../data/questions-en';
import { DisplayResultComponent } from './display-result/display-result.component';

declare var M: any;

export type ResultData = {
  [key: string]: {
    tips: { title: string; text: string }[];
    reasons: string[];
  };
};

@Component({
  standalone: true,
  imports: [CommonModule, DisplayResultComponent],
  selector: 'app-self-check-logic',
  templateUrl: './self-check-logic.component.html',
  styleUrls: ['./self-check-logic.component.scss'],
})
export class SelfcheckLogicComponent implements AfterViewInit {
  currentQuestionIndex = 0;
  currentLangSelfCheck: string = 'EN';
  showLanguageBtn = true;

  questions = QUESTIONS_EN;
  resultData = RESULTDATA;
  showResult = false;
  showQuestions = true;

  scores: Record<SelfcheckTopics, number> = {
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

  resultsOutOfBalance: ResultData = {};

  answerHistory: {
    index: number;
    effects: Record<SelfcheckTopics, number>;
  }[] = [];

  ngAfterViewInit() {
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
  }

  toggleLanguageSelfcheck(lang: string) {
    this.currentLangSelfCheck = lang;
    if (this.currentLangSelfCheck === 'DE') {
      this.questions = QUESTIONS_DE;
    } else {
      this.questions = QUESTIONS_EN;
    }
    this.showLanguageBtn = false;
  }

  selectAnswer(effects: any) {
    this.answerHistory.push({
      index: this.currentQuestionIndex,
      effects: { ...effects },
    });

    for (let key in effects) {
      this.scores[key as SelfcheckTopics] += effects[key];
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
        const ntKey = key as SelfcheckTopics;
        this.scores[ntKey] -= lastAnswer.effects[ntKey];
      }
    }

    this.currentQuestionIndex = lastAnswer.index;
    this.showQuestions = true;
    this.showResult = false;
  }

  isQuizComplete() {
    return this.currentQuestionIndex >= this.questions.length;
  }

  getTestResults() {
    const resultsOutOfBalanceKeys: SelfcheckTopics[] = [];
    const topAreasKeys: SelfcheckTopics[] = [];
    let currentMaxScore = Number.NEGATIVE_INFINITY;

    //Filter for score >= -3 and find max score
    for (let key in this.scores) {
      const score = this.scores[key as SelfcheckTopics];
      if (-3 >= score) {
        resultsOutOfBalanceKeys.push(key as SelfcheckTopics);
        if (score >= 4) {
          if (score > currentMaxScore) {
            currentMaxScore = score;
            topAreasKeys.length = 0;
            topAreasKeys.push(key as SelfcheckTopics);
          } else if (score === currentMaxScore) {
            topAreasKeys.push(key as SelfcheckTopics);
          }
        }
      }
    }

    this.resultsOutOfBalance = resultsOutOfBalanceKeys.reduce(
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
  }
}
