import { Directive, ElementRef, TemplateRef } from '@angular/core';

@Directive({
    selector: '[menuItem]'
})
export class MenuItemDirective {
    constructor(private el: ElementRef, public template: TemplateRef<unknown>) {
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }

}