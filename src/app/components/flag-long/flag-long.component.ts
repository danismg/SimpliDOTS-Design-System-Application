import { Component, Input, EventEmitter, Output } from '@angular/core';
import ButtonSetting from 'src/app/models/ButtonSetting';
import InfoFlagLongSetting from 'src/app/models/InfoFlagLongSetting';
import { ColorEnum } from 'src/assets/beheviors/button/ColorEnum';
import { FlagColor, FlagIcon } from 'src/assets/beheviors/flag/FlagMode';
@Component({
  selector: 'flag-long',
  templateUrl: './flag-long.component.html',
  styleUrls: ['./flag-long.component.scss'],
})
export class FlagLongComponent {
  @Input() color: FlagColor = FlagColor.DEFAULT;
  @Input() icon: FlagIcon = FlagIcon.IMAGE;
  @Input() show: boolean = true;

  @Input() title: string = '';
  @Input() info: string = '';
  @Input() btnSettings: ButtonSetting[] = [];
  @Input() infoSettings: InfoFlagLongSetting[] = [];
  @Output() onButtoClick = new EventEmitter<ColorEnum>();

  funcButton(btnSetting: ButtonSetting) {
    // window.open('https://google.com', '_blank');
    if (btnSetting.color === ColorEnum.PRIMARY) {
      this.show = false;
      this.onButtoClick.emit(ColorEnum.PRIMARY);
    } else if (btnSetting.color === ColorEnum.SECONDARY) {
      this.show = false;
      this.onButtoClick.emit(ColorEnum.SECONDARY);
    } else if (btnSetting.color === ColorEnum.DEFAULT) {
      this.onButtoClick.emit(ColorEnum.DEFAULT);
    } else if (btnSetting.color === ColorEnum.SUBTLE) {
      this.onButtoClick.emit(ColorEnum.SUBTLE);
    } else if (btnSetting.color === ColorEnum.LINK) {
      this.onButtoClick.emit(ColorEnum.LINK);
    }
  }
  closeComponent(): void {
    this.show = false;
  }
  getClassBg() {
    return `flag flag__bg-${FlagColor[this.color].toLowerCase()}`;
  }
  getClassTitle() {
    return `flag__title flag__title-${FlagColor[this.color].toLowerCase()}`;
  }
  getClassDesc() {
    return `flag__desc flag__desc-${FlagColor[this.color].toLowerCase()}`;
  }
  getClassIcon() {
    return `./../../../assets/icon/info/ic-${FlagIcon[
      this.icon
    ].toLowerCase()}.svg`;
  }
}
