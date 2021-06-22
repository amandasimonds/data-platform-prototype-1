import { Meta, Story } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { RegisterIconModule } from '../register-icon/register-icon.module';
import { ICON_SET } from '../register-icon/icon-set';
import { ButtonComponent } from './button.component';

export default {
    title: 'Components/Buttons/Button',
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
            imports: [RegisterIconModule.forRoot(ICON_SET)]
        }),
        componentWrapperDecorator((story) => `<div uvUiLibRegisterIcon><div style="height: 68px;">${story}</div></div>`)
    ]
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    component: ButtonComponent,
    props: args
});

export const Basic = Template.bind({});
Basic.args = {
    label: 'Basic Button',
    mode: 'basic'
};

Basic.parameters = {
    docs: {
      source: {
        mode: 'auto'
      }
    }
  };

export const BasicWithIcon = Template.bind({});
BasicWithIcon.args = {
    label: 'Basic With Icon',
    mode: 'basic',
    icon: 'back'
};

export const Flat = Template.bind({});
Flat.args = {
    label: 'Primary Button',
    mode: 'primary'
};

export const Round = Template.bind({});
Round.args = {
    label: '+',
    mode: 'round'
};
