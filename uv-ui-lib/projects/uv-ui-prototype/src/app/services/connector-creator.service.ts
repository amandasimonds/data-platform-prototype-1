import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConnectorCreatorFormValue } from '../settings/connector-creator/connector-creator-form.model';
import { connectorCreatorSteps } from '../settings/connector-creator/connector-creator-steps';

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
