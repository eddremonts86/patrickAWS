/* eslint-disable no-console */
import Vue from "vue";
import "./plugins/axios";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

Vue.config.productionTip = false;
/*------------------------------------------------------------------------------------Store Config-------------------------------------------------------------------------------------------------*/
var currentUrl = window.location.href;
var accesstoken = currentUrl.split('access_token=').pop().split('&')[0];
if (accesstoken  &&  accesstoken != currentUrl)  {
    localStorage.setItem('usertoken', accesstoken);
}
console.log(localStorage.getItem('usertoken'))

/*-----------------------------------------------------------------------------------Axios config --------------------------------------------------------------------------------------------------*/
let httpConfg = {
    headers: {
        Authorization: localStorage.getItem('usertoken'),
        "content-type": "application/json"
    }
};

console.log(httpConfg)
let apiUrlBase = "https://bsmjabxgm0.execute-api.eu-central-1.amazonaws.com/dev-xavier";
Vue.prototype.$http = Axios;
Vue.prototype.$urlBase = apiUrlBase;
Vue.prototype.$httpConfg = httpConfg;
