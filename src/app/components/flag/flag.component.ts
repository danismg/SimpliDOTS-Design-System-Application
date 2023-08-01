import { Component, Input, OnInit } from '@angular/core';
import { FlagColor, FlagIcon } from 'src/assets/beheviors/flag/FlagMode';
@Component({
  selector: 'flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss'],
})
export class FlagComponent {
  @Input() color: FlagColor = FlagColor.DEFAULT;
  @Input() icon: FlagIcon = FlagIcon.IMAGE;
  getClassBg() {
    return `flag flag__bg-${FlagColor[this.color].toLowerCase()}`;
  }
  getClassText() {
    return `flag__title flag__title-${FlagColor[this.color].toLowerCase()}`;
  }
  getClassIcon() {
    return `./../../../assets/icon/info/ic-${FlagIcon[
      this.icon
    ].toLowerCase()}.svg`;
  }
}
