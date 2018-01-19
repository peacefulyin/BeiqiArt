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

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.articleItem = JSON.stringify(data.article);
    });
  }

}
