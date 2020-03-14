import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo);

Vue.use(BootstrapVue);

import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://s3-ap-northeast-1.amazonaws.com/takanawa2019.shinbunbun.info/public/NotFound.jpg',
  loading: 'https://s3-ap-northeast-1.amazonaws.com/takanawa2019.shinbunbun.info/public/NowLoading.jpg',
  attempt: 1
});

import Amplify, * as AmplifyModules from 'aws-amplify';
import {
  AmplifyPlugin
} from 'aws-amplify-vue';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

Vue.use(AmplifyPlugin, AmplifyModules);

import jQuery from 'jquery';
//import './registerServiceWorker';
global.jquery = jQuery;
global.$ = jQuery;
window.$ = window.jQuery = require('jquery');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');