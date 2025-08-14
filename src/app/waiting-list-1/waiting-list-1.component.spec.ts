import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingList1Component } from './waiting-list-1.component';

describe('WaitingList1Component', () => {
  let component: WaitingList1Component;
  let fixture: ComponentFixture<WaitingList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaitingList1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitingList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
