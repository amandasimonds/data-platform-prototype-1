import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { RegisterIcon, RegisterIconDirective } from './register-icon.directive';
import { REGISTER_ICON_TOKEN } from './register-icon.token';

@NgModule({
	declarations: [ RegisterIconDirective ],
	imports: [
		CommonModule,
		MatIconModule,
		HttpClientModule
	],
	exports: [ RegisterIconDirective, MatIconModule ]
})

export class RegisterIconModule {
	public static forRoot(iconSet: ReadonlyArray<RegisterIcon>): ModuleWithProviders<RegisterIconModule> {
		return {
			ngModule: RegisterIconModule,
			providers: [
				{
					provide: REGISTER_ICON_TOKEN,
					useValue: iconSet
				},
				MatIconRegistry
			]
		};
	}
}
