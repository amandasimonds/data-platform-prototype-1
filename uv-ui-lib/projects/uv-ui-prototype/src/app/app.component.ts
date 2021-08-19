import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { BackdropService } from './services/backdrop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

    @Input() backdropActive = false;

    constructor(
        private backdropService: BackdropService,
        private ref: ChangeDetectorRef){}

    ngOnInit(): void {
        this.backdropService.backdropState$.subscribe(state => {
            this.backdropActive = state;
            this.ref.detectChanges();
        });
    }

}
