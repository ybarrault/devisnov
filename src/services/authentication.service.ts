import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ILogin, ILoginPayload, ILoginResponse} from '../models/ILogin';
import * as CONFIG from '../assets/json/config.json'
import * as PARAMS from '../assets/json/params.json'
import { Storage } from '@ionic/storage';

import {tap} from 'rxjs/operators';
const {SERVER, PORT, PROTOCOL} = CONFIG as any;
const {urls:URLS} = PARAMS as any;
const BASE_URL = `${PROTOCOL}://${SERVER}:${PORT}`;

@Injectable()
export class AuthenticationService {
  private token: string = undefined;
  private login: ILogin = undefined;
  private httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private storageSvc: Storage,
  ){}

  public getToken(): string {
    return this.token;
  }

  public setToken(token: string): void {
    this.token = token;
    this.storageSvc.set('token', token).then( token => {
      // console.log('>>> ionicStorage setToken', token);
    });
  }

  public getLogin(): ILogin {
    return this.login;
  }

  public setLogin(login: ILogin): void{
    this.login = login;
    this.storageSvc.set('login', login).then( login => {
      // console.log('>>> ionicStorage setLogin', login);
    });
  }

  public isTokenValid() {
    return !!this.token && this.token === 'fake-jwt-token';
  }

  public authenticate(loginPayload: ILoginPayload) {
    let {login: loginUrl} = URLS;
    loginUrl = `${BASE_URL}${loginUrl}`;
    return this.http.post<ILoginResponse>(loginUrl, loginPayload, this.httpOptions).pipe(
      tap( () => {
        // console.log('>>> LOGIN SUCCESS', loginPayload);
      })
    )
  }
}
