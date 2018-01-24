import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';

import {CourseService} from "../../api/main/course.service";

@Injectable()
export class CourseResolver implements Resolve<any> {
  constructor(private courseService: CourseService, private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const value = route.paramMap.get('value');
    if (parseInt(value).toString() !== value) {
      return this.courseService.getCourseDetailByName(value).map(course => {
        return {course: course};
      });
    } else {
      return this.courseService.getCourseDetailById(value).map(course => {
        return {course: course};
      });

    }

  }

}
