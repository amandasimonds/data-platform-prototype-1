import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBarModule, CardModule, ButtonModule, DropdownModule } from '../../../../../uv-ui-lib/src/public-api';
import { TasksComponent } from './tasks.component';

@NgModule({
    declarations: [
        TasksComponent
    ],
    imports: [
        CommonModule,
        ActionBarModule,
        CardModule,
        ButtonModule,
        DropdownModule
    ],
    exports: [ TasksComponent ]
})
export class TasksModule { }
