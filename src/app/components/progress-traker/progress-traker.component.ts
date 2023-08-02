import { Component, Input } from '@angular/core';
import ProgressTrakerSetting from 'src/app/models/ProgressTrakerSetting';

@Component({
  selector: 'progress-traker',
  templateUrl: './progress-traker.component.html',
  styleUrls: ['./progress-traker.component.scss'],
})
export class ProgressTrakerComponent {
  @Input() settings: ProgressTrakerSetting[] = [
    {
      id: 1,
      title: 'Label',
      description: 'Description',
    },
    {
      id: 2,
      title: 'Label1',
      description: 'Description1',
    },
    {
      id: 3,
      title: 'Label2',
      description: 'Description2',
    },
    {
      id: 4,
      title: 'Label3',
      description: 'Description3',
    },
  ];
}
