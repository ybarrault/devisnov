import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {TranslateService} from '@ngx-translate/core';
import {LoaderService} from '../../services/loader.service';
import {ILoginResponse} from '../../models/ILogin';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  private loginForm: FormGroup;
  public username: string;
  public password: string;

  constructor(
    public navCtrl: NavController,
    public authSvc: AuthenticationService,
    private alertCtrl: AlertController,
    private translateSvc: TranslateService,
    private loaderSvc: LoaderService,
  ) {
  }

  public ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(this.username, [Validators.required]),
      password: new FormControl(this.password, [Validators.required]),
    });
  }

  private async onSubmit() {
    try {
      await this.loaderSvc.showSpinner();
      this.authSvc.authenticate({username: this.username, password: this.password}).subscribe(
        (loginResponse: ILoginResponse) => {
            const {id, username, lastName, firstName, token} = loginResponse;

            this.authSvc.setToken(token);
            this.authSvc.setLogin({
              id,
              username,
              lastName,
              firstName,
            });
            this.navCtrl.setRoot('HomePage');
          },
          async (error: Error) => {
            await this.showError();
          },
        );
    } catch (err) {
      this.showError();
    }
  }

  private async showError() {
    await this.loaderSvc.hideSpinner();
    await this.alertCtrl
      .create({
        title: this.translateSvc.instant('ERROR.LOGIN.TITLE'),
        subTitle: this.translateSvc.instant(
          'ERROR.LOGIN.MESSAGE',
        ),
        buttons: [this.translateSvc.instant('COMMON.OK')],
      })
      .present();
  }
}
