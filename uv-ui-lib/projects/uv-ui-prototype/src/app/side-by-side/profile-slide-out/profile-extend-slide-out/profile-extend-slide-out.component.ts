import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChangeRequestItem } from '../../../models/change-request.model';
import { emptyEntity } from '../../../models/entity.model';
import { ChangeRequestService } from '../../../services/change-request/change-request.service';
import { NgOnDestroyService } from '../../../services/on-destroy.service';

@Component({
  selector: 'app-profile-extend-slide-out',
  templateUrl: './profile-extend-slide-out.component.html',
  styleUrls: ['./profile-extend-slide-out.component.scss']
})
export class ProfileExtendSlideOutComponent {
  @ViewChild('form') form: NgForm;
  public description = '';
  @Input() isVisible = false;
  @Output() extendedSlideOutCloseEvent = new EventEmitter<Event>();

  public closeExtendedSlideOut(event: Event) {
    this.extendedSlideOutCloseEvent.emit(event);
  }

  constructor(private changeRequestService: ChangeRequestService, private ref: ChangeDetectorRef, private destroy$: NgOnDestroyService) { }

  public onSubmit() {
    console.log(this.form);
    this.changeRequestService.createChangeRequest(this.form);
    this.form.reset();
  }

  onCancel() {
    this.form.reset();
  }
}
