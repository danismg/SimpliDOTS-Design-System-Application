import { Component, Input, Output, EventEmitter } from '@angular/core';
import ButtonSetting from 'src/app/models/ButtonSetting';
import { ButtonMode } from 'src/assets/beheviors/button/ButttonMode';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() TotalId!: number;
  @Input() page: number = 1;
  @Input() totalpages: number = 5;
  midlepagesmall = new Array(3);
  midlepagelarge = new Array(0);
  temp: number = 0;
  temp2: number = 0;

  @Input() btnSettings: ButtonSetting[] = [];
  @Output() onButtoClick = new EventEmitter<ButtonSetting>();

  funcButton(btnSetting: ButtonSetting, page: number) {
    // this.page = page;
    this.onButtoClick.emit(btnSetting);
  }

  HandlePagination(num: number) {
    console.log('before', this.temp, this.temp2);
    this.temp2 = this.page + 1 + this.temp;
    this.temp = this.temp + 1;
    console.log('after', this.temp, this.temp2);
    return this.temp2;
  }

  HandleButtonMode(page: string): ButtonMode {
    if (this.page === 1 && page === 'First') {
      return ButtonMode.DISABLED;
    }
    if (this.page === 1 && page === 'Previous') {
      return ButtonMode.DISABLED;
    }
    if (this.page === this.totalpages && page === 'Next') {
      return ButtonMode.DISABLED;
    }
    if (this.page === this.totalpages && page === 'Last') {
      return ButtonMode.DISABLED;
    }
    return ButtonMode.ACTIVE;
  }
}
