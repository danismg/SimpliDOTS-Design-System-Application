import { Component, Input } from '@angular/core';
import ButtonSetting from 'src/app/models/ButtonSetting';
import { BannerMode } from 'src/assets/beheviors/banner/BannerMode';
@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() mode: BannerMode = BannerMode.INFO;
  @Input() description: string = '';
  @Input() btnSettings: ButtonSetting[] = [];
  hidden: boolean = true;
  @Input() show: boolean = true;

  funcButton(key: string) {
    // window.open('https://google.com', '_blank');
    // this.onClickButton.emit();
  }

  getClassBg() {
    return `banner banner-${BannerMode[this.mode].toLowerCase()}`;
  }
  getClassText() {
    return `banner__text-btn banner__text-${BannerMode[
      this.mode
    ].toLowerCase()}`;
  }
  getSRC() {
    return `./../../../assets/icon/info/ic-${BannerMode[
      this.mode
    ].toLowerCase()}.svg`;
  }
  closeComponent(): void {
    this.show = false;
  }

  iconBanner() {
    if (BannerMode.WARNING || BannerMode.DANGER) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}
