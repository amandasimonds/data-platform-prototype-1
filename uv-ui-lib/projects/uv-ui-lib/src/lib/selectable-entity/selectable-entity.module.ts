import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectableEntityComponent } from './selectable-entity.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CheckboxModule } from '../checkbox/checkbox.module';


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
