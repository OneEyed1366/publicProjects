// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// * SCSS with global import into all .vue files
function addStyleReesource(rule) {
  // * npm i -D style-resources-loader
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/imports.scss'),
      ],
    });
}
module.exports = {
  // * SCSS-plugin
  // ** npm i -D sass-loader node-sass sass
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => addStyleReesource(config.module.rule('scss').oneOf(type)));
  },
};
