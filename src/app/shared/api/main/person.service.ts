import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PersonService {


  constructor(private http: HttpClient) {

  }

  getTeachers() {
    return this.http.get(`http://localhost:8000/api/teacher`);
  }


}
