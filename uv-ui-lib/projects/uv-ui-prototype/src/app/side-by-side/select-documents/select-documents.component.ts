import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { SidebySideService } from '../../services/side-by-side.service';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-select-documents',
  templateUrl: './select-documents.component.html',
  styleUrls: ['./select-documents.component.scss']
})
export class SelectDocumentsComponent implements OnInit {

  @Input() public sourceDocumentSelected = false;

  constructor(
    private sbsService: SidebySideService,
    private destroy$: NgOnDestroyService,
    private ref: ChangeDetectorRef,
    private walletService: WalletService) { }

  ngOnInit(): void {
    this.walletService.clearSelectedEntities();
    this.sbsService.sourceDocumentWasSelected$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.sourceDocumentSelected = value;
        this.ref.detectChanges();
        console.log(this.sourceDocumentSelected);
      })
    
  }

}
