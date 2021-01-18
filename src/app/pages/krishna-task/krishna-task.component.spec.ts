import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrishnaTaskComponent } from './krishna-task.component';

describe('KrishnaTaskComponent', () => {
  let component: KrishnaTaskComponent;
  let fixture: ComponentFixture<KrishnaTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrishnaTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrishnaTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
