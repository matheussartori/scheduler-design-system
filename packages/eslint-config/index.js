module.exports = {
  env: {
    'browser': true,
    'es2021': true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  parserOptions: {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'project': ['tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'indent': [
      'error',
      2
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'arrow-parens': [
      0
    ],
    'space-before-function-paren': [
      'error',
      'never'
    ],
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
}
