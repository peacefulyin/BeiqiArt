import { Component, OnInit, Input } from '@angular/core';
import {Menu} from "../../shared/model/components/header.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() menuList: Menu[];
  constructor() {
  }
  ngOnInit() {

  }
}
