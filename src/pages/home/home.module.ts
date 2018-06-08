import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HomePage } from './home';
import {ContextService} from '../../services/context.service';

@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage), TranslateModule.forChild()],
  entryComponents: [HomePage],
})
export class HomePageModule {}
