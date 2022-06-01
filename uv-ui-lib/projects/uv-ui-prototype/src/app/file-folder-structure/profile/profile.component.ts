import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { emptyEntity, IEntity } from '../../models/entity.model';
import { DataService } from '../../services/data.service';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { launchServices } from '../../shared/launch-services';
import { metaDataPlaceholder } from '../../shared/metaDataPlaceholder';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() public entity: IEntity;
  public metaDataItems = metaDataPlaceholder;
  public launchServices = launchServices;

  constructor(
    private ref: ChangeDetectorRef,
    private destroy$: NgOnDestroyService,
    private router: Router, 
    private dataService: DataService) {
    // this.dataService.entityBeingViewed ? this.entity = this.dataService.entityBeingViewed : this.entity = emptyEntity;
  }

  ngOnInit(): void {
    console.log(this.entity);
    if (this.entity === emptyEntity) {
      this.router.navigate(['/main/file-folder-structure'], { queryParamsHandling: 'merge' });
    }
    combineLatest([
      this.dataService.entityBeingViewed.pipe(tap(entity => this.entity = entity)),
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.ref.detectChanges());
  }

}
