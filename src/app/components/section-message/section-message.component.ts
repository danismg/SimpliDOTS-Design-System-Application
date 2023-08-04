import { Component, Input } from '@angular/core';
import ButtonSetting from 'src/app/models/ButtonSetting';
import { ColorEnum } from 'src/assets/beheviors/button/ColorEnum';
import { SpacingEnum } from 'src/assets/beheviors/button/SpacingEnum';
import {
  SctMessageColor,
  SctMessageIcon,
} from 'src/assets/beheviors/section-message/SctMessageMode';

@Component({
  selector: 'section-message',
  templateUrl: './section-message.component.html',
  styleUrls: ['./section-message.component.scss'],
})
export class SectionMessageComponent {
  @Input() color: SctMessageColor = SctMessageColor.INFO;
  @Input() icon: SctMessageIcon = SctMessageIcon.INFO;

  @Input() title: string = "Flag's Title";
  @Input() description: string = '';
  @Input() btnSettings: ButtonSetting[] = [];

  goToGoogle() {
    window.open('https://google.com', '_blank');
  }

  getClassNames() {
    return `slcMessage__card 
    slcMessage__card-${SctMessageColor[this.color].toLowerCase()}`;
  }

  getClassIcons() {
    return `./../../../assets/icon/info/ic-${SctMessageIcon[
      this.icon
    ].toLowerCase()}.svg`;
  }
}
