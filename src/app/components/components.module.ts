import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { PriorityComponent } from './priority/priority.component';
import { StatusTableComponent } from './status-table/status-table.component';
import { ListBreadcrumbsComponent } from './list-breadcrumbs/list-breadcrumbs.component';
import { ListBreadcrumbsModule } from './list-breadcrumbs/list-breadcrumbs.module';
import { OnboardingModalComponent } from './onboarding-modal/onboarding-modal.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    ButtonComponent,
    PriorityComponent,
    StatusTableComponent,
    OnboardingModalComponent,
    EmptyStateComponent,
    BannerComponent,
    // ListBreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
    // ListBreadcrumbsModule
  ],
  exports: [
    ButtonComponent,
    PriorityComponent,
    StatusTableComponent,
    // ListBreadcrumbsModule,
    OnboardingModalComponent,
    EmptyStateComponent,
    BannerComponent,
  ],
})
export class ComponentsModule {}
