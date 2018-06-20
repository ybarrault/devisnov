import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Tabs} from 'ionic-angular';
import {ICatalogue, ICatalogueWithSPOnly} from '../../models/ICatalogue';
import {ContextService} from '../../services/context.service';
import {IServiceProvision} from '../../models/IServiceProvision';

@IonicPage()
@Component({
  selector: 'page-choose-service-provisions',
  templateUrl: 'choose-service-provisions.html'
})
export class ChooseServiceProvisionsPage implements OnInit {
  @Input() catalogues: ICatalogue[];
  @ViewChild('myTabs') tabRef: Tabs;
  public catalogueWithServiceProvisions: ICatalogueWithSPOnly[] = [];
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
    this.tabRef.select(0);
  }

  public setServiceProvisionsByCatalogue() {
    this.catalogueWithServiceProvisions = this.catalogues.map(
      catalogue => {
        const res: ICatalogueWithSPOnly = {
          id: catalogue.id,
          label: catalogue.label,
          code: catalogue.code,
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
        // filteredServiceProvisions.sort((sp1: IServiceProvision, sp2: IServiceProvision) => {
        //   return sp1.label.localeCompare(sp2.label);
        // });

        res.serviceProvisions = filteredServiceProvisions;
        return res;
      }
    )
  }
}
