import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BackdropService } from './services/backdrop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{

    @Input() public backdropActive = false;

    constructor(
        private backdropService: BackdropService,
        private ref: ChangeDetectorRef){}

    public ngOnInit(): void {
        this.backdropService.backdropState$.subscribe(state => {
            this.backdropActive = state;
            this.ref.detectChanges();
        });
    }

}
