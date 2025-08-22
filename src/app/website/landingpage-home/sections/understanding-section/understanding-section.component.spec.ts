import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingSectionComponent } from './understanding-section.component';

describe('UnderstandingSectionComponent', () => {
  let component: UnderstandingSectionComponent;
  let fixture: ComponentFixture<UnderstandingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
