/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../lib/**/*.mdx",
    "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../lib/**/stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-controls",
  ],
  // Logos, favicons and fonts for the branded manager UI (manager.js)
  staticDirs: [{ from: "../node_modules/@somenergia/brand", to: "/brand" }],
  framework: {
    name: "@storybook/react-vite",
    options: {
      // Avoid deferred Docs navigation in Firefox with React 18 concurrent roots.
      // Otherwise the preview can stay stale until an interaction inside it.
      legacyRootApi: true,
    },
  },
  docs: {
    autodocs: "tag",
  },
}
export default config
