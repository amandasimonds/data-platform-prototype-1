import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { connectorCreatorSteps } from '../settings/connector-creator/connector-creator-steps';

export interface ConnectorCreatorFormValue {
    sectionTitle: string;
    name: string;
    required: boolean;
    complete: boolean;
    yPos: string;
    steps: 
        {
            title: string;
            yPos: string;
            name: string;
            required: boolean;
            complete: boolean;
            type: string
        }[]
}

@Injectable({
  providedIn: 'root'
})
export class ConnectorCreatorService {

  public steps$: BehaviorSubject<ConnectorCreatorFormValue[]> = new BehaviorSubject<ConnectorCreatorFormValue[]>(connectorCreatorSteps);
  public currentStep$: BehaviorSubject<ConnectorCreatorFormValue> = new BehaviorSubject<ConnectorCreatorFormValue>(null);

  constructor(private el: ElementRef) {
  }
  
  public setCurrentStep(step: ConnectorCreatorFormValue): void {
    this.currentStep$.next(step);
  }

  public getCurrentStep(): Observable<ConnectorCreatorFormValue> {
      return this.currentStep$.asObservable();
  }

  public getSteps(): Observable<ConnectorCreatorFormValue[]> {
      return this.steps$.asObservable();
  }

  public setPosition(item: ConnectorCreatorFormValue, el: ElementRef) {
    item.yPos = el.nativeElement.offsetTop;
    console.log(this.steps$.value);
  }

 
}
