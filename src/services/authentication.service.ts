import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ILogin} from '../models/ILogin';
import * as CONFIG from '../assets/json/config.json'
import * as PARAMS from '../assets/json/params.json'
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
const {SERVER, PORT, PROTOCOL} = CONFIG as any;
const {urls:URLS} = PARAMS as any;
const BASE_URL = `${PROTOCOL}://${SERVER}:${PORT}`;

@Injectable()
export class AuthenticationService {
  private token: string = undefined;
  private httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private storageSvc: Storage,
    private http: HttpClient,
  ){}

  public authenticate(loginInfo: ILogin) {
    const {login: loginUrl} = URLS;
    return this.http.post<ILogin>(loginUrl, loginInfo, this.httpOptions).pipe(
      tap( () => {console.log('login success', loginInfo);}),
      catchError(err => {console.error('login failed', err); return of(null);})
    )
  }
}
