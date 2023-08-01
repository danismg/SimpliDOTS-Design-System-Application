import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagDescComponent } from './flag-desc.component';

describe('FlagDescComponent', () => {
  let component: FlagDescComponent;
  let fixture: ComponentFixture<FlagDescComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlagDescComponent]
    });
    fixture = TestBed.createComponent(FlagDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
