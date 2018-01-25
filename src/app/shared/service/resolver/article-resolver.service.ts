import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import {ArticleService} from "../../api/main/article.service";

@Injectable()
export class ArticleResolver implements Resolve<any> {
  constructor(private articleService: ArticleService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');

    return this.articleService.getArticle(id).map(article => {
      if (article) {
        if (id === 'firstPage') {
          const reallyId = article['id'];
          this.router.navigate(['/article/', reallyId]);
        }
        return {article: article, page: id};
      } else {
        this.router.navigate(['/']);
        return null;
      }
    });
  }
}
