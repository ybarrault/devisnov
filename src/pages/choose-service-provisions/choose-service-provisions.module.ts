import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ChooseServiceProvisionsPage } from './choose-service-provisions';
import {AccordionModule} from '../../components/Accordion/accordion.module';
import {TabPageModule} from '../../components/Tab/tab.module';

@NgModule({
  declarations: [ChooseServiceProvisionsPage],
  imports: [
    IonicPageModule.forChild(ChooseServiceProvisionsPage),
    TranslateModule.forChild(),
    AccordionModule,
    TabPageModule
  ],
  entryComponents: [ChooseServiceProvisionsPage],
})
export class ChooseServiceProvisionsPageModule {}
