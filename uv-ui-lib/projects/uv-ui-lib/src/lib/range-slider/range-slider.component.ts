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
    @Input() public value: number = 10;
    @Input() public rangeValue: number = 10;
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
    @Input() public valueMarkers = false;
    @Input() public tooltip = false;

    constructor(){
        this.tooltipPosition = `calc(${this.value}% - 6px)`
        // this.tooltipPosition = `calc(((${this.value} / ${this.max}) * 100)% - 6px)`
        this.rangeValue = (this.value - this.min)/(this.max-this.min)*100;
        this.background = 'linear-gradient(to right, var(--uv-color-gray-light-2) ' + this.rangeValue + '%, var(--uv-color-primary) ' + this.rangeValue + '%)'
    }

    ngOnInit(): void {
        this.background = 'linear-gradient(to right, var(--uv-color-gray-light-2) ' + this.rangeValue + '%, var(--uv-color-primary) ' + this.rangeValue + '%)'
        this.tooltipPosition = `calc(${this.rangeValue}% - 6px)`
    }

    ngAfterViewChecked(): void {
        this.rangeValue = (this.value - this.min)/(this.max-this.min)*100;
        this.tooltipPosition = `calc(${this.rangeValue}% - 6px)`
        this.background = 'linear-gradient(to right, var(--uv-color-gray-light-2) ' + this.rangeValue + '%, var(--uv-color-primary) ' + this.rangeValue + '%)'
    }

    public get getValueMarkers(): number[] {
        const array = Array.from({length: (this.max + 1)}, (x, i) => i);
        array.shift();
        return array
    }

    public valueChanged(value: number) {
        this.valueChangedEvent.emit(value);
    }
}
