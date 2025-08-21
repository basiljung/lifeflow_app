import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicStructureComponent } from './topic-structure.component';

describe('TopicStructureComponent', () => {
  let component: TopicStructureComponent;
  let fixture: ComponentFixture<TopicStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicStructureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
