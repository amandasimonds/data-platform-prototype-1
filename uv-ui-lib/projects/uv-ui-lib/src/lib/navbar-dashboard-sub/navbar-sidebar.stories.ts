// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NavbarDashboardSubComponent } from './navbar-dashboard-sub.component';
import { ImageButtonComponent } from '../image-button/image-button.component';
import { CommonModule } from '@angular/common';

export default {
    title: 'Components/Sidebar',
    component: NavbarDashboardSubComponent,
    decorators: [
        moduleMetadata({
          //👇 Imports both components to allow component composition with Storybook
          declarations: [NavbarDashboardSubComponent, ImageButtonComponent],
          imports: [CommonModule],
        })
      ],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<NavbarDashboardSubComponent> = (args: NavbarDashboardSubComponent) => ({
    component: NavbarDashboardSubComponent,
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    headingTxt: 'new heading',
    subHeadingTxt: 'new subheading text'
};
