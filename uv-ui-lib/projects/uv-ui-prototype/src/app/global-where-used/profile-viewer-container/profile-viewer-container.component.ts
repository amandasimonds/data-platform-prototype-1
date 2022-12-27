import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Container, EnterExitLeft, EnterExitRight, flyInOutAnimation, nextPageAnimation } from '../../shared/animations';
import { allSearchResults } from '../../search/search-results/sample-search-results/allSearchResults';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { ProfileViewerService } from '../profile-viewer.service';

@Component({
  selector: 'app-profile-viewer-container',
  templateUrl: './profile-viewer-container.component.html',
  styleUrls: ['./profile-viewer-container.component.scss'],
  animations: [flyInOutAnimation, nextPageAnimation, EnterExitLeft, Container, EnterExitRight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileViewerContainerComponent implements OnInit {

    public items = allSearchResults.slice(0, 12);
    public currentPage: Observable<number>;
    public pages: Observable<number[]>;
    public currentPageNumber: number;
    public pageAnimationState = 'back';
    public pageAnimationState2 = 'in';
    public pageSize: number = 1;
    public totalItemsCount = '';
    public currentProfileViewerPage = '';
    public pageSizeOptions = ['1', '2', '3', '4'];

    constructor(
        private profileViewerService: ProfileViewerService, 
        private ref: ChangeDetectorRef,
        private destroy$ : NgOnDestroyService
        ) {}

    ngOnInit(): void {
        this.profileViewerService.currentPage$
            .pipe(takeUntil(this.destroy$))
            .subscribe(value => 
            this.currentPageNumber = value)
    }

    public handlePageSizeSelected(pageSize: number) {
        this.pageSize = pageSize;
    }

    public paginate(value: number) {
        console.log(this.currentPageNumber < value);
        if (this.currentPageNumber < value) {
            this.pageAnimationState = 'next';
            this.pageAnimationState2 = 'back';
        } else {
            this.pageAnimationState = 'back';
            this.pageAnimationState2 = 'next';
        }
        this.profileViewerService.setCurrentPage(value);
        // this.setPageAnimationState(value);
        
    }

    public setPageAnimationState(page: number, name: string) {
        return this.currentPageNumber === page ? 'in' : 'out';
    }
}
