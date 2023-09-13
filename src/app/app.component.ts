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
import {
  textareaMode,
  textareaSize,
} from 'src/assets/beheviors/textarea/textareaMode';
import InfoFlagLongSetting from './models/InfoFlagLongSetting';
import ProgressIndicatorSetting from './models/ProgressIndicatorSetting';
import PaginationSetting from './models/PaginationSetting';
import BreadCrumbsSetting from './models/BreadCrumbsSetting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'design-system';

  // Show On / Show off
  showFlag: boolean = true;

  // Storage Components
  progressBarSettings: ProgressBarSetting[] = [];
  breadCrumbsSettings: BreadCrumbsSetting[] = [];
  progressTrakerSettings: ProgressTrakerSetting[] = [];
  progressIndicatorSettings: ProgressIndicatorSetting[] = [];
  infoFlagLongSettings: InfoFlagLongSetting[] = [];
  paginationSettings: PaginationSetting[] = [];

  // Storage Button List with some Component
  btn__FlagSettings: ButtonSetting[] = [];
  btn__FlagLongSettings: ButtonSetting[] = [];
  btn__SctMessageSettings: ButtonSetting[] = [];
  btn__Settings: ButtonSetting[] = [];
  btn__BannerSettings: ButtonSetting[] = [];
  btn__EmptyStateSettings: ButtonSetting[] = [];
  btnLink__EmptyStateSettings: ButtonSetting[] = [];
  btn__OnBoardingModalSettings: ButtonSetting[] = [];
  btn__ProgressIndicatorSettings: ButtonSetting[] = [];
  btn__PaginationSettings: ButtonSetting[] = [];

  ngOnInit(): void {
    this.progressBarSettings = this.getProgressBarSettings();
    this.breadCrumbsSettings = this.getBreadCrumbsSettings();
    this.progressIndicatorSettings = this.getProgressIndicatorSettings();
    this.progressTrakerSettings = this.getProgressTrakerSettings();
    this.infoFlagLongSettings = this.getInfoFlagLongSettings();

    // Button List with some Component
    this.btn__EmptyStateSettings = this.getButton__EmptyStateSettings();
    this.btnLink__EmptyStateSettings = this.getButtonLink_EmptyStateSettings();

    this.btn__FlagSettings = this.getButton__FlagSettings();
    this.btn__FlagLongSettings = this.getButton__FlagLongSettings();
    this.btn__SctMessageSettings = this.getButton__SctMessageSettings();
    this.btn__BannerSettings = this.getButton__BannerSettings();
    this.btn__OnBoardingModalSettings = this.getButton__BoardingModalSettings();
    this.btn__ProgressIndicatorSettings =
      this.getButton__ProgressIndicatorSettings();
    this.btn__PaginationSettings = this.getButton__PaginationSettings();
  }

  // Store button every Component
  getButton__FlagSettings(): ButtonSetting[] {
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
  getButton__PaginationSettings(): ButtonSetting[] {
    return [
      {
        title: '',
        color: ColorEnum.SUBTLE,
        compact: SpacingEnum.COMPACT,
      },
    ];
  }
  getButton__FlagLongSettings(): ButtonSetting[] {
    return [
      {
        title: 'Delete',
        color: ColorEnum.SECONDARY,
        compact: SpacingEnum.DEFAULT,
      },
      {
        title: 'Move',
        color: ColorEnum.PRIMARY,
        compact: SpacingEnum.DEFAULT,
      },
    ];
  }
  getButton__SctMessageSettings(): ButtonSetting[] {
    return [
      {
        title: 'Button',
        color: ColorEnum.LINK,
        compact: SpacingEnum.COMPACT,
      },
      {
        title: 'Button1',
        color: ColorEnum.LINK,
        compact: SpacingEnum.COMPACT,
      },
    ];
  }

  getButton__BannerSettings(): ButtonSetting[] {
    return [
      {
        title: 'Button',
        color: ColorEnum.DEFAULT,
        compact: SpacingEnum.DEFAULT,
      },
    ];
  }

  getButton__EmptyStateSettings(): ButtonSetting[] {
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
  getButtonLink_EmptyStateSettings(): ButtonSetting[] {
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
    ];
  }

  getButton__ProgressIndicatorSettings(): ButtonSetting[] {
    return [
      {
        title: 'Batal',
        color: ColorEnum.SUBTLE,
        compact: SpacingEnum.COMPACT,
      },
      {
        title: 'Simpan Kriteria',
        color: ColorEnum.PRIMARY,
        compact: SpacingEnum.DEFAULT,
      },
    ];
  }

  ////////////////////////////////////////////

  // Storage Components Func

  getBreadCrumbsSettings() {
    return [
      {
        location: 'balbla',
        link: 'jhdfasd'
      },
      {
        location: 'balbla',
      },
      {
        location: 'balbla',
      },
      {
        location: 'balbla',
      },
    ];
  }

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
  getInfoFlagLongSettings(): InfoFlagLongSetting[] {
    return [
      {
        info: 'Additional Info',
      },
      {
        info: 'Additional Info',
      },
    ];
  }

  getProgressIndicatorSettings(): ProgressIndicatorSetting[] {
    return [
      {
        id: 1,
        title: 'Label',
        description: 'Description',
        visited: true,
        line: true,
      },
      {
        id: 2,
        title: 'Label1',
        description: 'Description1',
        visited: true,
        line: true,
      },
      {
        id: 3,
        title: 'Label2',
        description: 'Description2',
        visited: true,
        line: true,
      },
      {
        id: 4,
        title: 'Label3',
        description: 'Description3',
        visited: true,
        line: true,
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
        visited: false,
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
        description: 'Description3',
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
  get sizeTextArea(): typeof textareaSize {
    return textareaSize;
  }
  get modeTextArea(): typeof textareaMode {
    return textareaMode;
  }

  ////////////////////////////////////////

  // PROGRESS TRACKER
  trackerVisible: boolean = false;
  labelName: string = '';
  showComponentTracker(key: ProgressTrakerSetting) {
    this.progressTrakerSettings.forEach((progressTrakerSetting) => {
      if (key.title === progressTrakerSetting.title) this.trackerVisible = true;
      this.labelName = key.title;
    });
    this.progressTrakerSettings.forEach((progressTrakerSetting) => {
      if (key.title === progressTrakerSetting.title) this.trackerVisible = true;
      this.labelName = key.title;
    });
  }

  // Pagination
  sizePagination!: number; // panjang table

  ////////////////////////////////////////////

  // Fungsi tiap button pada Components
  funcButton(key: ColorEnum) {
    if (key === ColorEnum.PRIMARY) {
      // ngapai
    } else if (key === ColorEnum.SECONDARY) {
      // ngapai
    } else if (key === ColorEnum.DEFAULT) {
      // ngapai
    } else if (key === ColorEnum.SUBTLE) {
      // ngapai
    } else if (key === ColorEnum.LINK) {
      // ngapai
    }
  }
  funcButtonFlagLong(key: ColorEnum) {
    if (key === ColorEnum.PRIMARY) {
      // ngapai
    } else if (key === ColorEnum.SECONDARY) {
      // ngapai
    } else if (key === ColorEnum.DEFAULT) {
      this.showFlag = false;
    } else if (key === ColorEnum.SUBTLE) {
      // ngapai
    } else if (key === ColorEnum.LINK) {
      // ngapai
    }
  }
  funcButtonProgressIndicator(key: ButtonSetting) {
    if (key.color === ColorEnum.PRIMARY) {
      // ngapai
    } else if (key.color === ColorEnum.SECONDARY) {
      // ngapai
    } else if (key.color === ColorEnum.DEFAULT) {
      this.showFlag = false;
    } else if (key.color === ColorEnum.SUBTLE) {
      // ngapai
    } else if (key.color === ColorEnum.LINK) {
      // ngapai
    }
  }

  funcButtonFlag(key: ButtonSetting) {
    if (
      key.color === ColorEnum.PRIMARY &&
      key.title === 'Join the conversation'
    ) {
      this.showFlag = false;
    } else if (key.color === ColorEnum.PRIMARY && key.title === 'Understood') {
      this.showFlag = false;
    } else if (key.color === ColorEnum.SECONDARY) {
      // ngapai
    } else if (
      key.color === ColorEnum.DEFAULT &&
      key.title === 'Join the conversation'
    ) {
      this.showFlag = false;
    } else if (key.color === ColorEnum.SUBTLE) {
      // ngapai
    } else if (key.color === ColorEnum.LINK) {
      // ngapai
    }
  }
  funcButtonSctMessage(key: string) {
    if (key === 'button') {
      // ngapai
    } else if (key === 'button') {
      // ngapai
    }
  }

  // Fungsi button sendiri
  goToFacebook() {
    window.open('https://facebook.com', '_blank');
  }
}
