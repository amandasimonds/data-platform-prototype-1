import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts/core';

@NgModule({
  declarations: [GraphComponent],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') })
  ],
  exports: [GraphComponent]
})
export class GraphModule { }
