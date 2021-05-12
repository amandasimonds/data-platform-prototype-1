// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { HeaderComponent } from '../projects/uv-ui-lib/src/lib/header/header.component';

export default {
    title: 'Example/Header',
    component: HeaderComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
    component: HeaderComponent,
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    headerText: 'new header'
};
