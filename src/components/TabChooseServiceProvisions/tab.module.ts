import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { TabPage } from './tab';
import {AccordionComponentModule} from '../Accordion/accordion.module';
import {ServiceProvisionModule} from '../ServiceProvision/service-provision.module';

@NgModule({
  declarations: [TabPage],
  imports: [
    IonicPageModule.forChild(TabPage),
    TranslateModule.forChild(),
    AccordionComponentModule,
    ServiceProvisionModule
  ],
  entryComponents: [TabPage],
})
export class TabPageModule {}
