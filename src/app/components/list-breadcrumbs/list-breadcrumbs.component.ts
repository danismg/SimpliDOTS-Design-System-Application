import { Component, Input } from '@angular/core';
import BreadCrumbsSetting from 'src/app/models/BreadCrumbsSetting';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './list-breadcrumbs.component.html',
  styleUrls: ['./list-breadcrumbs.component.scss'],
})
export class ListBreadcrumbsComponent {
  @Input() listBreadCrumbsSettings: BreadCrumbsSetting[] = [];
  getClassName() {
    return `breadcr__text breadcr__text-default`;
  }

  // onclik
}
