import { Component, Input } from '@angular/core';
import { TextFieldInput } from 'src/assets/beheviors/text-field/TextFieldMode';

@Component({
  selector: 'text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent {
  @Input() placeholder: string = 'Input your text';
  @Input() input: TextFieldInput = TextFieldInput.DEFAULT;

  getClassInput(): string {
    return `text-field__input-text input-${TextFieldInput[
      this.input
    ].toLowerCase()}`;
  }

  getClassPersen() {
    if (this.input === TextFieldInput.LEFT) {
      return 'persen-righ';
    }
    // if (TextFieldInput[this.input].toLowerCase() == 'right') {
    if (this.input === TextFieldInput.RIGHT) {
      return 'persen-left';
    }
    return '';
  }
}
