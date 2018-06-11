import { Type } from '@angular/core';

export interface IAccordionItemContentComponent {
  data: any;
  resizeContainer: () => void;
}

export class AccordionItemContent {
  constructor(public component: Type<any>, public data: any) {}
}
