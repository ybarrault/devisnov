import {IThematic} from './IThematic';
import {IServiceProvision} from './IServiceProvision';

export interface ICatalogue {
  id: string;
  code: string;
  label: string;
  thematics: IThematic[];
}

export interface ICatalogueWithSPOnly {
  id: string;
  code: string;
  label: string;
  serviceProvisions: IServiceProvision[]
}
