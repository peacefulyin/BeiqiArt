import { Component, OnInit, Input } from '@angular/core';
import {promptColors} from "../../shared/model/main/genneral.model";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0}))
      ])
    ])
  ]
})
export class LoadingComponent implements OnInit {
  @Input() showCover: boolean = false;
  @Input() showLoading: boolean = false;
  @Input() showPrompt: boolean = false;
  @Input() promptTitle: string = '';
  @Input() promptInfo: string = '';
  @Input() promptColor: string;
  public color: string = promptColors.info;
  constructor() {
  }

  ngOnInit() {
    this.color = promptColors[this.promptColor];
  }

}
