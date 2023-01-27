import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { G6Component } from './g6.component';
import {GraphTransformDataService} from '../graph-services/graph-data-transform.service';

@NgModule({
  declarations: [
    G6Component
  ],
  imports: [
    CommonModule
  ],
  providers: [
    GraphTransformDataService
  ],
  exports: [
    G6Component
  ]
})
export class G6Module { }
