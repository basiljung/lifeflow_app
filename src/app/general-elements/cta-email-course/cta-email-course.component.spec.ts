import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaEmailCourseComponent } from './cta-email-course.component';

describe('CtaEmailCourseComponent', () => {
  let component: CtaEmailCourseComponent;
  let fixture: ComponentFixture<CtaEmailCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaEmailCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaEmailCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
