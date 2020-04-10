export default {
  props: {
    components: Object,
    required: true
  },
  provide() {
    return {
      $mdxComponents: () => this.components
    };
  },
  render() {
    return <div>{this.$slots.default}</div>;
  }
};
