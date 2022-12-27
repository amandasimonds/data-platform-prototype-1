import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectableEntityComponent } from './selectable-entity.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [SelectableEntityComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    DragDropModule
  ],
  exports: [SelectableEntityComponent]
})
export class SelectableEntityModule { }
