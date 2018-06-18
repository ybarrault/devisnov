import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { SwiperComponent } from './swiper';
import {SwiperSlide} from './SwiperSlide/swiper-slide';

@NgModule({
  declarations: [SwiperComponent, SwiperSlide],
  imports: [
    IonicPageModule.forChild(SwiperComponent),
    TranslateModule.forChild()
  ],
  exports: [SwiperComponent, SwiperSlide],
  entryComponents: [SwiperComponent],
})
export class SwiperComponentModule {}
