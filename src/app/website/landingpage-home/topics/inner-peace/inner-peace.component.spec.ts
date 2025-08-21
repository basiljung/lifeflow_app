import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerPeaceComponent } from './inner-peace.component';

describe('InnerPeaceComponent', () => {
  let component: InnerPeaceComponent;
  let fixture: ComponentFixture<InnerPeaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerPeaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerPeaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
