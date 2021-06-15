// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ActionBarComponent } from './action-bar.component';
import { SvgButtonComponent } from '../svg-button/svg-button.component'

export default {
    title: 'Components/ActionBar',
    component: ActionBarComponent,
    decorators: [
        moduleMetadata({
            declarations: [SvgButtonComponent],
          }),
        componentWrapperDecorator((story) => `<div style="height: 68px;">${story}</div>`)
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
    rightContent: `<lib-uv-ui-svg-button class="margin-right-xs" color='blue' svgPath='icons/more-horizontal.svg#moreHorizontal'></lib-uv-ui-svg-button>
    <lib-uv-ui-svg-button color='blue' svgPath='icons/fullscreen.svg#fullScreen'></lib-uv-ui-svg-button>`
};
