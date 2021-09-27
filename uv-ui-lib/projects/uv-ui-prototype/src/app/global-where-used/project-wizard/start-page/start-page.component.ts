import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StepsService } from '../../../services/steps.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss', '../../global-where-used.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartPageComponent {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private stepsService: StepsService) {}

    public closeWizard() {
        this.stepsService.resetWizard();
        this.router.navigate(['/main/gwu/landing']);
    }

    public startWizard() {
        this.router.navigate(
            ['../form'], {relativeTo: this.route}
        );
    }

}
