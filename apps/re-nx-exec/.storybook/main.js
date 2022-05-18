const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  stories: [
    ...rootMain.stories,
    '../src/app/**/*.stories.mdx',
    '../src/app/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
};
