import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressTrakerComponent } from './progress-traker.component';

describe('ProgressTrakerComponent', () => {
  let component: ProgressTrakerComponent;
  let fixture: ComponentFixture<ProgressTrakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressTrakerComponent]
    });
    fixture = TestBed.createComponent(ProgressTrakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
