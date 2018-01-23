import {Component, OnInit, Input, Output, EventEmitter, ElementRef} from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() videoList;
  public imageList = [];
  private iframeElem;

  constructor(private elementRef: ElementRef) {
  }

  // 切换视频
  onselect(index) {
    const newVideo = this.videoList[index]
    this.iframeElem.src = newVideo.link;
  }

  ngOnInit() {
    // 得到图片数组
    this.videoList.forEach((v, k) => {
      this.imageList.push({url: v.image});
    })

    // 获取iframe元素
    this.iframeElem = this.elementRef.nativeElement.querySelector('.video-frame');
  }

}
