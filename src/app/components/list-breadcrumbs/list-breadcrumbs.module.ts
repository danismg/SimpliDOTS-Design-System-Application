import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ListBreadcrumbsComponent } from './list-breadcrumbs.component';

@NgModule({
  declarations: [
    // BreadcrumbComponent,
    ListBreadcrumbsComponent,
  ],
  imports: [CommonModule],
  exports: [
    // BreadcrumbComponent,
    ListBreadcrumbsComponent,
  ],
})
export class ListBreadcrumbsModule {}
