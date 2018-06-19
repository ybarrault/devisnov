import {ITask} from './ITask';

export interface IServiceProvision {
  id: string;
  code: string;
  label: string;
  billable: boolean;
  billingMode: string;
  domain?: string;
  skill?: string;
  serviceProvisions: IServiceProvision[];
  tasks: ITask[];
}

export interface IServiceProvisionByCatalogue {
  id: string,
  code: string,
  label: string,
  serviceProvisions: IServiceProvision[]
}
