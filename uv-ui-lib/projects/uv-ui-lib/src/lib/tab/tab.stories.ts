// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { TabComponent } from './tab.component';

export default {
    title: 'Components/Tab',
    component: TabComponent,
    decorators: [
        componentWrapperDecorator((story) => `<div style="width: 336px; height: 500px; background-color: white;">${story}</div>`),
      ]
} as Meta;

const Template: Story<TabComponent> = (args: TabComponent) => ({
    component: TabComponent,
    props: args
});

export const Default = Template.bind({});
Default.args = {
    svgPath: '/parts.svg#parts',
    label: 'Label'
};

export const ReorderMode = Template.bind({});
ReorderMode.args = {
    label: 'Label',
    isReorderMode: true
};
