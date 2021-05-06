// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../projects/uv-ui-lib/src/lib/button/button.component';

export default {
    title: 'Example/ButtonComponent',
    component: ButtonComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    component: ButtonComponent,
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    buttonText: 'new button'
};
