import { Component } from '@angular/core';
import { ColorEnum } from 'src/assets/beheviors/button/ColorEnum';
import { SpacingEnum } from 'src/assets/beheviors/button/SpacingEnum';

@Component({
  selector: 'onboarding-modal',
  templateUrl: './onboarding-modal.component.html',
  styleUrls: ['./onboarding-modal.component.scss'],
})
export class OnboardingModalComponent {
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
