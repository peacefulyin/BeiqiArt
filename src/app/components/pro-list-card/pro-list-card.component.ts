import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pro-list-card',
  templateUrl: './pro-list-card.component.html',
  styleUrls: ['./pro-list-card.component.scss']
})
export class ProListCardComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() titleTop: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
