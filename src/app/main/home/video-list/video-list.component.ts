import {Component, OnInit} from '@angular/core';
import {VideoService} from "../../../shared/api/main/video.service";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  public VideoIndex: number;
  public defaultVideoList;
  public videoList;

  constructor(private videoService: VideoService) {
    console.log('hasVideo', sessionStorage.getItem('hasVideo'));
    if (!sessionStorage.getItem('hasVideo')) {
      this.videoService.getColorsDefaultList().subscribe(rxData => {
        this.defaultVideoList = rxData;
        this.videoList = this.defaultVideoList[0];
        sessionStorage.setItem("defaultVideoList", this.defaultVideoList);
        sessionStorage.setItem("hasVideo", 'true');
      });
    } else {
      this.defaultVideoList = JSON.parse(sessionStorage.getItem('defaultVideoList'));
      this.videoList = this.defaultVideoList[0];
    }
  }

  ngOnInit() {
  }

}
