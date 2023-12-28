/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../lib/**/*.mdx',
    '../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../lib/**/stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-controls',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
