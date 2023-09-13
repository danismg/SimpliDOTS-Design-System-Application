import { Component, Input, Output, EventEmitter } from '@angular/core';
import ButtonSetting from 'src/app/models/ButtonSetting';
import ProgressIndicatorSetting from 'src/app/models/ProgressIndicatorSetting';
import { ColorEnum } from 'src/assets/beheviors/button/ColorEnum';
import { SpacingEnum } from 'src/assets/beheviors/button/SpacingEnum';

@Component({
  selector: 'progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
})
export class ProgressIndicatorComponent {
  @Input() settings: ProgressIndicatorSetting[] = [];
  @Input() title: string = 'Text';
  // @Input() description: string = '';
  @Input() btnSettings: ButtonSetting[] = [];
  @Input() show: boolean = true;
  @Output() onButtoClick = new EventEmitter<ButtonSetting>();

  funcButton(btnSetting: ButtonSetting) {
    this.onButtoClick.emit(btnSetting);
    if (btnSetting.color === ColorEnum.SUBTLE && btnSetting.title === 'Batal') {
      this.show = false;
    }
    if (
      btnSetting.color === ColorEnum.PRIMARY &&
      btnSetting.title === 'Simpan Kriteria'
    ) {
      this.show = false;
    }
  }
  get colorBtn(): typeof ColorEnum {
    return ColorEnum;
  }
  get spacingBtn(): typeof SpacingEnum {
    return SpacingEnum;
  }
}
