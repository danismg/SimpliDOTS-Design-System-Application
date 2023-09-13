import { Component, Input, Output, EventEmitter } from '@angular/core';
import { flatMap } from 'rxjs';
import ButtonSetting from 'src/app/models/ButtonSetting';
import { ColorEnum } from 'src/assets/beheviors/button/ColorEnum';

@Component({
  selector: 'empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
})
export class EmptyStateComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = 'image';
  @Input() show: boolean = true;

  @Input() btnSettings: ButtonSetting[] = [];
  @Input() btnLinkSettings: ButtonSetting[] = [];
  @Output() onButtoClick = new EventEmitter<ColorEnum>();

  funcButton(btnSetting: ButtonSetting) {
    // window.open('https://google.com', '_blank');
    if (btnSetting.color === ColorEnum.PRIMARY) {
      this.onButtoClick.emit(ColorEnum.PRIMARY);
    } else if (btnSetting.color === ColorEnum.SECONDARY) {
      this.onButtoClick.emit(ColorEnum.SECONDARY);
    } else if (btnSetting.color === ColorEnum.DEFAULT) {
      this.onButtoClick.emit(ColorEnum.DEFAULT);
    } else if (btnSetting.color === ColorEnum.SUBTLE) {
      this.show = false;
      this.onButtoClick.emit(ColorEnum.SUBTLE);
    } else if (btnSetting.color === ColorEnum.LINK) {
      this.show = false;
      this.onButtoClick.emit(ColorEnum.LINK);
    }
  }

  getIconName() {
    return `./../../../assets/icon/empty-state/ic-${this.icon.toLowerCase()}.svg`;
  }

  showStyles(): boolean {
    if (this.title === '' && this.icon === '') {
      return false;
    }
    return true;
  }
}
