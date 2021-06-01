// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { SearchPanelComponent } from '../projects/uv-ui-lib/src/lib/search-panel/search-panel.component';

export default {
    title: 'Example/SearchPanel',
    component: SearchPanelComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<SearchPanelComponent> = (args: SearchPanelComponent) => ({
    component: SearchPanelComponent,
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    buttonText: 'new button'
};
