import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EncrollService {
  private API_PATH = 'http://39.108.232.114/api/enroll';


  constructor(private http: HttpClient) {

  }

  send(body: any) {
    return this.http.post(`${this.API_PATH}`, JSON.stringify(body),
      {headers: new HttpHeaders().set('Content-Type', 'application/json')})

;

}
}
