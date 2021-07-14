import { Directive, Inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { REGISTER_ICON_TOKEN } from './register-icon.token';

export interface RegisterIcon {
	name: Readonly<string>;
	url: Readonly<string>;
}

@Directive({
	selector: '[uvxRegisterIcon]'
})

export class RegisterIconDirective {
	constructor(
		@Inject(REGISTER_ICON_TOKEN) private readonly iconSet: ReadonlyArray<RegisterIcon>,
		private readonly matIconRegistry: MatIconRegistry,
		private readonly domSanitizer: DomSanitizer
	) {
		this.registryIcons();
	}

	private registryIcons(): void {
        const iconsUrl = 'https://dpzaq1wj21co3.cloudfront.net/icons/';
		this.iconSet.forEach(({ url, name }) => {
			this.matIconRegistry.addSvgIcon(
				name,
				this.domSanitizer.bypassSecurityTrustResourceUrl(iconsUrl + url)
			);
		});
	}
}
