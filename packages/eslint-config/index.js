module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
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
  }
}
