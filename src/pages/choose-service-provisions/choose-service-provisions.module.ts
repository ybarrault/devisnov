import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ChooseServiceProvisionsPage } from './choose-service-provisions';
import {AccordionComponentModule} from '../../components/Accordion/accordion.module';
import {TabPageModule} from '../../components/TabChooseServiceProvisions/tab.module';

@NgModule({
  declarations: [ChooseServiceProvisionsPage],
  imports: [
    IonicPageModule.forChild(ChooseServiceProvisionsPage),
    TranslateModule.forChild(),
    AccordionComponentModule,
    TabPageModule
  ],
  entryComponents: [ChooseServiceProvisionsPage],
})
export class ChooseServiceProvisionsPageModule {}
