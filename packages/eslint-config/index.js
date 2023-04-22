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
    project: ['tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module'
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
    ]
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
}
