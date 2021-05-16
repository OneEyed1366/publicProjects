import Vue from 'vue';
import {
  Swiper as SwiperClass, Navigation, Pagination, Autoplay, EffectFade,
} from 'swiper/core';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
import App from './App.vue';
import router from './router';
import store from './store';

import 'swiper/swiper-bundle.css';

SwiperClass.use([Navigation, Pagination, Autoplay, EffectFade]);

Vue.config.productionTip = false;
Vue.use(getAwesomeSwiper(SwiperClass));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
