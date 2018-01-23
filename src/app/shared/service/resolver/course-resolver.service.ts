import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import * as Rx from 'rxjs/Rx';

import {CourseService} from "../../api/main/course.service";

@Injectable()
export class CourseResolver implements Resolve<any> {
  constructor(private courseService: CourseService, private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const value = route.paramMap.get('value');
    if (parseInt(value).toString() !== value) {
      return this.courseService.getCourseDetailByName(value).map(course => {
        console.log('name',course)
        return {course: course};
      });
    } else {
      return this.courseService.getCourseDetailById(value).map(course => {
        console.log('id', course)
        return {course: course};
      });

    }

  }

}
