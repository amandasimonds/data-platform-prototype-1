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

    varNext = 0;                             
    stepButton = 'Next';    
    resetText = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";                               
    content = this.resetText; 

    //content
    contentHolder = {
        first: "This is the filler content for the first: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        second: "This is the filler content for the second: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        third: "This is the filler content for the third: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    }

    public uv_next() {            
        this.varNext++;
            if(this.varNext == 1){
                this.content = this.contentHolder.first;
                this.highlightFeature('header');
            }else if(this.varNext == 2){
                this.content = this.contentHolder.second;
                this.highlightFeature('sbs');
                this.highlightFeature('search-options');
            }else if(this.varNext == 3){                        
                this.content = this.contentHolder.third;
                this.stepButton = "Got it!"                 
            }else if(this.varNext == 4){
                this.varNext = 0;
                this.content = this.resetText;
                this.toggleUvLight();
            }else{ }            
    }

    public uv_one() {       
        this.varNext = 1;
        this.content = this.contentHolder.first;
        this.stepButton = "Next"
    }

    public uv_two() {       
        this.varNext = 2;
        this.content = this.contentHolder.second;
        this.stepButton = "Next"
    }

    public uv_three() {       
        this.varNext = 3;
        this.content = this.contentHolder.third;
        this.stepButton = "Got it!"   
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
