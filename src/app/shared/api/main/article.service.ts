import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ArticleService {


  constructor(private http: HttpClient) {

  }

  getArticle(id) {
    return this.http.get(`/api/article/${id}`);
  }

}
