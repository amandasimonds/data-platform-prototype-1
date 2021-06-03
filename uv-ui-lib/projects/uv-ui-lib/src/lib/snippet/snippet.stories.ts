// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { SnippetComponent } from './snippet.component';
//uv-ui-lib\projects\uv-ui-lib\src\lib\snippet\snippet.component.ts
export default {
    title: 'Components/Snippet',
    component: SnippetComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<SnippetComponent> = (args: SnippetComponent) => ({
    component: SnippetComponent,
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    snippets: [{
        icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/circle-gray.svg',
        snippetHeading: 'Snippet Heading',
        snippetTxt: 'Snippet will go here on three lines. And is clickable'
    }]
};
