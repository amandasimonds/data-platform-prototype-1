// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { NavbarDashboardComponent } from './navbar-dashboard.component';

export default {
    title: 'Components/Navbar',
    component: NavbarDashboardComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<NavbarDashboardComponent> = (args: NavbarDashboardComponent) => ({
    component: NavbarDashboardComponent,
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    navlinks: []
};
