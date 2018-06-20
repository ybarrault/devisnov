import {ICatalogue} from '../models/ICatalogue';
import {Injectable} from '@angular/core';
import {IServiceProvision} from '../models/IServiceProvision';

interface IStateItem {
  id: string,
  serviceProvisions: IServiceProvision[]
}

@Injectable()
export class EngagementLetterStateService {
  private state: IStateItem[] = [];

  constructor(
  ){}

  public init(stateItems: IStateItem[]) {
    const newState: IStateItem[] = stateItems.map(item => {
      return {
        id: item.id,
        serviceProvisions: []
      }
    });

    this.setState(newState);
    console.log('>>> initState');
  }

  public getState(state: IStateItem[]): IStateItem[] {
    return [...this.state];
  }

  public getStateCatalogue(catalogueId: string): IStateItem {
    return this.state.find(catalogue => catalogue.id === catalogueId);
  };

  public updateServiceProvision(catalogueId: string, serviceProvision: IServiceProvision) {
    const newState: IStateItem[] = [...this.state];
    const foundCatalogueIndex = newState.findIndex(stateItem => stateItem.id === catalogueId);
    if (foundCatalogueIndex !== -1) {
      const catalogue: IStateItem = newState[foundCatalogueIndex];
      const foundSelectedSP = catalogue && catalogue.serviceProvisions ?
        catalogue.serviceProvisions.find(item => item.id === serviceProvision.id) : undefined;
      if (!!foundSelectedSP) {
        // If service provision was already selected, we remove it
        catalogue.serviceProvisions = catalogue.serviceProvisions.filter(item => item.id !== serviceProvision.id);
      } else {
        // If service provision was not selected, we add it
        catalogue.serviceProvisions = [...catalogue.serviceProvisions, serviceProvision];
      }
    } else {
      // create catalogue
      newState.push({
        id: catalogueId,
        serviceProvisions: [serviceProvision]
      });
    }
    this.setState(newState);
  }

  private setState(state: IStateItem[]) {
    this.state = [...state];
  }
}

