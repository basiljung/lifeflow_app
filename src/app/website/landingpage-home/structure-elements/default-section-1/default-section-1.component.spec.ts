import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSection1Component } from './default-section-1.component';

describe('DefaultSection1Component', () => {
  let component: DefaultSection1Component;
  let fixture: ComponentFixture<DefaultSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultSection1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
