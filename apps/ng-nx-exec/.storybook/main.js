const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,
  core: {
    builder: '@storybook/builder-webpack5',
  },
  stories: [
    ...rootMain.stories,
    '../src/app/**/*.stories.mdx',
    '../src/app/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons],
};
