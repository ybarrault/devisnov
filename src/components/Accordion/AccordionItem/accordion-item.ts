import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'accordion-item',
  templateUrl: './accordion-item.html',
  animations: [
    trigger('toggle', [
      state('expand', style({
        height: '*',
        transform: 'scale(1)'
      })),
      state('collapse',   style({
        height: '0px',
        transform: 'scale(1.1)'
      })),
      transition('collapse => expand', animate('500ms ease-in')),
      transition('expand => collapse', animate('500ms ease-out'))
    ]),
  ]
})
export class AccordionItemComponent implements OnInit {
  private _isActive: boolean = false;
  private _uid: string;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  @ContentChild('header') header: ElementRef;
  @ContentChild('content') content: ElementRef;
  constructor() {}

  get uid(): string {
    return this._uid;
  }
  set uid(uid: string) {
    this._uid = uid;
  }
  get isActive(): boolean {
    return this._isActive;
  }
  set isActive(isActive: boolean) {
    this._isActive = isActive;
  }

  ngOnInit() {

  }

  onClick() {
    this.toggle.emit({uid: this.uid});
  }
}
