module.exports = {
  publicPath: '/',
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      scss: {
        // eslint-disable-next-line
        prependData: `@import "~@/scss/variables.scss";`,
      },
    },
  },
};
