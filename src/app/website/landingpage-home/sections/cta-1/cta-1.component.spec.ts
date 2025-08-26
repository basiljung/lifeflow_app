import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cta1Component } from './cta-1.component';

describe('Cta1Component', () => {
  let component: Cta1Component;
  let fixture: ComponentFixture<Cta1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cta1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
