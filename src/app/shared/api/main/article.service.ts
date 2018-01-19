import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ArticleService {


  constructor(private http: HttpClient) {

  }

  getArticle(value) {
    return this.http.get(`http://127.0.0.1:8000/api/article/${value}`);

  }
}
