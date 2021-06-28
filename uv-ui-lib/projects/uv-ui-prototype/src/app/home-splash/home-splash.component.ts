import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'prototype-uv-ui-home-splash',
  templateUrl: './home-splash.component.html',
  styleUrls: ['./home-splash.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSplashComponent implements OnInit{

    constructor(private headerService: HeaderService){}

    public ngOnInit(): void {
        this.headerService.setTitle('Dashboard');
        this.headerService.setAppIcon('apps-quad');
    }
}
