import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FileFolderStructureService } from '../../services/file-folder.service';

@Component({
  selector: 'app-create-folder',
  templateUrl: './create-folder.component.html',
  styleUrls: ['./create-folder.component.scss']
})
export class CreateFolderComponent {

  @Input() public newFolderName = '';
  @Output() public closeModalEvent = new EventEmitter<Event>();
  @ViewChild("createFolderInput") createFolderInput: ElementRef;

  constructor(
    private fileFolderService: FileFolderStructureService,
  ) { }

  ngAfterViewInit() {
    this.createFolderInput.nativeElement.focus();
  }

  public createFolder(event: Event) {
    event.stopPropagation();
    this.fileFolderService.createFolder(this.newFolderName);
    this.closeModalEvent.emit(event);
  }

  public closeDialogue(event: Event) {
    event.stopPropagation();
    this.closeModalEvent.emit(event);
  }

}
