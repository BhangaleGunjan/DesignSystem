import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "staticDirs": [
    "..\\public"
  ]
};
export default config;

// module.exports = {
//   webpackFinal: async (config) => {
//     config.module.rules.push({
//       test: /\.css$/,
//       use: [
//         'style-loader',
//         'css-loader',
//         'postcss-loader', // This line is a must!
//       ],
//     });
//     return config;
//   },
// };
