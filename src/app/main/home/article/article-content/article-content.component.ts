import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {apiRectify} from "../../../../util/js/apiTools";



@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})


export class ArticleContentComponent implements OnInit, OnChanges {
  @Input() article: any;
  public articleContent: object;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    if (this.article) {
      this.article = JSON.parse(this.article);
      this.articleContent = apiRectify(this.article.content);
    }

  }

  ngOnChanges() {


  }

}
