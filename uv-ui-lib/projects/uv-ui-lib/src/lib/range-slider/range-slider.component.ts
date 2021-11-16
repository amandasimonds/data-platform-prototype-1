import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'uvx-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss'],
})
export class RangeSliderComponent implements OnInit{
    @Output() public valueChangedEvent = new EventEmitter<number>();
    @Input() public min = 0;
    @Input() public max = 100;
    @Input() public value: number;
    @Input() public rangeValue: number;
    @Input() public rangeId = 'slider';
    @Input() public label = '';
    @Input() public tooltipPosition = '';
    @Input() public minLabel = '';
    @Input() public maxLabel = '';
    @Input() public sliderWidth = '';
    @Input() public background = '';
    @Input() public numberInput = false;
    @Input() public datalistEnabled = false;
    @Input() public datalistId = '';

    constructor(){
        this.tooltipPosition = `calc(${this.value}% - 6px)`
        this.rangeValue = (this.value - this.min)/(this.max-this.min)*100;
    }

    ngOnInit(): void {
        this.background = 'linear-gradient(to right, var(--uv-color-gray-light-2) ' + this.value + '%, var(--uv-color-primary) ' + this.value + '%)'
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
