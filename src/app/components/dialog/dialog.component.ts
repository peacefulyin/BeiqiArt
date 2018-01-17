import {Component, OnInit, Input} from '@angular/core';
import {GenneralService} from "../../api/main/genneral.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() title: string;

  constructor(private genneralService: GenneralService) {
  }

  ngOnInit() {
  }

  public close() {
    this.genneralService.closeDialogEmitter.emit();
  }


}
