import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IProfile} from '../models/IProfile';
import * as CONFIG from '../assets/json/config.json'
import * as PARAMS from '../assets/json/params.json'

import {tap} from 'rxjs/operators';
import {ICatalogue} from '../models/ICatalogue';
const {SERVER, PORT, PROTOCOL} = CONFIG as any;
const {urls:URLS} = PARAMS as any;
const BASE_URL = `${PROTOCOL}://${SERVER}:${PORT}`;

@Injectable()
export class ContextService {
  private _selectedCataloguesWithThematics: ICatalogue[];
  private httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  set(selectedCataloguesWithThematics: ICatalogue[]) {
    this._selectedCataloguesWithThematics = selectedCataloguesWithThematics;
  }

  get(): ICatalogue[] {
    return this._selectedCataloguesWithThematics;
  }

  constructor(
    private http: HttpClient,
  ){}

  public getProfile(userId: string) {
    let {profile: profileUrl} = URLS;
    profileUrl = `${BASE_URL}${profileUrl.replace(':userId', userId)}`;
    // console.log('>>> getProfile', profileUrl);
    return this.http.get<IProfile>(profileUrl, this.httpOptions).pipe(
      tap( (profile: IProfile) => {
        console.log('>>> getProfile SUCCESS', profile);
      })
    )
  }

  public getDomains() {
    let {domains: domainsUrl} = URLS;
    domainsUrl = `${BASE_URL}${domainsUrl}`;
    // console.log('>>> getDomains', domainsUrl);
    return this.http.get<{value: string, label: string}[]>(domainsUrl, this.httpOptions).pipe(
      tap( domains => {
        console.log('>>> getDomains SUCCESS', domains);
      })
    )
  }

  public getCatalogues() {
    let {catalogues: cataloguesUrl} = URLS;
    cataloguesUrl = `${BASE_URL}${cataloguesUrl}`;
    // console.log('>>> getCatalogues', cataloguesUrl);
    return this.http.get<ICatalogue[]>(cataloguesUrl, this.httpOptions).pipe(
      tap( catalogues => {
        console.log('>>> getCatalogues SUCCESS', catalogues);
      })
    )
  }
}
