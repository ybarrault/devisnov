import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: 'tile.html'
})
export class Tile {
  @Input() title: string;
  @Input() description?: string;
  @Input() color: string;
  @Input() isActive: boolean = false;
  @Input() id: string;
  @Output() select: EventEmitter<any> = new EventEmitter<any>();

  public onClick($event) {
    this.isActive = !this.isActive;
    this.select.emit({event: $event, thematicId: this.id, context: this});
  }

}
