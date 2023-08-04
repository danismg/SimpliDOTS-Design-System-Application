import { Component, Input } from '@angular/core';
import ProgressBarSetting from 'src/app/models/ProgressBarSetting';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() settings: ProgressBarSetting[] = [];

  get totalSize(): number {
    return this.settings.reduce((res, setting) => (res += setting.size), 0);
  }

  getResultWidthPercentage(size: number): string {
    return ((size / this.totalSize) * 100).toString() + '%';
  }
}
