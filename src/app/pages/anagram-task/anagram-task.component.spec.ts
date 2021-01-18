import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagramTaskComponent } from './anagram-task.component';

describe('AnagramTaskComponent', () => {
  let component: AnagramTaskComponent;
  let fixture: ComponentFixture<AnagramTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagramTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagramTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
