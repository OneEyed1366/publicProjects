/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
// * SCSS with global import into all .vue files
function addStyleResource(rule) {
  // * npm i -D style-resources-loader
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/imports.styl'),
      ],
    });
}
module.exports = {
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => addStyleResource(config.module.rule('stylus').oneOf(type)));
  },
};
