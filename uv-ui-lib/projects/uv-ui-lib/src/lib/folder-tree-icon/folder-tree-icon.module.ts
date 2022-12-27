import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderTreeIconComponent } from './folder-tree-icon.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [FolderTreeIconComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [FolderTreeIconComponent]
})
export class FolderTreeIconModule { }
