import { Component, Input } from '@angular/core';
import ButtonSetting from 'src/app/models/ButtonSetting';

@Component({
  selector: 'onboarding-modal',
  templateUrl: './onboarding-modal.component.html',
  styleUrls: ['./onboarding-modal.component.scss'],
})
export class OnboardingModalComponent {
  @Input() title: string = 'Text';
  @Input() description: string = 'Text';
  @Input() btnSettings: ButtonSetting[] = [];
  goToGoogle() {
    window.open('https://google.com', '_blank');
  }
}
