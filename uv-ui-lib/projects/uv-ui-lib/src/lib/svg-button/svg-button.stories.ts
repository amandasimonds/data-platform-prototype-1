import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ICON_SET } from '../register-icon/icon-set';
import { RegisterIconModule } from '../register-icon/register-icon.module';
import { SvgButtonComponent } from './svg-button.component';

export default {
    title: 'Components/Buttons/SvgButton',
    component: SvgButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [SvgButtonComponent],
            imports: [RegisterIconModule.forRoot(ICON_SET)]
          }),
        componentWrapperDecorator((story) => `<div uvUiLibRegisterIcon>${story}</div>`)
    ]
} as Meta;

const Template: Story<SvgButtonComponent> = (args: SvgButtonComponent) => ({
    component: SvgButtonComponent,
    props: args
});

export const Default = Template.bind({});
Default.args = {
    icon: 'profile',
    color: 'blue'
};
