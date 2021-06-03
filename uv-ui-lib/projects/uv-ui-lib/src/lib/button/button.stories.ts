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

export const Basic = Template.bind({});
Basic.args = {
    label: 'Basic',
    type: 'basic'
};

export const BasicWithIcon = Template.bind({});
BasicWithIcon.args = {
    label: 'Basic With Icon',
    type: 'basic',
    svgPath: '/back-arrow.svg#back-arrow'
};

export const Flat = Template.bind({});
Flat.args = {
    label: 'Flat',
    type: 'flat'
};

export const Round = Template.bind({});
Round.args = {
    label: '+',
    type: 'round'
};
