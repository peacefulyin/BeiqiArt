import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {apiRectify} from "../../../../util/js/apiTools";

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent implements OnInit, OnChanges {
  @Input() article: any;
  public articleContent:object;
  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.article) {
      this.article = JSON.parse(this.article);
      console.log('hahaha',this.article)
      this.articleContent = this.sanitizer.bypassSecurityTrustHtml(apiRectify(this.article.content));
    }

  }

}
