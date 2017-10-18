import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home';
import Artist from './Artist';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/artists/:id', component: Artist}
  ]
})
