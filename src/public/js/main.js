import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import vuetify from './plugins/vuetify';

//importamos vue-router
import VueRouter from 'vue-router';

//importamos nuestros componentes
import ida from './components/ida';

//creamos nuestros componentes
Vue.component('ida', ida);

//uso de vue-router
Vue.use(VueRouter);

//definimos las rutas
const routes = [

  {path:'/ida',component:ida},
  
]

//crearmos el objeto router
const router = new VueRouter({
  routes,
  mode:'history'
})


Vue.config.productionTip = false




new Vue({
  router,
  vuetify,


  render: h => h(App)
}).$mount('#app');
