import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqWebsiteComponent } from './faq-website.component';

describe('FaqWebsiteComponent', () => {
  let component: FaqWebsiteComponent;
  let fixture: ComponentFixture<FaqWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqWebsiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
