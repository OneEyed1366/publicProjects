import Vue from 'vue';
import ScrollTo from 'vue-scrollto';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(ScrollTo, {
  duration: 1050,
  offset: -100,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
