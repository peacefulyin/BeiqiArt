import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ArticleService {


  constructor(private http: HttpClient) {

  }

  getArticle(id) {
    return this.http.get(`http://127.0.0.1/api/article/${id}`);
  }

}
