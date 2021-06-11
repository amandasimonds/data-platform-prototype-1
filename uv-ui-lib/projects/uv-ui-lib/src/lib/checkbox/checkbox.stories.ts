// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { CheckboxComponent } from './checkbox.component';

export default {
    title: 'Components/Checkbox',
    component: CheckboxComponent,
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
    component: CheckboxComponent,
    props: args,
});

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    disabled: false,
    isChecked: false
};

export const Checked = Template.bind({});
Checked.args = {
    label: 'Label',
    disabled: false,
    isChecked: true
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Label',
    disabled: true,
    isChecked: false
};