// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ICON_SET } from '../register-icon/icon-set';
import { RegisterIconModule } from '../register-icon/register-icon.module';
import { UvxIconModule } from '../uvx-icon/uvx-icon.module';
import { CheckboxComponent } from './checkbox.component';

export default {
    title: 'Components/Checkbox',
    component: CheckboxComponent,
    decorators: [
        moduleMetadata({
            imports: [UvxIconModule, RegisterIconModule.forRoot(ICON_SET)]
        }),
        componentWrapperDecorator((story) => `<div uvxRegisterIcon>${story}</div>`)
    ]
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
    component: CheckboxComponent,
    props: args
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
