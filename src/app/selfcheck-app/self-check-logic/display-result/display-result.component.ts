import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, computed, input, OnInit, signal } from '@angular/core';
import { ResultData } from '../self-check-logic.component';
import { CtaWhatsappComponent } from '../../../general-elements/cta-whatsapp/cta-whatsapp.component';

type ResultEntry = {
  key: string;
  value: {
    area: string;
    reasons: string[];
    tips: { title: string; text: string }[];
    input: string;
  };
};
@Component({
  selector: 'app-display-result',
  imports: [CommonModule, CtaWhatsappComponent, TitleCasePipe],
  templateUrl: './display-result.component.html',
  styleUrl: './display-result.component.scss',
})
export class DisplayResultComponent implements OnInit {
  results = input<ResultData | null>(null);
  lang = input<string>('en');

  ngOnInit(): void {}

  resultEntries = computed<ResultEntry[]>(() => {
    const r = this.results();
    if (!r) return [];
    return Object.entries(r).map(
      ([key, value]) => ({ key, value }) as ResultEntry,
    );
  });

  openIndex = signal<number | null>(null);

  toggle(i: number) {
    this.openIndex.update((curr) => (curr === i ? null : i));
  }
}
