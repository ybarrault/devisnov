import {
  Component,
  OnInit,
} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {IServiceProvision} from '../../models/IServiceProvision';
import {EngagementLetterStateService} from '../../services/state.service';
import {ICatalogueWithSPOnly} from '../../models/ICatalogue';

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage implements OnInit {
  private catalogue: ICatalogueWithSPOnly;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public stateSvc: EngagementLetterStateService,
  ) {

  }

  public ngOnInit(){
    this.catalogue = this.navParams.data;

    console.log('>>> tab catalogue', this.catalogue);
  }

  public updateServiceProvision({event, serviceProvision}) {
    event.preventDefault();
    event.stopPropagation();
    serviceProvision.selected = !serviceProvision.selected;
    this.stateSvc.updateServiceProvision(this.catalogue.id, serviceProvision);
  }
}
