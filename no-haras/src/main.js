import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
// import vueResource from 'vue-resource'
import routes from './router'  
Vue.use(vueRouter)
// Vue.use(vueResource)
const router=new vueRouter({
  routes:routes,
  mode:'history'
});
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
