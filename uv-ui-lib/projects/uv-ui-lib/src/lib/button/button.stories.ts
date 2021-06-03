// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';

export default {
    title: 'Components/Buttons/Button',
    component: ButtonComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    component: ButtonComponent,
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
    type: 'btn'
};

export const login = Template.bind({});
login.args = {
    label: 'login button',
    type: 'btn-login'
};

export const chip = Template.bind({});
chip.args = {
    label: 'chip button',
    type: 'btn-chip'
};

export const blueBtn = Template.bind({});
blueBtn.args = {
    label: 'blue button',
    type: 'btn-blue'
};

export const roundBtn = Template.bind({});
roundBtn.args = {
    label: '+',
    type: 'btn-round'
};
