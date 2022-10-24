import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { IconButtonComponent } from './icon-button.component';

export default {
    title: 'Components/Buttons/Icon Button',
    component: IconButtonComponent,
    decorators: [
        componentWrapperDecorator((story) => `<div uvxRegisterIcon>${story}</div>`)
    ]
} as Meta;

const Template: Story<IconButtonComponent> = (args: IconButtonComponent) => ({
    component: IconButtonComponent,
    props: args
});

export const Default = Template.bind({});
Default.args = {
    icon: 'profile',
    color: 'primary'
};
