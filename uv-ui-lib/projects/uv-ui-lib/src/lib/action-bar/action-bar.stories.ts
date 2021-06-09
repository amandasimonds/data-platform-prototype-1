// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ActionBarComponent } from './action-bar.component';

export default {
    title: 'Components/ActionBar',
    component: ActionBarComponent,
} as Meta;

const Template: Story<ActionBarComponent> = (args: ActionBarComponent) => ({
    component: ActionBarComponent,
    props: args,
});

export const Default = Template.bind({});
Default.args = {
};
