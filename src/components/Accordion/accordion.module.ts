import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from '@ngx-translate/core';
import {AccordionComponent} from './accordion';
import {AccordionItemComponent} from './AccordionItem/accordion-item';

@NgModule({
  declarations: [AccordionComponent, AccordionItemComponent],
  imports: [
    IonicPageModule.forChild(AccordionComponent),
    TranslateModule.forChild()
  ],
  exports: [AccordionComponent, AccordionItemComponent],
  entryComponents: [AccordionComponent],
})
export class AccordionComponentModule {
}
