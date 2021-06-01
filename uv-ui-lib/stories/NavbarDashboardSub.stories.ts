// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NavbarDashboardSubComponent } from '../projects/uv-ui-lib/src/lib/navbar-dashboard-sub/navbar-dashboard-sub.component';
import { ImageButtonComponent } from '../projects/uv-ui-lib/src/lib/image-button/image-button.component';
import { CommonModule } from '@angular/common';

export default {
    title: 'Example/NavbarDashboardSub',
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

export const Primary = Template.bind({});
Primary.args = {
    headingTxt: 'new heading',
    subHeadingTxt: 'new subheading text'
};
