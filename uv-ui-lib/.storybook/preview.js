import { setCompodocJson } from "@storybook/addon-docs/angular";
import '!style-loader!css-loader!sass-loader!./../projects/uv-ui-lib/src/lib/scss/_styles.scss';
import '!style-loader!css-loader!sass-loader!./styles.scss';
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: 'white',
      },
      {
        name: 'gray',
        value: 'var(--uv-background-color)',
      },
      {
        name: 'dark',
        value: 'var(--uv-background-color)',
      },
    ],
  },
  options: {
    storySort: {
      order: [
          'Intro', 
          'Theme', 
          'Components', [
              'ActionBar', 
              'Buttons', [
                  'Button'
                ], 
                'Card', 
                'Checkbox', 
                'Header', 
                'Navbar', 
                'Search', 
                'Side Panel', 
                'Tab'
            ]
        ],
    },
  },
}
