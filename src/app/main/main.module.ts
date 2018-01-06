import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutingModule} from "./main.routing.module";
import {ArticleComponent} from "./article/article.component";
import {SlideRiverComponent} from "../components/slide-river/slide-river.component";
import {CarouselModule} from 'primeng/primeng';
import { VideoService} from "../api/main/video.service";

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    CarouselModule
  ],
  declarations: [
    MainComponent,
    ArticleComponent,
    SlideRiverComponent,
  ],
  providers: [
    VideoService
  ],
})


export class MainModule {
}
