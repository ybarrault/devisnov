import {ITask} from './ITask';

export interface IServiceProvision {
  id: string;
  code: string;
  label: string;
  tasks: ITask[];
  serviceProvisions: IServiceProvision[];
}
