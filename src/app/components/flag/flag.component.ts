import { Component, Input } from '@angular/core';
import ButtonSetting from 'src/app/models/ButtonSetting';
import { FlagColor, FlagIcon } from 'src/assets/beheviors/flag/FlagMode';
@Component({
  selector: 'flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss'],
})
export class FlagComponent {
  @Input() color: FlagColor = FlagColor.DEFAULT;
  @Input() icon: FlagIcon = FlagIcon.IMAGE;

  @Input() title: string = "Flag's Title";
  @Input() description: string = '';
  @Input() btnSettings: ButtonSetting[] = [
    // {
    //   title: 'No Thanks',
    //   color: ColorEnum.DEFAULT,
    //   compact: SpacingEnum.DEFAULT,
    // },
    // {
    //   title: 'Understood',
    //   color: ColorEnum.PRIMARY,
    //   compact: SpacigEnum.COMPACT,
    // },
  ];

  goToGoogle() {
    window.open('https://google.com', '_blank');
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

  HiddenButtonList() {
    if (this.btnSettings.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
// get colorBtn(): typeof ColorEnum {
//   return ColorEnum;
// }
// get spacingBtn(): typeof SpacingEnum {
//   return SpacingEnum;
// }
// ChangeTextBtn(): String {
//   if (this.color === FlagColor.DEFAULT) {
//     return 'Understood';
//   } else {
//     return 'Join the conversation';
//   }
// }
// ChangeColorBtn(): ColorEnum {
//   if (FlagColor.DEFAULT || FlagColor.Success) {
//     return ColorEnum.PRIMARY;
//   } else {
//     return ColorEnum.DEFAULT;
//   }
// }
