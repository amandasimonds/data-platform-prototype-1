import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DragDropService } from '../../services/drag-drop.service';
import { slideInOutRightSidebarAnimation } from '../../shared/animations';
import { folders } from '../wallet-folders';
import { items } from '../wallet-items';

@Component({
  selector: 'app-wallet-full',
  templateUrl: './wallet-full.component.html',
  styleUrls: ['./wallet-full.component.scss'],
  animations: [slideInOutRightSidebarAnimation],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalletFullComponent {

  @Input() public walletSidebarState = 'hidden';
  @Output() public readonly walletSidebarClosedEvent = new EventEmitter<string>();

  public viewObjectsOpen = false;
  public folders = folders;
  public items = items;
  public folderSelected = false;
  public folderIsEditMode = false;

  constructor (private dragDropService: DragDropService) {}

  public onCloseClicked(state: string): void{
      this.walletSidebarClosedEvent.emit(state);
  }

  public toggleViewObjects() {
    this.viewObjectsOpen = !this.viewObjectsOpen;
  }

  public onDrop(event: CdkDragDrop<string []>) {
    this.dragDropService.copyOnDrop(event);
  }

  public createFolder() {
    alert("Create Folder dialogue");
  }

  public folderIsSelected(folder: any) {
    folder.selected = !folder.selected;
    folder.selected ? this.folderSelected = true : this.folderSelected = false;
  }

  public editFolder(folder: any) {
    this.folderIsEditMode = !this.folderIsEditMode;
  }

}
