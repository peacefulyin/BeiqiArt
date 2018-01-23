import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/observable';



@Injectable()
export class CourseService {
  constructor(private http: HttpClient) {

  }

  test() {
    this.getCourseDetailByName('course1')
  }

  getCourseDetailById(id) {
    return this.http.get(`http://127.0.0.1:8000/api/course/${id}/detail`);
  }

  getCourseDetailByName(name) {
    const nameOb = this.http.get(`http://127.0.0.1:8000/api/course?search=${name}`).map(data => {return data[0].id});
    return nameOb.flatMap(id => {
      return this.http.get(`http://127.0.0.1:8000/api/course/${id}/detail`);
    })
  }


}
