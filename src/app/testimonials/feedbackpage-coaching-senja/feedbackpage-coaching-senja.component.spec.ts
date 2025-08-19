import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackpageCoachingSenjaComponent } from './feedbackpage-coaching-senja.component';

describe('FeedbackpageCoachingSenjaComponent', () => {
  let component: FeedbackpageCoachingSenjaComponent;
  let fixture: ComponentFixture<FeedbackpageCoachingSenjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackpageCoachingSenjaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackpageCoachingSenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
