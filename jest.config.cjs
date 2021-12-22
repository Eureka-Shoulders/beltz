module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
  roots: ['src'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // That one tells Jest to use ts-jest when dealing with TypeScript files
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/index.ts'],
};
