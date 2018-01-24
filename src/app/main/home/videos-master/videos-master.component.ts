import {Component, OnInit} from '@angular/core';
import {VideoService} from "../../../shared/api/main/video.service";
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-videos-master',
  templateUrl: './videos-master.component.html',
  styleUrls: ['./videos-master.component.scss']
})
export class VideosMasterComponent implements OnInit {
  public defaultVideoList;

  constructor(private videoService: VideoService) {
    this.getVideos();
  }

  getVideos() {
    // 根据是否已经缓存视频数据来对应处理。
    if (!sessionStorage.getItem('hasVideo')) {
      this.videoService.getColorsDefaultList().subscribe(rxData => {
        this.defaultVideoList = rxData;
        sessionStorage.setItem("defaultVideoList", JSON.stringify(this.defaultVideoList));
        sessionStorage.setItem("hasVideo", 'true');
      });
    } else {
      this.defaultVideoList = JSON.parse(sessionStorage.getItem('defaultVideoList'));
    }
  }

  ngOnInit() {
  }



}
