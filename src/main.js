import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faImage, faUpload, faArrowCircleUp, faArrowLeft, faSearch, faListUl, faEdit, faChevronRight, faAngleDown ,faMinus, faPlus,faGlassMartiniAlt, faEye , faEyeSlash, faShoppingBag, faBars, faHome, faUtensils, faUserCircle, faInfoCircle, faTasks, faMugHot, faArrowAltCircleRight, faSignOutAlt, faTimesCircle, faCopy} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import store from './store'
import titleMixin from './mixins/titleMixin'
import axios from 'axios'
import VueAxios from 'vue-axios'

library.add(
              faListUl,
              faImage,
              faUpload,
              faArrowCircleUp,
              faArrowLeft,
              faSearch,
              faEdit,
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
              faGlassMartiniAlt,
              faMinus,
              faPlus,
              faArrowAltCircleRight,
              faTwitter,
              faFacebook,
              faInstagram,
              faChevronRight,
              faSignOutAlt,
              faTimesCircle,
              faCopy
            );
Vue.use(VueMaterial);
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios)
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.mixin(titleMixin)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
