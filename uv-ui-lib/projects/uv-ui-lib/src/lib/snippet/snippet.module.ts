import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnippetComponent } from './snippet.component';

@NgModule({
    declarations: [ SnippetComponent ],
    imports: [
        CommonModule
    ],
    exports: [ SnippetComponent ]
})
export class SnippetModule {
}
