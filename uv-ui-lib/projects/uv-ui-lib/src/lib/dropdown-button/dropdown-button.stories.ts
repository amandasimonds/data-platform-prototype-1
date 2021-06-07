// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { DropdownButtonComponent } from './dropdown-button.component';

export default {
    title: 'Components/Buttons/Dropdown',
    component: DropdownButtonComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<DropdownButtonComponent> = (args: DropdownButtonComponent) => ({
    component: DropdownButtonComponent,
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    dropdownName: 'new dropdown button',
    items: [{name: 'item1'}]
};
