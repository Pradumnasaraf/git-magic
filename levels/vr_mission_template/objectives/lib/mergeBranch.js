// This is an example of how you might use objective validation helpers
// in your own code. You don't have to, but you'll often want to!

function isMerge(testString = '') {
  return testString.toLowerCase() === 'git merge dev';
}

module.exports = {
  isMerge
};
