import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NavbarService } from './navbar-service';
import { navItems } from './navItems';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'projects/uv-ui-prototype/src/environments/environment';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar-component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

    public navlinks = navItems;
    public profileMenuOpen = false;
    @Input() public navbarIsExpanded = false;
    @Input() public isDevUser = true;
    @Input() public currentUser = '';
    @Input() public navActiveIcon = '';
    @Output() public navbarCollapsedEvent = new EventEmitter<Event>();
    @Output() public navbarExpandedEvent = new EventEmitter<Event>();
    @Output() public searchClickedEvent = new EventEmitter<Event>();

    constructor(public navbarService: NavbarService, public router: Router, private route: ActivatedRoute) {

    }

    public collapseNavbar($event: Event): void {
        this.navbarCollapsedEvent.emit($event);
        this.navbarIsExpanded = false;
    }

    public expandNavbar($event: Event): void {
        this.navbarExpandedEvent.emit($event);
        this.navbarIsExpanded = true;
    }

    public searchClicked($event: Event): void {
        this.searchClickedEvent.emit($event);
    }

    public handleNavlinkAction(navlink: any) {
        this.router.navigate([navlink.navlink], { queryParams: { app: navlink.app }, relativeTo: this.route });
    }

    public navigateHome(): void {
        this.router.navigate(['home-splash'], { queryParams: { app: 'home-splash' }, relativeTo: this.route });
    }

    public toggleProfileMenu(): void {
        this.profileMenuOpen ? this.profileMenuOpen = false : this.profileMenuOpen = true;
    }

    public logout() {
        localStorage.clear();
        window.location.href = `${environment.authConfig.authority}/v2/logout?federated`;
        this.router.navigate(['/logout']);
    }

}
