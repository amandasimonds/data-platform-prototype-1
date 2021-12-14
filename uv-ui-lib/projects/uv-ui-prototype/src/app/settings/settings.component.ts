import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppShellService } from '../services/app-shell.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {

    constructor(private appShellService: AppShellService){}

    public ngOnInit(): void {
        this.appShellService.setTitle('Settings');
        this.appShellService.setHeaderIcon('settings');
        this.appShellService.setNavIcon('settings');
    }

}
