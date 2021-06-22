import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {

    constructor(private headerService: HeaderService){}

    public ngOnInit(): void {
        this.headerService.setTitle('Settings');
        this.headerService.setAppIcon('apps-settings');
    }

}
