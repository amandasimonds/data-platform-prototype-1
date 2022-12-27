import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { DynamicBarModule, PaginatorModule, BackdropModule, RegisterIconModule, ICON_SET } from 'epd-pattern-library';
import { MatIconModule } from '@angular/material/icon';
import { WizardContainerModule } from '../../project-wizard/wizard-container/wizard-container.module';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'xng-breadcrumb';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    RegisterIconModule.forRoot(ICON_SET),
    CommonModule,
    RouterModule,
    DynamicBarModule,
    PaginatorModule,
    MatIconModule,
    WizardContainerModule,
    BackdropModule,
    BreadcrumbModule
  ],
  exports: [LandingComponent]
})
export class LandingModule { }
