import {IThematic} from './IThematic';

export interface ICatalogue {
  id: string;
  code: string;
  label: string;
  thematics: IThematic[];
}
