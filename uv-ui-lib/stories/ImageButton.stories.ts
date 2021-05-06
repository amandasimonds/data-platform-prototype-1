// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ImageButtonComponent } from '../projects/uv-ui-lib/src/lib/image-button/image-button.component';

export default {
    title: 'Example/ImageButtonComponent',
    component: ImageButtonComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<ImageButtonComponent> = (args: ImageButtonComponent) => ({
    component: ImageButtonComponent,
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    src: ''
};
