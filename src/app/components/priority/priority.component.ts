import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CirleColor } from 'src/assets/beheviors/circle-priority/CircleColor';
@Component({
  selector: 'label-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss'],
})
export class PriorityComponent implements OnInit {
  @Input() circle: CirleColor = CirleColor.DEFAULT;
  constructor() {}
  ngOnInit(): void {}

  getClassNames() {
    return `./../../../assets/icon/circle-priority/priority-${CirleColor[
      this.circle
    ].toLowerCase()}.svg`;
  }
}
