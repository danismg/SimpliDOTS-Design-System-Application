import { Component } from '@angular/core';
import { ColorEnum } from 'src/assets/beheviors/button/ColorEnum';
import { SpacingEnum } from 'src/assets/beheviors/button/SpacingEnum';
import { CirleColor } from '../assets/beheviors/circle-priority/CircleColor';
import { ColorStatus } from '../assets/beheviors/flag/label-status/ColorStatus';
import { BannerMode } from 'src/assets/beheviors/banner/BannerMode';
import { FlagColor, FlagIcon } from '../assets/beheviors/flag/FlagMode';
import {
  SctMessageColor,
  SctMessageIcon,
} from 'src/assets/beheviors/section-message/SctMessageMode';
import { TextFieldInput } from 'src/assets/beheviors/text-field/TextFieldMode';
import ProgressBarSetting from './models/ProgressBarSetting';
import ButtonSetting from './models/ButtonSetting';
import ProgressTrakerSetting from './models/ProgressTrakerSetting';
import { ProgressTrakerMode } from 'src/assets/beheviors/progress-traker/ProgressTrakerMode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'design-system';

  // Storage Components
  progressBarSettings: ProgressBarSetting[] = [];
  progressTrakerSettings: ProgressTrakerSetting[] = [];

  // Storage Button List with some Component
  btn__FlagSettings: ButtonSetting[] = [];
  btn__SctMessageSettings: ButtonSetting[] = [];
  btn__Settings: ButtonSetting[] = [];
  btn__BannerSettings: ButtonSetting[] = [];
  btn__EmptyStateSettings: ButtonSetting[] = [];
  btnLink__EmptyStateSettings: ButtonSetting[] = [];
  btn__OnBoardingModalSettings: ButtonSetting[] = [];

  ngOnInit(): void {
    this.progressBarSettings = this.getProgressBarSettings();
    this.progressTrakerSettings = this.getProgressTrakerSettings();

    // Button List with some Component
    this.btn__EmptyStateSettings = this.getButton__EmptyStateSetting();
    this.btnLink__EmptyStateSettings = this.getButtonLink_EmptyStateSetting();

    this.btn__FlagSettings = this.getButton__FlagSetting();
    this.btn__SctMessageSettings = this.getButton__SctMessageSetting();
    this.btn__BannerSettings = this.getButton__BannerSetting();
    this.btn__OnBoardingModalSettings = this.getButton__BoardingModalSettings();
  }

  getButton__FlagSetting(): ButtonSetting[] {
    return [
      {
        title: 'No Thanks',
        color: ColorEnum.DEFAULT,
        compact: SpacingEnum.COMPACT,
      },
      {
        title: 'Understood',
        color: ColorEnum.PRIMARY,
        compact: SpacingEnum.COMPACT,
      },
    ];
  }
  getButton__SctMessageSetting(): ButtonSetting[] {
    return [
      {
        title: 'Button',
        color: ColorEnum.LINK,
        compact: SpacingEnum.COMPACT,
      },
      {
        title: 'Button',
        color: ColorEnum.LINK,
        compact: SpacingEnum.COMPACT,
      },
    ];
  }

  getButton__BannerSetting(): ButtonSetting[] {
    return [
      {
        title: 'Button',
        color: ColorEnum.DEFAULT,
        compact: SpacingEnum.DEFAULT,
      },
    ];
  }

  getButton__EmptyStateSetting(): ButtonSetting[] {
    return [
      {
        title: 'Button 1',
        color: ColorEnum.SUBTLE,
        compact: SpacingEnum.DEFAULT,
      },
      {
        title: 'Button 2',
        color: ColorEnum.PRIMARY,
        compact: SpacingEnum.DEFAULT,
      },
    ];
  }
  getButtonLink_EmptyStateSetting(): ButtonSetting[] {
    return [
      {
        title: 'Link',
        color: ColorEnum.LINK,
        compact: SpacingEnum.DEFAULT,
      },
    ];
  }

  getButton__BoardingModalSettings(): ButtonSetting[] {
    return [
      {
        title: 'Cancel',
        color: ColorEnum.SUBTLE,
        compact: SpacingEnum.DEFAULT,
      },
      {
        title: 'Confirm',
        color: ColorEnum.PRIMARY,
        compact: SpacingEnum.DEFAULT,
      },
    ];
  }

  // Storage Components Func
  getProgressBarSettings(): ProgressBarSetting[] {
    return [
      {
        size: 50,
        color: 'red',
      },
      {
        size: 50,
        color: '#23ef45',
      },
      {
        size: 30,
        color: 'yellow',
      },
      {
        size: 50,
        color: 'red',
      },
      {
        size: 50,
        color: '#23ef45',
      },
      {
        size: 30,
        color: 'yellow',
      },
      {
        size: 50,
        color: 'red',
      },
      {
        size: 50,
        color: '#23ef45',
      },
      {
        size: 30,
        color: 'yellow',
      },
    ];
  }

  getProgressTrakerSettings(): ProgressTrakerSetting[] {
    return [
      {
        id: 1,
        title: 'Label',
        description: 'Description',
        mode: ProgressTrakerMode.DEFAULT,
        visited: true,
      },
      {
        id: 2,
        title: 'Label1',
        description: 'Description1',
        mode: ProgressTrakerMode.DEFAULT,
        visited: false,
      },
      {
        id: 3,
        title: 'Label2',
        description: 'Description2',
        mode: ProgressTrakerMode.DEFAULT,
        visited: false,
      },
      {
        id: 4,
        title: 'Label3',
        description: '',
        mode: ProgressTrakerMode.DEFAULT,
        visited: false,
      },
    ];
  }

  // Func Penghubung App dengan Enum
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
  get colorFlag(): typeof FlagColor {
    return FlagColor;
  }
  get iconFlag(): typeof FlagIcon {
    return FlagIcon;
  }
  get colorSctMessage(): typeof SctMessageColor {
    return SctMessageColor;
  }
  get iconSctMessage(): typeof SctMessageIcon {
    return SctMessageIcon;
  }
  get inputTextField(): typeof TextFieldInput {
    return TextFieldInput;
  }

  goToGoogle() {
    window.open('https://google.com', '_blank');
  }

  goToFacebook() {
    window.open('https://facebook.com', '_blank');
  }
}
