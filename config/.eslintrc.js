const { alias } = require( './alias' )


module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:flowtype/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended'
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2018
  },
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'plugins': [
    'babel',
    'flowtype',
    'import',
    'promise'
  ],
  'rules': {
    'func-names': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': [
      'error',
      {}
    ],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'ignoredNodes': [
          'ConditionalExpression',
          'TemplateLiteral'
        ]
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'max-len': [
      1,
      {
        'code': 80,
        'comments': 80,
        'ignoreUrls': true
      }
    ],
    'max-statements': [
      'warn',
      40
    ],
    'no-console': 1,
    'no-sequences': 2,
    'no-trailing-spaces': 0,
    'no-use-before-define': [
      'off',
      {
        'functions': false,
        'classes': false
      }
    ],
    'quotes': [
      'error',
      'single',
      {
        'allowTemplateLiterals': true,
        'avoidEscape': true
      }
    ],
    'semi': 0,
    'space-in-parens': [
      1,
      'always',
      {
        'exceptions': [
          "{}",
          "()",
          "[]",
          'empty'
        ]
      }
    ],
    'babel/new-cap': 1,
    'babel/object-curly-spacing': [
      0,
      'always',
      {
        'arraysInObjects': false,
        'objectsInObjects': false
      }
    ],
    'babel/no-invalid-this': 0,
    'babel/semi': [
      1,
      'never'
    ]
  },
  'settings': {
    'import/ignore': [
      'node_modules'
    ],

    'import/resolver': {
      alias: {
        map: Object.entries( alias ),
        extensions: ['.js', '.json']
      },
    }
  },
}
