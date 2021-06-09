// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AppSideBarComponent } from './app-side-bar.component';

export default {
    title: 'Components/SideBar',
    component: AppSideBarComponent,
    decorators: [
        componentWrapperDecorator((story) => `<div style="width: 336px;">${story}</div>`),
      ],
      template: `
      <lib-uv-ui-app-side-bar>
      <div top>
               Top content
            </div>
            <div bottom>
            Bottom content
            </div>
      </lib-uv-ui-app-side-bar>`
} as Meta;

const Template: Story<AppSideBarComponent> = (args: AppSideBarComponent) => ({
    component: AppSideBarComponent,
    props: args,
});

export const Default = Template.bind({});
Default.args = {
};
