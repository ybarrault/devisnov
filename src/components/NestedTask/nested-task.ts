import {Component, Input, OnInit} from '@angular/core';
import {ITask} from '../../models/ITask';

@Component({
  selector: 'nested-task',
  templateUrl: 'nested-task.html'
})
export class NestedTask implements OnInit {
  @Input() task: ITask;
  public ngOnInit(){
    // console.info('>>> NestedTask init');
  }

}
