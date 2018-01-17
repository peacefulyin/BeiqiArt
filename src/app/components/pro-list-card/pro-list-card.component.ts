import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pro-list-card',
  templateUrl: './pro-list-card.component.html',
  styleUrls: ['./pro-list-card.component.scss']
})
export class ProListCardComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() titleTop: boolean = false;
  @Input() cardColor: string
  @Input() showButton: boolean = false;
  @Input() type: string;
  @Input() CardType: string;
  constructor() { }

  ngOnInit() {
  }

}
