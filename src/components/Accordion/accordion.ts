import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AccordionItem} from './AccordionItem/accordion-item';

@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class Accordion implements AfterContentInit {
  @ContentChildren(AccordionItem) accordionItems: QueryList<AccordionItem>;
  @Input() private uid: string = 'uid';
  constructor(
    private translateSvc: TranslateService,
  ) {
  }

  public ngAfterContentInit(){

    if (this.accordionItems) {
      this.accordionItems.forEach((el, index) => {
        el.uid = `${this.uid}-${index}`;
        el.isOpened = false;
        el.toggle.subscribe(({type, uid}) => {
          el.isOpened = type === 'open' && uid === el.uid;
        });
      });
    }
  }
}
