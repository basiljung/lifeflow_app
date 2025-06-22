import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsFAQComponent } from '../details-faq/details-faq.component';
import { SelfcheckLogicComponent } from '../self-check-logic/self-check-logic.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DetailsFAQComponent, SelfcheckLogicComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
