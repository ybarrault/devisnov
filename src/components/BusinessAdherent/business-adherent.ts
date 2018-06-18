import {Component, Input, OnInit} from '@angular/core';
import {IClient} from '../../models/IProfile';

@Component({
  selector: 'business-adherent',
  templateUrl: 'business-adherent.html'
})
export class BusinessAdherent implements OnInit {
  private searchNumber: string;
  private corporateName: string;
  public ngOnInit(){
    // console.info('>>> BusinessAdherent init');
  }

  public saveAdherent() {
    console.log('>>> saveAdherent');
  }
}
