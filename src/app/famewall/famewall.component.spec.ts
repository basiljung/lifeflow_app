import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamewallComponent } from './famewall.component';

describe('FamewallComponent', () => {
  let component: FamewallComponent;
  let fixture: ComponentFixture<FamewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamewallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
