// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { DropdownButtonComponent } from '../projects/uv-ui-lib/src/lib/dropdown-button/dropdown-button.component';

export default {
    title: 'Example/DropdownButton',
    component: DropdownButtonComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<DropdownButtonComponent> = (args: DropdownButtonComponent) => ({
    component: DropdownButtonComponent,
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    dropdownName: 'new dropdown button',
    items: [{name: 'item1'}]
};
