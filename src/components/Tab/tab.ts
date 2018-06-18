import {
  Component,
  OnInit,
} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage implements OnInit {
  private catalogue: any;
  constructor(
    public navCtrl: NavController,
  ) {

  }

  public ngOnInit(){
    console.log('>>> tab catalogue', this.catalogue);
  }
}
