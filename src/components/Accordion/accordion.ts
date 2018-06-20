import {Component, ContentChildren, OnInit, AfterViewInit, Input} from '@angular/core';
import {AccordionItemComponent} from "./AccordionItem/accordion-item";

@Component({
  selector: 'accordion',
  templateUrl: './accordion.html',
})
export class AccordionComponent implements OnInit, AfterViewInit {
  @Input() uid:string;
  @ContentChildren(AccordionItemComponent) items: AccordionItemComponent[];
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.group('>>> uids:');
    this.items.forEach((item, index) => {
      item.uid=`${this.uid}-${index}`;
      // console.log('item.uid', item.uid);
      item.toggle.subscribe(({uid}) => {
        this.toggleOne(uid);
      });
    });
    // console.groupEnd();
  }

  toggleOne(uid: string) {
    this.items.forEach((item) => {
      if (item.uid === uid) {
        item.isActive = !item.isActive;
      } else {
        item.isActive = false;
      }
    });
  }
}
