import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFAQComponent } from './details-faq.component';

describe('DetailsFAQComponent', () => {
  let component: DetailsFAQComponent;
  let fixture: ComponentFixture<DetailsFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsFAQComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
