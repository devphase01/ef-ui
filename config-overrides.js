const { aliasWebpack, aliasJest } = require('react-app-alias');
const { alias } = require('react-app-rewire-alias');

const options = {}; // default is empty for most cases

module.exports.jest = aliasJest(options);

module.exports = aliasWebpack(options);

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@configs': 'src/configs',
    '@hooks': 'src/hooks',
    '@pages': 'src/pages',
    '@styles': 'src/styles',
    '@store': 'src/store',
  })(config);

  return config;
};
