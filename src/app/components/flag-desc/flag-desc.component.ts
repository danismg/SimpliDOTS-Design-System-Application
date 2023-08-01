import { Component, Input, OnInit } from '@angular/core';
import { ColorEnum } from 'src/assets/beheviors/button/ColorEnum';
import { SpacingEnum } from 'src/assets/beheviors/button/SpacingEnum';
import { FlagColor, FlagIcon } from 'src/assets/beheviors/flag/FlagMode';
@Component({
  selector: 'flag-desc',
  templateUrl: './flag-desc.component.html',
  styleUrls: ['./flag-desc.component.scss'],
})
export class FlagDescComponent {
  @Input() color: FlagColor = FlagColor.DEFAULT;
  @Input() icon: FlagIcon = FlagIcon.IMAGE;

  get colorBtn(): typeof ColorEnum {
    return ColorEnum;
  }
  get spacingBtn(): typeof SpacingEnum {
    return SpacingEnum;
  }
  goToGoogle() {
    window.open('https://google.com', '_blank');
  }

  goToFacebook() {
    window.open('https://facebook.com', '_blank');
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

  ChangeColorBtn(): ColorEnum {
    if (FlagColor.DEFAULT || FlagColor.Success) {
      return ColorEnum.PRIMARY;
    } else {
      return ColorEnum.DEFAULT;
    }
  }
  ChangeTextBtn(): String {
    if (FlagColor.DEFAULT) {
      return 'Understood';
    } else {
      return 'Join the conversation';
    }
  }
}
