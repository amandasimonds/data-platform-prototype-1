import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'uvx-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss'],
})
export class RangeSliderComponent {
    @Output() public valueChangedEvent = new EventEmitter<number>();
    @Input() public min = 0;
    @Input() public max = 100;
    @Input() public value = 70;
    @Input() public rangeValue = (this.value - this.min)/(this.max-this.min)*100;
    @Input() public rangeId = 'slider';
    @Input() public label = '';
    @Input() public tooltipPosition = '';
    @Input() public minLabel = '';
    @Input() public maxLabel = '';
    @Input() public sliderWidth = '';
    
    public background = 'linear-gradient(to right, var(--uv-color-gray-light-2) ' + this.value + '%, var(--uv-color-primary) ' + this.value + '%)'

    constructor(){
        this.tooltipPosition = `calc(${this.value}% - 6px)`
    }

    ngAfterViewChecked(): void {
        this.rangeValue = (this.value - this.min)/(this.max-this.min)*100;
        this.background = 'linear-gradient(to right, var(--uv-color-gray-light-2) ' + this.value + '%, var(--uv-color-primary) ' + this.value + '%)'
        this.tooltipPosition = `calc(${this.value}% - 6px)`
    }

    public valueChanged(value: number) {
        this.valueChangedEvent.emit(value);
    }
}
