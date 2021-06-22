// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../button/button.component';
import { ICON_SET } from '../register-icon/icon-set';
import { RegisterIconModule } from '../register-icon/register-icon.module';
import { SvgButtonComponent } from '../svg-button/svg-button.component';
import { TabComponent } from '../tab/tab.component';
import { AppSideBarComponent } from './app-side-bar.component';

export default {
    title: 'Components/SideBar',
    component: AppSideBarComponent,
    decorators: [
        moduleMetadata({
            declarations: [TabComponent, SvgButtonComponent, ButtonComponent],
            imports: [RegisterIconModule.forRoot(ICON_SET)]
          }),
        componentWrapperDecorator((story) => `<div uvUiLibRegisterIcon><div style="width: 336px; height: 100vh;">${story}</div></div>`)
      ]
} as Meta;

const Template: Story<AppSideBarComponent> = (args: AppSideBarComponent) => ({
    component: AppSideBarComponent,
    props: args,
    template: `
        <lib-uv-ui-app-side-bar>
            <div top>
                ${args.topContent}
            </div>
            <div bottom>
                ${args.bottomContent}
            </div>
        </lib-uv-ui-app-side-bar>`
});

export const Default = Template.bind({});
Default.args = {
    mode: 'menu',
    topContent: 'Title',
    bottomContent:
        `
            <lib-uv-ui-tab label="Tab 1" 
            icon="parts">
            </lib-uv-ui-tab>
            <lib-uv-ui-tab label="Tab 2" 
            icon="parts">
            </lib-uv-ui-tab>
        `
};

export const Scroll = Template.bind({});
Scroll.args = {
    mode: 'scroll',
    topContent: 'Title',
    bottomContent:
        `
        <ul>
            <li>bottom content</li>
            <li>bottom content</li>
            <li>bottom content</li>
            <li>bottom content</li>
            <li>bottom content</li>
            <li>bottom content</li>
            <li>bottom content</li>
            <li>bottom content</li>
            <li>bottom content</li>
            <li>bottom content</li>
            <li>bottom content</li>
            <li>bottom content</li>
            <li>bottom content</li>
            <li>bottom content</li>
            <li>bottom content</li>
            <li>bottom content</li>
        </ul>
        `
};
