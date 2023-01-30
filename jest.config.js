module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.css$": "<rootDir>/__mocks__/styleMock.js"
  }
};
