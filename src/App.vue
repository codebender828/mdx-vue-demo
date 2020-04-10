<template>
  <c-box pos="relative" id="app">
    <c-checkbox size="lg" v-model="isActive" pos="absolute" top="10" right="12">
      Toggle MDX Provider context
    </c-checkbox>
    <c-reset />
    <MDXProvider :components="isActive ? MDXComponents : {}">
      <Home />
    </MDXProvider>
  </c-box>
</template>

<script>
import { CReset, CCheckbox, CBox } from '@chakra-ui/vue';
import { MDXProvider } from 'mdx-vue';
import MDXComponents from '../components/MDXComponents';
import Home from './views/home.mdx';

export default {
  components: {
    CReset,
    Home,
    MDXProvider,
    CBox,
    CCheckbox
  },
  data() {
    return {
      isActive: true,
      MDXComponents
    };
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 5rem;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
