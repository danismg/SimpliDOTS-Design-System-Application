import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { PriorityComponent } from './priority/priority.component';
import { StatusTableComponent } from './status-table/status-table.component';

@NgModule({
  declarations: [ButtonComponent, PriorityComponent, StatusTableComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, PriorityComponent],
})
export class ComponentsModule {}
