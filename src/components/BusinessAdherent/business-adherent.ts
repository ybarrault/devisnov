import {Component, Input, OnInit} from '@angular/core';
import {IAccordionItemContentComponent} from '../Accordion/AccordionItem/models/accordion-item-content';

@Component({
  selector: 'business-adherent',
  templateUrl: 'business-adherent.html'
})
export class BusinessAdherent implements IAccordionItemContentComponent, OnInit {
  @Input() data: any;
  @Input() resizeContainer: () => void;

  public ngOnInit(){
    console.info('>>> BusinessAdherent init');
  }
}
