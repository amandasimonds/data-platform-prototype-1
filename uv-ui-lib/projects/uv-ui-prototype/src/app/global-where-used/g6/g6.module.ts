import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { G6Component } from './g6.component';
import { GraphTransformDataService } from '../graph-services/graph-data-transform.service';
import { G6RegisterNodeService} from '../graph-services/register-node.service';
import { GraphEventService} from '../graph-services/graph-event.service';
import { InputModule } from "epd-pattern-library";
import { MatButtonModule } from '@angular/material/button';
import { G6TreeNode } from './node';
import { GraphLayoutService } from '../graph-services/graph-layout.service';

@NgModule({
  declarations: [
    G6Component,
    G6TreeNode
  ],
  imports: [
    CommonModule,
    InputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [
    GraphTransformDataService,
    G6RegisterNodeService,
    GraphEventService,
    GraphLayoutService
  ],
  exports: [
    G6Component
  ]
})
export class G6Module { }
