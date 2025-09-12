import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFormulaComponent } from './carousel-formula.component';

describe('CarouselFormulaComponent', () => {
  let component: CarouselFormulaComponent;
  let fixture: ComponentFixture<CarouselFormulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselFormulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
