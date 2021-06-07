// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { NavbarDashboardComponent } from './navbar-dashboard.component';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export default {
    title: 'Components/Navbar',
    component: NavbarDashboardComponent,
    decorators: [
        moduleMetadata({
          //👇 Imports both components to allow component composition with Storybook
          declarations: [NavbarDashboardComponent],
          imports: [CommonModule, RouterModule.forRoot([])],
          providers: [{provide: APP_BASE_HREF, useValue: '/'}]
        })
      ],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<NavbarDashboardComponent> = (args: NavbarDashboardComponent) => ({
    component: NavbarDashboardComponent,
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    navlinks: [
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-quad-gradient.svg',
            navlink: '/',
            classes: []
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-gwu-gradient.svg',
            navlink: '/',
            classes: []
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-sbs-gradient.svg',
            navlink: '/',
            classes: []
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-design-ripple-gradient.svg',
            navlink: '/',
            classes: []
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-ingestion-gradient.svg',
            navlink: '/',
            classes: []
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-settings-gradient.svg',
            navlink: '/',
            classes: []
        },
        // {
        //     icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-search-gradient.svg',
        //     navlink: '/',
        //     classes: []
        // }
    ]
};
