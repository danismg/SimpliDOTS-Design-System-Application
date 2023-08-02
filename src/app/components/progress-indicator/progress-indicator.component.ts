import { Component, Input } from '@angular/core';
import ProgressIndicatorSetting from 'src/app/models/ProgressIndicatorSetting';
import { ColorEnum } from 'src/assets/beheviors/button/ColorEnum';
import { SpacingEnum } from 'src/assets/beheviors/button/SpacingEnum';

@Component({
  selector: 'progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
})
export class ProgressIndicatorComponent {
  @Input() settings: ProgressIndicatorSetting[] = [
    {
      id: 1,
      title: 'Label',
      description: 'Description',
    },
    {
      id: 2,
      title: 'Label1',
      description: 'Description1',
    },
    {
      id: 3,
      title: 'Label2',
      description: 'Description2',
    },
    {
      id: 4,
      title: 'Label3',
      description: 'Description3',
    },
  ];
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
