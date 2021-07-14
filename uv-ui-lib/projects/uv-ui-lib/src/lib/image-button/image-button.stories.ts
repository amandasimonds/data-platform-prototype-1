// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { ImageButtonComponent } from './image-button.component';

export default {
    title: 'Components/Buttons/Image Button',
    component: ImageButtonComponent,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as Meta;

const Template: Story<ImageButtonComponent> = (args: ImageButtonComponent) => ({
    component: ImageButtonComponent,
    props: args
});

export const Default = Template.bind({});
Default.args = {
    src: 'http://dpzaq1wj21co3.cloudfront.net/uv-logo.svg'
};
