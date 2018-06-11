import {Component, Input, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';
import {AccordionItem} from './AccordionItem/accordion-item';

@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class Accordion implements OnInit {
  @Input() items: AccordionItem[];

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private translateSvc: TranslateService,
  ) {
  }

  public ngOnInit() {

  }
}
