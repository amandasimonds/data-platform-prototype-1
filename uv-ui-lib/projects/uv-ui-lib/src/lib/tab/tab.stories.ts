import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { TabComponent } from './tab.component';

export default {
    title: 'Components/Tab',
    component: TabComponent,
    decorators: [
        componentWrapperDecorator((story) =>
            `
                <div uvxRegisterIcon>
                    <div style="width: 336px; height: 500px; background-color: white;">
                        ${story}
                    </div>
                </div>
            `
        )
      ]
} as Meta;

const Template: Story<TabComponent> = (args: TabComponent) => ({
    component: TabComponent,
    props: args
});

export const Default = Template.bind({});
Default.args = {
    icon: 'parts',
    label: 'Label'
};

export const ReorderMode = Template.bind({});
ReorderMode.args = {
    label: 'Label',
    isReorderMode: true
};
