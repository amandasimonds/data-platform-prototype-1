import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipDefaultOptions, MatTooltipModule, MAT_TOOLTIP_DEFAULT_OPTIONS } from "@angular/material/tooltip";

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
    showDelay: 500,
    hideDelay: 0,
    touchendHideDelay: 0,
  };

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}
  ],
  exports: [MatTooltipModule]
})
export class TooltipModule { }
