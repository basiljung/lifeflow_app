import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSection2Component } from './default-section-2.component';

describe('DefaultSection2Component', () => {
  let component: DefaultSection2Component;
  let fixture: ComponentFixture<DefaultSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultSection2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
