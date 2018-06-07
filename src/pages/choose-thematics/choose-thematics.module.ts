import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ChooseThematicsPage } from './choose-thematics';

@NgModule({
  declarations: [ChooseThematicsPage],
  imports: [IonicPageModule.forChild(ChooseThematicsPage), TranslateModule.forChild()],
  entryComponents: [ChooseThematicsPage],
})
export class ChooseThematicsPageModule {}
