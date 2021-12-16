import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderTreeIconComponent } from './folder-tree-icon.component';
import { UvxIconModule } from '../uvx-icon/uvx-icon.module';

@NgModule({
  declarations: [FolderTreeIconComponent],
  imports: [
    CommonModule,
    UvxIconModule
  ],
  exports: [FolderTreeIconComponent]
})
export class FolderTreeIconModule { }
