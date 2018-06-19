import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import {AccordionComponentModule} from '../Accordion/accordion.module';
import {ServiceProvision} from '../ServiceProvision/service-provision';
import {NestedTask} from '../NestedTask/nested-task';

@NgModule({
  declarations: [ServiceProvision, NestedTask],
  imports: [
    IonicPageModule.forChild(ServiceProvision),
    TranslateModule.forChild(),
    AccordionComponentModule
  ],
  exports: [ServiceProvision, NestedTask],
  entryComponents: [ServiceProvision],
})
export class ServiceProvisionModule {}
