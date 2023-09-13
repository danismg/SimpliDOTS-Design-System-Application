import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonMode } from 'src/assets/beheviors/button/ButttonMode';
import { ColorEnum } from 'src/assets/beheviors/button/ColorEnum';
import { SpacingEnum } from 'src/assets/beheviors/button/SpacingEnum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() color: ColorEnum = ColorEnum.DEFAULT;
  @Input() spacing: SpacingEnum = SpacingEnum.DEFAULT;
  @Input() mode: ButtonMode = ButtonMode.DEFAULT;
  @Input() padding!: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
  ngOnInit(): void {}

  getClassNames() {
    return `btn 
    btn-${ColorEnum[this.color].toLowerCase()} 
    btn-${SpacingEnum[this.spacing].toLowerCase()}`;
  }

  handleClick() {
    this.onClick.emit();
  }
  hiddenButton(): boolean {
    if (this.mode === ButtonMode.DISABLED) {
      return true;
    }
    return false;
  }
}
