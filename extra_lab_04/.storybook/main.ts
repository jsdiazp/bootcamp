import type { StorybookConfig } from "@storybook/nextjs";
import TsconfigPathPlugin from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  webpack: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        plugins: [...(config.resolve?.plugins ?? []), new TsconfigPathPlugin()],
      },
    };
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
