import { Component, Input, EventEmitter, Output } from '@angular/core';
import ButtonSetting from 'src/app/models/ButtonSetting';
import { ColorEnum } from 'src/assets/beheviors/button/ColorEnum';
import { FlagColor, FlagIcon } from 'src/assets/beheviors/flag/FlagMode';
@Component({
  selector: 'flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss'],
})
export class FlagComponent {
  @Input() color: FlagColor = FlagColor.DEFAULT;
  @Input() icon: FlagIcon = FlagIcon.IMAGE;
  @Input() show: boolean = true;

  @Input() title: string = "Flag's Title";
  @Input() description: string = '';
  @Input() btnSettings: ButtonSetting[] = [];
  @Output() onButtoClick = new EventEmitter<ButtonSetting>();

  funcButton(btnSetting: ButtonSetting) {
    this.onButtoClick.emit(btnSetting);
    if (
      btnSetting.color === ColorEnum.LINK &&
      btnSetting.title === 'No thanks'
    ) {
      this.show = false;
      // this.onButtoClick.emit(btnSetting);
    }
    // window.open('https://google.com', '_blank');
    // if (btnSetting.color === ColorEnum.PRIMARY) {
    //   this.show = false;
    //   this.onButtoClick.emit(ColorEnum.PRIMARY);
    // } else if (btnSetting.color === ColorEnum.SECONDARY) {
    //   this.onButtoClick.emit(ColorEnum.SECONDARY);
    // } else if (btnSetting.color === ColorEnum.DEFAULT) {
    //   this.show = false;
    //   this.onButtoClick.emit(ColorEnum.DEFAULT);
    // } else if (btnSetting.color === ColorEnum.SUBTLE) {
    //   this.onButtoClick.emit(ColorEnum.SUBTLE);
    // } else
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

  closeComponent(): void {
    this.show = false;
  }

  HiddenButtonList() {
    if (this.btnSettings.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
