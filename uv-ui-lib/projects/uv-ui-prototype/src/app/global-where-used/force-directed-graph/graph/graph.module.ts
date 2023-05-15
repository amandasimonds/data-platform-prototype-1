import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { UvxIconModule } from 'projects/uv-ui-lib/src/public-api';

@NgModule({
  declarations: [GraphComponent],
  imports: [
    CommonModule,
    UvxIconModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') })
  ],
  exports: [GraphComponent]
})
export class GraphModule { }
