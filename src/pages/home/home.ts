import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {AuthenticationService} from '../../services/authentication.service';
import {ILogin} from '../../models/ILogin';
import {ContextService} from '../../services/context.service';
import {IProfile} from '../../models/IProfile';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  private login: ILogin = undefined;
  private profile: IProfile = undefined;
  constructor(
    public navCtrl: NavController,
    public authSvc: AuthenticationService,
    public contextSvc: ContextService,
  ) {
  }

  public ngOnInit() {
    this.login = this.authSvc.getLogin();
    if (!!this.login) {
      console.log('>>> HOME login:', this.login);
      this.contextSvc.getProfile(this.login.id).subscribe(
        (profile: IProfile) => {
          console.log('>>> HOME profile:', profile);
          this.profile = profile;
        });
    }
  }
}
