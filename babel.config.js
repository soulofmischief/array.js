const { alias } = require( './config/alias' )


module.exports = function ( api ) {
  // Cache the returned value forever and don't call this function again.
  api.cache( true )

  const
    env = {
      development: {},
      production: {},
    },

    presets = [
      '@babel/env',
      '@babel/flow',
    ],

    plugins = [
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-transform-destructuring',
      '@babel/plugin-transform-runtime',

      'lodash',
      [ 'module-resolver', { alias }],
    ]

  return {
    env,
    presets,
    plugins,
  }
}
