// Kiểm tra mã: npm run lint
const globals = require('globals');

const rules = {
  'no-unused-vars': ['warn', { args: 'none', caughtErrors: 'none', varsIgnorePattern: '^_' }],
  'no-undef': 'error',
  'no-unreachable': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-empty': ['warn', { allowEmptyCatch: true }],
  'no-redeclare': 'error',
  'no-self-assign': 'error',
  'prefer-const': ['warn', { destructuring: 'all' }],
  eqeqeq: ['warn', 'smart'],
};

module.exports = [
  { ignores: ['dist/**', 'node_modules/**', 'src/renderer/office3d.bundle.js', 'src/renderer/vendor/**'] },
  { files: ['src/*.js', 'test/**/*.js', 'eslint.config.js'], languageOptions: { ecmaVersion: 2023, sourceType: 'commonjs', globals: { ...globals.node } }, rules },
  { files: ['src/office3d/**/*.js'], languageOptions: { ecmaVersion: 2023, sourceType: 'module', globals: { ...globals.browser } }, rules },
  {
    files: ['src/renderer/**/*.js'],
    languageOptions: { ecmaVersion: 2023, sourceType: 'script', globals: { ...globals.browser } },
    rules,
  },
  { files: ['test/**/*.js'], languageOptions: { globals: { ...globals.browser } } },
];
