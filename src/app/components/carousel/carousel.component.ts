import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() slides;
  activeSlideIndex: number = 0;

  constructor() {

  }

  addSlide(img): void {
    this.slides.push({
      image: img,
    });
  }

  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }

  ngOnInit() {
  }



}
