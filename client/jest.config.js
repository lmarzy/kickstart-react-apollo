module.exports = {
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(@rs-ui)/)'],
  testMatch: ['<rootDir>/**/**/*.(test|spec).(ts|tsx|js)'],
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
  ],
};
