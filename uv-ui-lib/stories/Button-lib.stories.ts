// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../projects/uv-ui-lib/src/lib/button/button.component';

export default {
    title: 'Example/ButtonComponent',
    component: ButtonComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    component: ButtonComponent,
    props: args,
});

export const btn = Template.bind({});
btn.args = {
    buttonText: 'new button',
    type: 'btn'
};

export const login = Template.bind({});
login.args = {
    buttonText: 'login button',
    type: 'btn-login'
};

export const chip = Template.bind({});
chip.args = {
    buttonText: 'chip button',
    type: 'btn-chip'
};

export const blueBtn = Template.bind({});
blueBtn.args = {
    buttonText: 'blue button',
    type: 'btn-blue'
};

export const roundBtn = Template.bind({});
roundBtn.args = {
    buttonText: '+',
    type: 'btn-round'
};
