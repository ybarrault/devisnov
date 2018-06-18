import {Component, OnInit, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';
import {TranslateService} from '@ngx-translate/core';
import {AuthenticationService} from '../services/authentication.service';
import { Deeplinks } from '@ionic-native/deeplinks';
import {TaskPage} from '../pages/task/task';


@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) private readonly nav: Nav;
  private rootPage:any;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private translateSvc: TranslateService,
    private authSvc: AuthenticationService,
    private storageSvc: Storage,
    private deeplinks: Deeplinks,
  ) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translateSvc.setDefaultLang('fr');
      this.storageSvc
        .get('login')
        .then(login => {
          if (login) {
            this.authSvc.setLogin(login);
          }
          return this.storageSvc.get('token');
        })
        .then(token => {
          this.authSvc.setToken(token);
          if (this.authSvc.isTokenValid()) {
            this.nav.setRoot('HomePage');
          } else {
            this.nav.setRoot('LoginPage');
          }
        })
        .catch(error => {
          this.nav.setRoot('LoginPage');
        });

        // this.deeplinks.routeWithNavController(this.nav, {
        //   '/task/:taskId': TaskPage
        // }).subscribe((match) => {
        //   // match.$route - the route we matched, which is the matched entry from the arguments to route()
        //   // match.$args - the args passed in the link
        //   // match.$link - the full link data
        //   console.log('Successfully matched route', match);
        // }, (nomatch) => {
        //   // nomatch.$link - the full link data
        //   console.error('Got a deeplink that didn\'t match', nomatch);
        // });
    });
  }

  public ngOnInit() {

  }
}

