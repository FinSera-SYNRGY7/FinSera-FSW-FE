/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
      
      // mocking assests and styling
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/mocks/fileMock.js',
    '^.+\\.(css|less|scss|sass)$': '<rootDir>/tests/mocks/styleMock.js',
    /* mock models and services folder */
    '(assets|models|services)': '<rootDir>/tests/mocks/fileMock.js',
  },
   // to obtain access to the matchers.
  setupFilesAfterEnv: ['./tests/Login.test.jsx'],
      
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
};