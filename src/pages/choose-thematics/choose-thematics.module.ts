import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ChooseThematicsPage } from './choose-thematics';
import {Tile} from '../../components/Tile/tile';
import {SwiperComponentModule} from '../../components/Swiper/swiper.module';

@NgModule({
  declarations: [ChooseThematicsPage, Tile],
  imports: [
    IonicPageModule.forChild(ChooseThematicsPage),
    TranslateModule.forChild(),
    SwiperComponentModule
  ],
  entryComponents: [ChooseThematicsPage],
})
export class ChooseThematicsPageModule {}
