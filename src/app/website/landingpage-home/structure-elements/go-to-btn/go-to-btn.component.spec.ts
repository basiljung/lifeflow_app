import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToBtnComponent } from './go-to-btn.component';

describe('GoToBtnComponent', () => {
  let component: GoToBtnComponent;
  let fixture: ComponentFixture<GoToBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoToBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoToBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
