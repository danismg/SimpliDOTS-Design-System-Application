import { Component, Input, Output, EventEmitter } from '@angular/core';
import ProgressTrakerSetting from 'src/app/models/ProgressTrakerSetting';
import { ProgressTrakerMode } from 'src/assets/beheviors/progress-traker/ProgressTrakerMode';

@Component({
  selector: 'progress-traker',
  templateUrl: './progress-traker.component.html',
  styleUrls: ['./progress-traker.component.scss'],
})
export class ProgressTrakerComponent {
  @Input() settings: ProgressTrakerSetting[] = [];
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  mode!: ProgressTrakerMode;

  handleClick() {
    this.mode = ProgressTrakerMode.SELECTED;
    this.onClick.emit();
  }
}
