import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DragDropService } from '../../services/drag-drop.service';
import { slideInOutRightSidebarAnimation } from '../../shared/animations';

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

  public folderTreeOpen = true;
  public viewObjectsOpen = true;

  public folders = [
    {
      name: '',
      open: false,
      items: [
        {
          type: 'item',
          name: 'Item 6'
        },
        {
          type: 'item',
          name: 'Item 7'
        },
      ]
    },
    {
      name: '',
      open: false,
      items: ['']
    },
    {
      name: '',
      open: false,
      items: ['']
    }
  ]

  items = [
    {
      type: 'item',
      name: 'Item 1'
    },
    {
      type: 'item',
      name: 'Item 2'
    },
    {
      type: 'item',
      name: 'Item 3'
    }
  ];

  constructor (private dragDropService: DragDropService) {}

  public onCloseClicked(state: string): void{
      this.walletSidebarClosedEvent.emit(state);
  }

  public toggleFolderTree() {
    this.folderTreeOpen = !this.folderTreeOpen;
  }

  public toggleViewObjects() {
    this.viewObjectsOpen = !this.viewObjectsOpen;
  }

  public onDrop(event: CdkDragDrop<string []>) {
    this.dragDropService.copyOnDrop(event);
  }

}
