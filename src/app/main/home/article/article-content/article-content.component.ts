import {Component, Input, OnChanges, OnInit} from '@angular/core';


@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})


export class ArticleContentComponent implements OnInit, OnChanges {
  @Input() article: any;
  public articleContent: object;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.article) {
      let beforeArticle = JSON.parse(this.article).content;
      beforeArticle += '<style type="text/css">img { width: 100% !important;height: auto !important;}</style>';
      this.articleContent = beforeArticle;
    }
  }


}
