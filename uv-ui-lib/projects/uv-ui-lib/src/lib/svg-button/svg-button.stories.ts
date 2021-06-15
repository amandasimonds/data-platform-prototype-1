// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { SvgButtonComponent } from './svg-button.component';

export default {
    title: 'Components/Buttons/SvgButton',
    component: SvgButtonComponent
} as Meta;

const Template: Story<SvgButtonComponent> = (args: SvgButtonComponent) => ({
    component: SvgButtonComponent,
    props: args
});

export const Default = Template.bind({});
Default.args = {
    svgPath: 'icons/profile.svg#profile',
    color: 'blue'
};
