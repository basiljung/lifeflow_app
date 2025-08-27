import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCourseSignupPageComponent } from './email-course-signup-page.component';

describe('EmailCourseSignupPageComponent', () => {
  let component: EmailCourseSignupPageComponent;
  let fixture: ComponentFixture<EmailCourseSignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailCourseSignupPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailCourseSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
