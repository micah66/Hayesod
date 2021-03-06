module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'all',
  tabWidth: 4,
  bracketSpacing: true,
  overrides: [
      {
          files: ['*.yaml', '*.yml', '*.json'],
          options: {
              tabWidth: 2,
          },
      },
  ],
};
