import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { ProfileViewerService } from '../../services/profile-viewer.service';

@Component({
  selector: 'app-profile-viewer-container',
  templateUrl: './profile-viewer-container.component.html',
  styleUrls: ['./profile-viewer-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileViewerContainerComponent implements OnInit {

    @Input() public columnCount = 2;

    constructor(
        private profileViewerService: ProfileViewerService, 
        private ref: ChangeDetectorRef,
        private destroy$ : NgOnDestroyService) {}

    ngOnInit(): void {
        this.profileViewerService.columnCount
        .pipe(takeUntil(this.destroy$))
            .subscribe(count => {
                this.columnCount = count;
                this.ref.detectChanges();
            });
    }

}
