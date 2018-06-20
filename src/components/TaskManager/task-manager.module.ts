import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import {NestedTask} from '../NestedTask/nested-task';
import {TaskManager} from './task-manager';

@NgModule({
  declarations: [TaskManager, NestedTask],
  imports: [
    IonicPageModule.forChild(TaskManager),
    TranslateModule.forChild(),
  ],
  exports: [TaskManager, NestedTask],
  entryComponents: [TaskManager],
})
export class TaskManagerModule {}
