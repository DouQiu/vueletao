import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

import home from "@/components/tabbar/home.vue";
import mycar from "@/components/tabbar/mycar.vue";
import user from "@/components/tabbar/user.vue";

var router = new VueRouter({
  routes:[
    {path:"/",redirect:"/home"},
    {path:"/home",component:home},
    {path:"/mycar",component:mycar},
    {path:"/user",component:user}
  ]
})

//暴露
export default router;
