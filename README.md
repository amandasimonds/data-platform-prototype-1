### UV UI Design Prototype

#### Introduction

This project serves as a sandbox environment for the Design Team, primarily for experiencing UI/UX designs through software instead of static mockups. It acts as another layer of mockups that the design team can use and build upon, and as an important tool for Usability Testing with our customers.

Please note that implemented designs will sometimes correspond to existing designs for Beta, but will also correspond to post-beta designs that are still under review and testing. Therefore, Engineering teams should continue to reference approved InVision links for front end development.

Also, be informed that this prototype does not correspond to [Pattern Library II for UV](https://pattern-library-ii.dev.uvp.epd.pdd.ihs.com/). Because the prototype is used mainly within the Design Team, it has its own component library that is not meant to be used by Engineering. Engineering teams should refer to Pattern Library II for front end development as well.

Not all designs are included in UV-UI-Prototype - but only features we choose based on need for concept actualization, refinement, and showing general user flow through the app.

[uv-ui-prototype](https://dev.azure.com/pdd-ihsmarkit/EPD/_git/uv-platform-design?version=GBmain&path=%2Fuv-ui-lib%2Fprojects%2Fuv-ui-prototype) is a project under `/uv-ui-lib` and contains the front end build. 
The front end build uses components and styles from **uv-ui-lib library**.
**uv-ui-lib library** is the other project under `/uv-ui-lib`: [/uv-ui-lib/projects/uv-ui-lib](https://dev.azure.com/pdd-ihsmarkit/EPD/_git/uv-platform-design?version=GBmain&path=%2Fuv-ui-lib%2Fprojects%2Fuv-ui-lib).

#### Usability Testing

Usability testing is done internally, by people within the team, and externally, by customers. More information about Usability Testing and data pulled from the testing sessions can be found on the [Usability Testing Team Channel](https://teams.microsoft.com/l/channel/19%3a35f703d64211457484aeb92945b64945%40thread.skype/Usability%2520Testing?groupId=d015c447-e99a-4512-8b4e-fd5e4dcebc72&tenantId=c1156c2f-a3bb-4fc4-ac07-3eab96da8d10).

#### Deployment

This project is deployed on Azure. The internal link is protected by OIDC Auth library within the USG-UV-DEV security group. The external link is secured under Auth0 and made accessible to external users through a rotating user/pw.

Internal users - https://uvuiprototype.z13.web.core.windows.net 
External users - https://uvuiusabilitytest.z13.web.core.windows.net

#### Getting Started

##### Prerequisites

- NPM - `npm install npm@latest -g`
- Angular - `npm install -g @angular/cli`

##### Install & Open the Project

1. Clone the repo - `git clone https://pdd-ihsmarkit@dev.azure.com/pdd-ihsmarkit/EPD/_git/uv-platform-design`
2. Change directory to `/uv-ui-lib`
2. Install NPM packages - `npm install`
3. Run the prototype project on a local server - `npm run start`

##### Storybook

In `/uv-ui-lib`, run `npm run storybook` for a storybook playground. Navigate to `http://localhost:6006/`. The app will automatically reload if you change any of the source files.