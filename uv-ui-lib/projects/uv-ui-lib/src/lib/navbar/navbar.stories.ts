// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, Story, componentWrapperDecorator } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export default {
    title: 'Components/Navbar',
    component: NavbarComponent,
    decorators: [
        moduleMetadata({
          declarations: [NavbarComponent],
          imports: [CommonModule, RouterModule.forRoot([])],
          providers: [{provide: APP_BASE_HREF, useValue: '/'}]
        }),
        componentWrapperDecorator((story) => `<div style="width: 64px;">${story}</div>`),
      ],
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
    component: NavbarComponent,
    props: args,
});

export const Default = Template.bind({});
Default.args = {
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
        },
        // {
        //     icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-search-gradient.svg',
        //     navlink: '/',
        //
        // }
    ]
};
