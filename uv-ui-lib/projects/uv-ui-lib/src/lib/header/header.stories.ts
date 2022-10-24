// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { HeaderComponent } from './header.component';

export default {
    title: 'Components/Header',
    component: HeaderComponent,
    decorators: [
        componentWrapperDecorator((story) => `<div uvxRegisterIcon><div style="height: 68px;">${story}</div></div>`)
    ]
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
    component: HeaderComponent,
    props: args
});

export const Default = Template.bind({});
Default.args = {
    headerText: 'Header',
    icon: 'dashboard'
};
