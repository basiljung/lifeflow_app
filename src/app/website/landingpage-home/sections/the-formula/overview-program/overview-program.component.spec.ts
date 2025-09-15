import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewProgramComponent } from './overview-program.component';

describe('OverviewProgramComponent', () => {
  let component: OverviewProgramComponent;
  let fixture: ComponentFixture<OverviewProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewProgramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
