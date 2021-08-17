import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss', '../../global-where-used.component.scss']
})
export class StartPageComponent {

    constructor(private router: Router, private route: ActivatedRoute) {}

    startWizard() {
        this.router.navigate(
            ['../form'], {relativeTo: this.route}  
        );
    }

}
