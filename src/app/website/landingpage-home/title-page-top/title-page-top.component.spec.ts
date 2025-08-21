import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePageTopComponent } from './title-page-top.component';

describe('TitlePageTopComponent', () => {
  let component: TitlePageTopComponent;
  let fixture: ComponentFixture<TitlePageTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitlePageTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlePageTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
