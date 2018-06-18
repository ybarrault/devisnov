import {
  Component,
  ContentChild,
  EventEmitter, forwardRef,
  Input,
  OnInit, Output,
  ViewChild
} from '@angular/core';
import {Accordion} from '../accordion';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'accordion-item',
  templateUrl: 'accordion-item.html',
  // animations: [
  //   trigger(
  //     'openClose',
  //     [
  //       state('collapsed, void', style({
  //         height: '0px',
  //         color: 'maroon',
  //         borderColor: 'maroon',
  //         transition: 'height .5s',
  //       })),
  //       state('expanded', style({
  //         height: '*',
  //         borderColor: 'green',
  //         color: 'green',
  //         transition: 'height .5s',
  //       })),
  //       transition(
  //         'collapsed <=> expanded', [animate(500, style({height: '250px'})), animate(500)])
  //     ])
  // ]
})
export class AccordionItem implements OnInit {
  @Input() uid: string;
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  @Input() _isOpened: boolean = false;
  @Input() public set isOpened(val: boolean) {
    this._isOpened = val;
    // this.cdRef.detectChanges();
  }
  public get isOpened() { return this._isOpened; }

  @ViewChild('header') header;
  @ViewChild('content') content;
  @ContentChild(forwardRef(() => Accordion)) contentChild: Accordion;

  constructor() {
  }

  public ngOnInit(){
    // console.log('>>> context', this);
    // console.log('>>> header', this.header);
    // console.log('>>> content', this.content);
    // this.setContentStyle(this.isOpened);
  }

  public test(){
    console.log('test');
  }

  public toggleContent(){
    if (this.isOpened) {
      this.toggle.emit({uid: this.uid, type: 'close'})
    } else {
      this.toggle.emit({uid: this.uid, type: 'open'})
    }
  }

  // public getMaxHeight(){
  //   const maxHeight = Math.ceil(this.content.nativeElement.getBoundingClientRect().height);
  //   return maxHeight;
  // }

  // public setContentStyle(isOpened: boolean) {
  //   const maxHeight = Math.ceil(this.content.nativeElement.getBoundingClientRect().height);
  //   // TODO: refine duration calculation (use some bezier func ?)
  //   const duration = 0.5;
  //
  //   const currentMaxHeight = isOpened ? `${maxHeight}px`: '0px';
  //   const currentTransition = `max-height ${duration}s`;
  //   console.group('>>> setContentStyle', this.uid);
  //   console.log('>>> currentMaxHeight', currentMaxHeight);
  //
  //   this.style = { maxHeight: currentMaxHeight, transition: currentTransition };
  //   console.log('>>> style', this.style);
  //   console.groupEnd();
  // }
}
