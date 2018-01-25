import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PersonService {


  constructor(private http: HttpClient) {

  }

  getTeachers() {
    return this.http.get(`http://39.108.232.114/api/teacher`);
  }


}
