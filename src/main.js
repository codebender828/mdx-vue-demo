import Vue from 'vue';
import App from './App.vue';
import Chakra, { CThemeProvider, CColorModeProvider } from '@chakra-ui/vue';

Vue.use(Chakra);

Vue.config.productionTip = false;

new Vue({
  render: h => h(CThemeProvider, [h(CColorModeProvider, [h(App)])])
}).$mount('#app');
