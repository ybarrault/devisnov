import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[accordion-item-host]',
})
export class AccordionItemDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
