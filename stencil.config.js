exports.config = {
  bundles: [
    { components: ['my-app', 'app-home'] },
    { components: ['app-login'] },
    { components: ['app-profile'] }
  ],
  collections: [
    { name: '@stencil/router' },
    { name: '@stencil/redux' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
