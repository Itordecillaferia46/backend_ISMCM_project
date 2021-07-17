import Vue from "vue";
import VueRouter from 'vue-router'

import inicio from './components/inicio'

Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      name: "inicio",
      component: inicio,
    },
    {
        path: "/ida",
        name: "ida",
        component: ida,

        children:[
            {
            path:'/contenido',
            name:'contenido',
            component: contenido,
          },
          
        ]
          },
      ];
  
  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });
  
  export default router;