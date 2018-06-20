import {Component, Input, OnInit} from '@angular/core';
import {ITask} from '../../models/ITask';

@Component({
  selector: 'task-manager',
  templateUrl: 'task-manager.html'
})
export class TaskManager implements OnInit {
  @Input() tasks: ITask[];
  public ngOnInit(){
    // console.info('>>> TaskManager init');
  }

}
