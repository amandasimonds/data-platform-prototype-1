// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { SvgButtonComponent } from '../projects/uv-ui-lib/src/lib/svg-button/svg-button.component';

export default {
    title: 'Example/SvgButton',
    component: SvgButtonComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<SvgButtonComponent> = (args: SvgButtonComponent) => ({
    component: SvgButtonComponent,
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    svgPath: '/profile.svg#profile',
    color: 'blue'
};
