import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { INavlink } from '../interfaces/navbar.interfaces';

@Component({
    selector: 'lib-uv-ui-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar-component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
    @Input() public navlinks: INavlink[] = [];

    constructor(private router: Router) {}

    public trackByFn(_: number, {navlink}: INavlink): string {

        return navlink;
    }

    public navigateToRoute(navlink: string) {
        this.router.navigateByUrl(navlink);
    }
}
