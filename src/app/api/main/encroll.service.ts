import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EncrollService {
  private API_PATH = 'http://127.0.0.1:8000/api/enroll';
  private data: any = {
    "name": "学生2",
    "gender": 2,
    "age": 3,
    "date": '2018-01-17 14:02:18',
    "parentName": "家长2",
    "phone": 1823213213,
    "state": 1,
    "remark": "remark2",
    "course": "course1",
  };

  constructor(private http: HttpClient) {

  }

  send(body: any) {
    return this.http.post(`${this.API_PATH}`, JSON.stringify(body),
      {headers: new HttpHeaders().set('Content-Type', 'application/json')})

;

}
}
