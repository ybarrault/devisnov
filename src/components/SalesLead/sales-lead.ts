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
  public search: string = '';
  private readOnly: boolean = true;

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
    alert('>>> searchSalesLead');
  }

  public saveClient() {
    alert('>>> saveClient');
    this.readOnly = true;
  }
}
