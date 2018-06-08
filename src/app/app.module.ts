import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {MyApp} from './app.component';

import {AuthenticationService} from '../services/authentication.service';
import {LoaderService} from '../services/loader.service';
import {JwtInterceptor} from '../interceptors/jwt.interceptor';
import {fakeBackendProvider} from '../interceptors/mocks/fake-backend.interceptor';
import {LoginPage} from '../pages/login/login';
import {HomePage} from '../pages/home/home';
import {LoginPageModule} from '../pages/login/login.module';
import {HomePageModule} from '../pages/home/home.module';
import {ContextService} from '../services/context.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
    }),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    LoginPageModule,
    HomePageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationService,
    ContextService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider
  ]
})
export class AppModule {
}
