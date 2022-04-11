module.exports = {
  root: true,
  env: {
    commonjs: true,
    node: true,
    es2021: true,
    browser: true,
  },
  globals: {
    strapi: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:node/recommended',
    'plugin:jsonc/recommended-with-json',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 13,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  rules: {
    // import
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',

    // common
    'semi': ['error', 'never'],
    'curly': ['error', 'multi-or-nest', 'consistent'],
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'consistent-as-needed'],
    'no-param-reassign': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-constant-condition': 'warn',
    'no-debugger': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-cond-assign': ['error', 'always'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'object-curly-spacing': ['error', 'always'],

    // es6
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'generator-star-spacing': 'off',

    // best-practice
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'off',
    'complexity': ['off', 11],
    'eqeqeq': ['error', 'allow-null'],
    'no-alert': 'warn',
    'no-case-declarations': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-with': 'error',
    'no-void': 'error',
    'no-useless-escape': 'off',
    'vars-on-top': 'error',
    'require-await': 'off',
    'no-return-assign': 'off',
    'operator-linebreak': 'off',

    // node
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-unpublished-import': [
      'error',
      {
        allowModules: ['@strapi/helper-plugin', '@strapi/icons'],
      },
    ],
    'node/no-extraneous-require': [
      'error',
      {
        allowModules: ['@purest/providers', 'react', 'prop-types'],
      },
    ],
    'node/no-extraneous-import': [
      'error',
      {
        allowModules: [
          '@purest/providers',
          'react',
          'prop-types',
          'react-router-dom',
        ],
      },
    ],

    // unicorns
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-exponentiation-operator': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          env: true,
          args: true,
          ProcessEnv: true,
          QueryParams: true,
          ModelProps: true,
          ImportMetaEnv: true,
          getEnv: true,
          props: true,
        },
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          kebabCase: true,
        },
      },
    ],
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/no-array-callback-reference': 'off',

    // eslint-comments
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
  },
  settings: {
    'version': 'latest',
    'import/ignore': ['node_modules'],
    'node': {
      tryExtensions: ['.js', '.json', '.node', '.ts', '.d.ts'],
    },
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
    },
  },
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'quotes': ['error', 'double'],
        'quote-props': ['error', 'always'],
        'comma-dangle': ['error', 'never'],
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'description',
              'keywords',
              'license',
              'repository',
              'funding',
              'author',
              'type',
              'files',
              'exports',
              'main',
              'module',
              'unpkg',
              'bin',
              'scripts',
              'husky',
              'lint-staged',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'devDependencies',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
        ],
      },
    },
  ],
}
