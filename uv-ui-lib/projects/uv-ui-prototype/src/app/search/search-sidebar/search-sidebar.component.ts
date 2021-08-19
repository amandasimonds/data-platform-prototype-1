import { Component, OnInit } from '@angular/core';
import { BackdropService } from '../../services/backdrop.service';

@Component({
    selector: 'app-search-sidebar',
    templateUrl: './search-sidebar.component.html',
    styleUrls: ['./search-sidebar.component.scss']
})
export class SearchSidebarComponent implements OnInit {

    constructor(private backdropService: BackdropService) { }

    ngOnInit(): void {
        this.backdropService.setBackdrop(true);
    }

}
