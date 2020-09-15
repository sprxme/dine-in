import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown , faGlassMartiniAlt, faEye , faEyeSlash, faShoppingBag, faBars, faHome, faUtensils, faUserCircle, faInfoCircle, faTasks, faMugHot} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(
              faEye,
              faEyeSlash,
              faBars,
              faShoppingBag,
              faHome, 
              faUtensils, 
              faUserCircle, 
              faAngleDown,
              faInfoCircle,
              faTasks,
              faMugHot,
              faGlassMartiniAlt
            );
Vue.use(VueMaterial);
Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
