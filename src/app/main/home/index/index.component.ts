import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../../shared/api/main/course.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public defaultCourses;
  constructor(private courseService: CourseService) {
    this.getDefault();
  }

  getDefault() {
    this.courseService.getColorsDefaultCourse().subscribe(courses => {
      console.log(courses)
      this.defaultCourses = courses;
    });
  }

  ngOnInit() {
  }

}
