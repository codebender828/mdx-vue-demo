import { CCode, CHeading, CAlert, CBox } from '@chakra-ui/vue';
import 'prismjs';
import VuePrismEditor from 'vue-prism-editor';
import 'prism-theme-night-owl';
import 'vue-prism-editor/dist/VuePrismEditor.css';

const MDXComponents = {
  inlineCode: props => ({
    name: 'InlineCode',
    render() {
      return (
        <CCode variantColor="yellow" fontSize="0.84em" {...props}>
          {this.$slots.default}
        </CCode>
      );
    }
  }),
  h1: props => ({
    name: 'Heading',
    render() {
      return (
        <CHeading as="h1" mb="3" size="xl" my="1em" {...props}>
          {this.$slots.default}
        </CHeading>
      );
    }
  }),
  blockquote: props => ({
    name: 'BlockQuote',
    render() {
      return (
        <CAlert
          rounded="md"
          my="3"
          status="info"
          variant="left-accent"
          {...props}
        >
          {this.$slots.default}
        </CAlert>
      );
    }
  }),
  // eslint-disable-next-line
  code: props => ({
    name: 'CodeBlock',
    render() {
      const code = this.$slots.default[0].text;
      return (
        <CBox rounded="md" overflow="hidden" fontSize="0.83em">
          <VuePrismEditor code={code} language="js" />
        </CBox>
      );
    }
  }),
  pre: props => ({
    name: 'Box',
    render() {
      return (
        <CBox my="3" {...props}>
          {this.$slots.default}
        </CBox>
      );
    }
  })
};

export default MDXComponents;
