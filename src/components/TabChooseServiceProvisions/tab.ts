import {
  Component,
  OnInit,
} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {IServiceProvisionByCatalogue} from '../../models/IServiceProvision';

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage implements OnInit {
  private catalogue: IServiceProvisionByCatalogue;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {

  }

  public ngOnInit(){
    this.catalogue = this.navParams.data;
    console.log('>>> tab catalogue', this.catalogue);
  }
}
