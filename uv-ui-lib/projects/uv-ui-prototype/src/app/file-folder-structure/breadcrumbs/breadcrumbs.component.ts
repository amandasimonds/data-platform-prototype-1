import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-folder-file-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  public openedFolder = '';

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    // this.breadcrumbService.set('@Profile', 'Profile');
    this.breadcrumbService.set('@MainPage', 'Main Page');
    this.breadcrumbService.set('@Folder', this.openedFolder);
  }

}
