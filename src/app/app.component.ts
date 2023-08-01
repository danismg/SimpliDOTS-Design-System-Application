import { Component } from '@angular/core';
import { ColorEnum } from 'src/assets/beheviors/button/ColorEnum';
import { SpacingEnum } from 'src/assets/beheviors/button/SpacingEnum';
import { CirleColor } from '../assets/beheviors/circle-priority/CircleColor';
import { ColorStatus } from '../assets/beheviors/label-status/ColorStatus';
import { BannerMode } from 'src/assets/beheviors/banner/BannerMode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'design-system';
  get colorBtn(): typeof ColorEnum {
    return ColorEnum;
  }
  get spacingBtn(): typeof SpacingEnum {
    return SpacingEnum;
  }
  get cirleLabel(): typeof CirleColor {
    return CirleColor;
  }
  get ColorStatus(): typeof ColorStatus {
    return ColorStatus;
  }

  get modeBanner(): typeof BannerMode {
    return BannerMode;
  }

  goToGoogle() {
    window.open('https://google.com', '_blank');
  }

  goToFacebook() {
    window.open('https://facebook.com', '_blank');
  }
}
