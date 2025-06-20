import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailerliteformComponent } from './mailerliteform.component';

describe('MailerliteformComponent', () => {
  let component: MailerliteformComponent;
  let fixture: ComponentFixture<MailerliteformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailerliteformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailerliteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
