import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagLongComponent } from './flag-long.component';

describe('FlagLongComponent', () => {
  let component: FlagLongComponent;
  let fixture: ComponentFixture<FlagLongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlagLongComponent],
    });
    fixture = TestBed.createComponent(FlagLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
