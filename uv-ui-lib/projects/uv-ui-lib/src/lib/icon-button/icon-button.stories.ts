import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ICON_SET } from '../register-icon/icon-set';
import { RegisterIconModule } from '../register-icon/register-icon.module';
import { IconButtonComponent } from './icon-button.component';

export default {
    title: 'Components/Buttons/Icon Button',
    component: IconButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [IconButtonComponent],
            imports: [RegisterIconModule.forRoot(ICON_SET)]
          }),
        componentWrapperDecorator((story) => `<div uvxRegisterIcon>${story}</div>`)
    ]
} as Meta;

const Template: Story<IconButtonComponent> = (args: IconButtonComponent) => ({
    component: IconButtonComponent,
    props: args
});

export const Default = Template.bind({});
Default.args = {
    icon: 'profile',
    color: 'blue'
};
