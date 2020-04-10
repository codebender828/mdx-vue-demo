import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Chakra, {
  CThemeProvider,
  CReset,
  CColorModeProvider
} from '@chakra-ui/vue';
import { MDXProvider } from 'mdx-vue';
import MDXComponents from '../components/MDXComponents';

Vue.use(Chakra);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h =>
    h(CThemeProvider, [
      h(
        MDXProvider,
        {
          props: {
            components: MDXComponents
          }
        },
        [h(CReset), h(CColorModeProvider, [h(App)])]
      )
    ])
}).$mount('#app');
