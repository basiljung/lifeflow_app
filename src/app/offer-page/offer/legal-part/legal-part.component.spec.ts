import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalPartComponent } from './legal-part.component';

describe('LegalPartComponent', () => {
  let component: LegalPartComponent;
  let fixture: ComponentFixture<LegalPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
