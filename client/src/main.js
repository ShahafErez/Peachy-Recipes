import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import App from "./App.vue";

import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

import {
  AlertPlugin,
  BootstrapVue,
  BootstrapVueIcons,
  ButtonPlugin,
  CardPlugin,
  FormGroupPlugin,
  FormInputPlugin,
  FormPlugin,
  FormSelectPlugin,
  LayoutPlugin,
  NavbarPlugin,
  ToastPlugin,
} from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import Vuelidate from "vuelidate";
[
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  BootstrapVue,
  BootstrapVueIcons,
].forEach((x) => Vue.use(x));
Vue.use(Vuelidate);

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

// Define global variables
Vue.prototype.$domainPath = process.env.DOMAIN_PATH || "http://localhost:3000";

const shared_data = {
  username: localStorage.username,
  user_id: localStorage.user_id,
  login(username, user_id) {
    localStorage.setItem("username", username);
    this.username = username;
    localStorage.setItem("user_id", user_id);
    this.user_id = user_id;
    let temp = { 0: [0, 0] };
    sessionStorage.setItem("making_progress", JSON.stringify(temp));
  },
  logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("last_search_str");
    localStorage.removeItem("user_id");
    sessionStorage.removeItem("making_progress");
    this.username = undefined;
    this.user_id = undefined;
  },
};

new Vue({
  router,
  data() {
    return {
      store: shared_data,
    };
  },
  methods: {
    toast(title, content, variant = null, append = false) {
      this.$bvToast.toast(`${content}`, {
        title: `${title}`,
        toaster: "b-toaster-top-center",
        variant: variant,
        solid: true,
        appendToast: append,
        autoHideDelay: 3000,
      });
    },
  },
  render: (h) => h(App),
}).$mount("#app");
