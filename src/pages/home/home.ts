import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {AuthenticationService} from '../../services/authentication.service';
import {ILogin} from '../../models/ILogin';
import {ContextService} from '../../services/context.service';
import {IProfile} from '../../models/IProfile';
import {AccordionItemContent} from '../../components/Accordion/AccordionItem/models/accordion-item-content';
import {BusinessAdherent} from '../../components/BusinessAdherent/business-adherent';
import {SalesLead} from '../../components/SalesLead/sales-lead';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  private login: ILogin = undefined;
  private profile: IProfile = undefined;
  private items: AccordionItemContent[] = [];
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

          this.items = [
            new AccordionItemContent(BusinessAdherent, {title: 'BusinessAdherent', description: 'I\'m a business adherent'}),
            new AccordionItemContent(SalesLead, {
              client: this.profile.client
            }),
          ];
        });
    }
  }
}
