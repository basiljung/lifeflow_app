import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayResultComponent } from './display-result/display-result.component';
import { RESULTDATA_EN, SelfcheckTopics } from '../data/resultData-en';
import { QUESTIONS_EN } from '../data/questions-en';
import { QUESTIONS_DE } from '../data/questions-de';
import { RESULTDATA_DE } from '../data/resultData-de';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { LanguageService } from '../../language.service';

declare var M: any;

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
  imports: [CommonModule, DisplayResultComponent],
  selector: 'app-self-check-logic',
  templateUrl: './self-check-logic.component.html',
  styleUrls: ['./self-check-logic.component.scss'],
})
export class SelfcheckLogicComponent implements AfterViewInit {
  currentQuestionIndex = 0;
  currentLangSelfCheck: string = 'EN';
  showLanguageBtn = true;
  private routerSubscription!: Subscription;
  currentLang: string | null = null;

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

  constructor(
    private router: Router,
    private langService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.setLang();
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setLang();
      });
  }

  ngAfterViewInit() {
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
  }

  toggleLanguageSelfcheck(lang: string) {
    this.currentLangSelfCheck = lang;
    this.langService.triggerToggle(lang);
    if (this.currentLangSelfCheck === 'DE') {
      this.questions = QUESTIONS_DE;
      this.resultData = RESULTDATA_DE;
    } else {
      this.questions = QUESTIONS_EN;
      this.resultData = RESULTDATA_EN;
    }
    this.showLanguageBtn = false;
  }

  setLang() {
    const path = this.router.url;
    const lang = path.split('/')[1];
    if (lang !== this.currentLang) {
      this.currentLang = lang;
      this.changeLanguage();
    }
  }

  changeLanguage() {
    setTimeout(() => {
      const elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems);
    }, 0);
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

    setTimeout(() => {
      const elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems);
    }, 0);
  }
}
