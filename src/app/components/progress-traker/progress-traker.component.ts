import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import ProgressTrakerSetting from 'src/app/models/ProgressTrakerSetting';
import {
  ProgressTrakerCondition,
  ProgressTrakerMode,
} from 'src/assets/beheviors/progress-traker/ProgressTrakerMode';

@Component({
  selector: 'progress-traker',
  templateUrl: './progress-traker.component.html',
  styleUrls: ['./progress-traker.component.scss'],
})
export class ProgressTrakerComponent {
  @Input() settings: ProgressTrakerSetting[] = [];
  @Output() trackerClick: EventEmitter<ProgressTrakerSetting> =
    new EventEmitter<ProgressTrakerSetting>();
  @ViewChild('targetDiv') targetDiv!: ElementRef;

  get progressTrackerMode(): typeof ProgressTrakerMode {
    return ProgressTrakerMode;
  }

  noActive(): void {
    console.log('Focus Is Lost for this Element');
  }

  handleClick(key: ProgressTrakerSetting) {
    this.settings.forEach((setting) => {
      setting.mode = ProgressTrakerMode.DEFAULT;
      if (key.mode === ProgressTrakerMode.DEFAULT) {
        key.mode = ProgressTrakerMode.SELECTED;
      }
    });

    this.trackerClick.emit(key);
  }

  changeMode(mode: ProgressTrakerMode) {
    return `trackers__ic-number trackers__left trackers__left-${ProgressTrakerMode[
      mode
    ].toLowerCase()}`;
  }

  changeColorBg(color: ProgressTrakerMode) {
    return `trackers__titles-${ProgressTrakerMode[color].toLowerCase()}`;
  }
}
