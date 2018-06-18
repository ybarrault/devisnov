import {Component, Input, OnInit} from '@angular/core';
import {IClient} from '../../models/IProfile';
import {ContextService} from '../../services/context.service';

@Component({
  selector: 'sales-lead',
  templateUrl: 'sales-lead.html'
})
export class SalesLead implements OnInit {
  @Input() client: IClient;
  public domainOptions: {value: string, label: string}[] = [];
  private readOnly: boolean = true;
  private search: string = '';

  constructor(private contextSvc: ContextService) {
  }

  public ngOnInit(){
    // console.info('>>> SalesLead init');
    this.contextSvc.getDomains().subscribe(
      domains => {
        this.domainOptions = domains;
      }
    );
  }

  public toggleMode() {
    this.readOnly = !this.readOnly;
  }

  public searchSalesLead() {
    console.log('>>> searchSalesLead', this.search);
  }

  public saveClient() {
    console.log('>>> saveClient', this.client);
    this.readOnly = true;
  }
}
