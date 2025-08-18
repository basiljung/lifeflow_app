import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenjaCoachingTestimonialsComponent } from './senja-coaching-testimonials.component';

describe('SenjaCoachingTestimonialsComponent', () => {
  let component: SenjaCoachingTestimonialsComponent;
  let fixture: ComponentFixture<SenjaCoachingTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenjaCoachingTestimonialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenjaCoachingTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
