import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourseRandomColors, defaultCoursesColors} from "../../model/main/course.model";
import {addProp, addRandomProp} from "../../../util/js/observerHandler";

@Injectable()
export class CourseService {
  constructor(private http: HttpClient) {
    this.getColorfulAllCourse();
  }

  getCourseDetailById(id) {
    return this.http.get(`http://127.0.0.1:8000/api/course/${id}/detail`);
  }

  getCourseDetailByName(name) {
    const nameOb = this.http.get(`http://127.0.0.1:8000/api/course?search=${name}`).map(data => {
      return data[0].id;
    });
    return nameOb.flatMap(id => {
      return this.http.get(`http://127.0.0.1:8000/api/course/${id}/detail`);
    });
  }

  getDefaultCourse() {
    return this.http.get(`http://127.0.0.1:8000/api/course/default`);
  }

  getAllCourse() {
    return this.http.get(`http://127.0.0.1:8000/api/course`);
  }

  getColorfulAllCourse() {
    return addRandomProp(this.getAllCourse(), CourseRandomColors, 'color');
  }


  getColorsDefaultCourse() {
    return addProp(this.getDefaultCourse(), defaultCoursesColors, 'color');
  }
}
