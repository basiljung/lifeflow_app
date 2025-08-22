import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForWhoIsItComponent } from './for-who-is-it.component';

describe('ForWhoIsItComponent', () => {
  let component: ForWhoIsItComponent;
  let fixture: ComponentFixture<ForWhoIsItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForWhoIsItComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForWhoIsItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
