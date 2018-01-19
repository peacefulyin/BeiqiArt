import {Component, OnInit, Input} from '@angular/core';
import {ArticleService} from "../../../api/main/article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public articleItem: any;

  constructor(private articleService: ArticleService) {
    this.articleService.getArticle(1).subscribe(data => {
      this.articleItem = JSON.stringify(data);
    });
  }

  ngOnInit() {

  }

}
