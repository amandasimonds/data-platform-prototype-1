import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskSnippetComponent } from './task-snippet.component';

@NgModule({
    declarations: [ TaskSnippetComponent ],
    imports: [
        CommonModule
    ],
    exports: [ TaskSnippetComponent ]
})
export class TaskSnippetModule {
}
