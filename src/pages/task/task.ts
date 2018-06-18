import {Component, Input, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ICatalogue} from '../../models/ICatalogue';
import {ContextService} from '../../services/context.service';

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html'
})
export class TaskPage implements OnInit {
  @Input() catalogues: ICatalogue[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public contextSvc: ContextService,
    ) {

  }

  public ngOnInit() {

  }

  next() {
    // this.contextSvc.selectedCataloguesWithThematics = this.selectedCataloguesWithThematics;
  }
}
