import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheFormulaComponent } from './the-formula.component';

describe('TheFormulaComponent', () => {
  let component: TheFormulaComponent;
  let fixture: ComponentFixture<TheFormulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheFormulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
