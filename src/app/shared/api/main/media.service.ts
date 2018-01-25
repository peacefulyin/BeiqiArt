import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as Rx from 'rxjs/Rx';

const itemList = [
  {videoUrl: 'http://player.youku.com/embed/XMzE3MzU0MTYzMg==', url: 'img/main/video/video1.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc1Mjk4ODczNg==', url: 'img/main/video/video2.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc0NzEwNzMyOA==', url: 'img/main/video/video3.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMzE3MzU0MTYzMg==', url: 'img/main/video/video1.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc1Mjk4ODczNg==', url: 'img/main/video/video2.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc0NzEwNzMyOA==', url: 'img/main/video/video3.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMzE3MzU0MTYzMg==', url: 'img/main/video/video1.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc1Mjk4ODczNg==', url: 'img/main/video/video2.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc0NzEwNzMyOA==', url: 'img/main/video/video3.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMzE3MzU0MTYzMg==', url: 'img/main/video/video1.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc1Mjk4ODczNg==', url: 'img/main/video/video2.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc0NzEwNzMyOA==', url: 'img/main/video/video3.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMzE3MzU0MTYzMg==', url: 'img/main/video/video1.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc1Mjk4ODczNg==', url: 'img/main/video/video2.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc0NzEwNzMyOA==', url: 'img/main/video/video3.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMzE3MzU0MTYzMg==', url: 'img/main/video/video1.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc1Mjk4ODczNg==', url: 'img/main/video/video2.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc0NzEwNzMyOA==', url: 'img/main/video/video3.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMzE3MzU0MTYzMg==', url: 'img/main/video/video1.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc1Mjk4ODczNg==', url: 'img/main/video/video2.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc0NzEwNzMyOA==', url: 'img/main/video/video3.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMzE3MzU0MTYzMg==', url: 'img/main/video/video1.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc1Mjk4ODczNg==', url: 'img/main/video/video2.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc0NzEwNzMyOA==', url: 'img/main/video/video3.jpg'},


];

@Injectable()
export class MediaService {
  constructor(private http: HttpClient) {
  }

  /**
   * 视频
   */
  getVideos() {
    return itemList;
  }


  getVideoListById(id) {
    return this.http.get(`http://127.0.0.1/api/videoList/${id}`);
  }

  getVideoListByName(name) {
    return this.http.get(`http://127.0.0.1/api/videoList?search=${name}`);
  }

  getDefaultList() {
    return this.http.get(`http://127.0.0.1/api/videoList/default`);
  }

  getColorsDefaultList() {
    return this.getDefaultList().flatMap((data: Array<object>) => {
      const videoListOb = Rx.Observable.from(data);
      const colorList = Rx.Observable.from(['rgb(128,128,128)', 'rgb(85,85,85)', 'rgb(64,64,64)']);
      return Rx.Observable.zip(videoListOb, colorList, (list, Color) => {
        list['color'] = Color;
        return list;
      }).toArray();
    });
  }

  /**
   * 图片
   */

  getIndexBanner() {
    return this.http.get('http://127.0.0.1/api/banner?search=1').map(data => {
      // 因为search返回的list
      return data[0];
    });
  }

}
