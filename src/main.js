import Vue from "vue";
import vuetify from '@/plugins/vuetify' // path to vuetify export

import store from "./store";
import router from "./router";

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
