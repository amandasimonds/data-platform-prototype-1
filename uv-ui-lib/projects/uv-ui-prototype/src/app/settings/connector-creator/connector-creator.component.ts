import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ConnectorCreatorFormValue, ConnectorCreatorFormValueStep } from './connector-creator-form.model';
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
          section.steps.map((step: ConnectorCreatorFormValueStep) => {
            if (step.name === el.nativeElement.id) {
              step.yPos = el.nativeElement.offsetTop
            } 
          })
        })
      })
  }

  public enterFormInputSelection(event: Event, step: ConnectorCreatorFormValueStep, section: ConnectorCreatorFormValue) {
    const target = event.target as HTMLTextAreaElement;
    target.value.length > 2 ? step.complete = true : step.complete = false;
    this.checkIfSectionComplete(section);
  }

  public selectFormDropdownOption(step: ConnectorCreatorFormValueStep, option: string, section: ConnectorCreatorFormValue) {
    step.selection = option;
    step.complete = true;
    this.checkIfSectionComplete(section);
  }

  public checkIfSectionComplete(section: ConnectorCreatorFormValue) {
    const result = section.steps.every(step => {
        return step.complete
    })
    result ? section.complete = true : section.complete = false;
  }

  constructor(
    private elRef:ElementRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.setYPos();
  }

}
