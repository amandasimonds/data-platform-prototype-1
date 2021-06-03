// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { SearchPanelComponent } from './search-panel.component';

export default {
    title: 'Components/Search',
    component: SearchPanelComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<SearchPanelComponent> = (args: SearchPanelComponent) => ({
    component: SearchPanelComponent,
    props: args,
});
