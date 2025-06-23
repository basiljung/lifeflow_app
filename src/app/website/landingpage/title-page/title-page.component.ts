import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopicSelectorComponent } from '../topic-selector/topic-selector.component';

@Component({
  selector: 'app-title-page',
  imports: [CommonModule, RouterModule, TopicSelectorComponent],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.scss',
})
export class TitlePageComponent {}
