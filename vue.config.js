module.exports = {
  pwa: {
    name: 'Memory of kougakusai',
    appleMobileWebAppCapable: 'yes',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    }
  },
  chainWebpack: config => {
    //config.plugins.delete('prefetch');
    //config.plugins.delete('preload');
  }
};