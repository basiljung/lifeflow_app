import { AfterViewInit, Component } from '@angular/core';

declare var ml: any;

@Component({
  selector: 'app-mailerliteform',
  imports: [],
  templateUrl: './mailerliteform.component.html',
  styleUrl: './mailerliteform.component.scss',
})
export class MailerliteformComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof ml !== 'undefined') {
      ml('form', 'load');
    }
  }
}
