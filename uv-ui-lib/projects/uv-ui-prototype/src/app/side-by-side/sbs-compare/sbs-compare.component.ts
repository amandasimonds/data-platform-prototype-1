import { Component, OnInit } from '@angular/core';
import { IOptionsMenuItem } from 'projects/uv-ui-lib/src/lib/options-menu/options-menu-item.interface';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-sbs-compare',
  templateUrl: './sbs-compare.component.html',
  styleUrls: ['./sbs-compare.component.scss']
})
export class SbsCompareComponent implements OnInit {

  public linkMenuVisible = false;
  public optionMenuItems: IOptionsMenuItem[] = [
    {
      title: 'Copy',
      icon: 'link',
    },
    {
      title: 'Copy',
      icon: 'edit',
    },
    {
      title: 'Copy',
      icon: 'delete',
    },
    {
      title: 'Copy',
      icon: 'profile',
    }
  ]

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  toggleLinkMenu() {
    console.log('toggleLinkMenu', this.linkMenuVisible);
    this.linkMenuVisible = !this.linkMenuVisible
  }

  openProfile() {
    console.log('open profile');
    this.profileService.setProfileSlideOutState('visible');
  }

}
