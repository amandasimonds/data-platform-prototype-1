import { Component, Input } from '@angular/core';

@Component({
  selector: 'uvx-folder-tree-icon',
  templateUrl: './folder-tree-icon.component.html',
  styleUrls: ['./folder-tree-icon.component.scss']
})
export class FolderTreeIconComponent {

  @Input() public open = false;

}
