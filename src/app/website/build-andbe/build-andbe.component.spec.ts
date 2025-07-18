import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildAndbeComponent } from './build-andbe.component';

describe('BuildAndbeComponent', () => {
  let component: BuildAndbeComponent;
  let fixture: ComponentFixture<BuildAndbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildAndbeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildAndbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
