import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoListComponent} from "./video-list.component";
import { VideoCardComponent } from './video-card/video-card.component';
import {VideoListRoutingModule} from "./video-list.routing.module";

@NgModule({
  imports: [
    CommonModule,
    VideoListRoutingModule
  ],
  declarations: [
    VideoListComponent,
    VideoCardComponent
  ]
})
export class VideoListModule { }
