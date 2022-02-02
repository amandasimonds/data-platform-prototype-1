import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectableEntityComponent } from './selectable-entity.component';
import { CheckboxModule } from 'projects/uv-ui-lib/src/public-api';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [SelectableEntityComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    DragDropModule
  ],
  exports: [SelectableEntityComponent]
})
export class SelectableEntityModule { }
