import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../language.service';
import { TopicSelectorComponent } from '../landingpage-home/title-page-top/topic-selector/topic-selector.component';
import { TitlePageComponent } from './title-page/title-page.component';

@Component({
  selector: 'app-landingpage',
  imports: [
    CommonModule,
    RouterModule,
    TitlePageComponent,
    TopicSelectorComponent,
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent implements OnInit {
  lang: string = 'en';
  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.lang = this.langService.getCurrentLang();
  }
}
