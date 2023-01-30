import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { G6Component } from './g6.component';
import { GraphTransformDataService } from '../graph-services/graph-data-transform.service';
import { InputModule } from "epd-pattern-library";
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    G6Component
  ],
  imports: [
    CommonModule,
    InputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [
    GraphTransformDataService
  ],
  exports: [
    G6Component
  ]
})
export class G6Module { }
