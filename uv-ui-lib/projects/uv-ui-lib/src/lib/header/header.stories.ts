// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ICON_SET } from '../register-icon/icon-set';
import { RegisterIconModule } from '../register-icon/register-icon.module';
import { HeaderComponent } from './header.component';

export default {
    title: 'Components/Header',
    component: HeaderComponent,
    decorators: [
        moduleMetadata({
            imports: [RegisterIconModule.forRoot(ICON_SET)]
        }),
        componentWrapperDecorator((story) => `<div uvUiLibRegisterIcon><div style="height: 68px;">${story}</div></div>`)
    ]
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
    component: HeaderComponent,
    props: args
});

export const Default = Template.bind({});
Default.args = {
    headerText: 'Header',
    icon: 'apps-quad'
};
