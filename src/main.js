import * as Vue from "vue";
import * as VueRouter from 'vue-router';
import "./style.css";
import App from "./App.vue";
import Blogview from "./components/blogview.vue";
import Blogpage from "./components/blogpage.vue";

const router =  VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
  routes: [
    {path: '/', component: Blogview},
    {path:'/blogpage',component: Blogpage}
  ]
})

const app = Vue.createApp(App)

app.use(router);

app.mount('#app');
