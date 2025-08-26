import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDetailsBtnComponent } from './get-details-btn.component';

describe('GetDetailsBtnComponent', () => {
  let component: GetDetailsBtnComponent;
  let fixture: ComponentFixture<GetDetailsBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDetailsBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDetailsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
