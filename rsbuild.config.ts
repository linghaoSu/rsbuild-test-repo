import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginSass } from '@rsbuild/plugin-sass';
export default defineConfig({
  plugins: [
    pluginVue(),
    pluginSass()
  ],
  output: {
    assetPrefix: './',
    distPath: {
      js: 'js',
      css: 'css',
      font: 'fonts',
    },
  },
  dev: {
    writeToDisk: true,
    assetPrefix: './'
  }
});
