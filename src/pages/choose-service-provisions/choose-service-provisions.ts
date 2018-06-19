import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Tabs} from 'ionic-angular';
import {ICatalogue} from '../../models/ICatalogue';
import {ContextService} from '../../services/context.service';
import {IServiceProvision, IServiceProvisionByCatalogue} from '../../models/IServiceProvision';

@IonicPage()
@Component({
  selector: 'page-choose-service-provisions',
  templateUrl: 'choose-service-provisions.html'
})
export class ChooseServiceProvisionsPage implements OnInit {
  @Input() catalogues: ICatalogue[];
  @ViewChild('myTabs') tabRef: Tabs;
  public serviceProvisionsByCatalogue: IServiceProvisionByCatalogue[] = [];
  public tab : string = 'TabPage';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public contextSvc: ContextService,
    ) {

  }

  public ngOnInit() {
    this.catalogues = this.navParams.get('selectedCataloguesWithThematics');
    this.setServiceProvisionsByCatalogue();
  }

  public ionViewDidEnter() {
    this.tabRef.select(1);
  }

  public setServiceProvisionsByCatalogue() {
    this.serviceProvisionsByCatalogue = this.catalogues.map(
      catalogue => {
        const res: IServiceProvisionByCatalogue = {
          id: catalogue.id,
          code: catalogue.code,
          label: catalogue.label,
          serviceProvisions: []
        };

        let filteredServiceProvisions: IServiceProvision[] = [];
        catalogue.thematics.forEach(thematic => {
          if (!!thematic.serviceProvisions) {
            thematic.serviceProvisions.forEach(serviceProvision => {
              const foundServiceProvision = filteredServiceProvisions.find(filteredServiceProvision => filteredServiceProvision.id === serviceProvision.id);
              if (!foundServiceProvision) {
                filteredServiceProvisions = [...filteredServiceProvisions, serviceProvision];
              }
            })
          }
        });
        filteredServiceProvisions.sort((sp1: IServiceProvision, sp2: IServiceProvision) => {
          return sp1.label.localeCompare(sp2.label);
        });

        res.serviceProvisions = filteredServiceProvisions;
        return res;
      }
    )
  }
}
