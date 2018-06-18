import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { TabPage } from './tab';

@NgModule({
  declarations: [TabPage],
  imports: [
    IonicPageModule.forChild(TabPage),
    TranslateModule.forChild()
  ],
  entryComponents: [TabPage],
})
export class TabPageModule {}
