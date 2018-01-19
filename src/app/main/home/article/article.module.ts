import {NgModule} from '@angular/core';
import {ArticleComponent} from "./article.component";
import {ArticleContentComponent} from "./article-content/article-content.component";
import {KeepHtmlPipe} from "../../../shared/pipe/keep-html.pipe";
import {ArticleService} from "../../../api/main/article.service";
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ArticleComponent,
    ArticleContentComponent,
    KeepHtmlPipe
  ],
  providers: [
    ArticleService
  ],
  exports: [
    ArticleComponent,
    ArticleContentComponent,
    KeepHtmlPipe
  ],
})


export class ArticleModule {
}
