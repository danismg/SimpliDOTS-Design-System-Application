import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { PriorityComponent } from './priority/priority.component';
import { StatusTableComponent } from './status-table/status-table.component';
import { OnboardingModalComponent } from './onboarding-modal/onboarding-modal.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { BannerComponent } from './banner/banner.component';
import { InlineHelperComponent } from './inline-helper/inline-helper.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressTrakerComponent } from './progress-traker/progress-traker.component';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { SectionMessageComponent } from './section-message/section-message.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { FlagLongComponent } from './flag-long/flag-long.component';
import { FlagComponent } from './flag/flag.component';
import { TextareaComponent } from './textarea/textarea.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { ListBreadcrumbsComponent } from './list-breadcrumbs/list-breadcrumbs.component';

@NgModule({
  declarations: [
    ButtonComponent,
    PriorityComponent,
    StatusTableComponent,
    OnboardingModalComponent,
    EmptyStateComponent,
    BannerComponent,
    FlagLongComponent,
    InlineHelperComponent,
    ProgressBarComponent,
    ProgressTrakerComponent,
    ProgressIndicatorComponent,
    SectionMessageComponent,
    TextFieldComponent,
    FlagComponent,
    TextareaComponent,
    PaginationComponent,
    CheckboxComponent,
    ListBreadcrumbsComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ButtonComponent,
    PriorityComponent,
    StatusTableComponent,
    ListBreadcrumbsComponent,
    OnboardingModalComponent,
    EmptyStateComponent,
    BannerComponent,
    FlagLongComponent,
    InlineHelperComponent,
    ProgressBarComponent,
    ProgressTrakerComponent,
    ProgressIndicatorComponent,
    SectionMessageComponent,
    TextFieldComponent,
    FlagComponent,
    TextareaComponent,
    PaginationComponent,
    CheckboxComponent,
  ],
})
export class ComponentsModule {}
