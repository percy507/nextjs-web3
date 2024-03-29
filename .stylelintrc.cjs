module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-tailwindcss',
    'stylelint-config-prettier', // Make sure this is always the last element in the array.
  ],
  plugins: ['stylelint-order'],
  customSyntax: 'postcss-less',
  rules: {
    'block-no-empty': null,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'color-function-notation': null,
    'alpha-value-notation': 'number',
    'hue-degree-notation': 'number',
    'keyframes-name-pattern': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
