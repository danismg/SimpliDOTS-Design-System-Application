import { Component, Input } from '@angular/core';
import ButtonSetting from 'src/app/models/ButtonSetting';

@Component({
  selector: 'empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
})
export class EmptyStateComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() btnSettings: ButtonSetting[] = [];
  @Input() btnLinkSettings: ButtonSetting[] = [];

  goToGoogle() {
    window.open('https://google.com', '_blank');
  }

  goToFacebook() {
    window.open('https://facebook.com', '_blank');
  }
}
