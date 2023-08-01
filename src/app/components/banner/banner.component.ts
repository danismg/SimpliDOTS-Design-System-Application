import { Component, Input } from '@angular/core';
import { BannerMode } from 'src/assets/beheviors/banner/BannerMode';

import { ColorEnum } from 'src/assets/beheviors/button/ColorEnum';
import { SpacingEnum } from 'src/assets/beheviors/button/SpacingEnum';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() mode: BannerMode = BannerMode.INFO;
  hidden: boolean = true;
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

  iconBanner() {
    if (BannerMode.WARNING || BannerMode.DANGER) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}
