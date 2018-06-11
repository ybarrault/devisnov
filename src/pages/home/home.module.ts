import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HomePage } from './home';
import {AccordionModule} from '../../components/Accordion/accordion.module';
import {BusinessAdherent} from '../../components/BusinessAdherent/business-adherent';
import {SalesLead} from '../../components/SalesLead/sales-lead';

@NgModule({
  declarations: [HomePage, BusinessAdherent, SalesLead],
  imports: [
    IonicPageModule.forChild(HomePage),
    TranslateModule.forChild(),
    AccordionModule
  ],
  entryComponents: [HomePage, BusinessAdherent, SalesLead],
})
export class HomePageModule {}
