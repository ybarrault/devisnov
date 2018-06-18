import {Component, Input, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ICatalogue} from '../../models/ICatalogue';
import {ContextService} from '../../services/context.service';
import {IServiceProvision} from '../../models/IServiceProvision';

@IonicPage()
@Component({
  selector: 'page-choose-service-provisions',
  templateUrl: 'choose-service-provisions.html'
})
export class ChooseServiceProvisionsPage implements OnInit {
  @Input() catalogues: ICatalogue[];
  private serviceProvisionsByCatalogue: {
    id: string,
    code: string,
    label: string,
    serviceProvisions: IServiceProvision[]
  }[] = [];
  private tab : string = 'TabPage';
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

  public setServiceProvisionsByCatalogue() {
    this.serviceProvisionsByCatalogue = this.catalogues.map(
      catalogue => {
        const res = {
          id: catalogue.id,
          code: catalogue.code,
          label: catalogue.label,
          serviceProvisions: []
        };

        let filteredServiceProvisions: IServiceProvision[] = [];
        catalogue.thematics.forEach(thematic => {
          if (!!thematic.serviceProvisions) {
            thematic.serviceProvisions.forEach(serviceProvision => {
              const foundServiceProvision = filteredServiceProvisions.findIndex(filteredServiceProvision => filteredServiceProvision.id === serviceProvision.id);
              if (!foundServiceProvision) {
                filteredServiceProvisions = [...filteredServiceProvisions, serviceProvision];
              }
            })
          }
        });

        res.serviceProvisions = filteredServiceProvisions;

        return res;
      }
    )
  }

  next() {
    // this.contextSvc.selectedCataloguesWithThematics = this.selectedCataloguesWithThematics;
  }
}
