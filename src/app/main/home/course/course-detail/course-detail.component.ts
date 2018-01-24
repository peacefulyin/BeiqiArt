import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {ArticleService} from "../../../../shared/api/main/article.service";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  public courseInfo;
  public teachers;
  public students;

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      const infos = data.courseInfos.course;
      this.courseInfo = infos.data;
      this.teachers = infos.teachers;
      this.students = infos.students;
    });
  }

}
