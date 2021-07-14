// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { DropdownComponent } from './dropdown.component';

export default {
    title: 'Components/Dropdown',
    component: DropdownComponent
} as Meta;

const Template: Story<DropdownComponent> = (args: DropdownComponent) => ({
    component: DropdownComponent,
    props: args
});

export const Default = Template.bind({});
Default.args = {
    dropdownName: 'Dropdown',
    items: [{name: 'item1'}]
};
