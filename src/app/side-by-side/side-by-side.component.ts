import { Component, OnInit } from '@angular/core';
import {compareTasksData} from "./compareTasks";

@Component({
  selector: 'app-side-by-side',
  templateUrl: './side-by-side.component.html',
  styleUrls: ['./side-by-side.component.scss']
})
export class SideBySideComponent implements OnInit {

  compareTasks = compareTasksData;
  
  constructor() { }

  ngOnInit(): void {
  }

}
