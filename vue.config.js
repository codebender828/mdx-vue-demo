module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.mdx?$/,
          use: ['babel-loader', 'mdx-vue-loader']
        }
      ]
    }
  }
};
