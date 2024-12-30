import { defineConfig } from '@rsbuild/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginNodePolyfill } from '@rsbuild/plugin-node-polyfill';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginVueJsx } from '@rsbuild/plugin-vue-jsx';
import path from 'node:path';
const { name } = require('./package');
function resolve(dir) {
  return path.join(__dirname, dir);
}

export default defineConfig({
  dev: {
    assetPrefix: '/',
    client: {
      host: 'localhost',
      port: 7105,
      protocol: 'ws',
    },
    hmr: true,
  },
  html: {
    template: './public/index.html',
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    host: '0.0.0.0',
    port: 7105,
  },
  output: {
    assetPrefix: '/vue3/',
  },
  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
    pluginVue(),
    pluginVueJsx(),
    pluginLess({
      lessLoaderOptions: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    }),
    pluginNodePolyfill(),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  tools: {
    rspack: {
      optimization: {
        splitChunks: {
          chunks: 'all',
        },
        usedExports: true,
      },
      output: {
        // 将你的 library 打包成 umd 库格式
        libraryTarget: 'umd', // 暂时关闭，原因见 vue.config.js 注释
        // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
        chunkLoadingGlobal: `webpackJsonp_${name}`,
        // 微应用的包名，这里与主应用中注册的微应用名称一致
        library: `${name}_[name]`,
      },
    },
  },
});
