import {Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input} from '@angular/core';
import {VideoSliderItem} from "../../model/main/video-list.model";
import {pagingList} from '../../util/js/paging';
import { VideoService} from "../../api/main/video.service";

@Component({
  selector: 'app-slide-river',
  templateUrl: './slide-river.component.html',
  styleUrls: ['./slide-river.component.scss']
})
export class SlideRiverComponent implements OnInit, AfterViewInit {

  @Input() pageSize: number = 6;
  @Input() itemList: VideoSliderItem[] = [];
  public nowPage: number = 1;
  public liWidth: string;
  public ulElem: any;
  public liElem: any;
  public nowMargin: number = 0;

  constructor(private elementRef: ElementRef, private videoService: VideoService) {
    this.liWidth = (1 / this.pageSize) * 100 + '%';
    this.itemList = this.videoService.getVideos();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.ulElem = this.elementRef.nativeElement.querySelector('.sl-items-ul');
    this.liElem = this.elementRef.nativeElement.querySelector('.sl-items-li');
  }

  public handleClick(e) {
    e.preventDefault();
    const ulWidth = this.getStyle(this.ulElem, 'width');
    const liWidth = this.getStyle(this.liElem, 'width');
    const magrinDis = parseInt(ulWidth) - parseInt(liWidth) / 2;
    const transElem = this.pageSize - 1
    const remainderElem = Math.floor(this.itemList.length - this.nowPage * transElem)
    if (e.target.className.includes('sr-left') && this.nowPage !== 1) {
      this.nowMargin += magrinDis;
      this.ulElem.style.marginLeft = this.nowMargin + 'px';
      this.nowPage -= 1;
    } else if (e.target.className.includes('sr-right') && remainderElem >= transElem) {
      this.nowMargin -= magrinDis;
      this.ulElem.style.marginLeft = this.nowMargin + 'px';
      this.nowPage += 1;
    }
  }

  private getStyle(el, name) {
    if (window.getComputedStyle) {
      return window.getComputedStyle(el, null).width;
    } else {
      return el.currentStyle;
    }
  }


}
