import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { TaskPage } from './task';

@NgModule({
  declarations: [TaskPage],
  imports: [
    IonicPageModule.forChild(TaskPage),
    TranslateModule.forChild(),
  ],
  entryComponents: [TaskPage],
})
export class TaskPageModule {}
