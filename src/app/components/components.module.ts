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
import { FlagComponent } from './flag/flag.component';
import { FlagDescComponent } from './flag-desc/flag-desc.component';
import { FlagLongComponent } from './flag-long/flag-long.component';
import { InlineHelperComponent } from './inline-helper/inline-helper.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    ButtonComponent,
    PriorityComponent,
    StatusTableComponent,
    OnboardingModalComponent,
    EmptyStateComponent,
    BannerComponent,
    FlagComponent,
    FlagDescComponent,
    FlagLongComponent,
    InlineHelperComponent,
    ProgressBarComponent,
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
    // ListBreadcrumbsComponent,
    OnboardingModalComponent,
    EmptyStateComponent,
    BannerComponent,
    FlagComponent,
    FlagDescComponent,
    FlagLongComponent,
    InlineHelperComponent,
    ProgressBarComponent,
  ],
})
export class ComponentsModule {}
