import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { StepsComponent } from '../../global-where-used/project-wizard/steps/steps.component';
import { ConnectorCreatorService } from '../../services/connector-creator.service';
import { connectorCreatorSteps } from './connector-creator-steps';

@Component({
  selector: 'app-connector-creator',
  templateUrl: './connector-creator.component.html',
  styleUrls: ['./connector-creator.component.scss']
})
export class ConnectorCreatorComponent implements OnInit {

  public connectorCreatorSteps = connectorCreatorSteps;

  @ViewChildren("formSection") private formSections: QueryList<ElementRef>;
  @ViewChildren("formStep") private formSteps: QueryList<ElementRef>;

  public getYPos(el: string): number {
    console.log(el, this.elRef.nativeElement.querySelector(el).offsetTop);
    return this.elRef.nativeElement.querySelector(el).offsetTop;
  }

  public setYPos() {
    const sectionElements = this.formSections;
    const stepElements = this.formSteps;
    const sections = this.connectorCreatorSteps;
    sectionElements.forEach((el) => {
      sections.map((section) => {
        if (section.name === el.nativeElement.id) {
          section.yPos = el.nativeElement.offsetTop
        } 
      })
    }) 
    stepElements.forEach((el) => {
        sections.forEach(section => {
          section.steps.map(step => {
            if (step.name === el.nativeElement.id) {
              step.yPos = el.nativeElement.offsetTop
            } 
          })
        })
      })
    console.log(this.connectorCreatorSteps);
  }

  constructor(
    private elRef:ElementRef) {
  }

  ngOnInit(): void {
    // const div = this.elRef.nativeElement.querySelector('#formStep');
    // console.log(div.offsetTop);
    // this.connectorCreatorService.setPosition(this.connectorCreatorSteps);
  }

  ngAfterViewChecked(): void {
    // this.formSections.forEach((el) => {
    //   console.log(el.nativeElement.offsetTop, el.nativeElement.id);
    // })

    // this.formSteps.forEach((el) => {
    //   console.log(el.nativeElement.offsetTop, el.nativeElement.id);
    // })
    this.setYPos();
  }

}
