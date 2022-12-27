import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { WalletService } from '../services/wallet.service';
import { NgOnDestroyService } from '../services/on-destroy.service';
import { AppShellService } from '../services/app-shell.service';

@Component({
  selector: 'app-design-ripple',
  templateUrl: './design-ripple.component.html',
  styleUrls: ['./design-ripple.component.scss']
})
export class DesignRippleComponent implements OnInit {

  public miniWalletOpen = false;
  public walletSidebarState = 'hidden';

  constructor(
    private walletService: WalletService,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private appShellService: AppShellService,
    private router: Router,
    private destroy$: NgOnDestroyService) { }

  ngOnInit(): void {
    this.appShellService.setNavIcon('design-ripple');
    combineLatest([
      this.walletService.walletSidebarState$.pipe(tap(state => this.walletSidebarState = state))
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => { this.ref.detectChanges() });
  }

  public launchWizard(): void {
    this.router.navigate(['main/sbs/wizard'], { queryParams: { wizardMode: 'fullscreen', app: 'sbs' } });
    // this.router.navigate(['gwu/wizard'], { relativeTo: this.route, queryParams: { wizardMode: 'fullscreen', app: 'gwu' } });
  }

  public toggleWallet() {
    if (!this.miniWalletOpen) {
      setTimeout(() => {
        this.miniWalletOpen = true;
      }, 150);
    } else if (this.miniWalletOpen) {
      this.miniWalletOpen = false;
    }
  }

  public toggleWalletSidebar() {
    let state = '';
    this.miniWalletOpen = false;
    this.walletSidebarState === 'hidden' ? state = 'visible' : state = 'hidden';
    this.walletService.setWalletSidebarState(state);
  }

}
