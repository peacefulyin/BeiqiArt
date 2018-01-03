import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutingModule} from "./main.routing.module";
import {ArticleComponent} from "./article/article.component";

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    ArticleComponent,
  ]
})


export class MainModule {
}
