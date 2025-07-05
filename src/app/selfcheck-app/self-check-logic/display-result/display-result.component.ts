import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { ResultData } from '../self-check-logic.component';
import { CtaWhatsappComponent } from '../../../cta-whatsapp/cta-whatsapp.component';

declare const M: any;

@Component({
  selector: 'app-display-result',
  imports: [CommonModule, CtaWhatsappComponent],
  templateUrl: './display-result.component.html',
  styleUrl: './display-result.component.scss',
})
export class DisplayResultComponent implements OnInit {
  results = input<ResultData>();
  lang = input<string>();

  ngOnInit(): void {
    setTimeout(() => {
      const elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems);
    }, 200);
  }
}
