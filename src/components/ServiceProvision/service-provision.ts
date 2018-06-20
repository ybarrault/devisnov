import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {IServiceProvision} from '../../models/IServiceProvision';
import {EngagementLetterStateService} from '../../services/state.service';

enum BILLING_MODES {
  BUNDLE = 'forfait',
  HOUR = 'heure',
  UNIT = 'unite',
}

@Component({
  selector: 'service-provision',
  templateUrl: 'service-provision.html'
})
export class ServiceProvision implements OnInit, OnChanges {
  @Input() serviceProvision: IServiceProvision;
  @Input() catalogueId: string;
  @Output() updatePrevision: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private stateSvc: EngagementLetterStateService,
  ) {

  }

  public ngOnInit(){
    // console.info('>>> ServiceProvision init');
    this.serviceProvision.price = this.calculateAllPrices(this.serviceProvision);
    console.log('this.serviceProvision', this.serviceProvision);
  }

  public ngOnChanges() {
    this.serviceProvision.price = this.calculateAllPrices(this.serviceProvision);
  }

  public calculateAllPrices(serviceProvision): number {
    if (serviceProvision.serviceProvisions && serviceProvision.serviceProvisions.length) {
      let childrenPrice = serviceProvision.serviceProvisions.reduce((accumulator, spItem) => {
        spItem.price = this.calculateAllPrices(spItem);
        // console.group(' --- calculateAllPrices');
        // console.log('spItem.id', spItem.id);
        // console.log('spItem.price', spItem.price);
        // console.log('childrenPrice', childrenPrice);
        // console.groupEnd();
        return accumulator + spItem.price;
      }, 0);
      // console.group('calculateAllPrices');
      // console.log('serviceProvision.id', serviceProvision.id);
      // console.log('childrenPrice', childrenPrice);
      // console.groupEnd();
      return this.calculateSinglePrice(serviceProvision) + childrenPrice;
    } else {
      console.group('>>> calculateSinglePrice');
      console.log('serviceProvision.id', serviceProvision.id);
      console.log('calculateSinglePrice', this.calculateSinglePrice(serviceProvision));
      console.groupEnd();
      return this.calculateSinglePrice(serviceProvision);
    }
  }



  public calculateSinglePrice (serviceProvision: IServiceProvision): number {
    let price = 0;
    let load = 0;
    switch(serviceProvision.billingMode) {
      case BILLING_MODES.BUNDLE:
        price = serviceProvision.unitPrice;
        break;
      case BILLING_MODES.HOUR:
      case BILLING_MODES.UNIT:
        load = serviceProvision.tasks.reduce((accumulator, task) => {
          return task.load ? accumulator + task.load : accumulator;
        }, 0);
        price = serviceProvision.unitPrice * load;
        break;
      default:
        break;
    }

    return price;
  }

  public updateServiceProvision({event, serviceProvision}) {
    event.stopPropagation();
    serviceProvision.selected = !serviceProvision.selected;

    // update children
    if (serviceProvision.serviceProvisions && serviceProvision.serviceProvisions.length) {
      serviceProvision.serviceProvisions.forEach(spChild => {
        spChild.selected = serviceProvision.selected;
      });
    }
    this.stateSvc.updateServiceProvision(this.catalogueId, serviceProvision);
  }
}
