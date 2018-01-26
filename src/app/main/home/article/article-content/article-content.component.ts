import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


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

  }

  ngOnChanges() {
    if (this.article) {
      let beforeArticle = JSON.parse(this.article).content;
      beforeArticle += '<style type="text/css">img { max-width: 100% !important;}</style>';
      this.articleContent = this.sanitizer.bypassSecurityTrustHtml(beforeArticle);
    }
  }


}
