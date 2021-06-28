// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { RegisterIconModule } from '../register-icon/register-icon.module';
import { ICON_SET } from '../register-icon/icon-set';
import { SvgButtonComponent } from '../svg-button/svg-button.component';
import { ActionBarComponent } from './action-bar.component';

export default {
    title: 'Components/ActionBar',
    component: ActionBarComponent,
    decorators: [
        moduleMetadata({
            declarations: [SvgButtonComponent],
            imports: [RegisterIconModule.forRoot(ICON_SET)]
          }),
        componentWrapperDecorator((story) => `<div uvUiLibRegisterIcon><div style="height: 68px;">${story}</div></div>`)
    ]
} as Meta;

const Template: Story<ActionBarComponent> = (args: ActionBarComponent) => ({
    component: ActionBarComponent,
    props: args,
    template: `
    <lib-uv-ui-action-bar>
        <div left>
            ${args.leftContent}
        </div>
        <div right>
        ${args.rightContent}
        </div>
    </lib-uv-ui-action-bar>`
});

export const Default = Template.bind({});
Default.args = {
    leftContent: 'Left Content',
    rightContent: `<lib-uv-ui-svg-button class="margin-right-xs" color='blue' icon='more_dots'></lib-uv-ui-svg-button>
    <lib-uv-ui-svg-button color='blue' icon='fullscreen'></lib-uv-ui-svg-button>`
};
