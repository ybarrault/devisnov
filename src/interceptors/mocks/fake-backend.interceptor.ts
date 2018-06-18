import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as USERS from './json/users.json';
import * as PROFILES from './json/profiles.json';
import * as DOMAINS from './json/domains.json';
import * as CATALOGUES from './json/catalogues.json';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';
const USERS_DATA = USERS as any;
const PROFILES_DATA = PROFILES as any;
const DOMAINS_DATA = DOMAINS as any;
const CATALOGUES_DATA = CATALOGUES as any;

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // array in local storage for registered users
    let users: any[] = USERS_DATA || [];
    // wrap in delayed observable to simulate server api call
    return Observable.of(null).mergeMap(() => {

      // authenticate
      if (request.url.endsWith('/api/login') && request.method === 'POST') {
        // find if any user matches login credentials
        const filteredUsers = users.filter(user => {
          return user.username === request.body.username && user.password === request.body.password;
        });

        if (filteredUsers.length) {
          // if login details are valid return 200 OK with user details and fake jwt token
          const user = filteredUsers[0];
          const body = {
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token: 'fake-jwt-token'
          };

          return Observable.of(new HttpResponse({ status: 200, body }));
        } else {
          // else return 400 bad request
          return Observable.throw('Username or password is incorrect');
        }
      }

      if (request.url.includes('/api/profile') && request.method === 'GET') {
        let { url: userId } = request;
        userId = userId.replace(/.*\/api\/profile\//, '');
        console.log('>>> PROFILE interpreted userId:', userId);
        // find if any user matches login credentials
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          const body = PROFILES_DATA[userId];
          if (!!body) {
            return Observable.of(new HttpResponse({ status: 200, body }));
          } else {
            return Observable.throw('404 not found');
          }
        } else {
          return Observable.throw('Unauthorised');
        }
      }


      if (request.url.includes('/api/domains') && request.method === 'GET') {
        const body = DOMAINS_DATA;
        if (!!body) {
          return Observable.of(new HttpResponse({ status: 200, body }));
        } else {
          return Observable.throw('404 not found');
        }
      }

      if (request.url.includes('/api/catalogues') && request.method === 'GET') {
        const body = CATALOGUES_DATA;
        if (!!body) {
          return Observable.of(new HttpResponse({ status: 200, body }));
        } else {
          return Observable.throw('404 not found');
        }
      }


      // pass through any requests not handled above
      return next.handle(request);

    })

    // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .materialize()
      .delay(500)
      .dematerialize();
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
