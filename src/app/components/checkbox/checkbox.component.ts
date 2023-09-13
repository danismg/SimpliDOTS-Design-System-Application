import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  BgCheckBox,
  ConditionCheckBox,
  ValidCheckBox,
} from 'src/assets/beheviors/checkbox/checkboxMode';
import { ModeCheckBox } from '../../../assets/beheviors/checkbox/checkboxMode';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() text: string = 'label';
  @Input() description: string = 'fhasjkd';
  @Input() condition: ConditionCheckBox = ConditionCheckBox.UNCHECK;
  @Input() mode: ModeCheckBox = ModeCheckBox.DEFAULT;
  @Input() isValid: ValidCheckBox = ValidCheckBox.DEfAULT;
  @Input() background: BgCheckBox = BgCheckBox.ON;

  isicheckbox = false;
  inputtext!: string;

  changeInput() {
    console.log(this.inputtext);
  }

  oncheckboxchange() {
    console.log(this.isicheckbox);
  }

  changeBackground() {
    if (this.background === BgCheckBox.ON) {
      if (this.isicheckbox === true) {
        return `label__container label__bg label__bg-default-focus`;
      } else {
        return `label__container label__bg label__bg-default`;
      }
    } else if (this.background === BgCheckBox.INVALID) {
      if (this.isicheckbox === true) {
        return `label__container label__bg label__bg-default-focus`;
      } else {
        return `label__container label__bg label__bg-isInvalid`;
      }
    } else {
      return 'label__container';
    }
  }

  checkmark() {
    return `checkmark checkmark-${ValidCheckBox[this.isValid].toLowerCase()}`;
  }
}
