import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionDefault2ColComponent } from './section-default-2col.component';

describe('SectionDefault2ColComponent', () => {
  let component: SectionDefault2ColComponent;
  let fixture: ComponentFixture<SectionDefault2ColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionDefault2ColComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionDefault2ColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
