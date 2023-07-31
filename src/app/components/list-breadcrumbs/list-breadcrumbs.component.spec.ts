import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBreadcrumbsComponent } from './list-breadcrumbs.component';

describe('ListBreadcrumbsComponent', () => {
  let component: ListBreadcrumbsComponent;
  let fixture: ComponentFixture<ListBreadcrumbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBreadcrumbsComponent],
    });
    fixture = TestBed.createComponent(ListBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
