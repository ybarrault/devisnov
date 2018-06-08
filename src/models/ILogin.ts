export interface ILoginPayload {
  username: string;
  password: string;
}

export interface ILogin {
  id: string,
  username: string;
  firstName: string;
  lastName: string;
}

export interface ILoginResponse {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  token: string;
}
