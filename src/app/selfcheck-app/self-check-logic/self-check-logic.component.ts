import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayResultComponent } from './display-result/display-result.component';
import { RESULTDATA_EN, SelfcheckTopics } from '../data/resultData-en';
import { QUESTIONS_EN } from '../data/questions-en';
import { QUESTIONS_DE } from '../data/questions-de';
import { RESULTDATA_DE } from '../data/resultData-de';
import { Subject, takeUntil } from 'rxjs';
import { CtaEmailCourseComponent } from '../../general-elements/cta-email-course/cta-email-course.component';
import { LanguageService } from '../../services/language.service';

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
export class SelfcheckLogicComponent
  implements OnInit, AfterViewInit, OnDestroy
{
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

  ngAfterViewInit() {
    // Prevent loading it multiple times
    if (!document.getElementById('senja-script')) {
      const scriptApp = document.createElement('script');
      scriptApp.id = 'senja-script';
      scriptApp.src =
        'https://widget.senja.io/widget/f7400d7d-3c1e-4fd1-8a78-9e75088c9601/platform.js';
      scriptApp.type = 'text/javascript';
      scriptApp.async = true;
      document.body.appendChild(scriptApp);
    }
  }

  toggleLanguageSelfcheck(lang: string) {
    this.currentLangSelfCheck = lang;
    this.langService.switchLanguage(lang);

    // 🔥 Trigger Google Analytics event
    gtag('event', 'selfcheck_languageSelected', {
      event_category: 'selfcheck',
      event_label: 'Questions answered',
      value: 1,
    });

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
    const lowestAreaKeys: SelfcheckTopics[] = []; // 2) lowest score(s) among non-negative
    const easyWinsKeys: SelfcheckTopics[] = []; // 3) score 0–3 (excluding lowest)
    const goodFlowKeys: SelfcheckTopics[] = []; // 4) score 4–6 (excluding top)
    const topAreasKeys: SelfcheckTopics[] = []; // 5) highest score(s) among 4+

    // First pass: categorize all scores
    const allKeys = Object.keys(this.scores) as SelfcheckTopics[];

    // 1) Identify out of balance (negative scores)
    const negativeKeys = allKeys.filter((key) => this.scores[key] < 0);
    outOfBalanceKeys.push(...negativeKeys);

    // Work with non-negative scores for remaining categories
    const nonNegativeKeys = allKeys.filter((key) => this.scores[key] >= 0);

    if (nonNegativeKeys.length > 0) {
      // 2) Find lowest score(s) among non-negative
      const minScore = Math.min(
        ...nonNegativeKeys.map((key) => this.scores[key]),
      );
      const lowestKeys = nonNegativeKeys.filter(
        (key) => this.scores[key] === minScore,
      );
      lowestAreaKeys.push(...lowestKeys);

      // 3) Easy wins: 0-3 range, excluding those already in lowestAreaKeys
      const easyWinsPool = nonNegativeKeys.filter(
        (key) =>
          this.scores[key] >= 0 &&
          this.scores[key] <= 3 &&
          !lowestKeys.includes(key),
      );
      easyWinsKeys.push(...easyWinsPool);

      // For scores 4+, find the highest
      const highScoreKeys = nonNegativeKeys.filter(
        (key) => this.scores[key] >= 4,
      );

      if (highScoreKeys.length > 0) {
        const maxScore = Math.max(
          ...highScoreKeys.map((key) => this.scores[key]),
        );
        const topKeys = highScoreKeys.filter(
          (key) => this.scores[key] === maxScore,
        );
        topAreasKeys.push(...topKeys);

        // 4) Good flow: 4-6 range, excluding those in topAreasKeys
        const goodFlowPool = highScoreKeys.filter(
          (key) =>
            this.scores[key] >= 4 &&
            this.scores[key] <= 6 &&
            !topKeys.includes(key),
        );
        goodFlowKeys.push(...goodFlowPool);
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
