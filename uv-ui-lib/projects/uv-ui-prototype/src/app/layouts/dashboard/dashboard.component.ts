import { Component, OnInit } from '@angular/core';
import { AppShellService } from '../../services/app-shell.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private appShellService: AppShellService){}

  public placeholderDropdowns = [
    {
      title: 'Placeholder'
    },
    {
      title: 'Placeholder'
    },
    {
      title: 'Placeholder'
    },
    {
      title: 'Placeholder'
    }
  ]

    public ngOnInit(): void {
        this.appShellService.setNavIcon('home-splash');
    }

}
