import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { ProfileViewerService } from '../../services/profile-viewer.service';

@Component({
  selector: 'app-profile-viewer',
  templateUrl: './profile-viewer.component.html',
  styleUrls: ['./profile-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProfileViewerComponent implements OnInit {

    @Input() public columnCount = 0;

    items = [
        {
            title: 'Taxonomy',
            breadcrumbs: ['Lorem ipsum dolor sit amet consectetur adipiscing', 'Brazed Aluminum', 'Heat parameters'],
            details: '',
            tags: ['']
        },
        {
            title: 'Parent Text',
            breadcrumbs: [''],
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
            tags: ['']
        },
        {
            title: 'Key Phrases',
            breadcrumbs: [''],
            details: '',
            tags: ['Lorem ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more']
        },
        {
            title: 'Parameters',
            breadcrumbs: [''],
            details: '',
            tags: ['Lorem ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more']
        },
        {
            title: 'Values',
            breadcrumbs: [''],
            details: '',
            tags: ['']
        }
    ]

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

            console.log(this.columnCount);
    }

}
