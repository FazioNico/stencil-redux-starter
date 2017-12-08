exports.config = {
  bundles: [
    { components: ['my-app', 'app-login'] },
    { components: ['app-home'] },
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
