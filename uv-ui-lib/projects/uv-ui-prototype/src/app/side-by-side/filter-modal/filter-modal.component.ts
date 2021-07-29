import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sbs-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss', '../side-by-side.component.scss']
})
export class FilterModalComponent implements OnInit {

    public filterKeywords = [
        'Author', 
        'Topics', 
        'Business unit', 
        'Installation',
        'Integrity critical',
        'Technology',
        'Discipline',
        'Category',
        'Severity',
        'Document type'
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
