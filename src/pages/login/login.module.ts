import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { LoginPage } from './login';
import {AuthenticationService} from '../../services/authentication.service';

@NgModule({
  declarations: [LoginPage],
  imports: [IonicPageModule.forChild(LoginPage), TranslateModule.forChild()],
  entryComponents: [LoginPage],
})
export class LoginPageModule {}
