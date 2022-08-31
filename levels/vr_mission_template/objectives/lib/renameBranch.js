function isRename(testString = '') {
    return testString.toLowerCase() === 'git branch -m dev';
  }

module.exports = {  isRename };