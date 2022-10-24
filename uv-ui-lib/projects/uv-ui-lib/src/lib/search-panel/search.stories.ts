// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { SearchPanelComponent } from './search-panel.component';

export default {
    title: 'Components/Search',
    component: SearchPanelComponent,
    decorators: [
        componentWrapperDecorator((story) =>
            `
                <div uvxRegisterIcon>
                    <div style="width: 600px;">
                        ${story}
                    </div>
                </div>
            `
        )
      ]
} as Meta;

const Template: Story<SearchPanelComponent> = (args: SearchPanelComponent) => ({
    component: SearchPanelComponent,
    props: args
});

export const Default = Template.bind({});
Default.args = {
    mode: 'component'
};
