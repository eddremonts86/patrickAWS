/* eslint-disable no-console */
import Vue from "vue";
import "./plugins/axios";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";

/*
import { prototype } from 'aws-sdk/clients/servicediscovery';
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
Vue.use(AmplifyPlugin, AmplifyModules);

*/

Vue.config.productionTip = false;

let httpConfg = {
  headers: {
    Authorization:'eyJraWQiOiJjd1RqelZOazhiVkxWajkyMWFJOUZSbUoyZkk2Q0lNVlgrZGZVMXFEUFlFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlMDJjMTRkYS00ZmRhLTQ1NzMtOTY1Yi0yN2UyNmJlZGZiMTkiLCJjb2duaXRvOmdyb3VwcyI6WyJldS1jZW50cmFsLTFfY1dBT0Flb0RUX0dvb2dsZSJdLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNTQ1OTA2NDM5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9jV0FPQWVvRFQiLCJleHAiOjE1NDU5MTAwMzksImlhdCI6MTU0NTkwNjQzOSwidmVyc2lvbiI6MiwianRpIjoiMDdjMzJjMmQtOGIyMi00OTljLWJlOWYtODBhM2I2YTM0MjNhIiwiY2xpZW50X2lkIjoiMnZoaGRvbTVobWxhdm1tdTVidDg4aTdhdmMiLCJ1c2VybmFtZSI6Ikdvb2dsZV8xMTU0MDY5NjU4MTgwOTYxNDE4MTYifQ.YU2QUoBp8B8VW1wtYPWxUfHazVbUvDkN-0X55ZUKeSARPzG7qUtAFYfHbSCihWPzmnJWJWVHhwUJR0jUIaEjtbRYJfTb1qiQ26EnW-B5QIkTvlu5b5c0zAeRHbuzRpDCIym6rTMJ8xqmdpfsC7Y748MtqJdUBD1UCq93BJhteBRQJ-BFEyhXph2SSvkDmEvdO5Dj8AdPY5tcg6vQe7t8x4IedCIxFx-KF0DxFMfX2AuXKcLrY45x411VPBgLtRCdIDy8RcuhFn6evqTw_-egfM4QnGV0he7DcGmPAjwX82OkBy5FQg7o_8OANh8uCagHd3IYaqLJoUwIg-gy71aLnw',
     "content-type": "application/json"
  }
};

Vue.prototype.$http = Axios;
Vue.prototype.$httpConfg = httpConfg;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
