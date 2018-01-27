import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CommonService {


  constructor(private http: HttpClient) {

  }

  getDialogCard() {
    return this.http.get('/api/commonCard?search=1');
  }

}
