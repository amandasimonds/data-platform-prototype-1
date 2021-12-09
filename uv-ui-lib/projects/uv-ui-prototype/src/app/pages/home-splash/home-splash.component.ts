import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppShellService } from '../../services/app-shell.service';

@Component({
  selector: 'prototype-uv-ui-home-splash',
  templateUrl: './home-splash.component.html',
  styleUrls: ['./home-splash.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSplashComponent implements OnInit{

    constructor(private appShellService: AppShellService){}

    public ngOnInit(): void {
        this.appShellService.setTitle('Dashboard');
        this.appShellService.setHeaderIcon('dashboard');
        this.appShellService.setNavIcon('home-splash');
    }
}
