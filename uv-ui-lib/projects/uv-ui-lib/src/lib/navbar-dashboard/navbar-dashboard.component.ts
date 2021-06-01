import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { INav } from '../interfaces/navbar.interfaces';

@Component({
    selector: 'lib-uv-ui-navbar-dashboard',
    templateUrl: './navbar-dashboard.component.html',
    styleUrls: [ './navbar-dashboard-component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarDashboardComponent {
    @Input() public navlinks: INav[] = [];

    constructor(private router: Router) {}

    public trackByFn(_: number, {navlink}: INav): string {

        return navlink;
    }

    public navigateToRoute(navlink: string) {
        this.router.navigateByUrl(navlink);
    }
}
