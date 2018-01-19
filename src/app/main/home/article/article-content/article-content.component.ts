import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent implements OnInit, OnChanges {
  @Input() article: any;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.article) {
      this.article = JSON.parse(this.article);
    }

  }

}
