import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core'
import { takeUntil } from 'rxjs/operators'
import { NgOnDestroyService } from '../../services/on-destroy.service'
import { SidebySideService } from '../../services/side-by-side.service'
import { WalletService } from '../../services/wallet.service'

@Component({
    selector: 'uv-prototype-sbs-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBySideLandingComponent implements OnInit {
    @Input() public sourceDocumentSelected = false
    public currentUser = { id: 1, new: false, name: '' }

    constructor(
        private sbsService: SidebySideService,
        private destroy$: NgOnDestroyService,
        private walletService: WalletService
    ) {}

    public get isDevUser(): boolean {
        return true
    }

    public ngOnInit(): void {
        this.walletService.clearSelectedEntities()
        this.sbsService.sourceDocumentWasSelected$
            .pipe(takeUntil(this.destroy$))
            .subscribe((value) => (this.sourceDocumentSelected = value))
    }
}

