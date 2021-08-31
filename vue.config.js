module.exports = {
    css: {
        loaderOptions: {
          // pass options to sass-loader
          sass: {
            // @/ is an alias to src/
            // so this assumes you have a file named `src/variables.scss`
            additionalData: `
              @import "@/assets/scss/abstracts/_variables.scss";
              @import "@/assets/scss/abstracts/_mixins.scss";
              @import "@/assets/scss/base/_z-index.scss";
            `
          }
        }
    },
};