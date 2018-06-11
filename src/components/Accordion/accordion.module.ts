import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { Accordion } from './accordion';
import {AccordionItem} from './AccordionItem/accordion-item';
import {AccordionItemDirective} from './AccordionItem/accordion-item.directive';

@NgModule({
  declarations: [Accordion, AccordionItem, AccordionItemDirective],
  imports: [
    IonicPageModule.forChild(Accordion),
    TranslateModule.forChild()
  ],
  exports: [Accordion],
  entryComponents: [Accordion],
})
export class AccordionModule {}
