// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { SvgButtonComponent } from '../svg-button/svg-button.component';
import { SearchPanelComponent } from './search-panel.component';

export default {
    title: 'Components/Search',
    component: SearchPanelComponent,
    decorators: [
        moduleMetadata({
          declarations: [SvgButtonComponent],
        }),
        componentWrapperDecorator((story) => 
            `
                <div style="width: 600px;">
                    ${story}
                </div>
            `
        ),
      ],
} as Meta;

const Template: Story<SearchPanelComponent> = (args: SearchPanelComponent) => ({
    component: SearchPanelComponent,
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    type: 'basic'
};
