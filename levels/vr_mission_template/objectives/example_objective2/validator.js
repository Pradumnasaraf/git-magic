const { isMerge } = require("../lib/mergeBranch");

module.exports = async function (helper) {
  const {answer1} = helper.validationFields;

  if (!answer1 || !isMerge(answer1)) {
    return helper.fail(`
      Might be merge keyword is missing or you have entered wrong branch name.  
    `);
  }

  helper.success(`
    Hooray! You did it!
  `);
};
