import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { Accordion } from './accordion';
import {AccordionItem} from './AccordionItem/accordion-item';

@NgModule({
  declarations: [Accordion, AccordionItem],
  imports: [
    IonicPageModule.forChild(Accordion),
    TranslateModule.forChild()
  ],
  exports: [Accordion, AccordionItem],
  entryComponents: [Accordion],
})
export class AccordionModule {}
