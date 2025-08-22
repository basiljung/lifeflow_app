import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTrapComponent } from './section-trap.component';

describe('SectionTrapComponent', () => {
  let component: SectionTrapComponent;
  let fixture: ComponentFixture<SectionTrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
