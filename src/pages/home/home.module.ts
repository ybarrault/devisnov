import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from '@ngx-translate/core';
import {HomePage} from './home';
import {AccordionComponentModule} from '../../components/Accordion/accordion.module';
import {BusinessAdherent} from '../../components/BusinessAdherent/business-adherent';
import {SalesLead} from '../../components/SalesLead/sales-lead';

@NgModule({
  declarations: [HomePage, BusinessAdherent, SalesLead],
  imports: [
    IonicPageModule.forChild(HomePage),
    TranslateModule.forChild(),
    AccordionComponentModule
  ],
  entryComponents: [HomePage],
})
export class HomePageModule {
}
