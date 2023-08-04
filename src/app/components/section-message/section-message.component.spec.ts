import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMessageComponent } from './section-message.component';

describe('SectionMessageComponent', () => {
  let component: SectionMessageComponent;
  let fixture: ComponentFixture<SectionMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionMessageComponent]
    });
    fixture = TestBed.createComponent(SectionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
