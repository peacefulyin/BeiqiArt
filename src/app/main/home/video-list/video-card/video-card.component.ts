import {Component, OnInit, Input, Output, EventEmitter, ElementRef, OnChanges} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit, OnChanges {
  @Input() videoList;
  public imageList = [];
  private iframeElem;

  constructor(private elementRef: ElementRef,
              private domSanitizer: DomSanitizer) {
  }

  // 切换视频
  onselect(index) {
    const newVideo = this.videoList[index]
    this.iframeElem.src = newVideo.link;
  }

  ngOnInit() {
    // 得到图片数组

  }


  ngOnChanges() {
    this.videoListInit()
  }

  videoListInit() {
    this.videoList.forEach((v, k) => {
      this.imageList.push({url: v.image});
    })

    // 获取iframe元素
    this.iframeElem = this.elementRef.nativeElement.querySelector('.video-frame');

    // 获取首个视频地址
    this.onselect(0);
  }

}
