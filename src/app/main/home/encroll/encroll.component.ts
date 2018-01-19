import {Component, OnInit} from '@angular/core';
import {EncrollForm} from "../../../model/main/encroll.model";
import {EncrollService} from "../../../api/main/encroll.service";
import {GenneralService} from "../../../api/main/genneral.service";
import {DialogComponent} from "../../../components/dialog/dialog.component";
import {LoadingComponent} from "../../../components/loading/loading.component";

@Component({
  selector: 'app-encroll',
  templateUrl: './encroll.component.html',
  styleUrls: ['./encroll.component.scss'],
  providers: [
    EncrollService,
  ]

})
export class EncrollComponent implements OnInit {
  public encrollForm: EncrollForm = new EncrollForm();

  constructor(private enrollService: EncrollService, private genneralService: GenneralService) {
  }

  foods: Array<string>;

  ngOnInit() {
    this.foods = [
      '芭蕾',
      '主持',
      '绘画',
      '声乐',
      '钢琴',
      'course1',
    ];
  }

  public sendEnroll() {
    console.log('send');

    this.enrollService.send(this.encrollForm).subscribe(data => {
      console.log(data);
    });
    console.log('done');

  }

  public showIt() {
    this.genneralService.showDialog({
      title: 'title',
      subTitle: 'subTitle',
      imgUrl: 'http://via.placeholder.com/550x550',
      detail: 'this is detail.............',
      component: DialogComponent
    });
  }

  public showLoading() {
    this.genneralService.loading({
      showCover: false,
      showLoading: false,
      prompt: {
        title: 'title',
        info: 'info',
        color: 'danger',
      },
      component: LoadingComponent
    });
  }
}
