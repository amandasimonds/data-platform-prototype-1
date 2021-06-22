import { InjectionToken } from '@angular/core';
import { RegisterIcon } from './register-icon.directive';

export const REGISTER_ICON_TOKEN = new InjectionToken<ReadonlyArray<RegisterIcon>>('Register icon set token');
