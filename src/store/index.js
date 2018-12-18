// Import Vue + extensions
import Vue from 'vue';
import Vuex from 'vuex';

// Import store
import musicKit from './modules/musicKit';
import alerts from './modules/alerts';

// Initialize Vue extensions
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    musicKit,
    alerts
  },
  strict: true
});
