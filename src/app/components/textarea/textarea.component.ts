import { Component, Input } from '@angular/core';
import {
  textareaMode,
  textareaSize,
} from 'src/assets/beheviors/textarea/textareaMode';

@Component({
  selector: 'text-area',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent {
  @Input() placeholder: string = 'Enter long form text here';
  @Input() size: textareaSize = textareaSize.DEFAULT;
  @Input() mode: textareaMode = textareaMode.DEFAULT;

  getClassNames() {
    return `textarea__card textarea__size-${textareaSize[
      this.size
    ].toLowerCase()} textarea__${textareaMode[this.mode].toLowerCase()}`;
  }
}
