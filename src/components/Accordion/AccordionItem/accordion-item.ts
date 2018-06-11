import {Component, ComponentFactoryResolver, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {AccordionItemDirective} from './accordion-item.directive';
import {AccordionItemContent, IAccordionItemContentComponent} from './models/accordion-item-content';

@Component({
  selector: 'accordion-item',
  templateUrl: 'accordion-item.html'
})
export class AccordionItem implements OnInit, OnChanges {
  @Input() itemContent: AccordionItemContent;
  @ViewChild(AccordionItemDirective) accordionItemHost: AccordionItemDirective;
  @ViewChild('header') header;
  @ViewChild('content') content;
  public style: {[x:string] : string} = {};
  private isOpened: boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public ngOnInit() {
    this.loadComponent();
  }

  public ngOnChanges() {
    this.loadComponent();
  }

  public loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.itemContent.component);

    const viewContainerRef = this.accordionItemHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<IAccordionItemContentComponent>componentRef.instance).data = this.itemContent.data;
    (<IAccordionItemContentComponent>componentRef.instance).resizeContainer = () => { this.setContentStyle(); };
  }

  public toggle(){
    this.isOpened = !this.isOpened;
    this.setContentStyle();
  }

  public setContentStyle() {
    console.log('>>> setContentStyle');
    const maxHeight = this.content.nativeElement.getBoundingClientRect().height;
    // TODO: refine duration calculation (use some bezier func ?)
    const duration = 0.5 + (maxHeight / 100) * 0.15;

    const currentMaxHeight = this.isOpened ? `${maxHeight}px`: '0px';
    const currentTransition = `max-height ${duration}s`;

    this.style = { maxHeight: currentMaxHeight, transition: currentTransition };
  }
}
