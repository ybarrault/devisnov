import {Component, Input, OnInit} from '@angular/core';
import {IServiceProvision} from '../../models/IServiceProvision';

@Component({
  selector: 'service-provision',
  templateUrl: 'service-provision.html'
})
export class ServiceProvision implements OnInit {
  @Input() serviceProvision: IServiceProvision;
  @Input() catalogueId: string;
  public ngOnInit(){
    // console.info('>>> ServiceProvision init');
  }

}
