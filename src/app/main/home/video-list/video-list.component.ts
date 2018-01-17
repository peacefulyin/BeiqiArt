import { Component, OnInit } from '@angular/core';
import {VideoService} from "../../../api/main/video.service";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  public videoItemList
  public VideoIndex: number;
  constructor(private videoService: VideoService) {
    this.videoItemList = this.videoService.getVideos();
  }

  ngOnInit() {
  }

}
