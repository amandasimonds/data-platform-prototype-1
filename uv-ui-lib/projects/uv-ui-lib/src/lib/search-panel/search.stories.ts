// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ICON_SET } from '../register-icon/icon-set';
import { RegisterIconModule } from '../register-icon/register-icon.module';
import { SvgButtonComponent } from '../svg-button/svg-button.component';
import { SearchPanelComponent } from './search-panel.component';

export default {
    title: 'Components/Search',
    component: SearchPanelComponent,
    decorators: [
        moduleMetadata({
          declarations: [SvgButtonComponent],
        imports: [RegisterIconModule.forRoot(ICON_SET)]
        }),
        componentWrapperDecorator((story) =>
            `
                <div uvUiLibRegisterIcon>
                    <div style="width: 600px;">
                        ${story}
                    </div>
                </div>
            `
        )
      ]
} as Meta;

const Template: Story<SearchPanelComponent> = (args: SearchPanelComponent) => ({
    component: SearchPanelComponent,
    props: args
});

export const Default = Template.bind({});
Default.args = {
    mode: 'basic'
};
