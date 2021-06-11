import { Meta, Story } from '@storybook/angular/types-6-0';
import { SnippetComponent } from './snippet.component';
export default {
    title: 'Components/Snippet',
    component: SnippetComponent
} as Meta;

const Template: Story<SnippetComponent> = (args: SnippetComponent) => ({
    component: SnippetComponent,
    props: args
});

export const Default = Template.bind({});
Default.args = {
    snippets: [
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/circle-gray.svg',
            snippetHeading: 'Snippet Heading',
            snippetTxt: 'Snippet will go here on three lines. And is clickable'
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/circle-gray.svg',
            snippetHeading: 'Snippet Heading',
            snippetTxt: 'Snippet will go here on three lines. And is clickable'
        }
    ]
};
