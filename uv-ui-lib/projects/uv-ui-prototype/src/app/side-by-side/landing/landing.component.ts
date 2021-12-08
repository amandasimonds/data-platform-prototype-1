import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { SidebySideService } from '../../services/side-by-side.service';
import { UserService } from '../../auth/user.service';

@Component({
  selector: 'uv-prototype-sbs-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBySideLandingComponent implements OnInit {

    @Input() public sourceDocumentSelected = false;
    public currentUser = {id: 1, new: false, name: ''};
    public chevronUser = 'user_chevron@test.com';
    public cumminsUser = 'user_cummins@test.com';

    constructor(
        private sbsService: SidebySideService, 
        private destroy$: NgOnDestroyService,
        private userService: UserService) {
    }

    public get isDevUser(): boolean {
        return this.currentUser.name === this.chevronUser || this.currentUser.name === this.cumminsUser ? false : true;
    }

    public ngOnInit(): void {
        this.sbsService.sourceDocumentSelected
        .pipe(takeUntil(this.destroy$))
        .subscribe((sourceDocumentSelected: boolean) => {
                this.sourceDocumentSelected = sourceDocumentSelected;
        });
        this.userService.getCurrentUser()
        .pipe(takeUntil(this.destroy$))
        .subscribe(value => this.currentUser = value);
    }
}
