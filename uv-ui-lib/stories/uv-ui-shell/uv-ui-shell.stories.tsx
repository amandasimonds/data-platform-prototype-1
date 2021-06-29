import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import UvUiShellComponent from './uv-ui-shell.component';
import { ICON_SET, NavbarComponent } from 'projects/uv-ui-lib/src/public-api';
import { HeaderComponent, RegisterIconModule } from 'projects/uv-ui-lib/src/public-api';

export default {
    title: 'Layouts/UI Shell',
    component: UvUiShellComponent,
    decorators: [
            moduleMetadata({
            declarations: [HeaderComponent, NavbarComponent],
            imports: [CommonModule, RegisterIconModule.forRoot(ICON_SET), RouterModule.forRoot([])],
            providers: [{provide: APP_BASE_HREF, useValue: '/'}]
        }),
        componentWrapperDecorator((story) => `<div uvUiLibRegisterIcon><div style="height: 68px; width: 100px;">${story}</div></div>`)
    ],
} as Meta;

const Template: Story<UvUiShellComponent> = (args: UvUiShellComponent) => ({
  component: UvUiShellComponent,
  props: args,
});

export const UvUiShell = Template.bind({});
UvUiShell.args = {
    navlinks: [
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-quad-gradient.svg',
            navlink: '/'
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-gwu-gradient.svg',
            navlink: '/'
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-sbs-gradient.svg',
            navlink: '/'
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-design-ripple-gradient.svg',
            navlink: '/'
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-ingestion-gradient.svg',
            navlink: '/'
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-settings-gradient.svg',
            navlink: '/'
        }
    ]
};
