import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppShellService } from '../services/app-shell.service';

@Component({
  selector: 'prototype-uv-ui-global-where-used',
  templateUrl: './global-where-used.component.html',
  styleUrls: ['./global-where-used.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalWhereUsedComponent implements OnInit{

    constructor(private appShellService: AppShellService){}

    public ngOnInit(): void {
        this.appShellService.setTitle('Graph');
        this.appShellService.setHeaderIcon('insights');
        this.appShellService.setNavIcon('insights');
    }
}
