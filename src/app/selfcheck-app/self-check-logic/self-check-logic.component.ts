import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayResultComponent } from './display-result/display-result.component';
import { RESULTDATA_EN, SelfcheckTopics } from '../data/resultData-en';
import { QUESTIONS_EN } from '../data/questions-en';
import { QUESTIONS_DE } from '../data/questions-de';
import { RESULTDATA_DE } from '../data/resultData-de';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../language.service';
import { CtaEmailCourseComponent } from '../../cta-email-course/cta-email-course.component';

declare function gtag(command: string, target: string, params?: any): void;

export type ResultData = {
  [key in SelfcheckTopics]: {
    area: string;
    tips: { title: string; text: string }[];
    reasons: string[];
    input: string;
  };
};

@Component({
  standalone: true,
  imports: [CommonModule, DisplayResultComponent, CtaEmailCourseComponent],
  selector: 'app-self-check-logic',
  templateUrl: './self-check-logic.component.html',
  styleUrls: ['./self-check-logic.component.scss'],
})
export class SelfcheckLogicComponent implements OnInit, OnDestroy {
  currentQuestionIndex = 0;
  currentLangSelfCheck: string = 'en';
  showLanguageBtn = true;
  currentLang: string | null = null;
  private destroy$ = new Subject<void>();

  questions = QUESTIONS_EN;
  resultData: ResultData = RESULTDATA_EN;
  showResult = false;
  showQuestions = true;

  scores: Record<SelfcheckTopics, number> = {
    clarity_goal: 0,
    feasibility_challenge: 0,
    emotional_space: 0,
    structure_focus: 0,
    meaning: 0,
    oxytocin: 0,
    dopamine: 0,
    serotonin: 0,
    endorphins: 0,
  };

  answerHistory: {
    index: number;
    effects: Record<SelfcheckTopics, number>;
  }[] = [];

  resultDataSet: {
    outOfBalance: ResultData;
    lowestAreaPotential: ResultData;
    easyWins: ResultData;
    goodFlow: ResultData;
    topAreas: ResultData;
  } = {
    outOfBalance: {} as ResultData,
    lowestAreaPotential: {} as ResultData,
    easyWins: {} as ResultData,
    goodFlow: {} as ResultData,
    topAreas: {} as ResultData,
  };
  //dummy
  /*   {
    outOfBalance: {},
    lowestAreaPotential: this.resultData,
    easyWins: this.resultData,
    goodFlow: this.resultData,
    topAreas: this.resultData,
  }; */

  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.langService.lang$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  toggleLanguageSelfcheck(lang: string) {
    this.currentLangSelfCheck = lang;
    this.langService.switchLanguage(lang);
    if (this.currentLangSelfCheck === 'de') {
      this.questions = QUESTIONS_DE;
      this.resultData = RESULTDATA_DE;
    } else {
      this.questions = QUESTIONS_EN;
      this.resultData = RESULTDATA_EN;
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

    gtag('event', 'selfcheck_ongoing', {
      event_category: 'selfcheck',
      event_label: 'Questions answered',
      value: this.currentQuestionIndex,
    });

    if (this.isQuizComplete()) {
      // 🔥 Trigger Google Analytics event
      gtag('event', 'selfcheck_completed', {
        event_category: 'selfcheck',
        event_label: 'User completed quiz',
        value: 1,
      });
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
    const outOfBalanceKeys: SelfcheckTopics[] = []; // 1) score < 0
    const lowestAreaKeys: SelfcheckTopics[] = []; // 2) lowest score(s)
    const easyWinsKeys: SelfcheckTopics[] = []; // 3) score 0–3
    const goodFlowKeys: SelfcheckTopics[] = []; // 4) score 4–6
    const topAreasKeys: SelfcheckTopics[] = []; // 5) highest score(s)

    let currentMinScore = Number.POSITIVE_INFINITY;
    let currentMaxScore = Number.NEGATIVE_INFINITY;

    for (let key in this.scores) {
      const score = this.scores[key as SelfcheckTopics];

      // 1) Out of balance
      if (score < 0) {
        outOfBalanceKeys.push(key as SelfcheckTopics);
      }

      // 2) Most potential
      if (score < currentMinScore) {
        currentMinScore = score;
        lowestAreaKeys.length = 0;
        lowestAreaKeys.push(key as SelfcheckTopics);
      } else if (score === currentMinScore) {
        lowestAreaKeys.push(key as SelfcheckTopics);
      }

      // 3) Easy wins
      if (score >= 0 && score <= 3) {
        easyWinsKeys.push(key as SelfcheckTopics);
      }

      // 4) Good flow
      if (score >= 4 && score <= 6) {
        goodFlowKeys.push(key as SelfcheckTopics);
      }

      // 5) Top areas
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

    const reduceToResultData = (keys: SelfcheckTopics[]) => {
      return keys.reduce((acc, key) => {
        if (this.resultData[key]) {
          acc[key] = this.resultData[key];
        }
        return acc;
      }, {} as ResultData);
    };

    // Assign categorized results -- comment for dummy
    this.resultDataSet = {
      outOfBalance: reduceToResultData(outOfBalanceKeys),
      lowestAreaPotential: reduceToResultData(lowestAreaKeys),
      easyWins: reduceToResultData(easyWinsKeys),
      goodFlow: reduceToResultData(goodFlowKeys),
      topAreas: reduceToResultData(topAreasKeys),
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
