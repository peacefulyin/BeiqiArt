import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../../shared/api/main/course.service";
import {CommonService} from "../../../shared/api/main/common.service";
import {GenneralService} from "../../../shared/api/main/genneral.service";
import {DialogComponent} from "../../../components/dialog/dialog.component";
import {MediaService} from "../../../shared/api/main/media.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public defaultCourses;
  public dialogItem;
  public BannerList;


  constructor(private courseService: CourseService,
              private commonService: CommonService,
              private genneralService: GenneralService,
              private mediaService: MediaService) {
    this.getDefault();
  }

  getDefault() {
    // 首页推荐课程列表
    this.courseService.getColorsDefaultCourse().subscribe(courses => {
      this.defaultCourses = courses;
    });
    // 获取轮播图图片列表
    this.mediaService.getIndexBanner().subscribe((data: any) => {
      this.BannerList = data.images;
     });
  }

  ngOnInit() {
    // 判断用户是否选择禁用
    if (sessionStorage.getItem('indexDialog') !== 'never') {
      this.showDialog();
    }
  }

  // 显示弹窗
  showDialog() {
    this.commonService.getDialogCard().subscribe(data => {
      this.dialogItem = data[0];
      this.genneralService.showCover()
      this.genneralService.showDialog({
        title: this.dialogItem.title,
        subTitle: this.dialogItem.subtitle,
        imgUrl: this.dialogItem.image,
        describe: this.dialogItem.describe,
      });
      this.genneralService.showPrompt({
        title: 'title',
        info: 'info',
        color: 'red',
        autoHide: true
      });
    });
  }


}
