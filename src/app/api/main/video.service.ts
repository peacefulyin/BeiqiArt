import {Injectable} from '@angular/core';

const itemList = [
  {videoUrl: 'http://player.youku.com/embed/XMzE3MzU0MTYzMg==',url: 'img/main/video/video1.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc1Mjk4ODczNg==',url: 'img/main/video/video2.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc0NzEwNzMyOA==',url: 'img/main/video/video3.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMzE3MzU0MTYzMg==',url: 'img/main/video/video1.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc1Mjk4ODczNg==',url: 'img/main/video/video2.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc0NzEwNzMyOA==',url: 'img/main/video/video3.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMzE3MzU0MTYzMg==',url: 'img/main/video/video1.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc1Mjk4ODczNg==',url: 'img/main/video/video2.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc0NzEwNzMyOA==',url: 'img/main/video/video3.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMzE3MzU0MTYzMg==',url: 'img/main/video/video1.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc1Mjk4ODczNg==',url: 'img/main/video/video2.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc0NzEwNzMyOA==',url: 'img/main/video/video3.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMzE3MzU0MTYzMg==',url: 'img/main/video/video1.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc1Mjk4ODczNg==',url: 'img/main/video/video2.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc0NzEwNzMyOA==',url: 'img/main/video/video3.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMzE3MzU0MTYzMg==',url: 'img/main/video/video1.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc1Mjk4ODczNg==',url: 'img/main/video/video2.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc0NzEwNzMyOA==',url: 'img/main/video/video3.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMzE3MzU0MTYzMg==',url: 'img/main/video/video1.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc1Mjk4ODczNg==',url: 'img/main/video/video2.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc0NzEwNzMyOA==',url: 'img/main/video/video3.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMzE3MzU0MTYzMg==',url: 'img/main/video/video1.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc1Mjk4ODczNg==',url: 'img/main/video/video2.jpg'},
  {videoUrl: 'http://player.youku.com/embed/XMjc0NzEwNzMyOA==',url: 'img/main/video/video3.jpg'},



];

@Injectable()
export class VideoService {
  getVideos() {
    return itemList;
  }
}
