import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../../../shared/api/main/course.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  public courseList;
  constructor(private courseService: CourseService) {
    this.courseService.getColorfulAllCourse().subscribe(data => {
      this.courseList = data;
    });
  }

  ngOnInit() {
  }

}
