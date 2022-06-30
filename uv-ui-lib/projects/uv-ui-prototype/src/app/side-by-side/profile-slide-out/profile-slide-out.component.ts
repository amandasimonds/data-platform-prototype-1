import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { ChangeRequestItem } from '../../models/change-request.model';
import { ChangeRequestService } from '../../services/change-request/change-request.service';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { slideInOutAnimation } from '../../shared/animations';

@Component({
  selector: 'app-profile-slide-out',
  templateUrl: './profile-slide-out.component.html',
  styleUrls: ['./profile-slide-out.component.scss'],
  animations: [slideInOutAnimation],
})

export class ProfileSlideOutComponent {

  @Input() public profileSlideOutState = 'hidden';
  @Output() public readonly profileCloseEvent = new EventEmitter<Event>();
  public extendedSlideOutOpen = false;
  public activeTab = '';

  public profileHeaderNav = [
    {
      icon: 'compare'
    },
    {
      icon: 'global_where_used'
    },
    {
      icon: 'design'
    },
    {
      icon: 'link'
    },
    {
      icon: 'more_horisontal'
    }
  ]

  public profileTabs = [
    {
      link: 'metadata',
      title: 'Meta Data'
    },
    {
      link: 'history',
      title: 'History'
    },
    {
      link: 'changeRequests',
      title: 'Change Requests'
    },
  ]

  public changeRequestList: ChangeRequestItem[] = [];

  constructor(
    private changeRequestService: ChangeRequestService,
    private route: ActivatedRoute,
    private router: Router,
    private ref: ChangeDetectorRef,
    private destroy$: NgOnDestroyService) { }

  ngOnInit(): void {
    this.router.navigate([], { queryParams: { tab: 'changeRequests' } })
    combineLatest([
      this.changeRequestService.changeRequestsList$.pipe(tap(requests => this.changeRequestList = requests)),
      this.route.queryParams.pipe(tap(params => this.activeTab = params['tab']))
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.ref.detectChanges());
  }

  public getItemPriorityColor(item: ChangeRequestItem): string {
    switch (item.priority) {
      case 'low': return '#A7E7B3';
        break;
      case 'medium': return '#FFECB2';
        break;
      case 'high': return '#FE8A8A';
        break;
      default: return 'A7E7B3';
    }
  }

  public onCloseClicked(event: Event): void {
    this.profileCloseEvent.emit(event);
    this.closeExtendedSlideOut();
  }

  public closeExtendedSlideOut() {
    this.extendedSlideOutOpen = false;
  }

  public openExtendedSlideOut(activeTab: string) {
    // this.router.navigate([], { queryParams: { tab: activeTab } })
    this.extendedSlideOutOpen = true;
  }

}
