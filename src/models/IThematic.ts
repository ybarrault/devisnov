import {IServiceProvision} from './IServiceProvision';

export interface IThematic {
  id: string;
  code: string;
  label: string;
  serviceProvisions: IServiceProvision[]
}
