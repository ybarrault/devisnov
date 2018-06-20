import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import {AccordionComponentModule} from '../Accordion/accordion.module';
import {ServiceProvision} from '../ServiceProvision/service-provision';
import {TaskManagerModule} from '../TaskManager/task-manager.module';

@NgModule({
  declarations: [ServiceProvision],
  imports: [
    IonicPageModule.forChild(ServiceProvision),
    TranslateModule.forChild(),
    AccordionComponentModule,
    TaskManagerModule,
  ],
  exports: [ServiceProvision],
  entryComponents: [ServiceProvision],
})
export class ServiceProvisionModule {}
