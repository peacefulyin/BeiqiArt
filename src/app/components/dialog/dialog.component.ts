import {Component, OnInit, Input} from '@angular/core';
import {GenneralService} from "../../shared/api/main/genneral.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() imgUrl: string;
  @Input() describe: string;

  constructor(private genneralService: GenneralService) {
  }

  ngOnInit() {
  }

  private nerverShow() {
    this.close();
    sessionStorage.setItem('indexDialog', 'never');
  }

  private close() {
    this.genneralService.closeDialog();
    this.genneralService.closeCover();
  }


}
