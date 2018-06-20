import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'business-adherent',
  templateUrl: 'business-adherent.html'
})
export class BusinessAdherent implements OnInit {
  public searchNumber: string;
  public corporateName: string;
  public ngOnInit(){
    // console.info('>>> BusinessAdherent init');
  }

  public searchAdherent() {
    alert('>>> searchAdherent');
  }
}
