export interface IClient {
  corporateName: string;
  address: string;
  domain: string;
  job: string;
  coreBusiness: string;
  sideBusiness: string;
  nEmployee: number;
  volumes: string;
}

export interface IContact {
  name: string;
  job: string;
  email: string;
  phoneNumber: string;
}

export interface IProfile {
  client: IClient;
  contact: IContact;
}
