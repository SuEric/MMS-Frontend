# BDMMS Frontend

Frontend for BDMMS.

Questions and comments to: [eric.garcia@bd.com]

How to Install?
--------------
1. Install [NodeJs](https://nodejs.org/en/)
2. Validate installations by running `node --version` and `npm --version`
3. At root path; run `npm install`

Running via terminal/cmd
--------------
1. At root path, run: `npm start`
2. Open [localhost:3000](http://localhost:3000) in your web browser

Running with F5 (Visual Studio)
--------------
1. Make sure you can see hidden elements on Windows Files Explorer
2. At root path, run `npm run build:dev`
3. Open `\BDMMSRepAutSolution\.vs\config\applicationhost.config` xml file
4. Change physical path from `TFS\BDMMSRepAutSolution\BDMMSRepAutWEB` to `TFS\BDMMSRepAutSolution\BDMMSRepAutWEB\dist`
5. Press F5

## File Structure
```
BDMMSRepAutWEB/
 ├──config/                        * configuration
 |   ├──helpers.js                 * helper functions for configuration files
 |   ├──spec-bundle.js             * ignore this magic that sets up Angular testing environment
 |   ├──karma.conf.js              * karma config for unit tests
 |   ├──protractor.conf.js         * protractor config for end-to-end tests
 │   ├──webpack.dev.js             * development webpack config
 │   ├──webpack.prod.js            * production webpack config
 │   └──webpack.test.js            * testing webpack config
 │
 ├──src/                           * source files that will be compiled to javascript
 |   ├──main.browser.ts            * entry file for browser environment
 │   │
 |   ├──index.html                 * Index.html: where we generate index page
 │   │
 |   ├──polyfills.ts               * polyfills file
 │   │
 │   ├──app/                       * WebApp: folder
 │   │   ├──app.component.spec.ts  * a simple test of components in app.component.ts
 │   │   ├──app.e2e.ts             * a simple end-to-end test for /
 │   │   └──app.component.ts       * a simple version of App component components
 │   │
 │   └──assets/                    * static assets are served here
 │       ├──icon/                  * list of icons from www.favicon-generator.org
 │       ├──service-worker.js      * ignore this. Web App service worker that's not complete yet
 │       ├──robots.txt             * for search engines to crawl your website
 │       └──humans.txt             * for humans to know who the developers are
 │
 │
 ├──tslint.json                    * typescript lint config
 ├──typedoc.json                   * typescript documentation generator
 ├──tsconfig.json                  * typescript config used outside webpack
 ├──tsconfig.webpack.json          * config that webpack uses for typescript
 ├──package.json                   * what npm uses to manage its dependencies
 └──webpack.config.js              * webpack main configuration file
```
