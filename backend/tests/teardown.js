const globalTeardown = async () => {
  // Check if any test failed and throw an error if so
  if (global.testResults.numFailedTests > 0) {
    throw new Error('Not all tests passed!');
  }
  else{
    process.exit(0);
  }
};

module.exports = { globalTeardown };
