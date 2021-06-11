## UV UI Prototype

UV UI Prototype project is a bridge between UI Design and Frontend Engineering. This resource can be used as a reference to the latest UI updates, as well as a preview for PO's and customers. The static website is served here: https://uvuiprototype.z13.web.core.windows.net.

The [uv-ui-prototype app](https://dev.azure.com/pdd-ihsmarkit/EPD/_git/uv-platform-design?version=GBmain&path=%2Fuv-ui-lib%2Fprojects%2Fuv-ui-prototype) is a project under uv-ui-lib and contains the pages of the app. 
You will see in the html templates, we are using components and SCSS styles from **uv-ui-lib library**.
**uv-ui-lib library** is found here: [/uv-ui-lib/projects/uv-ui-lib](https://dev.azure.com/pdd-ihsmarkit/EPD/_git/uv-platform-design?version=GBmain&path=%2Fuv-ui-lib%2Fprojects%2Fuv-ui-lib).

Please contact **Amanda Simonds** or **Arthi Kumar** for any questions.

---

### Getting Started

#### Prerequisites

- NPM `npm install npm@latest -g`
- Angular `npm install -g @angular/cli`

#### Install & Open the Project

1. Clone the repo `git clone https://pdd-ihsmarkit@dev.azure.com/pdd-ihsmarkit/EPD/_git/uv-platform-design`
2. Change directory to `/uv-ui-lib`
2. Install NPM packages `npm install`
3. Run the prototype project on a local server `npm run start`

#### Storybook

- In the `uv-ui-lib` directory, run `npm run storybook` for a storybook playground. Navigate to `http://localhost:6006/`. The app will automatically reload if you change any of the source files.

#### Auth Guard Info

- uv-ui-prototype is protected by SSO authentication, powered by auth-guard.service.ts and auth.service.ts