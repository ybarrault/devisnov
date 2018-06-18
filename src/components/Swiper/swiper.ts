import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  Input, OnDestroy,
  ViewChild
} from '@angular/core';
import {SwiperSlide} from './SwiperSlide/swiper-slide';
import {debounce, throttle} from 'lodash';

@Component({
  selector: 'swiper',
  templateUrl: 'swiper.html'
})
export class SwiperComponent implements AfterViewInit, OnDestroy {
  private debouncedSetMaxTranslate: () => void;
  private throttledMouseMove: (event: any) => void;
  @ContentChildren(SwiperSlide) swiperSlides: SwiperSlide[];
  @ViewChild('swiperContainer') swiperContainer: ElementRef;
  @ViewChild('swiperContent') swiperContent: ElementRef;
  @ViewChild('prev') prev: ElementRef;
  @ViewChild('next') next: ElementRef;
  private maxTranslate: number;
  private isMoving: boolean = false;
  private previousTranslate: number = 0;
  private style: any = {};
  private translate: {
    startX: number,
    endX: number,
  } = {
    startX: 0,
    endX: 0,
  };

  constructor() {
    this.debouncedSetMaxTranslate = debounce(this.setMaxTranslate, 100).bind(this);
    this.throttledMouseMove = throttle(e => { this.onMouseMove(e); }, 100);
  }

  ngAfterViewInit() {
    window.addEventListener('resize', this.debouncedSetMaxTranslate, false);
    this.setMaxTranslate();
  }

  setMaxTranslate() {
    this.maxTranslate = Math.ceil(
      this.swiperContent.nativeElement.getBoundingClientRect().width - this.swiperContainer.nativeElement.getBoundingClientRect().width)
    console.log(' ----- maxTranslate ----------', this.maxTranslate);
  }

  onTouchStart(e) {
    this.isMoving = true;
    this.translate.startX = e.touches[0].screenX;
    // console.log('>>> process_mousedown', e);
  }

  onMouseDown(e) {
    this.isMoving = true;
    this.translate.startX = e.clientX ;
    // console.log('>>> process_touchstart', e);
  }

  onMouseMove(e) {
    if (this.isMoving) {
      // console.log('>>> process_mousemove', e);
      this.translate.endX = e.clientX;
      this.swipe();
    }
  }

  onTouchMove(e) {
    if (this.isMoving) {
      // console.log('>>> process_touchmove', e);
      this.translate.endX = e.touches[0].screenX;
      this.swipe();
    }
  }

  onCancel(e) {
    this.isMoving = false;
  }

    onEnd(e) {
    if(this.isMoving) {
      this.isMoving = false;
    }
  }

  swipe() {
    // let translateLength = this.translate.endX - this.translate.startX;
    // console.log('>>> this.translate.endX - this.translate.startX', this.translate.endX - this.translate.startX);
    let translateLength = this.previousTranslate + (this.translate.endX - this.translate.startX);
    translateLength = translateLength < - this.maxTranslate ? - this.maxTranslate : translateLength;
    translateLength = translateLength < 0 ?  translateLength : 0;
    this.previousTranslate = translateLength;
    // console.log('>>> newTranslate', translateLength);
    this.style = {
      transform: 'translateX(' + translateLength + 'px)'
    };
  }


  ngOnDestroy() {
    window.removeEventListener('resize', debounce(this.debouncedSetMaxTranslate, 100), false);
  }

}
