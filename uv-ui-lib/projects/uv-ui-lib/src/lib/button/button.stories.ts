// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';

export default {
    title: 'Components/Buttons/Button',
    component: ButtonComponent
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    component: ButtonComponent,
    props: args
});

export const Basic = Template.bind({});
Basic.args = {
    label: 'Basic',
    mode: 'basic',
    color: 'primary'
};

Basic.parameters = {
    docs: {
      source: {
        mode: 'auto'
      },
    },
  };

export const BasicWithIcon = Template.bind({});
BasicWithIcon.args = {
    label: 'Basic With Icon',
    mode: 'basic',
    svgPath: 'icons/back-arrow.svg#back-arrow',
    color: 'primary'
};

export const Flat = Template.bind({});
Flat.args = {
    label: 'Flat',
    mode: 'flat',
    color: 'primary'
};

export const Round = Template.bind({});
Round.args = {
    label: '+',
    mode: 'round'
};
