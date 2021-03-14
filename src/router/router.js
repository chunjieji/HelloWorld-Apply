import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello'
import Apply from '@/components/Apply'
import Login from '@/components/Login'
import Manage from '@/components/Manage'


Vue.use(Router);

export default new Router({
  routes:[{
    path:'/',
    name: 'Hello',
    component: Hello,
  },{
    path: '/apply',
    name: 'Apply',
    component: Apply,
  },{
    path: '/login',
    name: 'Login',
    component: Login,
  },{
    path: '/manage',
    name: 'Manage',
    component: Manage,
  }]
})