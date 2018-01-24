import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-brand',
  templateUrl: './sub-brand.component.html',
  styleUrls: ['./sub-brand.component.scss']
})
export class SubBrandComponent implements OnInit {
  @Input() title: string;
  @Input() bacImgUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
