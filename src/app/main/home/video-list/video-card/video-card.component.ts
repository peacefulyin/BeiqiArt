import {Component, OnInit, Input, Output, EventEmitter, ElementRef} from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() videoItemList;
  private iframeElem;

  constructor(private elementRef: ElementRef) {
  }

  onselect(index) {
    const newVideo = this.videoItemList[index]
    this.iframeElem.src = newVideo.videoUrl;
  }

  ngOnInit() {
    this.iframeElem = this.elementRef.nativeElement.querySelector('.video-frame');
  }

}
