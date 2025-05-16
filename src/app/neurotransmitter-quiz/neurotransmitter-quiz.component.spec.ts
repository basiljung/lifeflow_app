import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurotransmitterQuizComponent } from './neurotransmitter-quiz.component';

describe('NeurotransmitterQuizComponent', () => {
  let component: NeurotransmitterQuizComponent;
  let fixture: ComponentFixture<NeurotransmitterQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeurotransmitterQuizComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NeurotransmitterQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
