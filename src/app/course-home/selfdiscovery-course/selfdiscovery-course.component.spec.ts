import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfdiscoveryCourseComponent } from './selfdiscovery-course.component';

describe('SelfdiscoveryCourseComponent', () => {
  let component: SelfdiscoveryCourseComponent;
  let fixture: ComponentFixture<SelfdiscoveryCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfdiscoveryCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfdiscoveryCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
