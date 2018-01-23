import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../../shared/api/main/article.service";
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public articleItem: any;
  public prevArticle: any;
  public nextArticle: any;
  public articlePage: number;

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      const article = data.ArticleInfos.article;
      this.articleItem = JSON.stringify(article);
      this.prevArticle = article.prev_item;
      this.nextArticle = article.next_item;
      this.articlePage = parseInt(data.ArticleInfos.page);
    });
  }

}
