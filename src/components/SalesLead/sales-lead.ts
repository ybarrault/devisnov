import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {IAccordionItemContentComponent} from '../Accordion/AccordionItem/models/accordion-item-content';
import {IClient} from '../../models/IProfile';
import {ContextService} from '../../services/context.service';

@Component({
  selector: 'sales-lead',
  templateUrl: 'sales-lead.html'
})
export class SalesLead implements IAccordionItemContentComponent, OnInit, AfterViewChecked {
  @Input() data: {client: IClient};
  @Input() resizeContainer: () => void;
  private readOnly: boolean = true;
  private search: string = '';
  private domainOptions: {value: string, label: string}[] = [];

  constructor(private contextSvc: ContextService) {
  }

  public ngOnInit(){
    console.info('>>> BusinessAdherent init');
    this.contextSvc.getDomains().subscribe(
      domains => {
        this.domainOptions = domains;
      }
    );
  }

  public ngAfterViewChecked() {
    this.resizeContainer();
  }

  public toggleMode() {
    this.readOnly = !this.readOnly;
  }

  public searchSalesLead() {
    console.log('>>> searchSalesLead', this.search);
  }

  public saveClient() {
    console.log('>>> saveClient', this.data.client);
  }
}
