import {ITask} from './ITask';

export interface IServiceProvision {
  id: string;
  code: string;
  label: string;
  billable: boolean;
  billingMode: string;
  domain?: string;
  skill?: string;
  unitPrice: number;
  price?: number;
  selected?: boolean;
  serviceProvisions: IServiceProvision[];
  tasks: ITask[];
}
