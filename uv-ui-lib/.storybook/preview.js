
import { setCompodocJson } from "@storybook/addon-docs/angular";
import '!style-loader!css-loader!sass-loader!./../projects/uv-ui-lib/src/lib/scss/_styles.scss';
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Intro', 'Theme', 'Components', ['ActionBar', 'Buttons', ['Button'], 'Card', 'Checkbox', 'Header', 'Navbar', 'Search', '']],
    },
  },
}
