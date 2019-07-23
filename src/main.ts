import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from './store';
// 重置样式
import 'normalize.css';
// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/global.less';
// 引入SVG
import SvgIcon from 'vue-svgicon';
import '@/icons'
Vue.use(ElementUI);
// 引入SVG
Vue.use(SvgIcon, {
  tagName: 'svg-icon'
});
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
