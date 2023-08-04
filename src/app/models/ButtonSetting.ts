import { ColorEnum } from 'src/assets/beheviors/button/ColorEnum';
import { SpacingEnum } from 'src/assets/beheviors/button/SpacingEnum';

export default class ButtonSetting {
  title: string = '';
  color!: ColorEnum;
  compact!: SpacingEnum;
}
