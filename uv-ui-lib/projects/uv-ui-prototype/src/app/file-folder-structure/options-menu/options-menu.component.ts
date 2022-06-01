import { Component, Input } from '@angular/core';
import { IFileFolder } from '../../models/file-folder.model';
import { optionsMenu } from './options-menu';

@Component({
  selector: 'app-options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.scss']
})
export class OptionsMenuComponent {

  @Input() public fileFolder: IFileFolder;
  public optionMenuItems = optionsMenu;

}
