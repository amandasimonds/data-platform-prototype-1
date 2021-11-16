import { ChangeDetectorRef, Component, EventEmitter, Output, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NgOnDestroyService } from '../services/on-destroy.service';
import { UvLightService } from '../services/uv-light.service';

@Component({
  selector: 'app-uv-light',
  templateUrl: './uv-light.component.html',
  styleUrls: ['./uv-light.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UvLightComponent implements OnInit {

    public varNext = 0;
    public stepButton = 'Next';
    public resetText = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.';
    public currentHighlight = '';
    public contentHolder = {
        first: 'This is the filler content for the first: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
        second: 'This is the filler content for the second: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
        third: 'This is the filler content for the third: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
    };
    public content = this.resetText;

    @Output() public readonly uvLightToggle = new EventEmitter<boolean>(true);

    constructor(
        private uvlService: UvLightService,
        private ref: ChangeDetectorRef,
        private destroy$: NgOnDestroyService) { }

    ngOnInit(): void {
        this.uvlService.getCurrentHighlight().pipe(takeUntil(this.destroy$))
            .subscribe(highlight => {
                this.currentHighlight = highlight;
                this.ref.detectChanges();
            });
    }

    public highlightFeature(value: string): void {
        this.uvlService.setCurrentHighlight(value);
    }

    public toggleUvLight(): void {
        this.uvLightToggle.emit();
    }

    public nextStep(): void {
        this.varNext++;
        switch(this.varNext) {
            case 1:
                this.content = this.contentHolder.first;
                this.highlightFeature('header');
                break;
            case 2:
                this.content = this.contentHolder.second;
                this.highlightFeature('sbs');
                this.highlightFeature('search-options');
                break;
            case 3:
                this.content = this.contentHolder.third;
                this.stepButton = 'Got it!';
                break;
            case 4:
                this.varNext = 0;
                this.content = this.resetText;
                this.toggleUvLight();
                break;
        }
    }

    public stepOne(): void {
        this.varNext = 1;
        this.content = this.contentHolder.first;
        this.stepButton = 'Next';
    }

    public stepTwo(): void {
        this.varNext = 2;
        this.content = this.contentHolder.second;
        this.stepButton = 'Next';
    }

    public stepThree(): void {
        this.varNext = 3;
        this.content = this.contentHolder.third;
        this.stepButton = 'Got it!';
    }
}
