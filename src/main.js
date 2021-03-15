import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
import * as VueGoogleMaps from 'vue2-google-maps'
import VueChatScroll from 'vue-chat-scroll'
Vue.config.productionTip = false

Vue.use(VueChatScroll)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBM_h8gYY7WrE5b2W6YWGfktbzxtxDRis0',
    libraries: 'places', 
  },
})

firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router, 
    vuetify,
    render: h => h(App),
  }).$mount('#app')
});
