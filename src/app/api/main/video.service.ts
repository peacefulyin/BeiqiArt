import { Injectable } from '@angular/core';

const itemList = [
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},
  {url: 'http://via.placeholder.com/185x105'},


];

@Injectable()
export class VideoService {
  getVideos() { return itemList; }
}
