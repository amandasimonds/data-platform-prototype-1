import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NgOnDestroyService } from '../services/on-destroy.service';
import { UvLightService } from '../services/uv-light.service';

@Component({
  selector: 'app-uv-light',
  templateUrl: './uv-light.component.html',
  styleUrls: ['./uv-light.component.scss']
})
export class UvLightComponent implements OnInit {

    @Output() uvLightToggle = new EventEmitter<boolean>(true)
    currentHighlight = '';

    constructor(
        private uvlService: UvLightService, 
        private ref: ChangeDetectorRef, 
        private destroy$: NgOnDestroyService) { }

    highlightFeature(value: string) {
        this.uvlService.setCurrentHighlight(value)
        //TODO: navigate to url
    }

    toggleUvLight() {
        this.uvLightToggle.emit()
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.uvlService.currentHighlight$.pipe(takeUntil(this.destroy$))
            .subscribe(highlight => {
                this.currentHighlight = highlight;
                this.ref.detectChanges();
            })    
    }
}
