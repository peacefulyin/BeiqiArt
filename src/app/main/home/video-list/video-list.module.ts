import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoListComponent} from "./video-list.component";
import {VideoCardComponent} from "./video-card/video-card.component";
import {SlideRiverComponent} from "../../../components/slide-river/slide-river.component";
import {CrumbNavComponent} from "../../../components/crumb-nav/crumb-nav.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VideoCardComponent,
    VideoListComponent,
    SlideRiverComponent,
    CrumbNavComponent
  ],
  exports: [
    VideoCardComponent,
    VideoListComponent,
    SlideRiverComponent,
    CrumbNavComponent
  ],

})


export class VideoListModule {
}
