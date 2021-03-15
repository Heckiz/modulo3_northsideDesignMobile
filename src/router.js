import firebase from 'firebase';
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import GameInfo from './views/GameInfo.vue'
import Gallery from './views/Gallery.vue'
import Chat from './views/Chat.vue'
import usernameLogin from './views/usernameLogin.vue'
import Login from './views/Login'
import SignUp from './views/SignUp'

Vue.use(Router)

const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gameinfo',
      name: 'gameinfo',
      component: GameInfo
    },{
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/usernameLogin',
      name: 'usernameLogin',
      component: usernameLogin,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.name) {
          next();
        } else {
          next({name: 'usernameLogin'});
        }
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next();
  else next();
});

export default router;