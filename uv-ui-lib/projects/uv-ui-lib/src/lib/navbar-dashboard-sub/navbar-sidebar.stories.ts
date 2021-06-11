// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ImageButtonComponent } from '../image-button/image-button.component';
import { NavbarDashboardSubComponent } from './navbar-dashboard-sub.component';
import { CommonModule } from '@angular/common';

export default {
    title: 'Components/Sidebar2',
    component: NavbarDashboardSubComponent,
    decorators: [
        moduleMetadata({
          declarations: [NavbarDashboardSubComponent, ImageButtonComponent],
          imports: [CommonModule],
        })
      ]
} as Meta;

const Template: Story<NavbarDashboardSubComponent> = (args: NavbarDashboardSubComponent) => ({
    component: NavbarDashboardSubComponent,
    props: args
});

export const Default = Template.bind({});
Default.args = {
    headingTxt: 'Heading',
    subHeadingTxt: 'Subheading'
};
