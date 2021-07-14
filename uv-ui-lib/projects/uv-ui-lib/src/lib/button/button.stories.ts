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
        componentWrapperDecorator((story) => `<div uvxRegisterIcon><div style="height: 68px;">${story}</div></div>`)
    ]
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    component: ButtonComponent,
    props: args
});

export const Text = Template.bind({});
Text.args = {
    label: 'Text Button',
    mode: 'text'
};

Text.parameters = {
    docs: {
      source: {
        mode: 'auto'
      }
    }
  };

export const TextWithIcon = Template.bind({});
TextWithIcon.args = {
    label: 'Text With Icon',
    mode: 'text',
    icon: 'back'
};

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary Button',
    mode: 'primary'
};
