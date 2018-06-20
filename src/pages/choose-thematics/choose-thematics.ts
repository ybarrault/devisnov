import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {ICatalogue} from '../../models/ICatalogue';
import {ContextService} from '../../services/context.service';
import {IThematic} from '../../models/IThematic';

@IonicPage()
@Component({
  selector: 'page-choose-thematics',
  templateUrl: 'choose-thematics.html'
})
export class ChooseThematicsPage implements OnInit {
  private catalogues: ICatalogue[] = [];
  private selectedCataloguesWithThematics: ICatalogue[] = [];

  constructor(
    public navCtrl: NavController,
    public contextSvc: ContextService,
  ) {

  }

  public ngOnInit() {
    this.contextSvc.getCatalogues().subscribe((catalogues) => {
      this.catalogues = catalogues;
    });
  }

  public onSelect({event, catalogueId}) {
    const { thematicId } = event;
    const foundSelectedCatalogue = this.selectedCataloguesWithThematics.find(catalogue => catalogue.id === catalogueId);
    if (!!foundSelectedCatalogue) {
      const foundSelectedThematic = foundSelectedCatalogue && foundSelectedCatalogue.thematics ?
        foundSelectedCatalogue.thematics.find(item => item.id === thematicId) : undefined;
      if (!!foundSelectedThematic) {
        // If thematic was already selected, we remove it
        foundSelectedCatalogue.thematics = foundSelectedCatalogue.thematics.filter(item => item.id !== thematicId);
      } else {
        // If thematic was not selected, we add it
        foundSelectedCatalogue.thematics = [...foundSelectedCatalogue.thematics, this.getThematicFromIds(thematicId, catalogueId)];
      }
    } else {
      // If no thematic were saved under given catalogueId, we create an entry with this thematic as first item.

      const refCatalogue = Object.assign({}, this.catalogues.find(catalogue => catalogue.id === catalogueId));
      refCatalogue.thematics = [this.getThematicFromIds(thematicId, catalogueId)];
      this.selectedCataloguesWithThematics = [...this.selectedCataloguesWithThematics, refCatalogue];
    }
  }

  public getThematicFromIds(thematicId: string, catalogueId: string): IThematic {
    let foundThematic;
    let foundCatalogue;
    foundCatalogue = this.catalogues.find(catalogue => catalogue.id === catalogueId);
    if (!!foundCatalogue) {
      foundThematic = foundCatalogue.thematics.find(thematic => thematic.id === thematicId);
    }
    return foundThematic;
  }

  next() {
    this.navCtrl.push('ChooseServiceProvisionsPage', {selectedCataloguesWithThematics: this.selectedCataloguesWithThematics});
  }
}
