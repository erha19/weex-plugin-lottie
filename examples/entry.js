import Vue from 'vue';

import weex from 'weex-vue-render';

import WXLottie from '../src/index';

weex.init(Vue);

weex.install(WXLottie)

const App = require('./index.vue');
App.el = '#root';
new Vue(App);
