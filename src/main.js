import Vue from "vue";
import App from "./App.vue";
import SuiVue from "semantic-ui-vue";
import "semantic-ui-css/semantic.min.css";

Vue.config.productionTip = false;

Vue.use(SuiVue);
new Vue({
  render: h => h(App)
}).$mount("#app");
