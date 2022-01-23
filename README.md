## ios.cfw.guide
A complete iOS modding guide, from stock to jailbroken.

https://ios.cfw.guide

## Running the site locally

This requires the following installed to your system:
- [Node.js v12+](https://nodejs.org/)
- [Yarn v1 classic](https://classic.yarnpkg.com/en/) (npm install --global yarn)

To test the website locally, simply run the following commands:
```
yarn install
```
to install all packages required by the website (VuePress v2 and plugins), then
```
yarn docs:dev
```
to build the Markdown files into HTML and start a testing webserver on http://127.0.0.1:8080.

## Building the site

Follow the steps above, but run `yarn docs:build` instead at the final step. This can take considerable time and requires a lot of memory (~11GB). Once complete, the output will be stored at /docs/.vuepress/dist.

You will need to increase the maximum node.js memory allocation. This can be done by setting `NODE_OPTIONS=--max_old_space_size=16384` to set to 16GB.

## Translating

To help translate ios.cfw.guide, please contribute to its [Crowdin project](https://crowdin.com/project/ioscfwguide). Do not PR changes directly to the repository as that will conflict with the translations managed by Crowdin.
