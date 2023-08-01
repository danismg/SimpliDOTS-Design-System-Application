import { Component, Input } from '@angular/core';
import { ColorEnum } from 'src/assets/beheviors/button/ColorEnum';
import { SpacingEnum } from 'src/assets/beheviors/button/SpacingEnum';
@Component({
  selector: 'flag-long',
  templateUrl: './flag-long.component.html',
  styleUrls: ['./flag-long.component.scss'],
})
export class FlagLongComponent {
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
}
