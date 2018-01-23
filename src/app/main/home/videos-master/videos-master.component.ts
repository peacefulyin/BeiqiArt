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
    console.log('hasVideo', sessionStorage.getItem('hasVideo'));
    if (!sessionStorage.getItem('hasVideo')) {
      this.videoService.getColorsDefaultList().subscribe(rxData => {
        this.defaultVideoList = rxData;
        console.log('before',this.defaultVideoList)
        sessionStorage.setItem("defaultVideoList", JSON.stringify(this.defaultVideoList));
        sessionStorage.setItem("hasVideo", 'true');
      });
    } else {
      this.defaultVideoList = JSON.parse(sessionStorage.getItem('defaultVideoList'));

    }
  }

  ngOnInit() {
  }

  private test() {
    const ob1 = Rx.Observable.from([1, 2, 3]);
    const ob2 = Rx.Observable.from(['a', 'b', 'c']);
    const newOb = Rx.Observable.zip(ob1, ob2, (x, y) => {
      return x + y;
    });
    newOb.subscribe(data => {
      console.log(data);

    });
  }

}
