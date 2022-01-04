import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil, tap } from 'rxjs/operators';
import { AppShellService } from '../services/app-shell.service';
import { NgOnDestroyService } from '../services/on-destroy.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {

    public currentApp = '';
    public currentService = '';

    constructor(
      private appShellService: AppShellService, 
      private destroy$: NgOnDestroyService,
      private ref: ChangeDetectorRef,
      private route: ActivatedRoute) {
    }

    public get isCreateConnector(): boolean {
      return this.currentService === 'connector-creator';
    }

    public ngOnInit(): void {
        this.appShellService.setTitle('Settings');
        this.appShellService.setHeaderIcon('settings');
        this.appShellService.setNavIcon('settings');
        this.route.queryParams.pipe(tap(
          params => {
              this.currentApp =  params['app'];
              this.currentService = params['service'];
          }
      ))
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.ref.detectChanges());
    }

    public launchDataLakeConnectorCreator() {
      
    }
}
