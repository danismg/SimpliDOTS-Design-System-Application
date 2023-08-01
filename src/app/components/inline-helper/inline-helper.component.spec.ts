import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineHelperComponent } from './inline-helper.component';

describe('InlineHelperComponent', () => {
  let component: InlineHelperComponent;
  let fixture: ComponentFixture<InlineHelperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineHelperComponent]
    });
    fixture = TestBed.createComponent(InlineHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
