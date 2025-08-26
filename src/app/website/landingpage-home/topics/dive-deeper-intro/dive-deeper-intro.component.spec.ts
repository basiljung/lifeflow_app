import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveDeeperIntroComponent } from './dive-deeper-intro.component';

describe('DiveDeeperIntroComponent', () => {
  let component: DiveDeeperIntroComponent;
  let fixture: ComponentFixture<DiveDeeperIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiveDeeperIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiveDeeperIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
