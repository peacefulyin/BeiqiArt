import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CommonService {


  constructor(private http: HttpClient) {

  }

  getDialogCard() {
    return this.http.get('http://127.0.0.1:8000/api/commonCard?search=1');
  }

}
