import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-card',
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.scss']
})
export class CommonCardComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() title: string;
  @Input() desc?: string;
  @Input() fontSize: number;
  public titleFontSize: string;
  public descFontSize: string;
  constructor() {

  }

  ngOnInit() {
    this.titleFontSize = this.fontSize*2+'px';
    this.descFontSize = this.fontSize*2+'px';
  }

}
