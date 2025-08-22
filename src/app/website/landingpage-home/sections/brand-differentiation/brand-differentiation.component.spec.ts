import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandDifferentiationComponent } from './brand-differentiation.component';

describe('BrandDifferentiationComponent', () => {
  let component: BrandDifferentiationComponent;
  let fixture: ComponentFixture<BrandDifferentiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandDifferentiationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandDifferentiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
